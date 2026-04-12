/**
 * cron-import-scores.js
 *
 * Auto-detects completed NRL rounds for the current season and imports
 * player fantasy scores into lib/derived-fantasy-data.js.
 *
 * Intended to run as a weekly GitHub Actions cron job (see .github/workflows/import-scores.yml).
 * Can also be run manually:
 *   node scripts/cron-import-scores.js
 *   node scripts/cron-import-scores.js 2026        # explicit season
 *   node scripts/cron-import-scores.js 2026 1,2,3  # explicit season + rounds
 */

const path = require("path");
const { execSync } = require("child_process");

const ROUNDS_URL = "https://fantasy.nrl.com/data/nrl/rounds.json";

async function fetchJson(url) {
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function currentSeason() {
  // NRL season starts in March and ends in October.
  // Outside the season window, default to the most recently completed year.
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-indexed
  return month >= 3 ? year : year - 1;
}

async function detectCompletedRounds() {
  const rounds = await fetchJson(ROUNDS_URL);
  const now = Date.now();
  const completed = rounds
    .filter((round) => {
      // A round is considered complete if all its matches have a start time in the past
      // and at least one match exists.
      if (!Array.isArray(round.matches) || !round.matches.length) return false;
      return round.matches.every((match) => {
        const kickoff = Number(new Date(match.start_time || 0).getTime());
        // Add 3h buffer to ensure the match has had time to finish
        return Number.isFinite(kickoff) && kickoff + 3 * 60 * 60 * 1000 < now;
      });
    })
    .map((round) => Number(round.id))
    .filter(Number.isFinite);
  return completed;
}

async function main() {
  const explicitSeason = process.argv[2] ? Number(process.argv[2]) : null;
  const explicitRounds = process.argv[3]
    ? process.argv[3].split(",").map((v) => Number(v.trim())).filter(Number.isFinite)
    : null;

  const season = explicitSeason || currentSeason();
  let rounds = explicitRounds;

  if (!rounds) {
    console.log("Detecting completed rounds from NRL Fantasy API...");
    rounds = await detectCompletedRounds();
    if (!rounds.length) {
      console.log(JSON.stringify({ status: "skipped", reason: "No completed rounds detected" }));
      return;
    }
    console.log(`Detected completed rounds: ${rounds.join(", ")}`);
  }

  const importScript = path.join(__dirname, "import-fantasy-results.js");
  const cmd = `node "${importScript}" ${season} ${rounds.join(",")}`;

  console.log(`Running: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });

  console.log(JSON.stringify({ status: "ok", season, rounds }));
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exitCode = 1;
});
