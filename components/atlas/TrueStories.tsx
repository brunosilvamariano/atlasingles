'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, ExternalLink, Headphones, Pause, Volume2 } from 'lucide-react';
import { trueStories, type TrueStory } from '../../lib/true-stories';
import { onNoVoice, play, playSequence, stopAudio } from '../../lib/audio';

export default function TrueStories() {
    const [story, setStory] = useState<TrueStory | null>(null);
    const [pageIndex, setPageIndex] = useState(0);
    const [speaking, setSpeaking] = useState(-1);
    const [slow, setSlow] = useState(false);
    const [notice, setNotice] = useState('');
    const [audioError, setAudioError] = useState(false);
    const narration = useRef<HTMLAudioElement>(null);
    const reader = useRef<HTMLElement>(null);
    const request = useRef(0);

    useEffect(() => {
        const unsubscribe = onNoVoice(() => {
            setNotice('Nenhuma voz em inglês está disponível neste aparelho. Use a narração gravada ou habilite uma voz em inglês nas configurações do dispositivo.');
            setSpeaking(-1);
        });
        return () => { request.current++; unsubscribe(); stopAudio(); };
    }, []);

    function pauseReading() {
        request.current++;
        stopAudio();
        narration.current?.pause();
        setSpeaking(-1);
    }
    function choose(next: TrueStory | null) {
        pauseReading();
        setStory(next);
        setPageIndex(0);
        setNotice('');
        setAudioError(false);
        requestAnimationFrame(() => { reader.current?.scrollIntoView({ block: 'start' }); reader.current?.focus({ preventScroll: true }); });
    }
    function turn(index: number) {
        pauseReading();
        setPageIndex(index);
        requestAnimationFrame(() => { reader.current?.scrollIntoView({ block: 'start' }); reader.current?.focus({ preventScroll: true }); });
    }
    async function readLine(index: number) {
        if (!story) return;
        pauseReading();
        const mine = request.current;
        setNotice('');
        setSpeaking(index);
        await play(story.pages[pageIndex].lines[index].en, { slow });
        if (request.current === mine) setSpeaking(-1);
    }
    async function readPage() {
        if (!story) return;
        if (speaking >= 0) { pauseReading(); return; }
        pauseReading();
        setNotice('');
        const mine = request.current;
        await playSequence(story.pages[pageIndex].lines.map(line => ({ text: line.en })), index => {
            if (request.current === mine) setSpeaking(index);
        }, slow);
    }

    if (!story) return <section className="stories-library" aria-labelledby="stories-title">
        <header className="stories-intro">
            <span className="blue-label"><BookOpen size={16}/> LEITURA GUIADA · INGLÊS AMERICANO</span>
            <h2 id="stories-title">Histórias que aconteceram.<br/><span>Inglês para entender de verdade.</span></h2>
            <p>Cinco acontecimentos reais, contados em linguagem simples. Leia a escrita correta, acompanhe a pronúncia e confira a tradução, uma página de cada vez.</p>
            <div className="stories-meta"><span>5 histórias verificáveis</span><span>3 páginas por história</span><span>Áudio em inglês</span></div>
        </header>
        <div className="stories-grid">{trueStories.map((item, index) => <article className="story-cover" key={item.id}>
            <div className={'story-cover-art story-art-' + index} aria-hidden="true"><BookOpen size={38}/><span>{item.year}</span></div>
            <div className="story-cover-copy"><span className="eyebrow">{item.theme}</span><h3>{item.title}</h3><p lang="en-US" className="story-english-title">{item.englishTitle}</p><p>{item.summary}</p><div className="story-cover-bottom"><span><Headphones size={15}/> Leitura + narração</span><button type="button" className="primary-button" onClick={() => choose(item)}>Ler história <ArrowRight size={16}/></button></div></div>
        </article>)}</div>
        <p className="stories-editorial">Textos originais adaptados para estudo, baseados nas fontes indicadas em cada história. Não há diálogos inventados. Cada página é uma etapa de leitura digital; a quantidade de folhas impressas varia com o tamanho da fonte.</p>
    </section>;

    const page = story.pages[pageIndex];
    return <section className="story-reader" ref={reader} tabIndex={-1} aria-label={story.title}>
        <button type="button" className="text-button story-back" onClick={() => choose(null)}><ArrowLeft size={16}/> Todas as histórias</button>
        <header className="story-reader-heading"><span className="eyebrow">HISTÓRIA REAL · {story.year} · {story.theme}</span><h2>{story.title}</h2><p lang="en-US">{story.englishTitle}</p></header>
        <div className="story-narration"><div><Headphones size={22}/><div><strong>Ouça a história completa</strong><span>Voz americana · Annie · Epidemic Sound</span></div></div><audio ref={narration} key={story.id} controls preload="none" src={story.audio} aria-label={'Narração em inglês: ' + story.title} onPlay={() => { request.current++; stopAudio(); setSpeaking(-1); }} onError={() => setAudioError(true)}/>{audioError && <p role="status">A gravação não carregou. Você pode ouvir as frases ou a página pela voz em inglês do seu dispositivo.</p>}</div>
        <div className="story-page-bar"><div><span>PÁGINA {pageIndex + 1} DE {story.pages.length}</span><h3>{page.title}</h3></div><div className="story-reading-controls"><button type="button" className="subtle-button" onClick={readPage}>{speaking >= 0 ? <Pause size={16}/> : <Volume2 size={16}/>} {speaking >= 0 ? 'Parar leitura' : 'Ouvir esta página'}</button><button type="button" className="story-speed" aria-pressed={slow} onClick={() => { pauseReading(); setSlow(!slow); }}>{slow ? 'Mais devagar' : 'Velocidade normal'}</button></div></div>
        <p className="story-reading-note">A pronúncia escrita é uma aproximação para brasileiros. As frases e páginas usam a voz em inglês do seu dispositivo; a gravação acima traz a narração completa.</p>
        <div role="status" className="story-notice">{notice}</div>
        <div className="story-lines">{page.lines.map((entry, index) => <article key={story.id + '-' + pageIndex + '-' + index} className={'story-line' + (speaking === index ? ' is-speaking' : '')}>
            <div className="story-line-top"><span>ESCRITA CORRETA · ENGLISH (US)</span><button type="button" aria-label={'Ouvir trecho ' + (index + 1)} aria-pressed={speaking === index} onClick={() => speaking === index ? pauseReading() : readLine(index)}><Volume2 size={17}/></button></div><p className="story-en" lang="en-US">{entry.en}</p><div className="story-sound"><span>COMO SOA</span><p lang="pt-BR">/{entry.sound}/</p></div><div className="story-translation"><span>TRADUÇÃO</span><p lang="pt-BR">{entry.pt}</p></div>
        </article>)}</div>
        <nav className="story-pagination" aria-label="Páginas da história"><button className="subtle-button" type="button" disabled={pageIndex === 0} onClick={() => turn(pageIndex - 1)}><ArrowLeft size={16}/> Anterior</button><div>{story.pages.map((_, index) => <button type="button" key={index} aria-label={'Página ' + (index + 1)} aria-current={index === pageIndex ? 'page' : undefined} onClick={() => turn(index)}>{index + 1}</button>)}</div>{pageIndex < story.pages.length - 1 ? <button type="button" className="primary-button" onClick={() => turn(pageIndex + 1)}>Próxima <ArrowRight size={16}/></button> : <button type="button" className="primary-button" onClick={() => choose(null)}><Check size={16}/> Concluir leitura</button>}</nav>
        <details className="story-sources"><summary>Fontes e contexto histórico</summary><p>Adaptação didática em inglês americano, com tradução e pronúncia aproximada. Consulte os registros originais para mais detalhes.</p><ul>{story.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<ExternalLink size={13}/></a></li>)}</ul></details>
    </section>;
}

