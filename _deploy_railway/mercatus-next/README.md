# Mercatus Matched Market Prototype

This folder contains a separate `Next.js + TypeScript + Tailwind CSS` prototype for the revised Mercatus concept: a matched-user NRL Fantasy score spread market with no unlimited platform risk.

## What this prototype demonstrates

- Mobile-first dark-mode UI
- Username-only demo login
- Game-grouped player markets
- Midpoint plus fixed spread display
- Pending orders, partial matching, and matched pairs
- Portfolio separation between pending, open matched, and settled positions
- Leaderboard and simple admin resolution flow
- Platform revenue from outcomes that land inside the spread

## Market model

Each player market exposes:

- `midpoint`
- `under line = midpoint - 0.5`
- `over line = midpoint + 0.5`

Orders only match against opposite-side user liquidity at the same spread snapshot. Any unmatched amount stays pending until another user takes the other side or the user cancels it.

Settlement works as follows:

- final score `>` over line: Over wins the pot
- final score `<` under line: Under wins the pot
- final score inside the spread: platform keeps the matched pot

## Local preview

1. Open a terminal in this folder:

```powershell
cd "C:\Users\carst\OneDrive\Desktop\NRL Predictions Market\mercatus-next"
```

2. Install dependencies:

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

4. Open:

```text
http://localhost:3000
```

## Structure

- `app/`: Next.js app router entrypoints and global styles
- `components/`: reusable UI screens and trade entry
- `lib/models.ts`: domain models
- `lib/seed-data.ts`: demo round, game, team, player, and market data
- `lib/matching-engine.ts`: matching, cancellation, midpoint nudging, and settlement logic
- `lib/demo-state.tsx`: local seeded state container and selectors

## Notes

- This prototype is intentionally local-state driven so the matched spread model can be iterated quickly.
- It is designed to be Supabase-ready later, but does not depend on live backend wiring yet.
- The existing static Mercatus app in the repo is untouched.
