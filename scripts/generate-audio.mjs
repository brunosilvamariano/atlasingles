// Generates one MP3 per phrase (normal and slow) and per word with the ElevenLabs API.
//
//   npm run audio:generate -- --dry-run        shows how many characters and the estimated cost
//   npm run audio:generate -- --limit=10       generates only the first 10 phrases (to test voices)
//   npm run audio:generate                     generates everything that is missing
//   options: --no-slow  --no-words  --force (regenerate even if the file exists)
//
// Needs ELEVENLABS_API_KEY in the environment or in a local .env.audio file (never commit it).
// Files go to public/audio/ and public/audio/manifest.json tells the app which file belongs to which phrase.
// A file name is a hash of voice + model + speed + text, so changing a phrase only regenerates that phrase.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { lessons } from '../lib/curriculum.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'audio');
const args = new Set(process.argv.slice(2).filter(a => !a.startsWith('--limit=')));
const limit = Number((process.argv.find(a => a.startsWith('--limit=')) || '').split('=')[1]) || Infinity;
const dryRun = args.has('--dry-run'), withSlow = !args.has('--no-slow'), withWords = !args.has('--no-words'), force = args.has('--force');
const config = JSON.parse(readFileSync(join(root, 'scripts', 'audio-voices.json'), 'utf8'));
const SLOW = 0.75;

if (existsSync(join(root, '.env.audio')))
    for (const line of readFileSync(join(root, '.env.audio'), 'utf8').split(/\r?\n/)) {
        const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
        if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
    }
const apiKey = process.env.ELEVENLABS_API_KEY;
const model = process.env.ELEVENLABS_MODEL || config.model;

// Two speakers in the same lesson never share a voice.
function voicesFor(lesson) {
    const roles = [...new Set(lesson.phrases.map(p => p.role).filter(Boolean))];
    const map = new Map();
    roles.forEach((role, i) => {
        let v = config.roles[role] || (i % 2 ? config.default_b : config.default_a);
        if ([...map.values()].includes(v)) v = v === config.default_a ? config.default_b : config.default_a;
        map.set(role, v);
    });
    return (p, i) => map.get(p.role) || (i % 2 ? config.default_b : config.default_a);
}
const fileName = (voice, speed, text) => createHash('sha1').update([voice, model, speed, text].join('|')).digest('hex').slice(0, 20) + '.mp3';

const jobs = [], manifest = { version: 1, generatedAt: new Date().toISOString(), model, phrases: {}, words: {} };
let phraseCount = 0;
for (const lesson of lessons) {
    const voiceOf = voicesFor(lesson);
    lesson.phrases.forEach((p, i) => {
        if (phraseCount >= limit) return;
        phraseCount++;
        const voice = voiceOf(p, i), key = `${lesson.id}#${i}`;
        const normal = fileName(voice, 1, p.en);
        jobs.push({ text: p.en, voice, speed: 1, file: normal });
        manifest.phrases[key] = { normal: '/audio/' + normal };
        if (withSlow) {
            const slow = fileName(voice, SLOW, p.en);
            jobs.push({ text: p.en, voice, speed: SLOW, file: slow });
            manifest.phrases[key].slow = '/audio/' + slow;
        }
    });
}
if (withWords && limit === Infinity) {
    const words = new Set(lessons.flatMap(l => l.phrases.flatMap(p => p.words.map(w => w[0].toLowerCase().replace(/[’]/g, "'").replace(/[.,!?]/g, '')))));
    for (const w of words) {
        if (!w) continue;
        const f = fileName(config.words, 1, w);
        jobs.push({ text: w, voice: config.words, speed: 1, file: f });
        manifest.words[w] = '/audio/' + f;
    }
}

const todo = jobs.filter(j => force || !existsSync(join(outDir, j.file)));
const chars = todo.reduce((n, j) => n + j.text.length, 0);
console.log(`${jobs.length} arquivos no total; ${todo.length} a gerar; ${chars.toLocaleString('pt-BR')} caracteres.`);
console.log(`Custo estimado na tabela da API (US$ 0,10 por 1.000 caracteres): US$ ${(chars / 10000).toFixed(2)}.`);
if (dryRun) process.exit(0);
if (!apiKey) {
    console.error('\nFalta ELEVENLABS_API_KEY. Crie o arquivo .env.audio com a linha:\nELEVENLABS_API_KEY=sua-chave\n');
    process.exit(1);
}

mkdirSync(outDir, { recursive: true });
async function synth(job, attempt = 1) {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${job.voice}?output_format=mp3_44100_128`, {
        method: 'POST',
        headers: { 'xi-api-key': apiKey, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
        body: JSON.stringify({ text: job.text, model_id: model, voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: job.speed } }),
    });
    if (res.status === 429 && attempt < 6) {
        await new Promise(r => setTimeout(r, 2000 * attempt));
        return synth(job, attempt + 1);
    }
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    writeFileSync(join(outDir, job.file), Buffer.from(await res.arrayBuffer()));
}
let done = 0, failed = 0;
const queue = todo.slice();
async function worker() {
    for (let job = queue.shift(); job; job = queue.shift()) {
        try { await synth(job); done++; }
        catch (e) { failed++; console.error(`Falhou: "${job.text}" → ${e.message.slice(0, 200)}`); }
        if ((done + failed) % 25 === 0) console.log(`${done + failed}/${todo.length}…`);
    }
}
await Promise.all(Array.from({ length: 3 }, worker));
// Only list files that exist, so the app falls back to the browser voice for anything missing.
for (const [k, v] of Object.entries(manifest.phrases)) {
    if (v.slow && !existsSync(join(root, 'public', v.slow))) delete v.slow;
    if (!existsSync(join(root, 'public', v.normal))) delete manifest.phrases[k];
}
for (const [k, v] of Object.entries(manifest.words)) if (!existsSync(join(root, 'public', v))) delete manifest.words[k];
const previous = existsSync(join(outDir, 'manifest.json')) ? JSON.parse(readFileSync(join(outDir, 'manifest.json'), 'utf8')) : null;
if (limit !== Infinity && previous) {
    manifest.phrases = { ...previous.phrases, ...manifest.phrases };
    manifest.words = { ...previous.words, ...manifest.words };
}
writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest));
console.log(`Pronto: ${done} gerados, ${failed} falharam. Manifesto com ${Object.keys(manifest.phrases).length} falas e ${Object.keys(manifest.words).length} palavras.`);
if (failed) process.exitCode = 1;
