# Mercatus

Mercatus is a play-money projection market for weekly NRL Fantasy player scores.

This version now includes a lightweight shared backend so multiple people on the same Wi-Fi can access the same markets, place trades into the same lines, and see the same market state.

## What changed

- The app no longer uses browser-only `localStorage` for market state.
- A Node server now serves the UI and owns the shared market state.
- Trades, line changes, admin line overrides, and settlement now happen on the server.
- Server state persists to `server-state.json`, so markets survive a server restart.
- Clients now live-sync shared state automatically every few seconds, so other devices see line moves and portfolio changes without manual refresh.

## Files

- `index.html`, `styles.css`, `app.js`: browser UI
- `seed-data.js`: shared fixture/team/player seed data
- `server.js`: shared multiplayer HTTP server
- `server-state.json`: created automatically after first server write
- `start-mercatus.ps1`: simple launcher script

## Run locally

Stop the old Python static server first if it is still running on port `8000`.

### Option 1: PowerShell launcher

```powershell
.\start-mercatus.ps1
```

This runs Mercatus on port `8001` by default.

### Option 2: Direct Node command

```powershell
& "C:\Program Files\nodejs\node.exe" .\server.js
```

If you want a different port:

```powershell
$env:PORT="8002"
& "C:\Program Files\nodejs\node.exe" .\server.js
```

## Open on phones

If your computer IP is `192.168.1.4` and you are using the default multiplayer port:

```text
http://192.168.1.4:8001
```

Anyone on the same Wi-Fi who opens that address will use the same shared market state.

If you are running on port `8000` instead:

```text
http://192.168.1.4:8000
```

## Demo usernames

- Each person should use a different username in the Profile screen.
- User balances are stored server-side by username.
- New usernames start with `100 cr`.

## Current backend scope

This backend is intentionally lightweight:

- shared in-memory/server-file state
- username-only demo identity
- shared trades and moving lines
- automatic live sync polling in the browser
- admin line overrides
- admin settlement

## Production backend foundation

The repo now includes the first Supabase/Postgres foundation for the real backend:

- [supabase/migrations/001_init_mercatus.sql](C:\Users\carst\OneDrive\Desktop\NRL Predictions Market\supabase\migrations\001_init_mercatus.sql)
- [docs/backend-plan.md](C:\Users\carst\OneDrive\Desktop\NRL Predictions Market\docs\backend-plan.md)

That schema introduces:

- `users`
- `teams`
- `rounds`
- `games`
- `players`
- `weekly_player_markets`
- `trades`
- `holdings`
- `wallet_ledger`
- `scrape_runs`

It also includes helper views for:

- wallet balances
- portfolio stats

## Optional Supabase session scaffold

Mercatus now includes an optional Supabase integration layer for the first DB-backed session flow:

- [lib/config.js](C:\Users\carst\OneDrive\Desktop\NRL Predictions Market\lib\config.js)
- [lib/supabase.js](C:\Users\carst\OneDrive\Desktop\NRL Predictions Market\lib\supabase.js)
- [lib/supabase-users.js](C:\Users\carst\OneDrive\Desktop\NRL Predictions Market\lib\supabase-users.js)
- [.env.example](C:\Users\carst\OneDrive\Desktop\NRL Predictions Market\.env.example)

What it does today:

- if Supabase env vars are present, `GET /api/bootstrap` and `POST /api/session` will create/fetch the demo user in Supabase
- the user gets an opening wallet ledger entry in the database
- the API response includes backend metadata showing whether the app is running in `local` or `supabase` mode
- the current Round 2 teams, games, players, and weekly markets are seeded into Supabase automatically
- newly placed trades are mirrored into Supabase `trades`, `holdings`, and `wallet_ledger`
- local `.env` loading is built in, so Mercatus will read env vars from a project-level `.env` file without extra packages

What still uses the local demo backend:

- primary market state serving to the browser
- settlement resolution
- leaderboard calculations

This keeps the app stable while we migrate one subsystem at a time.

## Next backend step

The next implementation step is moving from `server.js` file-backed state to Supabase:

- create a Supabase project
- run the migration SQL
- seed teams, fixtures, players, and round markets
- replace `server-state.json` reads/writes with database queries
- move bankroll changes into `wallet_ledger`
- add scraping for official scores and team lists
