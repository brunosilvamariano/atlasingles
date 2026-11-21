export type StoryLine = { en: string; sound: string; pt: string };
export type ChildrenStory = {
  id: string; title: string; englishTitle: string; level: string; theme: string;
  summary: string; audio: string; icon: 'ball' | 'bird' | 'flower' | 'rain' | 'cat';
  pages: { title: string; lines: StoryLine[] }[];
};
const line = (en: string, sound: string, pt: string): StoryLine => ({ en, sound, pt });
export const childrenStories: ChildrenStory[] = [
  {
    id: 'lily-red-ball', title: 'Lily e a bola vermelha', englishTitle: 'Lily and the Red Ball', level: 'Básico', theme: 'Cores, brinquedos e amizade', icon: 'ball',
    summary: 'Uma bola desaparece no jardim. Lily e seu amigo procuram juntos.', audio: '/audio/stories/children/lily-red-ball.mp3',
    pages: [
      { title: 'Uma manhã no jardim', lines: [
        line('Lily has a red ball. It is her favorite toy.', 'lí-li héz â réd ból. it iz hâr fêi-vâ-rit tói.', 'Lily tem uma bola vermelha. É seu brinquedo favorito.'),
        line('Today is a sunny day. Lily goes outside to play.', 'tâ-dêi iz â sâ-ni dêi. lí-li gôuz áut-sáid tâ plêi.', 'Hoje é um dia de sol. Lily vai brincar lá fora.'),
        line('She throws the ball up. Then she catches it with both hands.', 'shi thrôuz dhâ ból âp. dhen shi ké-tchiz it uidh bôuth héndz.', 'Ela joga a bola para cima. Depois a pega com as duas mãos.'),
        line('Her friend Sam comes to the gate. He wants to play, too.', 'hâr frénd sém kâmz tâ dhâ gêit. hi uánts tâ plêi tu.', 'Seu amigo Sam chega ao portão. Ele também quer brincar.')
      ] },
      { title: 'Onde está a bola?', lines: [
        line('Lily kicks the ball to Sam. But the ball rolls under a bush.', 'lí-li kiks dhâ ból tâ sém. bât dhâ ból rôulz ân-der â bush.', 'Lily chuta a bola para Sam. Mas a bola rola para debaixo de um arbusto.'),
        line('Lily looks under the table. The ball is not there.', 'lí-li luks ân-der dhâ têi-bâl. dhâ ból iz nát dhér.', 'Lily olha debaixo da mesa. A bola não está lá.'),
        line('Sam looks behind a chair. He finds a small blue bucket.', 'sém luks bi-háind â tchér. hi faindz â smól blu bâ-kât.', 'Sam olha atrás de uma cadeira. Ele encontra um pequeno balde azul.'),
        line('They look near the flowers. Then Sam sees something red under the bush.', 'dhêi luk nir dhâ fláu-erz. dhen sém siz sâm-thin réd ân-der dhâ bush.', 'Eles olham perto das flores. Então Sam vê algo vermelho debaixo do arbusto.')
      ] },
      { title: 'Brincar juntos', lines: [
        line('Sam points to the ball. Lily smiles and picks it up.', 'sém póints tâ dhâ ból. lí-li smáilz én piks it âp.', 'Sam aponta para a bola. Lily sorri e a pega.'),
        line('Lily thanks her friend. Now they can play together again.', 'lí-li thénks hâr frénd. náu dhêi kén plêi tâ-gué-dher â-guén.', 'Lily agradece ao amigo. Agora eles podem brincar juntos novamente.'),
        line('This time, they stand away from the bush. They take turns with the ball.', 'dhis taim dhêi sténd â-uêi frâm dhâ bush. dhêi têik târnz uidh dhâ ból.', 'Desta vez, eles ficam longe do arbusto. Eles se revezam com a bola.'),
        line('At lunch, Lily puts the ball in her room. Tomorrow is another day to play.', 'ét lântch lí-li puts dhâ ból in hâr rum. tâ-má-rou iz â-nâ-dher dêi tâ plêi.', 'Na hora do almoço, Lily guarda a bola no quarto. Amanhã será outro dia para brincar.')
      ] }
    ]
  },
  {
    id: 'max-little-bird', title: 'Max e o passarinho', englishTitle: 'Max and the Little Bird', level: 'Básico', theme: 'Animais, cuidado e paciência', icon: 'bird',
    summary: 'Max vê um passarinho no quintal e aprende a observar com calma.', audio: '/audio/stories/children/max-little-bird.mp3',
    pages: [
      { title: 'Um som na árvore', lines: [
        line('Max is in the yard with his dad. They hear a little bird.', 'méks iz in dhâ iárd uidh hiz déd. dhêi hir â lí-dâl bârd.', 'Max está no quintal com o pai. Eles ouvem um passarinho.'),
        line('The bird sits on a low branch. It has brown wings and a small beak.', 'dhâ bârd sits on â lôu bréntch. it héz bráun uingz én â smól bik.', 'O pássaro está em um galho baixo. Ele tem asas marrons e um bico pequeno.'),
        line('Max wants to get closer. His dad asks him to stay still.', 'méks uánts tâ guét klôu-ser. hiz déd ésks him tâ stêi stil.', 'Max quer chegar mais perto. O pai pede que ele fique parado.'),
        line('They sit on the grass. They watch the bird from a distance.', 'dhêi sit on dhâ grés. dhêi uótch dhâ bârd frâm â dís-tâns.', 'Eles se sentam na grama. Eles observam o pássaro de longe.')
      ] },
      { title: 'Esperar e observar', lines: [
        line('The bird looks around the yard. Max keeps his hands in his lap.', 'dhâ bârd luks â-ráund dhâ iárd. méks kips hiz héndz in hiz lép.', 'O pássaro olha ao redor do quintal. Max mantém as mãos no colo.'),
        line('A butterfly flies past the tree. Max points to its yellow wings.', 'â bâ-der-flái fláiz pést dhâ tri. méks póints tâ its ié-lou uingz.', 'Uma borboleta passa voando pela árvore. Max aponta para suas asas amarelas.'),
        line('His dad smiles at him. There are many small things to see outside.', 'hiz déd smáilz ét him. dhér ar mé-ni smól thingz tâ si áut-sáid.', 'O pai sorri para ele. Há muitas coisinhas para ver lá fora.'),
        line('Max stays quiet and waits. The little bird begins to sing again.', 'méks stêiz kuái-ât én uêits. dhâ lí-dâl bârd bi-guínz tâ sing â-guén.', 'Max fica quieto e espera. O passarinho começa a cantar outra vez.')
      ] },
      { title: 'Uma lembrança para desenhar', lines: [
        line('Then the bird opens its wings. It flies to a taller tree.', 'dhen dhâ bârd ôu-pânz its uingz. it fláiz tâ â tó-ler tri.', 'Então o pássaro abre as asas. Ele voa para uma árvore mais alta.'),
        line('Max waves with one small hand. He does not run after it.', 'méks uêivz uidh uân smól hénd. hi dâz nát rân éf-ter it.', 'Max acena com uma mãozinha. Ele não corre atrás dele.'),
        line('Inside, Max draws the bird on paper. He gives it two brown wings.', 'in-sáid méks dróz dhâ bârd on pêi-per. hi guivz it tu bráun uingz.', 'Dentro de casa, Max desenha o pássaro no papel. Ele faz duas asas marrons.'),
        line('He shows the picture to his dad. They remember their quiet morning together.', 'hi shôuz dhâ pík-tcher tâ hiz déd. dhêi ri-mém-ber dhér kuái-ât mór-nin tâ-gué-dher.', 'Ele mostra o desenho ao pai. Eles se lembram da manhã tranquila que passaram juntos.')
      ] }
    ]
  },
  {
    id: 'mia-tiny-garden', title: 'O pequeno jardim de Mia', englishTitle: "Mia's Tiny Garden", level: 'Básico', theme: 'Natureza, rotina e crescimento', icon: 'flower',
    summary: 'Mia planta uma semente e descobre que algumas coisas precisam de tempo.', audio: '/audio/stories/children/mia-tiny-garden.mp3',
    pages: [
      { title: 'Uma semente pequena', lines: [
        line('Mia has a small flowerpot. Her grandma gives her a sunflower seed.', 'mí-â héz â smól fláu-er-pát. hâr grén-ma guivz hâr â sân-fláu-er sid.', 'Mia tem um pequeno vaso. A avó lhe dá uma semente de girassol.'),
        line('They put soil in the pot. Mia makes a little hole with her finger.', 'dhêi put sóil in dhâ pát. mí-â mêiks â lí-dâl hôul uidh hâr fín-ger.', 'Elas colocam terra no vaso. Mia faz um buraquinho com o dedo.'),
        line('She puts the seed in the hole. Then she covers it with soil.', 'shi puts dhâ sid in dhâ hôul. dhen shi kâ-verz it uidh sóil.', 'Ela coloca a semente no buraco. Depois a cobre com terra.'),
        line('Mia adds a little water. They put the pot in a sunny place.', 'mí-â édz â lí-dâl uó-der. dhêi put dhâ pát in â sâ-ni plêis.', 'Mia acrescenta um pouco de água. Elas colocam o vaso em um lugar ensolarado.')
      ] },
      { title: 'Um pouco a cada dia', lines: [
        line('The next morning, Mia looks at the pot. She cannot see a plant yet.', 'dhâ nékst mór-nin mí-â luks ét dhâ pát. shi ké-nát si â plént iét.', 'Na manhã seguinte, Mia olha o vaso. Ela ainda não consegue ver uma planta.'),
        line('Her grandma tells her to be patient. A seed needs time to grow.', 'hâr grén-ma télz hâr tâ bi pêi-shânt. â sid nidz taim tâ grôu.', 'A avó diz que ela precisa ter paciência. Uma semente precisa de tempo para crescer.'),
        line('Mia checks the soil each day. Her grandma helps her add water when needed.', 'mí-â tchéks dhâ sóil itch dêi. hâr grén-ma hélps hâr éd uó-der uén ní-did.', 'Mia verifica a terra todos os dias. A avó a ajuda a colocar água quando é necessário.'),
        line('After several days, a green shoot appears. Mia calls her grandma to come and see.', 'éf-ter sé-vâ-râl dêiz â grin shut â-pirz. mí-â kólz hâr grén-ma tâ kâm én si.', 'Depois de alguns dias, aparece um brotinho verde. Mia chama a avó para vir ver.')
      ] },
      { title: 'Uma surpresa amarela', lines: [
        line('The little plant grows taller. Mia sees new leaves on its stem.', 'dhâ lí-dâl plént grôuz tó-ler. mí-â siz nu livz on its stém.', 'A plantinha cresce. Mia vê folhas novas no caule.'),
        line('Many weeks go by. Mia keeps caring for her plant with her grandma.', 'mé-ni uiks gôu bai. mí-â kips ké-rin fâr hâr plént uidh hâr grén-ma.', 'Muitas semanas se passam. Mia continua cuidando da planta com a avó.'),
        line('One day, a yellow flower opens. It is bigger than the tiny seed.', 'uân dêi â ié-lou fláu-er ôu-pânz. it iz bí-ger dhén dhâ tái-ni sid.', 'Um dia, uma flor amarela se abre. Ela é maior do que a sementinha.'),
        line('Mia draws the flower in her notebook. She is ready to plant another seed.', 'mí-â dróz dhâ fláu-er in hâr nôut-buk. shi iz ré-di tâ plént â-nâ-dher sid.', 'Mia desenha a flor no caderno. Ela está pronta para plantar outra semente.')
      ] }
    ]
  },
  {
    id: 'ben-rainy-day', title: 'O dia de chuva de Ben', englishTitle: "Ben's Rainy Day", level: 'Básico', theme: 'Casa, família e imaginação', icon: 'rain',
    summary: 'A chuva muda os planos de Ben, mas uma caixa vira uma nova brincadeira.', audio: '/audio/stories/children/ben-rainy-day.mp3',
    pages: [
      { title: 'Planos para o parque', lines: [
        line('Ben puts on his shoes. He wants to go to the park.', 'bén puts on hiz shuz. hi uánts tâ gôu tâ dhâ párk.', 'Ben calça os sapatos. Ele quer ir ao parque.'),
        line('But rain starts to fall. Ben sees big drops on the window.', 'bât rêin stárts tâ fól. bén siz big dráps on dhâ uín-dou.', 'Mas começa a chover. Ben vê gotas grandes na janela.'),
        line('He feels sad about staying home. His sister Emma sits next to him.', 'hi filz séd â-báut stêi-in hôum. hiz sís-ter é-ma sits nékst tâ him.', 'Ele fica triste por ter que ficar em casa. Sua irmã Emma se senta ao lado dele.'),
        line('Emma has a big cardboard box. She asks Ben to help her build something.', 'é-ma héz â big kárd-bórd báks. shi ésks bén tâ hélp hâr bild sâm-thin.', 'Emma tem uma grande caixa de papelão. Ela pede que Ben a ajude a construir alguma coisa.')
      ] },
      { title: 'Uma casa na sala', lines: [
        line('They put the box on the floor. The box becomes a little house.', 'dhêi put dhâ báks on dhâ flór. dhâ báks bi-kâmz â lí-dâl háus.', 'Eles colocam a caixa no chão. A caixa vira uma casinha.'),
        line('Mom helps them make a doorway. Ben draws two windows with a blue crayon.', 'mám hélps dhâm mêik â dór-uêi. bén dróz tu uín-douz uidh â blu krêi-on.', 'A mãe ajuda a fazer uma entrada. Ben desenha duas janelas com um giz de cera azul.'),
        line('Emma brings two soft pillows. They put a blanket on the floor inside.', 'é-ma bringz tu sóft pí-louz. dhêi put â blén-kât on dhâ flór in-sáid.', 'Emma traz duas almofadas macias. Eles colocam um cobertor no chão, dentro da casinha.'),
        line('Ben brings his picture book. The two children sit down and read together.', 'bén bringz hiz pík-tcher buk. dhâ tu tchíl-drân sit dáun én rid tâ-gué-dher.', 'Ben traz seu livro ilustrado. As duas crianças se sentam e leem juntas.')
      ] },
      { title: 'Uma tarde diferente', lines: [
        line('They hear the rain on the roof. Inside their little house, they feel warm.', 'dhêi hir dhâ rêin on dhâ ruf. in-sáid dhér lí-dâl háus dhêi fil uórm.', 'Eles ouvem a chuva no telhado. Dentro da casinha, eles se sentem aquecidos.'),
        line('Mom brings a small snack. Ben saves a place for her near the doorway.', 'mám bringz â smól snék. bén sêivz â plêis fâr hâr nir dhâ dór-uêi.', 'A mãe traz um pequeno lanche. Ben reserva um lugar para ela perto da entrada.'),
        line('Later, the rain stops. Ben and Emma look outside at the wet grass.', 'lêi-der dhâ rêin stáps. bén én é-ma luk áut-sáid ét dhâ uét grés.', 'Mais tarde, a chuva para. Ben e Emma olham lá fora para a grama molhada.'),
        line('The park can wait until tomorrow. Today, they have a little house to enjoy.', 'dhâ párk kén uêit ân-tíl tâ-má-rou. tâ-dêi dhêi hév â lí-dâl háus tâ in-djói.', 'O parque pode esperar até amanhã. Hoje eles têm uma casinha para aproveitar.')
      ] }
    ]
  },
  {
    id: 'lucy-lost-kitten', title: 'Lucy e o gatinho perdido', englishTitle: 'Lucy and the Lost Kitten', level: 'Básico', theme: 'Vizinhança, ajuda e gentileza', icon: 'cat',
    summary: 'Lucy ouve um miado e chama a mãe para ajudar um visitante pequeno.', audio: '/audio/stories/children/lucy-lost-kitten.mp3',
    pages: [
      { title: 'Um visitante no portão', lines: [
        line('Lucy is helping her mom in the yard. She hears a small meow near the gate.', 'lú-si iz hél-pin hâr mám in dhâ iárd. shi hirz â smól mi-áu nir dhâ gêit.', 'Lucy está ajudando a mãe no quintal. Ela ouve um miadinho perto do portão.'),
        line('A gray kitten is sitting outside. It has white paws and a red collar.', 'â grêi kí-tân iz sí-din áut-sáid. it héz uait póz én â réd ká-ler.', 'Um gatinho cinza está sentado lá fora. Ele tem patinhas brancas e uma coleira vermelha.'),
        line('Lucy calls her mom to come over. They move slowly toward the kitten.', 'lú-si kólz hâr mám tâ kâm ôu-ver. dhêi muv slôu-li tâ-uórd dhâ kí-tân.', 'Lucy chama a mãe para se aproximar. Elas vão devagar na direção do gatinho.'),
        line('The kitten stays near the gate. Mom notices a little tag on its collar.', 'dhâ kí-tân stêiz nir dhâ gêit. mám nôu-ti-siz â lí-dâl tég on its ká-ler.', 'O gatinho fica perto do portão. A mãe percebe uma plaquinha na coleira.')
      ] },
      { title: 'Procurar a família', lines: [
        line('Mom reads the tag carefully. The kitten has a name and a phone number.', 'mám ridz dhâ tég kér-fâ-li. dhâ kí-tân héz â nêim én â fôun nâm-ber.', 'A mãe lê a plaquinha com cuidado. O gatinho tem um nome e um número de telefone.'),
        line('His name is Oliver. Lucy waits beside her mom while she makes a call.', 'hiz nêim iz á-li-ver. lú-si uêits bi-sáid hâr mám uáil shi mêiks â kól.', 'O nome dele é Oliver. Lucy espera ao lado da mãe enquanto ela faz uma ligação.'),
        line('Oliver belongs to a neighbor named Mrs. Green. She is looking for him nearby.', 'á-li-ver bi-lóngz tâ â nêi-ber nêimd mí-siz grin. shi iz lú-kin fâr him nir-bai.', 'Oliver pertence a uma vizinha chamada senhora Green. Ela está procurando por ele ali perto.'),
        line('Mom tells her where they are. Lucy sits quietly while Oliver rests near them.', 'mám télz hâr uér dhêi ar. lú-si sits kuái-ât-li uáil á-li-ver résts nir dhâm.', 'A mãe diz onde elas estão. Lucy fica sentada em silêncio enquanto Oliver descansa perto delas.')
      ] },
      { title: 'De volta para casa', lines: [
        line('Soon, Mrs. Green comes to the gate. Oliver walks toward her when he hears her voice.', 'sun mí-siz grin kâmz tâ dhâ gêit. á-li-ver uóks tâ-uórd hâr uén hi hirz hâr vóis.', 'Logo a senhora Green chega ao portão. Oliver caminha na direção dela quando ouve sua voz.'),
        line('She thanks Lucy and her mom. She is happy to see her kitten again.', 'shi thénks lú-si én hâr mám. shi iz hé-pi tâ si hâr kí-tân â-guén.', 'Ela agradece a Lucy e à mãe. Ela está feliz por reencontrar o gatinho.'),
        line('Lucy says goodbye to Oliver. The kitten goes home with Mrs. Green.', 'lú-si séz gud-bai tâ á-li-ver. dhâ kí-tân gôuz hôum uidh mí-siz grin.', 'Lucy se despede de Oliver. O gatinho vai para casa com a senhora Green.'),
        line('Lucy and her mom return to the yard. A little help has made a big difference.', 'lú-si én hâr mám ri-târn tâ dhâ iárd. â lí-dâl hélp héz mêid â big dí-fâ-râns.', 'Lucy e a mãe voltam ao quintal. Uma pequena ajuda fez uma grande diferença.')
      ] }
    ]
  }
];
