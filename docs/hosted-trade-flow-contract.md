# Hosted Trade And Challenge Flow Contract

## Purpose

This document defines the hosted-mode contract for:

- trade submit
- trade cancel
- session/bootstrap state rebuild
- challenge link create
- challenge link load
- challenge accept

The goal is to remove ambiguity about:

- source of truth
- synchronous vs asynchronous work
- what each route is allowed to read and write
- how identity is normalized

If the code disagrees with this document, the document wins and the code should be changed.

## Core Rules

### 1. Canonical data lives in Supabase

In hosted mode, these are authoritative:

- `users`
- `trades`
- `matched_pairs`
- `holdings`
- `wallet_ledger`
- `wallet_balances` or `wallet_snapshots`
- `weekly_player_markets`
- `share_sessions`

These are not authoritative:

- process `state`
- `app_runtime_state`
- client local storage

### 2. Process memory is a cache only

The server `state` object may be used for:

- rendering snapshots
- short-lived request convenience
- optimistic local calculations before durable writes

It must not be required for correctness of hosted trade or challenge routes.

### 3. Runtime overlay is runtime-only

`app_runtime_state` may persist:

- UI/runtime convenience data
- non-canonical ephemeral data that can be recomputed or dropped safely

It must not be required to reconstruct:

- who owns a trade
- whether a trade exists
- whether a challenge session is valid
- whether a balance is sufficient

### 4. Username identity is canonicalized at the backend boundary

All hosted user lookups must resolve to one canonical `users.username` row.

Rules:

- lookups are case-insensitive
- responses return the canonical username from Supabase
- client state must adopt the canonical username
- bankroll maps and portfolio queries must not keep parallel case variants

### 5. Successful responses imply durable writes

For hosted mutating routes, returning `200` means the canonical Supabase write has completed.

Allowed after-response work:

- cache refresh
- runtime overlay sync
- non-canonical analytics/logging

Not allowed after-response:

- the only write that makes the result real

## Route Contracts

### POST `/api/trades`

#### Purpose

Create a new trade for one user in one market.

#### Inputs

- canonicalized username
- market id
- side
- stake

#### Reads

- canonical user row
- current market row
- user balance
- resting orders or matched state needed to price/match the trade

#### Writes

For unmatched trade:

- insert one `trades` row
- insert one `wallet_ledger` row for reserved stake
- update one balance snapshot/view input if required
- update one `weekly_player_markets` row aggregate
- update holdings only if holdings are meant to include unmatched reserve, otherwise do not

For immediately matched trade:

- all of the above as needed
- matched pair write(s)
- any required balance/ledger writes for both sides
- holdings updates

#### Synchronous requirement

All canonical writes must finish before returning success.

#### Response

- canonical user name
- canonical trade payload
- updated balance
- updated market payload or a minimal delta

#### Forbidden behavior

- return `200` before Supabase trade persistence completes
- rely on future `syncStateFromSupabase()` to make the trade real

### POST `/api/orders/cancel`

#### Purpose

Cancel one or more still-unmatched orders for one user.

#### Reads

- canonical user row
- targeted trade rows

#### Writes

- update targeted `trades` rows
- refund balance via `wallet_ledger`
- update holdings if affected
- update market aggregate totals

#### Synchronous requirement

All affected canonical rows must be updated before returning success.

#### Forbidden behavior

- cancel only in local memory
- defer the canonical market write until after the response

### POST `/api/session`

#### Purpose

Return the authenticated session snapshot for one user.

#### Reads

- canonical user row
- canonical balances
- canonical trades and market state via the hosted snapshot builder

#### Writes

- optional last-seen update on `users`
- no trade correctness writes

#### Response requirements

- include canonical backend user payload
- include canonical username in the top-level response
- ensure client can replace any locally typed alias with canonical username

#### Forbidden behavior

- returning a null backend user in hosted mode when the user row exists
- returning balance only under an alias key that differs in case from the canonical username

### GET `/api/bootstrap`

#### Purpose

Return the market/session shell for the app.

#### Reads

- canonical round and market state
- canonical balances if included

#### Writes

- none required for correctness

#### Constraints

- may rebuild the hosted snapshot
- must not repair missing writes from earlier trade routes

### POST `/api/share/create`

#### Purpose

Create a challenge link for one eligible unmatched trade.

#### Reads

- canonical user row
- canonical trade row
- canonical market lock state

#### Writes

- insert one `share_sessions` row

#### Synchronous requirement

The `share_sessions` row must exist before returning success.

#### Forbidden behavior

- requiring process `state.markets`
- requiring a full hosted snapshot sync before create

### GET `/api/share/:id`

#### Purpose

Load the challenge payload for one share session.

#### Reads

- one `share_sessions` row
- referenced trade row(s)
- referenced market/player/game/team rows
- canonical creator username

#### Writes

- none required for correctness

#### Constraints

- must work even if process `state` is empty or stale
- must not depend on runtime overlay for correctness

### POST `/api/share/accept`

#### Purpose

Accept a share session and match the opposing side.

#### Reads

- canonical accepting user row
- canonical share session row
- canonical originating trade row
- canonical market lock state
- canonical balance

#### Writes

- accepting trade row
- originating trade update
- matched pair row
- wallet ledger rows
- holdings updates
- share session status update
- market aggregate update if needed

#### Synchronous requirement

The match must be durable before returning success.

#### Forbidden behavior

- reconstructing correctness from local `state`
- relying on runtime overlay share session fallback
- requiring a broad full-state sync inside the request

## Snapshot Builder Contract

### Builder input

The hosted snapshot builder may read:

- canonical Supabase tables
- non-authoritative runtime overlay only for runtime-only fields

### Builder output

The builder must be able to reconstruct:

- markets
- trades
- balances
- matched pairs
- portfolio-relevant user mappings

without requiring process memory.

### Builder must not

- silently drop trades because a username alias casing differs
- overwrite canonical market state with runtime overlay market state
- require recent write-behind persistence to produce a correct snapshot

## Identity Contract

### Canonical username

The canonical username is the exact `users.username` value returned by Supabase for the user row chosen by the case-insensitive lookup.

### Client behavior

On any hosted response containing `backend.user.username`, the client must:

- replace the stored username with that canonical value
- use the canonical value for future requests

### Server behavior

When updating `state.bankrolls` in hosted mode, the server must:

- remove case-variant alias keys
- write the balance under the canonical username key

## Allowed Async Work

Allowed after the response:

- refresh process cache from canonical rows
- recompute non-canonical dashboard summaries
- persist runtime-only overlay data
- emit analytics or diagnostics

Not allowed after the response:

- the write that makes a trade, cancellation, or challenge acceptance canonical

## Instrumentation Requirements

For staging hosted mode, add per-request logs for:

- route name
- canonical username
- market id
- trade id or share session id
- total duration
- each Supabase write duration
- result category

Suggested result categories:

- `ok`
- `validation_error`
- `identity_error`
- `db_timeout`
- `db_conflict`
- `state_rebuild_error`

## Verification Checklist

### Trade submit

- create unmatched trade
- confirm row exists in `trades`
- refresh session
- confirm trade still appears

### Trade cancel

- cancel unmatched trade
- confirm row and balance reflect cancellation
- refresh session
- confirm cancelled order does not reappear as open

### Challenge create/load/accept

- create link
- load link
- accept link
- refresh both users
- confirm matched state persists

### Identity

- log in as `Sean123`
- log in as `sean123`
- confirm both resolve to the same canonical user
- confirm no second user row is created

