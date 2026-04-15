create table if not exists public.active_round_settings (
  id text primary key,
  active_round_number integer not null,
  updated_at timestamptz not null default now(),
  constraint active_round_settings_positive_round check (active_round_number > 0)
);

create or replace function public.touch_active_round_settings_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_active_round_settings_touch_updated_at on public.active_round_settings;
create trigger trg_active_round_settings_touch_updated_at
before update on public.active_round_settings
for each row execute function public.touch_active_round_settings_updated_at();
