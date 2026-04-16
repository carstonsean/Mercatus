create table if not exists public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  user_id uuid references public.users(id) on delete set null,
  session_id text not null,
  created_at timestamptz not null default now(),
  metadata jsonb
);

create index if not exists idx_analytics_events_type_created_at
on public.analytics_events (event_type, created_at desc);

create index if not exists idx_analytics_events_session_created_at
on public.analytics_events (session_id, created_at desc);

create index if not exists idx_analytics_events_user_created_at
on public.analytics_events (user_id, created_at desc);
