create table if not exists public.affiliates (
  code text primary key,
  name text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.user_affiliate_referrals (
  user_id uuid primary key references public.users(id) on delete cascade,
  affiliate_code text not null references public.affiliates(code) on delete restrict,
  referred_at timestamptz not null default now()
);

create index if not exists idx_user_affiliate_referrals_affiliate_code
  on public.user_affiliate_referrals (affiliate_code, referred_at desc);

insert into public.affiliates (code, name)
values ('fantasyfanatics', 'NRL Fantasy Fanatics')
on conflict (code) do update
set name = excluded.name;
