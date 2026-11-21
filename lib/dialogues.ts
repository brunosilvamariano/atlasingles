import type { Lesson } from './curriculum';
// Each token has a contextual meaning and a Brazilian-friendly pronunciation cue.
// The spelling cues are approximate, not IPA or a replacement for phonetic study.
const scenes: [
    string,
    string,
    string,
    string,
    string[]
][] = [
    ['cafe-order', 'Pedido no café', 'Restaurantes', 'coffee', [
            'Good morning! What would you like?~Bom dia! O que você gostaria?~gud|mór-nin|uót|uâd|iú|laik~bom|manhã|o que|auxiliar de pedido educado|você|gostar',
            'I\'d like a latte, please.~Eu gostaria de um café com leite, por favor.~aid|laik|â|lá-tei|pliz~eu + auxiliar de pedido educado (I would)|gostar|um|café com leite|por favor',
            'What size?~Qual tamanho?~uót|saiz~qual|tamanho',
            'A small one, please.~Um pequeno, por favor.~â|smól|uân|pliz~um|pequeno|um (substitui o item)|por favor'
        ]],
    ['restaurant-table', 'Uma mesa para dois', 'Restaurantes', 'utensils', [
            'A table for two, please.~Uma mesa para dois, por favor.~â|têi-bol|fór|tu|pliz~uma|mesa|para|dois|por favor',
            'Do you have a reservation?~Você tem uma reserva?~du|iú|hév|â|ré-zer-vêi-shân~auxiliar de pergunta|você|tem|uma|reserva',
            'Yes, under Bruno.~Sim, em nome de Bruno.~iés|ân-der|bru-no~sim|em nome de (neste contexto)|Bruno',
            'Right this way.~Por aqui, por favor.~rait|dhis|uêi~direto|este|caminho'
        ]],
    ['restaurant-menu', 'Entendendo o cardápio', 'Restaurantes', 'utensils', [
            'What do you recommend?~O que você recomenda?~uót|du|iú|ré-kâ-ménd~o que|auxiliar de pergunta|você|recomenda',
            'The chicken is really good.~O frango é muito bom.~dhâ|tchí-kân|iz|rí-li|gud~o|frango|é|muito (neste contexto)|bom',
            'Is it spicy?~É apimentado?~iz|it|spái-si~é|isso|apimentado',
            'No, it\'s mild.~Não, é suave.~nôu|its|maild~não|isso é (it is)|suave'
        ]],
    ['airport-checkin', 'Check-in no aeroporto', 'Viagens', 'plane', [
            'Where are you flying today?~Para onde você vai voar hoje?~uér|ar|iú|flái-in|tâ-dêi~onde|auxiliar de ação em andamento|você|voando|hoje',
            'I\'m flying to Miami.~Vou voar para Miami.~aim|flái-in|tâ|mai-é-mi~eu estou (I am)|voando|para|Miami',
            'May I see your passport?~Posso ver seu passaporte?~mêi|ai|si|iór|pés-port~posso|eu|ver|seu|passaporte',
            'Here you go.~Aqui está.~hir|iú|gôu~aqui|você|ir (parte da expressão)'
        ]],
    ['airport-gate', 'Encontrando o portão', 'Viagens', 'plane', [
            'Excuse me, where is gate twelve?~Com licença, onde fica o portão doze?~ik-skiúz|mi|uér|iz|gêit|tuélv~desculpe|me|onde|fica|portão|doze',
            'Go straight and turn left.~Siga em frente e vire à esquerda.~gôu|strêit|énd|târn|léft~vá|em frente|e|vire|esquerda',
            'Is it far?~É longe?~iz|it|far~é|isso|longe',
            'About five minutes.~Cerca de cinco minutos.~â-báut|faiv|mí-nits~cerca de|cinco|minutos'
        ]],
    ['hotel-checkin', 'Chegando ao hotel', 'Hospedagem', 'hotel', [
            'I have a reservation.~Eu tenho uma reserva.~ai|hév|â|ré-zer-vêi-shân~eu|tenho|uma|reserva',
            'What\'s your name?~Qual é o seu nome?~uóts|iór|nêim~qual é (what is)|seu|nome',
            'My name is Bruno.~Meu nome é Bruno.~mai|nêim|iz|bru-no~meu|nome|é|Bruno',
            'Welcome! Here is your key.~Bem-vindo! Aqui está sua chave.~uél-kâm|hir|iz|iór|ki~bem-vindo|aqui|está|sua|chave'
        ]],
    ['hotel-wifi', 'Wi-Fi e café da manhã', 'Hospedagem', 'hotel', [
            'What\'s the Wi-Fi password?~Qual é a senha do Wi-Fi?~uóts|dhâ|uai-fai|pés-uârd~qual é (what is)|a|Wi-Fi|senha',
            'It\'s on your key card.~Está no seu cartão-chave.~its|on|iór|ki|kard~isso está (it is)|em|seu|chave|cartão',
            'What time is breakfast?~A que horas é o café da manhã?~uót|taim|iz|brék-fâst~qual|horário|é|café da manhã',
            'From seven to ten.~Das sete às dez.~frâm|sé-vân|tâ|tén~de|sete|até|dez'
        ]],
    ['ride-destination', 'Uma corrida de aplicativo', 'Transporte', 'car', [
            'Are you Bruno?~Você é o Bruno?~ar|iú|bru-no~é|você|Bruno',
            'Yes, that\'s me.~Sim, sou eu.~iés|dhéts|mi~sim|esse é (that is)|eu (neste contexto)',
            'Where are we going?~Para onde estamos indo?~uér|ar|ui|gôu-in~onde|estamos|nós|indo',
            'To the airport, please.~Para o aeroporto, por favor.~tâ|dhâ|ér-port|pliz~para|o|aeroporto|por favor'
        ]],
    ['subway-ticket', 'Pegando o metrô', 'Transporte', 'train', [
            'One ticket, please.~Uma passagem, por favor.~uân|tí-kit|pliz~uma|passagem|por favor',
            'Where do you want to go?~Para onde você quer ir?~uér|du|iú|uánt|tâ|gôu~onde|auxiliar de pergunta|você|quer|marca o infinitivo|ir',
            'To Central Park.~Para o Central Park.~tâ|sén-trâl|park~para|Central|Parque',
            'Take the next train.~Pegue o próximo trem.~têik|dhâ|nékst|trêin~pegue|o|próximo|trem'
        ]],
    ['shopping-size', 'Encontrando seu tamanho', 'Compras', 'bag', [
            'Can I help you?~Posso ajudar você?~kén|ai|hélp|iú~posso|eu|ajudar|você',
            'Do you have this in medium?~Você tem isto no tamanho médio?~du|iú|hév|dhis|in|mí-di-âm~auxiliar de pergunta|você|tem|isto|em|tamanho médio',
            'Let me check.~Deixe eu verificar.~lét|mi|tchék~deixe|me|verificar',
            'Can I try it on?~Posso experimentar?~kén|ai|trai|it|on~posso|eu|experimentar|isso|parte de try on (experimentar roupa)'
        ]],
    ['shopping-pay', 'Pagando as compras', 'Compras', 'bag', [
            'How much is this?~Quanto custa isto?~háu|mâtch|iz|dhis~como|quanto|custa|isto',
            'It\'s twenty dollars.~São vinte dólares.~its|tuén-ti|dá-lerz~isso é (it is)|vinte|dólares',
            'Can I pay by card?~Posso pagar com cartão?~kén|ai|pêi|bai|kard~posso|eu|pagar|com|cartão',
            'Of course!~Claro!~âv|kórs~de|curso (parte da expressão claro)'
        ]],
    ['market-find', 'No supermercado', 'Compras', 'cart', [
            'Where can I find milk?~Onde posso encontrar leite?~uér|kén|ai|faind|milk~onde|posso|eu|encontrar|leite',
            'In aisle three.~No corredor três.~in|ail|thri~em|corredor|três',
            'Thank you for your help.~Obrigado pela sua ajuda.~thénk|iú|fór|iór|hélp~agradecer|você|por|sua|ajuda',
            'You\'re welcome.~De nada.~iór|uél-kâm~você é (you are)|bem-vindo (expressão de nada)'
        ]],
    ['meet-neighbor', 'Conhecendo um vizinho', 'Vida social', 'users', [
            'Hi, I\'m your new neighbor.~Oi, sou seu novo vizinho.~hai|aim|iór|nu|nêi-ber~oi|eu sou (I am)|seu|novo|vizinho',
            'Nice to meet you!~Prazer em conhecer você!~nais|tâ|mit|iú~agradável|marca o infinitivo|conhecer|você',
            'Where are you from?~De onde você é?~uér|ar|iú|frâm~onde|é|você|de',
            'I\'m from Brazil.~Eu sou do Brasil.~aim|frâm|brâ-zíl~eu sou (I am)|de|Brasil'
        ]],
    ['weekend-plans', 'Planos para o fim de semana', 'Vida social', 'users', [
            'What are you doing this weekend?~O que você vai fazer neste fim de semana?~uót|ar|iú|du-in|dhis|uik-énd~o que|auxiliar de ação|você|fazendo|este|fim de semana',
            'Nothing special. Why?~Nada de especial. Por quê?~nâ-thin|spé-shâl|uai~nada|especial|por quê',
            'Want to grab a coffee?~Quer tomar um café?~uánt|tâ|gréb|â|có-fi~querer|marca o infinitivo|pegar (tomar neste contexto)|um|café',
            'Sounds good!~Parece bom!~sáundz|gud~soa ou parece|bom'
        ]],
    ['friendly-slang', 'Um papo descontraído', 'Gírias & expressões', 'message', [
            'Hey! What\'s up?~Ei! E aí?~hêi|uóts|âp~ei|o que é (what is)|para cima (parte da saudação)',
            'Not much. How about you?~Nada demais. E você?~nát|mâtch|háu|â-báut|iú~não|muito|como|sobre|você',
            'Just chilling.~Só relaxando.~djâst|tchí-lin~apenas|relaxando (informal)',
            'Catch you later!~Até mais!~kétch|iú|lêi-der~pegar (parte da despedida)|você|mais tarde'
        ]],
    ['work-intro', 'Primeiro dia no trabalho', 'Trabalho', 'briefcase', [
            'Welcome to the team!~Bem-vindo à equipe!~uél-kâm|tâ|dhâ|tim~bem-vindo|a|a|equipe',
            'Thanks! I\'m excited to be here.~Obrigado! Estou animado para estar aqui.~thénks|aim|ik-sái-did|tâ|bi|hir~obrigado|eu estou (I am)|animado|para|estar|aqui',
            'What do you do?~Com o que você trabalha?~uót|du|iú|du~o que|auxiliar de pergunta|você|faz',
            'I work in design.~Eu trabalho com design.~ai|uârk|in|di-záin~eu|trabalho|em|design'
        ]],
    ['work-meeting', 'Durante uma reunião', 'Trabalho', 'briefcase', [
            'Can everyone see my screen?~Todos conseguem ver minha tela?~kén|év-ri-uân|si|mai|skrin~conseguem|todos|ver|minha|tela',
            'Yes, we can.~Sim, conseguimos.~iés|ui|kén~sim|nós|conseguimos',
            'Could you repeat that, please?~Você poderia repetir isso, por favor?~kud|iú|ri-pít|dhét|pliz~poderia|você|repetir|isso|por favor',
            'Sure, no problem.~Claro, sem problema.~shur|nôu|prá-blâm~claro|nenhum|problema'
        ]],
    ['phone-call', 'Atendendo uma ligação', 'Comunicação', 'phone', [
            'Hello, is Bruno there?~Alô, o Bruno está?~he-lôu|iz|bru-no|dhér~alô|está|Bruno|aí',
            'This is Bruno speaking.~Aqui é o Bruno.~dhis|iz|bru-no|spí-kin~este|é|Bruno|falando',
            'Can you hear me?~Você consegue me ouvir?~kén|iú|hir|mi~consegue|você|ouvir|me',
            'Yes, loud and clear.~Sim, perfeitamente.~iés|láud|énd|klir~sim|alto|e|claro'
        ]],
    ['ask-help', 'Quando você não entende', 'Comunicação', 'message', [
            'Sorry, I don\'t understand.~Desculpe, eu não entendo.~sá-ri|ai|dôunt|ân-der-sténd~desculpe|eu|não (do not)|entendo',
            'That\'s okay.~Tudo bem.~dhéts|ôu-kêi~isso é (that is)|bem',
            'Could you speak more slowly?~Você poderia falar mais devagar?~kud|iú|spik|mór|slôu-li~poderia|você|falar|mais|devagar',
            'Of course. No rush.~Claro. Sem pressa.~âv|kórs|nôu|râsh~de|curso (parte de of course)|sem|pressa'
        ]],
    ['city-directions', 'Pedindo informações na rua', 'Pela cidade', 'map', [
            'Excuse me, is there a bank nearby?~Com licença, há um banco por perto?~ik-skiúz|mi|iz|dhér|â|bénk|nir-bai~desculpe|me|há (com there)|ali|um|banco|por perto',
            'Yes, across the street.~Sim, do outro lado da rua.~iés|â-krós|dhâ|strit~sim|do outro lado|a|rua',
            'Next to the pharmacy?~Ao lado da farmácia?~nékst|tâ|dhâ|fár-mâ-si~próximo|a|a|farmácia',
            'That\'s right.~Isso mesmo.~dhéts|rait~isso é (that is)|certo'
        ]],
    ['city-weather', 'Conversando sobre o tempo', 'Pela cidade', 'sun', [
            'It\'s a beautiful day!~Está um dia lindo!~its|â|biú-di-fâl|dêi~sujeito impessoal está (it is)|um|lindo|dia',
            'Yes, but it\'s hot.~Sim, mas está quente.~iés|bât|its|hát~sim|mas|sujeito impessoal está (it is)|quente',
            'Do you think it will rain?~Você acha que vai chover?~du|iú|think|it|uil|rêin~auxiliar de pergunta|você|acha|sujeito impessoal|vai (futuro)|chover',
            'Maybe tomorrow.~Talvez amanhã.~mêi-bi|tâ-má-rôu~talvez|amanhã'
        ]],
    ['emergency-lost', 'Perdi meu celular', 'Imprevistos', 'shield', [
            'I need help.~Eu preciso de ajuda.~ai|nid|hélp~eu|preciso|ajuda',
            'What happened?~O que aconteceu?~uót|hé-pând~o que|aconteceu',
            'I lost my phone.~Eu perdi meu celular.~ai|lóst|mai|fôun~eu|perdi|meu|celular',
            'Where did you last see it?~Onde você o viu pela última vez?~uér|did|iú|lést|si|it~onde|auxiliar de passado|você|por último|ver|isso'
        ]],
    ['daily-routine', 'Falando sobre sua rotina', 'Rotina', 'sun', [
            'What time do you wake up?~A que horas você acorda?~uót|taim|du|iú|uêik|âp~qual|horário|auxiliar de pergunta|você|acordar (com up)|parte de wake up',
            'I wake up at seven.~Eu acordo às sete.~ai|uêik|âp|ét|sé-vân~eu|acordar (com up)|parte de wake up|às|sete',
            'Do you work from home?~Você trabalha de casa?~du|iú|uârk|frâm|hôum~auxiliar de pergunta|você|trabalha|de|casa',
            'Yes, every day.~Sim, todos os dias.~iés|év-ri|dêi~sim|cada|dia'
        ]],
    ['making-friends', 'Trocando contatos', 'Vida social', 'users', [
            'Are you on Instagram?~Você está no Instagram?~ar|iú|on|íns-tâ-grém~está|você|em|Instagram',
            'Yes, what\'s your username?~Sim, qual é seu nome de usuário?~iés|uóts|iór|iú-zer-nêim~sim|qual é (what is)|seu|nome de usuário',
            'It\'s Bruno.~É Bruno.~its|bru-no~isso é (it is)|Bruno',
            'Great! See you soon.~Ótimo! Até breve.~grêit|si|iú|sun~ótimo|ver|você|em breve'
        ]]
];
const idiomNotes: Record<string, string> = { "Here you go.": 'Expressão usada ao entregar algo: significa “aqui está”. Aprenda o bloco inteiro.', "Right this way.": 'Forma educada de indicar o caminho: “por aqui”. O sentido vem da expressão completa.', "What do you do?": 'Em uma apresentação, esta pergunta normalmente significa “com o que você trabalha?”.', "Catch you later!": 'Despedida informal: “até mais”. Não traduzimos catch literalmente nesta expressão.', "Just chilling.": 'Expressão informal para dizer que você está relaxando, sem fazer nada especial.', "Of course!": 'Of course significa “claro”. A tradução literal de cada palavra não explica a expressão.', "Of course. No rush.": 'Of course = claro. No rush = sem pressa. Aprenda essas duas combinações como blocos.', "Sounds good!": 'Use para concordar com uma sugestão: “parece bom” ou “combinado”.', "Yes, under Bruno.": 'Ao informar uma reserva, under + nome significa “em nome de”.', "Yes, loud and clear.": 'Loud and clear indica que você está ouvindo perfeitamente.', "Can I try it on?": 'Try on é um phrasal verb: significa experimentar uma roupa.', "Want to grab a coffee?": 'Grab a coffee é uma maneira informal de dizer “tomar um café”.' };
const speakerNames: Record<string, [
    string,
    string
]> = { "cafe-order": ["Barista", "Você"], "restaurant-table": ["Você", "Recepção"], "restaurant-menu": ["Você", "Atendente"], "airport-checkin": ["Agente", "Você"], "airport-gate": ["Você", "Funcionário"], "hotel-checkin": ["Você", "Recepção"], "hotel-wifi": ["Você", "Recepção"], "ride-destination": ["Motorista", "Você"], "subway-ticket": ["Você", "Atendente"], "shopping-size": ["Atendente", "Você"], "shopping-pay": ["Você", "Caixa"], "market-find": ["Você", "Funcionário"], "meet-neighbor": ["Você", "Vizinho"], "weekend-plans": ["Alex", "Bruno"], "friendly-slang": ["Alex", "Bruno"], "work-intro": ["Colega", "Você"], "work-meeting": ["Apresentador", "Participante"], "phone-call": ["Pessoa", "Bruno"], "ask-help": ["Você", "Pessoa"], "city-directions": ["Você", "Pessoa"], "city-weather": ["Alex", "Bruno"], "emergency-lost": ["Você", "Atendente"], "daily-routine": ["Colega", "Você"], "making-friends": ["Você", "Novo amigo"] };
export const dialogues: Lesson[] = scenes.map(([id, title, category, icon, lines]) => ({ id, title, category, icon, description: 'Uma conversa completa para praticar na vida real.', phrases: lines.map((line, index) => {
        const [en, pt, soundText, meaningText] = line.split('~');
        const tokens = en.replace(/[.,!?]/g, '').split(/\s+/);
        const sounds = soundText.split('|');
        const meanings = meaningText.split('|');
        if (tokens.length !== sounds.length || tokens.length !== meanings.length)
            throw Error('Token mismatch: ' + en);
        return { en, pt, sound: sounds.join(' '), words: tokens.map((token, i) => [token, meanings[i], sounds[i]] as [
                string,
                string,
                string
            ]), note: idiomNotes[en], role: speakerNames[id][index % 2] };
    }) }));
