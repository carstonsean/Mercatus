const fs = require("fs");
const path = require("path");

const DEFAULT_SEASON = Number(process.argv[2] || 2026);
const DEFAULT_ROUNDS = String(process.argv[3] || "1,2")
  .split(",")
  .map((value) => Number(value.trim()))
  .filter((value) => Number.isInteger(value) && value > 0);
const OUTPUT_PATH = process.argv[4] || path.join(__dirname, "..", "lib", "derived-fantasy-data.js");
const PLAYERS_URL = "https://fantasy.nrl.com/data/nrl/players.json";
const ROUNDS_URL = "https://fantasy.nrl.com/data/nrl/rounds.json";

function normalizeKey(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function standardDeviation(values) {
  if (values.length <= 1) return 0;
  const mean = average(values);
  const variance = average(values.map((value) => (value - mean) ** 2));
  return Math.sqrt(variance);
}

function roundTo(value, decimals = 1) {
  const factor = 10 ** decimals;
  return Math.round((Number(value) || 0) * factor) / factor;
}

function priceImpliedProjectionFor(player) {
  const cost = Number(player?.cost);
  if (!Number.isFinite(cost) || cost <= 0) return null;
  return roundTo(cost / 12800);
}

function positionFromFantasyCode(player) {
  const primaryCode = Array.isArray(player.positions) ? player.positions[0] : null;
  const map = {
    2: "Prop",
    3: "2nd Row",
    4: "Halfback",
    5: "Centre",
    6: "Fullback"
  };
  return map[primaryCode] || null;
}

function writeModule(filePath, payload) {
  const content = `(function(root,factory){\n  if(typeof module==="object"&&module.exports){\n    module.exports=factory();\n    return;\n  }\n  root.MERCATUS_DERIVED=factory();\n})(typeof globalThis!=="undefined"?globalThis:this,function(){\n  return ${JSON.stringify(payload, null, 2)};\n});\n`;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function buildMatchesByRound(rounds) {
  const map = new Map();
  for (const round of rounds) {
    map.set(
      Number(round.id),
      Array.isArray(round.matches)
        ? round.matches.map((match) => ({
            homeSquadId: Number(match.home_squad_id),
            awaySquadId: Number(match.away_squad_id),
            homeSquadName: match.home_squad_name,
            awaySquadName: match.away_squad_name
          }))
        : []
    );
  }
  return map;
}

function matchForSquad(matches, squadId) {
  return matches.find((match) => match.homeSquadId === squadId || match.awaySquadId === squadId) || null;
}

async function main() {
  if (!DEFAULT_ROUNDS.length) {
    throw new Error("At least one round number is required.");
  }

  const [players, rounds] = await Promise.all([fetchJson(PLAYERS_URL), fetchJson(ROUNDS_URL)]);
  const selectedRounds = new Set(DEFAULT_ROUNDS);
  const completedRounds = rounds.filter((round) => selectedRounds.has(Number(round.id)));
  const matchesByRound = buildMatchesByRound(completedRounds);

  let existingDerived = null;
  if (fs.existsSync(OUTPUT_PATH)) {
    try {
      delete require.cache[require.resolve(OUTPUT_PATH)];
      existingDerived = require(OUTPUT_PATH);
    } catch (error) {
      existingDerived = null;
    }
  }

  const playerStatsByName = {};
  const roundScoresByPlayer = {};

  for (const player of players) {
    const scores = player?.stats?.scores || {};
    const pickedScores = DEFAULT_ROUNDS
      .map((roundNumber) => {
        const roundScore = scores[String(roundNumber)];
        if (!Number.isFinite(Number(roundScore))) {
          return null;
        }
        const matches = matchesByRound.get(roundNumber) || [];
        const match = matchForSquad(matches, Number(player.squad_id));
        const isHome = match ? match.homeSquadId === Number(player.squad_id) : null;
        return {
          round: roundNumber,
          score: Number(roundScore),
          opponent: match
            ? isHome
              ? match.awaySquadName
              : match.homeSquadName
            : null,
          team: match
            ? isHome
              ? match.homeSquadName
              : match.awaySquadName
            : null,
          isHome
        };
      })
      .filter(Boolean);

    if (!pickedScores.length) {
      continue;
    }

    const playerName = `${player.first_name || ""} ${player.last_name || ""}`.trim();
    const key = normalizeKey(playerName);
    const scoreValues = pickedScores.map((entry) => entry.score);
    const homeScores = pickedScores.filter((entry) => entry.isHome === true).map((entry) => entry.score);
    const awayScores = pickedScores.filter((entry) => entry.isHome === false).map((entry) => entry.score);
    const latestEntry = pickedScores[pickedScores.length - 1];

    playerStatsByName[key] = {
      playerName,
      key,
      primaryPosition: positionFromFantasyCode(player),
      gamesPlayed: scoreValues.length,
      currentPrice: Number.isFinite(Number(player.cost)) ? Number(player.cost) : null,
      priceImpliedProjection: priceImpliedProjectionFor(player),
      seasonAverage: roundTo(average(scoreValues)),
      last3Average: roundTo(average(scoreValues.slice(-3))),
      lastGameScore: roundTo(latestEntry.score),
      scoreVolatility: roundTo(standardDeviation(scoreValues)),
      homeAverage: homeScores.length ? roundTo(average(homeScores)) : roundTo(average(scoreValues)),
      awayAverage: awayScores.length ? roundTo(average(awayScores)) : roundTo(average(scoreValues))
    };

    roundScoresByPlayer[key] = pickedScores;
  }

  const payload = {
    metadata: {
      source: "public-nrl-fantasy-api",
      playersUrl: PLAYERS_URL,
      roundsUrl: ROUNDS_URL,
      generatedAt: new Date().toISOString(),
      season: DEFAULT_SEASON,
      roundsIncluded: DEFAULT_ROUNDS,
      players: Object.keys(playerStatsByName).length
    },
    playerStatsByName,
    leaguePositionAverages: existingDerived?.leaguePositionAverages || {},
    teamConcessionsByTeam: existingDerived?.teamConcessionsByTeam || {},
    roundScoresByPlayer
  };

  writeModule(OUTPUT_PATH, payload);

  console.log(
    JSON.stringify(
      {
        outputPath: OUTPUT_PATH,
        ...payload.metadata
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exitCode = 1;
});
