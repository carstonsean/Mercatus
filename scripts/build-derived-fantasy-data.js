const fs = require("fs");
const path = require("path");

const INPUT_PATH = process.argv[2] || "C:\\Users\\carst\\Downloads\\nrl-fantasy-2025-final.json";
const OUTPUT_PATH = process.argv[3] || path.join(__dirname, "..", "lib", "derived-fantasy-data.js");
const TARGET_YEAR = Number(process.argv[4] || 2025);
const TARGET_MATCH_TYPE = "nrl";

const TEAM_ALIASES = {
  BRISBANEBRONCOS: "Broncos",
  BRONCOS: "Broncos",
  CANBERRARAIDERS: "Raiders",
  RAIDERS: "Raiders",
  CANTERBURYBANKSTOWNBULLDOGS: "Bulldogs",
  BULLDOGS: "Bulldogs",
  CRONULLASHARKS: "Sharks",
  SHARKS: "Sharks",
  DOLPHINS: "Dolphins",
  GOLDCOASTTITANS: "Titans",
  TITANS: "Titans",
  MANLYWARRINGAHSEAEAGLES: "Sea Eagles",
  SEAEAGLES: "Sea Eagles",
  MELBOURNESTORM: "Storm",
  STORM: "Storm",
  NEWCASTLEKNIGHTS: "Knights",
  KNIGHTS: "Knights",
  NEWZEALANDWARRIORS: "Warriors",
  WARRIORS: "Warriors",
  NORTHQUEENSLANDCOWBOYS: "Cowboys",
  COWBOYS: "Cowboys",
  PARRAMATTAEELS: "Eels",
  EELS: "Eels",
  PENRITHPANTHERS: "Panthers",
  PANTHERS: "Panthers",
  SOUTHSYDNEYRABBITOHS: "Rabbitohs",
  RABBITOHS: "Rabbitohs",
  STGEORGEILLAWARRADRAGONS: "Dragons",
  DRAGONS: "Dragons",
  SYDNEYROOSTERS: "Roosters",
  ROOSTERS: "Roosters",
  WESTSTIGERS: "Tigers",
  TIGERS: "Tigers"
};

const POSITION_ALIASES = {
  FULLBACK: "Fullback",
  WINGER: "Winger",
  CENTRE: "Centre",
  FIVEEIGHTH: "Five-Eighth",
  HALFBACK: "Halfback",
  HOOKER: "Hooker",
  PROP: "Prop",
  SECONDROW: "2nd Row",
  SECONDROWFORWARD: "2nd Row",
  "2NDROW": "2nd Row",
  LOCK: "Lock"
};

function normalizeKey(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function normalizeTeamName(value) {
  const key = normalizeKey(value);
  return TEAM_ALIASES[key] || value || "";
}

function normalizePosition(value) {
  const key = normalizeKey(value);
  return POSITION_ALIASES[key] || null;
}

function roundTo(value, decimals = 1) {
  const factor = 10 ** decimals;
  return Math.round((Number(value) || 0) * factor) / factor;
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

function asTimestamp(value) {
  const timestamp = Date.parse(value || "");
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function pushGroup(map, outerKey, innerKey, value) {
  if (!map.has(outerKey)) {
    map.set(outerKey, new Map());
  }
  const inner = map.get(outerKey);
  if (!inner.has(innerKey)) {
    inner.set(innerKey, []);
  }
  inner.get(innerKey).push(value);
}

function writeModule(filePath, payload) {
  const content = `(function(root,factory){\n  if(typeof module==="object"&&module.exports){\n    module.exports=factory();\n    return;\n  }\n  root.MERCATUS_DERIVED=factory();\n})(typeof globalThis!=="undefined"?globalThis:this,function(){\n  return ${JSON.stringify(payload, null, 2)};\n});\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

const raw = JSON.parse(fs.readFileSync(INPUT_PATH, "utf8"));
const playerStatsByName = {};
const concessionMap = new Map();
const leaguePositionMap = new Map();

for (const entry of raw) {
  const firstName = entry.player?.first_name || "";
  const lastName = entry.player?.last_name || "";
  const playerName = `${firstName} ${lastName}`.trim();
  const playerKey = normalizeKey(playerName);
  const playerRows = (entry.stats || [])
    .filter((stat) => Number(stat.year) === TARGET_YEAR && stat.match_type === TARGET_MATCH_TYPE)
    .map((stat) => {
      const position = normalizePosition(stat.position_match);
      const fantasyPoints = Number(stat.fantasy_points);
      if (!position || !Number.isFinite(fantasyPoints)) return null;
      const teamName = normalizeTeamName(stat.home_squad_id === stat.squad_id ? stat.home_squad_name : stat.away_squad_name);
      const opponentName = normalizeTeamName(stat.opponent || (stat.home_squad_id === stat.squad_id ? stat.away_squad_name : stat.home_squad_name));
      return {
        playerName,
        position,
        fantasyPoints,
        matchDate: stat.match_date,
        sortKey: asTimestamp(stat.match_date),
        teamName,
        opponentName,
        isHome: stat.home_squad_id === stat.squad_id
      };
    })
    .filter(Boolean)
    .sort((left, right) => left.sortKey - right.sortKey);

  if (!playerRows.length) {
    continue;
  }

  const fantasyPoints = playerRows.map((row) => row.fantasyPoints);
  const lastThreeRows = playerRows.slice(-3);
  const homeRows = playerRows.filter((row) => row.isHome);
  const awayRows = playerRows.filter((row) => !row.isHome);
  const primaryPosition = Object.entries(
    playerRows.reduce((counts, row) => {
      counts[row.position] = (counts[row.position] || 0) + 1;
      return counts;
    }, {})
  ).sort((left, right) => right[1] - left[1])[0]?.[0] || playerRows[playerRows.length - 1].position;

  playerStatsByName[playerKey] = {
    playerName,
    key: playerKey,
    primaryPosition,
    gamesPlayed: playerRows.length,
    seasonAverage: roundTo(average(fantasyPoints)),
    last3Average: roundTo(average(lastThreeRows.map((row) => row.fantasyPoints))),
    lastGameScore: roundTo(playerRows[playerRows.length - 1].fantasyPoints),
    scoreVolatility: roundTo(standardDeviation(fantasyPoints)),
    homeAverage: roundTo(average(homeRows.map((row) => row.fantasyPoints))),
    awayAverage: roundTo(average(awayRows.map((row) => row.fantasyPoints)))
  };

  playerRows.forEach((row) => {
    pushGroup(concessionMap, row.opponentName, row.position, row.fantasyPoints);
    if (!leaguePositionMap.has(row.position)) {
      leaguePositionMap.set(row.position, []);
    }
    leaguePositionMap.get(row.position).push(row.fantasyPoints);
  });
}

const leaguePositionAverages = Object.fromEntries(
  [...leaguePositionMap.entries()].map(([position, values]) => [position, roundTo(average(values))])
);

const teamConcessionsByTeam = Object.fromEntries(
  [...concessionMap.entries()]
    .sort((left, right) => left[0].localeCompare(right[0]))
    .map(([teamName, positions]) => {
      const positionAverages = Object.fromEntries(
        [...positions.entries()]
          .sort((left, right) => left[0].localeCompare(right[0]))
          .map(([position, values]) => [position, roundTo(average(values))])
      );
      const positionDeltas = Object.fromEntries(
        Object.entries(positionAverages).map(([position, averageValue]) => [
          position,
          roundTo(averageValue - (leaguePositionAverages[position] || averageValue))
        ])
      );
      return [
        teamName,
        {
          positionAverages,
          positionDeltas
        }
      ];
    })
);

const payload = {
  metadata: {
    sourcePath: INPUT_PATH,
    generatedAt: new Date().toISOString(),
    season: TARGET_YEAR,
    matchType: TARGET_MATCH_TYPE,
    players: Object.keys(playerStatsByName).length,
    teams: Object.keys(teamConcessionsByTeam).length
  },
  playerStatsByName,
  leaguePositionAverages,
  teamConcessionsByTeam
};

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
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
