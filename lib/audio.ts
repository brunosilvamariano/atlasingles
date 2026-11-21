// Plays English audio for phrases and words.
// 1. Uses the recorded MP3 listed in /audio/manifest.json (made by `npm run audio:generate`).
// 2. Falls back to the browser's American English voice when no recording exists yet.

export type AudioManifest = {
    version: number;
    phrases: Record<string, { normal?: string; slow?: string; text?: string }>;
    words: Record<string, string>;
};

type PlayOptions = { key?: string; word?: boolean; slow?: boolean; voice?: number };

let manifestRequest: Promise<AudioManifest | null> | null = null;
let current: HTMLAudioElement | null = null;
let generation = 0;

export const phraseKey = (lessonId: string, index: number) => `${lessonId}#${index}`;
export const wordKey = (word: string) => word.toLowerCase().replace(/[’]/g, "'").replace(/[.,!?]/g, '');

function loadManifest() {
    if (!manifestRequest)
        manifestRequest = fetch('/audio/manifest.json', { cache: 'no-cache' })
            .then(r => (r.ok ? r.json() as Promise<AudioManifest> : null))
            .catch(() => null);
    return manifestRequest;
}

export function audioSupported() {
    return typeof window !== 'undefined' && (typeof Audio !== 'undefined' || 'speechSynthesis' in window);
}

export function stopAudio() {
    generation++;
    if (current) { current.pause(); current = null; }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
}

// Natural/neural voices sound far better than the old robotic ones, so they come first.
const preferred = /(natural|neural|online|google us|samantha|aria|jenny|ava|andrew|emma|brian|guy|michelle|steffan|allison|evan|nicky|zoe)/i;

function voices(): Promise<SpeechSynthesisVoice[]> {
    // Any English voice is acceptable, American first. A Portuguese voice reading English would teach the wrong sounds.
    const pick = () => window.speechSynthesis.getVoices()
        .filter(v => /^en[-_]/i.test(v.lang))
        .sort((a, b) => Number(/^en[-_]US/i.test(b.lang)) - Number(/^en[-_]US/i.test(a.lang)) || Number(preferred.test(b.name)) - Number(preferred.test(a.name)) || Number(b.localService) - Number(a.localService));
    const now = pick();
    if (now.length) return Promise.resolve(now);
    return new Promise(resolve => {
        const done = () => { window.speechSynthesis.removeEventListener('voiceschanged', done); resolve(pick()); };
        window.speechSynthesis.addEventListener('voiceschanged', done);
        setTimeout(done, 1200);
    });
}

export type PlayResult = 'ok' | 'no-voice';

async function speak(text: string, slow: boolean, voiceIndex: number, mine: number): Promise<PlayResult> {
    if (!('speechSynthesis' in window)) return 'no-voice';
    const list = await voices();
    if (mine !== generation) return 'ok';
    if (!list.length) return 'no-voice';
    // Use two different voices when the browser offers them, so the two speakers sound different.
    const naturals = list.filter(v => preferred.test(v.name));
    const pool = naturals.length >= 2 ? naturals : list;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    if (pool.length) utterance.voice = pool[voiceIndex % pool.length];
    utterance.rate = slow ? 0.72 : 0.96;
    await new Promise<void>(resolve => {
        utterance.onend = () => resolve();
        utterance.onerror = () => resolve();
        window.speechSynthesis.speak(utterance);
    });
    return 'ok';
}

function playFile(url: string, slowFallback: boolean) {
    return new Promise<PlayResult>(resolve => {
        const audio = new Audio(url);
        current = audio;
        // No slow recording: slow the normal one down and keep the pitch.
        if (slowFallback) { audio.playbackRate = 0.75; audio.preservesPitch = true; }
        audio.onended = () => resolve('ok');
        audio.onerror = () => resolve('ok');
        audio.play().catch(() => resolve('ok'));
    });
}

async function playOne(text: string, options: PlayOptions, mine: number): Promise<PlayResult> {
    const manifest = await loadManifest();
    if (mine !== generation) return 'ok';
    if (options.word) {
        const url = manifest?.words[wordKey(text)];
        return url ? playFile(url, !!options.slow) : speak(text, !!options.slow, 0, mine);
    }
    const found = options.key ? manifest?.phrases[options.key] : undefined;
    // A recording made for an older version of the sentence is ignored.
    const entry = found && (!found.text || found.text === text) ? found : undefined;
    const url = options.slow ? entry?.slow || entry?.normal : entry?.normal;
    if (url) return playFile(url, !!options.slow && !entry?.slow);
    return speak(text, !!options.slow, options.voice || 0, mine);
}

/** Plays one phrase or word. Any audio already playing stops first. */
export async function play(text: string, options: PlayOptions = {}): Promise<PlayResult> {
    stopAudio();
    const result = await playOne(text, options, generation);
    if (result === 'no-voice') notifyNoVoice();
    return result;
}

// Lets the lesson show how to install an English voice when none exists.
const noVoiceListeners = new Set<() => void>();
export function onNoVoice(listener: () => void) { noVoiceListeners.add(listener); return () => { noVoiceListeners.delete(listener); }; }
function notifyNoVoice() { noVoiceListeners.forEach(l => l()); }

/** Plays a list in order (a whole dialogue). `onStep` tells which item is playing; -1 at the end. */
export async function playSequence(items: { text: string; key?: string; voice?: number }[], onStep: (index: number) => void, slow = false) {
    stopAudio();
    const mine = generation;
    for (let i = 0; i < items.length; i++) {
        if (mine !== generation) return;
        onStep(i);
        if (await playOne(items[i].text, { key: items[i].key, voice: items[i].voice, slow }, mine) === 'no-voice') { notifyNoVoice(); onStep(-1); return; }
        if (mine !== generation) return;
        await new Promise(r => setTimeout(r, 350));
    }
    if (mine === generation) onStep(-1);
}
