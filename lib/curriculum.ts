import { expandedLessons } from './expanded-curriculum.ts';
import type { LearningLevel } from './content/types';
import { dialogues } from './dialogues.ts';
const wordSounds: Record<string, string> = { "hi": "hai", "my": "mai", "name": "nêim", "is": "iz", "bruno": "bru-no", "nice": "nais", "to": "tâ", "meet": "mit", "you": "iú", "how": "háu", "are": "ar", "doing": "du-in", "can": "kén", "i": "ai", "have": "hév", "a": "â", "coffee": "có-fi", "please": "pliz", "go": "gôu", "much": "mâtch", "it": "it", "where": "uér", "the": "dhâ", "exit": "ég-zit", "reservation": "ré-zer-vêi-shân", "could": "kud", "help": "hélp", "me": "mi", "what's": "uóts", "up": "âp", "sounds": "sáundz", "good": "gud", "got": "gát", "this": "dhis", "work": "uârk", "from": "frâm", "home": "hôum", "say": "sêi", "that": "dhét", "again": "â-guén", "let's": "léts", "get": "guét", "started": "stár-did", "would": "uâd", "like": "laik", "some": "sâm", "water": "uó-der", "check": "tchék", "wake": "uêik", "at": "ét", "seven": "sé-vân", "see": "si", "tomorrow": "tâ-má-rôu", "do": "du", "smaller": "smó-ler", "size": "saiz", "i'm": "aim", "just": "djâst", "looking": "lu-kin", "thanks": "thénks" };
export type Phrase = {
    en: string;
    pt: string;
    sound: string;
    words: [
        string,
        string,
        string?
    ][];
    note?: string;
    role?: string;
};
export type Lesson = {
    level?: LearningLevel;
    cefr?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
    objective?: string;
    context?: string;
    tip?: string;
    id: string;
    title: string;
    category: string;
    topic?: string;
    icon: string;
    description: string;
    phrases: Phrase[];
};
const foundations: Lesson[] = [
    { id: 'hello', title: 'O seu primeiro hello', category: 'Primeiros passos', icon: '👋', description: 'Cumprimente, se apresente e comece uma conversa.', phrases: [
            { en: 'Hi, my name is Bruno.', pt: 'Oi, meu nome é Bruno.', sound: 'hái, mái nêim iz Brú-no', words: [['Hi', 'oi'], ['my', 'meu'], ['name', 'nome'], ['is', 'é'], ['Bruno', 'Bruno']] },
            { en: 'Nice to meet you.', pt: 'Prazer em conhecer você.', sound: 'náis tâ mít iú', words: [['Nice', 'agradável / bom'], ['to', 'marca o infinitivo'], ['meet', 'conhecer / encontrar'], ['you', 'você']], note: '“Nice to meet you” é uma expressão: em português, dizemos “Prazer em conhecer você”. O sentido da frase é mais importante que a tradução literal.' },
            { en: 'How are you doing?', pt: 'Como você está?', sound: 'háu ar iú dú-in', words: [['How', 'como'], ['are', 'está / estão'], ['you', 'você'], ['doing', 'fazendo']], note: 'Saudação informal nos EUA. Não é uma pergunta literal sobre o que você está fazendo.' }
        ] },
    { id: 'coffee', title: 'Um café, por favor', category: 'Vida real', icon: '☕', description: 'Faça seu pedido com confiança.', phrases: [
            { en: 'Can I have a coffee, please?', pt: 'Posso pedir um café, por favor?', sound: 'kén ái hév â có-fi, plíz', words: [['Can', 'poder'], ['I', 'eu'], ['have', 'ter / receber'], ['a', 'um / uma'], ['coffee', 'café'], ['please', 'por favor']], note: '“Can I have…” é uma forma comum de pedir algo. Em vez de traduzir ao pé da letra, pense em “Eu gostaria de…”.' },
            { en: 'To go, please.', pt: 'Para viagem, por favor.', sound: 'tâ gôu, plíz', words: [['To', 'para'], ['go', 'ir'], ['please', 'por favor']], note: '“To go” significa “para viagem” em restaurantes americanos.' },
            { en: 'How much is it?', pt: 'Quanto custa?', sound: 'háu mâtch iz it', words: [['How', 'como'], ['much', 'quanto'], ['is', 'é / custa'], ['it', 'isso']] }
        ] },
    { id: 'travel', title: 'Próxima parada: Estados Unidos', category: 'Viagens', icon: '✈️', description: 'Aeroporto, hotel e as primeiras descobertas.', phrases: [{ en: 'Where is the exit?', pt: 'Onde fica a saída?', sound: 'uér iz dhi ég-zit', words: [['Where', 'onde'], ['is', 'é / fica'], ['the', 'o / a'], ['exit', 'saída']] }, { en: 'I have a reservation.', pt: 'Eu tenho uma reserva.', sound: 'ái hév â ré-zer-vêi-shân', words: [['I', 'eu'], ['have', 'tenho'], ['a', 'uma'], ['reservation', 'reserva']] }, { en: 'Could you help me?', pt: 'Você poderia me ajudar?', sound: 'kud iú hélp mí', words: [['Could', 'poderia'], ['you', 'você'], ['help', 'ajudar'], ['me', 'me']] }] },
    { id: 'slang', title: 'Inglês que acontece na rua', category: 'Gírias & expressões', icon: '💬', description: 'Entenda expressões de conversas informais.', phrases: [{ en: "What's up?", pt: 'E aí? / O que está acontecendo?', sound: 'uóts âp', words: [["What's", 'contração de what is'], ['up', 'para cima']], note: 'Saudação muito informal. A tradução literal não explica o sentido da expressão.' }, { en: 'Sounds good!', pt: 'Parece bom! / Combinado!', sound: 'sáundz gud', words: [['Sounds', 'soa / parece'], ['good', 'bom']] }, { en: 'You got this!', pt: 'Você consegue!', sound: 'iú gát dhis', words: [['You', 'você'], ['got', 'tem / conseguiu'], ['this', 'isso']], note: 'Expressão de incentivo. Não significa literalmente “você pegou isso” nesse contexto.' }] },
    { id: 'work', title: 'Conexões no trabalho', category: 'Trabalho', icon: '💼', description: 'Participe de reuniões e fale sobre sua rotina.', phrases: [{ en: 'I work from home.', pt: 'Eu trabalho de casa.', sound: 'ái uârk frâm hôum', words: [['I', 'eu'], ['work', 'trabalho'], ['from', 'de / a partir de'], ['home', 'casa']] }, { en: 'Can you say that again?', pt: 'Você pode dizer isso de novo?', sound: 'kén iú sêi dhét â-guén', words: [['Can', 'pode'], ['you', 'você'], ['say', 'dizer'], ['that', 'isso'], ['again', 'de novo']] }, { en: "Let's get started.", pt: 'Vamos começar.', sound: 'léts guét stár-tid', words: [["Let's", 'vamos (let us)'], ['get', 'ficar / tornar-se'], ['started', 'iniciado']], note: 'Aprenda “get started” como um bloco: significa começar.' }] },
    { id: 'food', title: 'À mesa', category: 'Vida real', icon: '🥑', description: 'Cardápio, preferências e pedidos.', phrases: [{ en: "I'd like some water.", pt: 'Eu gostaria de um pouco de água.', sound: 'aid láik sâm uó-der', words: [["I'd", 'eu + auxiliar de condição (I would)', 'aid'], ['like', 'gostar'], ['some', 'um pouco de'], ['water', 'água']], note: 'Em muitos sotaques americanos, o “t” de water soa próximo a um “d” leve.' }, { en: 'The check, please.', pt: 'A conta, por favor.', sound: 'dhâ tchék, plíz', words: [['The', 'a'], ['check', 'conta'], ['please', 'por favor']] }] },
    { id: 'daily', title: 'Um dia de cada vez', category: 'Rotina', icon: '☀️', description: 'Conte sobre seu dia e seus hábitos.', phrases: [{ en: 'I wake up at seven.', pt: 'Eu acordo às sete.', sound: 'ái uêik âp ét sé-vân', words: [['I', 'eu'], ['wake', 'despertar'], ['up', 'para cima'], ['at', 'às'], ['seven', 'sete']], note: '“Wake up” é um phrasal verb: as duas palavras juntas significam acordar.' }, { en: 'See you tomorrow!', pt: 'Até amanhã!', sound: 'sí iú tâ-mó-rôu', words: [['See', 'ver'], ['you', 'você'], ['tomorrow', 'amanhã']] }] },
    { id: 'shopping', title: 'Compras sem aperto', category: 'Compras', icon: '🛍️', description: 'Tamanhos, preços e preferências.', phrases: [{ en: 'Do you have a smaller size?', pt: 'Você tem um tamanho menor?', sound: 'du iú hév â smó-ler sáiz', words: [['Do', 'auxiliar de pergunta'], ['you', 'você'], ['have', 'tem'], ['a', 'um'], ['smaller', 'menor'], ['size', 'tamanho']] }, { en: "I'm just looking, thanks.", pt: 'Estou só olhando, obrigado.', sound: 'áim djâst lú-kin, thénks', words: [["I'm", 'eu estou (I am)'], ['just', 'apenas'], ['looking', 'olhando'], ['thanks', 'obrigado']] }] }
];
export const lessons: Lesson[] = [...foundations, ...dialogues, ...expandedLessons].map(l => ({ ...l, level: l.level || 'basic', cefr: l.cefr || 'A1', phrases: l.phrases.map(p => {
        const words = p.words.map(([en, pt, sound]) => [en, pt, sound || wordSounds[en.toLowerCase()]] as [
            string,
            string,
            string
        ]);
        return { ...p, words, sound: words.map(w => w[2]).join(' ') };
    }) }));
export const plans = [{ id: 'monthly', title: 'Mensal', price: 60, description: 'R$ 60 por mês' }, { id: 'annual', title: 'Anual', price: 360, description: '12× de R$ 30 • R$ 360 por ano' }];
