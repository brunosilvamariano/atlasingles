'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Bird, BookOpen, Cat, Check, Circle, CloudRain, Flower2, Headphones } from 'lucide-react';
import { childrenStories, type ChildrenStory } from '../../lib/children-stories';
import { stopAudio } from '../../lib/audio';

const coverIcons = { ball: Circle, bird: Bird, flower: Flower2, rain: CloudRain, cat: Cat };

export default function ChildrenStories() {
    const [story, setStory] = useState<ChildrenStory | null>(null);
    const [pageIndex, setPageIndex] = useState(0);
    const [slow, setSlow] = useState(false);
    const [audioError, setAudioError] = useState(false);
    const narration = useRef<HTMLAudioElement>(null);
    const reader = useRef<HTMLElement>(null);

    useEffect(() => {
        stopAudio();
        const audio = narration.current;
        return () => { audio?.pause(); };
    }, [story?.id]);

    function focusReader() {
        requestAnimationFrame(() => {
            reader.current?.scrollIntoView({ block: 'start' });
            reader.current?.focus({ preventScroll: true });
        });
    }
    function choose(next: ChildrenStory | null) {
        narration.current?.pause();
        setStory(next);
        setPageIndex(0);
        setSlow(false);
        setAudioError(false);
        focusReader();
    }
    function turn(index: number) {
        setPageIndex(index);
        focusReader();
    }
    function changeSpeed() {
        const audio = narration.current;
        if (audio) {
            audio.playbackRate = slow ? 1 : 0.85;
            audio.preservesPitch = true;
        }
        setSlow(!slow);
    }

    if (!story) return <section className="stories-library" aria-labelledby="stories-title">
        <header className="stories-intro">
            <span className="blue-label"><BookOpen size={16}/> HISTÓRIAS INFANTIS · INGLÊS AMERICANO BÁSICO</span>
            <h2 id="stories-title">Pequenas histórias.<br/><span>Grandes descobertas em inglês.</span></h2>
            <p>Brinquedos, bichinhos e pequenas aventuras. Cinco histórias originais com frases curtas e palavras do dia a dia, para aprender sem pressa.</p>
            <div className="stories-meta"><span>5 histórias infantis</span><span>3 páginas por história</span><span>Narração americana · Epidemic Sound</span></div>
        </header>
        <div className="stories-grid">{childrenStories.map((item, index) => {
            const Icon = coverIcons[item.icon];
            return <article className="story-cover" key={item.id}>
                <div className={'story-cover-art story-art-' + index} aria-hidden="true"><Icon size={42}/><span>ABC</span></div>
                <div className="story-cover-copy"><span className="eyebrow">{item.theme}</span><h3>{item.title}</h3><p lang="en-US" className="story-english-title">{item.englishTitle}</p><p>{item.summary}</p><div className="story-cover-bottom"><span><Headphones size={15}/> Básico · Leitura + áudio</span><button type="button" className="primary-button" onClick={() => choose(item)}>Ler história <ArrowRight size={16}/></button></div></div>
            </article>;
        })}</div>
        <p className="stories-editorial">Histórias infantis fictícias e originais para estudo. Cada trecho traz a escrita correta em inglês americano, uma pronúncia aproximada para brasileiros e a tradução em português.</p>
    </section>;

    const page = story.pages[pageIndex];
    return <section className="story-reader" ref={reader} tabIndex={-1} aria-label={story.title}>
        <button type="button" className="text-button story-back" onClick={() => choose(null)}><ArrowLeft size={16}/> Todas as histórias</button>
        <header className="story-reader-heading"><span className="eyebrow">HISTÓRIA INFANTIL · BÁSICO · {story.theme}</span><h2>{story.title}</h2><p lang="en-US">{story.englishTitle}</p></header>
        <div className="story-narration"><div><Headphones size={22}/><div><strong>Ouça a história completa</strong><span>Annie · Voz americana da Epidemic Sound · Leitura calma</span></div></div><audio ref={narration} key={story.id} controls preload="none" src={story.audio} aria-label={'Narração em inglês: ' + story.title} onError={() => setAudioError(true)}/><button type="button" className="story-speed" aria-pressed={slow} onClick={changeSpeed}>{slow ? 'Voltar à velocidade original' : 'Ouvir mais devagar'}</button>{audioError && <p role="status">A gravação não carregou. Confira sua conexão e tente abrir a história novamente.</p>}</div>
        <div className="story-page-bar"><div><span>PÁGINA {pageIndex + 1} DE {story.pages.length}</span><h3>{page.title}</h3></div></div>
        <p className="story-reading-note">Você pode virar as páginas enquanto escuta. A pronúncia escrita é uma aproximação; use a narração em inglês para acompanhar os sons.</p>
        <div className="story-lines">{page.lines.map((entry, index) => <article key={story.id + '-' + pageIndex + '-' + index} className="story-line">
            <div className="story-line-top"><span>ESCRITA CORRETA · ENGLISH (US)</span></div><p className="story-en" lang="en-US">{entry.en}</p><div className="story-sound"><span>COMO SOA</span><p lang="pt-BR">/{entry.sound}/</p></div><div className="story-translation"><span>TRADUÇÃO</span><p lang="pt-BR">{entry.pt}</p></div>
        </article>)}</div>
        <nav className="story-pagination" aria-label="Páginas da história"><button className="subtle-button" type="button" disabled={pageIndex === 0} onClick={() => turn(pageIndex - 1)}><ArrowLeft size={16}/> Anterior</button><div>{story.pages.map((_, index) => <button type="button" key={index} aria-label={'Página ' + (index + 1)} aria-current={index === pageIndex ? 'page' : undefined} onClick={() => turn(index)}>{index + 1}</button>)}</div>{pageIndex < story.pages.length - 1 ? <button type="button" className="primary-button" onClick={() => turn(pageIndex + 1)}>Próxima <ArrowRight size={16}/></button> : <button type="button" className="primary-button" onClick={() => choose(null)}><Check size={16}/> Concluir leitura</button>}</nav>
    </section>;
}
