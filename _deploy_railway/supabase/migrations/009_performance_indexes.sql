-- Performance indexes for production timeout hotspots.
-- These target admin analytics time-window scans and round state sync reads.

create index if not exists idx_analytics_events_created_at
on public.analytics_events (created_at desc);

create index if not exists idx_analytics_events_created_at_type
on public.analytics_events (created_at desc, event_type);

create index if not exists idx_trades_round_placed_at
on public.trades (round_id, placed_at asc);

create index if not exists idx_trades_round_settled
on public.trades (round_id, settled_at);

create index if not exists idx_trades_market_open_side
on public.trades (market_id, side, placed_at desc)
where settled_at is null
  and status in ('PENDING', 'PARTIALLY_MATCHED')
  and coalesce(unmatched_stake, 0) > 0;

create index if not exists idx_holdings_market_id
on public.holdings (market_id, updated_at desc);
