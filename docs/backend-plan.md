# Mercatus Backend Plan

This document defines the first production backend for Mercatus.

The backend must support the product principles in [docs/product-principles.md](C:\Users\carst\OneDrive\Desktop\NRL Predictions Market\docs\product-principles.md), especially crowd-led price discovery, low-friction trading, strong liquidity, and high participation.

## Product rules

- Mercatus is a public play-money projection market for weekly NRL Fantasy player scores.
- Accurate projections should emerge from trading activity rather than central determination.
- Users sign in with a username-only demo account for MVP.
- Users receive a bankroll top-up each round and keep a lifetime balance.
- Markets expose one projection line per player.
- Users buy `OVER` or `UNDER` against that line.
- Larger stakes move the line more through the market maker.
- Users hold positions until settlement.
- Markets lock at kickoff.
- Settlement uses official NRL Fantasy scores.
- Holdings are merged for display, but trades remain the source of truth.

## Core backend responsibilities

### 1. Identity

- Create or fetch a user from `users` by username.
- Track `last_seen_at`.
- No passwords for MVP.

### 2. Fixture and roster ingestion

- Create `rounds`.
- Import `games`.
- Import `players`.
- Create `weekly_player_markets` for named team-list players.
- Record `season_average` and `opening_line`.

### 3. Trade execution

- Validate market is `OPEN`.
- Validate market is not past kickoff.
- Validate the user has enough available balance.
- Keep the path from discovery to execution as short as possible.
- Calculate pre-trade line, post-trade line, and entry line.
- Insert into `trades`.
- Update `weekly_player_markets`.
- Update `holdings`.
- Insert `wallet_ledger` stake deduction.

### 4. Holdings

- Keep one row per `user + market + side`.
- `weighted_entry_line` is the weighted average of open same-side trades.
- Opposite-side positions on the same market should be blocked for MVP.

### 5. Settlement

- Lock markets automatically at kickoff.
- When official fantasy scores are available:
  - store `final_fantasy_score`
  - resolve all trades
  - write settlement payout/refund ledger rows
  - update market status to `RESOLVED`
  - zero out holdings for that market

### 6. Discovery and leaderboard

- Discovery should surface reasons to trade, not just reasons to browse.
- Ranking systems should reinforce competition, repeat participation, and frequent trading.

- `wallet_balances` view powers balance ranking.
- `portfolio_stats` view powers open positions, realized P/L, and win rate.
- “Largest position” should come from `holdings.total_stake`.

## Product-principle checks for backend work

Backend changes should be favoured when they improve one or more of the following:

- lower latency for quoting, execution, sync, or settlement
- higher matched volume or easier matching
- clearer market activity signals for discovery surfaces
- safer operation of active markets
- fewer blockers between seeing value and placing a trade

Backend changes should be questioned when they:

- increase complexity without increasing participation or trading
- make projections more centrally controlled
- fragment liquidity across too many low-activity markets
- add operational friction to high-activity flows

## Suggested service layout

### API routes

- `POST /api/session`
- `GET /api/bootstrap`
- `POST /api/trades`
- `POST /api/admin/markets/:id/override`
- `POST /api/admin/markets/:id/settle`
- `POST /api/admin/scrape/team-lists`
- `POST /api/admin/scrape/scores`

### Server modules

- `lib/db.ts`
- `lib/auth.ts`
- `lib/markets.ts`
- `lib/trades.ts`
- `lib/holdings.ts`
- `lib/wallet.ts`
- `lib/settlement.ts`
- `lib/scrapers/nrlFantasy.ts`

## Recommended migration path from current demo

### Phase 1

- Stand up Supabase project
- Run `supabase/migrations/001_init_mercatus.sql`
- Seed teams, round, games, players, and markets

### Phase 2

- Replace `server-state.json` reads with Postgres queries
- Replace in-memory bankroll logic with `wallet_ledger`
- Replace in-memory trade storage with `trades` + `holdings`

### Phase 3

- Add scheduled scraping for team lists and final scores
- Add kickoff lock job
- Add settlement job

### Phase 4

- Add realtime subscriptions for market line changes
- Deploy publicly

## Notes on pricing

The current demo uses a simple demand-imbalance model. The production schema is compatible with either:

- a simple stepped line model
- an LMSR-style market maker

To support a smoother AMM, `weekly_player_markets.amm_b` is included from the start.
