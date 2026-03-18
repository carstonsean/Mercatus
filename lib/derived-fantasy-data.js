(function(root,factory){
  if(typeof module==="object"&&module.exports){
    module.exports=factory();
    return;
  }
  root.MERCATUS_DERIVED=factory();
})(typeof globalThis!=="undefined"?globalThis:this,function(){
  return {
  "metadata": {
    "source": "public-nrl-fantasy-api",
    "playersUrl": "https://fantasy.nrl.com/data/nrl/players.json",
    "roundsUrl": "https://fantasy.nrl.com/data/nrl/rounds.json",
    "generatedAt": "2026-03-17T05:36:04.134Z",
    "season": 2026,
    "roundsIncluded": [
      1,
      2
    ],
    "players": 310
  },
  "playerStatsByName": {
    "PAYNEHAAS": {
      "playerName": "Payne Haas",
      "key": "PAYNEHAAS",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 65.5,
      "last3Average": 65.5,
      "lastGameScore": 75,
      "scoreVolatility": 9.5,
      "homeAverage": 65.5,
      "awayAverage": 65.5
    },
    "TERRELLMAY": {
      "playerName": "Terrell May",
      "key": "TERRELLMAY",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 62,
      "last3Average": 62,
      "lastGameScore": 62,
      "scoreVolatility": 0,
      "homeAverage": 62,
      "awayAverage": 62
    },
    "NATHANCLEARY": {
      "playerName": "Nathan Cleary",
      "key": "NATHANCLEARY",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 74.5,
      "last3Average": 74.5,
      "lastGameScore": 92,
      "scoreVolatility": 17.5,
      "homeAverage": 92,
      "awayAverage": 57
    },
    "HERBIEFARNWORTH": {
      "playerName": "Herbie Farnworth",
      "key": "HERBIEFARNWORTH",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 60.5,
      "last3Average": 60.5,
      "lastGameScore": 67,
      "scoreVolatility": 6.5,
      "homeAverage": 60.5,
      "awayAverage": 60.5
    },
    "HUDSONYOUNG": {
      "playerName": "Hudson Young",
      "key": "HUDSONYOUNG",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 51.5,
      "last3Average": 51.5,
      "lastGameScore": 40,
      "scoreVolatility": 11.5,
      "homeAverage": 51.5,
      "awayAverage": 51.5
    },
    "ISAAHYEO": {
      "playerName": "Isaah Yeo",
      "key": "ISAAHYEO",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 53,
      "last3Average": 53,
      "lastGameScore": 54,
      "scoreVolatility": 1,
      "homeAverage": 54,
      "awayAverage": 52
    },
    "ERINCLARK": {
      "playerName": "Erin Clark",
      "key": "ERINCLARK",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 46,
      "last3Average": 46,
      "lastGameScore": 53,
      "scoreVolatility": 7,
      "homeAverage": 46,
      "awayAverage": 46
    },
    "JOSEPHTAPINE": {
      "playerName": "Joseph Tapine",
      "key": "JOSEPHTAPINE",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 36,
      "last3Average": 36,
      "lastGameScore": 40,
      "scoreVolatility": 4,
      "homeAverage": 36,
      "awayAverage": 36
    },
    "LATRELLMITCHELL": {
      "playerName": "Latrell Mitchell",
      "key": "LATRELLMITCHELL",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 65.5,
      "last3Average": 65.5,
      "lastGameScore": 56,
      "scoreVolatility": 9.5,
      "homeAverage": 65.5,
      "awayAverage": 65.5
    },
    "DYLANLUCAS": {
      "playerName": "Dylan Lucas",
      "key": "DYLANLUCAS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 56,
      "last3Average": 56,
      "lastGameScore": 52,
      "scoreVolatility": 4,
      "homeAverage": 60,
      "awayAverage": 52
    },
    "JACOBPRESTON": {
      "playerName": "Jacob Preston",
      "key": "JACOBPRESTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "seasonAverage": 74,
      "last3Average": 74,
      "lastGameScore": 74,
      "scoreVolatility": 0,
      "homeAverage": 74,
      "awayAverage": 74
    },
    "FLETCHERSHARPE": {
      "playerName": "Fletcher Sharpe",
      "key": "FLETCHERSHARPE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "seasonAverage": 41,
      "last3Average": 41,
      "lastGameScore": 41,
      "scoreVolatility": 0,
      "homeAverage": 41,
      "awayAverage": 41
    },
    "ISAIYAKATOA": {
      "playerName": "Isaiya Katoa",
      "key": "ISAIYAKATOA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 44.5,
      "last3Average": 44.5,
      "lastGameScore": 46,
      "scoreVolatility": 1.5,
      "homeAverage": 44.5,
      "awayAverage": 44.5
    },
    "KEAONKOLOAMATANGI": {
      "playerName": "Keaon Koloamatangi",
      "key": "KEAONKOLOAMATANGI",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 48.5,
      "last3Average": 48.5,
      "lastGameScore": 47,
      "scoreVolatility": 1.5,
      "homeAverage": 48.5,
      "awayAverage": 48.5
    },
    "NICHOLASHYNES": {
      "playerName": "Nicholas Hynes",
      "key": "NICHOLASHYNES",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 61.5,
      "last3Average": 61.5,
      "lastGameScore": 39,
      "scoreVolatility": 22.5,
      "homeAverage": 84,
      "awayAverage": 39
    },
    "TRAIFULLER": {
      "playerName": "Trai Fuller",
      "key": "TRAIFULLER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 3,
      "last3Average": 3,
      "lastGameScore": 3,
      "scoreVolatility": 0,
      "homeAverage": 3,
      "awayAverage": 3
    },
    "KAIPEARCEPAUL": {
      "playerName": "Kai Pearce-Paul",
      "key": "KAIPEARCEPAUL",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "seasonAverage": 61,
      "last3Average": 61,
      "lastGameScore": 61,
      "scoreVolatility": 0,
      "homeAverage": 61,
      "awayAverage": 61
    },
    "TOBYCOUCHMAN": {
      "playerName": "Toby Couchman",
      "key": "TOBYCOUCHMAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 45,
      "last3Average": 45,
      "lastGameScore": 34,
      "scoreVolatility": 11,
      "homeAverage": 34,
      "awayAverage": 56
    },
    "JAMALFOGARTY": {
      "playerName": "Jamal Fogarty",
      "key": "JAMALFOGARTY",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 46,
      "last3Average": 46,
      "lastGameScore": 49,
      "scoreVolatility": 3,
      "homeAverage": 46,
      "awayAverage": 46
    },
    "BLAYKEBRAILEY": {
      "playerName": "Blayke Brailey",
      "key": "BLAYKEBRAILEY",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 56.5,
      "last3Average": 56.5,
      "lastGameScore": 52,
      "scoreVolatility": 4.5,
      "homeAverage": 61,
      "awayAverage": 52
    },
    "JAMESTEDESCO": {
      "playerName": "James Tedesco",
      "key": "JAMESTEDESCO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 51.5,
      "last3Average": 51.5,
      "lastGameScore": 42,
      "scoreVolatility": 9.5,
      "homeAverage": 42,
      "awayAverage": 61
    },
    "PATRICKCARRIGAN": {
      "playerName": "Patrick Carrigan",
      "key": "PATRICKCARRIGAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 52,
      "last3Average": 52,
      "lastGameScore": 57,
      "scoreVolatility": 5,
      "homeAverage": 52,
      "awayAverage": 52
    },
    "BEAUFERMOR": {
      "playerName": "Beau Fermor",
      "key": "BEAUFERMOR",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 50,
      "last3Average": 50,
      "lastGameScore": 52,
      "scoreVolatility": 2,
      "homeAverage": 50,
      "awayAverage": 50
    },
    "LINDSAYSMITH": {
      "playerName": "Lindsay Smith",
      "key": "LINDSAYSMITH",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 34,
      "last3Average": 34,
      "lastGameScore": 36,
      "scoreVolatility": 2,
      "homeAverage": 36,
      "awayAverage": 32
    },
    "TINOFAASUAMALEAUI": {
      "playerName": "Tino Fa'asuamaleaui",
      "key": "TINOFAASUAMALEAUI",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 32,
      "last3Average": 32,
      "lastGameScore": 30,
      "scoreVolatility": 2,
      "homeAverage": 32,
      "awayAverage": 32
    },
    "DALYCHERRYEVANS": {
      "playerName": "Daly Cherry-Evans",
      "key": "DALYCHERRYEVANS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 42,
      "last3Average": 42,
      "lastGameScore": 59,
      "scoreVolatility": 17,
      "homeAverage": 59,
      "awayAverage": 25
    },
    "COREYHORSBURGH": {
      "playerName": "Corey Horsburgh",
      "key": "COREYHORSBURGH",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 53.5,
      "last3Average": 53.5,
      "lastGameScore": 44,
      "scoreVolatility": 9.5,
      "homeAverage": 53.5,
      "awayAverage": 53.5
    },
    "JACOBKIRAZ": {
      "playerName": "Jacob Kiraz",
      "key": "JACOBKIRAZ",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 61,
      "last3Average": 61,
      "lastGameScore": 61,
      "scoreVolatility": 0,
      "homeAverage": 61,
      "awayAverage": 61
    },
    "ADDINFONUABLAKE": {
      "playerName": "Addin Fonua-Blake",
      "key": "ADDINFONUABLAKE",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 45.5,
      "last3Average": 45.5,
      "lastGameScore": 37,
      "scoreVolatility": 8.5,
      "homeAverage": 54,
      "awayAverage": 37
    },
    "REECEWALSH": {
      "playerName": "Reece Walsh",
      "key": "REECEWALSH",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 47,
      "last3Average": 47,
      "lastGameScore": 69,
      "scoreVolatility": 22,
      "homeAverage": 47,
      "awayAverage": 47
    },
    "ZACHOSKING": {
      "playerName": "Zac Hosking",
      "key": "ZACHOSKING",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 36,
      "last3Average": 36,
      "lastGameScore": 37,
      "scoreVolatility": 1,
      "homeAverage": 36,
      "awayAverage": 36
    },
    "HARRYGRANT": {
      "playerName": "Harry Grant",
      "key": "HARRYGRANT",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 67.5,
      "last3Average": 67.5,
      "lastGameScore": 72,
      "scoreVolatility": 4.5,
      "homeAverage": 63,
      "awayAverage": 72
    },
    "VALENTINEHOLMES": {
      "playerName": "Valentine Holmes",
      "key": "VALENTINEHOLMES",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 40,
      "last3Average": 40,
      "lastGameScore": 53,
      "scoreVolatility": 13,
      "homeAverage": 53,
      "awayAverage": 27
    },
    "MAXKING": {
      "playerName": "Max King",
      "key": "MAXKING",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 54,
      "last3Average": 54,
      "lastGameScore": 54,
      "scoreVolatility": 0,
      "homeAverage": 54,
      "awayAverage": 54
    },
    "ADAMREYNOLDS": {
      "playerName": "Adam Reynolds",
      "key": "ADAMREYNOLDS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 39,
      "last3Average": 39,
      "lastGameScore": 65,
      "scoreVolatility": 26,
      "homeAverage": 39,
      "awayAverage": 39
    },
    "CAMERONMUNSTER": {
      "playerName": "Cameron Munster",
      "key": "CAMERONMUNSTER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 57.5,
      "last3Average": 57.5,
      "lastGameScore": 46,
      "scoreVolatility": 11.5,
      "homeAverage": 69,
      "awayAverage": 46
    },
    "ANGUSCRICHTON": {
      "playerName": "Angus Crichton",
      "key": "ANGUSCRICHTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 41,
      "last3Average": 41,
      "lastGameScore": 39,
      "scoreVolatility": 2,
      "homeAverage": 39,
      "awayAverage": 43
    },
    "NAUFAHUWHYTE": {
      "playerName": "Naufahu Whyte",
      "key": "NAUFAHUWHYTE",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 36.5,
      "last3Average": 36.5,
      "lastGameScore": 33,
      "scoreVolatility": 3.5,
      "homeAverage": 33,
      "awayAverage": 40
    },
    "SCOTTDRINKWATER": {
      "playerName": "Scott Drinkwater",
      "key": "SCOTTDRINKWATER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 27,
      "last3Average": 27,
      "lastGameScore": 33,
      "scoreVolatility": 6,
      "homeAverage": 27,
      "awayAverage": 27
    },
    "JACKWILLIAMS": {
      "playerName": "Jack Williams",
      "key": "JACKWILLIAMS",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 53.5,
      "last3Average": 53.5,
      "lastGameScore": 52,
      "scoreVolatility": 1.5,
      "homeAverage": 53.5,
      "awayAverage": 53.5
    },
    "JAYDNSUA": {
      "playerName": "Jaydn Su'A",
      "key": "JAYDNSUA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 58,
      "last3Average": 58,
      "lastGameScore": 57,
      "scoreVolatility": 1,
      "homeAverage": 57,
      "awayAverage": 59
    },
    "DAMIENCOOK": {
      "playerName": "Damien Cook",
      "key": "DAMIENCOOK",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 72,
      "last3Average": 72,
      "lastGameScore": 53,
      "scoreVolatility": 19,
      "homeAverage": 53,
      "awayAverage": 91
    },
    "VILIAMEKIKAU": {
      "playerName": "Viliame Kikau",
      "key": "VILIAMEKIKAU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "seasonAverage": 74,
      "last3Average": 74,
      "lastGameScore": 74,
      "scoreVolatility": 0,
      "homeAverage": 74,
      "awayAverage": 74
    },
    "TOMDEARDEN": {
      "playerName": "Tom Dearden",
      "key": "TOMDEARDEN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 43,
      "last3Average": 43,
      "lastGameScore": 29,
      "scoreVolatility": 14,
      "homeAverage": 43,
      "awayAverage": 43
    },
    "KLIRO": {
      "playerName": "KL Iro",
      "key": "KLIRO",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 32,
      "scoreVolatility": 1,
      "homeAverage": 34,
      "awayAverage": 32
    },
    "JACKSONFORD": {
      "playerName": "Jackson Ford",
      "key": "JACKSONFORD",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 59,
      "last3Average": 59,
      "lastGameScore": 74,
      "scoreVolatility": 15,
      "homeAverage": 59,
      "awayAverage": 59
    },
    "CONNORWATSON": {
      "playerName": "Connor Watson",
      "key": "CONNORWATSON",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 23.5,
      "last3Average": 23.5,
      "lastGameScore": 36,
      "scoreVolatility": 12.5,
      "homeAverage": 36,
      "awayAverage": 11
    },
    "HAMISOTABUAIFIDOW": {
      "playerName": "Hamiso Tabuai-Fidow",
      "key": "HAMISOTABUAIFIDOW",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 61.5,
      "last3Average": 61.5,
      "lastGameScore": 67,
      "scoreVolatility": 5.5,
      "homeAverage": 61.5,
      "awayAverage": 61.5
    },
    "JACKDEBELIN": {
      "playerName": "Jack De Belin",
      "key": "JACKDEBELIN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 37,
      "last3Average": 37,
      "lastGameScore": 25,
      "scoreVolatility": 12,
      "homeAverage": 37,
      "awayAverage": 37
    },
    "DYLANEDWARDS": {
      "playerName": "Dylan Edwards",
      "key": "DYLANEDWARDS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 51,
      "last3Average": 51,
      "lastGameScore": 38,
      "scoreVolatility": 13,
      "homeAverage": 38,
      "awayAverage": 64
    },
    "MARKNAWAQANITAWASE": {
      "playerName": "Mark Nawaqanitawase",
      "key": "MARKNAWAQANITAWASE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 42.5,
      "last3Average": 42.5,
      "lastGameScore": 44,
      "scoreVolatility": 1.5,
      "homeAverage": 44,
      "awayAverage": 41
    },
    "JORDANRIKI": {
      "playerName": "Jordan Riki",
      "key": "JORDANRIKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 41,
      "last3Average": 41,
      "lastGameScore": 41,
      "scoreVolatility": 0,
      "homeAverage": 41,
      "awayAverage": 41
    },
    "EUANAITKEN": {
      "playerName": "Euan Aitken",
      "key": "EUANAITKEN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 41.5,
      "last3Average": 41.5,
      "lastGameScore": 33,
      "scoreVolatility": 8.5,
      "homeAverage": 41.5,
      "awayAverage": 41.5
    },
    "TAYLANMAY": {
      "playerName": "Taylan May",
      "key": "TAYLANMAY",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 5,
      "last3Average": 5,
      "lastGameScore": 5,
      "scoreVolatility": 0,
      "homeAverage": 5,
      "awayAverage": 5
    },
    "HAUMOLEOLAKAUATU": {
      "playerName": "Haumole Olakau'atu",
      "key": "HAUMOLEOLAKAUATU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 47.5,
      "last3Average": 47.5,
      "lastGameScore": 41,
      "scoreVolatility": 6.5,
      "homeAverage": 47.5,
      "awayAverage": 47.5
    },
    "ISAIAHPAPALII": {
      "playerName": "Isaiah Papali'i",
      "key": "ISAIAHPAPALII",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 58,
      "last3Average": 58,
      "lastGameScore": 62,
      "scoreVolatility": 4,
      "homeAverage": 62,
      "awayAverage": 54
    },
    "SAMVERRILLS": {
      "playerName": "Sam Verrills",
      "key": "SAMVERRILLS",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 40.5,
      "last3Average": 40.5,
      "lastGameScore": 32,
      "scoreVolatility": 8.5,
      "homeAverage": 40.5,
      "awayAverage": 40.5
    },
    "JMAINEHOPGOOD": {
      "playerName": "J'maine Hopgood",
      "key": "JMAINEHOPGOOD",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 49,
      "last3Average": 49,
      "lastGameScore": 49,
      "scoreVolatility": 0,
      "homeAverage": 49,
      "awayAverage": 49
    },
    "JUNIORPAULO": {
      "playerName": "Junior Paulo",
      "key": "JUNIORPAULO",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 35,
      "last3Average": 35,
      "lastGameScore": 32,
      "scoreVolatility": 3,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "TREYMOONEY": {
      "playerName": "Trey Mooney",
      "key": "TREYMOONEY",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 59.5,
      "last3Average": 59.5,
      "lastGameScore": 53,
      "scoreVolatility": 6.5,
      "homeAverage": 66,
      "awayAverage": 53
    },
    "MITCHELLMOSES": {
      "playerName": "Mitchell Moses",
      "key": "MITCHELLMOSES",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 41.5,
      "last3Average": 41.5,
      "lastGameScore": 48,
      "scoreVolatility": 6.5,
      "homeAverage": 41.5,
      "awayAverage": 41.5
    },
    "TANAHBOYD": {
      "playerName": "Tanah Boyd",
      "key": "TANAHBOYD",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 77,
      "last3Average": 77,
      "lastGameScore": 76,
      "scoreVolatility": 1,
      "homeAverage": 77,
      "awayAverage": 77
    },
    "WAYDEEGAN": {
      "playerName": "Wayde Egan",
      "key": "WAYDEEGAN",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 30.5,
      "last3Average": 30.5,
      "lastGameScore": 31,
      "scoreVolatility": 0.5,
      "homeAverage": 30.5,
      "awayAverage": 30.5
    },
    "BRADMANBEST": {
      "playerName": "Bradman Best",
      "key": "BRADMANBEST",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 40.5,
      "last3Average": 40.5,
      "lastGameScore": 48,
      "scoreVolatility": 7.5,
      "homeAverage": 33,
      "awayAverage": 48
    },
    "APISAIKOROISAU": {
      "playerName": "Apisai Koroisau",
      "key": "APISAIKOROISAU",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "seasonAverage": 31,
      "last3Average": 31,
      "lastGameScore": 31,
      "scoreVolatility": 0,
      "homeAverage": 31,
      "awayAverage": 31
    },
    "JAHROMEHUGHES": {
      "playerName": "Jahrome Hughes",
      "key": "JAHROMEHUGHES",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 46.5,
      "last3Average": 46.5,
      "lastGameScore": 55,
      "scoreVolatility": 8.5,
      "homeAverage": 38,
      "awayAverage": 55
    },
    "JAMESFISHERHARRIS": {
      "playerName": "James Fisher-Harris",
      "key": "JAMESFISHERHARRIS",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 58,
      "last3Average": 58,
      "lastGameScore": 49,
      "scoreVolatility": 9,
      "homeAverage": 58,
      "awayAverage": 58
    },
    "STEFANOUTOIKAMANU": {
      "playerName": "Stefano Utoikamanu",
      "key": "STEFANOUTOIKAMANU",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 57,
      "last3Average": 57,
      "lastGameScore": 66,
      "scoreVolatility": 9,
      "homeAverage": 48,
      "awayAverage": 66
    },
    "KOTONISTAGGS": {
      "playerName": "Kotoni Staggs",
      "key": "KOTONISTAGGS",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 33.5,
      "last3Average": 33.5,
      "lastGameScore": 40,
      "scoreVolatility": 6.5,
      "homeAverage": 33.5,
      "awayAverage": 33.5
    },
    "TOMSTARLING": {
      "playerName": "Tom Starling",
      "key": "TOMSTARLING",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 41.5,
      "last3Average": 41.5,
      "lastGameScore": 36,
      "scoreVolatility": 5.5,
      "homeAverage": 41.5,
      "awayAverage": 41.5
    },
    "ALEXTWAL": {
      "playerName": "Alex Twal",
      "key": "ALEXTWAL",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 55,
      "last3Average": 55,
      "lastGameScore": 55,
      "scoreVolatility": 0,
      "homeAverage": 55,
      "awayAverage": 55
    },
    "BRAIDONBURNS": {
      "playerName": "Braidon Burns",
      "key": "BRAIDONBURNS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 46.5,
      "last3Average": 46.5,
      "lastGameScore": 62,
      "scoreVolatility": 15.5,
      "homeAverage": 46.5,
      "awayAverage": 46.5
    },
    "SIUAWONG": {
      "playerName": "Siua Wong",
      "key": "SIUAWONG",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 44,
      "last3Average": 44,
      "lastGameScore": 48,
      "scoreVolatility": 4,
      "homeAverage": 48,
      "awayAverage": 40
    },
    "SAMWALKER": {
      "playerName": "Sam Walker",
      "key": "SAMWALKER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 34.5,
      "last3Average": 34.5,
      "lastGameScore": 42,
      "scoreVolatility": 7.5,
      "homeAverage": 42,
      "awayAverage": 27
    },
    "REUBENCOTTER": {
      "playerName": "Reuben Cotter",
      "key": "REUBENCOTTER",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 35,
      "last3Average": 35,
      "lastGameScore": 35,
      "scoreVolatility": 0,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "JOSHCURRAN": {
      "playerName": "Josh Curran",
      "key": "JOSHCURRAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 11,
      "last3Average": 11,
      "lastGameScore": 11,
      "scoreVolatility": 0,
      "homeAverage": 11,
      "awayAverage": 11
    },
    "MOEAKIFOTUAIKA": {
      "playerName": "Moeaki Fotuaika",
      "key": "MOEAKIFOTUAIKA",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 35,
      "last3Average": 35,
      "lastGameScore": 29,
      "scoreVolatility": 6,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "JAKECLIFFORD": {
      "playerName": "Jake Clifford",
      "key": "JAKECLIFFORD",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 41.5,
      "last3Average": 41.5,
      "lastGameScore": 46,
      "scoreVolatility": 4.5,
      "homeAverage": 41.5,
      "awayAverage": 41.5
    },
    "GEHAMATSHIBASAKI": {
      "playerName": "Gehamat Shibasaki",
      "key": "GEHAMATSHIBASAKI",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 7,
      "scoreVolatility": 7,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "MAXPLATH": {
      "playerName": "Max Plath",
      "key": "MAXPLATH",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 39,
      "last3Average": 39,
      "lastGameScore": 39,
      "scoreVolatility": 0,
      "homeAverage": 39,
      "awayAverage": 39
    },
    "ROGERTUIVASASHECK": {
      "playerName": "Roger Tuivasa-Sheck",
      "key": "ROGERTUIVASASHECK",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 31,
      "last3Average": 31,
      "lastGameScore": 20,
      "scoreVolatility": 11,
      "homeAverage": 31,
      "awayAverage": 31
    },
    "ADAMDOUEIHI": {
      "playerName": "Adam Doueihi",
      "key": "ADAMDOUEIHI",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "seasonAverage": 82,
      "last3Average": 82,
      "lastGameScore": 82,
      "scoreVolatility": 0,
      "homeAverage": 82,
      "awayAverage": 82
    },
    "BRITONNIKORA": {
      "playerName": "Briton Nikora",
      "key": "BRITONNIKORA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 47.5,
      "last3Average": 47.5,
      "lastGameScore": 60,
      "scoreVolatility": 12.5,
      "homeAverage": 35,
      "awayAverage": 60
    },
    "KITIONEKAUTOGA": {
      "playerName": "Kitione Kautoga",
      "key": "KITIONEKAUTOGA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 33.5,
      "last3Average": 33.5,
      "lastGameScore": 31,
      "scoreVolatility": 2.5,
      "homeAverage": 33.5,
      "awayAverage": 33.5
    },
    "MATTHEWTIMOKO": {
      "playerName": "Matthew Timoko",
      "key": "MATTHEWTIMOKO",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 21,
      "last3Average": 21,
      "lastGameScore": 21,
      "scoreVolatility": 0,
      "homeAverage": 21,
      "awayAverage": 21
    },
    "ROBERTTOIA": {
      "playerName": "Robert Toia",
      "key": "ROBERTTOIA",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 32,
      "last3Average": 32,
      "lastGameScore": 32,
      "scoreVolatility": 0,
      "homeAverage": 32,
      "awayAverage": 32
    },
    "REUBENGARRICK": {
      "playerName": "Reuben Garrick",
      "key": "REUBENGARRICK",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 27,
      "last3Average": 27,
      "lastGameScore": 31,
      "scoreVolatility": 4,
      "homeAverage": 27,
      "awayAverage": 27
    },
    "TALLISDUNCAN": {
      "playerName": "Tallis Duncan",
      "key": "TALLISDUNCAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 34,
      "last3Average": 34,
      "lastGameScore": 23,
      "scoreVolatility": 11,
      "homeAverage": 34,
      "awayAverage": 34
    },
    "MATTBURTON": {
      "playerName": "Matt Burton",
      "key": "MATTBURTON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "seasonAverage": 47,
      "last3Average": 47,
      "lastGameScore": 47,
      "scoreVolatility": 0,
      "homeAverage": 47,
      "awayAverage": 47
    },
    "AJBRIMSON": {
      "playerName": "AJ Brimson",
      "key": "AJBRIMSON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 31,
      "last3Average": 31,
      "lastGameScore": 39,
      "scoreVolatility": 8,
      "homeAverage": 31,
      "awayAverage": 31
    },
    "PETERMAMOUZELOS": {
      "playerName": "Peter Mamouzelos",
      "key": "PETERMAMOUZELOS",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 34.5,
      "last3Average": 34.5,
      "lastGameScore": 30,
      "scoreVolatility": 4.5,
      "homeAverage": 34.5,
      "awayAverage": 34.5
    },
    "LACHLANGALVIN": {
      "playerName": "Lachlan Galvin",
      "key": "LACHLANGALVIN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "seasonAverage": 70,
      "last3Average": 70,
      "lastGameScore": 70,
      "scoreVolatility": 0,
      "homeAverage": 70,
      "awayAverage": 70
    },
    "KYLEFLANAGAN": {
      "playerName": "Kyle Flanagan",
      "key": "KYLEFLANAGAN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 26,
      "scoreVolatility": 7,
      "homeAverage": 26,
      "awayAverage": 40
    },
    "BRIANTOO": {
      "playerName": "Brian To'o",
      "key": "BRIANTOO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 38,
      "last3Average": 38,
      "lastGameScore": 54,
      "scoreVolatility": 16,
      "homeAverage": 54,
      "awayAverage": 22
    },
    "DANEGAGAI": {
      "playerName": "Dane Gagai",
      "key": "DANEGAGAI",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 42,
      "last3Average": 42,
      "lastGameScore": 43,
      "scoreVolatility": 1,
      "homeAverage": 41,
      "awayAverage": 43
    },
    "NATBUTCHER": {
      "playerName": "Nat Butcher",
      "key": "NATBUTCHER",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 48.5,
      "last3Average": 48.5,
      "lastGameScore": 34,
      "scoreVolatility": 14.5,
      "homeAverage": 34,
      "awayAverage": 63
    },
    "KALYNPONGA": {
      "playerName": "Kalyn Ponga",
      "key": "KALYNPONGA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 58,
      "last3Average": 58,
      "lastGameScore": 36,
      "scoreVolatility": 22,
      "homeAverage": 80,
      "awayAverage": 36
    },
    "NICKMEANEY": {
      "playerName": "Nick Meaney",
      "key": "NICKMEANEY",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 31.5,
      "last3Average": 31.5,
      "lastGameScore": 23,
      "scoreVolatility": 8.5,
      "homeAverage": 40,
      "awayAverage": 23
    },
    "TOMTRBOJEVIC": {
      "playerName": "Tom Trbojevic",
      "key": "TOMTRBOJEVIC",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 62,
      "last3Average": 62,
      "lastGameScore": 57,
      "scoreVolatility": 5,
      "homeAverage": 62,
      "awayAverage": 62
    },
    "GREGMARZHEW": {
      "playerName": "Greg Marzhew",
      "key": "GREGMARZHEW",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 37,
      "last3Average": 37,
      "lastGameScore": 31,
      "scoreVolatility": 6,
      "homeAverage": 43,
      "awayAverage": 31
    },
    "STEPHENCRICHTON": {
      "playerName": "Stephen Crichton",
      "key": "STEPHENCRICHTON",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 41,
      "last3Average": 41,
      "lastGameScore": 41,
      "scoreVolatility": 0,
      "homeAverage": 41,
      "awayAverage": 41
    },
    "HARRYHAYES": {
      "playerName": "Harry Hayes",
      "key": "HARRYHAYES",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 48,
      "last3Average": 48,
      "lastGameScore": 48,
      "scoreVolatility": 0,
      "homeAverage": 48,
      "awayAverage": 48
    },
    "MITCHKENNY": {
      "playerName": "Mitch Kenny",
      "key": "MITCHKENNY",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 41,
      "scoreVolatility": 8,
      "homeAverage": 41,
      "awayAverage": 25
    },
    "ALEXSEYFARTH": {
      "playerName": "Alex Seyfarth",
      "key": "ALEXSEYFARTH",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 16,
      "last3Average": 16,
      "lastGameScore": 16,
      "scoreVolatility": 0,
      "homeAverage": 16,
      "awayAverage": 16
    },
    "SAMUELAFAINU": {
      "playerName": "Samuela Fainu",
      "key": "SAMUELAFAINU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "seasonAverage": 76,
      "last3Average": 76,
      "lastGameScore": 76,
      "scoreVolatility": 0,
      "homeAverage": 76,
      "awayAverage": 76
    },
    "PAULALAMOTI": {
      "playerName": "Paul Alamoti",
      "key": "PAULALAMOTI",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 28,
      "last3Average": 28,
      "lastGameScore": 31,
      "scoreVolatility": 3,
      "homeAverage": 31,
      "awayAverage": 25
    },
    "TOLUTAUKOULA": {
      "playerName": "Tolutau Koula",
      "key": "TOLUTAUKOULA",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 44.5,
      "last3Average": 44.5,
      "lastGameScore": 16,
      "scoreVolatility": 28.5,
      "homeAverage": 44.5,
      "awayAverage": 44.5
    },
    "PHILLIPSAMI": {
      "playerName": "Phillip Sami",
      "key": "PHILLIPSAMI",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 16.5,
      "last3Average": 16.5,
      "lastGameScore": 17,
      "scoreVolatility": 0.5,
      "homeAverage": 16.5,
      "awayAverage": 16.5
    },
    "TOMGILBERT": {
      "playerName": "Tom Gilbert",
      "key": "TOMGILBERT",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 42,
      "last3Average": 42,
      "lastGameScore": 58,
      "scoreVolatility": 16,
      "homeAverage": 42,
      "awayAverage": 42
    },
    "LUKEGARNER": {
      "playerName": "Luke Garner",
      "key": "LUKEGARNER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 48.5,
      "last3Average": 48.5,
      "lastGameScore": 47,
      "scoreVolatility": 1.5,
      "homeAverage": 47,
      "awayAverage": 50
    },
    "JAKESIMPKIN": {
      "playerName": "Jake Simpkin",
      "key": "JAKESIMPKIN",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 37.5,
      "last3Average": 37.5,
      "lastGameScore": 24,
      "scoreVolatility": 13.5,
      "homeAverage": 37.5,
      "awayAverage": 37.5
    },
    "MURRAYTAULAGI": {
      "playerName": "Murray Taulagi",
      "key": "MURRAYTAULAGI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 38,
      "last3Average": 38,
      "lastGameScore": 23,
      "scoreVolatility": 15,
      "homeAverage": 38,
      "awayAverage": 38
    },
    "ETHANSTRANGE": {
      "playerName": "Ethan Strange",
      "key": "ETHANSTRANGE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 37.5,
      "last3Average": 37.5,
      "lastGameScore": 52,
      "scoreVolatility": 14.5,
      "homeAverage": 37.5,
      "awayAverage": 37.5
    },
    "CHRISTIANTUIPULOTU": {
      "playerName": "Christian Tuipulotu",
      "key": "CHRISTIANTUIPULOTU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 28.5,
      "last3Average": 28.5,
      "lastGameScore": 30,
      "scoreVolatility": 1.5,
      "homeAverage": 30,
      "awayAverage": 27
    },
    "BRIANKELLY": {
      "playerName": "Brian Kelly",
      "key": "BRIANKELLY",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 35,
      "last3Average": 35,
      "lastGameScore": 35,
      "scoreVolatility": 0,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "JOSHKING": {
      "playerName": "Josh King",
      "key": "JOSHKING",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 45,
      "last3Average": 45,
      "lastGameScore": 50,
      "scoreVolatility": 5,
      "homeAverage": 40,
      "awayAverage": 50
    },
    "JOSIAHKARAPANI": {
      "playerName": "Josiah Karapani",
      "key": "JOSIAHKARAPANI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 24,
      "last3Average": 24,
      "lastGameScore": 21,
      "scoreVolatility": 3,
      "homeAverage": 24,
      "awayAverage": 24
    },
    "BENTRBOJEVIC": {
      "playerName": "Ben Trbojevic",
      "key": "BENTRBOJEVIC",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 46,
      "last3Average": 46,
      "lastGameScore": 52,
      "scoreVolatility": 6,
      "homeAverage": 46,
      "awayAverage": 46
    },
    "THOMASJENKINS": {
      "playerName": "Thomas Jenkins",
      "key": "THOMASJENKINS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 53.5,
      "last3Average": 53.5,
      "lastGameScore": 31,
      "scoreVolatility": 22.5,
      "homeAverage": 31,
      "awayAverage": 76
    },
    "CLINTONGUTHERSON": {
      "playerName": "Clinton Gutherson",
      "key": "CLINTONGUTHERSON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 26,
      "last3Average": 26,
      "lastGameScore": 27,
      "scoreVolatility": 1,
      "homeAverage": 27,
      "awayAverage": 25
    },
    "MOSESLEOTA": {
      "playerName": "Moses Leota",
      "key": "MOSESLEOTA",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 27.5,
      "last3Average": 27.5,
      "lastGameScore": 31,
      "scoreVolatility": 3.5,
      "homeAverage": 31,
      "awayAverage": 24
    },
    "CHANELHARRISTAVITA": {
      "playerName": "Chanel Harris-Tavita",
      "key": "CHANELHARRISTAVITA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 22.5,
      "last3Average": 22.5,
      "lastGameScore": 0,
      "scoreVolatility": 22.5,
      "homeAverage": 22.5,
      "awayAverage": 22.5
    },
    "CONNORTRACEY": {
      "playerName": "Connor Tracey",
      "key": "CONNORTRACEY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 41,
      "last3Average": 41,
      "lastGameScore": 41,
      "scoreVolatility": 0,
      "homeAverage": 41,
      "awayAverage": 41
    },
    "MATCROKER": {
      "playerName": "Mat Croker",
      "key": "MATCROKER",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 36,
      "last3Average": 36,
      "lastGameScore": 34,
      "scoreVolatility": 2,
      "homeAverage": 38,
      "awayAverage": 34
    },
    "JYEGRAY": {
      "playerName": "Jye Gray",
      "key": "JYEGRAY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 36.5,
      "last3Average": 36.5,
      "lastGameScore": 37,
      "scoreVolatility": 0.5,
      "homeAverage": 36.5,
      "awayAverage": 36.5
    },
    "ETHANBULLEMOR": {
      "playerName": "Ethan Bullemor",
      "key": "ETHANBULLEMOR",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 32,
      "last3Average": 32,
      "lastGameScore": 31,
      "scoreVolatility": 1,
      "homeAverage": 32,
      "awayAverage": 32
    },
    "JAHREAMBULA": {
      "playerName": "Jahream Bula",
      "key": "JAHREAMBULA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 33,
      "scoreVolatility": 0,
      "homeAverage": 33,
      "awayAverage": 33
    },
    "PHOENIXCROSSLAND": {
      "playerName": "Phoenix Crossland",
      "key": "PHOENIXCROSSLAND",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 41.5,
      "last3Average": 41.5,
      "lastGameScore": 31,
      "scoreVolatility": 10.5,
      "homeAverage": 52,
      "awayAverage": 31
    },
    "LEKAHALASIMA": {
      "playerName": "Leka Halasima",
      "key": "LEKAHALASIMA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 45.5,
      "last3Average": 45.5,
      "lastGameScore": 69,
      "scoreVolatility": 23.5,
      "homeAverage": 45.5,
      "awayAverage": 45.5
    },
    "ISAIAHIONGI": {
      "playerName": "Isaiah Iongi",
      "key": "ISAIAHIONGI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 62,
      "last3Average": 62,
      "lastGameScore": 67,
      "scoreVolatility": 5,
      "homeAverage": 62,
      "awayAverage": 62
    },
    "LEHIHOPOATE": {
      "playerName": "Lehi Hopoate",
      "key": "LEHIHOPOATE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 19.5,
      "last3Average": 19.5,
      "lastGameScore": 11,
      "scoreVolatility": 8.5,
      "homeAverage": 19.5,
      "awayAverage": 19.5
    },
    "KODINIKORIMA": {
      "playerName": "Kodi Nikorima",
      "key": "KODINIKORIMA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 25,
      "last3Average": 25,
      "lastGameScore": 23,
      "scoreVolatility": 2,
      "homeAverage": 25,
      "awayAverage": 25
    },
    "SCOTTSORENSEN": {
      "playerName": "Scott Sorensen",
      "key": "SCOTTSORENSEN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 24.5,
      "last3Average": 24.5,
      "lastGameScore": 23,
      "scoreVolatility": 1.5,
      "homeAverage": 23,
      "awayAverage": 26
    },
    "KELMATUILAGI": {
      "playerName": "Kelma Tuilagi",
      "key": "KELMATUILAGI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "seasonAverage": 73,
      "last3Average": 73,
      "lastGameScore": 73,
      "scoreVolatility": 0,
      "homeAverage": 73,
      "awayAverage": 73
    },
    "JOSHADDOCARR": {
      "playerName": "Josh Addo-Carr",
      "key": "JOSHADDOCARR",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 13,
      "last3Average": 13,
      "lastGameScore": 13,
      "scoreVolatility": 0,
      "homeAverage": 13,
      "awayAverage": 13
    },
    "REEDMAHONEY": {
      "playerName": "Reed Mahoney",
      "key": "REEDMAHONEY",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 46,
      "last3Average": 46,
      "lastGameScore": 36,
      "scoreVolatility": 10,
      "homeAverage": 46,
      "awayAverage": 46
    },
    "CHRISRANDALL": {
      "playerName": "Chris Randall",
      "key": "CHRISRANDALL",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 36.5,
      "last3Average": 36.5,
      "lastGameScore": 47,
      "scoreVolatility": 10.5,
      "homeAverage": 36.5,
      "awayAverage": 36.5
    },
    "MORGANSMITHIES": {
      "playerName": "Morgan Smithies",
      "key": "MORGANSMITHIES",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 37,
      "last3Average": 37,
      "lastGameScore": 31,
      "scoreVolatility": 6,
      "homeAverage": 37,
      "awayAverage": 37
    },
    "DANIELTUPOU": {
      "playerName": "Daniel Tupou",
      "key": "DANIELTUPOU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 29.5,
      "last3Average": 29.5,
      "lastGameScore": 32,
      "scoreVolatility": 2.5,
      "homeAverage": 32,
      "awayAverage": 27
    },
    "JAROMELUAI": {
      "playerName": "Jarome Luai",
      "key": "JAROMELUAI",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "seasonAverage": 66,
      "last3Average": 66,
      "lastGameScore": 66,
      "scoreVolatility": 0,
      "homeAverage": 66,
      "awayAverage": 66
    },
    "DYLANBROWN": {
      "playerName": "Dylan Brown",
      "key": "DYLANBROWN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 40.5,
      "last3Average": 40.5,
      "lastGameScore": 44,
      "scoreVolatility": 3.5,
      "homeAverage": 37,
      "awayAverage": 44
    },
    "TANIELAPASEKA": {
      "playerName": "Taniela Paseka",
      "key": "TANIELAPASEKA",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 43.5,
      "last3Average": 43.5,
      "lastGameScore": 38,
      "scoreVolatility": 5.5,
      "homeAverage": 43.5,
      "awayAverage": 43.5
    },
    "KULIKEFUFINEFEUIAKI": {
      "playerName": "Kulikefu Finefeuiaki",
      "key": "KULIKEFUFINEFEUIAKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 59,
      "last3Average": 59,
      "lastGameScore": 64,
      "scoreVolatility": 5,
      "homeAverage": 59,
      "awayAverage": 59
    },
    "CHARNZENICOLLKLOKSTAD": {
      "playerName": "Charnze Nicoll-Klokstad",
      "key": "CHARNZENICOLLKLOKSTAD",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 37.5,
      "last3Average": 37.5,
      "lastGameScore": 32,
      "scoreVolatility": 5.5,
      "homeAverage": 37.5,
      "awayAverage": 37.5
    },
    "JAMAYNEISAAKO": {
      "playerName": "Jamayne Isaako",
      "key": "JAMAYNEISAAKO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 34,
      "last3Average": 34,
      "lastGameScore": 24,
      "scoreVolatility": 10,
      "homeAverage": 34,
      "awayAverage": 34
    },
    "JAKEAVERILLO": {
      "playerName": "Jake Averillo",
      "key": "JAKEAVERILLO",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 43.5,
      "last3Average": 43.5,
      "lastGameScore": 47,
      "scoreVolatility": 3.5,
      "homeAverage": 43.5,
      "awayAverage": 43.5
    },
    "CASEYMCLEAN": {
      "playerName": "Casey McLean",
      "key": "CASEYMCLEAN",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 32.5,
      "last3Average": 32.5,
      "lastGameScore": 44,
      "scoreVolatility": 11.5,
      "homeAverage": 44,
      "awayAverage": 21
    },
    "TYSONFRIZELL": {
      "playerName": "Tyson Frizell",
      "key": "TYSONFRIZELL",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 34,
      "last3Average": 34,
      "lastGameScore": 35,
      "scoreVolatility": 1,
      "homeAverage": 33,
      "awayAverage": 35
    },
    "JESSERAMIEN": {
      "playerName": "Jesse Ramien",
      "key": "JESSERAMIEN",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 49,
      "last3Average": 49,
      "lastGameScore": 35,
      "scoreVolatility": 14,
      "homeAverage": 63,
      "awayAverage": 35
    },
    "JOSHPAPALII": {
      "playerName": "Josh Papalii",
      "key": "JOSHPAPALII",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 12,
      "last3Average": 12,
      "lastGameScore": 12,
      "scoreVolatility": 0,
      "homeAverage": 12,
      "awayAverage": 12
    },
    "MATHEWFEAGAI": {
      "playerName": "Mathew Feagai",
      "key": "MATHEWFEAGAI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 5.5,
      "last3Average": 5.5,
      "lastGameScore": 2,
      "scoreVolatility": 3.5,
      "homeAverage": 2,
      "awayAverage": 9
    },
    "LACHLANHUBNER": {
      "playerName": "Lachlan Hubner",
      "key": "LACHLANHUBNER",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 18.5,
      "last3Average": 18.5,
      "lastGameScore": 12,
      "scoreVolatility": 6.5,
      "homeAverage": 18.5,
      "awayAverage": 18.5
    },
    "EZRAMAM": {
      "playerName": "Ezra Mam",
      "key": "EZRAMAM",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 30.5,
      "last3Average": 30.5,
      "lastGameScore": 33,
      "scoreVolatility": 2.5,
      "homeAverage": 30.5,
      "awayAverage": 30.5
    },
    "GRIFFINNEAME": {
      "playerName": "Griffin Neame",
      "key": "GRIFFINNEAME",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 20.5,
      "last3Average": 20.5,
      "lastGameScore": 26,
      "scoreVolatility": 5.5,
      "homeAverage": 20.5,
      "awayAverage": 20.5
    },
    "RYLEYSMITH": {
      "playerName": "Ryley Smith",
      "key": "RYLEYSMITH",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 31,
      "last3Average": 31,
      "lastGameScore": 38,
      "scoreVolatility": 7,
      "homeAverage": 31,
      "awayAverage": 31
    },
    "HEAMASIMAKASINI": {
      "playerName": "Heamasi Makasini",
      "key": "HEAMASIMAKASINI",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 35,
      "last3Average": 35,
      "lastGameScore": 35,
      "scoreVolatility": 0,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "SIONEKATOA": {
      "playerName": "Sione Katoa",
      "key": "SIONEKATOA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 51,
      "last3Average": 51,
      "lastGameScore": 45,
      "scoreVolatility": 6,
      "homeAverage": 57,
      "awayAverage": 45
    },
    "BAILEYSIMONSSON": {
      "playerName": "Bailey Simonsson",
      "key": "BAILEYSIMONSSON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 25.5,
      "last3Average": 25.5,
      "lastGameScore": 23,
      "scoreVolatility": 2.5,
      "homeAverage": 25.5,
      "awayAverage": 25.5
    },
    "XAVIERWILLISON": {
      "playerName": "Xavier Willison",
      "key": "XAVIERWILLISON",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 27.5,
      "last3Average": 27.5,
      "lastGameScore": 37,
      "scoreVolatility": 9.5,
      "homeAverage": 27.5,
      "awayAverage": 27.5
    },
    "JAXONPURDUE": {
      "playerName": "Jaxon Purdue",
      "key": "JAXONPURDUE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 36,
      "last3Average": 36,
      "lastGameScore": 48,
      "scoreVolatility": 12,
      "homeAverage": 36,
      "awayAverage": 36
    },
    "SAVELIOTAMALE": {
      "playerName": "Savelio Tamale",
      "key": "SAVELIOTAMALE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 25,
      "scoreVolatility": 8,
      "homeAverage": 33,
      "awayAverage": 33
    },
    "KAEOWEEKES": {
      "playerName": "Kaeo Weekes",
      "key": "KAEOWEEKES",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 33.5,
      "last3Average": 33.5,
      "lastGameScore": 24,
      "scoreVolatility": 9.5,
      "homeAverage": 33.5,
      "awayAverage": 33.5
    },
    "SUALAUVIFAALOGO": {
      "playerName": "Sualauvi Faalogo",
      "key": "SUALAUVIFAALOGO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 67.5,
      "last3Average": 67.5,
      "lastGameScore": 80,
      "scoreVolatility": 12.5,
      "homeAverage": 55,
      "awayAverage": 80
    },
    "ALEXJOHNSTON": {
      "playerName": "Alex Johnston",
      "key": "ALEXJOHNSTON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 39.5,
      "last3Average": 39.5,
      "lastGameScore": 49,
      "scoreVolatility": 9.5,
      "homeAverage": 39.5,
      "awayAverage": 39.5
    },
    "BENHUNT": {
      "playerName": "Ben Hunt",
      "key": "BENHUNT",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 30,
      "last3Average": 30,
      "lastGameScore": 25,
      "scoreVolatility": 5,
      "homeAverage": 30,
      "awayAverage": 30
    },
    "LINDSAYCOLLINS": {
      "playerName": "Lindsay Collins",
      "key": "LINDSAYCOLLINS",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 39.5,
      "last3Average": 39.5,
      "lastGameScore": 35,
      "scoreVolatility": 4.5,
      "homeAverage": 35,
      "awayAverage": 44
    },
    "TEVITATATOLA": {
      "playerName": "Tevita Tatola",
      "key": "TEVITATATOLA",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 41.5,
      "last3Average": 41.5,
      "lastGameScore": 41,
      "scoreVolatility": 0.5,
      "homeAverage": 41.5,
      "awayAverage": 41.5
    },
    "DAVIDFIFITA": {
      "playerName": "David Fifita",
      "key": "DAVIDFIFITA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 40,
      "last3Average": 40,
      "lastGameScore": 43,
      "scoreVolatility": 3,
      "homeAverage": 40,
      "awayAverage": 40
    },
    "COENHESS": {
      "playerName": "Coen Hess",
      "key": "COENHESS",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 32,
      "last3Average": 32,
      "lastGameScore": 26,
      "scoreVolatility": 6,
      "homeAverage": 32,
      "awayAverage": 32
    },
    "SIOSIUATAUKEIAHO": {
      "playerName": "Siosiua Taukeiaho",
      "key": "SIOSIUATAUKEIAHO",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 7,
      "last3Average": 7,
      "lastGameScore": 7,
      "scoreVolatility": 0,
      "homeAverage": 7,
      "awayAverage": 7
    },
    "MOSESSULI": {
      "playerName": "Moses Suli",
      "key": "MOSESSULI",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 35.5,
      "last3Average": 35.5,
      "lastGameScore": 39,
      "scoreVolatility": 3.5,
      "homeAverage": 39,
      "awayAverage": 32
    },
    "KOBEHETHERINGTON": {
      "playerName": "Kobe Hetherington",
      "key": "KOBEHETHERINGTON",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 26,
      "last3Average": 26,
      "lastGameScore": 16,
      "scoreVolatility": 10,
      "homeAverage": 26,
      "awayAverage": 26
    },
    "SAMMCINTYRE": {
      "playerName": "Sam McIntyre",
      "key": "SAMMCINTYRE",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 51,
      "last3Average": 51,
      "lastGameScore": 47,
      "scoreVolatility": 4,
      "homeAverage": 51,
      "awayAverage": 51
    },
    "THOMASHAZELTON": {
      "playerName": "Thomas Hazelton",
      "key": "THOMASHAZELTON",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 28.5,
      "last3Average": 28.5,
      "lastGameScore": 22,
      "scoreVolatility": 6.5,
      "homeAverage": 35,
      "awayAverage": 22
    },
    "SELWYNCOBBO": {
      "playerName": "Selwyn Cobbo",
      "key": "SELWYNCOBBO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 30,
      "last3Average": 30,
      "lastGameScore": 29,
      "scoreVolatility": 1,
      "homeAverage": 30,
      "awayAverage": 30
    },
    "SAMUELHEALEY": {
      "playerName": "Samuel Healey",
      "key": "SAMUELHEALEY",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 18.5,
      "last3Average": 18.5,
      "lastGameScore": 20,
      "scoreVolatility": 1.5,
      "homeAverage": 18.5,
      "awayAverage": 18.5
    },
    "JACKHOWARTH": {
      "playerName": "Jack Howarth",
      "key": "JACKHOWARTH",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 45.5,
      "last3Average": 45.5,
      "lastGameScore": 51,
      "scoreVolatility": 5.5,
      "homeAverage": 40,
      "awayAverage": 51
    },
    "JACOBSAIFITI": {
      "playerName": "Jacob Saifiti",
      "key": "JACOBSAIFITI",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 45,
      "last3Average": 45,
      "lastGameScore": 41,
      "scoreVolatility": 4,
      "homeAverage": 49,
      "awayAverage": 41
    },
    "JOJOFIFITA": {
      "playerName": "Jojo Fifita",
      "key": "JOJOFIFITA",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 26.5,
      "last3Average": 26.5,
      "lastGameScore": 33,
      "scoreVolatility": 6.5,
      "homeAverage": 26.5,
      "awayAverage": 26.5
    },
    "CONNELLYLEMUELU": {
      "playerName": "Connelly Lemuelu",
      "key": "CONNELLYLEMUELU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 53,
      "last3Average": 53,
      "lastGameScore": 49,
      "scoreVolatility": 4,
      "homeAverage": 53,
      "awayAverage": 53
    },
    "DYLANWALKER": {
      "playerName": "Dylan Walker",
      "key": "DYLANWALKER",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 32.5,
      "last3Average": 32.5,
      "lastGameScore": 23,
      "scoreVolatility": 9.5,
      "homeAverage": 32.5,
      "awayAverage": 32.5
    },
    "HARRISONEDWARDS": {
      "playerName": "Harrison Edwards",
      "key": "HARRISONEDWARDS",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 11,
      "last3Average": 11,
      "lastGameScore": 11,
      "scoreVolatility": 0,
      "homeAverage": 11,
      "awayAverage": 11
    },
    "JAYDENBRAILEY": {
      "playerName": "Jayden Brailey",
      "key": "JAYDENBRAILEY",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 10.5,
      "last3Average": 10.5,
      "lastGameScore": 8,
      "scoreVolatility": 2.5,
      "homeAverage": 10.5,
      "awayAverage": 10.5
    },
    "JAKETRBOJEVIC": {
      "playerName": "Jake Trbojevic",
      "key": "JAKETRBOJEVIC",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 38,
      "scoreVolatility": 5,
      "homeAverage": 33,
      "awayAverage": 33
    },
    "LACHLANILIAS": {
      "playerName": "Lachlan Ilias",
      "key": "LACHLANILIAS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 35,
      "last3Average": 35,
      "lastGameScore": 39,
      "scoreVolatility": 4,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "HAMISHSTEWART": {
      "playerName": "Hamish Stewart",
      "key": "HAMISHSTEWART",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 40,
      "last3Average": 40,
      "lastGameScore": 37,
      "scoreVolatility": 3,
      "homeAverage": 37,
      "awayAverage": 43
    },
    "CAMPBELLGRAHAM": {
      "playerName": "Campbell Graham",
      "key": "CAMPBELLGRAHAM",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 42,
      "last3Average": 42,
      "lastGameScore": 42,
      "scoreVolatility": 0,
      "homeAverage": 42,
      "awayAverage": 42
    },
    "EMREGULER": {
      "playerName": "Emre Guler",
      "key": "EMREGULER",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 32.5,
      "last3Average": 32.5,
      "lastGameScore": 23,
      "scoreVolatility": 9.5,
      "homeAverage": 23,
      "awayAverage": 42
    },
    "EGANBUTCHER": {
      "playerName": "Egan Butcher",
      "key": "EGANBUTCHER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 34.5,
      "last3Average": 34.5,
      "lastGameScore": 37,
      "scoreVolatility": 2.5,
      "homeAverage": 37,
      "awayAverage": 32
    },
    "THOMASCANT": {
      "playerName": "Thomas Cant",
      "key": "THOMASCANT",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 14,
      "scoreVolatility": 0,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "DOMINICYOUNG": {
      "playerName": "Dominic Young",
      "key": "DOMINICYOUNG",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 53.5,
      "last3Average": 53.5,
      "lastGameScore": 51,
      "scoreVolatility": 2.5,
      "homeAverage": 56,
      "awayAverage": 51
    },
    "JASONTAUMALOLO": {
      "playerName": "Jason Taumalolo",
      "key": "JASONTAUMALOLO",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 35,
      "last3Average": 35,
      "lastGameScore": 33,
      "scoreVolatility": 2,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "TAINETUAUPIKI": {
      "playerName": "Taine Tuaupiki",
      "key": "TAINETUAUPIKI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 38,
      "last3Average": 38,
      "lastGameScore": 38,
      "scoreVolatility": 0,
      "homeAverage": 38,
      "awayAverage": 38
    },
    "SANDONSMITH": {
      "playerName": "Sandon Smith",
      "key": "SANDONSMITH",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 28.5,
      "last3Average": 28.5,
      "lastGameScore": 34,
      "scoreVolatility": 5.5,
      "homeAverage": 23,
      "awayAverage": 34
    },
    "BILLYBURNS": {
      "playerName": "Billy Burns",
      "key": "BILLYBURNS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 29.5,
      "last3Average": 29.5,
      "lastGameScore": 23,
      "scoreVolatility": 6.5,
      "homeAverage": 36,
      "awayAverage": 23
    },
    "LUKEBROOKS": {
      "playerName": "Luke Brooks",
      "key": "LUKEBROOKS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 40.5,
      "last3Average": 40.5,
      "lastGameScore": 51,
      "scoreVolatility": 10.5,
      "homeAverage": 40.5,
      "awayAverage": 40.5
    },
    "OREGONKAUFUSI": {
      "playerName": "Oregon Kaufusi",
      "key": "OREGONKAUFUSI",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 27.5,
      "last3Average": 27.5,
      "lastGameScore": 25,
      "scoreVolatility": 2.5,
      "homeAverage": 30,
      "awayAverage": 25
    },
    "BLAIZETALAGI": {
      "playerName": "Blaize Talagi",
      "key": "BLAIZETALAGI",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 37.5,
      "last3Average": 37.5,
      "lastGameScore": 40,
      "scoreVolatility": 2.5,
      "homeAverage": 40,
      "awayAverage": 35
    },
    "DEMITRICVAIMAUGA": {
      "playerName": "Demitric Vaimauga",
      "key": "DEMITRICVAIMAUGA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 20,
      "last3Average": 20,
      "lastGameScore": 24,
      "scoreVolatility": 4,
      "homeAverage": 20,
      "awayAverage": 20
    },
    "LUCIANOLEILUA": {
      "playerName": "Luciano Leilua",
      "key": "LUCIANOLEILUA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 42.5,
      "last3Average": 42.5,
      "lastGameScore": 42,
      "scoreVolatility": 0.5,
      "homeAverage": 42,
      "awayAverage": 43
    },
    "KLESEHAAS": {
      "playerName": "Klese Haas",
      "key": "KLESEHAAS",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 32.5,
      "last3Average": 32.5,
      "lastGameScore": 42,
      "scoreVolatility": 9.5,
      "homeAverage": 32.5,
      "awayAverage": 32.5
    },
    "KURTCAPEWELL": {
      "playerName": "Kurt Capewell",
      "key": "KURTCAPEWELL",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "seasonAverage": 48,
      "last3Average": 48,
      "lastGameScore": 48,
      "scoreVolatility": 0,
      "homeAverage": 48,
      "awayAverage": 48
    },
    "MAXFEAGAI": {
      "playerName": "Max Feagai",
      "key": "MAXFEAGAI",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 22.5,
      "last3Average": 22.5,
      "lastGameScore": 24,
      "scoreVolatility": 1.5,
      "homeAverage": 22.5,
      "awayAverage": 22.5
    },
    "WILLWARBRICK": {
      "playerName": "Will Warbrick",
      "key": "WILLWARBRICK",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 46.5,
      "last3Average": 46.5,
      "lastGameScore": 58,
      "scoreVolatility": 11.5,
      "homeAverage": 35,
      "awayAverage": 58
    },
    "BRONSONXERRI": {
      "playerName": "Bronson Xerri",
      "key": "BRONSONXERRI",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 36,
      "last3Average": 36,
      "lastGameScore": 36,
      "scoreVolatility": 0,
      "homeAverage": 36,
      "awayAverage": 36
    },
    "SAMUELHUGHES": {
      "playerName": "Samuel Hughes",
      "key": "SAMUELHUGHES",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 19,
      "last3Average": 19,
      "lastGameScore": 19,
      "scoreVolatility": 0,
      "homeAverage": 19,
      "awayAverage": 19
    },
    "COREYWADDELL": {
      "playerName": "Corey Waddell",
      "key": "COREYWADDELL",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 16,
      "last3Average": 16,
      "lastGameScore": 16,
      "scoreVolatility": 0,
      "homeAverage": 16,
      "awayAverage": 16
    },
    "BLAKESTEEP": {
      "playerName": "Blake Steep",
      "key": "BLAKESTEEP",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 24.5,
      "last3Average": 24.5,
      "lastGameScore": 23,
      "scoreVolatility": 1.5,
      "homeAverage": 23,
      "awayAverage": 26
    },
    "SEBASTIANKRIS": {
      "playerName": "Sebastian Kris",
      "key": "SEBASTIANKRIS",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 23.5,
      "last3Average": 23.5,
      "lastGameScore": 20,
      "scoreVolatility": 3.5,
      "homeAverage": 23.5,
      "awayAverage": 23.5
    },
    "WILLIAMKENNEDY": {
      "playerName": "William Kennedy",
      "key": "WILLIAMKENNEDY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 32.5,
      "last3Average": 32.5,
      "lastGameScore": 24,
      "scoreVolatility": 8.5,
      "homeAverage": 41,
      "awayAverage": 24
    },
    "DEINEMARINER": {
      "playerName": "Deine Mariner",
      "key": "DEINEMARINER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 20,
      "last3Average": 20,
      "lastGameScore": 22,
      "scoreVolatility": 2,
      "homeAverage": 20,
      "awayAverage": 20
    },
    "JACKCOGGER": {
      "playerName": "Jack Cogger",
      "key": "JACKCOGGER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 10,
      "last3Average": 10,
      "lastGameScore": 4,
      "scoreVolatility": 6,
      "homeAverage": 4,
      "awayAverage": 16
    },
    "BRAYDONTRINDALL": {
      "playerName": "Braydon Trindall",
      "key": "BRAYDONTRINDALL",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 47.5,
      "last3Average": 47.5,
      "lastGameScore": 26,
      "scoreVolatility": 21.5,
      "homeAverage": 69,
      "awayAverage": 26
    },
    "WILLPENISINI": {
      "playerName": "Will Penisini",
      "key": "WILLPENISINI",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 36,
      "last3Average": 36,
      "lastGameScore": 36,
      "scoreVolatility": 0,
      "homeAverage": 36,
      "awayAverage": 36
    },
    "SITILITUPOUNIUA": {
      "playerName": "Sitili Tupouniua",
      "key": "SITILITUPOUNIUA",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 35,
      "last3Average": 35,
      "lastGameScore": 35,
      "scoreVolatility": 0,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "JERMAINEMCEWEN": {
      "playerName": "Jermaine McEwen",
      "key": "JERMAINEMCEWEN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 33.5,
      "last3Average": 33.5,
      "lastGameScore": 30,
      "scoreVolatility": 3.5,
      "homeAverage": 37,
      "awayAverage": 30
    },
    "AUBLIXTAWHA": {
      "playerName": "Aublix Tawha",
      "key": "AUBLIXTAWHA",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 12.5,
      "last3Average": 12.5,
      "lastGameScore": 17,
      "scoreVolatility": 4.5,
      "homeAverage": 12.5,
      "awayAverage": 12.5
    },
    "BILLYSMITH": {
      "playerName": "Billy Smith",
      "key": "BILLYSMITH",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 44,
      "last3Average": 44,
      "lastGameScore": 44,
      "scoreVolatility": 0,
      "homeAverage": 44,
      "awayAverage": 44
    },
    "CORYPAIX": {
      "playerName": "Cory Paix",
      "key": "CORYPAIX",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 21,
      "last3Average": 21,
      "lastGameScore": 24,
      "scoreVolatility": 3,
      "homeAverage": 21,
      "awayAverage": 21
    },
    "COREYJENSEN": {
      "playerName": "Corey Jensen",
      "key": "COREYJENSEN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 31.5,
      "last3Average": 31.5,
      "lastGameScore": 51,
      "scoreVolatility": 19.5,
      "homeAverage": 31.5,
      "awayAverage": 31.5
    },
    "RAYSTONE": {
      "playerName": "Ray Stone",
      "key": "RAYSTONE",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 33,
      "scoreVolatility": 0,
      "homeAverage": 33,
      "awayAverage": 33
    },
    "SEANKEPPIE": {
      "playerName": "Sean Keppie",
      "key": "SEANKEPPIE",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 8,
      "last3Average": 8,
      "lastGameScore": 8,
      "scoreVolatility": 0,
      "homeAverage": 8,
      "awayAverage": 8
    },
    "JACKWIGHTON": {
      "playerName": "Jack Wighton",
      "key": "JACKWIGHTON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 36,
      "last3Average": 36,
      "lastGameScore": 35,
      "scoreVolatility": 1,
      "homeAverage": 36,
      "awayAverage": 36
    },
    "SUNIATURUVA": {
      "playerName": "Sunia Turuva",
      "key": "SUNIATURUVA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 46,
      "last3Average": 46,
      "lastGameScore": 46,
      "scoreVolatility": 0,
      "homeAverage": 46,
      "awayAverage": 46
    },
    "TYRANWISHART": {
      "playerName": "Tyran Wishart",
      "key": "TYRANWISHART",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 29.5,
      "last3Average": 29.5,
      "lastGameScore": 17,
      "scoreVolatility": 12.5,
      "homeAverage": 42,
      "awayAverage": 17
    },
    "FONUAPOLE": {
      "playerName": "Fonua Pole",
      "key": "FONUAPOLE",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 17,
      "last3Average": 17,
      "lastGameScore": 17,
      "scoreVolatility": 0,
      "homeAverage": 17,
      "awayAverage": 17
    },
    "SALESIFOKETI": {
      "playerName": "Salesi Foketi",
      "key": "SALESIFOKETI",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 11,
      "last3Average": 11,
      "lastGameScore": 15,
      "scoreVolatility": 4,
      "homeAverage": 15,
      "awayAverage": 7
    },
    "ADAMPOMPEY": {
      "playerName": "Adam Pompey",
      "key": "ADAMPOMPEY",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 28.5,
      "last3Average": 28.5,
      "lastGameScore": 18,
      "scoreVolatility": 10.5,
      "homeAverage": 28.5,
      "awayAverage": 28.5
    },
    "KURTMANN": {
      "playerName": "Kurt Mann",
      "key": "KURTMANN",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 33,
      "scoreVolatility": 0,
      "homeAverage": 33,
      "awayAverage": 33
    },
    "MARCELOMONTOYA": {
      "playerName": "Marcelo Montoya",
      "key": "MARCELOMONTOYA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 42,
      "last3Average": 42,
      "lastGameScore": 42,
      "scoreVolatility": 0,
      "homeAverage": 42,
      "awayAverage": 42
    },
    "JERALSKELTON": {
      "playerName": "Jeral Skelton",
      "key": "JERALSKELTON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 59,
      "last3Average": 59,
      "lastGameScore": 59,
      "scoreVolatility": 0,
      "homeAverage": 59,
      "awayAverage": 59
    },
    "ETHANSANDERS": {
      "playerName": "Ethan Sanders",
      "key": "ETHANSANDERS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 46,
      "last3Average": 46,
      "lastGameScore": 34,
      "scoreVolatility": 12,
      "homeAverage": 46,
      "awayAverage": 46
    },
    "JOSHKERR": {
      "playerName": "Josh Kerr",
      "key": "JOSHKERR",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 26.5,
      "last3Average": 26.5,
      "lastGameScore": 29,
      "scoreVolatility": 2.5,
      "homeAverage": 29,
      "awayAverage": 24
    },
    "MATTHEWLODGE": {
      "playerName": "Matthew Lodge",
      "key": "MATTHEWLODGE",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 21.5,
      "last3Average": 21.5,
      "lastGameScore": 24,
      "scoreVolatility": 2.5,
      "homeAverage": 21.5,
      "awayAverage": 21.5
    },
    "BAILEYHAYWARD": {
      "playerName": "Bailey Hayward",
      "key": "BAILEYHAYWARD",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "seasonAverage": 46,
      "last3Average": 46,
      "lastGameScore": 46,
      "scoreVolatility": 0,
      "homeAverage": 46,
      "awayAverage": 46
    },
    "SIMISASAGI": {
      "playerName": "Simi Sasagi",
      "key": "SIMISASAGI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 53,
      "last3Average": 53,
      "lastGameScore": 65,
      "scoreVolatility": 12,
      "homeAverage": 53,
      "awayAverage": 53
    },
    "ORYNKEELEY": {
      "playerName": "Oryn Keeley",
      "key": "ORYNKEELEY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 30.5,
      "last3Average": 30.5,
      "lastGameScore": 27,
      "scoreVolatility": 3.5,
      "homeAverage": 30.5,
      "awayAverage": 30.5
    },
    "SAMUELSTONESTREET": {
      "playerName": "Samuel Stonestreet",
      "key": "SAMUELSTONESTREET",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 36,
      "scoreVolatility": 3,
      "homeAverage": 30,
      "awayAverage": 36
    },
    "ATAMARIOTA": {
      "playerName": "Ata Mariota",
      "key": "ATAMARIOTA",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 27.5,
      "last3Average": 27.5,
      "lastGameScore": 28,
      "scoreVolatility": 0.5,
      "homeAverage": 27.5,
      "awayAverage": 27.5
    },
    "BRONSONGARLICK": {
      "playerName": "Bronson Garlick",
      "key": "BRONSONGARLICK",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 17.5,
      "last3Average": 17.5,
      "lastGameScore": 9,
      "scoreVolatility": 8.5,
      "homeAverage": 17.5,
      "awayAverage": 17.5
    },
    "ALECMACDONALD": {
      "playerName": "Alec MacDonald",
      "key": "ALECMACDONALD",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 0,
      "last3Average": 0,
      "lastGameScore": 0,
      "scoreVolatility": 0,
      "homeAverage": 0,
      "awayAverage": 0
    },
    "SEANRUSSELL": {
      "playerName": "Sean Russell",
      "key": "SEANRUSSELL",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 37,
      "last3Average": 37,
      "lastGameScore": 25,
      "scoreVolatility": 12,
      "homeAverage": 37,
      "awayAverage": 37
    },
    "ALILEIATAUA": {
      "playerName": "Ali Leiataua",
      "key": "ALILEIATAUA",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 32,
      "last3Average": 32,
      "lastGameScore": 50,
      "scoreVolatility": 18,
      "homeAverage": 32,
      "awayAverage": 32
    },
    "DAVVYMOALE": {
      "playerName": "Davvy Moale",
      "key": "DAVVYMOALE",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 14,
      "scoreVolatility": 0,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "JAEMANSALMON": {
      "playerName": "Jaeman Salmon",
      "key": "JAEMANSALMON",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 46,
      "last3Average": 46,
      "lastGameScore": 46,
      "scoreVolatility": 0,
      "homeAverage": 46,
      "awayAverage": 46
    },
    "SIONEFAINU": {
      "playerName": "Sione Fainu",
      "key": "SIONEFAINU",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 27,
      "last3Average": 27,
      "lastGameScore": 27,
      "scoreVolatility": 0,
      "homeAverage": 27,
      "awayAverage": 27
    },
    "THOMASMIKAELE": {
      "playerName": "Thomas Mikaele",
      "key": "THOMASMIKAELE",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 17,
      "last3Average": 17,
      "lastGameScore": 17,
      "scoreVolatility": 0,
      "homeAverage": 17,
      "awayAverage": 17
    },
    "FELISEKAUFUSI": {
      "playerName": "Felise Kaufusi",
      "key": "FELISEKAUFUSI",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 27,
      "last3Average": 27,
      "lastGameScore": 30,
      "scoreVolatility": 3,
      "homeAverage": 27,
      "awayAverage": 27
    },
    "NATHANBROWN": {
      "playerName": "Nathan Brown",
      "key": "NATHANBROWN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 9,
      "last3Average": 9,
      "lastGameScore": 10,
      "scoreVolatility": 1,
      "homeAverage": 9,
      "awayAverage": 9
    },
    "CODYWALKER": {
      "playerName": "Cody Walker",
      "key": "CODYWALKER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 36.5,
      "last3Average": 36.5,
      "lastGameScore": 20,
      "scoreVolatility": 16.5,
      "homeAverage": 36.5,
      "awayAverage": 36.5
    },
    "JASONSAAB": {
      "playerName": "Jason Saab",
      "key": "JASONSAAB",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 12,
      "last3Average": 12,
      "lastGameScore": 4,
      "scoreVolatility": 8,
      "homeAverage": 12,
      "awayAverage": 12
    },
    "JESSECOLQUHOUN": {
      "playerName": "Jesse Colquhoun",
      "key": "JESSECOLQUHOUN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 46.5,
      "last3Average": 46.5,
      "lastGameScore": 53,
      "scoreVolatility": 6.5,
      "homeAverage": 40,
      "awayAverage": 53
    },
    "TOBYRUDOLF": {
      "playerName": "Toby Rudolf",
      "key": "TOBYRUDOLF",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 21,
      "last3Average": 21,
      "lastGameScore": 23,
      "scoreVolatility": 2,
      "homeAverage": 19,
      "awayAverage": 23
    },
    "SIOSIFATALAKAI": {
      "playerName": "Siosifa Talakai",
      "key": "SIOSIFATALAKAI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 15,
      "last3Average": 15,
      "lastGameScore": 14,
      "scoreVolatility": 1,
      "homeAverage": 16,
      "awayAverage": 14
    },
    "TANNERSTOWERSSMITH": {
      "playerName": "Tanner Stowers-Smith",
      "key": "TANNERSTOWERSSMITH",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 23,
      "last3Average": 23,
      "lastGameScore": 27,
      "scoreVolatility": 4,
      "homeAverage": 23,
      "awayAverage": 23
    },
    "BRADSCHNEIDER": {
      "playerName": "Brad Schneider",
      "key": "BRADSCHNEIDER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 35.5,
      "last3Average": 35.5,
      "lastGameScore": 34,
      "scoreVolatility": 1.5,
      "homeAverage": 35.5,
      "awayAverage": 35.5
    },
    "KEANOKINI": {
      "playerName": "Keano Kini",
      "key": "KEANOKINI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 45.5,
      "last3Average": 45.5,
      "lastGameScore": 52,
      "scoreVolatility": 6.5,
      "homeAverage": 45.5,
      "awayAverage": 45.5
    },
    "JACOBLABAN": {
      "playerName": "Jacob Laban",
      "key": "JACOBLABAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 23.5,
      "last3Average": 23.5,
      "lastGameScore": 35,
      "scoreVolatility": 11.5,
      "homeAverage": 23.5,
      "awayAverage": 23.5
    },
    "JACKGOSIEWSKI": {
      "playerName": "Jack Gosiewski",
      "key": "JACKGOSIEWSKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 18,
      "last3Average": 18,
      "lastGameScore": 5,
      "scoreVolatility": 13,
      "homeAverage": 18,
      "awayAverage": 18
    },
    "BRADENHAMLINUELE": {
      "playerName": "Braden Hamlin-Uele",
      "key": "BRADENHAMLINUELE",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 13,
      "last3Average": 13,
      "lastGameScore": 13,
      "scoreVolatility": 0,
      "homeAverage": 13,
      "awayAverage": 13
    },
    "HARRISONGRAHAM": {
      "playerName": "Harrison Graham",
      "key": "HARRISONGRAHAM",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "seasonAverage": 22,
      "last3Average": 22,
      "lastGameScore": 22,
      "scoreVolatility": 0,
      "homeAverage": 22,
      "awayAverage": 22
    },
    "BENAIAHIOELU": {
      "playerName": "Benaiah Ioelu",
      "key": "BENAIAHIOELU",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 28.5,
      "last3Average": 28.5,
      "lastGameScore": 21,
      "scoreVolatility": 7.5,
      "homeAverage": 21,
      "awayAverage": 36
    },
    "HAMESELE": {
      "playerName": "Hame Sele",
      "key": "HAMESELE",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 31.5,
      "last3Average": 31.5,
      "lastGameScore": 33,
      "scoreVolatility": 1.5,
      "homeAverage": 33,
      "awayAverage": 30
    },
    "TUKIMIHIASIMPKINS": {
      "playerName": "Tukimihia Simpkins",
      "key": "TUKIMIHIASIMPKINS",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 29,
      "last3Average": 29,
      "lastGameScore": 29,
      "scoreVolatility": 0,
      "homeAverage": 29,
      "awayAverage": 29
    },
    "JOASHPAPALII": {
      "playerName": "Joash Papalii",
      "key": "JOASHPAPALII",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 1,
      "last3Average": 1,
      "lastGameScore": 1,
      "scoreVolatility": 0,
      "homeAverage": 1,
      "awayAverage": 1
    },
    "XAVIERSAVAGE": {
      "playerName": "Xavier Savage",
      "key": "XAVIERSAVAGE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 42.5,
      "last3Average": 42.5,
      "lastGameScore": 35,
      "scoreVolatility": 7.5,
      "homeAverage": 42.5,
      "awayAverage": 42.5
    },
    "JORDANSAMRANI": {
      "playerName": "Jordan Samrani",
      "key": "JORDANSAMRANI",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "seasonAverage": 17,
      "last3Average": 17,
      "lastGameScore": 17,
      "scoreVolatility": 0,
      "homeAverage": 17,
      "awayAverage": 17
    },
    "JOECHAN": {
      "playerName": "Joe Chan",
      "key": "JOECHAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 56.5,
      "last3Average": 56.5,
      "lastGameScore": 44,
      "scoreVolatility": 12.5,
      "homeAverage": 69,
      "awayAverage": 44
    },
    "DALLINWATENEZELEZNIAK": {
      "playerName": "Dallin Watene-Zelezniak",
      "key": "DALLINWATENEZELEZNIAK",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 29,
      "last3Average": 29,
      "lastGameScore": 40,
      "scoreVolatility": 11,
      "homeAverage": 29,
      "awayAverage": 29
    },
    "MATTDOOREY": {
      "playerName": "Matt Doorey",
      "key": "MATTDOOREY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 13.5,
      "last3Average": 13.5,
      "lastGameScore": 15,
      "scoreVolatility": 1.5,
      "homeAverage": 13.5,
      "awayAverage": 13.5
    },
    "SAMTUIVAITI": {
      "playerName": "Sam Tuivaiti",
      "key": "SAMTUIVAITI",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 24,
      "last3Average": 24,
      "lastGameScore": 24,
      "scoreVolatility": 0,
      "homeAverage": 24,
      "awayAverage": 24
    },
    "LUKELAULILII": {
      "playerName": "Luke Laulilii",
      "key": "LUKELAULILII",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 58,
      "last3Average": 58,
      "lastGameScore": 58,
      "scoreVolatility": 0,
      "homeAverage": 58,
      "awayAverage": 58
    },
    "ATIVALULISATI": {
      "playerName": "Ativalu Lisati",
      "key": "ATIVALULISATI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 70.5,
      "last3Average": 70.5,
      "lastGameScore": 67,
      "scoreVolatility": 3.5,
      "homeAverage": 74,
      "awayAverage": 67
    },
    "LUKESOMMERTON": {
      "playerName": "Luke Sommerton",
      "key": "LUKESOMMERTON",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "seasonAverage": 12,
      "last3Average": 12,
      "lastGameScore": 12,
      "scoreVolatility": 0,
      "homeAverage": 12,
      "awayAverage": 12
    },
    "KURTISMORRIN": {
      "playerName": "Kurtis Morrin",
      "key": "KURTISMORRIN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 24.5,
      "last3Average": 24.5,
      "lastGameScore": 30,
      "scoreVolatility": 5.5,
      "homeAverage": 24.5,
      "awayAverage": 24.5
    },
    "KAIODONNELL": {
      "playerName": "Kai O'Donnell",
      "key": "KAIODONNELL",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 26.5,
      "last3Average": 26.5,
      "lastGameScore": 17,
      "scoreVolatility": 9.5,
      "homeAverage": 26.5,
      "awayAverage": 26.5
    },
    "JAYDENSULLIVAN": {
      "playerName": "Jayden Sullivan",
      "key": "JAYDENSULLIVAN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 20,
      "last3Average": 20,
      "lastGameScore": 24,
      "scoreVolatility": 4,
      "homeAverage": 20,
      "awayAverage": 20
    },
    "NOAHMARTIN": {
      "playerName": "Noah Martin",
      "key": "NOAHMARTIN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 70,
      "last3Average": 70,
      "lastGameScore": 60,
      "scoreVolatility": 10,
      "homeAverage": 70,
      "awayAverage": 70
    },
    "JACKHETHERINGTON": {
      "playerName": "Jack Hetherington",
      "key": "JACKHETHERINGTON",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 21,
      "last3Average": 21,
      "lastGameScore": 21,
      "scoreVolatility": 0,
      "homeAverage": 21,
      "awayAverage": 21
    },
    "MOSESLEO": {
      "playerName": "Moses Leo",
      "key": "MOSESLEO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 48,
      "last3Average": 48,
      "lastGameScore": 28,
      "scoreVolatility": 20,
      "homeAverage": 68,
      "awayAverage": 28
    },
    "ROYCEHUNT": {
      "playerName": "Royce Hunt",
      "key": "ROYCEHUNT",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 13,
      "last3Average": 13,
      "lastGameScore": 13,
      "scoreVolatility": 0,
      "homeAverage": 13,
      "awayAverage": 13
    },
    "TALLYNDASILVA": {
      "playerName": "Tallyn Da Silva",
      "key": "TALLYNDASILVA",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "seasonAverage": 16.5,
      "last3Average": 16.5,
      "lastGameScore": 10,
      "scoreVolatility": 6.5,
      "homeAverage": 16.5,
      "awayAverage": 16.5
    },
    "CAMERONMURRAY": {
      "playerName": "Cameron Murray",
      "key": "CAMERONMURRAY",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 54.5,
      "last3Average": 54.5,
      "lastGameScore": 54,
      "scoreVolatility": 0.5,
      "homeAverage": 54.5,
      "awayAverage": 54.5
    },
    "JONAHPEZET": {
      "playerName": "Jonah Pezet",
      "key": "JONAHPEZET",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 24.5,
      "last3Average": 24.5,
      "lastGameScore": 35,
      "scoreVolatility": 10.5,
      "homeAverage": 24.5,
      "awayAverage": 24.5
    },
    "HOHEPAPURU": {
      "playerName": "Hohepa Puru",
      "key": "HOHEPAPURU",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 14,
      "scoreVolatility": 0,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "DANIELATKINSON": {
      "playerName": "Daniel Atkinson",
      "key": "DANIELATKINSON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "seasonAverage": 51.5,
      "last3Average": 51.5,
      "lastGameScore": 44,
      "scoreVolatility": 7.5,
      "homeAverage": 44,
      "awayAverage": 59
    },
    "ARAMAHAU": {
      "playerName": "Arama Hau",
      "key": "ARAMAHAU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 37,
      "last3Average": 37,
      "lastGameScore": 35,
      "scoreVolatility": 2,
      "homeAverage": 37,
      "awayAverage": 37
    },
    "TUIKAMIKAMICA": {
      "playerName": "Tui Kamikamica",
      "key": "TUIKAMIKAMICA",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 28,
      "last3Average": 28,
      "lastGameScore": 30,
      "scoreVolatility": 2,
      "homeAverage": 26,
      "awayAverage": 30
    },
    "SONILUKE": {
      "playerName": "Soni Luke",
      "key": "SONILUKE",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 14,
      "scoreVolatility": 0,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "FETALAIGAPAUGA": {
      "playerName": "Fetalaiga Pauga",
      "key": "FETALAIGAPAUGA",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "seasonAverage": 34.5,
      "last3Average": 34.5,
      "lastGameScore": 28,
      "scoreVolatility": 6.5,
      "homeAverage": 28,
      "awayAverage": 41
    },
    "PASAMISAULO": {
      "playerName": "Pasami Saulo",
      "key": "PASAMISAULO",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 24,
      "last3Average": 24,
      "lastGameScore": 27,
      "scoreVolatility": 3,
      "homeAverage": 21,
      "awayAverage": 27
    },
    "KALANIGOING": {
      "playerName": "Kalani Going",
      "key": "KALANIGOING",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 12,
      "last3Average": 12,
      "lastGameScore": 15,
      "scoreVolatility": 3,
      "homeAverage": 15,
      "awayAverage": 9
    },
    "BRANDONWAKEHAM": {
      "playerName": "Brandon Wakeham",
      "key": "BRANDONWAKEHAM",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "seasonAverage": 19,
      "last3Average": 19,
      "lastGameScore": 19,
      "scoreVolatility": 0,
      "homeAverage": 19,
      "awayAverage": 19
    },
    "THOMASFLEGLER": {
      "playerName": "Thomas Flegler",
      "key": "THOMASFLEGLER",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 33,
      "last3Average": 33,
      "lastGameScore": 20,
      "scoreVolatility": 13,
      "homeAverage": 33,
      "awayAverage": 33
    },
    "BENTALTY": {
      "playerName": "Ben Talty",
      "key": "BENTALTY",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 16,
      "last3Average": 16,
      "lastGameScore": 13,
      "scoreVolatility": 3,
      "homeAverage": 16,
      "awayAverage": 16
    },
    "MORGANKNOWLES": {
      "playerName": "Morgan Knowles",
      "key": "MORGANKNOWLES",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 39,
      "last3Average": 39,
      "lastGameScore": 32,
      "scoreVolatility": 7,
      "homeAverage": 39,
      "awayAverage": 39
    },
    "BRENTWOOLF": {
      "playerName": "Brent Woolf",
      "key": "BRENTWOOLF",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "seasonAverage": 15,
      "last3Average": 15,
      "lastGameScore": 15,
      "scoreVolatility": 0,
      "homeAverage": 15,
      "awayAverage": 15
    },
    "SETUTU": {
      "playerName": "Setu Tu",
      "key": "SETUTU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 29,
      "last3Average": 29,
      "lastGameScore": 16,
      "scoreVolatility": 13,
      "homeAverage": 16,
      "awayAverage": 42
    },
    "HEILUMLUKI": {
      "playerName": "Heilum Luki",
      "key": "HEILUMLUKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 63.5,
      "last3Average": 63.5,
      "lastGameScore": 59,
      "scoreVolatility": 4.5,
      "homeAverage": 63.5,
      "awayAverage": 63.5
    },
    "TOMCHESTER": {
      "playerName": "Tom Chester",
      "key": "TOMCHESTER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 57,
      "last3Average": 57,
      "lastGameScore": 67,
      "scoreVolatility": 10,
      "homeAverage": 57,
      "awayAverage": 57
    },
    "PAULBRYAN": {
      "playerName": "Paul Bryan",
      "key": "PAULBRYAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "seasonAverage": 15,
      "last3Average": 15,
      "lastGameScore": 15,
      "scoreVolatility": 0,
      "homeAverage": 15,
      "awayAverage": 15
    },
    "ASHTONWARD": {
      "playerName": "Ashton Ward",
      "key": "ASHTONWARD",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 14,
      "scoreVolatility": 0,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "PRESTONCONN": {
      "playerName": "Preston Conn",
      "key": "PRESTONCONN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "seasonAverage": 5,
      "last3Average": 5,
      "lastGameScore": 5,
      "scoreVolatility": 0,
      "homeAverage": 5,
      "awayAverage": 5
    },
    "RYANCOUCHMAN": {
      "playerName": "Ryan Couchman",
      "key": "RYANCOUCHMAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 58.5,
      "last3Average": 58.5,
      "lastGameScore": 59,
      "scoreVolatility": 0.5,
      "homeAverage": 59,
      "awayAverage": 58
    },
    "FLETCHERHUNT": {
      "playerName": "Fletcher Hunt",
      "key": "FLETCHERHUNT",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "seasonAverage": 51,
      "last3Average": 51,
      "lastGameScore": 51,
      "scoreVolatility": 0,
      "homeAverage": 51,
      "awayAverage": 51
    },
    "BILLYPHILLIPS": {
      "playerName": "Billy Phillips",
      "key": "BILLYPHILLIPS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "seasonAverage": 28.5,
      "last3Average": 28.5,
      "lastGameScore": 32,
      "scoreVolatility": 3.5,
      "homeAverage": 32,
      "awayAverage": 25
    },
    "ANGUSHINCHEY": {
      "playerName": "Angus Hinchey",
      "key": "ANGUSHINCHEY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "seasonAverage": 5,
      "last3Average": 5,
      "lastGameScore": 5,
      "scoreVolatility": 0,
      "homeAverage": 5,
      "awayAverage": 5
    },
    "COOPERCLARKE": {
      "playerName": "Cooper Clarke",
      "key": "COOPERCLARKE",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 29.5,
      "last3Average": 29.5,
      "lastGameScore": 23,
      "scoreVolatility": 6.5,
      "homeAverage": 36,
      "awayAverage": 23
    },
    "SIALETILIFAEAMANI": {
      "playerName": "Sialetili Faeamani",
      "key": "SIALETILIFAEAMANI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "seasonAverage": 32,
      "last3Average": 32,
      "lastGameScore": 33,
      "scoreVolatility": 1,
      "homeAverage": 32,
      "awayAverage": 32
    },
    "COOPERBAI": {
      "playerName": "Cooper Bai",
      "key": "COOPERBAI",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "seasonAverage": 25,
      "last3Average": 25,
      "lastGameScore": 32,
      "scoreVolatility": 7,
      "homeAverage": 25,
      "awayAverage": 25
    }
  },
  "leaguePositionAverages": {
    "Prop": 43.6,
    "Halfback": 47.8,
    "Centre": 38.2,
    "2nd Row": 44.8,
    "Fullback": 42.2,
    "Lock": 45,
    "Five-Eighth": 38.3,
    "Hooker": 44.1,
    "Winger": 34.3
  },
  "teamConcessionsByTeam": {
    "Broncos": {
      "positionAverages": {
        "2nd Row": 39.1,
        "Centre": 37.9,
        "Five-Eighth": 35.5,
        "Fullback": 40.3,
        "Halfback": 41.7,
        "Hooker": 44.9,
        "Lock": 42.5,
        "Prop": 38.5,
        "Winger": 28.9
      },
      "positionDeltas": {
        "2nd Row": -5.7,
        "Centre": -0.3,
        "Five-Eighth": -2.8,
        "Fullback": -1.9,
        "Halfback": -6.1,
        "Hooker": 0.8,
        "Lock": -2.5,
        "Prop": -5.1,
        "Winger": -5.4
      }
    },
    "Bulldogs": {
      "positionAverages": {
        "2nd Row": 42.1,
        "Centre": 33.2,
        "Five-Eighth": 31.5,
        "Fullback": 36.7,
        "Halfback": 48.3,
        "Hooker": 42.6,
        "Lock": 48.6,
        "Prop": 45.8,
        "Winger": 30.6
      },
      "positionDeltas": {
        "2nd Row": -2.7,
        "Centre": -5,
        "Five-Eighth": -6.8,
        "Fullback": -5.5,
        "Halfback": 0.5,
        "Hooker": -1.5,
        "Lock": 3.6,
        "Prop": 2.2,
        "Winger": -3.7
      }
    },
    "Cowboys": {
      "positionAverages": {
        "2nd Row": 45.8,
        "Centre": 40,
        "Five-Eighth": 45.3,
        "Fullback": 46.9,
        "Halfback": 56.3,
        "Hooker": 44.7,
        "Lock": 46.5,
        "Prop": 42.7,
        "Winger": 38.4
      },
      "positionDeltas": {
        "2nd Row": 1,
        "Centre": 1.8,
        "Five-Eighth": 7,
        "Fullback": 4.7,
        "Halfback": 8.5,
        "Hooker": 0.6,
        "Lock": 1.5,
        "Prop": -0.9,
        "Winger": 4.1
      }
    },
    "Dolphins": {
      "positionAverages": {
        "2nd Row": 46.1,
        "Centre": 37.3,
        "Five-Eighth": 37,
        "Fullback": 47.5,
        "Halfback": 50.2,
        "Hooker": 42.7,
        "Lock": 45.5,
        "Prop": 40.4,
        "Winger": 33.1
      },
      "positionDeltas": {
        "2nd Row": 1.3,
        "Centre": -0.9,
        "Five-Eighth": -1.3,
        "Fullback": 5.3,
        "Halfback": 2.4,
        "Hooker": -1.4,
        "Lock": 0.5,
        "Prop": -3.2,
        "Winger": -1.2
      }
    },
    "Dragons": {
      "positionAverages": {
        "2nd Row": 45.7,
        "Centre": 36.2,
        "Five-Eighth": 41.6,
        "Fullback": 47.4,
        "Halfback": 52.9,
        "Hooker": 44.8,
        "Lock": 44.2,
        "Prop": 45.2,
        "Winger": 33.7
      },
      "positionDeltas": {
        "2nd Row": 0.9,
        "Centre": -2,
        "Five-Eighth": 3.3,
        "Fullback": 5.2,
        "Halfback": 5.1,
        "Hooker": 0.7,
        "Lock": -0.8,
        "Prop": 1.6,
        "Winger": -0.6
      }
    },
    "Eels": {
      "positionAverages": {
        "2nd Row": 44,
        "Centre": 43,
        "Five-Eighth": 43,
        "Fullback": 39.2,
        "Halfback": 42.1,
        "Hooker": 41.2,
        "Lock": 41.2,
        "Prop": 43.5,
        "Winger": 34.8
      },
      "positionDeltas": {
        "2nd Row": -0.8,
        "Centre": 4.8,
        "Five-Eighth": 4.7,
        "Fullback": -3,
        "Halfback": -5.7,
        "Hooker": -2.9,
        "Lock": -3.8,
        "Prop": -0.1,
        "Winger": 0.5
      }
    },
    "Knights": {
      "positionAverages": {
        "2nd Row": 45.3,
        "Centre": 42.8,
        "Five-Eighth": 33.6,
        "Fullback": 42.3,
        "Halfback": 56.7,
        "Hooker": 41.4,
        "Lock": 47.8,
        "Prop": 42.4,
        "Winger": 36.7
      },
      "positionDeltas": {
        "2nd Row": 0.5,
        "Centre": 4.6,
        "Five-Eighth": -4.7,
        "Fullback": 0.1,
        "Halfback": 8.9,
        "Hooker": -2.7,
        "Lock": 2.8,
        "Prop": -1.2,
        "Winger": 2.4
      }
    },
    "Panthers": {
      "positionAverages": {
        "2nd Row": 48.2,
        "Centre": 40.5,
        "Five-Eighth": 37.1,
        "Fullback": 49.9,
        "Halfback": 50.3,
        "Hooker": 52.1,
        "Lock": 42.3,
        "Prop": 44.2,
        "Winger": 31.3
      },
      "positionDeltas": {
        "2nd Row": 3.4,
        "Centre": 2.3,
        "Five-Eighth": -1.2,
        "Fullback": 7.7,
        "Halfback": 2.5,
        "Hooker": 8,
        "Lock": -2.7,
        "Prop": 0.6,
        "Winger": -3
      }
    },
    "Rabbitohs": {
      "positionAverages": {
        "2nd Row": 48.1,
        "Centre": 40.6,
        "Five-Eighth": 47.7,
        "Fullback": 52.4,
        "Halfback": 49.5,
        "Hooker": 49.9,
        "Lock": 51,
        "Prop": 44.5,
        "Winger": 39.7
      },
      "positionDeltas": {
        "2nd Row": 3.3,
        "Centre": 2.4,
        "Five-Eighth": 9.4,
        "Fullback": 10.2,
        "Halfback": 1.7,
        "Hooker": 5.8,
        "Lock": 6,
        "Prop": 0.9,
        "Winger": 5.4
      }
    },
    "Raiders": {
      "positionAverages": {
        "2nd Row": 45.2,
        "Centre": 37.8,
        "Five-Eighth": 30.7,
        "Fullback": 35.2,
        "Halfback": 42.7,
        "Hooker": 45,
        "Lock": 45.2,
        "Prop": 41.2,
        "Winger": 32.2
      },
      "positionDeltas": {
        "2nd Row": 0.4,
        "Centre": -0.4,
        "Five-Eighth": -7.6,
        "Fullback": -7,
        "Halfback": -5.1,
        "Hooker": 0.9,
        "Lock": 0.2,
        "Prop": -2.4,
        "Winger": -2.1
      }
    },
    "Roosters": {
      "positionAverages": {
        "2nd Row": 40.6,
        "Centre": 35.4,
        "Five-Eighth": 33.2,
        "Fullback": 34.8,
        "Halfback": 42.4,
        "Hooker": 43.6,
        "Lock": 40.8,
        "Prop": 41.9,
        "Winger": 30.3
      },
      "positionDeltas": {
        "2nd Row": -4.2,
        "Centre": -2.8,
        "Five-Eighth": -5.1,
        "Fullback": -7.4,
        "Halfback": -5.4,
        "Hooker": -0.5,
        "Lock": -4.2,
        "Prop": -1.7,
        "Winger": -4
      }
    },
    "Sea Eagles": {
      "positionAverages": {
        "2nd Row": 44.8,
        "Centre": 36.9,
        "Five-Eighth": 41,
        "Fullback": 36.6,
        "Halfback": 50.9,
        "Hooker": 46,
        "Lock": 49.5,
        "Prop": 44.3,
        "Winger": 34
      },
      "positionDeltas": {
        "2nd Row": 0,
        "Centre": -1.3,
        "Five-Eighth": 2.7,
        "Fullback": -5.6,
        "Halfback": 3.1,
        "Hooker": 1.9,
        "Lock": 4.5,
        "Prop": 0.7,
        "Winger": -0.3
      }
    },
    "Sharks": {
      "positionAverages": {
        "2nd Row": 46.5,
        "Centre": 35.3,
        "Five-Eighth": 42.2,
        "Fullback": 38.8,
        "Halfback": 48.7,
        "Hooker": 45.5,
        "Lock": 47,
        "Prop": 45.1,
        "Winger": 31.3
      },
      "positionDeltas": {
        "2nd Row": 1.7,
        "Centre": -2.9,
        "Five-Eighth": 3.9,
        "Fullback": -3.4,
        "Halfback": 0.9,
        "Hooker": 1.4,
        "Lock": 2,
        "Prop": 1.5,
        "Winger": -3
      }
    },
    "Storm": {
      "positionAverages": {
        "2nd Row": 43.6,
        "Centre": 39.3,
        "Five-Eighth": 33,
        "Fullback": 43.7,
        "Halfback": 39.9,
        "Hooker": 37.8,
        "Lock": 40.7,
        "Prop": 41.1,
        "Winger": 34.5
      },
      "positionDeltas": {
        "2nd Row": -1.2,
        "Centre": 1.1,
        "Five-Eighth": -5.3,
        "Fullback": 1.5,
        "Halfback": -7.9,
        "Hooker": -6.3,
        "Lock": -4.3,
        "Prop": -2.5,
        "Winger": 0.2
      }
    },
    "Tigers": {
      "positionAverages": {
        "2nd Row": 43.5,
        "Centre": 34.2,
        "Five-Eighth": 38.7,
        "Fullback": 42,
        "Halfback": 49.1,
        "Hooker": 41.3,
        "Lock": 43.7,
        "Prop": 48,
        "Winger": 35.5
      },
      "positionDeltas": {
        "2nd Row": -1.3,
        "Centre": -4,
        "Five-Eighth": 0.4,
        "Fullback": -0.2,
        "Halfback": 1.3,
        "Hooker": -2.8,
        "Lock": -1.3,
        "Prop": 4.4,
        "Winger": 1.2
      }
    },
    "Titans": {
      "positionAverages": {
        "2nd Row": 48,
        "Centre": 41.3,
        "Five-Eighth": 43.2,
        "Fullback": 43.5,
        "Halfback": 45.3,
        "Hooker": 40.4,
        "Lock": 45.6,
        "Prop": 45.7,
        "Winger": 41.2
      },
      "positionDeltas": {
        "2nd Row": 3.2,
        "Centre": 3.1,
        "Five-Eighth": 4.9,
        "Fullback": 1.3,
        "Halfback": -2.5,
        "Hooker": -3.7,
        "Lock": 0.6,
        "Prop": 2.1,
        "Winger": 6.9
      }
    },
    "Warriors": {
      "positionAverages": {
        "2nd Row": 45.1,
        "Centre": 38,
        "Five-Eighth": 37.5,
        "Fullback": 40.4,
        "Halfback": 45.1,
        "Hooker": 44.3,
        "Lock": 42.5,
        "Prop": 46.3,
        "Winger": 37.2
      },
      "positionDeltas": {
        "2nd Row": 0.3,
        "Centre": -0.2,
        "Five-Eighth": -0.8,
        "Fullback": -1.8,
        "Halfback": -2.7,
        "Hooker": 0.2,
        "Lock": -2.5,
        "Prop": 2.7,
        "Winger": 2.9
      }
    }
  },
  "roundScoresByPlayer": {
    "PAYNEHAAS": [
      {
        "round": 1,
        "score": 56,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 75,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "TERRELLMAY": [
      {
        "round": 2,
        "score": 62,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "NATHANCLEARY": [
      {
        "round": 1,
        "score": 57,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 92,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "HERBIEFARNWORTH": [
      {
        "round": 1,
        "score": 54,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 67,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "HUDSONYOUNG": [
      {
        "round": 1,
        "score": 63,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 40,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "ISAAHYEO": [
      {
        "round": 1,
        "score": 52,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 54,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "ERINCLARK": [
      {
        "round": 1,
        "score": 39,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 53,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "JOSEPHTAPINE": [
      {
        "round": 1,
        "score": 32,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 40,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "LATRELLMITCHELL": [
      {
        "round": 1,
        "score": 75,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 56,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "DYLANLUCAS": [
      {
        "round": 1,
        "score": 60,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 52,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "JACOBPRESTON": [
      {
        "round": 1,
        "score": 74,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "FLETCHERSHARPE": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      }
    ],
    "ISAIYAKATOA": [
      {
        "round": 1,
        "score": 43,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 46,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "KEAONKOLOAMATANGI": [
      {
        "round": 1,
        "score": 50,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 47,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "NICHOLASHYNES": [
      {
        "round": 1,
        "score": 84,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 39,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "TRAIFULLER": [
      {
        "round": 1,
        "score": 3,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "KAIPEARCEPAUL": [
      {
        "round": 2,
        "score": 61,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "TOBYCOUCHMAN": [
      {
        "round": 1,
        "score": 56,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 34,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "JAMALFOGARTY": [
      {
        "round": 1,
        "score": 43,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 49,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "BLAYKEBRAILEY": [
      {
        "round": 1,
        "score": 61,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 52,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "JAMESTEDESCO": [
      {
        "round": 1,
        "score": 61,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "PATRICKCARRIGAN": [
      {
        "round": 1,
        "score": 47,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 57,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "BEAUFERMOR": [
      {
        "round": 1,
        "score": 48,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 52,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "LINDSAYSMITH": [
      {
        "round": 1,
        "score": 32,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 36,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "TINOFAASUAMALEAUI": [
      {
        "round": 1,
        "score": 34,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "DALYCHERRYEVANS": [
      {
        "round": 1,
        "score": 25,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 59,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "COREYHORSBURGH": [
      {
        "round": 1,
        "score": 63,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 44,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "JACOBKIRAZ": [
      {
        "round": 1,
        "score": 61,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "ADDINFONUABLAKE": [
      {
        "round": 1,
        "score": 54,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 37,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "REECEWALSH": [
      {
        "round": 1,
        "score": 25,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 69,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "ZACHOSKING": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 37,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "HARRYGRANT": [
      {
        "round": 1,
        "score": 63,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 72,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "VALENTINEHOLMES": [
      {
        "round": 1,
        "score": 27,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 53,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "MAXKING": [
      {
        "round": 1,
        "score": 54,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "ADAMREYNOLDS": [
      {
        "round": 1,
        "score": 13,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 65,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "CAMERONMUNSTER": [
      {
        "round": 1,
        "score": 69,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 46,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "ANGUSCRICHTON": [
      {
        "round": 1,
        "score": 43,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 39,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "NAUFAHUWHYTE": [
      {
        "round": 1,
        "score": 40,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 33,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "SCOTTDRINKWATER": [
      {
        "round": 1,
        "score": 21,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 33,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "JACKWILLIAMS": [
      {
        "round": 1,
        "score": 55,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 52,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "JAYDNSUA": [
      {
        "round": 1,
        "score": 59,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 57,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "DAMIENCOOK": [
      {
        "round": 1,
        "score": 91,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 53,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "VILIAMEKIKAU": [
      {
        "round": 1,
        "score": 74,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "TOMDEARDEN": [
      {
        "round": 1,
        "score": 57,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 29,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "KLIRO": [
      {
        "round": 1,
        "score": 34,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 32,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "JACKSONFORD": [
      {
        "round": 1,
        "score": 44,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 74,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "CONNORWATSON": [
      {
        "round": 1,
        "score": 11,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 36,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "HAMISOTABUAIFIDOW": [
      {
        "round": 1,
        "score": 56,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 67,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "JACKDEBELIN": [
      {
        "round": 1,
        "score": 49,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 25,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "DYLANEDWARDS": [
      {
        "round": 1,
        "score": 64,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 38,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "MARKNAWAQANITAWASE": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 44,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "JORDANRIKI": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 41,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "EUANAITKEN": [
      {
        "round": 1,
        "score": 50,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 33,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "TAYLANMAY": [
      {
        "round": 2,
        "score": 5,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "HAUMOLEOLAKAUATU": [
      {
        "round": 1,
        "score": 54,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 41,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "ISAIAHPAPALII": [
      {
        "round": 1,
        "score": 54,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 62,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "SAMVERRILLS": [
      {
        "round": 1,
        "score": 49,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "JMAINEHOPGOOD": [
      {
        "round": 1,
        "score": 49,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      }
    ],
    "JUNIORPAULO": [
      {
        "round": 1,
        "score": 38,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 32,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "TREYMOONEY": [
      {
        "round": 1,
        "score": 66,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 53,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "MITCHELLMOSES": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 48,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "TANAHBOYD": [
      {
        "round": 1,
        "score": 78,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 76,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "WAYDEEGAN": [
      {
        "round": 1,
        "score": 30,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "BRADMANBEST": [
      {
        "round": 1,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 48,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "APISAIKOROISAU": [
      {
        "round": 2,
        "score": 31,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "JAHROMEHUGHES": [
      {
        "round": 1,
        "score": 38,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 55,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "JAMESFISHERHARRIS": [
      {
        "round": 1,
        "score": 67,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 49,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "STEFANOUTOIKAMANU": [
      {
        "round": 1,
        "score": 48,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 66,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "KOTONISTAGGS": [
      {
        "round": 1,
        "score": 27,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 40,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "TOMSTARLING": [
      {
        "round": 1,
        "score": 47,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 36,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "ALEXTWAL": [
      {
        "round": 2,
        "score": 55,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "BRAIDONBURNS": [
      {
        "round": 1,
        "score": 31,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 62,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "SIUAWONG": [
      {
        "round": 1,
        "score": 40,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 48,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "SAMWALKER": [
      {
        "round": 1,
        "score": 27,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "REUBENCOTTER": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "JOSHCURRAN": [
      {
        "round": 1,
        "score": 11,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "MOEAKIFOTUAIKA": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 29,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "JAKECLIFFORD": [
      {
        "round": 1,
        "score": 37,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 46,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "GEHAMATSHIBASAKI": [
      {
        "round": 1,
        "score": 21,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 7,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "MAXPLATH": [
      {
        "round": 2,
        "score": 39,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "ROGERTUIVASASHECK": [
      {
        "round": 1,
        "score": 42,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 20,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "ADAMDOUEIHI": [
      {
        "round": 2,
        "score": 82,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "BRITONNIKORA": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 60,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "KITIONEKAUTOGA": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "MATTHEWTIMOKO": [
      {
        "round": 2,
        "score": 21,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "ROBERTTOIA": [
      {
        "round": 2,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "REUBENGARRICK": [
      {
        "round": 1,
        "score": 23,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "TALLISDUNCAN": [
      {
        "round": 1,
        "score": 45,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "MATTBURTON": [
      {
        "round": 1,
        "score": 47,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "AJBRIMSON": [
      {
        "round": 1,
        "score": 23,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 39,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "PETERMAMOUZELOS": [
      {
        "round": 1,
        "score": 39,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 30,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "LACHLANGALVIN": [
      {
        "round": 1,
        "score": 70,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "KYLEFLANAGAN": [
      {
        "round": 1,
        "score": 40,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 26,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "BRIANTOO": [
      {
        "round": 1,
        "score": 22,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 54,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "DANEGAGAI": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "NATBUTCHER": [
      {
        "round": 1,
        "score": 63,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "KALYNPONGA": [
      {
        "round": 1,
        "score": 80,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "NICKMEANEY": [
      {
        "round": 1,
        "score": 40,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "TOMTRBOJEVIC": [
      {
        "round": 1,
        "score": 67,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 57,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "GREGMARZHEW": [
      {
        "round": 1,
        "score": 43,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "STEPHENCRICHTON": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "HARRYHAYES": [
      {
        "round": 1,
        "score": 48,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "MITCHKENNY": [
      {
        "round": 1,
        "score": 25,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 41,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "ALEXSEYFARTH": [
      {
        "round": 2,
        "score": 16,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "SAMUELAFAINU": [
      {
        "round": 2,
        "score": 76,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "PAULALAMOTI": [
      {
        "round": 1,
        "score": 25,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "TOLUTAUKOULA": [
      {
        "round": 1,
        "score": 73,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 16,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "PHILLIPSAMI": [
      {
        "round": 1,
        "score": 16,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 17,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "TOMGILBERT": [
      {
        "round": 1,
        "score": 26,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 58,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "LUKEGARNER": [
      {
        "round": 1,
        "score": 50,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 47,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "JAKESIMPKIN": [
      {
        "round": 1,
        "score": 51,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 24,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "MURRAYTAULAGI": [
      {
        "round": 1,
        "score": 53,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "ETHANSTRANGE": [
      {
        "round": 1,
        "score": 23,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 52,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "CHRISTIANTUIPULOTU": [
      {
        "round": 1,
        "score": 27,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 30,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "BRIANKELLY": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      }
    ],
    "JOSHKING": [
      {
        "round": 1,
        "score": 40,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 50,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "JOSIAHKARAPANI": [
      {
        "round": 1,
        "score": 27,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 21,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "BENTRBOJEVIC": [
      {
        "round": 1,
        "score": 40,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 52,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "THOMASJENKINS": [
      {
        "round": 1,
        "score": 76,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "CLINTONGUTHERSON": [
      {
        "round": 1,
        "score": 25,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 27,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "MOSESLEOTA": [
      {
        "round": 1,
        "score": 24,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "CHANELHARRISTAVITA": [
      {
        "round": 1,
        "score": 45,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 0,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "CONNORTRACEY": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "MATCROKER": [
      {
        "round": 1,
        "score": 38,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 34,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "JYEGRAY": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 37,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "ETHANBULLEMOR": [
      {
        "round": 1,
        "score": 33,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "JAHREAMBULA": [
      {
        "round": 2,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "PHOENIXCROSSLAND": [
      {
        "round": 1,
        "score": 52,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "LEKAHALASIMA": [
      {
        "round": 1,
        "score": 22,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 69,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "ISAIAHIONGI": [
      {
        "round": 1,
        "score": 57,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 67,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "LEHIHOPOATE": [
      {
        "round": 1,
        "score": 28,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 11,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "KODINIKORIMA": [
      {
        "round": 1,
        "score": 27,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "SCOTTSORENSEN": [
      {
        "round": 1,
        "score": 26,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "KELMATUILAGI": [
      {
        "round": 2,
        "score": 73,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "JOSHADDOCARR": [
      {
        "round": 2,
        "score": 13,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "REEDMAHONEY": [
      {
        "round": 1,
        "score": 56,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 36,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "CHRISRANDALL": [
      {
        "round": 1,
        "score": 26,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 47,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "MORGANSMITHIES": [
      {
        "round": 1,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 31,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "DANIELTUPOU": [
      {
        "round": 1,
        "score": 27,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "JAROMELUAI": [
      {
        "round": 2,
        "score": 66,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "DYLANBROWN": [
      {
        "round": 1,
        "score": 37,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 44,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "TANIELAPASEKA": [
      {
        "round": 1,
        "score": 49,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 38,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "KULIKEFUFINEFEUIAKI": [
      {
        "round": 1,
        "score": 54,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 64,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "CHARNZENICOLLKLOKSTAD": [
      {
        "round": 1,
        "score": 43,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 32,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "JAMAYNEISAAKO": [
      {
        "round": 1,
        "score": 44,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 24,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "JAKEAVERILLO": [
      {
        "round": 1,
        "score": 40,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 47,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "CASEYMCLEAN": [
      {
        "round": 1,
        "score": 21,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 44,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "TYSONFRIZELL": [
      {
        "round": 1,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 35,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "JESSERAMIEN": [
      {
        "round": 1,
        "score": 63,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 35,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "JOSHPAPALII": [
      {
        "round": 1,
        "score": 12,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "MATHEWFEAGAI": [
      {
        "round": 1,
        "score": 9,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 2,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "LACHLANHUBNER": [
      {
        "round": 1,
        "score": 25,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 12,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "EZRAMAM": [
      {
        "round": 1,
        "score": 28,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 33,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "GRIFFINNEAME": [
      {
        "round": 1,
        "score": 15,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 26,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "RYLEYSMITH": [
      {
        "round": 1,
        "score": 24,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 38,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "HEAMASIMAKASINI": [
      {
        "round": 2,
        "score": 35,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "SIONEKATOA": [
      {
        "round": 1,
        "score": 57,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 45,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "BAILEYSIMONSSON": [
      {
        "round": 1,
        "score": 28,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "XAVIERWILLISON": [
      {
        "round": 1,
        "score": 18,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 37,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "JAXONPURDUE": [
      {
        "round": 1,
        "score": 24,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 48,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "SAVELIOTAMALE": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 25,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "KAEOWEEKES": [
      {
        "round": 1,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 24,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "SUALAUVIFAALOGO": [
      {
        "round": 1,
        "score": 55,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 80,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "ALEXJOHNSTON": [
      {
        "round": 1,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 49,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "BENHUNT": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 25,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "LINDSAYCOLLINS": [
      {
        "round": 1,
        "score": 44,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 35,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "TEVITATATOLA": [
      {
        "round": 1,
        "score": 42,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 41,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "DAVIDFIFITA": [
      {
        "round": 1,
        "score": 37,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 43,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "COENHESS": [
      {
        "round": 1,
        "score": 38,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 26,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "SIOSIUATAUKEIAHO": [
      {
        "round": 1,
        "score": 7,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "MOSESSULI": [
      {
        "round": 1,
        "score": 32,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 39,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "KOBEHETHERINGTON": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 16,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "SAMMCINTYRE": [
      {
        "round": 1,
        "score": 55,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 47,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "THOMASHAZELTON": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 22,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "SELWYNCOBBO": [
      {
        "round": 1,
        "score": 31,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 29,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "SAMUELHEALEY": [
      {
        "round": 1,
        "score": 17,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 20,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "JACKHOWARTH": [
      {
        "round": 1,
        "score": 40,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 51,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "JACOBSAIFITI": [
      {
        "round": 1,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 41,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "JOJOFIFITA": [
      {
        "round": 1,
        "score": 20,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 33,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "CONNELLYLEMUELU": [
      {
        "round": 1,
        "score": 57,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 49,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "DYLANWALKER": [
      {
        "round": 1,
        "score": 42,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "HARRISONEDWARDS": [
      {
        "round": 2,
        "score": 11,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "JAYDENBRAILEY": [
      {
        "round": 1,
        "score": 13,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 8,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "JAKETRBOJEVIC": [
      {
        "round": 1,
        "score": 28,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 38,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "LACHLANILIAS": [
      {
        "round": 1,
        "score": 31,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 39,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "HAMISHSTEWART": [
      {
        "round": 1,
        "score": 43,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 37,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "CAMPBELLGRAHAM": [
      {
        "round": 1,
        "score": 42,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 42,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "EMREGULER": [
      {
        "round": 1,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "EGANBUTCHER": [
      {
        "round": 1,
        "score": 32,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 37,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "THOMASCANT": [
      {
        "round": 1,
        "score": 14,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      }
    ],
    "DOMINICYOUNG": [
      {
        "round": 1,
        "score": 56,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 51,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "JASONTAUMALOLO": [
      {
        "round": 1,
        "score": 37,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 33,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "TAINETUAUPIKI": [
      {
        "round": 2,
        "score": 38,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "SANDONSMITH": [
      {
        "round": 1,
        "score": 23,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 34,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "BILLYBURNS": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "LUKEBROOKS": [
      {
        "round": 1,
        "score": 30,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 51,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "OREGONKAUFUSI": [
      {
        "round": 1,
        "score": 30,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 25,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "BLAIZETALAGI": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 40,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "DEMITRICVAIMAUGA": [
      {
        "round": 1,
        "score": 16,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 24,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "LUCIANOLEILUA": [
      {
        "round": 1,
        "score": 43,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 42,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "KLESEHAAS": [
      {
        "round": 1,
        "score": 23,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 42,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "KURTCAPEWELL": [
      {
        "round": 1,
        "score": 48,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "MAXFEAGAI": [
      {
        "round": 1,
        "score": 21,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 24,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "WILLWARBRICK": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 58,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "BRONSONXERRI": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "SAMUELHUGHES": [
      {
        "round": 1,
        "score": 19,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "COREYWADDELL": [
      {
        "round": 1,
        "score": 16,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "BLAKESTEEP": [
      {
        "round": 1,
        "score": 26,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "SEBASTIANKRIS": [
      {
        "round": 1,
        "score": 27,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 20,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "WILLIAMKENNEDY": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 24,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "DEINEMARINER": [
      {
        "round": 1,
        "score": 18,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 22,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "JACKCOGGER": [
      {
        "round": 1,
        "score": 16,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 4,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "BRAYDONTRINDALL": [
      {
        "round": 1,
        "score": 69,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 26,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "WILLPENISINI": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      }
    ],
    "SITILITUPOUNIUA": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "JERMAINEMCEWEN": [
      {
        "round": 1,
        "score": 37,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 30,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "AUBLIXTAWHA": [
      {
        "round": 1,
        "score": 8,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 17,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "BILLYSMITH": [
      {
        "round": 1,
        "score": 44,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "CORYPAIX": [
      {
        "round": 1,
        "score": 18,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 24,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "COREYJENSEN": [
      {
        "round": 1,
        "score": 12,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 51,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "RAYSTONE": [
      {
        "round": 2,
        "score": 33,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "SEANKEPPIE": [
      {
        "round": 2,
        "score": 8,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "JACKWIGHTON": [
      {
        "round": 1,
        "score": 37,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 35,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "SUNIATURUVA": [
      {
        "round": 2,
        "score": 46,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "TYRANWISHART": [
      {
        "round": 1,
        "score": 42,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 17,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "FONUAPOLE": [
      {
        "round": 2,
        "score": 17,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "SALESIFOKETI": [
      {
        "round": 1,
        "score": 7,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "ADAMPOMPEY": [
      {
        "round": 1,
        "score": 39,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 18,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "KURTMANN": [
      {
        "round": 1,
        "score": 33,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "MARCELOMONTOYA": [
      {
        "round": 1,
        "score": 42,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "JERALSKELTON": [
      {
        "round": 2,
        "score": 59,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "ETHANSANDERS": [
      {
        "round": 1,
        "score": 58,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 34,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "JOSHKERR": [
      {
        "round": 1,
        "score": 24,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 29,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "MATTHEWLODGE": [
      {
        "round": 1,
        "score": 19,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 24,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "BAILEYHAYWARD": [
      {
        "round": 1,
        "score": 46,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "SIMISASAGI": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 65,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "ORYNKEELEY": [
      {
        "round": 1,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 27,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "SAMUELSTONESTREET": [
      {
        "round": 1,
        "score": 30,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 36,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "ATAMARIOTA": [
      {
        "round": 1,
        "score": 27,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 28,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "BRONSONGARLICK": [
      {
        "round": 1,
        "score": 26,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 9,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "ALECMACDONALD": [
      {
        "round": 1,
        "score": 0,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      }
    ],
    "SEANRUSSELL": [
      {
        "round": 1,
        "score": 49,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 25,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "ALILEIATAUA": [
      {
        "round": 1,
        "score": 14,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 50,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "DAVVYMOALE": [
      {
        "round": 1,
        "score": 14,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      }
    ],
    "JAEMANSALMON": [
      {
        "round": 1,
        "score": 46,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "SIONEFAINU": [
      {
        "round": 2,
        "score": 27,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "THOMASMIKAELE": [
      {
        "round": 1,
        "score": 17,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "FELISEKAUFUSI": [
      {
        "round": 1,
        "score": 24,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 30,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "NATHANBROWN": [
      {
        "round": 1,
        "score": 8,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 10,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "CODYWALKER": [
      {
        "round": 1,
        "score": 53,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 20,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "JASONSAAB": [
      {
        "round": 1,
        "score": 20,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 2,
        "score": 4,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "JESSECOLQUHOUN": [
      {
        "round": 1,
        "score": 40,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 53,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "TOBYRUDOLF": [
      {
        "round": 1,
        "score": 19,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "SIOSIFATALAKAI": [
      {
        "round": 1,
        "score": 16,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 2,
        "score": 14,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "TANNERSTOWERSSMITH": [
      {
        "round": 1,
        "score": 19,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 27,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "BRADSCHNEIDER": [
      {
        "round": 1,
        "score": 37,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 34,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "KEANOKINI": [
      {
        "round": 1,
        "score": 39,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 52,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "JACOBLABAN": [
      {
        "round": 1,
        "score": 12,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 35,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "JACKGOSIEWSKI": [
      {
        "round": 1,
        "score": 31,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 5,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "BRADENHAMLINUELE": [
      {
        "round": 1,
        "score": 13,
        "opponent": "Titans",
        "team": "Sharks",
        "isHome": true
      }
    ],
    "HARRISONGRAHAM": [
      {
        "round": 2,
        "score": 22,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "BENAIAHIOELU": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 21,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "HAMESELE": [
      {
        "round": 1,
        "score": 30,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 33,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "TUKIMIHIASIMPKINS": [
      {
        "round": 1,
        "score": 29,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      }
    ],
    "JOASHPAPALII": [
      {
        "round": 1,
        "score": 1,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      }
    ],
    "XAVIERSAVAGE": [
      {
        "round": 1,
        "score": 50,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 35,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "JORDANSAMRANI": [
      {
        "round": 2,
        "score": 17,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "JOECHAN": [
      {
        "round": 1,
        "score": 69,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 44,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "DALLINWATENEZELEZNIAK": [
      {
        "round": 1,
        "score": 18,
        "opponent": "Roosters",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 2,
        "score": 40,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "MATTDOOREY": [
      {
        "round": 1,
        "score": 12,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 15,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "SAMTUIVAITI": [
      {
        "round": 2,
        "score": 24,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "LUKELAULILII": [
      {
        "round": 2,
        "score": 58,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "ATIVALULISATI": [
      {
        "round": 1,
        "score": 74,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 67,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "LUKESOMMERTON": [
      {
        "round": 2,
        "score": 12,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "KURTISMORRIN": [
      {
        "round": 1,
        "score": 19,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "KAIODONNELL": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 17,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "JAYDENSULLIVAN": [
      {
        "round": 1,
        "score": 16,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 24,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "NOAHMARTIN": [
      {
        "round": 1,
        "score": 80,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 2,
        "score": 60,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "JACKHETHERINGTON": [
      {
        "round": 2,
        "score": 21,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "MOSESLEO": [
      {
        "round": 1,
        "score": 68,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 28,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "ROYCEHUNT": [
      {
        "round": 2,
        "score": 13,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "TALLYNDASILVA": [
      {
        "round": 1,
        "score": 23,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 10,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "CAMERONMURRAY": [
      {
        "round": 1,
        "score": 55,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 2,
        "score": 54,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "JONAHPEZET": [
      {
        "round": 1,
        "score": 14,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 2,
        "score": 35,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      }
    ],
    "HOHEPAPURU": [
      {
        "round": 2,
        "score": 14,
        "opponent": "Panthers",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "DANIELATKINSON": [
      {
        "round": 1,
        "score": 59,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 44,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "ARAMAHAU": [
      {
        "round": 1,
        "score": 39,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 35,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "TUIKAMIKAMICA": [
      {
        "round": 1,
        "score": 26,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 30,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "SONILUKE": [
      {
        "round": 2,
        "score": 14,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "FETALAIGAPAUGA": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Warriors",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 2,
        "score": 28,
        "opponent": "Rabbitohs",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "PASAMISAULO": [
      {
        "round": 1,
        "score": 21,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 2,
        "score": 27,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "KALANIGOING": [
      {
        "round": 1,
        "score": 9,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 15,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "BRANDONWAKEHAM": [
      {
        "round": 2,
        "score": 19,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "THOMASFLEGLER": [
      {
        "round": 1,
        "score": 46,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 20,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "BENTALTY": [
      {
        "round": 1,
        "score": 19,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 2,
        "score": 13,
        "opponent": "Eels",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "MORGANKNOWLES": [
      {
        "round": 1,
        "score": 46,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 2,
        "score": 32,
        "opponent": "Titans",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "BRENTWOOLF": [
      {
        "round": 1,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "SETUTU": [
      {
        "round": 1,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 16,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "HEILUMLUKI": [
      {
        "round": 1,
        "score": 68,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 59,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "TOMCHESTER": [
      {
        "round": 1,
        "score": 47,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 2,
        "score": 67,
        "opponent": "Tigers",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "PAULBRYAN": [
      {
        "round": 2,
        "score": 15,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "ASHTONWARD": [
      {
        "round": 1,
        "score": 14,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "PRESTONCONN": [
      {
        "round": 1,
        "score": 5,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      }
    ],
    "RYANCOUCHMAN": [
      {
        "round": 1,
        "score": 58,
        "opponent": "Bulldogs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 2,
        "score": 59,
        "opponent": "Storm",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "FLETCHERHUNT": [
      {
        "round": 2,
        "score": 51,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      }
    ],
    "BILLYPHILLIPS": [
      {
        "round": 1,
        "score": 25,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 2,
        "score": 32,
        "opponent": "Sharks",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "ANGUSHINCHEY": [
      {
        "round": 2,
        "score": 5,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "COOPERCLARKE": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 23,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      }
    ],
    "SIALETILIFAEAMANI": [
      {
        "round": 1,
        "score": 31,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 33,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ],
    "COOPERBAI": [
      {
        "round": 1,
        "score": 18,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 2,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Titans",
        "isHome": false
      }
    ]
  }
};
});
