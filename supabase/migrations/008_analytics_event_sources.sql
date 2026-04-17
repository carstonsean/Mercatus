alter table public.analytics_events
add column if not exists source text;

create index if not exists idx_analytics_events_source_created_at
on public.analytics_events (source, created_at desc);
