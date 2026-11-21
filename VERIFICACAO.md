# Verificação da entrega

- Instalação das dependências concluída; package-lock.json incluído.
- TypeScript sem erros.
- Build de produção Next.js 16.3.4 concluído.
- Auditoria: 146 situações, 777 falas, todos os tokens com significado e pronúncia.
- Nova categoria: 30 histórias, oito falas cada, dez por nível.
- Datas do calendário, ano bissexto e leitura de registros antigos verificados.
- No site equivalente, conferidos filtros temáticos, abertura das oito falas, tabela por palavra e seleção de categoria por teclado.

O login real, a escrita no banco Supabase e o deploy na sua conta Vercel precisam de verificação depois que você configurar seu projeto, as variáveis e a conta do administrador. Nenhuma credencial ou projeto Supabase real foi configurado nesta entrega.

Verificação de produção local sem credenciais configuradas: /login retornou 200, /api/auth/session e /api/progress retornaram 401; gravação com origem externa retornou 403.
