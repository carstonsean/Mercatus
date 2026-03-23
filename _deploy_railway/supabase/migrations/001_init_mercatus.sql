create extension if not exists "pgcrypto";

create type trade_side as enum ('OVER', 'UNDER');
create type market_status as enum ('OPEN', 'LOCKED', 'RESOLVED', 'CANCELLED');
create type game_status as enum ('SCHEDULED', 'LIVE', 'FINAL');
create type ledger_entry_type as enum (
  'ACCOUNT_CREATED',
  'ROUND_TOP_UP',
  'TRADE_STAKE',
  'SETTLEMENT_PAYOUT',
  'SETTLEMENT_REFUND',
  'ADMIN_ADJUSTMENT'
);

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  display_name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_seen_at timestamptz
);

create table if not exists public.teams (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null unique,
  short_name text not null,
  primary_color text not null,
  secondary_color text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.rounds (
  id uuid primary key default gen_random_uuid(),
  season integer not null,
  round_number integer not null,
  label text not null,
  bankroll_top_up numeric(12,2) not null default 1000,
  status text not null default 'UPCOMING',
  lock_at timestamptz,
  created_at timestamptz not null default now(),
  unique (season, round_number)
);

create table if not exists public.games (
  id uuid primary key default gen_random_uuid(),
  round_id uuid not null references public.rounds(id) on delete cascade,
  slug text not null unique,
  venue text,
  kickoff_at timestamptz not null,
  status game_status not null default 'SCHEDULED',
  home_team_id uuid not null references public.teams(id),
  away_team_id uuid not null references public.teams(id),
  official_source_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  external_source text not null default 'nrl_fantasy',
  external_id text,
  team_id uuid references public.teams(id),
  full_name text not null,
  slug text not null unique,
  position text not null,
  jersey_number integer,
  headshot_url text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (external_source, external_id)
);

create table if not exists public.weekly_player_markets (
  id uuid primary key default gen_random_uuid(),
  round_id uuid not null references public.rounds(id) on delete cascade,
  game_id uuid not null references public.games(id) on delete cascade,
  player_id uuid not null references public.players(id) on delete cascade,
  team_id uuid not null references public.teams(id),
  market_status market_status not null default 'OPEN',
  opening_line numeric(8,1) not null,
  current_line numeric(8,1) not null,
  season_average numeric(8,1),
  over_stake_total numeric(12,2) not null default 0,
  under_stake_total numeric(12,2) not null default 0,
  amm_b numeric(12,4) not null default 40,
  final_fantasy_score numeric(8,1),
  settled_at timestamptz,
  locked_at timestamptz,
  manual_override boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (round_id, player_id)
);

create table if not exists public.trades (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  market_id uuid not null references public.weekly_player_markets(id) on delete cascade,
  round_id uuid not null references public.rounds(id) on delete cascade,
  game_id uuid not null references public.games(id) on delete cascade,
  player_id uuid not null references public.players(id) on delete cascade,
  side trade_side not null,
  stake numeric(12,2) not null,
  pre_trade_line numeric(8,1) not null,
  post_trade_line numeric(8,1) not null,
  entry_line numeric(8,1) not null,
  quantity numeric(12,4) not null default 1,
  average_fill_rule text not null default 'MIDPOINT',
  resolved_outcome text,
  payout numeric(12,2),
  profit_loss numeric(12,2),
  placed_at timestamptz not null default now(),
  settled_at timestamptz
);

create table if not exists public.holdings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  market_id uuid not null references public.weekly_player_markets(id) on delete cascade,
  round_id uuid not null references public.rounds(id) on delete cascade,
  player_id uuid not null references public.players(id) on delete cascade,
  side trade_side not null,
  total_stake numeric(12,2) not null default 0,
  weighted_entry_line numeric(8,1),
  open_trade_count integer not null default 0,
  updated_at timestamptz not null default now(),
  unique (user_id, market_id, side)
);

create table if not exists public.wallet_ledger (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  round_id uuid references public.rounds(id) on delete set null,
  trade_id uuid references public.trades(id) on delete set null,
  entry_type ledger_entry_type not null,
  amount numeric(12,2) not null,
  balance_after numeric(12,2) not null,
  note text,
  created_at timestamptz not null default now()
);

create table if not exists public.scrape_runs (
  id uuid primary key default gen_random_uuid(),
  source text not null,
  run_type text not null,
  status text not null default 'STARTED',
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  payload jsonb not null default '{}'::jsonb,
  error_message text
);

create index if not exists idx_users_username on public.users (lower(username));
create index if not exists idx_games_round_id on public.games (round_id, kickoff_at);
create index if not exists idx_players_team_id on public.players (team_id, active);
create index if not exists idx_markets_round_game on public.weekly_player_markets (round_id, game_id);
create index if not exists idx_markets_status on public.weekly_player_markets (market_status, locked_at);
create index if not exists idx_trades_user_id on public.trades (user_id, placed_at desc);
create index if not exists idx_trades_market_id on public.trades (market_id, placed_at desc);
create index if not exists idx_holdings_user_id on public.holdings (user_id, updated_at desc);
create index if not exists idx_wallet_ledger_user_id on public.wallet_ledger (user_id, created_at desc);
create index if not exists idx_scrape_runs_source on public.scrape_runs (source, started_at desc);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_users_touch_updated_at on public.users;
create trigger trg_users_touch_updated_at
before update on public.users
for each row execute function public.touch_updated_at();

drop trigger if exists trg_games_touch_updated_at on public.games;
create trigger trg_games_touch_updated_at
before update on public.games
for each row execute function public.touch_updated_at();

drop trigger if exists trg_players_touch_updated_at on public.players;
create trigger trg_players_touch_updated_at
before update on public.players
for each row execute function public.touch_updated_at();

drop trigger if exists trg_markets_touch_updated_at on public.weekly_player_markets;
create trigger trg_markets_touch_updated_at
before update on public.weekly_player_markets
for each row execute function public.touch_updated_at();

create or replace view public.wallet_balances as
select
  u.id as user_id,
  u.username,
  coalesce(sum(l.amount), 0) as current_balance
from public.users u
left join public.wallet_ledger l on l.user_id = u.id
group by u.id, u.username;

create or replace view public.portfolio_stats as
select
  u.id as user_id,
  u.username,
  count(*) filter (where t.settled_at is null) as open_trade_count,
  count(*) filter (where t.settled_at is not null) as settled_trade_count,
  coalesce(sum(t.profit_loss) filter (where t.settled_at is not null), 0) as realized_profit_loss,
  round(
    100 * (
      count(*) filter (where t.resolved_outcome = 'WIN')::numeric /
      nullif(count(*) filter (where t.settled_at is not null), 0)
    ),
    1
  ) as win_rate
from public.users u
left join public.trades t on t.user_id = u.id
group by u.id, u.username;
