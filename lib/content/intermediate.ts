import type { SceneSpec } from './types';
export const intermediateScenes: SceneSpec[] = [
    { id: 'intro-background', title: 'Contando sua trajetória', category: 'Primeiros passos', icon: 'users', level: 'intermediate', cefr: 'B1', objective: 'Falar sobre experiências e interesses.', context: 'Você conhece alguém em um encontro da comunidade.', tip: '“Used to” descreve um hábito ou estado que existia no passado.', speakers: ['Alex', 'Bruno'], lines: [
            'How did you get into design?~Como você começou a trabalhar com design?~háu|did|iú|guét|ín-tu|di-záin~como|auxiliar de passado|você|entrar (get into)|em|design',
            'I used to work in sales.~Eu trabalhava com vendas.~ai|iust|tâ|uârk|in|sêilz~eu|costumava (used to)|parte de used to|trabalhar|em|vendas',
            'What made you change careers?~O que fez você mudar de carreira?~uót|mêid|iú|tchêindj|kâ-rírz~o que|fez|você|mudar|carreiras',
            'I wanted to do something more creative.~Eu queria fazer algo mais criativo.~ai|uán-tid|tâ|du|sâm-thin|mór|kri-êi-div~eu|queria|marca o infinitivo|fazer|algo|mais|criativo',
            'Was it difficult to start over?~Foi difícil recomeçar?~uáz|it|dí-fi-kâlt|tâ|start|ôu-ver~foi|isso|difícil|marca o infinitivo|começar (com over)|de novo',
            'At first, but I\'m glad I did.~No começo, mas fico feliz por ter feito isso.~ét|fârst|bât|aim|gléd|ai|did~em|primeiro (at first: no começo)|mas|eu estou (I am)|contente|eu|fiz'
        ] },
    { id: 'life-repair', title: 'Agendando um reparo em casa', category: 'Vida real', icon: 'sun', level: 'intermediate', cefr: 'B1', objective: 'Descrever um defeito e combinar um atendimento.', context: 'Você conversa com a administração do apartamento.', tip: '“Has been leaking” mostra que o vazamento começou antes e continua.', speakers: ['Você', 'Administração'], lines: [
            'The kitchen sink has been leaking.~A pia da cozinha está vazando há algum tempo.~dhâ|kí-tchân|sink|héz|bin|lí-kin~a|cozinha|pia|auxiliar de tempo composto|estado (been)|vazando',
            'When did you first notice it?~Quando você percebeu pela primeira vez?~uén|did|iú|fârst|nôu-dis|it~quando|auxiliar de passado|você|pela primeira vez|percebeu|isso',
            'Yesterday, and it\'s getting worse.~Ontem, e está piorando.~iés-ter-dêi|énd|its|gué-din|uârs~ontem|e|isso está (it is)|ficando|pior',
            'We can send someone tomorrow morning.~Podemos enviar alguém amanhã de manhã.~ui|kén|sénd|sâm-uân|tâ-má-rôu|mór-nin~nós|podemos|enviar|alguém|amanhã|manhã',
            'Could you give me a time window?~Você poderia me informar uma faixa de horário?~kud|iú|guiv|mi|â|taim|uín-dôu~poderia|você|dar|me|uma|horário|janela (time window: faixa de horário)',
            'Between nine and eleven, if that works.~Entre nove e onze, se estiver bom.~bi-tuín|nain|énd|i-lé-vân|if|dhét|uârks~entre|nove|e|onze|se|isso|funciona'
        ] },
    { id: 'travel-rebook', title: 'Conexão perdida no aeroporto', category: 'Viagens', icon: 'plane', level: 'intermediate', cefr: 'B1', objective: 'Explicar uma conexão perdida e pedir alternativas.', context: 'Seu voo atrasou e você procura o balcão da companhia.', tip: '“Make a connection” significa conseguir pegar uma conexão.', speakers: ['Você', 'Agente'], lines: [
            'My flight was delayed, so I missed my connection.~Meu voo atrasou, então perdi minha conexão.~mai|flait|uáz|di-lêid|sôu|ai|mist|mai|kâ-nék-shân~meu|voo|foi|atrasado|então|eu|perdi|minha|conexão',
            'Let me look at the available flights.~Deixe eu verificar os voos disponíveis.~lét|mi|luk|ét|dhâ|â-vêi-lâ-bol|flaits~deixe|me|olhar|para|os|disponíveis|voos',
            'Is there anything later today?~Há alguma opção mais tarde hoje?~iz|dhér|é-ni-thin|lêi-der|tâ-dêi~há (is there)|there (com is: há)|alguma coisa|mais tarde|hoje',
            'There\'s one, but it has a long layover.~Há um, mas ele tem uma escala longa.~dhérz|uân|bât|it|héz|â|lóng|lêi-ôu-ver~há / existe (there is)|um|mas|ele|tem|uma|longa|escala',
            'Would I arrive before tomorrow morning?~Eu chegaria antes de amanhã de manhã?~uâd|ai|â-ráiv|bi-fór|tâ-má-rôu|mór-nin~auxiliar de hipótese|eu|chegar|antes de|amanhã|manhã',
            'Yes, you would arrive around midnight.~Sim, você chegaria por volta da meia-noite.~iés|iú|uâd|â-ráiv|â-ráund|míd-nait~sim|você|auxiliar de hipótese|chegar|por volta de|meia-noite'
        ] },
    { id: 'slang-flake', title: 'Quando alguém desmarca', category: 'Gírias & expressões', icon: 'message', level: 'intermediate', cefr: 'B1', objective: 'Entender expressões informais sobre compromissos.', context: 'Você conversa com um amigo sobre um encontro adiado.', tip: '“Take a rain check” significa aceitar o convite para outra ocasião.', speakers: ['Alex', 'Bruno'], lines: [
            'Hey, can I take a rain check?~Ei, podemos deixar para outra ocasião?~hêi|kén|ai|têik|â|rêin|tchék~ei|posso|eu|aceitar (take a rain check)|um|chuva (parte da expressão)|vale (parte da expressão)',
            'Sure. Did something come up?~Claro. Surgiu algum imprevisto?~shur|did|sâm-thin|kâm|âp~claro|auxiliar de passado|algo|surgir (come up)|parte de come up',
            'I\'m swamped with work.~Estou atolado de trabalho.~aim|suómpt|uídh|uârk~eu estou (I am)|atolado (informal)|com|trabalho',
            'No big deal. We can hang out later.~Sem problema. Podemos nos encontrar depois.~nôu|big|dil|ui|kén|héng|áut|lêi-der~nenhum|grande|problema (no big deal)|nós|podemos|passar tempo (hang out)|junto (parte da expressão)|depois',
            'I owe you one.~Fico te devendo uma.~ai|ôu|iú|uân~eu|devo|você|uma (um favor)',
            'You\'re good. Just get some rest.~Está tudo bem. Só descanse um pouco.~iór|gud|djâst|guét|sâm|rést~você está (you are)|bem (you are good)|apenas|obtenha (get some rest: descansar)|um pouco de|descanso'
        ] },
    { id: 'work-priority', title: 'Negociando prioridades', category: 'Trabalho', icon: 'briefcase', level: 'intermediate', cefr: 'B2', objective: 'Explicar limites e propor uma prioridade.', context: 'Duas tarefas importantes têm o mesmo prazo.', tip: '“Push back” pode significar adiar um prazo.', speakers: ['Gestor', 'Você'], lines: [
            'Could you finish both tasks by tomorrow?~Você poderia terminar as duas tarefas até amanhã?~kud|iú|fí-nish|bôuth|tésks|bai|tâ-má-rôu~poderia|você|terminar|ambas|tarefas|até (prazo)|amanhã',
            'I can finish one, but not both.~Consigo terminar uma, mas não as duas.~ai|kén|fí-nish|uân|bât|nát|bôuth~eu|consigo|terminar|uma|mas|não|ambas',
            'Which one needs more time?~Qual delas precisa de mais tempo?~uítch|uân|nidz|mór|taim~qual|uma|precisa|mais|tempo',
            'The report still needs a thorough review.~O relatório ainda precisa de uma revisão cuidadosa.~dhâ|ri-pórt|stil|nidz|â|thâ-rôu|ri-viu~o|relatório|ainda|precisa|uma|cuidadosa|revisão',
            'Could we push that deadline back?~Poderíamos adiar esse prazo?~kud|ui|push|dhét|déd-lain|bék~poderíamos|nós|empurrar (com back: adiar)|esse|prazo|para trás',
            'Yes, then I can deliver better work.~Sim, assim consigo entregar um trabalho melhor.~iés|dhén|ai|kén|di-lí-ver|bé-der|uârk~sim|então|eu|consigo|entregar|melhor|trabalho'
        ] },
    { id: 'routine-change', title: 'Mudando um hábito', category: 'Rotina', icon: 'sun', level: 'intermediate', cefr: 'B1', objective: 'Comparar a rotina antiga com a atual.', context: 'Um amigo comenta que você parece mais disposto.', tip: '“Since” indica o ponto em que algo começou; “for” indica duração.', speakers: ['Amigo', 'Você'], lines: [
            'You seem more relaxed lately.~Você parece mais tranquilo ultimamente.~iú|sim|mór|ri-lékst|lêit-li~você|parece|mais|tranquilo|ultimamente',
            'I\'ve been going to bed earlier.~Tenho ido dormir mais cedo.~aiv|bin|gôu-in|tâ|béd|âr-li-er~eu + auxiliar de tempo composto (I have)|been (continuidade)|indo|para|cama|mais cedo',
            'How long have you been doing that?~Há quanto tempo você faz isso?~háu|lóng|hév|iú|bin|du-in|dhét~como|longo (how long: há quanto tempo)|auxiliar de tempo composto|você|been (continuidade)|fazendo|isso',
            'For about a month.~Há cerca de um mês.~fór|â-báut|â|mânth~por (duração)|cerca de|um|mês',
            'Has it made a difference?~Isso fez diferença?~héz|it|mêid|â|dí-fâ-râns~auxiliar de tempo composto|isso|feito|uma|diferença',
            'Yes, I have much more energy now.~Sim, agora tenho muito mais energia.~iés|ai|hév|mâtch|mór|é-ner-dji|náu~sim|eu|tenho|muito|mais|energia|agora'
        ] },
    { id: 'shopping-online', title: 'Pedido on-line que não chegou', category: 'Compras', icon: 'cart', level: 'intermediate', cefr: 'B1', objective: 'Explicar uma entrega atrasada e pedir uma solução.', context: 'Você entra em contato com o atendimento da loja.', tip: '“Says delivered” indica que o sistema mostra o status entregue.', speakers: ['Você', 'Suporte'], lines: [
            'My order says delivered, but I never received it.~Meu pedido aparece como entregue, mas nunca o recebi.~mai|ór-der|séz|di-lí-verd|bât|ai|né-ver|ri-sívd|it~meu|pedido|diz|entregue|mas|eu|nunca|recebi|ele',
            'Have you checked with your neighbors?~Você verificou com seus vizinhos?~hév|iú|tchékt|uídh|iór|nêi-berz~auxiliar de tempo composto|você|verificado|com|seus|vizinhos',
            'Yes, and nobody has seen it.~Sim, e ninguém o viu.~iés|énd|nôu-bâ-di|héz|sin|it~sim|e|ninguém|auxiliar de tempo composto|visto|ele',
            'We can open an investigation.~Podemos abrir uma investigação.~ui|kén|ôu-pân|én|in-vés-ti-gêi-shân~nós|podemos|abrir|uma|investigação',
            'How long would that usually take?~Quanto tempo isso costuma demorar?~háu|lóng|uâd|dhét|iú-ju-â-li|têik~como|longo (how long: quanto tempo)|auxiliar de hipótese|isso|geralmente|levar',
            'About two business days. We\'ll email you.~Cerca de dois dias úteis. Enviaremos um e-mail.~â-báut|tu|bíz-nis|dêiz|uil|í-meil|iú~cerca de|dois|úteis (business days)|dias|nós vamos (futuro) (we will)|enviar e-mail|você'
        ] },
    { id: 'restaurant-restriction', title: 'Explicando uma restrição alimentar', category: 'Restaurantes', icon: 'utensils', level: 'intermediate', cefr: 'B1', objective: 'Perguntar sobre ingredientes e preparação.', context: 'Você precisa esclarecer como um prato é preparado.', tip: '“Contains” significa contém. Explique a restrição de forma direta e confirme os detalhes.', speakers: ['Você', 'Atendente'], lines: [
            'Could you tell me what\'s in this sauce?~Você poderia me dizer o que há neste molho?~kud|iú|tél|mi|uóts|in|dhis|sós~poderia|você|dizer|me|o que está (what is)|em|este|molho',
            'It contains cream and butter.~Ele contém creme de leite e manteiga.~it|kân-têinz|krim|énd|bâ-der~ele|contém|creme de leite|e|manteiga',
            'I can\'t have dairy. Is there another option?~Não posso consumir laticínios. Há outra opção?~ai|ként|hév|dér-i|iz|dhér|â-nâ-dher|áp-shân~eu|não posso (cannot)|consumir|laticínios|há (is there)|there (com is: há)|outra|opção',
            'We can prepare it without the sauce.~Podemos prepará-lo sem o molho.~ui|kén|pri-pér|it|uídh-áut|dhâ|sós~nós|podemos|preparar|ele|sem|o|molho',
            'Could you confirm that with the kitchen?~Você poderia confirmar isso com a cozinha?~kud|iú|kân-fârm|dhét|uídh|dhâ|kí-tchân~poderia|você|confirmar|isso|com|a|cozinha',
            'Absolutely. I\'ll check before placing the order.~Com certeza. Vou verificar antes de fazer o pedido.~éb-sâ-lut-li|ail|tchék|bi-fór|plêi-sin|dhâ|ór-der~com certeza|eu vou (futuro) (I will)|verificar|antes de|fazer (placing an order)|o|pedido'
        ] },
    { id: 'hotel-noise', title: 'Um quarto mais silencioso', category: 'Hospedagem', icon: 'hotel', level: 'intermediate', cefr: 'B1', objective: 'Explicar um incômodo e solicitar mudança.', context: 'Seu quarto fica perto de uma obra.', tip: '“Would it be possible…?” faz um pedido educado, sem dar uma ordem.', speakers: ['Você', 'Recepção'], lines: [
            'There\'s a lot of noise outside my room.~Há muito barulho do lado de fora do meu quarto.~dhérz|â|lát|âv|nóiz|áut-said|mai|rum~há / existe (there is)|um|muito (a lot of)|de|barulho|fora de|meu|quarto',
            'I\'m sorry. Is it the construction?~Sinto muito. É a obra?~aim|sá-ri|iz|it|dhâ|kân-strâk-shân~eu estou (I am)|desculpe|é|isso|a|obra',
            'Yes, it starts very early.~Sim, ela começa muito cedo.~iés|it|starts|vé-ri|âr-li~sim|ela|começa|muito|cedo',
            'Would you like us to look for another room?~Você gostaria que procurássemos outro quarto?~uâd|iú|laik|âs|tâ|luk|fór|â-nâ-dher|rum~auxiliar de pedido educado|você|gostar|nós (objeto)|marca o infinitivo|procurar (look for)|por|outro|quarto',
            'That would be great, preferably on a higher floor.~Seria ótimo, de preferência em um andar mais alto.~dhét|uâd|bi|grêit|pré-fâ-râ-bli|on|â|hái-er|flór~isso|auxiliar de hipótese|ser|ótimo|de preferência|em|um|mais alto|andar',
            'I\'ll check what\'s available.~Vou verificar o que está disponível.~ail|tchék|uóts|â-vêi-lâ-bol~eu vou (futuro) (I will)|verificar|o que está (what is)|disponível'
        ] },
    { id: 'transport-reroute', title: 'Mudança de rota', category: 'Transporte', icon: 'car', level: 'intermediate', cefr: 'B1', objective: 'Confirmar uma rota e explicar uma preferência.', context: 'O motorista oferece um caminho alternativo.', tip: '“As long as” pode significar desde que.', speakers: ['Motorista', 'Você'], lines: [
            'The main road is closed for construction.~A via principal está fechada por causa de obras.~dhâ|mêin|rôud|iz|klôuzd|fór|kân-strâk-shân~a|principal|via|está|fechada|por|obras',
            'Will the alternate route take much longer?~A rota alternativa vai demorar muito mais?~uil|dhâ|ól-ter-nât|rut|têik|mâtch|lóng-ger~auxiliar de futuro|a|alternativa|rota|levar|muito|mais tempo',
            'It should add about fifteen minutes.~Deve acrescentar cerca de quinze minutos.~it|shud|éd|â-báut|fif-tín|mí-nits~ela|deve|acrescentar|cerca de|quinze|minutos',
            'That\'s fine, as long as we avoid tolls.~Tudo bem, desde que evitemos pedágios.~dhéts|fain|éz|lóng|éz|ui|â-vóid|tôulz~isso é (that is)|bem|como (as long as)|longo (as long as)|como (as long as: desde que)|nós|evitemos|pedágios',
            'Sure. Are you in a hurry?~Claro. Você está com pressa?~shur|ar|iú|in|â|hâ-ri~claro|está|você|em|uma|pressa',
            'Not really. I\'d rather take the scenic route.~Na verdade, não. Prefiro ir pelo caminho mais bonito.~nát|rí-li|aid|ré-dher|têik|dhâ|sí-nik|rut~não|realmente|eu + auxiliar de preferência (I would)|preferir (would rather)|pegar|a|com paisagem bonita|rota'
        ] },
    { id: 'social-boundaries', title: 'Recusando um convite com carinho', category: 'Vida social', icon: 'users', level: 'intermediate', cefr: 'B1', objective: 'Recusar sem parecer distante e propor alternativa.', context: 'Você está cansado, mas quer manter a amizade.', tip: '“I\'d love to, but…” mostra interesse antes de explicar o impedimento.', speakers: ['Amigo', 'Você'], lines: [
            'We\'re having people over on Saturday.~Vamos receber algumas pessoas no sábado.~uír|hé-vin|pí-pol|ôu-ver|on|sé-der-dêi~nós + auxiliar de ação (we are)|recebendo (having people over)|pessoas|em casa (over)|em|sábado',
            'I\'d love to come, but I already have plans.~Adoraria ir, mas já tenho planos.~aid|lâv|tâ|kâm|bât|ai|ól-ré-di|hév|plénz~eu + auxiliar de desejo (I would)|adorar|marca o infinitivo|ir ou vir|mas|eu|já|tenho|planos',
            'No problem. Maybe another time?~Sem problema. Talvez outra hora?~nôu|prá-blâm|mêi-bi|â-nâ-dher|taim~nenhum|problema|talvez|outra|ocasião',
            'Definitely. How about lunch next week?~Com certeza. Que tal um almoço na próxima semana?~dé-fi-nit-li|háu|â-báut|lântch|nékst|uik~com certeza|como (how about: que tal)|sobre|almoço|próxima|semana',
            'Thursday would work for me.~Quinta seria bom para mim.~thârz-dêi|uâd|uârk|fór|mi~quinta-feira|auxiliar de hipótese|funcionar|para|mim',
            'Great, I\'ll keep that afternoon free.~Ótimo, vou deixar essa tarde livre.~grêit|ail|kip|dhét|éf-ter-nun|fri~ótimo|eu vou (futuro) (I will)|manter|essa|tarde|livre'
        ] },
    { id: 'communication-clarify', title: 'Confirmando se você entendeu', category: 'Comunicação', icon: 'message', level: 'intermediate', cefr: 'B2', objective: 'Reformular uma informação para confirmar o entendimento.', context: 'Você recebeu instruções com vários detalhes.', tip: '“Let me make sure…” anuncia que você vai checar o entendimento.', speakers: ['Você', 'Colega'], lines: [
            'Let me make sure I understood correctly.~Deixe eu confirmar se entendi corretamente.~lét|mi|mêik|shur|ai|ân-der-stud|kâ-rékt-li~deixe|me|fazer (make sure: confirmar)|certo|eu|entendi|corretamente',
            'Of course. What would you like to clarify?~Claro. O que você gostaria de esclarecer?~âv|kórs|uót|uâd|iú|laik|tâ|klé-râ-fai~de|curso (of course: claro)|o que|auxiliar de pedido educado|você|gostar|marca o infinitivo|esclarecer',
            'You need the draft today, not the final version?~Você precisa do rascunho hoje, e não da versão final?~iú|nid|dhâ|dréft|tâ-dêi|nát|dhâ|fái-nâl|vâr-jân~você|precisa|o|rascunho|hoje|não|a|final|versão',
            'Exactly. We\'ll review it together first.~Exatamente. Vamos revisá-lo juntos primeiro.~ig-zékt-li|uil|ri-viu|it|tâ-gué-dher|fârst~exatamente|nós vamos (futuro) (we will)|revisar|ele|juntos|primeiro',
            'And should I include the estimated costs?~E devo incluir os custos estimados?~énd|shud|ai|in-klud|dhâ|és-ti-mêi-did|kósts~e|devo|eu|incluir|os|estimados|custos',
            'Yes, even if the figures are approximate.~Sim, mesmo que os valores sejam aproximados.~iés|í-vân|if|dhâ|fí-guerz|ar|â-prák-sâ-mât~sim|mesmo|se|os|valores|sejam|aproximados'
        ] },
    { id: 'city-membership', title: 'Inscrevendo-se em uma atividade', category: 'Pela cidade', icon: 'map', level: 'intermediate', cefr: 'B1', objective: 'Comparar horários e perguntar sobre inscrições.', context: 'Você procura uma atividade no centro comunitário.', tip: '“Sign up” significa inscrever-se; “drop in” é participar sem compromisso fixo.', speakers: ['Você', 'Recepção'], lines: [
            'I\'m interested in the evening classes.~Tenho interesse nas aulas noturnas.~aim|ín-trâs-tid|in|dhâ|ív-nin|klé-siz~eu estou (I am)|interessado|em|as|noturnas|aulas',
            'Which days would work best for you?~Quais dias seriam melhores para você?~uítch|dêiz|uâd|uârk|bést|fór|iú~quais|dias|auxiliar de hipótese|funcionar|melhor|para|você',
            'I\'m usually free on Tuesdays and Thursdays.~Geralmente tenho tempo livre às terças e quintas.~aim|iú-ju-â-li|fri|on|tuz-dêiz|énd|thârz-dêiz~eu estou (I am)|geralmente|livre|em|terças-feiras|e|quintas-feiras',
            'We have a beginner class on Thursday.~Temos uma aula para iniciantes na quinta.~ui|hév|â|bi-guí-ner|klés|on|thârz-dêi~nós|temos|uma|iniciante|aula|em|quinta-feira',
            'Do I need to sign up in advance?~Preciso me inscrever com antecedência?~du|ai|nid|tâ|sain|âp|in|âd-véns~auxiliar de pergunta|eu|preciso|marca o infinitivo|inscrever (sign up)|parte de sign up|com|antecedência',
            'Yes, because space is limited.~Sim, porque as vagas são limitadas.~iés|bi-kóz|spêis|iz|lí-mi-did~sim|porque|espaço ou vagas|é|limitado'
        ] },
    { id: 'problem-card', title: 'Cartão recusado na compra', category: 'Imprevistos', icon: 'shield', level: 'intermediate', cefr: 'B1', objective: 'Lidar com uma falha de pagamento sem constrangimento.', context: 'O terminal recusa seu cartão.', tip: '“Go through” pode significar que uma transação foi aprovada.', speakers: ['Caixa', 'Você'], lines: [
            'I\'m afraid the payment didn\'t go through.~Receio que o pagamento não tenha sido aprovado.~aim|â-frêid|dhâ|pêi-mânt|dí-dânt|gôu|thru~eu estou (I am)|receoso (I am afraid: receio)|o|pagamento|não (passado) (did not)|passar (go through)|parte de go through (ser aprovado)',
            'Could we try it one more time?~Podemos tentar mais uma vez?~kud|ui|trai|it|uân|mór|taim~poderíamos|nós|tentar|isso|uma|mais|vez',
            'Of course. Please insert the card.~Claro. Insira o cartão, por favor.~âv|kórs|pliz|in-sârt|dhâ|kard~de|curso (of course: claro)|por favor|insira|o|cartão',
            'If it fails again, I can use another card.~Se falhar de novo, posso usar outro cartão.~if|it|fêilz|â-guén|ai|kén|iuz|â-nâ-dher|kard~se|isso|falhar|de novo|eu|posso|usar|outro|cartão',
            'That one worked. Would you like the receipt?~Esse funcionou. Você gostaria do recibo?~dhét|uân|uârkt|uâd|iú|laik|dhâ|ri-sít~esse|um (cartão)|funcionou|auxiliar de pedido educado|você|gostar|o|recibo',
            'Yes, please. Thanks for your patience.~Sim, por favor. Obrigado pela paciência.~iés|pliz|thénks|fór|iór|pêi-shâns~sim|por favor|obrigado|por|sua|paciência'
        ] }
];
