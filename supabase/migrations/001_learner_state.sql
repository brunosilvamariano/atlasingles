-- Execute no SQL Editor do seu projeto Supabase. As tabelas persistem fora da Vercel.
create table if not exists public.learner_state (
 user_id uuid primary key references auth.users(id) on delete cascade,
 data jsonb not null default '{}'::jsonb check (octet_length(data::text) <= 200000),
 updated_at timestamptz not null default now()
);
alter table public.learner_state enable row level security;
revoke all on public.learner_state from anon;
grant select, insert, update on public.learner_state to authenticated;
create policy "Read own learning state" on public.learner_state for select to authenticated using ((select auth.uid()) = user_id);
create policy "Insert own learning state" on public.learner_state for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Update own learning state" on public.learner_state for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
