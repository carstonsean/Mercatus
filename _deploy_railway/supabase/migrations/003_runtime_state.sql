create table if not exists public.app_runtime_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.wallet_snapshots (
  user_id uuid primary key references public.users(id) on delete cascade,
  username text not null unique,
  current_balance numeric(12,2) not null default 0,
  updated_at timestamptz not null default now()
);

create index if not exists idx_wallet_snapshots_username on public.wallet_snapshots (lower(username));

create or replace function public.touch_runtime_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_app_runtime_state_touch_updated_at on public.app_runtime_state;
create trigger trg_app_runtime_state_touch_updated_at
before update on public.app_runtime_state
for each row execute function public.touch_runtime_updated_at();

drop trigger if exists trg_wallet_snapshots_touch_updated_at on public.wallet_snapshots;
create trigger trg_wallet_snapshots_touch_updated_at
before update on public.wallet_snapshots
for each row execute function public.touch_runtime_updated_at();
