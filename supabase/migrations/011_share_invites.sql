alter table if exists public.share_sessions
  add column if not exists expires_at timestamptz;

create table if not exists public.share_invites (
  id uuid primary key default gen_random_uuid(),
  share_session_id uuid not null references public.share_sessions(id) on delete cascade,
  responder_user_id uuid references public.users(id) on delete set null,
  action text not null check (action in ('ACCEPTED','DECLINED')),
  decline_note text check (char_length(decline_note) <= 100),
  accepted_trade_id uuid,
  responded_at timestamptz not null default now()
);

create index if not exists idx_share_invites_share_session_id
  on public.share_invites (share_session_id);

create index if not exists idx_share_invites_responder_user_id
  on public.share_invites (responder_user_id);