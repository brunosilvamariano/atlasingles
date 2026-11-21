'use client';
import { useState } from 'react';
import { Brain, Eye, RotateCcw, Check, Volume2, X } from 'lucide-react';
import { play } from '../../lib/audio';
import Spoken from './Spoken';

// Days until the next review for each box. A right answer moves the word one box up.
export const reviewIntervals = [1, 3, 7, 14, 30, 60, 120];
export type ReviewState = Record<string, [number, string]>;

export function addDays(day: string, days: number) {
    const d = new Date(day + 'T12:00:00');
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString('en-CA');
}
export function dueWords(saved: string[], review: ReviewState | undefined, today: string) {
    return saved.filter(w => !review?.[w] || review[w][1] <= today);
}
export function grade(review: ReviewState | undefined, word: string, ok: boolean, today: string): ReviewState {
    const box = review?.[word]?.[0] ?? 0;
    const nextBox = ok ? Math.min(box + 1, reviewIntervals.length - 1) : 0;
    const wait = ok ? reviewIntervals[Math.min(box, reviewIntervals.length - 1)] : 1;
    return { ...(review || {}), [word]: [nextBox, addDays(today, wait)] };
}

export default function VocabularyReview({ due, lookup, onGrade, onClose }: {
    due: string[];
    lookup: Map<string, [string, string, string]>;
    onGrade: (word: string, ok: boolean) => void;
    onClose: () => void;
}) {
    const [shown, setShown] = useState(false), [done, setDone] = useState(0);
    const word = due[0];
    const info = word ? lookup.get(word.toLowerCase()) : undefined;
    function answer(ok: boolean) {
        onGrade(word, ok);
        setShown(false);
        setDone(n => n + 1);
    }
    return <section className="review-panel" aria-label="Revisão de vocabulário">
        <div className="review-top"><div><h3><Brain size={18} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8 }}/>Revisão de hoje</h3><p>Lembre o significado antes de mostrar a resposta. Seja honesto: errar faz a palavra voltar amanhã.</p></div><button className="icon-button" aria-label="Fechar revisão" onClick={onClose}><X size={18}/></button></div>
        {word ? <>
            <div className="review-card">
                <h4>{info?.[0] || word}<button type="button" aria-label="Ouvir" onClick={() => play(info?.[0] || word, { word: true })}><Volume2 size={20}/></button></h4>
                {shown && <div className="review-answer">{info?.[1] || 'Significado não encontrado no acervo.'}{info?.[2] && <small><Spoken words={[info]}/></small>}</div>}
            </div>
            <div className="review-actions">{!shown ? <button className="primary-button" onClick={() => setShown(true)}><Eye size={16}/>Mostrar resposta</button> : <><button className="subtle-button again" onClick={() => answer(false)}><RotateCcw size={15}/>Não lembrei</button><button className="subtle-button good" onClick={() => answer(true)}><Check size={15}/>Lembrei</button></>}</div>
            <p className="review-meta">{due.length} {due.length === 1 ? 'palavra' : 'palavras'} para hoje{done ? ' · ' + done + ' revisadas agora' : ''}</p>
        </> : <div className="review-card"><h4>Tudo revisado por hoje.</h4><div className="review-answer">As próximas palavras voltam nos dias certos. Salve novas palavras para ampliar a revisão.</div></div>}
    </section>;
}
