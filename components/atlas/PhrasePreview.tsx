import type { Phrase } from '../../lib/curriculum';
import Spoken from './Spoken';
// Paired forms stay visible in every learning card, including beginner foundations.
export default function PhrasePreview({ phrase }: {
    phrase: Phrase;
}) { return <div className="phrase-preview"><span className="preview-label">ESCRITA EM INGLÊS</span><p lang="en-US">{phrase.en}</p><span className="preview-label">COMO FALAR</span><p className="preview-pronunciation"><Spoken words={phrase.words} size="sm"/></p><p className="preview-translation">{phrase.pt}</p></div>; }
