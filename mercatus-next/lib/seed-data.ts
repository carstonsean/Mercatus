import type { DemoState, Game, Market, Player, Team, UserAccount } from "@/lib/models";

const teams: Team[] = [
  { id: "wests-tigers", name: "Wests Tigers", shortName: "Tigers", primary: "#F36F21", secondary: "#000000" },
  { id: "cowboys", name: "Cowboys", shortName: "Cowboys", primary: "#002B5C", secondary: "#FFC72C" },
  { id: "panthers", name: "Panthers", shortName: "Panthers", primary: "#000000", secondary: "#00A3E0" },
  { id: "eels", name: "Eels", shortName: "Eels", primary: "#003A8F", secondary: "#FFC72C" },
  { id: "storm", name: "Storm", shortName: "Storm", primary: "#5C2D91", secondary: "#001A57" },
  { id: "warriors", name: "Warriors", shortName: "Warriors", primary: "#003A8F", secondary: "#00A651" }
];

const games: Game[] = [
  {
    id: "game-tigers-cowboys",
    roundId: "round-2-2026",
    title: "Tigers vs Cowboys",
    homeTeamId: "wests-tigers",
    awayTeamId: "cowboys",
    venue: "Leichhardt Oval",
    kickoff: "Sun 15 Mar · 6:15 PM"
  },
  {
    id: "game-panthers-eels",
    roundId: "round-2-2026",
    title: "Panthers vs Eels",
    homeTeamId: "panthers",
    awayTeamId: "eels",
    venue: "BlueBet Stadium",
    kickoff: "Sat 14 Mar · 7:35 PM"
  },
  {
    id: "game-storm-warriors",
    roundId: "round-2-2026",
    title: "Storm vs Warriors",
    homeTeamId: "storm",
    awayTeamId: "warriors",
    venue: "AAMI Park",
    kickoff: "Fri 13 Mar · 8:00 PM"
  }
];

const players: Player[] = [
  { id: "bula", name: "Jahream Bula", position: "Fullback", teamId: "wests-tigers", seasonAverage: 39.5 },
  { id: "luai", name: "Jarome Luai", position: "Five-Eighth", teamId: "wests-tigers", seasonAverage: 38.0 },
  { id: "doueihi", name: "Adam Doueihi", position: "Halfback", teamId: "wests-tigers", seasonAverage: 43.0 },
  { id: "terrell-may", name: "Terrell May", position: "Prop", teamId: "wests-tigers", seasonAverage: 68.5 },
  { id: "koroisau", name: "Apisai Koroisau", position: "Hooker", teamId: "wests-tigers", seasonAverage: 45.0 },
  { id: "drinkwater", name: "Scott Drinkwater", position: "Fullback", teamId: "cowboys", seasonAverage: 63.5 },
  { id: "dearden", name: "Tom Dearden", position: "Halfback", teamId: "cowboys", seasonAverage: 44.0 },
  { id: "taumalolo", name: "Jason Taumalolo", position: "Prop", teamId: "cowboys", seasonAverage: 31.5 },
  { id: "mahoney", name: "Reed Mahoney", position: "Hooker", teamId: "cowboys", seasonAverage: 29.0 },
  { id: "burns", name: "Braidon Burns", position: "Wing", teamId: "cowboys", seasonAverage: 51.0 },
  { id: "edwards", name: "Dylan Edwards", position: "Fullback", teamId: "panthers", seasonAverage: 58.5 },
  { id: "cleary", name: "Nathan Cleary", position: "Halfback", teamId: "panthers", seasonAverage: 61.0 },
  { id: "martin", name: "Liam Martin", position: "Second Row", teamId: "panthers", seasonAverage: 52.0 },
  { id: "moses", name: "Mitchell Moses", position: "Halfback", teamId: "eels", seasonAverage: 55.0 },
  { id: "hopgood", name: "J'maine Hopgood", position: "Lock", teamId: "eels", seasonAverage: 57.5 },
  { id: "papenhuyzen", name: "Ryan Papenhuyzen", position: "Fullback", teamId: "storm", seasonAverage: 59.0 },
  { id: "munster", name: "Cameron Munster", position: "Five-Eighth", teamId: "storm", seasonAverage: 49.5 },
  { id: "hughes", name: "Jahrome Hughes", position: "Halfback", teamId: "storm", seasonAverage: 53.5 },
  { id: "metcalf", name: "Luke Metcalf", position: "Halfback", teamId: "warriors", seasonAverage: 41.0 },
  { id: "cnk", name: "Charnze Nicoll-Klokstad", position: "Fullback", teamId: "warriors", seasonAverage: 48.5 }
];

const midpointMap: Record<string, number> = {
  bula: 40,
  luai: 39,
  doueihi: 43,
  "terrell-may": 72,
  koroisau: 46,
  drinkwater: 66,
  dearden: 45,
  taumalolo: 33,
  mahoney: 29,
  burns: 53,
  edwards: 59,
  cleary: 61,
  martin: 51,
  moses: 56,
  hopgood: 58,
  papenhuyzen: 60,
  munster: 50,
  hughes: 54,
  metcalf: 41,
  cnk: 49
};

const gameByTeam: Record<string, string> = {
  "wests-tigers": "game-tigers-cowboys",
  cowboys: "game-tigers-cowboys",
  panthers: "game-panthers-eels",
  eels: "game-panthers-eels",
  storm: "game-storm-warriors",
  warriors: "game-storm-warriors"
};

const users: UserAccount[] = [
  { id: "user-casey", username: "Casey", startingBalance: 100 },
  { id: "user-johnny", username: "Johnny", startingBalance: 100 },
  { id: "user-riley", username: "Riley", startingBalance: 100 }
];

const markets: Market[] = players.map((player) => ({
  id: `market-${player.id}`,
  roundId: "round-2-2026",
  gameId: gameByTeam[player.teamId],
  playerId: player.id,
  openingMidpoint: midpointMap[player.id],
  currentMidpoint: midpointMap[player.id],
  spreadWidth: 1,
  midpointHistory: [midpointMap[player.id]],
  lockStatus: "OPEN"
}));

export function createInitialState(): DemoState {
  return {
    teams,
    players,
    games,
    markets,
    users,
    orders: [],
    matchedPairs: [],
    settlements: [],
    currentUserId: users[0].id
  };
}
