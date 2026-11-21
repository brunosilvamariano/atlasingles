import type { SceneSpec } from './types';
// Reduced spoken forms, current slang and the false friends Brazilians trip on most.
// Same four columns as the rest of the collection: English, Portuguese, pronunciation and meaning per word.
export const newScenes: SceneSpec[] = [
    { id: 'slang-gonna', title: 'Gonna, wanna, gotta', category: 'Gírias & expressões', icon: 'message', level: 'basic', cefr: 'A2', objective: 'Entender e usar as formas reduzidas da fala.', context: 'Dois amigos combinam a noite por mensagem de voz.', tip: 'Na fala, “going to” vira “gonna”, “want to” vira “wanna” e “have got to” vira “gotta”. Em textos formais, escreva a forma completa.', speakers: ['Alex', 'Bruno'], lines: [
            "What are you gonna do tonight?~O que você vai fazer hoje à noite?~uót|ar|iú|gâ-nâ|du|tâ-nait~o que|está / vai|você|vai (going to)|fazer|hoje à noite",
            "I'm gonna stay home and relax.~Vou ficar em casa e relaxar.~aim|gâ-nâ|stêi|hôum|énd|ri-léks~eu estou (I am)|vou (going to)|ficar|em casa|e|relaxar",
            "Wanna watch a movie with me?~Quer ver um filme comigo?~uá-nâ|uátch|â|mu-vi|uídh|mi~quer (want to)|assistir|um|filme|com|mim",
            "Sure, but I gotta finish this first.~Claro, mas eu tenho que terminar isso antes.~shur|bât|ai|gá-râ|fí-nish|dhis|fârst~claro|mas|eu|tenho que (have got to)|terminar|isso|primeiro",
            "No rush. Gimme a call later.~Sem pressa. Me liga depois.~nôu|râsh|gí-mi|â|kól|lêi-der~sem|pressa|me dê (give me)|uma|ligação|depois",
            "Sounds good. Catch you later!~Combinado. Até mais!~sáundz|gud|kétch|iú|lêi-der~soa|bom|pegar (até mais)|você|depois"
        ] },
    { id: 'slang-reactions', title: 'Reagindo como um nativo', category: 'Gírias & expressões', icon: 'message', level: 'basic', cefr: 'A2', objective: 'Reagir a uma boa notícia com expressões naturais.', context: 'Uma amiga conta uma novidade.', tip: '“No way!” mostra surpresa (“não acredito!”), não discordância. “Stoked” é “muito animado”.', speakers: ['Ana', 'Ben'], lines: [
            "I got the job!~Consegui o emprego!~ai|gát|dhâ|djáb~eu|consegui|o|emprego",
            "No way! That's awesome!~Não acredito! Que incrível!~nôu|uêi|dhéts|ó-sâm~não|jeito (no way: não acredito)|isso é (that is)|incrível",
            "I know! I'm so stoked.~Pois é! Estou muito animada.~ai|nôu|aim|sôu|stôukt~eu|sei (I know: pois é)|eu estou (I am)|tão|muito animado (gíria)",
            "For sure. You totally earned it.~Com certeza. Você mereceu demais.~fór|shur|iú|tôu-dâ-li|ârnd|it~com|certeza|você|totalmente|mereceu / conquistou|isso",
            "Thanks! Wanna grab dinner to celebrate?~Obrigada! Quer jantar fora para comemorar?~thénks|uá-nâ|gréb|dí-ner|tâ|sé-lâ-brêit~obrigado|quer (want to)|pegar (grab: comer algo)|jantar|para|comemorar",
            "Totally. Dinner's on me!~Com certeza. O jantar é por minha conta!~tôu-dâ-li|dí-nerz|on|mi~totalmente (com certeza)|o jantar é (dinner is)|por conta de (on me)|mim"
        ] },
    { id: 'slang-texting', title: 'omw, idk, brb: mensagens de texto', category: 'Gírias & expressões', icon: 'phone', level: 'intermediate', cefr: 'B1', objective: 'Entender abreviações comuns em mensagens.', context: 'Dois amigos trocam mensagens antes de se encontrar.', tip: 'omw = on my way · idk = I don’t know · tbh = to be honest · brb = be right back · lol = laughing out loud · ngl = not gonna lie. Use só entre amigos.', speakers: ['Bruno', 'Alex'], lines: [
            "Hey, omw. Be there in ten.~Oi, tô a caminho. Chego em dez minutos.~hêi|ôu-ém-dâ-bâl-iu|bi|dhér|in|tén~oi|a caminho (on my way)|estar|lá|em|dez",
            "Cool. Idk where to park, though.~Beleza. Só não sei onde estacionar.~kul|ai-di-kêi|uér|tâ|park|dhôu~legal|não sei (I don't know)|onde|para|estacionar|porém",
            "Tbh, the lot behind the building is easier.~Sinceramente, o estacionamento atrás do prédio é mais fácil.~ti-bi-êitch|dhâ|lát|bi-háind|dhâ|bíl-din|iz|í-zi-er~sinceramente (to be honest)|o|estacionamento|atrás de|o|prédio|é|mais fácil",
            "Got it. Brb, getting gas.~Entendi. Já volto, vou abastecer.~gát|it|bi-ar-bi|gué-din|gués~entendi (got)|isso|já volto (be right back)|pegando|gasolina",
            "Lol, take your time. No rush.~Haha, vai com calma. Sem pressa.~lál|têik|iór|taim|nôu|râsh~rindo alto (laughing out loud)|leve|seu|tempo|sem|pressa",
            "Ngl, I'm kinda hungry already.~Não vou mentir, já tô meio com fome.~én-dji-él|aim|káin-dâ|hân-gri|ól-ré-di~não vou mentir (not gonna lie)|eu estou (I am)|meio (kind of)|com fome|já"
        ] },
    { id: 'slang-modern', title: 'Vibe, low-key, ghosting', category: 'Gírias & expressões', icon: 'users', level: 'advanced', cefr: 'C1', objective: 'Reconhecer gírias atuais e o tom de cada uma.', context: 'Duas pessoas conversam sobre um café novo e um encontro que não deu certo.', tip: '“Low-key” = discretamente, meio que. “To ghost” = sumir sem dar explicação. Gírias mudam rápido: entenda, mas use com moderação.', speakers: ['Ana', 'Ben'], lines: [
            "That new café has such a good vibe.~Aquele café novo tem uma energia muito boa.~dhét|nu|ké-fêi|héz|sâtch|â|gud|váib~aquele|novo|café|tem|tão|uma|boa|vibe (clima, energia)",
            "Low-key, it's my favorite spot now.~Meio que virou meu lugar favorito.~lôu-ki|its|mai|fêi-vâ-rit|spát|náu~discretamente (meio que)|é (it is)|meu|favorito|lugar|agora",
            "Did you ever hear back from that guy?~Aquele cara chegou a te responder?~did|iú|é-ver|hir|bék|frâm|dhét|gai~auxiliar de passado|você|alguma vez|ouvir|de volta (hear back: ter resposta)|de|aquele|cara",
            "Nope. He totally ghosted me.~Não. Ele sumiu completamente.~nôup|hi|tôu-dâ-li|gôus-tid|mi~não (informal)|ele|totalmente|sumiu sem explicação|me",
            "Ugh, that's rough. His loss, honestly.~Ah, que chato. Ele que perdeu, sinceramente.~âg|dhéts|râf|hiz|lós|á-nâst-li~ah (frustração)|isso é (that is)|difícil / chato|dele|perda|sinceramente",
            "Thanks. I'm over it, for real.~Valeu. Já superei, de verdade.~thénks|aim|ôu-ver|it|fór|ril~obrigado|eu estou (I am)|além de (over: superei)|isso|de|verdade"
        ] },
    { id: 'trap-push-library', title: 'Push, library, parents', category: 'Armadilhas do português', icon: 'shield', level: 'basic', cefr: 'A2', objective: 'Evitar falsos cognatos do dia a dia.', context: 'Dois amigos saem de uma loja e conversam sobre a semana.', tip: 'Push = empurrar (puxar é pull). Library = biblioteca (livraria é bookstore). Parents = pais (parentes é relatives).', speakers: ['Você', 'Amiga'], lines: [
            "Push the door, it's open.~Empurre a porta, está aberta.~push|dhâ|dór|its|ôu-pân~empurre (não é puxar)|a|porta|está (it is)|aberta",
            "Oh, I pulled it. My bad!~Ah, eu puxei. Foi mal!~ôu|ai|puld|it|mai|béd~ah|eu|puxei|ela|meu|ruim (my bad: foi mal)",
            "Are you going to the library later?~Você vai à biblioteca mais tarde?~ar|iú|gôu-in|tâ|dhâ|lái-bré-ri|lêi-der~está|você|indo|para|a|biblioteca (não é livraria)|mais tarde",
            "Yes, I need to return a book.~Sim, preciso devolver um livro.~iés|ai|nid|tâ|ri-târn|â|buk~sim|eu|preciso|marca o infinitivo|devolver|um|livro",
            "And my parents are visiting this weekend.~E meus pais vêm me visitar neste fim de semana.~énd|mai|pé-rânts|ar|ví-zi-din|dhis|uik-énd~e|meus|pais (não é parentes)|estão|visitando|este|fim de semana",
            "Nice! Say hi to your mom and dad.~Que legal! Manda um oi para sua mãe e seu pai.~nais|sêi|hai|tâ|iór|mám|énd|déd~legal|diga|oi|para|sua / seu|mãe|e|pai"
        ] },
    { id: 'trap-age-agree', title: 'Idade, fome e concordância', category: 'Armadilhas do português', icon: 'shield', level: 'basic', cefr: 'A2', objective: 'Dizer a idade, concordar e falar de fome sem traduzir do português.', context: 'Dois colegas almoçam juntos.', tip: 'Em inglês, idade usa “to be”: I’m 34 (nunca “I have 34 years”). Concordar é “I agree” (nunca “I’m agree”). Fome também: I’m hungry.', speakers: ['Colega', 'Você'], lines: [
            "How old is your daughter?~Quantos anos tem sua filha?~háu|ôuld|iz|iór|dó-der~como|velho (how old: quantos anos)|é / está|sua|filha",
            "She's six. I'm thirty-four.~Ela tem seis. Eu tenho trinta e quatro.~shiz|siks|aim|thâr-di-fór~ela é (she is: ela tem)|seis|eu sou (I am: eu tenho)|trinta e quatro",
            "I think this restaurant is great.~Acho este restaurante ótimo.~ai|think|dhis|rés-tâ-ránt|iz|grêit~eu|acho|este|restaurante|é|ótimo",
            "I agree. The food is amazing.~Concordo. A comida é incrível.~ai|â-grí|dhâ|fud|iz|â-mêi-zin~eu|concordo (sem am)|a|comida|é|incrível",
            "Are you still hungry?~Você ainda está com fome?~ar|iú|stil|hân-gri~está|você|ainda|com fome (to be hungry)",
            "No, I'm full. Thanks!~Não, estou satisfeito. Obrigado!~nôu|aim|ful|thénks~não|eu estou (I am)|cheio (satisfeito)|obrigado"
        ] },
    { id: 'trap-actually', title: 'Actually, eventually, at the moment', category: 'Armadilhas do português', icon: 'briefcase', level: 'intermediate', cefr: 'B1', objective: 'Usar actually e eventually com o sentido certo.', context: 'Duas pessoas se conhecem em um evento.', tip: 'Actually = na verdade (atualmente é currently / at the moment). Eventually = no fim, um dia (eventualmente é occasionally).', speakers: ['Alex', 'Bruno'], lines: [
            "So you're a teacher, right?~Então você é professor, certo?~sôu|iór|â|tí-tcher|rait~então|você é (you are)|um|professor|certo",
            "Actually, I'm a designer.~Na verdade, sou designer.~ék-tchu-â-li|aim|â|di-zái-ner~na verdade (não é atualmente)|eu sou (I am)|um|designer",
            "Are you working on anything big at the moment?~Você está trabalhando em algo grande no momento?~ar|iú|uâr-kin|on|é-ni-thin|big|ét|dhâ|môu-mânt~está|você|trabalhando|em|algo|grande|em|o|momento (atualmente)",
            "Yes, a new app. We'll launch it eventually.~Sim, um app novo. Vamos lançar no fim das contas.~iés|â|nu|ép|uil|lóntch|it|i-vén-tchu-â-li~sim|um|novo|aplicativo|nós vamos (we will)|lançar|ele|um dia / no fim (não é às vezes)",
            "Do you enjoy it?~Você gosta disso?~du|iú|in-djói|it~auxiliar de pergunta|você|aproveita / gosta de|isso",
            "I do. I'm learning a lot, especially about users.~Gosto. Estou aprendendo muito, principalmente sobre usuários.~ai|du|aim|lâr-nin|â|lát|is-pé-shâ-li|â-báut|iú-zerz~eu|gosto (resposta curta com do)|eu estou (I am)|aprendendo|um|monte (a lot: muito)|especialmente|sobre|usuários"
        ] },
    { id: 'trap-make-do', title: 'Make, do, take, pay', category: 'Armadilhas do português', icon: 'briefcase', level: 'intermediate', cefr: 'B1', objective: 'Usar as combinações certas de verbos que confundem brasileiros.', context: 'Uma gestora conversa sobre a organização de uma viagem de trabalho.', tip: 'Make a decision (não “take”). Pay attention (não “give”). Do research, do your best, make a list, have a meeting.', speakers: ['Gestora', 'Você'], lines: [
            "Have you made a decision about the trip?~Você já tomou uma decisão sobre a viagem?~hév|iú|mêid|â|di-sí-jân|â-báut|dhâ|trip~auxiliar de tempo composto|você|tomou (make a decision)|uma|decisão|sobre|a|viagem",
            "Not yet. I need to do some research first.~Ainda não. Preciso pesquisar um pouco antes.~nát|iét|ai|nid|tâ|du|sâm|ri-sârtch|fârst~não|ainda|eu|preciso|marca o infinitivo|fazer (do research)|alguma|pesquisa|antes",
            "Take your time, but pay attention to the prices.~Sem pressa, mas preste atenção aos preços.~têik|iór|taim|bât|pêi|â-tén-shân|tâ|dhâ|prái-siz~leve|seu|tempo|mas|pague (pay attention: preste)|atenção|a|os|preços",
            "Sure. I'll make a list of options.~Claro. Vou fazer uma lista de opções.~shur|ail|mêik|â|list|âv|áp-shânz~claro|eu vou (I will)|fazer (make a list)|uma|lista|de|opções",
            "Great. Let's have a quick meeting tomorrow.~Ótimo. Vamos fazer uma reunião rápida amanhã.~grêit|léts|hév|â|kuík|mí-din|tâ-má-rôu~ótimo|vamos (let us)|ter (have a meeting)|uma|rápida|reunião|amanhã",
            "Perfect. I'll do my best to finish today.~Perfeito. Vou fazer o possível para terminar hoje.~pâr-fikt|ail|du|mai|bést|tâ|fí-nish|tâ-dêi~perfeito|eu vou (I will)|fazer (do my best)|meu|melhor|para|terminar|hoje"
        ] },
    { id: 'trap-sensible', title: 'Sensible, exquisite, comprehensive', category: 'Armadilhas do português', icon: 'shield', level: 'advanced', cefr: 'C1', objective: 'Distinguir adjetivos que parecem português, mas não são.', context: 'Um casal conversa sobre uma mudança de cidade.', tip: 'Sensible = sensato (sensível é sensitive). Exquisite = requintado (esquisito é weird). Comprehensive = completo, abrangente (compreensivo é understanding).', speakers: ['Ana', 'Ben'], lines: [
            "Moving closer to work was a sensible decision.~Mudar para perto do trabalho foi uma decisão sensata.~mu-vin|klôu-ser|tâ|uârk|uáz|â|sén-sâ-bâl|di-sí-jân~mudar|mais perto|de|trabalho|foi|uma|sensata (não é sensível)|decisão",
            "Thanks. I tried not to decide on impulse.~Obrigado. Tentei não decidir por impulso.~thénks|ai|traid|nát|tâ|di-sáid|on|ím-pâls~obrigado|eu|tentei|não|marca o infinitivo|decidir|por|impulso",
            "The dinner at the new place was exquisite.~O jantar no lugar novo estava requintado.~dhâ|dí-ner|ét|dhâ|nu|plêis|uáz|ék-skuí-zit~o|jantar|em|o|novo|lugar|estava|requintado (não é esquisito)",
            "It was, although the dessert was a bit weird.~Estava, embora a sobremesa fosse meio esquisita.~it|uáz|ól-dhôu|dhâ|di-zârt|uáz|â|bit|uírd~ele|estava|embora|a|sobremesa|estava|um|pouco|esquisita (weird)",
            "We still need a comprehensive plan for the move.~Ainda precisamos de um plano completo para a mudança.~ui|stil|nid|â|kám-pri-hén-siv|plén|fór|dhâ|muv~nós|ainda|precisamos|um|completo / abrangente (não é compreensivo)|plano|para|a|mudança",
            "Agreed. And let's be understanding with each other.~Concordo. E vamos ser compreensivos um com o outro.~â-gríd|énd|léts|bi|ân-der-stén-din|uídh|itch|â-dher~concordo|e|vamos (let us)|ser|compreensivos (understanding)|com|cada|outro (each other: um com o outro)"
        ] },
    { id: 'trap-attend-assist', title: 'Attend, assist, realize', category: 'Armadilhas do português', icon: 'briefcase', level: 'advanced', cefr: 'C1', objective: 'Usar attend, assist e realize sem confundir com o português.', context: 'Dois colegas organizam um relatório depois de uma conferência.', tip: 'Attend = comparecer (atender o telefone é answer). Assist = ajudar (assistir é watch). Realize = perceber (realizar é carry out ou make happen).', speakers: ['Colega', 'Você'], lines: [
            "Did you attend the conference last week?~Você foi à conferência semana passada?~did|iú|â-ténd|dhâ|kán-frâns|lést|uik~auxiliar de passado|você|compareceu a (não é atender)|a|conferência|passada|semana",
            "I did. I also watched the keynote online.~Fui. Também assisti à palestra principal on-line.~ai|did|ai|ól-sôu|uátcht|dhâ|kí-nôut|án-lain~eu|fiz (resposta curta: fui)|eu|também|assisti (watch)|a|palestra principal|on-line",
            "Could you assist me with the report?~Você poderia me ajudar com o relatório?~kud|iú|â-sist|mi|uídh|dhâ|ri-pórt~poderia|você|ajudar (não é assistir)|me|com|o|relatório",
            "Of course. I just realized the deadline is today.~Claro. Acabei de perceber que o prazo é hoje.~âv|kórs|ai|djâst|rí-â-laizd|dhâ|déd-lain|iz|tâ-dêi~de|curso (of course: claro)|eu|acabei de|percebi (não é realizei)|o|prazo|é|hoje",
            "Then let's carry out the final review now.~Então vamos fazer a revisão final agora.~dhén|léts|ké-ri|áut|dhâ|fái-nâl|ri-viu|náu~então|vamos (let us)|realizar (carry out)|completamente|a|final|revisão|agora",
            "Deal. I'll answer a few emails and join you.~Fechado. Vou responder alguns e-mails e já te encontro.~dil|ail|én-ser|â|fiu|í-mêilz|énd|djóin|iú~combinado (deal)|eu vou (I will)|responder (atender: answer)|uns|poucos|e-mails|e|juntar-me a|você"
        ] },
];
