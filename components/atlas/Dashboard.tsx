'use client';
import { useEffect, useState, useRef } from 'react';
import { BookOpen, LayoutDashboard, MessagesSquare, Languages, CalendarDays, NotebookPen, ChartNoAxesCombined, Settings, ChevronRight, ArrowUpRight, ArrowRight, Flame, Check, Search, Bell, Plus, X, Target, Bookmark, GraduationCap, LogOut, ShieldCheck, Menu, CheckCircle2, Volume2 } from 'lucide-react';
import { initializeStyles } from '../../lib/style-engine';
import { play } from '../../lib/audio';
import { levels, levelLabel } from '../../lib/levels';
import type { LearningLevel } from '../../lib/content/types';
import { lessons, plans, type Lesson } from '../../lib/curriculum';
import CalendarWorkspace from './CalendarWorkspace';
import PremiumSelect from './PremiumSelect';
import NotesWorkspace from './NotesWorkspace';
import type { PlannerNote, PlannerEvent, NoteFocus } from '../../lib/planning';
import { learnerStateSchema } from '../../lib/learner-state';
type State = {
    completed: string[];
    saved: string[];
    notes: PlannerNote[];
    events: PlannerEvent[];
    activity: Record<string, number>;
    goal: number;
    review?: ReviewState;
};
const initial: State = { completed: [], saved: [], notes: [], events: [], activity: {}, goal: 15, review: {} };
// Every word in the collection, for the review card (saved words can come from any level).
const allWords = new Map(lessons.flatMap(l => l.phrases.flatMap(p => p.words)).map(w => [w[0].toLowerCase(), w as [string, string, string]]));
const localProgressKey = 'atlas-english:progress:v1';
const nav = [['Visão geral', LayoutDashboard], ['Minha jornada', BookOpen], ['Conversação', MessagesSquare], ['Histórias infantis', BookOpen], ['Vocabulário', Languages], ['Calendário', CalendarDays], ['Anotações', NotebookPen], ['Meu progresso', ChartNoAxesCombined]] as const;
import Overview from './Overview';
import dynamic from 'next/dynamic';
const ChildrenStories = dynamic(() => import('./ChildrenStories'), { loading: () => <p role="status">Carregando histórias…</p> });
import DialogueLibrary from './DialogueLibrary';
import SceneIcon from './SceneIcon';
import LessonPlayer from './LessonPlayer';
import Spoken from './Spoken';
import VocabularyReview, { dueWords, grade, type ReviewState } from './VocabularyReview';
export default function Dashboard({ name, localMode }: {
    name: string;
    localMode: boolean;
}) {
    const [page, setPage] = useState('Visão geral'), [state, setState] = useState<State>(initial), [ready, setReady] = useState(false), [status, setStatus] = useState('Carregando seus dados…'), [active, setActive] = useState<Lesson | null>(null), [query, setQuery] = useState(''), [filter, setFilter] = useState('Todas'), [toast, setToast] = useState(''), [mobile, setMobile] = useState(false);
    const [noteFocus, setNoteFocus] = useState<NoteFocus>({});
    const [reviewing, setReviewing] = useState(false);
    // A new workspace always opens at the top, including bottom-tab navigation.
    useEffect(() => { window.scrollTo(0, 0); }, [page]);
    const [wordLevel, setWordLevel] = useState<LearningLevel | 'all'>('basic'), [wordLimit, setWordLimit] = useState(48);
    const pendingWrites = useRef<Promise<void>>(Promise.resolve());
    useEffect(() => {
        initializeStyles();
        if (localMode) {
            try {
                const stored = window.localStorage.getItem(localProgressKey);
                if (stored) setState(learnerStateSchema.parse({ ...initial, ...JSON.parse(stored) }));
                setStatus('Modo local · dados neste navegador');
                setReady(true);
            } catch {
                setStatus('Não foi possível abrir os dados locais.');
            }
            return;
        }
        fetch('/api/progress').then(r => {
            if (!r.ok)
                throw Error();
            return r.json();
        }).then(d => {
            if (d)
                setState({ ...initial, ...d });
            setStatus('Sincronizado na sua conta');
            setReady(true);
        }).catch(() => { setStatus('Sem sincronização. Entre na sua conta para salvar.'); setReady(false); });
    }, [localMode]);
    // Serialize writes so rapid updates cannot overwrite a newer snapshot.
    function save(next: State): boolean {
        if (localMode) {
            try {
                if (!ready) throw Error();
                const validated = learnerStateSchema.parse(next);
                window.localStorage.setItem(localProgressKey, JSON.stringify(validated));
                setState(validated);
                setStatus('Alterações salvas neste navegador');
                return true;
            } catch {
                setStatus('Falha ao salvar neste navegador.');
                setToast('Não foi possível salvar os dados locais.');
                return false;
            }
        }
        setState(next);
        if (!ready) {
            setToast('Entre na sua conta para salvar seu progresso.');
            return false;
        }
        setStatus('Salvando…');
        pendingWrites.current = pendingWrites.current.catch(() => { }).then(async () => {
            try {
                const r = await fetch('/api/progress', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(next) });
                if (!r.ok)
                    throw Error();
                setStatus('Todas as alterações salvas');
            }
            catch {
                setStatus('Falha ao salvar. Tente novamente.');
                setToast('Não foi possível salvar na nuvem.');
            }
        });
        return true;
    }
    useEffect(() => {
        if (toast) {
            const t = setTimeout(() => setToast(''), 4000);
            return () => clearTimeout(t);
        }
    }, [toast]);
    const total = state.completed.length, words = lessons.filter(l => wordLevel === 'all' || l.level === wordLevel).flatMap(l => l.phrases.flatMap(p => p.words)), unique = Array.from(new Map(words.map(w => [w[0].toLowerCase(), w])).values()), today = new Date().toLocaleDateString('en-CA');
    function open(l: Lesson) { setActive(l); }
    function complete() {
        if (active && !state.completed.includes(active.id)) {
            const saved = save({ ...state, completed: [...state.completed, active.id], activity: { ...state.activity, [today]: (state.activity[today] || 0) + 1 } });
            if (localMode && !saved) return;
        }
        setActive(null);
        setToast('Lição concluída. Mais um passo na sua jornada!');
    }
    const nextLesson = lessons.find(l => !state.completed.includes(l.id)) || lessons[0];
    const pct = Math.round(total / lessons.length * 100);
    const go = (p: string) => { setNoteFocus({}); setPage(p); setMobile(false); setQuery(''); };
    return <div className="app-shell selection:bg-blue-100"><aside className={'sidebar ' + (mobile ? 'show' : '')}><a className="brand" href="/" aria-label="Atlas English — início"><img src="/logo.svg" alt="Atlas English"/></a><div className="workspace"><span className="workspace-icon"><GraduationCap size={20}/></span><div>Meu espaço<small>Seu inglês. Suas possibilidades.</small></div><ChevronRight size={15}/></div><small className="nav-label">LEARNING WORKSPACE</small><nav>{nav.map(([label, Icon]) => <button key={label} className={page === label ? 'selected' : ''} onClick={() => go(label)}><Icon size={19}/>{label}{label === 'Minha jornada' && <span className="nav-count">{lessons.length}</span>}</button>)}</nav><div className="sidebar-bottom"><div className="journey-callout"><div className="sidebar-plan-icon"><Target size={19}/></div><span className="tag">SEU PRÓXIMO NÍVEL</span><h4>Um pouco hoje.<br />Muito além amanhã.</h4><p>{state.goal} minutos por dia.<br />Um mundo de possibilidades.</p><button onClick={() => go('Configurações')}>Personalizar minha meta <ArrowUpRight size={14}/></button></div><button className="settings-btn" onClick={() => go('Configurações')}><Settings size={18}/>Configurações</button><button className="profile" onClick={() => go('Administração')}><span className="avatar">{name[0]}</span><span>{name}<small>{localMode ? 'Modo local' : 'Administrador principal'}</small></span><ChevronRight size={16}/></button></div></aside>
    {mobile && <button className="sidebar-overlay" aria-label="Fechar menu" onClick={() => setMobile(false)}/>}
    <div className="main-shell"><header className="topbar"><div className="breadcrumb"><button className="mobile-toggle" onClick={() => setMobile(!mobile)} aria-label={mobile ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobile}><Menu size={21}/></button><span className="desktop-breadcrumb">Meu espaço <ChevronRight size={13}/></span><b>{page}</b></div><form className="header-search" onSubmit={e => { e.preventDefault(); setPage('Conversação'); }}><Search size={16}/><input aria-label="Buscar diálogos" value={query} onChange={e => setQuery(e.target.value)} placeholder="O que vamos aprender hoje?"/><kbd>↵</kbd></form><div className="top-actions"><span className="locale"><span className="us-label">US</span><b>Inglês americano</b></span><button className="icon-button notification-button" aria-label="Agenda de estudos" onClick={() => { go('Calendário'); }}><Bell size={19}/>{state.events.some(e => e.date >= today) && <i />}</button><button className="top-profile" onClick={() => go('Administração')} aria-label="Perfil de Bruno"><span className="avatar small">B</span><span>Bruno<small>Meu espaço pessoal</small></span><ChevronRight size={14}/></button></div></header><main>
    {page !== 'Visão geral' && <div className="page-heading"><div><div className="eyebrow">ATLAS / SEU ESPAÇO DE APRENDIZADO</div><h1>{page === 'Conversação' ? 'Conversas para a vida real' : page}</h1><p>{page === 'Conversação' ? 'Da primeira apresentação ao café na esquina. Saiba o que dizer.' : 'Cada descoberta abre uma nova possibilidade.'}</p></div><span className="workspace-badge"><span className="live-dot"/> Inglês americano</span></div>}
    {page === 'Visão geral' && <Overview name={name} completed={state.completed} saved={state.saved.length} activity={state.activity} goal={state.goal} open={open} go={go}/>}
    {(page === 'Minha jornada' || page === 'Conversação') && <DialogueLibrary key={page} open={open} completed={state.completed} query={query} setQuery={setQuery} journey={page === 'Minha jornada'}/>}
    {page === 'Vocabulário' && <><div className="section-title"><div><h2>Palavras que abrem portas</h2><p>Salve palavras para montar seu repertório pessoal.</p></div><label className="search-box"><Search size={17}/><input placeholder="Buscar em inglês ou português" value={query} onChange={e => setQuery(e.target.value)}/></label></div><div className="vocabulary-levels"><label>Nível das palavras<PremiumSelect label="Nível das palavras" value={wordLevel} onChange={value=>{setWordLevel(value as LearningLevel|'all');setWordLimit(48);}} options={[{value:'all',label:'Todos os níveis'},...levels.map(l=>({value:l.id,label:l.label+' · '+l.range}))]}/></label><span>{unique.length} palavras para explorar neste nível</span></div>{reviewing && <VocabularyReview due={dueWords(state.saved, state.review, today)} lookup={allWords} onClose={() => setReviewing(false)} onGrade={(w, ok) => save({ ...state, review: grade(state.review, w, ok, today) })}/>}<div className="filter-row">{['Todas', 'Salvas'].map(f => <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}<button className={reviewing ? 'active' : ''} onClick={() => setReviewing(!reviewing)} disabled={!state.saved.length} title={state.saved.length ? 'Revisar palavras salvas' : 'Salve palavras para revisar'}>Revisar hoje{dueWords(state.saved, state.review, today).length > 0 && <span className="review-badge">{dueWords(state.saved, state.review, today).length}</span>}</button></div><div className="vocab-grid">{unique.filter(w => (filter !== 'Salvas' || state.saved.includes(w[0])) && w.join(' ').toLowerCase().includes(query.toLowerCase())).slice(0, wordLimit).map(w => <div className="word-card" key={w[0]}><div><h3>{w[0]}<button type="button" className="word-card-play" aria-label={'Ouvir ' + w[0]} onClick={() => play(w[0], { word: true })}><Volume2 size={16}/></button></h3><p>{w[1]}</p><small className="word-sound"><Spoken words={[w as [string, string, string]]}/></small></div><button className={'icon-button ' + (state.saved.includes(w[0]) ? 'bookmarked' : '')} aria-label="Salvar palavra" onClick={() => { const on = state.saved.includes(w[0]); const review = { ...(state.review || {}) }; if (on) delete review[w[0]]; else review[w[0]] = [0, today]; save({ ...state, saved: on ? state.saved.filter(x => x !== w[0]) : [...state.saved, w[0]], review }); }}><Bookmark size={18}/></button></div>)}</div>{unique.filter(w => (filter !== 'Salvas' || state.saved.includes(w[0])) && w.join(' ').toLowerCase().includes(query.toLowerCase())).length > wordLimit && <div className="load-more"><button className="subtle-button" onClick={() => setWordLimit(n => n + 48)}>Ver mais palavras <ArrowRight size={16}/></button></div>}</>}
    {page === 'Anotações' && <NotesWorkspace notes={state.notes} events={state.events} focus={noteFocus} canSave={ready} onAdd={n => save({ ...state, notes: [n, ...state.notes] })} onDelete={(id, source) => save(source === 'calendar' ? { ...state, events: state.events.filter(e => e.id !== id) } : { ...state, notes: state.notes.filter(n => n.id !== id) })} onCalendar={() => go('Calendário')}/>}
    {page === 'Calendário' && <CalendarWorkspace events={state.events} canSave={ready} onCreate={e => save({ ...state, events: [...state.events, e] })} onOpenNotes={focus => { go('Anotações'); setNoteFocus(focus); }}/>}
    {page === 'Meu progresso' && <><div className="progress-overview"><div className="writing-card"><span className="eyebrow">UM PASSO DE CADA VEZ</span><h2>{pct}% do seu acervo explorado</h2><div className="progress-track"><i style={{ width: pct + '%' }}/></div><p>{total} lições · {Object.keys(state.activity).length} dias de prática · {state.saved.length} palavras salvas</p><button className="primary-button" onClick={() => open(nextLesson)}>Continuar aprendendo <ArrowRight size={17}/></button></div><div className="writing-card"><h3>Atividade nos últimos 7 dias</h3><div className="bar-chart">{Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - 6 + i); const key = d.toLocaleDateString('en-CA'); const count = state.activity[key] || 0; return <div key={i}><span>{count}</span><i style={{ height: Math.max(count * 20, 3) }}/><small>{d.toLocaleDateString('pt-BR', { weekday: 'short' })}</small></div>; })}</div></div></div><div className="section-title"><h2>Suas conquistas</h2></div><div className="achievement-grid">{[['Primeiro hello', total >= 1, 'Conclua uma lição'], ['Criando raízes', total >= 4, 'Conclua quatro lições'], ['Um novo repertório', state.saved.length >= 10, 'Salve dez palavras']].map(([t, yes, desc]) => <div className={'achievement ' + (yes ? 'unlocked' : '')} key={String(t)}><GraduationCap size={32}/><h3>{t}</h3><p>{desc}</p><small>{yes ? 'Conquistado' : 'Em construção'}</small></div>)}</div><p className="muted">Básico (A1–A2), Intermediário (B1–B2) e Avançado (C1) estão abertos. Concluir situações não equivale a uma certificação de proficiência.</p></>}
    {page === 'Histórias infantis' && <ChildrenStories/>}
    {page === 'Configurações' && <div className="writing-card settings-panel"><h2>Um ritmo que combina com você.</h2><p>Sua meta diária é um convite para praticar.</p><label>Meta de estudo<PremiumSelect label="Meta de estudo" value={String(state.goal)} onChange={value=>save({...state,goal:Number(value)})} options={[5,10,15,20,30].map(n=>({value:String(n),label:n+' minutos por dia'}))}/></label><div className="info-banner"><ShieldCheck />{localMode ? 'Seu progresso e suas anotações ficam neste navegador.' : 'Seu acesso é privado, com e-mail e senha. Seus estudos e anotações ficam salvos na sua conta.'}</div>{!localMode && <form action="/auth/signout" method="post"><button className="subtle-button" type="submit"><LogOut size={16}/>Sair da conta</button></form>}</div>}
    {page === 'Administração' && <><div className="info-banner"><ShieldCheck />Este espaço é privado para Bruno. A gestão de alunos e os pagamentos ainda não estão habilitados.</div><div className="section-title"><div><h2>Planos preparados para o futuro</h2><p>Valores configurados. Nenhuma cobrança será realizada.</p></div><span className="tag">PAGAMENTOS DESATIVADOS</span></div><div className="plan-grid">{plans.map(p => <div className="writing-card" key={p.id}><span className="eyebrow">ATLAS {p.title.toUpperCase()}</span><h2>{p.id === 'annual' ? '12× R$ 30' : 'R$ 60'}<small> / {p.id === 'annual' ? 'ano' : 'mês'}</small></h2><p>{p.description}</p><p>Trilhas · Conversações · Vocabulário · Caderno</p><button className="subtle-button" disabled>Disponível futuramente</button></div>)}</div><div className="writing-card"><h3>Biblioteca inicial</h3><p>{lessons.length} lições · {lessons.reduce((s, l) => s + l.phrases.length, 0)} frases contextualizadas · inglês dos EUA</p><p>Conteúdo organizado em TypeScript para revisão e expansão. O acervo inclui básico, intermediário e avançado, com conteúdo aberto para você escolher.</p></div></>}
    <footer className="main-footer"><span><img src="/favicon.svg" alt=""/> Feito para ir além. <b>Atlas English · Bruno</b></span><small role="status"><i className={status.startsWith('Alterações salvas') || status.startsWith('Todas as alterações salvas') || status.startsWith('Modo local') || status.startsWith('Sincronizado') ? 'saved-dot' : ''}/>{status}</small></footer></main><nav className="mobile-bottom-nav" aria-label="Navegação principal">{[['Visão geral', LayoutDashboard, 'Início'], ['Conversação', MessagesSquare, 'Diálogos'], ['Vocabulário', Languages, 'Palavras'], ['Anotações', NotebookPen, 'Caderno']].map(([p, Icon, label]) => <button key={String(p)} className={page === p ? 'active' : ''} onClick={() => go(String(p))}>{typeof Icon !== 'string' && <Icon size={20}/>}<span>{String(label)}</span></button>)}</nav></div>
    {active && <LessonPlayer active={active} onClose={() => setActive(null)} onComplete={complete}/>}{toast && <div className="toast" role="status"><CheckCircle2 size={18}/>{toast}</div>}</div>;
}
