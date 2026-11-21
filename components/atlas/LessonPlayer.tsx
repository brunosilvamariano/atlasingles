'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { X, ArrowRight, ArrowLeft, Check, RotateCcw, Lightbulb, MessageCircle, PenLine, CheckCircle2, Volume2, Snail, Headphones, Square, Puzzle, Ear, ListChecks } from 'lucide-react';
import { levelLabel } from '../../lib/levels';
import type { Lesson } from '../../lib/curriculum';
import { play, playSequence, stopAudio, phraseKey, onNoVoice } from '../../lib/audio';
import SceneIcon from './SceneIcon';
import Spoken, { SpokenLegend } from './Spoken';
// Contractions and full forms count as the same answer: "I'm tired" = "I am tired".
const expandContractions = (s: string) => s
    .replace(/\bcan't\b/g, 'cannot').replace(/\bwon't\b/g, 'will not').replace(/\bcan not\b/g, 'cannot')
    .replace(/n't\b/g, ' not')
    .replace(/\blet's\b/g, 'let us').replace(/\bi'm\b/g, 'i am')
    .replace(/\b(it|that|what|there|he|she|here|where|how|who)'s\b/g, '$1 is')
    .replace(/'re\b/g, ' are').replace(/'ll\b/g, ' will').replace(/'ve\b/g, ' have').replace(/'d\b/g, ' would');
const normalize = (s: string) => expandContractions(s.toLowerCase().replace(/[’‘]/g, "'")).replace(/[.,!?]/g, '').trim().replace(/\s+/g, ' ');
const clean = (w: string) => w.replace(/[.,!?]/g, '');
type Phase = 'learn' | 'write' | 'listen' | 'build' | 'gap';
const practiceTabs: { id: Phase; label: string; icon: typeof PenLine }[] = [
    { id: 'write', label: 'Escrever', icon: PenLine },
    { id: 'listen', label: 'Ditado', icon: Ear },
    { id: 'build', label: 'Montar', icon: Puzzle },
    { id: 'gap', label: 'Lacuna', icon: ListChecks },
];
const common = new Set(['a', 'an', 'the', 'i', 'you', 'is', 'are', 'am', 'to', 'it', 'of', 'in', 'on', 'at', 'and', 'or', 'but', 'my', 'your', 'we', 'he', 'she', 'they', 'me', 'do', 'be', 'so', 'for', 'with', 'this', 'that']);
// Shuffle with a fixed seed so tiles keep their order while the learner works on one phrase.
function shuffled<T>(items: T[], seed: number) {
    const out = items.slice();
    let s = seed * 9301 + 49297;
    for (let i = out.length - 1; i > 0; i--) {
        s = (s * 9301 + 49297) % 233280;
        const j = Math.floor((s / 233280) * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
}
export default function LessonPlayer({ active, onClose, onComplete }: {
    active: Lesson;
    onClose: () => void;
    onComplete: () => void;
}) {
    const [step, setStep] = useState(0), [phase, setPhase] = useState<Phase>('learn'), [answer, setAnswer] = useState(''), [feedback, setFeedback] = useState(''), [hint, setHint] = useState(false);
    const [noVoice, setNoVoice] = useState(false);
    useEffect(() => onNoVoice(() => setNoVoice(true)), []);
    const [built, setBuilt] = useState<number[]>([]), [choice, setChoice] = useState(''), [speaking, setSpeaking] = useState(-1), [listened, setListened] = useState(false);
    const dialog = useRef<HTMLElement>(null), closeButton = useRef<HTMLButtonElement>(null), workspace = useRef<HTMLElement>(null);
    const phrase = active.phrases[step];
    const correct = feedback === 'correct';
    const last = step === active.phrases.length - 1;
    const tokens = useMemo(() => phrase.words.map(w => w[0]), [phrase]);
    const tiles = useMemo(() => shuffled(tokens.map((t, i) => ({ t, i })), step + active.id.length), [tokens, step, active.id]);
    // Lacuna: hide the most meaningful word and offer it among words from the same lesson.
    const gap = useMemo(() => {
        const ranked = tokens.map((t, i) => ({ t: clean(t), i })).filter(x => !common.has(x.t.toLowerCase()) && x.t.length > 1).sort((a, b) => b.t.length - a.t.length);
        const target = ranked[0] || { t: clean(tokens[0]), i: 0 };
        const inPhrase = new Set(tokens.map(t => clean(t).toLowerCase()));
        const pool = Array.from(new Map(active.phrases.flatMap(p => p.words.map(w => clean(w[0]))).filter(w => !inPhrase.has(w.toLowerCase()) && !common.has(w.toLowerCase()) && w.length > 1).map(w => [w.toLowerCase(), w])).values());
        const options = shuffled([target.t, ...shuffled(pool, step + 3).slice(0, 3)], step + 7);
        return { index: target.i, word: target.t, options };
    }, [tokens, active, step]);
    useEffect(() => {
        const before = document.body.style.overflow, previous = document.activeElement as HTMLElement | null;
        document.body.style.overflow = 'hidden';
        closeButton.current?.focus();
        const keyboard = (e: KeyboardEvent) => {
            if (e.key === 'Escape')
                onClose();
            if (e.key === 'Tab') {
                const list = Array.from(dialog.current?.querySelectorAll<HTMLElement>('button:not(:disabled),input,a[href],textarea') || []);
                if (!list.length)
                    return;
                const first = list[0], lastItem = list[list.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    lastItem.focus();
                }
                else if (!e.shiftKey && document.activeElement === lastItem) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        window.addEventListener('keydown', keyboard);
        return () => { document.body.style.overflow = before; window.removeEventListener('keydown', keyboard); previous?.focus(); stopAudio(); };
    }, [onClose]);
    function reset() {
        setAnswer('');
        setFeedback('');
        setHint(false);
        setBuilt([]);
        setChoice('');
        setListened(false);
    }
    function select(i: number) {
        stopAudio();
        setSpeaking(-1);
        setStep(i);
        reset();
        setPhase('learn');
        if (window.innerWidth < 768)
            requestAnimationFrame(() => workspace.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
    function practice(p: Phase) {
        stopAudio();
        setSpeaking(-1);
        reset();
        setPhase(p);
        if (p === 'listen') hear(step, false);
    }
    function hear(i: number, slow: boolean) {
        setSpeaking(i);
        setListened(true);
        play(active.phrases[i].en, { key: phraseKey(active.id, i), slow, voice: i % 2 }).then(() => setSpeaking(s => (s === i ? -1 : s)));
    }
    function hearAll() {
        if (speaking === -2 || speaking >= 0) { stopAudio(); setSpeaking(-1); return; }
        playSequence(active.phrases.map((p, i) => ({ text: p.en, key: phraseKey(active.id, i), voice: i % 2 })), i => setSpeaking(i));
    }
    function check() {
        let ok = false;
        if (phase === 'write' || phase === 'listen') ok = normalize(answer) === normalize(phrase.en);
        if (phase === 'build') ok = normalize(built.map(i => tokens[i]).join(' ')) === normalize(phrase.en);
        if (phase === 'gap') ok = choice.toLowerCase() === gap.word.toLowerCase();
        setFeedback(ok ? 'correct' : 'retry');
        if (ok) hear(step, false);
    }
    function next() {
        if (last) { stopAudio(); onComplete(); return; }
        const keep = phase;
        stopAudio();
        setSpeaking(-1);
        setStep(step + 1);
        reset();
        setPhase(keep);
        if (keep === 'listen') {
            const i = step + 1;
            setTimeout(() => { setSpeaking(i); setListened(true); play(active.phrases[i].en, { key: phraseKey(active.id, i), voice: i % 2 }).then(() => setSpeaking(-1)); }, 150);
        }
    }
    const ready = phase === 'build' ? built.length === tokens.length : phase === 'gap' ? !!choice : !!answer.trim();
    const prompts: Record<Exclude<Phase, 'learn'>, { label: string; title: string }> = {
        write: { label: 'DA IDEIA PARA A FRASE', title: 'Como você diria isso em inglês?' },
        listen: { label: 'OUVIR E ESCREVER', title: 'Escreva o que você ouviu.' },
        build: { label: 'MONTE A FRASE', title: 'Toque nas palavras na ordem certa.' },
        gap: { label: 'COMPLETE A LACUNA', title: 'Qual palavra completa a frase?' },
    };
    const playing = speaking >= 0;
    return <div className="lesson-overlay"><section className="study-studio" role="dialog" aria-modal="true" aria-labelledby="studio-title" ref={dialog}>
        <header className="studio-header"><div className="studio-heading-icon"><SceneIcon icon={active.icon} size={23}/></div><div><span className="eyebrow">{active.category} <span> / </span> INGLÊS AMERICANO</span><h2 id="studio-title">{active.title}</h2></div><span className={"level-label badge-" + active.level}>{active.cefr || 'A1'} · {levelLabel(active.level)}</span><button className="icon-button studio-close" aria-label="Fechar lição" ref={closeButton} onClick={onClose}><X size={20}/></button></header>
        <div className="studio-body">
            <aside className="conversation-script">
                <div className="script-heading"><div><span className="blue-label"><MessageCircle size={14}/>{active.phrases.some(p => p.role) ? 'O DIÁLOGO' : 'AS PRIMEIRAS FRASES'}</span><h3>{active.phrases.some(p => p.role) ? 'Uma conversa de verdade.' : 'Comece por estas frases.'}</h3></div><button type="button" className={'listen-all' + (playing ? ' is-playing' : '')} onClick={hearAll}>{playing ? <><Square size={13}/>Parar</> : <><Headphones size={15}/>Ouvir tudo</>}</button></div>
                {active.context && <div className="scene-brief"><span>SITUAÇÃO</span><p>{active.context}</p><span>O QUE VOCÊ VAI PRATICAR</span><p>{active.objective}</p></div>}
                <p className="script-instruction">Selecione uma fala para entender cada palavra. Toque no alto-falante para ouvir.</p>
                <div className="dialogue-transcript">{active.phrases.map((p, i) => <div className={'transcript-item ' + (i % 2 ? 'person-b' : '')} key={i}>
                    <button onClick={() => select(i)} className={'transcript-line ' + (i % 2 ? 'person-b ' : '') + (step === i ? 'is-selected ' : '') + (speaking === i ? 'is-speaking' : '')}>
                        <div className="speaker-line"><span className="speaker-avatar">{i % 2 ? 'B' : 'A'}</span><span>{p.role || 'FRASE ' + String(i + 1).padStart(2, '0')}</span><small>{String(i + 1).padStart(2, '0')}</small></div>
                        <p>{p.en}</p><span className="line-translation">{p.pt}</span><span className="line-pronunciation"><Spoken words={p.words} size="sm"/></span>
                        {step === i && <span className="line-selected-label">EXPLORANDO ESTA FALA <ArrowRight size={12}/></span>}
                    </button>
                    <button type="button" className={'line-play' + (speaking === i ? ' is-playing' : '')} aria-label={'Ouvir: ' + p.en} onClick={() => hear(i, false)}><Volume2 size={16}/></button>
                </div>)}</div>
                <div className="script-note"><Lightbulb size={17}/><p>Ouça, pause e repita em voz alta. Imitar o ritmo da frase ajuda mais do que acertar cada som isolado.</p></div>
            </aside>
            <section className="phrase-workspace" ref={workspace}>
                {noVoice && <div className="no-voice-notice" role="status"><Volume2 size={17}/><p><b>Seu navegador não tem uma voz em inglês instalada.</b> No Windows: Configurações › Hora e idioma › Fala › Adicionar vozes › English (United States). Depois reinicie o navegador. O Microsoft Edge e o Google Chrome já trazem vozes em inglês. Quando os áudios gravados forem gerados, este aviso deixa de aparecer.</p><button type="button" className="icon-button" aria-label="Fechar aviso" onClick={() => setNoVoice(false)}><X size={15}/></button></div>}
                <div className="studio-tabs">
                    <button className={phase === 'learn' ? 'active' : ''} onClick={() => { stopAudio(); setPhase('learn'); }}><Lightbulb size={15}/>Entender</button>
                    {practiceTabs.map(t => <button key={t.id} className={phase === t.id ? 'active' : ''} onClick={() => practice(t.id)}><t.icon size={15}/>{t.label}</button>)}
                    <span>{String(step + 1).padStart(2, '0')} / {active.phrases.length}</span>
                </div>
                {phase === 'learn' ? <>
                    <div className="selected-phrase"><span className="eyebrow">ESCRITA EM INGLÊS</span><h3>{phrase.en}</h3>
                        <div className="audio-controls"><button type="button" className={speaking === step ? 'is-playing' : ''} onClick={() => hear(step, false)}><Volume2 size={16}/>Ouvir</button><button type="button" onClick={() => hear(step, true)}><Snail size={16}/>Mais devagar</button></div>
                        <div className="phrase-translation"><span>TRADUÇÃO</span><p>{phrase.pt}</p></div>
                        <div className="pronunciation-strip"><span>COMO FALAR</span><b><Spoken words={phrase.words} size="lg"/></b></div><SpokenLegend/>
                    </div>
                    <div className="word-table-heading"><h4>Uma palavra de cada vez.</h4><span>{phrase.words.length} palavras · toque para ouvir</span></div>
                    <div className="word-table" role="table" aria-label="Significado e pronúncia palavra por palavra"><div className="word-table-labels" role="row"><span role="columnheader">INGLÊS</span><span role="columnheader">SIGNIFICADO</span><span role="columnheader">COMO FALAR</span></div>
                        {phrase.words.map(([en, pt, sound], i) => <div className="word-table-row" role="row" key={i}><b role="cell"><button type="button" className="word-play" onClick={() => play(clean(en), { word: true })} aria-label={'Ouvir a palavra ' + en}>{en}<Volume2 size={13}/></button></b><span role="cell">{pt}</span><small role="cell"><Spoken words={[[en, pt, sound]]}/></small></div>)}
                    </div>
                    {phrase.note && <div className="learning-note"><Lightbulb size={17}/><p>{phrase.note}</p></div>}
                    {active.tip && <div className="learning-note"><Lightbulb size={19}/><p><b>Para usar na vida real: </b>{active.tip}</p></div>}
                    <p className="pronunciation-caveat">As dicas escritas não representam todos os sons com exatidão. Em “th”, a ponta da língua fica entre os dentes. Não há equivalente exato em português.</p>
                    <button className="primary-button wide" onClick={() => practice('write')}>Agora é sua vez de praticar <ArrowRight size={16}/></button>
                </> : <form className="practice-workspace" onSubmit={e => { e.preventDefault(); if (ready && !correct) check(); }}>
                    <span className="exercise-label">{(() => { const T = practiceTabs.find(t => t.id === phase)!.icon; return <T size={14}/>; })()} {prompts[phase].label}</span>
                    <h3>{prompts[phase].title}</h3>
                    {phase === 'write' && <div className="quiz-prompt">{phrase.pt}</div>}
                    {phase === 'listen' && <div className="listen-box"><button type="button" className={'listen-big' + (speaking === step ? ' is-playing' : '')} onClick={() => hear(step, false)}><Volume2 size={22}/>{listened ? 'Ouvir de novo' : 'Ouvir a frase'}</button><button type="button" className="listen-slow" onClick={() => hear(step, true)}><Snail size={16}/>Devagar</button></div>}
                    {phase === 'build' && <><div className="quiz-prompt">{phrase.pt}</div>
                        <div className="build-answer" aria-live="polite">{built.length ? built.map((ti, k) => <button type="button" key={k} className="tile placed" onClick={() => { setBuilt(prev => prev.filter((_, j) => j !== k)); setFeedback(''); }}>{tokens[ti]}</button>) : <span className="build-placeholder">Sua frase aparece aqui</span>}</div>
                        <div className="build-bank">{tiles.map(({ t, i }) => <button type="button" key={i} className="tile" disabled={built.includes(i)} onClick={() => { setBuilt(prev => prev.includes(i) ? prev : [...prev, i]); setFeedback(''); }}>{t}</button>)}</div></>}
                    {phase === 'gap' && <><div className="quiz-prompt gap-sentence">{phrase.en.split(/\s+/).map((t, i) => <span key={i}>{i ? ' ' : ''}{i === gap.index ? <><span className={'gap-slot' + (choice ? ' filled' : '')}>{choice || '_____'}</span>{t.replace(/^[^.,!?]*/, '')}</> : t}</span>)}</div><p className="gap-translation">{phrase.pt}</p>
                        <div className="gap-options">{gap.options.map(o => <button type="button" key={o} className={'tile' + (choice === o ? ' chosen' : '')} onClick={() => { setChoice(o); setFeedback(''); }}>{o}</button>)}</div></>}
                    {(phase === 'write' || phase === 'listen') && <label className="answer-label">Sua resposta<textarea autoFocus={phase === 'write'} value={answer} onChange={e => { setAnswer(e.target.value); setFeedback(''); }} placeholder="Escreva em inglês, sem pressa…"/></label>}
                    {(phase === 'write' || phase === 'listen') && <button type="button" className="hint-button" onClick={() => setHint(!hint)}><Lightbulb size={15}/>{hint ? 'Ocultar dica' : 'Preciso de uma dica'}</button>}
                    {hint && <div className="hint-content">{phase === 'listen' ? <>Em português: <b>{phrase.pt}</b></> : <>Comece com <b>{phrase.words[0][0]}</b>. Como falar: <Spoken words={phrase.words}/></>}</div>}
                    {feedback && <div className={'quiz-feedback ' + (correct ? 'correct' : 'retry')}>{correct ? <CheckCircle2 size={20}/> : <RotateCcw size={19}/>}<div><b>{correct ? 'Você conseguiu!' : 'Vamos tentar mais uma vez?'}</b><p>{correct ? 'Mais uma frase que já faz parte do seu mundo.' : phase === 'gap' ? 'A palavra certa é: ' + gap.word : 'Uma forma de dizer é: ' + phrase.en}</p></div></div>}
                    {!correct ? <button className="primary-button wide" disabled={!ready} type="submit">Verificar minha resposta <Check size={17}/></button> : <button type="button" className="primary-button wide" onClick={next}>{last ? 'Concluir esta situação' : 'Próxima fala'}<ArrowRight size={16}/></button>}
                    {feedback === 'retry' && <button type="button" className="text-button" onClick={next}>Pular esta fala <ArrowRight size={14}/></button>}
                    <button type="button" className="text-button" onClick={() => { stopAudio(); setPhase('learn'); }}><ArrowLeft size={14}/>Voltar à explicação</button>
                </form>}
            </section>
        </div>
        <footer className="studio-footer"><span><img src="/favicon.svg" alt=""/> Atlas English <i /> Ouça. Entenda. Pratique.</span><span>Seu inglês, palavra por palavra.</span></footer>
    </section></div>;
}
