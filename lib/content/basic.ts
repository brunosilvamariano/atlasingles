import type { SceneSpec } from './types';
// The four columns are English, natural Portuguese, aligned pronunciation and contextual glosses.
export const basicScenes: SceneSpec[] = [
    { id: 'start-spelling', title: 'Soletrando seu nome', category: 'Primeiros passos', icon: 'message', level: 'basic', cefr: 'A1', objective: 'Dizer e soletrar seu nome.', context: 'Você está se cadastrando em uma aula.', tip: 'Use “How do you spell…?” para perguntar como se escreve.', speakers: ['Recepção', 'Bruno'], lines: [
            'What\'s your first name?~Qual é o seu primeiro nome?~uóts|iór|fârst|nêim~qual é (what is)|seu|primeiro|nome',
            'My first name is Bruno.~Meu primeiro nome é Bruno.~mai|fârst|nêim|iz|bru-no~meu|primeiro|nome|é|Bruno',
            'How do you spell that?~Como se escreve?~háu|du|iú|spél|dhét~como|auxiliar de pergunta|você|soletra|isso',
            'B, R, U, N, O.~B, R, U, N, O.~bi|ar|iu|én|ôu~letra B|letra R|letra U|letra N|letra O'
        ] },
    { id: 'life-laundry', title: 'Usando a lavanderia', category: 'Vida real', icon: 'sun', level: 'basic', cefr: 'A1', objective: 'Perguntar onde lavar roupas.', context: 'Você vai lavar roupas em uma lavanderia.', tip: '“How long” pergunta duração, não distância.', speakers: ['Você', 'Atendente'], lines: [
            'Is this machine free?~Esta máquina está disponível?~iz|dhis|mâ-shín|fri~está|esta|máquina|disponível',
            'Yes, you can use it.~Sim, você pode usá-la.~iés|iú|kén|iuz|it~sim|você|pode|usar|ela (a máquina)',
            'How long does it take?~Quanto tempo demora?~háu|lóng|dâz|it|têik~como|longo (com how: quanto tempo)|auxiliar de pergunta|isso|levar (tempo)',
            'About thirty minutes.~Cerca de trinta minutos.~â-báut|thâr-di|mí-nits~cerca de|trinta|minutos'
        ] },
    { id: 'travel-seat', title: 'Encontrando seu assento', category: 'Viagens', icon: 'plane', level: 'basic', cefr: 'A1', objective: 'Identificar assentos no avião.', context: 'Você acabou de embarcar.', tip: '“Aisle” tem s silencioso e soa aproximadamente “ail”.', speakers: ['Você', 'Comissário'], lines: [
            'Where is my seat?~Onde fica meu assento?~uér|iz|mai|sit~onde|fica|meu|assento',
            'What\'s your seat number?~Qual é o número do seu assento?~uóts|iór|sit|nâm-ber~qual é (what is)|seu|assento|número',
            'Twelve A.~Doze A.~tuélv|êi~doze|letra A',
            'It\'s by the window.~É junto à janela.~its|bai|dhâ|uín-dôu~ele fica (it is)|junto a|a|janela'
        ] },
    { id: 'slang-thanks', title: 'Obrigado, de um jeito casual', category: 'Gírias & expressões', icon: 'message', level: 'basic', cefr: 'A1', objective: 'Agradecer informalmente.', context: 'Um colega fez um pequeno favor.', tip: '“No worries” é informal e significa “sem problema”.', speakers: ['Você', 'Colega'], lines: [
            'Thanks a lot!~Muito obrigado!~thénks|â|lát~obrigado|um|muito (a lot)',
            'No worries.~Sem problema.~nôu|uâ-riz~nenhuma|preocupação (expressão sem problema)',
            'You saved my day.~Você salvou meu dia.~iú|sêivd|mai|dêi~você|salvou|meu|dia',
            'Happy to help!~Fico feliz em ajudar!~hé-pi|tâ|hélp~feliz|em|ajudar'
        ] },
    { id: 'work-break', title: 'Uma pausa no trabalho', category: 'Trabalho', icon: 'briefcase', level: 'basic', cefr: 'A1', objective: 'Conversar sobre pausas e horários.', context: 'Você encontra um colega na copa.', tip: '“Take a break” significa fazer uma pausa.', speakers: ['Colega', 'Você'], lines: [
            'Are you taking a break?~Você está fazendo uma pausa?~ar|iú|têi-kin|â|brêik~está|você|fazendo (com break)|uma|pausa',
            'Yes, just five minutes.~Sim, só cinco minutos.~iés|djâst|faiv|mí-nits~sim|apenas|cinco|minutos',
            'Do you want some coffee?~Você quer um pouco de café?~du|iú|uánt|sâm|có-fi~auxiliar de pergunta|você|quer|um pouco de|café',
            'Yes, please. Thank you.~Sim, por favor. Obrigado.~iés|pliz|thénk|iú~sim|por favor|agradecer|você (thank you: obrigado)'
        ] },
    { id: 'routine-time', title: 'Que horas são?', category: 'Rotina', icon: 'sun', level: 'basic', cefr: 'A1', objective: 'Perguntar e informar as horas.', context: 'Você está saindo para um compromisso.', tip: '“It\'s” (it is) também aparece ao informar horas: “It\'s eight fifteen.”', speakers: ['Você', 'Amigo'], lines: [
            'What time is it?~Que horas são?~uót|taim|iz|it~qual|hora|é|sujeito usado para horas',
            'It\'s eight fifteen.~São oito e quinze.~its|êit|fif-tín~sujeito usado para horas é (it is)|oito|quinze',
            'Are we late?~Estamos atrasados?~ar|ui|lêit~estamos|nós|atrasados',
            'No, we have time.~Não, temos tempo.~nôu|ui|hév|taim~não|nós|temos|tempo'
        ] },
    { id: 'shopping-receipt', title: 'A sacola e o recibo', category: 'Compras', icon: 'bag', level: 'basic', cefr: 'A1', objective: 'Responder perguntas do caixa.', context: 'Você está terminando uma compra.', tip: '“Receipt” significa recibo e o p não é pronunciado.', speakers: ['Caixa', 'Você'], lines: [
            'Do you need a bag?~Você precisa de uma sacola?~du|iú|nid|â|bég~auxiliar de pergunta|você|precisa|uma|sacola',
            'No, thank you.~Não, obrigado.~nôu|thénk|iú~não|agradecer|você (thank you: obrigado)',
            'Would you like a receipt?~Você gostaria de um recibo?~uâd|iú|laik|â|ri-sít~auxiliar de pedido educado|você|gostar|um|recibo',
            'Yes, please.~Sim, por favor.~iés|pliz~sim|por favor'
        ] },
    { id: 'restaurant-water', title: 'Pedindo água e gelo', category: 'Restaurantes', icon: 'utensils', level: 'basic', cefr: 'A1', objective: 'Pedir uma bebida e especificar preferências.', context: 'Um atendente oferece bebidas.', tip: '“No ice” é uma forma curta e comum de pedir sem gelo.', speakers: ['Atendente', 'Você'], lines: [
            'What would you like to drink?~O que você gostaria de beber?~uót|uâd|iú|laik|tâ|drink~o que|auxiliar de pedido educado|você|gostar|marca o infinitivo|beber',
            'Water, please.~Água, por favor.~uó-der|pliz~água|por favor',
            'With ice?~Com gelo?~uídh|ais~com|gelo',
            'No ice, please.~Sem gelo, por favor.~nôu|ais|pliz~sem|gelo|por favor'
        ] },
    { id: 'hotel-towels', title: 'Pedindo toalhas', category: 'Hospedagem', icon: 'hotel', level: 'basic', cefr: 'A1', objective: 'Pedir um item na recepção.', context: 'Faltam toalhas no seu quarto.', tip: '“Could I have…?” torna o pedido mais educado.', speakers: ['Você', 'Recepção'], lines: [
            'Could I have more towels?~Eu poderia receber mais toalhas?~kud|ai|hév|mór|táu-âlz~poderia|eu|receber|mais|toalhas',
            'Of course. What room?~Claro. Qual quarto?~âv|kórs|uót|rum~de|curso (of course: claro)|qual|quarto',
            'Room two hundred.~Quarto duzentos.~rum|tu|hân-dred~quarto|dois|cem (two hundred: duzentos)',
            'We\'ll bring them up.~Vamos levá-las ao seu quarto.~uil|bring|dhém|âp~nós vamos (futuro) (we will)|levar|elas|para cima (ao quarto)'
        ] },
    { id: 'transport-bus', title: 'Este ônibus vai ao centro?', category: 'Transporte', icon: 'train', level: 'basic', cefr: 'A1', objective: 'Confirmar o destino de um ônibus.', context: 'Você pergunta ao motorista antes de subir.', tip: '“Downtown” significa o centro da cidade nos EUA.', speakers: ['Você', 'Motorista'], lines: [
            'Does this bus go downtown?~Este ônibus vai ao centro?~dâz|dhis|bâs|gôu|dáun-táun~auxiliar de pergunta|este|ônibus|vai|centro da cidade',
            'Yes, it does.~Sim, vai.~iés|it|dâz~sim|ele|vai (retoma o verbo da pergunta)',
            'How much is the fare?~Quanto custa a passagem?~háu|mâtch|iz|dhâ|fér~como|quanto|custa|a|tarifa',
            'Two dollars.~Dois dólares.~tu|dá-lerz~dois|dólares'
        ] },
    { id: 'social-invite', title: 'Um convite simples', category: 'Vida social', icon: 'users', level: 'basic', cefr: 'A1', objective: 'Convidar e combinar um horário.', context: 'Você convida um amigo para caminhar.', tip: '“At” acompanha um horário específico.', speakers: ['Você', 'Amigo'], lines: [
            'Do you want to go for a walk?~Você quer dar uma caminhada?~du|iú|uánt|tâ|gôu|fór|â|uók~auxiliar de pergunta|você|quer|marca o infinitivo|ir|para|uma|caminhada',
            'Sure! What time?~Claro! Que horas?~shur|uót|taim~claro|qual|horário',
            'At five?~Às cinco?~ét|faiv~às|cinco',
            'Perfect. See you then.~Perfeito. Até lá.~pâr-fikt|si|iú|dhén~perfeito|ver|você|então (see you then: até lá)'
        ] },
    { id: 'communication-word', title: 'Como se diz isso?', category: 'Comunicação', icon: 'message', level: 'basic', cefr: 'A1', objective: 'Pedir uma palavra que você não conhece.', context: 'Você aponta para uma cadeira.', tip: '“How do you say… in English?” ajuda a aprender durante a conversa.', speakers: ['Você', 'Professor'], lines: [
            'How do you say this in English?~Como se diz isto em inglês?~háu|du|iú|sêi|dhis|in|ín-glish~como|auxiliar de pergunta|você|diz|isto|em|inglês',
            'It\'s a chair.~É uma cadeira.~its|â|tchér~isto é (it is)|uma|cadeira',
            'Can you write it down?~Você pode escrever?~kén|iú|rait|it|dáun~pode|você|escrever|isso|parte de write down (anotar)',
            'Sure. Here you go.~Claro. Aqui está.~shur|hir|iú|gôu~claro|aqui|você|ir (here you go: aqui está)'
        ] },
    { id: 'city-restroom', title: 'Encontrando um banheiro', category: 'Pela cidade', icon: 'map', level: 'basic', cefr: 'A1', objective: 'Pedir uma informação com educação.', context: 'Você está em um shopping.', tip: '“Restroom” é comum nos EUA para banheiro público.', speakers: ['Você', 'Funcionário'], lines: [
            'Excuse me, where is the restroom?~Com licença, onde fica o banheiro?~ik-skiúz|mi|uér|iz|dhâ|rést-rum~desculpe|me|onde|fica|o|banheiro',
            'On the second floor.~No segundo andar.~on|dhâ|sé-kând|flór~em|o|segundo|andar',
            'Near the elevator?~Perto do elevador?~nir|dhâ|é-lâ-vêi-der~perto de|o|elevador',
            'Yes, on your right.~Sim, à sua direita.~iés|on|iór|rait~sim|em|sua|direita'
        ] },
    { id: 'problem-locked', title: 'A porta não abre', category: 'Imprevistos', icon: 'shield', level: 'basic', cefr: 'A1', objective: 'Descrever um problema simples.', context: 'Seu cartão não abre a porta do quarto.', tip: '“Does not work” significa não funciona.', speakers: ['Você', 'Recepção'], lines: [
            'My key doesn\'t work.~Minha chave não funciona.~mai|ki|dâ-zânt|uârk~minha|chave|não (does not)|funciona',
            'What\'s your room number?~Qual é o número do seu quarto?~uóts|iór|rum|nâm-ber~qual é (what is)|seu|quarto|número',
            'Room three ten.~Quarto trezentos e dez.~rum|thri|tén~quarto|três|dez (three ten: 310)',
            'Let me check your card.~Deixe eu verificar seu cartão.~lét|mi|tchék|iór|kard~deixe|me|verificar|seu|cartão'
        ] },
    { id: 'start-introductions', title: 'Apresentando outra pessoa', category: 'Primeiros passos', icon: 'users', level: 'basic', cefr: 'A2', objective: 'Apresentar um amigo e manter a conversa.', context: 'Você apresenta Ana a um colega.', tip: '“This is…” apresenta pessoas. Não é necessário traduzir this como “isto” nessa situação.', speakers: ['Bruno', 'Alex'], lines: [
            'This is my friend Ana.~Esta é minha amiga Ana.~dhis|iz|mai|frénd|é-na~esta|é|minha|amiga|Ana',
            'Nice to meet you, Ana.~Prazer em conhecer você, Ana.~nais|tâ|mit|iú|é-na~agradável|marca o infinitivo|conhecer|você|Ana',
            'She\'s from Brazil too.~Ela também é do Brasil.~shiz|frâm|brâ-zíl|tu~ela é (she is)|de|Brasil|também',
            'Is this your first visit?~Esta é sua primeira visita?~iz|dhis|iór|fârst|ví-zit~é|esta|sua|primeira|visita',
            'Yes, we arrived yesterday.~Sim, chegamos ontem.~iés|ui|â-ráivd|iés-ter-dêi~sim|nós|chegamos|ontem',
            'I hope you enjoy it here.~Espero que vocês gostem daqui.~ai|hôup|iú|in-djói|it|hir~eu|espero|vocês|gostem|isto|aqui'
        ] },
    { id: 'life-package', title: 'Recebendo uma encomenda', category: 'Vida real', icon: 'bag', level: 'basic', cefr: 'A2', objective: 'Confirmar entrega e localização de um pacote.', context: 'Você procura uma encomenda na portaria.', tip: '“Pick up” significa buscar ou retirar algo.', speakers: ['Você', 'Porteiro'], lines: [
            'I\'m here to pick up a package.~Vim retirar uma encomenda.~aim|hir|tâ|pik|âp|â|pé-kidj~eu estou (I am)|aqui|para|pegar (com up)|parte de pick up|uma|encomenda',
            'What name is it under?~Em que nome está?~uót|nêim|iz|it|ân-der~qual|nome|está|ela|em nome de',
            'Bruno. It arrived this morning.~Bruno. Chegou hoje de manhã.~bru-no|it|â-ráivd|dhis|mór-nin~Bruno|ela|chegou|esta|manhã',
            'Can I see your ID?~Posso ver seu documento?~kén|ai|si|iór|ai-di~posso|eu|ver|seu|documento de identificação',
            'Sure, here it is.~Claro, aqui está.~shur|hir|it|iz~claro|aqui|ele|está',
            'Please sign here.~Por favor, assine aqui.~pliz|sain|hir~por favor|assine|aqui'
        ] },
    { id: 'travel-luggage', title: 'Despachando a bagagem', category: 'Viagens', icon: 'plane', level: 'basic', cefr: 'A2', objective: 'Conversar sobre malas no aeroporto.', context: 'Você está no balcão de check-in.', tip: '“Check a bag” significa despachar uma mala.', speakers: ['Agente', 'Você'], lines: [
            'Are you checking any bags?~Você vai despachar alguma mala?~ar|iú|tché-kin|é-ni|bégz~auxiliar de ação|você|despachando|alguma|malas',
            'Just one suitcase.~Só uma mala.~djâst|uân|sut-kêis~apenas|uma|mala',
            'Please place it on the scale.~Coloque-a na balança, por favor.~pliz|plêis|it|on|dhâ|skêil~por favor|coloque|ela|em|a|balança',
            'Is it too heavy?~Ela está pesada demais?~iz|it|tu|hé-vi~está|ela|demais|pesada',
            'No, it\'s fine.~Não, está tudo certo.~nôu|its|fain~não|ela está (it is)|bem',
            'Great. Thank you for checking.~Ótimo. Obrigado por verificar.~grêit|thénk|iú|fór|tché-kin~ótimo|agradecer|você|por|verificar'
        ] },
    { id: 'slang-plans', title: 'Combinado ou quem sabe?', category: 'Gírias & expressões', icon: 'message', level: 'basic', cefr: 'A2', objective: 'Entender respostas informais a convites.', context: 'Dois amigos decidem o que fazer à noite.', tip: '“I\'m down” pode significar “eu topo”, dependendo do contexto.', speakers: ['Alex', 'Bruno'], lines: [
            'Are you down for pizza tonight?~Você topa pizza hoje à noite?~ar|iú|dáun|fór|pít-sa|tâ-nait~está|você|a fim (are you down)|para|pizza|hoje à noite',
            'I\'m down!~Eu topo!~aim|dáun~eu estou (I am)|a fim (I am down: eu topo)',
            'Awesome. Around seven?~Ótimo. Por volta das sete?~ó-sâm|â-ráund|sé-vân~ótimo|por volta de|sete',
            'That works for me.~Para mim está bom.~dhét|uârks|fór|mi~isso|funciona|para|mim',
            'I\'ll text you the address.~Vou mandar o endereço por mensagem.~ail|tékst|iú|dhâ|â-drés~eu vou (futuro) (I will)|mandar mensagem|você|o|endereço',
            'Sounds like a plan.~Combinado.~sáundz|laik|â|plén~soa|como|um|plano (expressão de concordância)'
        ] },
    { id: 'work-task', title: 'Entendendo uma tarefa', category: 'Trabalho', icon: 'briefcase', level: 'basic', cefr: 'A2', objective: 'Confirmar instruções e prazo.', context: 'Um colega pede sua ajuda com um relatório.', tip: '“By Friday” indica prazo: até sexta, inclusive.', speakers: ['Colega', 'Você'], lines: [
            'Can you update this report?~Você pode atualizar este relatório?~kén|iú|âp-dêit|dhis|ri-pórt~pode|você|atualizar|este|relatório',
            'Sure. What should I change?~Claro. O que devo mudar?~shur|uót|shud|ai|tchêindj~claro|o que|devo|eu|mudar',
            'Please add the new numbers.~Adicione os novos números, por favor.~pliz|éd|dhâ|nu|nâm-berz~por favor|adicione|os|novos|números',
            'When do you need it?~Para quando você precisa?~uén|du|iú|nid|it~quando|auxiliar de pergunta|você|precisa|dele',
            'By Friday morning.~Até sexta de manhã.~bai|frái-dêi|mór-nin~até (prazo)|sexta-feira|manhã',
            'Got it. I\'ll send it tomorrow.~Entendi. Vou enviá-lo amanhã.~gát|it|ail|sénd|it|tâ-má-rôu~entendido (got it)|isso|eu vou (futuro) (I will)|enviar|ele|amanhã'
        ] },
    { id: 'routine-habits', title: 'Falando sobre seus hábitos', category: 'Rotina', icon: 'sun', level: 'basic', cefr: 'A2', objective: 'Descrever frequência e hábitos.', context: 'Você conversa sobre exercícios com um colega.', tip: '“Usually” significa geralmente; “twice” significa duas vezes.', speakers: ['Colega', 'Você'], lines: [
            'What do you usually do after work?~O que você costuma fazer depois do trabalho?~uót|du|iú|iú-ju-â-li|du|éf-ter|uârk~o que|auxiliar de pergunta|você|geralmente|faz|depois de|trabalho',
            'I usually go to the gym.~Geralmente vou à academia.~ai|iú-ju-â-li|gôu|tâ|dhâ|djim~eu|geralmente|vou|a|a|academia',
            'How often do you go?~Com que frequência você vai?~háu|ó-fân|du|iú|gôu~como|frequentemente (how often: com que frequência)|auxiliar de pergunta|você|vai',
            'Twice a week.~Duas vezes por semana.~tuais|â|uik~duas vezes|por|semana',
            'Do you enjoy it?~Você gosta?~du|iú|in-djói|it~auxiliar de pergunta|você|gosta|disso',
            'Yes, it helps me relax.~Sim, me ajuda a relaxar.~iés|it|hélps|mi|ri-léks~sim|isso|ajuda|me|relaxar'
        ] },
    { id: 'shopping-return', title: 'Trocando uma camiseta', category: 'Compras', icon: 'bag', level: 'basic', cefr: 'A2', objective: 'Explicar o motivo de uma troca.', context: 'Você volta à loja com uma camiseta grande.', tip: '“Exchange” é trocar; “refund” é devolver o dinheiro.', speakers: ['Você', 'Atendente'], lines: [
            'I\'d like to exchange this shirt.~Gostaria de trocar esta camiseta.~aid|laik|tâ|iks-tchêindj|dhis|shârt~eu + auxiliar de pedido educado (I would)|gostar|marca o infinitivo|trocar|esta|camiseta',
            'What\'s wrong with it?~Qual é o problema com ela?~uóts|róng|uídh|it~o que está (what is)|errado|com|ela',
            'It\'s too big.~Ela é grande demais.~its|tu|big~ela é (it is)|demais|grande',
            'Do you have the receipt?~Você tem o recibo?~du|iú|hév|dhâ|ri-sít~auxiliar de pergunta|você|tem|o|recibo',
            'Yes, here it is.~Sim, aqui está.~iés|hir|it|iz~sim|aqui|ele|está',
            'We have a smaller size.~Temos um tamanho menor.~ui|hév|â|smó-ler|saiz~nós|temos|um|menor|tamanho'
        ] },
    { id: 'restaurant-order-fix', title: 'Corrigindo um pedido', category: 'Restaurantes', icon: 'utensils', level: 'basic', cefr: 'A2', objective: 'Informar que recebeu um pedido diferente.', context: 'Seu prato veio diferente do que pediu.', tip: '“I ordered…” explica o que você pediu, sem acusar ninguém.', speakers: ['Você', 'Atendente'], lines: [
            'Excuse me, I ordered the soup.~Com licença, eu pedi a sopa.~ik-skiúz|mi|ai|ór-derd|dhâ|sup~desculpe|me|eu|pedi|a|sopa',
            'I\'m sorry about that.~Sinto muito por isso.~aim|sá-ri|â-báut|dhét~eu estou (I am)|desculpe|por|isso',
            'Could you check my order?~Você poderia conferir meu pedido?~kud|iú|tchék|mai|ór-der~poderia|você|conferir|meu|pedido',
            'Of course. Just a moment.~Claro. Só um momento.~âv|kórs|djâst|â|môu-mânt~de|curso (of course: claro)|apenas|um|momento',
            'Thank you. I appreciate it.~Obrigado. Eu agradeço.~thénk|iú|ai|â-prí-shi-êit|it~agradecer|você|eu|agradeço|isso',
            'Your soup will be right out.~Sua sopa já vai sair.~iór|sup|uil|bi|rait|áut~sua|sopa|vai (futuro)|estar|logo (right out)|saindo'
        ] },
    { id: 'hotel-checkout-time', title: 'Combinando o check-out', category: 'Hospedagem', icon: 'hotel', level: 'basic', cefr: 'A2', objective: 'Perguntar horários e guardar as malas.', context: 'Seu voo sai depois do check-out.', tip: '“Leave my bags” significa deixar as malas; “pick them up” é buscá-las.', speakers: ['Você', 'Recepção'], lines: [
            'What time is checkout?~A que horas é o check-out?~uót|taim|iz|tchék-áut~qual|horário|é|check-out',
            'At eleven in the morning.~Às onze da manhã.~ét|i-lé-vân|in|dhâ|mór-nin~às|onze|em|a|manhã',
            'Can I leave my bags here?~Posso deixar minhas malas aqui?~kén|ai|liv|mai|bégz|hir~posso|eu|deixar|minhas|malas|aqui',
            'Yes, we can store them.~Sim, podemos guardá-las.~iés|ui|kén|stór|dhém~sim|nós|podemos|guardar|elas',
            'I\'ll pick them up at four.~Vou buscá-las às quatro.~ail|pik|dhém|âp|ét|fór~eu vou (futuro) (I will)|buscar (com up)|elas|parte de pick up|às|quatro',
            'No problem. Keep this ticket.~Sem problema. Guarde este comprovante.~nôu|prá-blâm|kip|dhis|tí-kit~nenhum|problema|guarde|este|comprovante'
        ] },
    { id: 'transport-wrong-stop', title: 'Passei do ponto', category: 'Transporte', icon: 'train', level: 'basic', cefr: 'A2', objective: 'Pedir ajuda após perder um ponto.', context: 'Você passou da parada que precisava.', tip: '“Get off” significa descer de ônibus, trem ou metrô.', speakers: ['Você', 'Passageiro'], lines: [
            'I think I missed my stop.~Acho que passei do meu ponto.~ai|think|ai|mist|mai|stáp~eu|acho|eu|perdi|meu|ponto',
            'Where were you going?~Para onde você estava indo?~uér|uâr|iú|gôu-in~onde|estava|você|indo',
            'To the museum.~Para o museu.~tâ|dhâ|miu-zí-âm~para|o|museu',
            'Get off at the next stop.~Desça no próximo ponto.~guét|óf|ét|dhâ|nékst|stáp~desça (com off)|parte de get off|em|o|próximo|ponto',
            'Can I walk from there?~Posso ir a pé de lá?~kén|ai|uók|frâm|dhér~posso|eu|caminhar|de|lá',
            'Yes, it\'s only two blocks.~Sim, são só duas quadras.~iés|its|ôun-li|tu|bláks~sim|isso é (it is)|somente|duas|quadras'
        ] },
    { id: 'social-food', title: 'Jantando na casa de um amigo', category: 'Vida social', icon: 'users', level: 'basic', cefr: 'A2', objective: 'Oferecer ajuda e elogiar.', context: 'Você foi convidado para um jantar.', tip: '“Anything” é comum em perguntas sobre precisar de algo.', speakers: ['Você', 'Anfitrião'], lines: [
            'Thank you for inviting me.~Obrigado por me convidar.~thénk|iú|fór|in-vái-din|mi~agradecer|você|por|convidar|me',
            'I\'m glad you could come.~Que bom que você pôde vir.~aim|gléd|iú|kud|kâm~eu estou (I am)|contente|você|pôde|vir',
            'Do you need help with anything?~Você precisa de ajuda com alguma coisa?~du|iú|nid|hélp|uídh|é-ni-thin~auxiliar de pergunta|você|precisa|ajuda|com|alguma coisa',
            'Could you set the table?~Você poderia pôr a mesa?~kud|iú|sét|dhâ|têi-bol~poderia|você|arrumar|a|mesa',
            'Sure. The food smells amazing.~Claro. A comida está com um cheiro incrível.~shur|dhâ|fud|smélz|â-mêi-zin~claro|a|comida|cheira|incrível',
            'I hope you like it.~Espero que você goste.~ai|hôup|iú|laik|it~eu|espero|você|goste|disso'
        ] },
    { id: 'communication-voicemail', title: 'Deixando um recado', category: 'Comunicação', icon: 'phone', level: 'basic', cefr: 'A2', objective: 'Deixar um recado por telefone.', context: 'Você liga e a pessoa não pode atender.', tip: '“Call me back” significa retornar minha ligação.', speakers: ['Recepção', 'Você'], lines: [
            'She\'s not available right now.~Ela não está disponível agora.~shiz|nát|â-vêi-lâ-bol|rait|náu~ela está (she is)|não|disponível|exatamente (right now: agora)|agora',
            'Can I leave a message?~Posso deixar um recado?~kén|ai|liv|â|mé-sidj~posso|eu|deixar|um|recado',
            'Of course. What\'s your name?~Claro. Qual é seu nome?~âv|kórs|uóts|iór|nêim~de|curso (of course: claro)|qual é (what is)|seu|nome',
            'Bruno. Please ask her to call me back.~Bruno. Peça a ela para me ligar de volta, por favor.~bru-no|pliz|ésk|hâr|tâ|kól|mi|bék~Bruno|por favor|peça|ela|para|ligar|me|de volta',
            'Does she have your number?~Ela tem seu número?~dâz|shi|hév|iór|nâm-ber~auxiliar de pergunta|ela|tem|seu|número',
            'Yes, she does. Thank you.~Sim, tem. Obrigado.~iés|shi|dâz|thénk|iú~sim|ela|tem (retoma have)|agradecer|você'
        ] },
    { id: 'city-park', title: 'Escolhendo um passeio', category: 'Pela cidade', icon: 'map', level: 'basic', cefr: 'A2', objective: 'Pedir sugestões de lazer.', context: 'Você tem uma tarde livre na cidade.', tip: '“Worth” aparece ao dizer se algo vale a pena.', speakers: ['Você', 'Morador'], lines: [
            'What can I do around here?~O que posso fazer por aqui?~uót|kén|ai|du|â-ráund|hir~o que|posso|eu|fazer|por perto de|aqui',
            'There\'s a nice park nearby.~Há um parque bonito por perto.~dhérz|â|nais|park|nir-bai~há / existe (there is)|um|bonito|parque|por perto',
            'Is it open today?~Ele está aberto hoje?~iz|it|ôu-pân|tâ-dêi~está|ele|aberto|hoje',
            'Yes, until sunset.~Sim, até o pôr do sol.~iés|ân-tíl|sân-sét~sim|até|pôr do sol',
            'How can I get there?~Como posso chegar lá?~háu|kén|ai|guét|dhér~como|posso|eu|chegar|lá',
            'You can walk. It takes ten minutes.~Você pode ir a pé. Demora dez minutos.~iú|kén|uók|it|têiks|tén|mí-nits~você|pode|caminhar|isso|leva|dez|minutos'
        ] },
    { id: 'problem-phone-battery', title: 'Sem bateria e sem mapa', category: 'Imprevistos', icon: 'shield', level: 'basic', cefr: 'A2', objective: 'Explicar um imprevisto e pedir ajuda.', context: 'Seu celular descarregou durante um passeio.', tip: '“My phone died” é uma expressão para o celular ficar sem bateria.', speakers: ['Você', 'Atendente'], lines: [
            'My phone died.~Meu celular ficou sem bateria.~mai|fôun|daid~meu|celular|morreu (aqui: ficou sem bateria)',
            'Do you need a charger?~Você precisa de um carregador?~du|iú|nid|â|tchár-djer~auxiliar de pergunta|você|precisa|um|carregador',
            'Yes, if you have one.~Sim, se você tiver um.~iés|if|iú|hév|uân~sim|se|você|tem ou tiver|um',
            'You can use this outlet.~Você pode usar esta tomada.~iú|kén|iuz|dhis|áut-let~você|pode|usar|esta|tomada',
            'Thank you. I need to check the map.~Obrigado. Preciso consultar o mapa.~thénk|iú|ai|nid|tâ|tchék|dhâ|mép~agradecer|você|eu|preciso|marca o infinitivo|consultar|o|mapa',
            'Take your time.~Fique à vontade, sem pressa.~têik|iór|taim~tome|seu|tempo (expressão sem pressa)'
        ] }
];
