# Hosted Stabilization Plan

## Why This Exists

Production regressions around `Challenge Friend` exposed a deeper hosted-mode problem:

- request paths still depend on full in-memory app state
- hosted requests still trigger broad Supabase sync work
- runtime overlay and canonical Supabase state are both involved in challenge flows
- the repo contains two divergent server implementations: `server.js` and `_deploy_railway/server.js`

The result is slow requests, state drift, and fixes that improve one symptom while exposing another.

## Current Problems

### 1. Canonical state is unclear

Hosted mode currently mixes:

- canonical Supabase tables
- process memory (`state`)
- runtime overlay in `app_runtime_state`

That makes it difficult to answer a simple question like "what is the source of truth for this trade right now?"

### 2. Share routes are state-rebuild dependent

`/api/share/create`, `/api/share/:id`, and `/api/share/accept` still depend on `state.markets` and helper functions like:

- `findTradeAndMarketById`
- `findEligibleShareTrade`
- `findChallengeTradeById`
- `acceptLocalShareTrade`

In hosted mode, those are only reliable if process memory has been synced from Supabase recently.

### 3. Hosted persistence is too heavyweight

`persistSupabaseMarketState()` writes a full market slice:

- all market trades
- matched pairs
- holdings
- wallet ledger rows
- wallet snapshots
- market aggregate fields

That is too much work for latency-sensitive actions like challenge accept.

### 4. Request paths still do broad sync work

`syncStateFromSupabase()` rebuilds the app snapshot from:

- weekly markets
- trades
- balances
- users
- matched pairs
- runtime overlay

That is acceptable for bootstrap/session refresh, but not for share page load or accept.

### 5. Deployment surface is duplicated

The repo contains both:

- `server.js`
- `_deploy_railway/server.js`

Those flows have already drifted. Production stabilization is not sustainable while two server copies can diverge.

## Target Architecture

### Source of truth

Hosted mode should use this model:

- Supabase tables are canonical for users, trades, matched pairs, balances, share sessions, market status
- process memory is a cache and render model only
- `app_runtime_state` is runtime-only and must not be needed for correctness of hosted share/trade flows
- filesystem persistence is local-only and never used in hosted mode

### Hosted challenge flow

#### Create link

- validate the trade directly from Supabase-backed data
- insert one `share_sessions` row
- return the URL

No full app-state sync should be required.

#### Load link

- fetch the share session record
- fetch the referenced trade and market data directly
- return the payload

The page shell and payload route should not require `syncStateFromSupabase()`.

#### Accept challenge

- validate share session and trade directly against canonical Supabase rows
- perform the match as one bounded hosted write path
- return a small success payload
- refresh caches after the response, not before it

No request-time full snapshot rebuild should be part of the accept path.

## Refactor Scope

This should be done in phases.

### Phase 1. Stop deploy drift

- choose one deploy server entrypoint
- make `_deploy_railway` generated-only or remove it from the active deployment path
- document that Railway deploys root `package.json` and root `server.js`

### Phase 2. Make share routes DB-first

Replace hosted share route dependencies on in-memory state with dedicated Supabase reads:

- `fetchHostedShareSessionRecord`
- `fetchHostedShareTradesPayload`
- `validateHostedChallengeTrade`

Hosted `/api/share/:id` should be able to work even if `state` is empty.

### Phase 3. Make accept path bounded

Move hosted accept away from:

- `acceptLocalShareTrade(...)`
- full market reserialization
- broad market upserts in the request path

Replace it with a dedicated hosted accept write flow that only touches:

- the accepting trade row
- the originating trade row
- the new matched pair row
- balance/ledger updates
- share session status

If this requires a database RPC, that is acceptable as long as the operation is narrow and canonical.

### Phase 4. Reduce sync responsibility

Limit `syncStateFromSupabase()` to:

- bootstrap
- session refresh
- explicit admin refresh

Share page load, link fetch, and challenge accept should not depend on it.

### Phase 5. Add timing diagnostics

For these routes, log:

- route name
- total duration
- Supabase call duration
- result category (`ok`, `timeout`, `invalid`, `auth`, `db_error`)

Without route timings, hosted regressions are difficult to isolate.

## Immediate Implementation Order

1. Remove hosted share route dependence on `state.markets`
2. Build dedicated Supabase-backed share payload fetchers
3. Build a bounded hosted accept flow
4. Remove fallback runtime share-session correctness dependence
5. Unify the deployment entrypoint and eliminate duplicated server drift

## Success Criteria

The hosted flow is stable when all of these are true:

- `Challenge Friend` link creation completes quickly without broad sync work
- challenge page shell loads quickly
- challenge payload loads without depending on cached process state
- challenge accept succeeds without request timeout
- a deploy does not wipe or distort user/trade data
- production and local code paths are structurally aligned

