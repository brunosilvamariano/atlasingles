export type StoryLine = { en: string; sound: string; pt: string };
export type TrueStory = {
  id: string; title: string; englishTitle: string; year: string; theme: string;
  summary: string; audio: string; sources: { title: string; url: string }[];
  pages: { title: string; lines: StoryLine[] }[];
};

const line = (en: string, sound: string, pt: string): StoryLine => ({ en, sound, pt });

export const trueStories: TrueStory[] = [
  {
    id: 'moon-landing', title: 'O primeiro passo na Lua', englishTitle: 'The First Step on the Moon', year: '1969', theme: 'Ciência e descoberta',
    summary: 'Três astronautas, uma viagem extraordinária e uma chegada que entrou para a história.', audio: '/audio/stories/moon-landing.mp3',
    sources: [
      { title: 'NASA · Apollo 11', url: 'https://www.nasa.gov/mission/apollo-11/' },
      { title: 'NASA · Apollo 11 mission data', url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo11info.html' },
      { title: 'NASA · Apollo missions', url: 'https://www.nasa.gov/specials/apollo50th/missions.html?linkId=68501692' }
    ],
    pages: [
      { title: 'Uma viagem começa', lines: [
        line('In July 1969, three American astronauts left Earth. Their mission was called Apollo 11.', 'in dju-lái náin-tín siks-ti-náin, thri â-mé-ri-kân és-trâ-nóts léft ârth. dhér mí-shân uâz kóld â-pá-lou i-lé-vân.', 'Em julho de 1969, três astronautas americanos deixaram a Terra. A missão se chamava Apollo 11.'),
        line('Neil Armstrong, Buzz Aldrin, and Michael Collins traveled together. They were going to the Moon.', 'nil árm-strón, bâz ól-drin, én mái-kâl ká-linz trá-vâld tâ-gué-dher. dhêi uâr gôu-in tâ dhâ mun.', 'Neil Armstrong, Buzz Aldrin e Michael Collins viajaram juntos. Eles estavam indo para a Lua.'),
        line('A large rocket carried them into space. People on Earth watched the beginning of their journey.', 'â lárdj rá-kât ké-rid dhâm ín-tâ spêis. pí-pol on ârth uótcht dhâ bi-guí-nin âv dhér djâr-ni.', 'Um grande foguete os levou ao espaço. Pessoas na Terra acompanharam o início da viagem.'),
        line('The trip took several days. Each astronaut had important work to do before the landing.', 'dhâ trip tuk sé-vâ-ral dêiz. itch és-trâ-nót héd im-pór-tânt uârk tâ du bi-fór dhâ lén-din.', 'A viagem levou vários dias. Cada astronauta tinha um trabalho importante a fazer antes do pouso.')
      ] },
      { title: 'A chegada', lines: [
        line('On July 20, Armstrong and Aldrin landed on the Moon. Their small spacecraft was named Eagle.', 'on dju-lái tuén-ti, árm-strón én ól-drin lén-did on dhâ mun. dhér smól spêis-kréft uâz nêimd í-gâl.', 'Em 20 de julho, Armstrong e Aldrin pousaram na Lua. A pequena nave se chamava Eagle.'),
        line('Collins stayed in another spacecraft above them. He continued to travel around the Moon.', 'ká-linz stêid in â-nâ-dher spêis-kréft â-bâv dhâm. hi kân-tín-iud tâ trá-vâl â-ráund dhâ mun.', 'Collins ficou em outra nave acima deles. Ele continuou a viajar ao redor da Lua.'),
        line('Armstrong stepped onto the surface first. Aldrin joined him later, and both men explored the area.', 'árm-strón stépt ón-tu dhâ sâr-fis fârst. ól-drin djóind him lêi-der, én bôuth men ik-splórd dhi é-ri-â.', 'Armstrong pisou na superfície primeiro. Aldrin se juntou a ele depois, e os dois exploraram a área.'),
        line('They took pictures and collected rocks. Television brought images of their work to people back home.', 'dhêi tuk pík-tchârz én kâ-lék-tid ráks. té-lâ-ví-zhân brót í-mi-djiz âv dhér uârk tâ pí-pol bék hôum.', 'Eles tiraram fotos e coletaram pedras. A televisão levou imagens do trabalho às pessoas na Terra.')
      ] },
      { title: 'De volta à Terra', lines: [
        line('After their visit, Armstrong and Aldrin left the surface. They met Collins again above the Moon.', 'éf-ter dhér ví-zit, árm-strón én ól-drin léft dhâ sâr-fis. dhêi mét ká-linz â-guén â-bâv dhâ mun.', 'Depois da visita, Armstrong e Aldrin deixaram a superfície. Eles reencontraram Collins acima da Lua.'),
        line('The three astronauts began the trip home. Their work on the Moon was now complete.', 'dhâ thri és-trâ-nóts bi-guén dhâ trip hôum. dhér uârk on dhâ mun uâz náu kâm-plít.', 'Os três astronautas começaram a viagem de volta. O trabalho deles na Lua estava concluído.'),
        line('On July 24, their capsule landed in the Pacific Ocean. A recovery team brought them to safety.', 'on dju-lái tuén-ti-fór, dhér kép-sâl lén-did in dhâ pâ-sí-fik ôu-shân. â ri-kâ-vâ-ri tim brót dhâm tâ sêif-ti.', 'Em 24 de julho, a cápsula caiu no Oceano Pacífico. Uma equipe de resgate os levou para um local seguro.'),
        line('Apollo 11 was the first mission to land people on the Moon. All three astronauts returned alive.', 'â-pá-lou i-lé-vân uâz dhâ fârst mí-shân tâ lénd pí-pol on dhâ mun. ól thri és-trâ-nóts ri-târnd â-láiv.', 'A Apollo 11 foi a primeira missão a levar pessoas à superfície da Lua. Os três astronautas voltaram vivos.')
      ] }
    ]
  },
  {
    id: 'wright-flight', title: 'Doze segundos no ar', englishTitle: 'Twelve Seconds in the Air', year: '1903', theme: 'Invenção e persistência',
    summary: 'Como Orville e Wilbur Wright transformaram anos de testes em um voo histórico.', audio: '/audio/stories/wright-flight.mp3',
    sources: [
      { title: 'National Park Service · The Wright Flyer', url: 'https://www.nps.gov/articles/wrightflyer.htm' },
      { title: 'National Park Service · Four Powered Flights', url: 'https://www.nps.gov/places/3-four-powered-flights.htm' }
    ],
    pages: [
      { title: 'Aprender a voar', lines: [
        line('Orville and Wilbur Wright were brothers from Ohio. They wanted to build a machine that could fly.', 'ór-vâl én uíl-ber rait uâr brâ-dherz frâm ou-hái-ou. dhêi uán-tid tâ bild â mâ-shín dhât kud flái.', 'Orville e Wilbur Wright eram irmãos de Ohio. Eles queriam construir uma máquina que pudesse voar.'),
        line('They studied flight and tested their ideas. Building a working airplane required many careful experiments.', 'dhêi stâ-did fláit én tés-tid dhér ai-dí-âz. bíl-din â uâr-kin ér-plêin ri-kuáierd mé-ni kér-fâl ik-spé-râ-mânts.', 'Eles estudaram o voo e testaram suas ideias. Construir um avião funcional exigiu muitos experimentos cuidadosos.'),
        line('The brothers tested gliders before adding an engine. They needed a way to control the machine.', 'dhâ brâ-dherz tés-tid glái-derz bi-fór é-din ân én-djân. dhêi ní-did â uêi tâ kân-trôul dhâ mâ-shín.', 'Os irmãos testaram planadores antes de acrescentar um motor. Eles precisavam de uma forma de controlar a máquina.'),
        line('Their airplane was called the Flyer. It had an engine, two propellers, and space for one pilot.', 'dhér ér-plêin uâz kóld dhâ flái-er. it héd ân én-djân, tu prâ-pé-lerz, én spêis fâr uân pái-lât.', 'O avião se chamava Flyer. Ele tinha um motor, duas hélices e espaço para um piloto.')
      ] },
      { title: 'Um dia de testes', lines: [
        line('On December 17, 1903, they tested the Flyer in North Carolina. The air was cold and windy.', 'on di-sém-ber sé-vân-tín, náin-tín ou-thri, dhêi tés-tid dhâ flái-er in nórth ké-râ-lái-nâ. dhi ér uâz kôuld én uín-di.', 'Em 17 de dezembro de 1903, eles testaram o Flyer na Carolina do Norte. O ar estava frio, com vento.'),
        line('Orville was the pilot on the first flight. Wilbur helped as the airplane began to move.', 'ór-vâl uâz dhâ pái-lât on dhâ fârst fláit. uíl-ber hélpt éz dhi ér-plêin bi-guén tâ muv.', 'Orville foi o piloto no primeiro voo. Wilbur ajudou enquanto o avião começava a se mover.'),
        line('The Flyer rose into the air. It flew for twelve seconds and traveled one hundred twenty feet.', 'dhâ flái-er rôuz ín-tâ dhi ér. it flu fâr tuélv sé-kândz én trá-vâld uân hân-drâd tuén-ti fit.', 'O Flyer subiu no ar. Ele voou durante doze segundos e percorreu cento e vinte pés.'),
        line('The distance was short, but the airplane had flown. An engine had powered its journey through the air.', 'dhâ dís-tâns uâz shórt, bât dhi ér-plêin héd flôun. ân én-djân héd páu-erd its djâr-ni thru dhi ér.', 'A distância era curta, mas o avião havia voado. Um motor havia impulsionado sua trajetória pelo ar.')
      ] },
      { title: 'Continuar tentando', lines: [
        line('The brothers did not stop after one flight. They flew the machine four times that morning.', 'dhâ brâ-dherz did nát stáp éf-ter uân fláit. dhêi flu dhâ mâ-shín fór taimz dhât mór-nin.', 'Os irmãos não pararam depois de um voo. Eles fizeram a máquina voar quatro vezes naquela manhã.'),
        line('They took turns as pilots. Each flight gave them another chance to learn about their airplane.', 'dhêi tuk târnz éz pái-lâts. itch fláit gêiv dhâm â-nâ-dher tchéns tâ lârn â-báut dhér ér-plêin.', 'Eles se revezaram como pilotos. Cada voo trouxe outra oportunidade de aprender sobre o avião.'),
        line('Wilbur made the longest flight that day. He stayed in the air for fifty-nine seconds.', 'uíl-ber mêid dhâ lón-gâst fláit dhât dêi. hi stêid in dhi ér fâr fíf-ti-náin sé-kândz.', 'Wilbur fez o voo mais longo daquele dia. Ele permaneceu no ar por cinquenta e nove segundos.'),
        line('Those flights became an important part of aviation history. Years of work had led to a new beginning.', 'dhôuz fláits bi-kêim ân im-pór-tânt párt âv êi-vi-êi-shân hís-tâ-ri. yirz âv uârk héd léd tâ â nu bi-guí-nin.', 'Aqueles voos se tornaram uma parte importante da história da aviação. Anos de trabalho haviam levado a um novo começo.')
      ] }
    ]
  },
  {
    id: 'rosa-parks', title: 'Rosa Parks e a viagem de ônibus', englishTitle: 'Rosa Parks and the Bus Ride', year: '1955–1956', theme: 'Coragem e direitos civis',
    summary: 'Uma recusa, uma mobilização coletiva e a luta contra a segregação nos ônibus de Montgomery.', audio: '/audio/stories/rosa-parks.mp3',
    sources: [
      { title: 'Library of Congress · December 1', url: 'https://www.loc.gov/item/today-in-history/december-01' },
      { title: 'National Park Service · Rosa Parks', url: 'https://www.nps.gov/semo/learn/historyculture/rosa-parks.htm' },
      { title: 'Library of Congress · Civil Rights Era', url: 'https://www.loc.gov/exhibits/civil-rights-act/civil-rights-era.html?loclr=fbloc' }
    ],
    pages: [
      { title: 'Uma regra injusta', lines: [
        line('In 1955, Rosa Parks lived in Montgomery, Alabama. She worked as a seamstress and supported civil rights.', 'in náin-tín fíf-ti-faiv, rôu-zâ párks livd in mânt-gâ-mâ-ri, é-lâ-bé-mâ. shi uârkt éz â sím-strâs én sâ-pór-tid sí-vâl raits.', 'Em 1955, Rosa Parks morava em Montgomery, Alabama. Ela trabalhava como costureira e apoiava os direitos civis.'),
        line('Black and white passengers did not have equal rights on city buses. Local laws enforced racial segregation.', 'blék én uait pé-sân-djerz did nát hév í-kuâl raits on sí-di bâ-siz. lôu-kâl lóz in-fórst rêi-shâl sé-grâ-guêi-shân.', 'Passageiros negros e brancos não tinham direitos iguais nos ônibus da cidade. Leis locais impunham a segregação racial.'),
        line('On December 1, Parks took a bus after work. She sat in the section for Black passengers.', 'on di-sém-ber fârst, párks tuk â bâs éf-ter uârk. shi sét in dhâ sék-shân fâr blék pé-sân-djerz.', 'Em 1º de dezembro, Parks pegou um ônibus depois do trabalho. Ela se sentou na seção destinada aos passageiros negros.'),
        line('The driver ordered her to give up her seat for a white passenger. Parks refused to move.', 'dhâ drái-ver ór-derd hâr tâ guiv âp hâr sit fâr â uait pé-sân-djer. párks ri-fiúzd tâ muv.', 'O motorista ordenou que ela cedesse o lugar a um passageiro branco. Parks se recusou a sair.')
      ] },
      { title: 'A comunidade reage', lines: [
        line('Police arrested Parks because she refused. News of her arrest spread through the Black community in Montgomery.', 'pâ-lís â-rés-tid párks bi-kóz shi ri-fiúzd. nuz âv hâr â-rést spréd thru dhâ blék kâ-miú-nâ-ti in mânt-gâ-mâ-ri.', 'A polícia prendeu Parks por sua recusa. A notícia da prisão se espalhou pela comunidade negra de Montgomery.'),
        line('Community members organized a bus boycott. They chose not to ride the buses as a form of protest.', 'kâ-miú-nâ-ti mém-berz ór-gâ-naizd â bâs bói-kát. dhêi tchôuz nát tâ raid dhâ bâ-siz éz â fórm âv prôu-test.', 'Integrantes da comunidade organizaram um boicote aos ônibus. Eles decidiram não usá-los como forma de protesto.'),
        line('Many people walked or shared rides. Keeping the protest going required planning, time, and help from others.', 'mé-ni pí-pol uókt ór shérd raidz. kí-pin dhâ prôu-test gôu-in ri-kuáierd plé-nin, taim, én hélp frâm â-dherz.', 'Muitas pessoas caminhavam ou dividiam caronas. Manter o protesto exigiu planejamento, tempo e ajuda de outras pessoas.'),
        line('Martin Luther King, Jr., became a leader of the boycott. Many other people also helped organize it.', 'már-tin lú-ther kin djú-ni-er bi-kêim â lí-der âv dhâ bói-kát. mé-ni â-dher pí-pol ól-sou hélpt ór-gâ-naiz it.', 'Martin Luther King Jr. tornou-se um dos líderes do boicote. Muitas outras pessoas também ajudaram a organizá-lo.')
      ] },
      { title: 'Uma mudança coletiva', lines: [
        line('The boycott continued for 381 days. A short protest had become a long campaign for equal treatment.', 'dhâ bói-kát kân-tín-iud fâr thri hân-drâd êi-di-uân dêiz. â shórt prôu-test héd bi-kâm â lón kém-pêin fâr í-kuâl trít-mânt.', 'O boicote durou 381 dias. Um protesto curto havia se tornado uma longa campanha por tratamento igualitário.'),
        line('In 1956, a court decision ended legal bus segregation in Montgomery. The boycott ended that December.', 'in náin-tín fíf-ti-siks, â kórt di-sí-zhân én-did lí-gâl bâs sé-grâ-guêi-shân in mânt-gâ-mâ-ri. dhâ bói-kát én-did dhât di-sém-ber.', 'Em 1956, uma decisão judicial encerrou a segregação legal nos ônibus de Montgomery. O boicote terminou naquele dezembro.'),
        line('Parks was part of a much larger movement. Her action and the community campaign helped challenge an unfair system.', 'párks uâz párt âv â mâtch lár-djer muv-mânt. hâr ék-shân én dhâ kâ-miú-nâ-ti kém-pêin hélpt tché-lândj ân ân-fér sís-tâm.', 'Parks fazia parte de um movimento muito maior. Sua atitude e a campanha da comunidade ajudaram a enfrentar um sistema injusto.'),
        line('The story is about one woman and many people working together. Their effort became a landmark in American civil rights.', 'dhâ stó-ri iz â-báut uân uú-mân én mé-ni pí-pol uâr-kin tâ-gué-dher. dhér é-fârt bi-kêim â lénd-mark in â-mé-ri-kân sí-vâl raits.', 'A história é sobre uma mulher e muitas pessoas trabalhando juntas. O esforço delas tornou-se um marco dos direitos civis americanos.')
      ] }
    ]
  },
  {
    id: 'apollo-13', title: 'A viagem que mudou de plano', englishTitle: 'The Mission That Changed Its Plan', year: '1970', theme: 'Cooperação e solução de problemas',
    summary: 'A Apollo 13 não chegou à superfície da Lua. O objetivo passou a ser trazer três pessoas para casa.', audio: '/audio/stories/apollo-13.mp3',
    sources: [
      { title: 'NASA · Apollo 13', url: 'https://www.nasa.gov/mission/apollo-13/' },
      { title: 'NASA · Apollo 13: 50th anniversary', url: 'https://www.nasa.gov/news-release/nasa-commemorates-50th-anniversary-of-apollo-13-a-successful-failure/' },
      { title: 'NASA · Mission details', url: 'https://www.nasa.gov/missions/apollo/apollo-13-mission-details/' }
    ],
    pages: [
      { title: 'Um destino conhecido', lines: [
        line('Apollo 13 left Earth on April 11, 1970. Three astronauts were traveling toward the Moon.', 'â-pá-lou thâr-tín léft ârth on êi-prâl i-lé-vân, náin-tín sé-vân-ti. thri és-trâ-nóts uâr trá-vâ-lin tâ-uórd dhâ mun.', 'A Apollo 13 deixou a Terra em 11 de abril de 1970. Três astronautas viajavam em direção à Lua.'),
        line('Their names were Jim Lovell, Jack Swigert, and Fred Haise. They had trained for a lunar mission.', 'dhér nêimz uâr djim lâ-vél, djék suái-guârt, én fréd hêiz. dhêi héd trêind fâr â lú-nâr mí-shân.', 'Seus nomes eram Jim Lovell, Jack Swigert e Fred Haise. Eles haviam treinado para uma missão lunar.'),
        line('The plan included another landing on the Moon. Two crew members would explore the surface while one remained above.', 'dhâ plén in-klú-did â-nâ-dher lén-din on dhâ mun. tu kru mém-berz uâd ik-splór dhâ sâr-fis uáil uân ri-mêind â-bâv.', 'O plano incluía outro pouso na Lua. Dois tripulantes explorariam a superfície enquanto um permaneceria acima.'),
        line('But on April 13, an oxygen tank exploded. The spacecraft lost important supplies of oxygen and power.', 'bât on êi-prâl thâr-tín, ân ák-si-djân ténk ik-splôu-did. dhâ spêis-kréft lóst im-pór-tânt sâ-pláiz âv ák-si-djân én páu-er.', 'Mas, em 13 de abril, um tanque de oxigênio explodiu. A nave perdeu recursos importantes de oxigênio e energia.')
      ] },
      { title: 'Um novo objetivo', lines: [
        line('The landing was canceled. Bringing the astronauts home safely became the most important goal of the mission.', 'dhâ lén-din uâz kén-sâld. brín-in dhi és-trâ-nóts hôum sêif-li bi-kêim dhâ môust im-pór-tânt gôul âv dhâ mí-shân.', 'O pouso foi cancelado. Trazer os astronautas de volta em segurança tornou-se o objetivo mais importante da missão.'),
        line('The crew moved into the lunar module. This smaller spacecraft became a shelter during the emergency.', 'dhâ kru muvd ín-tâ dhâ lú-nâr má-djul. dhis smó-ler spêis-kréft bi-kêim â shél-ter dú-rin dhi i-mâr-djân-si.', 'A tripulação foi para o módulo lunar. Essa nave menor tornou-se um abrigo durante a emergência.'),
        line('Teams on Earth worked with the astronauts. They had to save water, oxygen, and electrical power.', 'timz on ârth uârkt uidh dhi és-trâ-nóts. dhêi héd tâ sêiv uó-der, ák-si-djân, én i-lék-tri-kâl páu-er.', 'Equipes na Terra trabalharam com os astronautas. Eles precisavam economizar água, oxigênio e energia elétrica.'),
        line('The crew also needed clean air to breathe. Engineers helped them adapt equipment already on the spacecraft.', 'dhâ kru ól-sou ní-did klin ér tâ bridh. én-djâ-nírz hélpt dhâm â-dépt i-kuíp-mânt ól-ré-di on dhâ spêis-kréft.', 'A tripulação também precisava de ar limpo para respirar. Engenheiros ajudaram a adaptar equipamentos que já estavam na nave.')
      ] },
      { title: 'O caminho de casa', lines: [
        line('The astronauts traveled around the Moon without landing. Their route brought them back toward Earth.', 'dhi és-trâ-nóts trá-vâld â-ráund dhâ mun ui-dháut lén-din. dhér rut brót dhâm bék tâ-uórd ârth.', 'Os astronautas viajaram ao redor da Lua sem pousar. A trajetória os levou de volta em direção à Terra.'),
        line('Near home, they returned to the command module. That capsule would carry them through the atmosphere.', 'nir hôum, dhêi ri-târnd tâ dhâ kâ-ménd má-djul. dhât kép-sâl uâd ké-ri dhâm thru dhi ét-mâ-sfir.', 'Perto de casa, eles voltaram ao módulo de comando. Aquela cápsula os levaria pela atmosfera.'),
        line('On April 17, the capsule landed in the Pacific Ocean. All three astronauts survived and were rescued.', 'on êi-prâl sé-vân-tín, dhâ kép-sâl lén-did in dhâ pâ-sí-fik ôu-shân. ól thri és-trâ-nóts sâr-váivd én uâr rés-kiud.', 'Em 17 de abril, a cápsula caiu no Oceano Pacífico. Os três astronautas sobreviveram e foram resgatados.'),
        line('They had not walked on the Moon. Still, people in space and on Earth had solved a crisis together.', 'dhêi héd nát uókt on dhâ mun. stil, pí-pol in spêis én on ârth héd sálvd â krái-sis tâ-gué-dher.', 'Eles não haviam caminhado na Lua. Mesmo assim, pessoas no espaço e na Terra haviam resolvido uma crise juntas.')
      ] }
    ]
  },
  {
    id: 'hudson-landing', title: 'Um pouso no Rio Hudson', englishTitle: 'A Landing on the Hudson River', year: '2009', theme: 'Decisões e trabalho em equipe',
    summary: 'Um encontro com pássaros interrompeu um voo. Pilotos, tripulação e equipes de resgate agiram juntos.', audio: '/audio/stories/hudson-landing.mp3',
    sources: [
      { title: 'NTSB · Flight 1549 investigation', url: 'https://www.ntsb.gov/investigations/Pages/dca09ma026.aspx' },
      { title: 'FAA · Airbus A320 accident lessons', url: 'https://www.faa.gov/lessonslearned/transportairplane/accidents/N160US' },
      { title: 'FAA · A Landing to Remember', url: 'https://www.airporttech.tc.faa.gov/Airport-Safety/Wildlife-Hazard-Abatement/A-Landing-to-Remember' }
    ],
    pages: [
      { title: 'Um voo começa', lines: [
        line('On January 15, 2009, a passenger airplane left New York City. It was US Airways Flight 1549.', 'on djén-iu-é-ri fíf-tín, tu tháu-zând náin, â pé-sân-djer ér-plêin léft nu iórk sí-di. it uâz iu-és ér-uêiz fláit uân faiv fór náin.', 'Em 15 de janeiro de 2009, um avião de passageiros saiu de Nova York. Era o voo 1549 da US Airways.'),
        line('The plane took off from LaGuardia Airport. Its next stop was supposed to be Charlotte, North Carolina.', 'dhâ plêin tuk óf frâm lâ-guár-di-â ér-port. its nékst stáp uâz sâ-pôuzd tâ bi shár-lât, nórth ké-râ-lái-nâ.', 'O avião decolou do Aeroporto LaGuardia. A próxima parada deveria ser Charlotte, na Carolina do Norte.'),
        line('There were 155 people on board. That number included both the passengers and the crew.', 'dhér uâr uân hân-drâd fíf-ti-faiv pí-pol on bórd. dhât nâm-ber in-klú-did bôuth dhâ pé-sân-djerz én dhâ kru.', 'Havia 155 pessoas a bordo. Esse número incluía os passageiros e a tripulação.'),
        line('Soon after takeoff, the airplane hit a flock of birds. Both engines lost almost all their thrust.', 'sun éf-ter têik-óf, dhi ér-plêin hit â flák âv bârdz. bôuth én-djânz lóst ól-môust ól dhér thrâst.', 'Logo depois da decolagem, o avião atingiu um bando de pássaros. Os dois motores perderam quase toda a propulsão.')
      ] },
      { title: 'Uma decisão rápida', lines: [
        line('The pilots had very little time. They needed to find a place to bring the airplane down.', 'dhâ pái-lâts héd vé-ri lí-dâl taim. dhêi ní-did tâ faind â plêis tâ brin dhi ér-plêin dáun.', 'Os pilotos tinham pouquíssimo tempo. Eles precisavam encontrar um local para pousar o avião.'),
        line('Captain Chesley Sullenberger and First Officer Jeffrey Skiles worked together. The situation required an immediate decision.', 'kép-tân tchéz-li sâ-lân-bâr-ger én fârst ó-fi-ser djé-fri skáilz uârkt tâ-gué-dher. dhâ si-tchu-êi-shân ri-kuáierd ân i-mí-di-ât di-sí-zhân.', 'O comandante Chesley Sullenberger e o primeiro-oficial Jeffrey Skiles trabalharam juntos. A situação exigia uma decisão imediata.'),
        line('The pilots brought the airplane onto the Hudson River. This was an emergency landing on water.', 'dhâ pái-lâts brót dhi ér-plêin ón-tu dhâ hâd-sân rí-ver. dhis uâz ân i-mâr-djân-si lén-din on uó-der.', 'Os pilotos pousaram o avião no Rio Hudson. Foi um pouso de emergência na água.'),
        line('Cabin crew members helped passengers leave the plane. They used the emergency exits and available safety equipment.', 'ké-bin kru mém-berz hélpt pé-sân-djerz liv dhâ plêin. dhêi iuzd dhi i-mâr-djân-si ég-zits én â-vêi-lâ-bâl sêif-ti i-kuíp-mânt.', 'Os comissários ajudaram os passageiros a sair do avião. Eles usaram as saídas de emergência e os equipamentos de segurança disponíveis.')
      ] },
      { title: 'Ajuda no rio', lines: [
        line('Boats were already close to the landing site. Their crews quickly came to help the people on the water.', 'bôuts uâr ól-ré-di klôus tâ dhâ lén-din sait. dhér kruz kuík-li kêim tâ hélp dhâ pí-pol on dhâ uó-der.', 'Barcos já estavam perto do local do pouso. Suas tripulações chegaram rapidamente para ajudar as pessoas na água.'),
        line('Emergency responders also joined the rescue. Getting everyone away from the airplane required help from many people.', 'i-mâr-djân-si ri-spán-derz ól-sou djóind dhâ rés-kiu. gué-din év-ri-uân â-uêi frâm dhi ér-plêin ri-kuáierd hélp frâm mé-ni pí-pol.', 'Equipes de emergência também participaram do resgate. Retirar todos de perto do avião exigiu a ajuda de muitas pessoas.'),
        line('All 155 people survived, although some were seriously injured. The rescue became known around the world.', 'ól uân hân-drâd fíf-ti-faiv pí-pol sâr-váivd, ól-dhôu sâm uâr sí-ri-âs-li ín-djârd. dhâ rés-kiu bi-kêim nôun â-ráund dhâ uârld.', 'As 155 pessoas sobreviveram, embora algumas tenham sofrido ferimentos graves. O resgate ficou conhecido no mundo todo.'),
        line('Investigators studied the accident afterward. Their report recognized the work of the pilots, cabin crew, and rescuers.', 'in-vés-ti-guêi-terz stâ-did dhi ék-si-dânt éf-ter-uârd. dhér ri-pórt ré-kâg-naizd dhâ uârk âv dhâ pái-lâts, ké-bin kru, én rés-kiu-erz.', 'Investigadores estudaram o acidente depois. O relatório reconheceu o trabalho dos pilotos, dos comissários e dos socorristas.')
      ] }
    ]
  }
];
