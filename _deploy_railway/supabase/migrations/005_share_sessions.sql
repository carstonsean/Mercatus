create table if not exists public.share_sessions (
  id uuid primary key default gen_random_uuid(),
  created_by_user_id uuid not null references public.users(id) on delete cascade,
  trade_ids text[] not null default '{}'::text[],
  created_at timestamptz not null default now(),
  status text not null default 'active',
  constraint share_sessions_status_check check (status = any (array['active'::text, 'completed'::text, 'expired'::text]))
);

create index if not exists idx_share_sessions_created_by_user_id
  on public.share_sessions (created_by_user_id, created_at desc);
