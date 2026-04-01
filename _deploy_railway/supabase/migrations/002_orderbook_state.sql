alter table public.trades
  add column if not exists status text not null default 'PENDING',
  add column if not exists matched_stake numeric(12,2) not null default 0,
  add column if not exists unmatched_stake numeric(12,2) not null default 0,
  add column if not exists refunded_stake numeric(12,2) not null default 0,
  add column if not exists entry_under_line numeric(8,1),
  add column if not exists entry_over_line numeric(8,1),
  add column if not exists engine_version text;

alter table public.wallet_ledger
  add column if not exists external_ledger_key text;

create unique index if not exists idx_wallet_ledger_external_key
  on public.wallet_ledger (external_ledger_key)
  where external_ledger_key is not null;

create table if not exists public.matched_pairs (
  id uuid primary key default gen_random_uuid(),
  market_id uuid not null references public.weekly_player_markets(id) on delete cascade,
  round_id uuid not null references public.rounds(id) on delete cascade,
  game_id uuid not null references public.games(id) on delete cascade,
  player_id uuid not null references public.players(id) on delete cascade,
  created_at timestamptz not null default now(),
  status text not null default 'OPEN',
  stake numeric(12,2) not null,
  over_user_id uuid not null references public.users(id) on delete cascade,
  under_user_id uuid not null references public.users(id) on delete cascade,
  over_order_id uuid references public.trades(id) on delete set null,
  under_order_id uuid references public.trades(id) on delete set null,
  over_entry_line numeric(8,1) not null,
  under_entry_line numeric(8,1) not null,
  winner_user_id uuid references public.users(id) on delete set null,
  voided boolean not null default false,
  platform_revenue numeric(12,2) not null default 0
);

create index if not exists idx_matched_pairs_market_id on public.matched_pairs (market_id, created_at desc);
create index if not exists idx_matched_pairs_round_id on public.matched_pairs (round_id, created_at desc);
