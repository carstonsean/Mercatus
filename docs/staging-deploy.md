# Mercatus Staging Deploy

This is the fastest path to getting the current Mercatus app off your laptop and onto a public staging URL while you continue iterating.

## What this gives you

- A live URL that works when your computer is off
- A simple GitHub-based deployment flow
- Railway hosting for the current Node server
- Optional Supabase connection later as the persistence layer hardens

## Current recommendation

Use the current root app for staging, not `mercatus-next`.

The root app is the one that currently has:

- the active Match Centre UI
- the current Portfolio and Leaderboard screens
- the matched-order logic now wired into `server.js`

## Before you deploy

1. Make sure the root app runs locally:

```powershell
cd "C:\Users\carst\OneDrive\Desktop\NRL Predictions Market"
& "C:\Program Files\nodejs\node.exe" .\server.js
```

2. Confirm the app loads in the browser.

3. Stop the server with `Ctrl + C`.

## GitHub setup

1. Create a new GitHub repository.
2. In PowerShell, from the root project folder, run:

```powershell
git init
git add .
git commit -m "Initial Mercatus staging setup"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPO_URL` with the repository URL GitHub gives you.

## Railway setup

1. Go to [Railway](https://railway.app/).
2. Sign in with GitHub.
3. Create a new project.
4. Choose `Deploy from GitHub repo`.
5. Select your Mercatus repository.
6. Railway should detect the root `package.json`.
7. The app should start with:

```text
npm start
```

## Environment variables

Add these in Railway if needed:

- `PORT`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

For the current matched-order staging setup, the app can run without Supabase, but state will then be tied to the deployed container filesystem and may reset on restart/redeploy.

## Important staging caveat

Right now the live matched-order logic is still primarily stored in `server-state.json`.

On Railway this means:

- the app will work
- but state may not be durable across redeploys or instance restarts

That is acceptable for a staging environment while you keep iterating, but the next backend milestone should be moving the live market state fully off the local file and into Supabase.

## Iteration workflow

1. Change code locally
2. Test locally
3. Commit the change
4. Push to GitHub
5. Railway redeploys automatically
6. Open the staging URL on your phone

## Next backend milestone

To make staging more reliable, the next improvement should be:

- move orders
- matched pairs
- bankrolls
- settlements

fully into Supabase so the app no longer depends on `server-state.json`
