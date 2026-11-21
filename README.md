# Atlas English · Bruno — Vercel

Este é o projeto completo e independente em Next.js, React e TypeScript. Inclui o visual, logo SVG, biblioteca, exercícios, dashboard, vocabulário, calendário e anotações. Não depende da hospedagem Sites, Cloudflare D1 ou login ChatGPT.

## Estude no computador em modo local

Use Node.js 22.13 ou mais recente da linha 22. Instale as dependências e inicie o Atlas:

    npm ci
    npm run dev:local

Abra [http://127.0.0.1:3000](http://127.0.0.1:3000). O servidor fica restrito a este computador. O modo local dispensa conta e Supabase. As lições, fontes WOFF2 e a foto WebP são servidas pelo projeto. Depois da instalação, o modo local funciona sem acesso à internet enquanto o servidor estiver rodando.

Progresso, vocabulário salvo, meta, calendário e anotações ficam no armazenamento do navegador. Use o mesmo endereço e perfil para continuar. Limpar os dados do site apaga os registros locais. A conta do Supabase tem um histórico separado.

Para rodar com o build de produção no seu computador:

    npm run build
    npm run start:local

## Conteúdo
156 situações, 837 falas e 16 categorias. Novidades: gírias com formas reduzidas (gonna, wanna, gotta), abreviações de mensagens e a categoria Armadilhas do português, com falsos cognatos e erros típicos de brasileiros. A nova categoria Conversas & histórias reais tem 30 histórias fictícias, oito falas cada, dez por nível: básico, intermediário e avançado. Cinco temas: Vida a dois; Família & crianças; Emoções & escolhas; Passeios & memórias; Política & sociedade. Há tradução da frase, significado e pronúncia aproximada por palavra. Cada fala e cada palavra tem áudio (veja a seção Áudio). Níveis são organização didática, não certificação.


## Áudio
Cada fala e cada palavra tem um botão de ouvir. Há também "Mais devagar" e "Ouvir tudo", que toca o diálogo inteiro.

- **Sem configurar nada**, o app usa a voz em inglês americano do próprio navegador. A qualidade depende do aparelho: Edge e Chrome costumam ter vozes "Natural" boas.
- **Áudio gravado (recomendado):** gere os MP3 com a ElevenLabs. Quando o arquivo existe, o app usa a gravação no lugar da voz do navegador.
  1. Crie uma conta paga em https://elevenlabs.io. O plano grátis não permite uso comercial.
  2. Copie .env.audio.example para .env.audio e cole sua chave: `ELEVENLABS_API_KEY=...`. Esse arquivo fica fora do Git.
  3. Veja o custo antes: `npm run audio:generate -- --dry-run`. O acervo inteiro tem cerca de 64 mil caracteres (uns US$ 6,50).
  4. Teste as vozes com 10 falas: `npm run audio:generate -- --limit=10 --no-words`. Abra uma lição e ouça.
  5. Para trocar vozes, edite scripts/audio-voices.json com os IDs que escolher no site da ElevenLabs.
  6. Gere tudo: `npm run audio:generate`. Os arquivos vão para public/audio/ e sobem junto no deploy da Vercel.
- Ao mudar uma frase, rode o comando de novo: só os áudios das frases alteradas são gerados.

## Prática e revisão
- Cada lição tem cinco abas: Entender, Escrever (traduzir), Ditado (ouvir e escrever), Montar (pôr as palavras na ordem) e Lacuna (escolher a palavra que falta).
- A correção aceita contrações e formas completas como a mesma resposta: "I'm" = "I am".
- Em Vocabulário, as palavras salvas entram na revisão espaçada ("Revisar hoje"). Cada acerto adia a próxima revisão: 1, 3, 7, 14, 30, 60 e 120 dias. Um erro faz a palavra voltar no dia seguinte.

## 1. Prepare o Supabase
1. Crie um projeto em https://supabase.com.
2. No SQL Editor, execute o arquivo supabase/migrations/001_learner_state.sql **uma vez**. Ele cria a tabela e as políticas de acesso por usuário (RLS).
3. Em Authentication > Users, crie sua conta com e-mail e senha. Confirme o e-mail no painel, se necessário. Copie o UUID dessa conta.
4. Em Authentication > configuração de cadastro, desabilite novos cadastros: este sistema é pessoal e não possui inscrição pública.
5. Nas configurações do projeto, obtenha a URL e a chave **publishable**. Não use uma chave secret ou service_role no navegador.

## 2. Rode no computador com uma conta Supabase
Requisito: Node.js 22.13 ou mais recente da linha 22, e npm.

    npm ci

Copie .env.example para .env.local e preencha:

    NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=SUA-CHAVE-PUBLISHABLE
    ADMIN_USER_ID=UUID-DA-SUA-CONTA

O ADMIN_USER_ID é lido apenas no servidor. Nenhuma senha é incluída no código. Depois:

    npm run dev

Abra o endereço mostrado pelo terminal. Entre com a conta criada no Supabase. Enquanto faltar qualquer uma dessas três variáveis, o app abre sem login e salva os estudos somente no navegador. Quando as três estiverem configuradas, o acesso privado com Supabase volta automaticamente no próximo deploy. O progresso local não é migrado automaticamente para a conta.

## 3. Publique na Vercel
1. Envie os arquivos do projeto para o GitHub, incluindo `public/fonts`, `public/images` e `package-lock.json`. Se o repositório já existir, aplique as alterações a um clone dele para preservar o histórico.
2. Vincule o repositório ao projeto Vercel. Use o preset Next.js, Node.js 22.x e a pasta que contém `package.json` como Root Directory. O `vercel.json` executa `npm ci` e `npm run build`, que usa Webpack.
3. No painel da Vercel, configure as três variáveis de `.env.example` no ambiente Production. Se já usa o Supabase com este app, reutilize o mesmo projeto e o mesmo UUID do administrador para acessar seu histórico. Guarde as credenciais locais em arquivos ignorados pelo Git.
4. Publique pela branch de produção configurada na Vercel, normalmente `main`. Depois de vincular o GitHub, cada push nessa branch dispara um novo deploy de produção. Alterações nas variáveis entram em vigor no próximo deploy.

O `.gitignore` exclui `node_modules`, `.next`, `.vercel` e os arquivos `.env` com valores locais. A versão hospedada abre sem login enquanto o Supabase não estiver configurado. Nesse modo, progresso, vocabulário e anotações ficam separados em cada navegador. Quando as três variáveis estiverem presentes, o app exige login e sincroniza pela conta Supabase. As rotas de dados privados continuam exigindo autenticação em ambos os modos.

## Organização
- app/: páginas, login, saída e API protegida.
- components/atlas/: componentes do produto, calendário e caderno.
- lib/content/: conteúdo por nível e real-life.ts com as 30 histórias novas.
- lib/curriculum.ts e expanded-curriculum.ts: acervo e montagem das falas.
- lib/supabase/: clientes para navegador e servidor; autorização do administrador.
- lib/learner-state.ts: validação dos dados salvos.
- proxy.ts: atualização da sessão sem cache compartilhado.
- public/: logo e recursos visuais.
- supabase/migrations/: estrutura e políticas do banco.
- scripts/: auditorias de conteúdo e calendário.

## Verificação
    npm run typecheck
    npm run check:content
    npm run check:planning
    npm run build

## Dados da hospedagem anterior
O banco do site anterior não é incluído neste ZIP. Os arquivos do sistema e o conteúdo estão completos, mas os registros pessoais do banco anterior não migram automaticamente para o Supabase. O novo banco começa vazio. Não conecte a Vercel ao banco D1: são implementações diferentes. O site anterior permanece disponível enquanto você configura a Vercel.

## Limites e manutenção
- O login e o banco reais dependem do projeto Supabase configurado por você; essa integração precisa de um teste após cadastrar suas variáveis e conta.
- O acesso hospedado ao app e à API exige uma conta validada pelo Supabase cujo UUID corresponda a ADMIN_USER_ID. A tabela usa RLS por usuário.
- Pagamentos permanecem desativados. Valores de planos são apenas informativos, não há checkout ou cobrança.
- Para recuperar sua senha, use a administração do Supabase. Não há um fluxo de recuperação por e-mail implementado no app.
- O acesso sem conta é reservado aos comandos locais e fica desativado na Vercel.
- A pronúncia em português é uma ajuda aproximada. Ela não representa todos os sons e variações do inglês americano.

## Referências oficiais de implantação
- Next.js na Vercel: https://vercel.com/docs/frameworks/full-stack/nextjs
- Variáveis na Vercel: https://vercel.com/docs/environment-variables
- Supabase SSR: https://supabase.com/docs/guides/auth/server-side/creating-a-client?framework=nextjs


O .npmrc acompanha o projeto porque Twind declara um peer opcional antigo de TypeScript. A instalação usa a configuração incluída; não remova esse arquivo ao subir o repositório.

## Criar o login e gerar a senha automaticamente (opcional)
Como alternativa à criação pelo painel, depois de npm ci:
1. Copie .env.setup.example para .env.setup no seu computador.
2. Preencha SUPABASE_URL, SUPABASE_SECRET_KEY (chave administrativa, somente nesse arquivo local) e ADMIN_EMAIL com seu e-mail.
3. Execute npm run admin:create. O script cria uma conta nova, gera uma senha aleatória e mostra **Login**, **Senha** e **ADMIN_USER_ID** no terminal. Guarde a senha em um gerenciador.
4. Configure o ADMIN_USER_ID mostrado em .env.local e no painel da Vercel. A chave administrativa não é necessária para o app funcionar e não deve ser adicionada à Vercel nem ao repositório.

O ZIP não contém uma senha universal. Antes de configurar seu Supabase não existe uma conta ativa na versão Vercel. O script não modifica a senha de uma conta existente. No site hospedado anterior, o acesso continua pela conta ChatGPT.


## Histórias infantis · leitura guiada

Cinco histórias fictícias e originais para iniciantes: Lily e a bola vermelha, Max e o passarinho, O pequeno jardim de Mia, O dia de chuva de Ben e Lucy e o gatinho perdido. Cada história tem três páginas digitais e 12 trechos, com escrita em inglês americano, pronúncia aproximada para brasileiros e tradução.

- `lib/children-stories.ts`: histórias, traduções, pronúncias e páginas.
- `components/atlas/ChildrenStories.tsx`: biblioteca, leitor e controles.
- `app/stories.css`: layout responsivo.
- `public/audio/stories/children/`: cinco narrações geradas na Epidemic Sound com Annie, voz americana, idioma inglês e velocidade de geração 0.9x.

A seção infantil usa somente os MP3 da Epidemic Sound para o áudio, sem síntese de voz do navegador. O player lê a história inteira, e a leitura continua ao virar as páginas. Há um controle para diminuir ainda mais a velocidade de reprodução. As histórias históricas anteriores foram substituídas nesta seção. A quantidade de folhas impressas varia com a formatação; o leitor possui três etapas digitais por história.
