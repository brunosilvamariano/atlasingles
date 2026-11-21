import { Fragment } from 'react';
import { stress } from '../../lib/content/stress';

const key = (w: string) => w.toLowerCase().replace(/[’]/g, "'").replace(/[.,!?]/g, '');

/**
 * Pronunciation cue, styled apart from the English spelling (green, italic, between slashes).
 * Every syllable is read; the stressed syllable of longer words is underlined.
 */
export default function Spoken({ words, size = 'md' }: { words: [string, string, string?][]; size?: 'sm' | 'md' | 'lg' }) {
    return <span className={'spoken spoken-' + size}>
        {words.map(([en, , sound], i) => {
            const k = key(en), cue = sound || '', parts = cue.split('-').filter(Boolean);
            // Only words with two or more syllables get a mark: one-syllable words are read whole.
            const strong = parts.length > 1 ? stress[k] : -1;
            return <span key={i} className="sp-word" title={en}>
                {parts.map((p, j) => <Fragment key={j}>{j > 0 && <span className="sp-dot" aria-hidden="true">·</span>}<span className={j === strong ? 'sp-stress' : 'sp-syl'}>{p}</span></Fragment>)}
            </span>;
        })}
    </span>;
}

/** Explains how to read the cues. */
export function SpokenLegend() {
    return <details className="spoken-legend">
        <summary>Como ler a pronúncia</summary>
        <dl>
            <dt><span className="spoken"><span className="sp-word"><span className="sp-stress">bru</span><span className="sp-dot">·</span><span className="sp-syl">no</span></span></span></dt><dd>Tudo em verde é como falar; leia todas as sílabas. O sublinhado marca a sílaba forte: fale mais alto e mais longo.</dd>
            <dt>a, the, to</dt><dd>Palavras curtas como estas saem rápidas e baixas no meio da frase.</dd>
            <dt>â</dt><dd>Vogal neutra e curta, como o “a” final de “casa”.</dd>
            <dt>á</dt><dd>“A” bem aberto, como em “pá”. É o som americano de hot, stop, was e want (“hát”, “stáp”, “uáz”). O “ó” dessas palavras é britânico.</dd>
            <dt>é / ó</dt><dd>Vogais abertas: “é” de “café” (cat = “két”), “ó” de “avó” (coffee = “có-fi”).</dd>
            <dt>th · dh</dt><dd>Ponta da língua entre os dentes. “th” sem voz (think); “dh” com voz (this).</dd>
            <dt>h</dt><dd>Sopro de ar, como o “r” de “rato” dito bem leve. Nunca é mudo.</dd>
            <dt>r</dt><dd>R americano: a língua recua e não encosta no céu da boca.</dd>
            <dt>d entre vogais</dt><dd>O T americano entre vogais vira um “d” rápido: water = uó-der.</dd>
            <dt>j · dj · tch</dt><dd>“j” de “já” (usually); “dj” de “Djavan” (job); “tch” de “tchau” (check).</dd>
            <dt>final</dt><dd>Consoante no fim da palavra termina seca: “gud”, não “gudi”.</dd>
        </dl>
    </details>;
}
