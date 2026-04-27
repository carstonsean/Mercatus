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
    "generatedAt": "2026-04-27T22:42:20.610Z",
    "season": 2026,
    "roundsIncluded": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27
    ],
    "players": 400
  },
  "playerStatsByName": {
    "PAYNEHAAS": {
      "playerName": "Payne Haas",
      "key": "PAYNEHAAS",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 779000,
      "priceImpliedProjection": 60.9,
      "seasonAverage": 55,
      "last3Average": 44,
      "lastGameScore": 24,
      "scoreVolatility": 17.1,
      "homeAverage": 65.3,
      "awayAverage": 44.7
    },
    "TERRELLMAY": {
      "playerName": "Terrell May",
      "key": "TERRELLMAY",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 871000,
      "priceImpliedProjection": 68,
      "seasonAverage": 67.1,
      "last3Average": 73.7,
      "lastGameScore": 65,
      "scoreVolatility": 9.8,
      "homeAverage": 70.8,
      "awayAverage": 62.3
    },
    "JOERODDY": {
      "playerName": "Joe Roddy",
      "key": "JOERODDY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "currentPrice": 254000,
      "priceImpliedProjection": 19.8,
      "seasonAverage": 22.5,
      "last3Average": 22.5,
      "lastGameScore": 24,
      "scoreVolatility": 1.5,
      "homeAverage": 21,
      "awayAverage": 24
    },
    "NATHANCLEARY": {
      "playerName": "Nathan Cleary",
      "key": "NATHANCLEARY",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 917000,
      "priceImpliedProjection": 71.6,
      "seasonAverage": 73.5,
      "last3Average": 74.7,
      "lastGameScore": 85,
      "scoreVolatility": 16.2,
      "homeAverage": 82.3,
      "awayAverage": 68.2
    },
    "HERBIEFARNWORTH": {
      "playerName": "Herbie Farnworth",
      "key": "HERBIEFARNWORTH",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 884000,
      "priceImpliedProjection": 69.1,
      "seasonAverage": 69.7,
      "last3Average": 81,
      "lastGameScore": 56,
      "scoreVolatility": 17.8,
      "homeAverage": 77,
      "awayAverage": 60
    },
    "HUDSONYOUNG": {
      "playerName": "Hudson Young",
      "key": "HUDSONYOUNG",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 745000,
      "priceImpliedProjection": 58.2,
      "seasonAverage": 59.1,
      "last3Average": 64,
      "lastGameScore": 70,
      "scoreVolatility": 13.5,
      "homeAverage": 63,
      "awayAverage": 56.3
    },
    "JAYDENCAMPBELL": {
      "playerName": "Jayden Campbell",
      "key": "JAYDENCAMPBELL",
      "primaryPosition": "Halfback",
      "gamesPlayed": 5,
      "currentPrice": 818000,
      "priceImpliedProjection": 63.9,
      "seasonAverage": 65.2,
      "last3Average": 59,
      "lastGameScore": 35,
      "scoreVolatility": 19.1,
      "homeAverage": 62,
      "awayAverage": 67.3
    },
    "ISAAHYEO": {
      "playerName": "Isaah Yeo",
      "key": "ISAAHYEO",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 734000,
      "priceImpliedProjection": 57.3,
      "seasonAverage": 58.3,
      "last3Average": 62,
      "lastGameScore": 65,
      "scoreVolatility": 5.9,
      "homeAverage": 54.3,
      "awayAverage": 60.6
    },
    "ERINCLARK": {
      "playerName": "Erin Clark",
      "key": "ERINCLARK",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 649000,
      "priceImpliedProjection": 50.7,
      "seasonAverage": 50.9,
      "last3Average": 56.7,
      "lastGameScore": 66,
      "scoreVolatility": 13.1,
      "homeAverage": 52.4,
      "awayAverage": 48.3
    },
    "JOSEPHTAPINE": {
      "playerName": "Joseph Tapine",
      "key": "JOSEPHTAPINE",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 640000,
      "priceImpliedProjection": 50,
      "seasonAverage": 47.9,
      "last3Average": 56.3,
      "lastGameScore": 54,
      "scoreVolatility": 9.8,
      "homeAverage": 50.7,
      "awayAverage": 46.2
    },
    "LATRELLMITCHELL": {
      "playerName": "Latrell Mitchell",
      "key": "LATRELLMITCHELL",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 873000,
      "priceImpliedProjection": 68.2,
      "seasonAverage": 72.9,
      "last3Average": 85.7,
      "lastGameScore": 87,
      "scoreVolatility": 16.2,
      "homeAverage": 73,
      "awayAverage": 72.7
    },
    "DYLANLUCAS": {
      "playerName": "Dylan Lucas",
      "key": "DYLANLUCAS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 6,
      "currentPrice": 702000,
      "priceImpliedProjection": 54.8,
      "seasonAverage": 53.7,
      "last3Average": 50.3,
      "lastGameScore": 38,
      "scoreVolatility": 8.1,
      "homeAverage": 56.7,
      "awayAverage": 50.7
    },
    "JACOBPRESTON": {
      "playerName": "Jacob Preston",
      "key": "JACOBPRESTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 671000,
      "priceImpliedProjection": 52.4,
      "seasonAverage": 52.9,
      "last3Average": 55.3,
      "lastGameScore": 42,
      "scoreVolatility": 16.7,
      "homeAverage": 61.7,
      "awayAverage": 46.3
    },
    "FLETCHERSHARPE": {
      "playerName": "Fletcher Sharpe",
      "key": "FLETCHERSHARPE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 6,
      "currentPrice": 496000,
      "priceImpliedProjection": 38.8,
      "seasonAverage": 32.7,
      "last3Average": 23.7,
      "lastGameScore": 19,
      "scoreVolatility": 10.2,
      "homeAverage": 36.3,
      "awayAverage": 29
    },
    "ISAIYAKATOA": {
      "playerName": "Isaiya Katoa",
      "key": "ISAIYAKATOA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 608000,
      "priceImpliedProjection": 47.5,
      "seasonAverage": 45.7,
      "last3Average": 44.3,
      "lastGameScore": 34,
      "scoreVolatility": 7.3,
      "homeAverage": 47,
      "awayAverage": 44
    },
    "KEAONKOLOAMATANGI": {
      "playerName": "Keaon Koloamatangi",
      "key": "KEAONKOLOAMATANGI",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 570000,
      "priceImpliedProjection": 44.5,
      "seasonAverage": 43.3,
      "last3Average": 39.3,
      "lastGameScore": 41,
      "scoreVolatility": 5.4,
      "homeAverage": 41.3,
      "awayAverage": 46
    },
    "NICHOLASHYNES": {
      "playerName": "Nicholas Hynes",
      "key": "NICHOLASHYNES",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 756000,
      "priceImpliedProjection": 59.1,
      "seasonAverage": 61.3,
      "last3Average": 58,
      "lastGameScore": 63,
      "scoreVolatility": 17.6,
      "homeAverage": 64.5,
      "awayAverage": 57
    },
    "TRAIFULLER": {
      "playerName": "Trai Fuller",
      "key": "TRAIFULLER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 477000,
      "priceImpliedProjection": 37.3,
      "seasonAverage": 24,
      "last3Average": 24,
      "lastGameScore": 45,
      "scoreVolatility": 21,
      "homeAverage": 3,
      "awayAverage": 45
    },
    "KAIPEARCEPAUL": {
      "playerName": "Kai Pearce-Paul",
      "key": "KAIPEARCEPAUL",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 740000,
      "priceImpliedProjection": 57.8,
      "seasonAverage": 57.9,
      "last3Average": 46,
      "lastGameScore": 30,
      "scoreVolatility": 15.4,
      "homeAverage": 49.8,
      "awayAverage": 68.7
    },
    "TOBYCOUCHMAN": {
      "playerName": "Toby Couchman",
      "key": "TOBYCOUCHMAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 699000,
      "priceImpliedProjection": 54.6,
      "seasonAverage": 55,
      "last3Average": 68.7,
      "lastGameScore": 61,
      "scoreVolatility": 15.7,
      "homeAverage": 53.8,
      "awayAverage": 56.7
    },
    "JAMALFOGARTY": {
      "playerName": "Jamal Fogarty",
      "key": "JAMALFOGARTY",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 720000,
      "priceImpliedProjection": 56.3,
      "seasonAverage": 57.7,
      "last3Average": 72,
      "lastGameScore": 78,
      "scoreVolatility": 13,
      "homeAverage": 54.8,
      "awayAverage": 61.7
    },
    "BLAYKEBRAILEY": {
      "playerName": "Blayke Brailey",
      "key": "BLAYKEBRAILEY",
      "primaryPosition": null,
      "gamesPlayed": 7,
      "currentPrice": 748000,
      "priceImpliedProjection": 58.4,
      "seasonAverage": 61.3,
      "last3Average": 63,
      "lastGameScore": 71,
      "scoreVolatility": 10.1,
      "homeAverage": 63.8,
      "awayAverage": 58
    },
    "JAMESTEDESCO": {
      "playerName": "James Tedesco",
      "key": "JAMESTEDESCO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 721000,
      "priceImpliedProjection": 56.3,
      "seasonAverage": 58.7,
      "last3Average": 75.7,
      "lastGameScore": 70,
      "scoreVolatility": 20.6,
      "homeAverage": 64.7,
      "awayAverage": 54.3
    },
    "PATRICKCARRIGAN": {
      "playerName": "Patrick Carrigan",
      "key": "PATRICKCARRIGAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 719000,
      "priceImpliedProjection": 56.2,
      "seasonAverage": 57.3,
      "last3Average": 63,
      "lastGameScore": 62,
      "scoreVolatility": 6.5,
      "homeAverage": 58,
      "awayAverage": 56
    },
    "BEAUFERMOR": {
      "playerName": "Beau Fermor",
      "key": "BEAUFERMOR",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 587000,
      "priceImpliedProjection": 45.9,
      "seasonAverage": 45.1,
      "last3Average": 47.3,
      "lastGameScore": 43,
      "scoreVolatility": 7,
      "homeAverage": 42.5,
      "awayAverage": 46.2
    },
    "LINDSAYSMITH": {
      "playerName": "Lindsay Smith",
      "key": "LINDSAYSMITH",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 461000,
      "priceImpliedProjection": 36,
      "seasonAverage": 33.8,
      "last3Average": 30.3,
      "lastGameScore": 24,
      "scoreVolatility": 5.4,
      "homeAverage": 35.3,
      "awayAverage": 32.8
    },
    "TINOFAASUAMALEAUI": {
      "playerName": "Tino Fa'asuamaleaui",
      "key": "TINOFAASUAMALEAUI",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 509000,
      "priceImpliedProjection": 39.8,
      "seasonAverage": 37.4,
      "last3Average": 43.3,
      "lastGameScore": 52,
      "scoreVolatility": 6.7,
      "homeAverage": 37,
      "awayAverage": 37.6
    },
    "DALYCHERRYEVANS": {
      "playerName": "Daly Cherry-Evans",
      "key": "DALYCHERRYEVANS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 629000,
      "priceImpliedProjection": 49.1,
      "seasonAverage": 47.1,
      "last3Average": 46,
      "lastGameScore": 33,
      "scoreVolatility": 13.2,
      "homeAverage": 53.3,
      "awayAverage": 42.5
    },
    "LUKEMETCALF": {
      "playerName": "Luke Metcalf",
      "key": "LUKEMETCALF",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "currentPrice": 581000,
      "priceImpliedProjection": 45.4,
      "seasonAverage": 24.5,
      "last3Average": 24.5,
      "lastGameScore": 29,
      "scoreVolatility": 4.5,
      "homeAverage": 20,
      "awayAverage": 29
    },
    "COREYHORSBURGH": {
      "playerName": "Corey Horsburgh",
      "key": "COREYHORSBURGH",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 564000,
      "priceImpliedProjection": 44.1,
      "seasonAverage": 45.3,
      "last3Average": 47.7,
      "lastGameScore": 44,
      "scoreVolatility": 13.1,
      "homeAverage": 49,
      "awayAverage": 43
    },
    "JACOBKIRAZ": {
      "playerName": "Jacob Kiraz",
      "key": "JACOBKIRAZ",
      "primaryPosition": "Centre",
      "gamesPlayed": 6,
      "currentPrice": 514000,
      "priceImpliedProjection": 40.2,
      "seasonAverage": 36.5,
      "last3Average": 30.7,
      "lastGameScore": 26,
      "scoreVolatility": 14.6,
      "homeAverage": 47,
      "awayAverage": 26
    },
    "ADDINFONUABLAKE": {
      "playerName": "Addin Fonua-Blake",
      "key": "ADDINFONUABLAKE",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 581000,
      "priceImpliedProjection": 45.4,
      "seasonAverage": 45.3,
      "last3Average": 44.7,
      "lastGameScore": 51,
      "scoreVolatility": 5.7,
      "homeAverage": 46.3,
      "awayAverage": 44
    },
    "REECEWALSH": {
      "playerName": "Reece Walsh",
      "key": "REECEWALSH",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 669000,
      "priceImpliedProjection": 52.3,
      "seasonAverage": 51.4,
      "last3Average": 54.3,
      "lastGameScore": 31,
      "scoreVolatility": 21.7,
      "homeAverage": 58.7,
      "awayAverage": 40.5
    },
    "ZACHOSKING": {
      "playerName": "Zac Hosking",
      "key": "ZACHOSKING",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 530000,
      "priceImpliedProjection": 41.4,
      "seasonAverage": 40.5,
      "last3Average": 45.3,
      "lastGameScore": 60,
      "scoreVolatility": 9,
      "homeAverage": 35,
      "awayAverage": 43.8
    },
    "CAMERONMCINNES": {
      "playerName": "Cameron McInnes",
      "key": "CAMERONMCINNES",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 609000,
      "priceImpliedProjection": 47.6,
      "seasonAverage": 20,
      "last3Average": 20,
      "lastGameScore": 20,
      "scoreVolatility": 0,
      "homeAverage": 20,
      "awayAverage": 20
    },
    "HARRYGRANT": {
      "playerName": "Harry Grant",
      "key": "HARRYGRANT",
      "primaryPosition": null,
      "gamesPlayed": 8,
      "currentPrice": 628000,
      "priceImpliedProjection": 49.1,
      "seasonAverage": 52.3,
      "last3Average": 51,
      "lastGameScore": 56,
      "scoreVolatility": 11,
      "homeAverage": 50.8,
      "awayAverage": 53.8
    },
    "VALENTINEHOLMES": {
      "playerName": "Valentine Holmes",
      "key": "VALENTINEHOLMES",
      "primaryPosition": "Centre",
      "gamesPlayed": 8,
      "currentPrice": 452000,
      "priceImpliedProjection": 35.3,
      "seasonAverage": 34.6,
      "last3Average": 27.7,
      "lastGameScore": 30,
      "scoreVolatility": 12.9,
      "homeAverage": 35.5,
      "awayAverage": 33.8
    },
    "MAXKING": {
      "playerName": "Max King",
      "key": "MAXKING",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 603000,
      "priceImpliedProjection": 47.1,
      "seasonAverage": 47.2,
      "last3Average": 46.3,
      "lastGameScore": 60,
      "scoreVolatility": 8.5,
      "homeAverage": 50.3,
      "awayAverage": 42.5
    },
    "ADAMREYNOLDS": {
      "playerName": "Adam Reynolds",
      "key": "ADAMREYNOLDS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 6,
      "currentPrice": 562000,
      "priceImpliedProjection": 43.9,
      "seasonAverage": 42.8,
      "last3Average": 44.3,
      "lastGameScore": 57,
      "scoreVolatility": 20.2,
      "homeAverage": 45.3,
      "awayAverage": 38
    },
    "CAMERONMUNSTER": {
      "playerName": "Cameron Munster",
      "key": "CAMERONMUNSTER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 554000,
      "priceImpliedProjection": 43.3,
      "seasonAverage": 45.1,
      "last3Average": 35.7,
      "lastGameScore": 36,
      "scoreVolatility": 11.5,
      "homeAverage": 49.3,
      "awayAverage": 41
    },
    "ANGUSCRICHTON": {
      "playerName": "Angus Crichton",
      "key": "ANGUSCRICHTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 554000,
      "priceImpliedProjection": 43.3,
      "seasonAverage": 42.1,
      "last3Average": 44,
      "lastGameScore": 39,
      "scoreVolatility": 3.3,
      "homeAverage": 42.7,
      "awayAverage": 41.8
    },
    "NAUFAHUWHYTE": {
      "playerName": "Naufahu Whyte",
      "key": "NAUFAHUWHYTE",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 545000,
      "priceImpliedProjection": 42.6,
      "seasonAverage": 40,
      "last3Average": 32,
      "lastGameScore": 25,
      "scoreVolatility": 11.8,
      "homeAverage": 37,
      "awayAverage": 42.3
    },
    "DAVIDFALE": {
      "playerName": "David Fale",
      "key": "DAVIDFALE",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "currentPrice": 265000,
      "priceImpliedProjection": 20.7,
      "seasonAverage": 27,
      "last3Average": 27,
      "lastGameScore": 33,
      "scoreVolatility": 6,
      "homeAverage": 21,
      "awayAverage": 33
    },
    "SCOTTDRINKWATER": {
      "playerName": "Scott Drinkwater",
      "key": "SCOTTDRINKWATER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 682000,
      "priceImpliedProjection": 53.3,
      "seasonAverage": 51.6,
      "last3Average": 60,
      "lastGameScore": 64,
      "scoreVolatility": 18.2,
      "homeAverage": 55.8,
      "awayAverage": 47.5
    },
    "JACKWILLIAMS": {
      "playerName": "Jack Williams",
      "key": "JACKWILLIAMS",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 621000,
      "priceImpliedProjection": 48.5,
      "seasonAverage": 49.1,
      "last3Average": 48.7,
      "lastGameScore": 36,
      "scoreVolatility": 7.8,
      "homeAverage": 53.5,
      "awayAverage": 44.8
    },
    "JAYDNSUA": {
      "playerName": "Jaydn Su'A",
      "key": "JAYDNSUA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 653000,
      "priceImpliedProjection": 51,
      "seasonAverage": 51.9,
      "last3Average": 40.3,
      "lastGameScore": 32,
      "scoreVolatility": 13.2,
      "homeAverage": 48.7,
      "awayAverage": 54.3
    },
    "DAMIENCOOK": {
      "playerName": "Damien Cook",
      "key": "DAMIENCOOK",
      "primaryPosition": null,
      "gamesPlayed": 8,
      "currentPrice": 640000,
      "priceImpliedProjection": 50,
      "seasonAverage": 53.9,
      "last3Average": 50.3,
      "lastGameScore": 49,
      "scoreVolatility": 19.5,
      "homeAverage": 42.8,
      "awayAverage": 65
    },
    "VILIAMEKIKAU": {
      "playerName": "Viliame Kikau",
      "key": "VILIAMEKIKAU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 547000,
      "priceImpliedProjection": 42.7,
      "seasonAverage": 41.9,
      "last3Average": 37.3,
      "lastGameScore": 8,
      "scoreVolatility": 21.2,
      "homeAverage": 60.7,
      "awayAverage": 27.8
    },
    "TOMDEARDEN": {
      "playerName": "Tom Dearden",
      "key": "TOMDEARDEN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 696000,
      "priceImpliedProjection": 54.4,
      "seasonAverage": 55,
      "last3Average": 64.3,
      "lastGameScore": 75,
      "scoreVolatility": 13.6,
      "homeAverage": 55.3,
      "awayAverage": 54.8
    },
    "KLIRO": {
      "playerName": "KL Iro",
      "key": "KLIRO",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 556000,
      "priceImpliedProjection": 43.4,
      "seasonAverage": 43.1,
      "last3Average": 54,
      "lastGameScore": 68,
      "scoreVolatility": 13,
      "homeAverage": 43.5,
      "awayAverage": 42.7
    },
    "JACKSONFORD": {
      "playerName": "Jackson Ford",
      "key": "JACKSONFORD",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 812000,
      "priceImpliedProjection": 63.4,
      "seasonAverage": 67.4,
      "last3Average": 80.3,
      "lastGameScore": 87,
      "scoreVolatility": 16,
      "homeAverage": 67.6,
      "awayAverage": 67
    },
    "CONNORWATSON": {
      "playerName": "Connor Watson",
      "key": "CONNORWATSON",
      "primaryPosition": null,
      "gamesPlayed": 7,
      "currentPrice": 498000,
      "priceImpliedProjection": 38.9,
      "seasonAverage": 34,
      "last3Average": 25.7,
      "lastGameScore": 13,
      "scoreVolatility": 18.2,
      "homeAverage": 37.7,
      "awayAverage": 31.3
    },
    "TRENTLOIERO": {
      "playerName": "Trent Loiero",
      "key": "TRENTLOIERO",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 589000,
      "priceImpliedProjection": 46,
      "seasonAverage": 46,
      "last3Average": 42,
      "lastGameScore": 34,
      "scoreVolatility": 7.8,
      "homeAverage": 43,
      "awayAverage": 49
    },
    "HAMISOTABUAIFIDOW": {
      "playerName": "Hamiso Tabuai-Fidow",
      "key": "HAMISOTABUAIFIDOW",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 649000,
      "priceImpliedProjection": 50.7,
      "seasonAverage": 51.7,
      "last3Average": 55,
      "lastGameScore": 29,
      "scoreVolatility": 16.2,
      "homeAverage": 64.8,
      "awayAverage": 34.3
    },
    "JACKDEBELIN": {
      "playerName": "Jack De Belin",
      "key": "JACKDEBELIN",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 472000,
      "priceImpliedProjection": 36.9,
      "seasonAverage": 32.2,
      "last3Average": 29,
      "lastGameScore": 37,
      "scoreVolatility": 9.6,
      "homeAverage": 25,
      "awayAverage": 37
    },
    "DYLANEDWARDS": {
      "playerName": "Dylan Edwards",
      "key": "DYLANEDWARDS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 654000,
      "priceImpliedProjection": 51.1,
      "seasonAverage": 54.5,
      "last3Average": 59,
      "lastGameScore": 92,
      "scoreVolatility": 20.8,
      "homeAverage": 43.3,
      "awayAverage": 61.2
    },
    "MARKNAWAQANITAWASE": {
      "playerName": "Mark Nawaqanitawase",
      "key": "MARKNAWAQANITAWASE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 596000,
      "priceImpliedProjection": 46.6,
      "seasonAverage": 46.6,
      "last3Average": 46.7,
      "lastGameScore": 51,
      "scoreVolatility": 10.3,
      "homeAverage": 42,
      "awayAverage": 50
    },
    "JORDANRIKI": {
      "playerName": "Jordan Riki",
      "key": "JORDANRIKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 700000,
      "priceImpliedProjection": 54.7,
      "seasonAverage": 55.6,
      "last3Average": 60,
      "lastGameScore": 62,
      "scoreVolatility": 13,
      "homeAverage": 54,
      "awayAverage": 58.3
    },
    "EUANAITKEN": {
      "playerName": "Euan Aitken",
      "key": "EUANAITKEN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 591000,
      "priceImpliedProjection": 46.2,
      "seasonAverage": 45.3,
      "last3Average": 45.3,
      "lastGameScore": 53,
      "scoreVolatility": 8.8,
      "homeAverage": 45.3,
      "awayAverage": 45.3
    },
    "TAYLANMAY": {
      "playerName": "Taylan May",
      "key": "TAYLANMAY",
      "primaryPosition": "Centre",
      "gamesPlayed": 3,
      "currentPrice": 499000,
      "priceImpliedProjection": 39,
      "seasonAverage": 30.7,
      "last3Average": 30.7,
      "lastGameScore": 52,
      "scoreVolatility": 19.4,
      "homeAverage": 30.7,
      "awayAverage": 30.7
    },
    "LEOTHOMPSON": {
      "playerName": "Leo Thompson",
      "key": "LEOTHOMPSON",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 564000,
      "priceImpliedProjection": 44.1,
      "seasonAverage": 36.5,
      "last3Average": 36.5,
      "lastGameScore": 47,
      "scoreVolatility": 10.5,
      "homeAverage": 36.5,
      "awayAverage": 36.5
    },
    "HAUMOLEOLAKAUATU": {
      "playerName": "Haumole Olakau'atu",
      "key": "HAUMOLEOLAKAUATU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 683000,
      "priceImpliedProjection": 53.4,
      "seasonAverage": 55.7,
      "last3Average": 56.7,
      "lastGameScore": 70,
      "scoreVolatility": 10.3,
      "homeAverage": 54.8,
      "awayAverage": 57
    },
    "ISAIAHPAPALII": {
      "playerName": "Isaiah Papali'i",
      "key": "ISAIAHPAPALII",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 615000,
      "priceImpliedProjection": 48,
      "seasonAverage": 50,
      "last3Average": 47.3,
      "lastGameScore": 39,
      "scoreVolatility": 11.4,
      "homeAverage": 52.7,
      "awayAverage": 48.4
    },
    "SAMVERRILLS": {
      "playerName": "Sam Verrills",
      "key": "SAMVERRILLS",
      "primaryPosition": null,
      "gamesPlayed": 7,
      "currentPrice": 451000,
      "priceImpliedProjection": 35.2,
      "seasonAverage": 33.1,
      "last3Average": 23.7,
      "lastGameScore": 23,
      "scoreVolatility": 10.4,
      "homeAverage": 35,
      "awayAverage": 32.4
    },
    "MOALAGRAHAMTAUFA": {
      "playerName": "Moala Graham-Taufa",
      "key": "MOALAGRAHAMTAUFA",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "currentPrice": 240000,
      "priceImpliedProjection": 18.8,
      "seasonAverage": 11,
      "last3Average": 11,
      "lastGameScore": 11,
      "scoreVolatility": 0,
      "homeAverage": 11,
      "awayAverage": 11
    },
    "JMAINEHOPGOOD": {
      "playerName": "J'maine Hopgood",
      "key": "JMAINEHOPGOOD",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 560000,
      "priceImpliedProjection": 43.8,
      "seasonAverage": 29.5,
      "last3Average": 29.5,
      "lastGameScore": 10,
      "scoreVolatility": 19.5,
      "homeAverage": 10,
      "awayAverage": 49
    },
    "JUNIORPAULO": {
      "playerName": "Junior Paulo",
      "key": "JUNIORPAULO",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 462000,
      "priceImpliedProjection": 36.1,
      "seasonAverage": 35.4,
      "last3Average": 34.3,
      "lastGameScore": 38,
      "scoreVolatility": 5.8,
      "homeAverage": 37,
      "awayAverage": 33.8
    },
    "TREYMOONEY": {
      "playerName": "Trey Mooney",
      "key": "TREYMOONEY",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 542000,
      "priceImpliedProjection": 42.3,
      "seasonAverage": 45.4,
      "last3Average": 42.7,
      "lastGameScore": 26,
      "scoreVolatility": 13.2,
      "homeAverage": 40.8,
      "awayAverage": 51.7
    },
    "MITCHELLMOSES": {
      "playerName": "Mitchell Moses",
      "key": "MITCHELLMOSES",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 593000,
      "priceImpliedProjection": 46.3,
      "seasonAverage": 47.6,
      "last3Average": 50.7,
      "lastGameScore": 55,
      "scoreVolatility": 15.1,
      "homeAverage": 54,
      "awayAverage": 41.3
    },
    "MITCHELLBARNETT": {
      "playerName": "Mitchell Barnett",
      "key": "MITCHELLBARNETT",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 506000,
      "priceImpliedProjection": 39.5,
      "seasonAverage": 34.5,
      "last3Average": 34.7,
      "lastGameScore": 28,
      "scoreVolatility": 5.9,
      "homeAverage": 34.7,
      "awayAverage": 34
    },
    "TANAHBOYD": {
      "playerName": "Tanah Boyd",
      "key": "TANAHBOYD",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 719000,
      "priceImpliedProjection": 56.2,
      "seasonAverage": 62.8,
      "last3Average": 53.7,
      "lastGameScore": 45,
      "scoreVolatility": 14.7,
      "homeAverage": 62.8,
      "awayAverage": 62.7
    },
    "WAYDEEGAN": {
      "playerName": "Wayde Egan",
      "key": "WAYDEEGAN",
      "primaryPosition": null,
      "gamesPlayed": 8,
      "currentPrice": 499000,
      "priceImpliedProjection": 39,
      "seasonAverage": 37,
      "last3Average": 33.3,
      "lastGameScore": 35,
      "scoreVolatility": 10.8,
      "homeAverage": 31.2,
      "awayAverage": 46.7
    },
    "BRADMANBEST": {
      "playerName": "Bradman Best",
      "key": "BRADMANBEST",
      "primaryPosition": "Centre",
      "gamesPlayed": 5,
      "currentPrice": 509000,
      "priceImpliedProjection": 39.8,
      "seasonAverage": 35,
      "last3Average": 31.3,
      "lastGameScore": 16,
      "scoreVolatility": 10.9,
      "homeAverage": 28,
      "awayAverage": 45.5
    },
    "APISAIKOROISAU": {
      "playerName": "Apisai Koroisau",
      "key": "APISAIKOROISAU",
      "primaryPosition": null,
      "gamesPlayed": 7,
      "currentPrice": 610000,
      "priceImpliedProjection": 47.7,
      "seasonAverage": 46.7,
      "last3Average": 49,
      "lastGameScore": 34,
      "scoreVolatility": 11.7,
      "homeAverage": 44.5,
      "awayAverage": 49.7
    },
    "JAHROMEHUGHES": {
      "playerName": "Jahrome Hughes",
      "key": "JAHROMEHUGHES",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 645000,
      "priceImpliedProjection": 50.4,
      "seasonAverage": 51.4,
      "last3Average": 46.7,
      "lastGameScore": 37,
      "scoreVolatility": 15.8,
      "homeAverage": 45,
      "awayAverage": 57.8
    },
    "JAMESFISHERHARRIS": {
      "playerName": "James Fisher-Harris",
      "key": "JAMESFISHERHARRIS",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 587000,
      "priceImpliedProjection": 45.9,
      "seasonAverage": 49.1,
      "last3Average": 46.7,
      "lastGameScore": 50,
      "scoreVolatility": 10.4,
      "homeAverage": 53.8,
      "awayAverage": 41.3
    },
    "REECEROBSON": {
      "playerName": "Reece Robson",
      "key": "REECEROBSON",
      "primaryPosition": null,
      "gamesPlayed": 5,
      "currentPrice": 594000,
      "priceImpliedProjection": 46.4,
      "seasonAverage": 49,
      "last3Average": 52,
      "lastGameScore": 58,
      "scoreVolatility": 6.8,
      "homeAverage": 46,
      "awayAverage": 51
    },
    "STEFANOUTOIKAMANU": {
      "playerName": "Stefano Utoikamanu",
      "key": "STEFANOUTOIKAMANU",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 633000,
      "priceImpliedProjection": 49.5,
      "seasonAverage": 52.5,
      "last3Average": 52,
      "lastGameScore": 61,
      "scoreVolatility": 8,
      "homeAverage": 55,
      "awayAverage": 50
    },
    "KOTONISTAGGS": {
      "playerName": "Kotoni Staggs",
      "key": "KOTONISTAGGS",
      "primaryPosition": "Centre",
      "gamesPlayed": 8,
      "currentPrice": 570000,
      "priceImpliedProjection": 44.5,
      "seasonAverage": 43.8,
      "last3Average": 39,
      "lastGameScore": 41,
      "scoreVolatility": 10.8,
      "homeAverage": 42.4,
      "awayAverage": 46
    },
    "TOMSTARLING": {
      "playerName": "Tom Starling",
      "key": "TOMSTARLING",
      "primaryPosition": null,
      "gamesPlayed": 8,
      "currentPrice": 463000,
      "priceImpliedProjection": 36.2,
      "seasonAverage": 35.6,
      "last3Average": 41.3,
      "lastGameScore": 35,
      "scoreVolatility": 9.5,
      "homeAverage": 31,
      "awayAverage": 38.4
    },
    "ALEXTWAL": {
      "playerName": "Alex Twal",
      "key": "ALEXTWAL",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 810000,
      "priceImpliedProjection": 63.3,
      "seasonAverage": 69.1,
      "last3Average": 71,
      "lastGameScore": 93,
      "scoreVolatility": 13.9,
      "homeAverage": 67,
      "awayAverage": 72
    },
    "BRAIDONBURNS": {
      "playerName": "Braidon Burns",
      "key": "BRAIDONBURNS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 562000,
      "priceImpliedProjection": 43.9,
      "seasonAverage": 43.4,
      "last3Average": 38.7,
      "lastGameScore": 34,
      "scoreVolatility": 14.5,
      "homeAverage": 42.3,
      "awayAverage": 45
    },
    "SIUAWONG": {
      "playerName": "Siua Wong",
      "key": "SIUAWONG",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 678000,
      "priceImpliedProjection": 53,
      "seasonAverage": 55.3,
      "last3Average": 61.7,
      "lastGameScore": 67,
      "scoreVolatility": 8.3,
      "homeAverage": 55,
      "awayAverage": 55.5
    },
    "SAMWALKER": {
      "playerName": "Sam Walker",
      "key": "SAMWALKER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 574000,
      "priceImpliedProjection": 44.8,
      "seasonAverage": 46.1,
      "last3Average": 62,
      "lastGameScore": 81,
      "scoreVolatility": 17.3,
      "homeAverage": 40.3,
      "awayAverage": 50.5
    },
    "REUBENCOTTER": {
      "playerName": "Reuben Cotter",
      "key": "REUBENCOTTER",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 533000,
      "priceImpliedProjection": 41.6,
      "seasonAverage": 41,
      "last3Average": 50,
      "lastGameScore": 45,
      "scoreVolatility": 10.7,
      "homeAverage": 37.5,
      "awayAverage": 45.7
    },
    "JOSHCURRAN": {
      "playerName": "Josh Curran",
      "key": "JOSHCURRAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 341000,
      "priceImpliedProjection": 26.6,
      "seasonAverage": 10.3,
      "last3Average": 10,
      "lastGameScore": 6,
      "scoreVolatility": 7.5,
      "homeAverage": 6.5,
      "awayAverage": 14
    },
    "MOEAKIFOTUAIKA": {
      "playerName": "Moeaki Fotuaika",
      "key": "MOEAKIFOTUAIKA",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 433000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 31.6,
      "last3Average": 29.3,
      "lastGameScore": 22,
      "scoreVolatility": 5.4,
      "homeAverage": 32,
      "awayAverage": 31.4
    },
    "JAKECLIFFORD": {
      "playerName": "Jake Clifford",
      "key": "JAKECLIFFORD",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 676000,
      "priceImpliedProjection": 52.8,
      "seasonAverage": 53,
      "last3Average": 44,
      "lastGameScore": 53,
      "scoreVolatility": 17.3,
      "homeAverage": 51,
      "awayAverage": 55
    },
    "GEHAMATSHIBASAKI": {
      "playerName": "Gehamat Shibasaki",
      "key": "GEHAMATSHIBASAKI",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 327000,
      "priceImpliedProjection": 25.5,
      "seasonAverage": 21.3,
      "last3Average": 22.3,
      "lastGameScore": 27,
      "scoreVolatility": 6.9,
      "homeAverage": 20.6,
      "awayAverage": 23
    },
    "MAXPLATH": {
      "playerName": "Max Plath",
      "key": "MAXPLATH",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 564000,
      "priceImpliedProjection": 44.1,
      "seasonAverage": 45.5,
      "last3Average": 53.7,
      "lastGameScore": 56,
      "scoreVolatility": 11.4,
      "homeAverage": 48,
      "awayAverage": 43
    },
    "KURTDONOGHOE": {
      "playerName": "Kurt Donoghoe",
      "key": "KURTDONOGHOE",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "currentPrice": 517000,
      "priceImpliedProjection": 40.4,
      "seasonAverage": 6,
      "last3Average": 6,
      "lastGameScore": 6,
      "scoreVolatility": 0,
      "homeAverage": 6,
      "awayAverage": 6
    },
    "ROGERTUIVASASHECK": {
      "playerName": "Roger Tuivasa-Sheck",
      "key": "ROGERTUIVASASHECK",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 433000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 32.4,
      "last3Average": 44.7,
      "lastGameScore": 32,
      "scoreVolatility": 13.3,
      "homeAverage": 33.4,
      "awayAverage": 30.7
    },
    "ADAMDOUEIHI": {
      "playerName": "Adam Doueihi",
      "key": "ADAMDOUEIHI",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 755000,
      "priceImpliedProjection": 59,
      "seasonAverage": 66.3,
      "last3Average": 71,
      "lastGameScore": 93,
      "scoreVolatility": 16.4,
      "homeAverage": 73.8,
      "awayAverage": 56.3
    },
    "BRITONNIKORA": {
      "playerName": "Briton Nikora",
      "key": "BRITONNIKORA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 6,
      "currentPrice": 457000,
      "priceImpliedProjection": 35.7,
      "seasonAverage": 32.5,
      "last3Average": 15,
      "lastGameScore": 14,
      "scoreVolatility": 19.1,
      "homeAverage": 30.3,
      "awayAverage": 37
    },
    "KITIONEKAUTOGA": {
      "playerName": "Kitione Kautoga",
      "key": "KITIONEKAUTOGA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 6,
      "currentPrice": 571000,
      "priceImpliedProjection": 44.6,
      "seasonAverage": 43.7,
      "last3Average": 44,
      "lastGameScore": 33,
      "scoreVolatility": 12.9,
      "homeAverage": 45,
      "awayAverage": 42.3
    },
    "MATTHEWTIMOKO": {
      "playerName": "Matthew Timoko",
      "key": "MATTHEWTIMOKO",
      "primaryPosition": "Centre",
      "gamesPlayed": 3,
      "currentPrice": 502000,
      "priceImpliedProjection": 39.2,
      "seasonAverage": 34.7,
      "last3Average": 34.7,
      "lastGameScore": 33,
      "scoreVolatility": 11.9,
      "homeAverage": 50,
      "awayAverage": 27
    },
    "ROBERTTOIA": {
      "playerName": "Robert Toia",
      "key": "ROBERTTOIA",
      "primaryPosition": "Centre",
      "gamesPlayed": 6,
      "currentPrice": 562000,
      "priceImpliedProjection": 43.9,
      "seasonAverage": 45.2,
      "last3Average": 41.3,
      "lastGameScore": 54,
      "scoreVolatility": 11.3,
      "homeAverage": 41,
      "awayAverage": 49.3
    },
    "REUBENGARRICK": {
      "playerName": "Reuben Garrick",
      "key": "REUBENGARRICK",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 515000,
      "priceImpliedProjection": 40.2,
      "seasonAverage": 38.4,
      "last3Average": 48.3,
      "lastGameScore": 44,
      "scoreVolatility": 15.5,
      "homeAverage": 31.3,
      "awayAverage": 48
    },
    "TALLISDUNCAN": {
      "playerName": "Tallis Duncan",
      "key": "TALLISDUNCAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 636000,
      "priceImpliedProjection": 49.7,
      "seasonAverage": 52.4,
      "last3Average": 64.7,
      "lastGameScore": 91,
      "scoreVolatility": 19.9,
      "homeAverage": 52,
      "awayAverage": 53
    },
    "MATTBURTON": {
      "playerName": "Matt Burton",
      "key": "MATTBURTON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 633000,
      "priceImpliedProjection": 49.5,
      "seasonAverage": 52.6,
      "last3Average": 46,
      "lastGameScore": 44,
      "scoreVolatility": 11.6,
      "homeAverage": 51,
      "awayAverage": 53.8
    },
    "SHAWNBLORE": {
      "playerName": "Shawn Blore",
      "key": "SHAWNBLORE",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "currentPrice": 470000,
      "priceImpliedProjection": 36.7,
      "seasonAverage": 19,
      "last3Average": 19,
      "lastGameScore": 24,
      "scoreVolatility": 5,
      "homeAverage": 24,
      "awayAverage": 14
    },
    "AJBRIMSON": {
      "playerName": "AJ Brimson",
      "key": "AJBRIMSON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 6,
      "currentPrice": 389000,
      "priceImpliedProjection": 30.4,
      "seasonAverage": 25.7,
      "last3Average": 19.7,
      "lastGameScore": 20,
      "scoreVolatility": 9.4,
      "homeAverage": 19.5,
      "awayAverage": 28.8
    },
    "PETERMAMOUZELOS": {
      "playerName": "Peter Mamouzelos",
      "key": "PETERMAMOUZELOS",
      "primaryPosition": null,
      "gamesPlayed": 6,
      "currentPrice": 422000,
      "priceImpliedProjection": 33,
      "seasonAverage": 29,
      "last3Average": 24.7,
      "lastGameScore": 7,
      "scoreVolatility": 10.3,
      "homeAverage": 26.3,
      "awayAverage": 34.5
    },
    "TEIGWILTON": {
      "playerName": "Teig Wilton",
      "key": "TEIGWILTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 5,
      "currentPrice": 465000,
      "priceImpliedProjection": 36.3,
      "seasonAverage": 33,
      "last3Average": 36,
      "lastGameScore": 26,
      "scoreVolatility": 12.1,
      "homeAverage": 32.7,
      "awayAverage": 33.5
    },
    "LACHLANGALVIN": {
      "playerName": "Lachlan Galvin",
      "key": "LACHLANGALVIN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 643000,
      "priceImpliedProjection": 50.2,
      "seasonAverage": 53.6,
      "last3Average": 57,
      "lastGameScore": 56,
      "scoreVolatility": 11.2,
      "homeAverage": 60.7,
      "awayAverage": 48.3
    },
    "KYLEFLANAGAN": {
      "playerName": "Kyle Flanagan",
      "key": "KYLEFLANAGAN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 6,
      "currentPrice": 395000,
      "priceImpliedProjection": 30.9,
      "seasonAverage": 29.7,
      "last3Average": 31,
      "lastGameScore": 51,
      "scoreVolatility": 12.3,
      "homeAverage": 26.5,
      "awayAverage": 31.3
    },
    "BRIANTOO": {
      "playerName": "Brian To'o",
      "key": "BRIANTOO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 408000,
      "priceImpliedProjection": 31.9,
      "seasonAverage": 33.5,
      "last3Average": 38,
      "lastGameScore": 81,
      "scoreVolatility": 22.8,
      "homeAverage": 34.7,
      "awayAverage": 32.8
    },
    "DANEGAGAI": {
      "playerName": "Dane Gagai",
      "key": "DANEGAGAI",
      "primaryPosition": "Centre",
      "gamesPlayed": 8,
      "currentPrice": 584000,
      "priceImpliedProjection": 45.6,
      "seasonAverage": 43.1,
      "last3Average": 36.7,
      "lastGameScore": 17,
      "scoreVolatility": 23.6,
      "homeAverage": 39.5,
      "awayAverage": 46.8
    },
    "NATBUTCHER": {
      "playerName": "Nat Butcher",
      "key": "NATBUTCHER",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 524000,
      "priceImpliedProjection": 40.9,
      "seasonAverage": 41.9,
      "last3Average": 42.3,
      "lastGameScore": 29,
      "scoreVolatility": 12.7,
      "homeAverage": 40,
      "awayAverage": 43.3
    },
    "KALYNPONGA": {
      "playerName": "Kalyn Ponga",
      "key": "KALYNPONGA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 649000,
      "priceImpliedProjection": 50.7,
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
      "gamesPlayed": 7,
      "currentPrice": 369000,
      "priceImpliedProjection": 28.8,
      "seasonAverage": 26.7,
      "last3Average": 31.3,
      "lastGameScore": 21,
      "scoreVolatility": 10,
      "homeAverage": 28,
      "awayAverage": 25
    },
    "TEVITANAUFAHU": {
      "playerName": "Tevita Naufahu",
      "key": "TEVITANAUFAHU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "currentPrice": 410000,
      "priceImpliedProjection": 32,
      "seasonAverage": 1,
      "last3Average": 1,
      "lastGameScore": 1,
      "scoreVolatility": 0,
      "homeAverage": 1,
      "awayAverage": 1
    },
    "TOMTRBOJEVIC": {
      "playerName": "Tom Trbojevic",
      "key": "TOMTRBOJEVIC",
      "primaryPosition": "Fullback",
      "gamesPlayed": 6,
      "currentPrice": 612000,
      "priceImpliedProjection": 47.8,
      "seasonAverage": 46.8,
      "last3Average": 34,
      "lastGameScore": 6,
      "scoreVolatility": 19.5,
      "homeAverage": 59.7,
      "awayAverage": 34
    },
    "GREGMARZHEW": {
      "playerName": "Greg Marzhew",
      "key": "GREGMARZHEW",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 436000,
      "priceImpliedProjection": 34.1,
      "seasonAverage": 32.7,
      "last3Average": 31,
      "lastGameScore": 26,
      "scoreVolatility": 10.3,
      "homeAverage": 42.7,
      "awayAverage": 25.3
    },
    "JAMIEHUMPHREYS": {
      "playerName": "Jamie Humphreys",
      "key": "JAMIEHUMPHREYS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 5,
      "currentPrice": 474000,
      "priceImpliedProjection": 37,
      "seasonAverage": 35.2,
      "last3Average": 36.7,
      "lastGameScore": 28,
      "scoreVolatility": 5.1,
      "homeAverage": 37,
      "awayAverage": 28
    },
    "STEPHENCRICHTON": {
      "playerName": "Stephen Crichton",
      "key": "STEPHENCRICHTON",
      "primaryPosition": "Centre",
      "gamesPlayed": 5,
      "currentPrice": 489000,
      "priceImpliedProjection": 38.2,
      "seasonAverage": 38.4,
      "last3Average": 34.7,
      "lastGameScore": 53,
      "scoreVolatility": 11.9,
      "homeAverage": 36.5,
      "awayAverage": 39.7
    },
    "HARRYHAYES": {
      "playerName": "Harry Hayes",
      "key": "HARRYHAYES",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 481000,
      "priceImpliedProjection": 37.6,
      "seasonAverage": 35.4,
      "last3Average": 32.3,
      "lastGameScore": 21,
      "scoreVolatility": 9.9,
      "homeAverage": 46.5,
      "awayAverage": 28
    },
    "MITCHKENNY": {
      "playerName": "Mitch Kenny",
      "key": "MITCHKENNY",
      "primaryPosition": null,
      "gamesPlayed": 6,
      "currentPrice": 429000,
      "priceImpliedProjection": 33.5,
      "seasonAverage": 30.2,
      "last3Average": 27,
      "lastGameScore": 12,
      "scoreVolatility": 13,
      "homeAverage": 30,
      "awayAverage": 30.3
    },
    "ALEXSEYFARTH": {
      "playerName": "Alex Seyfarth",
      "key": "ALEXSEYFARTH",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 263000,
      "priceImpliedProjection": 20.5,
      "seasonAverage": 13.7,
      "last3Average": 12,
      "lastGameScore": 12,
      "scoreVolatility": 2.4,
      "homeAverage": 12.7,
      "awayAverage": 14.7
    },
    "SAMUELAFAINU": {
      "playerName": "Samuela Fainu",
      "key": "SAMUELAFAINU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 652000,
      "priceImpliedProjection": 50.9,
      "seasonAverage": 56.1,
      "last3Average": 52.7,
      "lastGameScore": 53,
      "scoreVolatility": 10.2,
      "homeAverage": 58.5,
      "awayAverage": 53
    },
    "PAULALAMOTI": {
      "playerName": "Paul Alamoti",
      "key": "PAULALAMOTI",
      "primaryPosition": "Centre",
      "gamesPlayed": 8,
      "currentPrice": 462000,
      "priceImpliedProjection": 36.1,
      "seasonAverage": 37,
      "last3Average": 40.3,
      "lastGameScore": 75,
      "scoreVolatility": 16,
      "homeAverage": 37.3,
      "awayAverage": 36.8
    },
    "JACOBHALANGAHU": {
      "playerName": "Jacob Halangahu",
      "key": "JACOBHALANGAHU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 278000,
      "priceImpliedProjection": 21.7,
      "seasonAverage": 11.7,
      "last3Average": 11.7,
      "lastGameScore": 4,
      "scoreVolatility": 7.6,
      "homeAverage": 13,
      "awayAverage": 9
    },
    "TOLUTAUKOULA": {
      "playerName": "Tolutau Koula",
      "key": "TOLUTAUKOULA",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 593000,
      "priceImpliedProjection": 46.3,
      "seasonAverage": 48.6,
      "last3Average": 42,
      "lastGameScore": 37,
      "scoreVolatility": 19.9,
      "homeAverage": 46.5,
      "awayAverage": 51.3
    },
    "PHILLIPSAMI": {
      "playerName": "Phillip Sami",
      "key": "PHILLIPSAMI",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 458000,
      "priceImpliedProjection": 35.8,
      "seasonAverage": 33.3,
      "last3Average": 37.7,
      "lastGameScore": 35,
      "scoreVolatility": 12.6,
      "homeAverage": 37.5,
      "awayAverage": 31.6
    },
    "TOMGILBERT": {
      "playerName": "Tom Gilbert",
      "key": "TOMGILBERT",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 541000,
      "priceImpliedProjection": 42.3,
      "seasonAverage": 43.3,
      "last3Average": 46,
      "lastGameScore": 41,
      "scoreVolatility": 12,
      "homeAverage": 45.3,
      "awayAverage": 40.7
    },
    "LUKEGARNER": {
      "playerName": "Luke Garner",
      "key": "LUKEGARNER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 421000,
      "priceImpliedProjection": 32.9,
      "seasonAverage": 34,
      "last3Average": 28.7,
      "lastGameScore": 34,
      "scoreVolatility": 12.8,
      "homeAverage": 37.7,
      "awayAverage": 31.8
    },
    "JACOBLIDDLE": {
      "playerName": "Jacob Liddle",
      "key": "JACOBLIDDLE",
      "primaryPosition": null,
      "gamesPlayed": 4,
      "currentPrice": 432000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 30.8,
      "last3Average": 33.7,
      "lastGameScore": 49,
      "scoreVolatility": 12.4,
      "homeAverage": 33,
      "awayAverage": 28.5
    },
    "JAKESIMPKIN": {
      "playerName": "Jake Simpkin",
      "key": "JAKESIMPKIN",
      "primaryPosition": null,
      "gamesPlayed": 7,
      "currentPrice": 444000,
      "priceImpliedProjection": 34.7,
      "seasonAverage": 34,
      "last3Average": 33,
      "lastGameScore": 23,
      "scoreVolatility": 10.4,
      "homeAverage": 33.8,
      "awayAverage": 34.3
    },
    "CODYHOPWOOD": {
      "playerName": "Cody Hopwood",
      "key": "CODYHOPWOOD",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 243000,
      "priceImpliedProjection": 19,
      "seasonAverage": 18.3,
      "last3Average": 18.3,
      "lastGameScore": 13,
      "scoreVolatility": 6.2,
      "homeAverage": 13,
      "awayAverage": 21
    },
    "MURRAYTAULAGI": {
      "playerName": "Murray Taulagi",
      "key": "MURRAYTAULAGI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 508000,
      "priceImpliedProjection": 39.7,
      "seasonAverage": 41.4,
      "last3Average": 42,
      "lastGameScore": 60,
      "scoreVolatility": 15.8,
      "homeAverage": 49.3,
      "awayAverage": 35.5
    },
    "ETHANSTRANGE": {
      "playerName": "Ethan Strange",
      "key": "ETHANSTRANGE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 569000,
      "priceImpliedProjection": 44.5,
      "seasonAverage": 42.8,
      "last3Average": 43,
      "lastGameScore": 11,
      "scoreVolatility": 18.1,
      "homeAverage": 48,
      "awayAverage": 39.6
    },
    "CHRISTIANTUIPULOTU": {
      "playerName": "Christian Tuipulotu",
      "key": "CHRISTIANTUIPULOTU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 6,
      "currentPrice": 365000,
      "priceImpliedProjection": 28.5,
      "seasonAverage": 23.3,
      "last3Average": 13.3,
      "lastGameScore": 3,
      "scoreVolatility": 12.3,
      "homeAverage": 17.3,
      "awayAverage": 29.3
    },
    "BRIANKELLY": {
      "playerName": "Brian Kelly",
      "key": "BRIANKELLY",
      "primaryPosition": "Centre",
      "gamesPlayed": 6,
      "currentPrice": 499000,
      "priceImpliedProjection": 39,
      "seasonAverage": 41.5,
      "last3Average": 37.3,
      "lastGameScore": 65,
      "scoreVolatility": 16.4,
      "homeAverage": 29.7,
      "awayAverage": 53.3
    },
    "JOSHKING": {
      "playerName": "Josh King",
      "key": "JOSHKING",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 477000,
      "priceImpliedProjection": 37.3,
      "seasonAverage": 38.1,
      "last3Average": 38.7,
      "lastGameScore": 37,
      "scoreVolatility": 5.7,
      "homeAverage": 37.5,
      "awayAverage": 38.8
    },
    "JOSIAHKARAPANI": {
      "playerName": "Josiah Karapani",
      "key": "JOSIAHKARAPANI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 416000,
      "priceImpliedProjection": 32.5,
      "seasonAverage": 31.1,
      "last3Average": 40.3,
      "lastGameScore": 43,
      "scoreVolatility": 10.6,
      "homeAverage": 32.6,
      "awayAverage": 27.5
    },
    "BENTRBOJEVIC": {
      "playerName": "Ben Trbojevic",
      "key": "BENTRBOJEVIC",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 663000,
      "priceImpliedProjection": 51.8,
      "seasonAverage": 55.3,
      "last3Average": 55.7,
      "lastGameScore": 70,
      "scoreVolatility": 12.8,
      "homeAverage": 52.8,
      "awayAverage": 58.7
    },
    "THOMASJENKINS": {
      "playerName": "Thomas Jenkins",
      "key": "THOMASJENKINS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 683000,
      "priceImpliedProjection": 53.4,
      "seasonAverage": 56.5,
      "last3Average": 42,
      "lastGameScore": 31,
      "scoreVolatility": 18.7,
      "homeAverage": 56.7,
      "awayAverage": 56.4
    },
    "CLINTONGUTHERSON": {
      "playerName": "Clinton Gutherson",
      "key": "CLINTONGUTHERSON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 379000,
      "priceImpliedProjection": 29.6,
      "seasonAverage": 24,
      "last3Average": 22.7,
      "lastGameScore": 25,
      "scoreVolatility": 9.4,
      "homeAverage": 26,
      "awayAverage": 22.7
    },
    "MOSESLEOTA": {
      "playerName": "Moses Leota",
      "key": "MOSESLEOTA",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 474000,
      "priceImpliedProjection": 37,
      "seasonAverage": 37.6,
      "last3Average": 44,
      "lastGameScore": 60,
      "scoreVolatility": 10.9,
      "homeAverage": 32,
      "awayAverage": 41
    },
    "CHANELHARRISTAVITA": {
      "playerName": "Chanel Harris-Tavita",
      "key": "CHANELHARRISTAVITA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 5,
      "currentPrice": 445000,
      "priceImpliedProjection": 34.8,
      "seasonAverage": 34.4,
      "last3Average": 42.3,
      "lastGameScore": 42,
      "scoreVolatility": 17.3,
      "homeAverage": 33,
      "awayAverage": 40
    },
    "CONNORTRACEY": {
      "playerName": "Connor Tracey",
      "key": "CONNORTRACEY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 444000,
      "priceImpliedProjection": 34.7,
      "seasonAverage": 35,
      "last3Average": 24.3,
      "lastGameScore": 15,
      "scoreVolatility": 14.6,
      "homeAverage": 34.3,
      "awayAverage": 35.5
    },
    "MATCROKER": {
      "playerName": "Mat Croker",
      "key": "MATCROKER",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 495000,
      "priceImpliedProjection": 38.7,
      "seasonAverage": 39.8,
      "last3Average": 36,
      "lastGameScore": 45,
      "scoreVolatility": 8.2,
      "homeAverage": 43,
      "awayAverage": 36.5
    },
    "MAWENEHIROTI": {
      "playerName": "Mawene Hiroti",
      "key": "MAWENEHIROTI",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "currentPrice": 471000,
      "priceImpliedProjection": 36.8,
      "seasonAverage": 30.5,
      "last3Average": 30.5,
      "lastGameScore": 28,
      "scoreVolatility": 2.5,
      "homeAverage": 33,
      "awayAverage": 28
    },
    "JYEGRAY": {
      "playerName": "Jye Gray",
      "key": "JYEGRAY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 499000,
      "priceImpliedProjection": 39,
      "seasonAverage": 36.2,
      "last3Average": 36,
      "lastGameScore": 6,
      "scoreVolatility": 19.6,
      "homeAverage": 36,
      "awayAverage": 36.5
    },
    "VICTORRADLEY": {
      "playerName": "Victor Radley",
      "key": "VICTORRADLEY",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 477000,
      "priceImpliedProjection": 37.3,
      "seasonAverage": 34.7,
      "last3Average": 34.7,
      "lastGameScore": 25,
      "scoreVolatility": 7.1,
      "homeAverage": 42,
      "awayAverage": 31
    },
    "ETHANBULLEMOR": {
      "playerName": "Ethan Bullemor",
      "key": "ETHANBULLEMOR",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 452000,
      "priceImpliedProjection": 35.3,
      "seasonAverage": 33.6,
      "last3Average": 34.7,
      "lastGameScore": 26,
      "scoreVolatility": 7.6,
      "homeAverage": 30,
      "awayAverage": 39
    },
    "JAHREAMBULA": {
      "playerName": "Jahream Bula",
      "key": "JAHREAMBULA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 549000,
      "priceImpliedProjection": 42.9,
      "seasonAverage": 41.9,
      "last3Average": 42,
      "lastGameScore": 22,
      "scoreVolatility": 14.3,
      "homeAverage": 39.8,
      "awayAverage": 44.7
    },
    "PHOENIXCROSSLAND": {
      "playerName": "Phoenix Crossland",
      "key": "PHOENIXCROSSLAND",
      "primaryPosition": null,
      "gamesPlayed": 8,
      "currentPrice": 577000,
      "priceImpliedProjection": 45.1,
      "seasonAverage": 46.9,
      "last3Average": 48.7,
      "lastGameScore": 57,
      "scoreVolatility": 7.8,
      "homeAverage": 50.8,
      "awayAverage": 43
    },
    "LEKAHALASIMA": {
      "playerName": "Leka Halasima",
      "key": "LEKAHALASIMA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 428000,
      "priceImpliedProjection": 33.4,
      "seasonAverage": 34.1,
      "last3Average": 24,
      "lastGameScore": 23,
      "scoreVolatility": 18.4,
      "homeAverage": 33.4,
      "awayAverage": 35.3
    },
    "ISAIAHIONGI": {
      "playerName": "Isaiah Iongi",
      "key": "ISAIAHIONGI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 4,
      "currentPrice": 544000,
      "priceImpliedProjection": 42.5,
      "seasonAverage": 42.3,
      "last3Average": 37.3,
      "lastGameScore": 21,
      "scoreVolatility": 20.1,
      "homeAverage": 24,
      "awayAverage": 48.3
    },
    "LEHIHOPOATE": {
      "playerName": "Lehi Hopoate",
      "key": "LEHIHOPOATE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 541000,
      "priceImpliedProjection": 42.3,
      "seasonAverage": 42.7,
      "last3Average": 54.3,
      "lastGameScore": 62,
      "scoreVolatility": 17.4,
      "homeAverage": 36.8,
      "awayAverage": 50.7
    },
    "KODINIKORIMA": {
      "playerName": "Kodi Nikorima",
      "key": "KODINIKORIMA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 6,
      "currentPrice": 414000,
      "priceImpliedProjection": 32.3,
      "seasonAverage": 29.3,
      "last3Average": 26.7,
      "lastGameScore": 20,
      "scoreVolatility": 8.3,
      "homeAverage": 24.8,
      "awayAverage": 38.5
    },
    "SCOTTSORENSEN": {
      "playerName": "Scott Sorensen",
      "key": "SCOTTSORENSEN",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 361000,
      "priceImpliedProjection": 28.2,
      "seasonAverage": 27.3,
      "last3Average": 31.3,
      "lastGameScore": 32,
      "scoreVolatility": 7.2,
      "homeAverage": 19.7,
      "awayAverage": 31.8
    },
    "KELMATUILAGI": {
      "playerName": "Kelma Tuilagi",
      "key": "KELMATUILAGI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 5,
      "currentPrice": 606000,
      "priceImpliedProjection": 47.3,
      "seasonAverage": 53.4,
      "last3Average": 48.7,
      "lastGameScore": 62,
      "scoreVolatility": 12.6,
      "homeAverage": 49,
      "awayAverage": 60
    },
    "LIAMMARTIN": {
      "playerName": "Liam Martin",
      "key": "LIAMMARTIN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 4,
      "currentPrice": 440000,
      "priceImpliedProjection": 34.4,
      "seasonAverage": 30.5,
      "last3Average": 26,
      "lastGameScore": 26,
      "scoreVolatility": 8.9,
      "homeAverage": 26,
      "awayAverage": 35
    },
    "JOSHADDOCARR": {
      "playerName": "Josh Addo-Carr",
      "key": "JOSHADDOCARR",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 427000,
      "priceImpliedProjection": 33.4,
      "seasonAverage": 31,
      "last3Average": 30.3,
      "lastGameScore": 17,
      "scoreVolatility": 11.8,
      "homeAverage": 35.5,
      "awayAverage": 25
    },
    "STARFORDTOA": {
      "playerName": "Starford To'a",
      "key": "STARFORDTOA",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "currentPrice": 475000,
      "priceImpliedProjection": 37.1,
      "seasonAverage": 28,
      "last3Average": 28,
      "lastGameScore": 28,
      "scoreVolatility": 0,
      "homeAverage": 28,
      "awayAverage": 28
    },
    "REEDMAHONEY": {
      "playerName": "Reed Mahoney",
      "key": "REEDMAHONEY",
      "primaryPosition": null,
      "gamesPlayed": 7,
      "currentPrice": 404000,
      "priceImpliedProjection": 31.6,
      "seasonAverage": 32.3,
      "last3Average": 29,
      "lastGameScore": 35,
      "scoreVolatility": 17.7,
      "homeAverage": 27.3,
      "awayAverage": 36
    },
    "CHRISRANDALL": {
      "playerName": "Chris Randall",
      "key": "CHRISRANDALL",
      "primaryPosition": null,
      "gamesPlayed": 6,
      "currentPrice": 488000,
      "priceImpliedProjection": 38.1,
      "seasonAverage": 38.3,
      "last3Average": 39,
      "lastGameScore": 45,
      "scoreVolatility": 7.5,
      "homeAverage": 36,
      "awayAverage": 39.5
    },
    "MORGANSMITHIES": {
      "playerName": "Morgan Smithies",
      "key": "MORGANSMITHIES",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 468000,
      "priceImpliedProjection": 36.6,
      "seasonAverage": 37.1,
      "last3Average": 41.3,
      "lastGameScore": 42,
      "scoreVolatility": 7.9,
      "homeAverage": 33.3,
      "awayAverage": 39.4
    },
    "DANIELTUPOU": {
      "playerName": "Daniel Tupou",
      "key": "DANIELTUPOU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 454000,
      "priceImpliedProjection": 35.5,
      "seasonAverage": 34.6,
      "last3Average": 39.3,
      "lastGameScore": 37,
      "scoreVolatility": 8.5,
      "homeAverage": 29.3,
      "awayAverage": 38.5
    },
    "JAROMELUAI": {
      "playerName": "Jarome Luai",
      "key": "JAROMELUAI",
      "primaryPosition": "Halfback",
      "gamesPlayed": 4,
      "currentPrice": 525000,
      "priceImpliedProjection": 41,
      "seasonAverage": 45.3,
      "last3Average": 38.3,
      "lastGameScore": 54,
      "scoreVolatility": 15.4,
      "homeAverage": 49.7,
      "awayAverage": 32
    },
    "DYLANBROWN": {
      "playerName": "Dylan Brown",
      "key": "DYLANBROWN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 4,
      "currentPrice": 555000,
      "priceImpliedProjection": 43.4,
      "seasonAverage": 54.3,
      "last3Average": 60,
      "lastGameScore": 96,
      "scoreVolatility": 24.2,
      "homeAverage": 66.5,
      "awayAverage": 42
    },
    "TANIELAPASEKA": {
      "playerName": "Taniela Paseka",
      "key": "TANIELAPASEKA",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 543000,
      "priceImpliedProjection": 42.4,
      "seasonAverage": 43.9,
      "last3Average": 48,
      "lastGameScore": 39,
      "scoreVolatility": 7.8,
      "homeAverage": 40.5,
      "awayAverage": 48.3
    },
    "KULIKEFUFINEFEUIAKI": {
      "playerName": "Kulikefu Finefeuiaki",
      "key": "KULIKEFUFINEFEUIAKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 689000,
      "priceImpliedProjection": 53.8,
      "seasonAverage": 58.1,
      "last3Average": 52.7,
      "lastGameScore": 49,
      "scoreVolatility": 10.4,
      "homeAverage": 56.8,
      "awayAverage": 60
    },
    "CHARNZENICOLLKLOKSTAD": {
      "playerName": "Charnze Nicoll-Klokstad",
      "key": "CHARNZENICOLLKLOKSTAD",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 470000,
      "priceImpliedProjection": 36.7,
      "seasonAverage": 36,
      "last3Average": 35,
      "lastGameScore": 28,
      "scoreVolatility": 5.4,
      "homeAverage": 35.8,
      "awayAverage": 37
    },
    "JAMAYNEISAAKO": {
      "playerName": "Jamayne Isaako",
      "key": "JAMAYNEISAAKO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 601000,
      "priceImpliedProjection": 47,
      "seasonAverage": 48.7,
      "last3Average": 45,
      "lastGameScore": 55,
      "scoreVolatility": 16.6,
      "homeAverage": 37,
      "awayAverage": 64.3
    },
    "JAKEAVERILLO": {
      "playerName": "Jake Averillo",
      "key": "JAKEAVERILLO",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 626000,
      "priceImpliedProjection": 48.9,
      "seasonAverage": 50,
      "last3Average": 45,
      "lastGameScore": 22,
      "scoreVolatility": 15.1,
      "homeAverage": 50,
      "awayAverage": 50
    },
    "CASEYMCLEAN": {
      "playerName": "Casey McLean",
      "key": "CASEYMCLEAN",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 559000,
      "priceImpliedProjection": 43.7,
      "seasonAverage": 43.9,
      "last3Average": 47.7,
      "lastGameScore": 50,
      "scoreVolatility": 15.6,
      "homeAverage": 56.7,
      "awayAverage": 34.3
    },
    "TYSONFRIZELL": {
      "playerName": "Tyson Frizell",
      "key": "TYSONFRIZELL",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 487000,
      "priceImpliedProjection": 38,
      "seasonAverage": 37.2,
      "last3Average": 39.7,
      "lastGameScore": 23,
      "scoreVolatility": 9.4,
      "homeAverage": 37,
      "awayAverage": 37.3
    },
    "JESSERAMIEN": {
      "playerName": "Jesse Ramien",
      "key": "JESSERAMIEN",
      "primaryPosition": "Centre",
      "gamesPlayed": 5,
      "currentPrice": 482000,
      "priceImpliedProjection": 37.7,
      "seasonAverage": 36.4,
      "last3Average": 28,
      "lastGameScore": 15,
      "scoreVolatility": 15.4,
      "homeAverage": 36.7,
      "awayAverage": 36
    },
    "JOSHPAPALII": {
      "playerName": "Josh Papalii",
      "key": "JOSHPAPALII",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 350000,
      "priceImpliedProjection": 27.3,
      "seasonAverage": 20.8,
      "last3Average": 16,
      "lastGameScore": 9,
      "scoreVolatility": 12.6,
      "homeAverage": 26.5,
      "awayAverage": 17
    },
    "MATHEWFEAGAI": {
      "playerName": "Mathew Feagai",
      "key": "MATHEWFEAGAI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 297000,
      "priceImpliedProjection": 23.2,
      "seasonAverage": 15.8,
      "last3Average": 22.7,
      "lastGameScore": 7,
      "scoreVolatility": 14.9,
      "homeAverage": 8.7,
      "awayAverage": 26.5
    },
    "LACHLANHUBNER": {
      "playerName": "Lachlan Hubner",
      "key": "LACHLANHUBNER",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 360000,
      "priceImpliedProjection": 28.1,
      "seasonAverage": 26.5,
      "last3Average": 30,
      "lastGameScore": 48,
      "scoreVolatility": 12.2,
      "homeAverage": 24.7,
      "awayAverage": 28.3
    },
    "EZRAMAM": {
      "playerName": "Ezra Mam",
      "key": "EZRAMAM",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 484000,
      "priceImpliedProjection": 37.8,
      "seasonAverage": 37.1,
      "last3Average": 37,
      "lastGameScore": 47,
      "scoreVolatility": 13,
      "homeAverage": 38.2,
      "awayAverage": 35.3
    },
    "GRIFFINNEAME": {
      "playerName": "Griffin Neame",
      "key": "GRIFFINNEAME",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 325000,
      "priceImpliedProjection": 25.4,
      "seasonAverage": 23.6,
      "last3Average": 24.3,
      "lastGameScore": 27,
      "scoreVolatility": 4.5,
      "homeAverage": 25,
      "awayAverage": 22.3
    },
    "RYLEYSMITH": {
      "playerName": "Ryley Smith",
      "key": "RYLEYSMITH",
      "primaryPosition": null,
      "gamesPlayed": 8,
      "currentPrice": 353000,
      "priceImpliedProjection": 27.6,
      "seasonAverage": 27.6,
      "last3Average": 19.7,
      "lastGameScore": 29,
      "scoreVolatility": 9.7,
      "homeAverage": 27,
      "awayAverage": 28.3
    },
    "HEAMASIMAKASINI": {
      "playerName": "Heamasi Makasini",
      "key": "HEAMASIMAKASINI",
      "primaryPosition": "Centre",
      "gamesPlayed": 6,
      "currentPrice": 327000,
      "priceImpliedProjection": 25.5,
      "seasonAverage": 27.3,
      "last3Average": 21,
      "lastGameScore": 11,
      "scoreVolatility": 8.6,
      "homeAverage": 23,
      "awayAverage": 31.7
    },
    "SIONEKATOA": {
      "playerName": "Sione Katoa",
      "key": "SIONEKATOA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 6,
      "currentPrice": 502000,
      "priceImpliedProjection": 39.2,
      "seasonAverage": 39.8,
      "last3Average": 34,
      "lastGameScore": 17,
      "scoreVolatility": 12.4,
      "homeAverage": 39,
      "awayAverage": 41.5
    },
    "BAILEYSIMONSSON": {
      "playerName": "Bailey Simonsson",
      "key": "BAILEYSIMONSSON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 458000,
      "priceImpliedProjection": 35.8,
      "seasonAverage": 36.4,
      "last3Average": 43.7,
      "lastGameScore": 45,
      "scoreVolatility": 9.3,
      "homeAverage": 42.5,
      "awayAverage": 32.3
    },
    "XAVIERWILLISON": {
      "playerName": "Xavier Willison",
      "key": "XAVIERWILLISON",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 578000,
      "priceImpliedProjection": 45.2,
      "seasonAverage": 45.6,
      "last3Average": 62.7,
      "lastGameScore": 79,
      "scoreVolatility": 23.4,
      "homeAverage": 42,
      "awayAverage": 51.7
    },
    "JAXONPURDUE": {
      "playerName": "Jaxon Purdue",
      "key": "JAXONPURDUE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 523000,
      "priceImpliedProjection": 40.9,
      "seasonAverage": 41.3,
      "last3Average": 33.3,
      "lastGameScore": 28,
      "scoreVolatility": 13.4,
      "homeAverage": 40.5,
      "awayAverage": 42
    },
    "SAVELIOTAMALE": {
      "playerName": "Savelio Tamale",
      "key": "SAVELIOTAMALE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 475000,
      "priceImpliedProjection": 37.1,
      "seasonAverage": 37.9,
      "last3Average": 30.7,
      "lastGameScore": 43,
      "scoreVolatility": 13,
      "homeAverage": 53.5,
      "awayAverage": 31.6
    },
    "KAEOWEEKES": {
      "playerName": "Kaeo Weekes",
      "key": "KAEOWEEKES",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 523000,
      "priceImpliedProjection": 40.9,
      "seasonAverage": 41.8,
      "last3Average": 40.3,
      "lastGameScore": 42,
      "scoreVolatility": 10.2,
      "homeAverage": 42.7,
      "awayAverage": 41.2
    },
    "SUALAUVIFAALOGO": {
      "playerName": "Sualauvi Faalogo",
      "key": "SUALAUVIFAALOGO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 619000,
      "priceImpliedProjection": 48.4,
      "seasonAverage": 53,
      "last3Average": 48,
      "lastGameScore": 43,
      "scoreVolatility": 11.4,
      "homeAverage": 48.5,
      "awayAverage": 57.5
    },
    "IZACKTAGO": {
      "playerName": "Izack Tago",
      "key": "IZACKTAGO",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "currentPrice": 482000,
      "priceImpliedProjection": 37.7,
      "seasonAverage": 43.5,
      "last3Average": 43.5,
      "lastGameScore": 40,
      "scoreVolatility": 3.5,
      "homeAverage": 43.5,
      "awayAverage": 43.5
    },
    "ALEXJOHNSTON": {
      "playerName": "Alex Johnston",
      "key": "ALEXJOHNSTON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 588000,
      "priceImpliedProjection": 45.9,
      "seasonAverage": 47.3,
      "last3Average": 56,
      "lastGameScore": 46,
      "scoreVolatility": 13.6,
      "homeAverage": 51.5,
      "awayAverage": 41.7
    },
    "BENHUNT": {
      "playerName": "Ben Hunt",
      "key": "BENHUNT",
      "primaryPosition": "Halfback",
      "gamesPlayed": 5,
      "currentPrice": 402000,
      "priceImpliedProjection": 31.4,
      "seasonAverage": 28,
      "last3Average": 26.7,
      "lastGameScore": 21,
      "scoreVolatility": 9.8,
      "homeAverage": 25.3,
      "awayAverage": 32
    },
    "LINDSAYCOLLINS": {
      "playerName": "Lindsay Collins",
      "key": "LINDSAYCOLLINS",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 391000,
      "priceImpliedProjection": 30.5,
      "seasonAverage": 30.4,
      "last3Average": 22.3,
      "lastGameScore": 23,
      "scoreVolatility": 8.5,
      "homeAverage": 28,
      "awayAverage": 32.3
    },
    "TEVITATATOLA": {
      "playerName": "Tevita Tatola",
      "key": "TEVITATATOLA",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 443000,
      "priceImpliedProjection": 34.6,
      "seasonAverage": 35,
      "last3Average": 28.7,
      "lastGameScore": 22,
      "scoreVolatility": 7.5,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "DAVIDFIFITA": {
      "playerName": "David Fifita",
      "key": "DAVIDFIFITA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 5,
      "currentPrice": 519000,
      "priceImpliedProjection": 40.5,
      "seasonAverage": 42.2,
      "last3Average": 43.7,
      "lastGameScore": 53,
      "scoreVolatility": 9.5,
      "homeAverage": 43.7,
      "awayAverage": 40
    },
    "COENHESS": {
      "playerName": "Coen Hess",
      "key": "COENHESS",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 441000,
      "priceImpliedProjection": 34.5,
      "seasonAverage": 34.3,
      "last3Average": 42.7,
      "lastGameScore": 34,
      "scoreVolatility": 10,
      "homeAverage": 35,
      "awayAverage": 33.5
    },
    "SIOSIUATAUKEIAHO": {
      "playerName": "Siosiua Taukeiaho",
      "key": "SIOSIUATAUKEIAHO",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 363000,
      "priceImpliedProjection": 28.4,
      "seasonAverage": 19,
      "last3Average": 19,
      "lastGameScore": 31,
      "scoreVolatility": 9.8,
      "homeAverage": 19,
      "awayAverage": 19
    },
    "MOSESSULI": {
      "playerName": "Moses Suli",
      "key": "MOSESSULI",
      "primaryPosition": "Centre",
      "gamesPlayed": 6,
      "currentPrice": 465000,
      "priceImpliedProjection": 36.3,
      "seasonAverage": 35.8,
      "last3Average": 31,
      "lastGameScore": 27,
      "scoreVolatility": 10.7,
      "homeAverage": 33,
      "awayAverage": 41.5
    },
    "KOBEHETHERINGTON": {
      "playerName": "Kobe Hetherington",
      "key": "KOBEHETHERINGTON",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 454000,
      "priceImpliedProjection": 35.5,
      "seasonAverage": 35,
      "last3Average": 34.7,
      "lastGameScore": 30,
      "scoreVolatility": 14.4,
      "homeAverage": 36.3,
      "awayAverage": 33.3
    },
    "SAMMCINTYRE": {
      "playerName": "Sam McIntyre",
      "key": "SAMMCINTYRE",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 405000,
      "priceImpliedProjection": 31.6,
      "seasonAverage": 30.5,
      "last3Average": 21.3,
      "lastGameScore": 14,
      "scoreVolatility": 17.8,
      "homeAverage": 24,
      "awayAverage": 37
    },
    "ENARITUALA": {
      "playerName": "Enari Tuala",
      "key": "ENARITUALA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 4,
      "currentPrice": 550000,
      "priceImpliedProjection": 43,
      "seasonAverage": 50.8,
      "last3Average": 53.3,
      "lastGameScore": 54,
      "scoreVolatility": 4.5,
      "homeAverage": 53,
      "awayAverage": 48.5
    },
    "THOMASHAZELTON": {
      "playerName": "Thomas Hazelton",
      "key": "THOMASHAZELTON",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 426000,
      "priceImpliedProjection": 33.3,
      "seasonAverage": 33,
      "last3Average": 31.3,
      "lastGameScore": 32,
      "scoreVolatility": 6.3,
      "homeAverage": 35.3,
      "awayAverage": 30
    },
    "SELWYNCOBBO": {
      "playerName": "Selwyn Cobbo",
      "key": "SELWYNCOBBO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 441000,
      "priceImpliedProjection": 34.5,
      "seasonAverage": 33.7,
      "last3Average": 31.3,
      "lastGameScore": 15,
      "scoreVolatility": 13.8,
      "homeAverage": 34.8,
      "awayAverage": 32.3
    },
    "DAINELAURIE": {
      "playerName": "Daine Laurie",
      "key": "DAINELAURIE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "currentPrice": 453000,
      "priceImpliedProjection": 35.4,
      "seasonAverage": 39,
      "last3Average": 39,
      "lastGameScore": 39,
      "scoreVolatility": 0,
      "homeAverage": 39,
      "awayAverage": 39
    },
    "JEREMIAHNANAI": {
      "playerName": "Jeremiah Nanai",
      "key": "JEREMIAHNANAI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 443000,
      "priceImpliedProjection": 34.6,
      "seasonAverage": 30,
      "last3Average": 30,
      "lastGameScore": 30,
      "scoreVolatility": 0,
      "homeAverage": 30,
      "awayAverage": 30
    },
    "SAMUELHEALEY": {
      "playerName": "Samuel Healey",
      "key": "SAMUELHEALEY",
      "primaryPosition": null,
      "gamesPlayed": 8,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 16,
      "last3Average": 13.3,
      "lastGameScore": 6,
      "scoreVolatility": 7.1,
      "homeAverage": 16.6,
      "awayAverage": 15
    },
    "JACKHOWARTH": {
      "playerName": "Jack Howarth",
      "key": "JACKHOWARTH",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 427000,
      "priceImpliedProjection": 33.4,
      "seasonAverage": 34.7,
      "last3Average": 37,
      "lastGameScore": 36,
      "scoreVolatility": 12.8,
      "homeAverage": 38.8,
      "awayAverage": 29.3
    },
    "JACOBSAIFITI": {
      "playerName": "Jacob Saifiti",
      "key": "JACOBSAIFITI",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 528000,
      "priceImpliedProjection": 41.3,
      "seasonAverage": 42.8,
      "last3Average": 32,
      "lastGameScore": 30,
      "scoreVolatility": 11.6,
      "homeAverage": 42,
      "awayAverage": 43.5
    },
    "JOJOFIFITA": {
      "playerName": "Jojo Fifita",
      "key": "JOJOFIFITA",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 540000,
      "priceImpliedProjection": 42.2,
      "seasonAverage": 41.6,
      "last3Average": 55,
      "lastGameScore": 36,
      "scoreVolatility": 16.3,
      "homeAverage": 55,
      "awayAverage": 36.2
    },
    "CONNELLYLEMUELU": {
      "playerName": "Connelly Lemuelu",
      "key": "CONNELLYLEMUELU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 609000,
      "priceImpliedProjection": 47.6,
      "seasonAverage": 52.7,
      "last3Average": 45.7,
      "lastGameScore": 63,
      "scoreVolatility": 12.1,
      "homeAverage": 45,
      "awayAverage": 63
    },
    "DYLANWALKER": {
      "playerName": "Dylan Walker",
      "key": "DYLANWALKER",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 438000,
      "priceImpliedProjection": 34.2,
      "seasonAverage": 33.5,
      "last3Average": 29,
      "lastGameScore": 8,
      "scoreVolatility": 11.6,
      "homeAverage": 38.5,
      "awayAverage": 28.5
    },
    "HARRISONEDWARDS": {
      "playerName": "Harrison Edwards",
      "key": "HARRISONEDWARDS",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 421000,
      "priceImpliedProjection": 32.9,
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
      "gamesPlayed": 8,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 14.4,
      "last3Average": 12,
      "lastGameScore": 22,
      "scoreVolatility": 6.6,
      "homeAverage": 14.3,
      "awayAverage": 14.4
    },
    "LYHKANKINGTOGIA": {
      "playerName": "Lyhkan King-Togia",
      "key": "LYHKANKINGTOGIA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "currentPrice": 378000,
      "priceImpliedProjection": 29.5,
      "seasonAverage": 16,
      "last3Average": 16,
      "lastGameScore": 32,
      "scoreVolatility": 16,
      "homeAverage": 32,
      "awayAverage": 0
    },
    "JAKETRBOJEVIC": {
      "playerName": "Jake Trbojevic",
      "key": "JAKETRBOJEVIC",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 403000,
      "priceImpliedProjection": 31.5,
      "seasonAverage": 32.1,
      "last3Average": 32.7,
      "lastGameScore": 45,
      "scoreVolatility": 7.8,
      "homeAverage": 33.8,
      "awayAverage": 30
    },
    "LACHLANILIAS": {
      "playerName": "Lachlan Ilias",
      "key": "LACHLANILIAS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 382000,
      "priceImpliedProjection": 29.8,
      "seasonAverage": 29.3,
      "last3Average": 33,
      "lastGameScore": 27,
      "scoreVolatility": 9.9,
      "homeAverage": 30,
      "awayAverage": 29
    },
    "HAMISHSTEWART": {
      "playerName": "Hamish Stewart",
      "key": "HAMISHSTEWART",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 633000,
      "priceImpliedProjection": 49.5,
      "seasonAverage": 51.6,
      "last3Average": 54.7,
      "lastGameScore": 54,
      "scoreVolatility": 10.3,
      "homeAverage": 46.3,
      "awayAverage": 57
    },
    "CAMPBELLGRAHAM": {
      "playerName": "Campbell Graham",
      "key": "CAMPBELLGRAHAM",
      "primaryPosition": "Centre",
      "gamesPlayed": 6,
      "currentPrice": 443000,
      "priceImpliedProjection": 34.6,
      "seasonAverage": 36.5,
      "last3Average": 38.3,
      "lastGameScore": 48,
      "scoreVolatility": 11.2,
      "homeAverage": 29,
      "awayAverage": 44
    },
    "EMREGULER": {
      "playerName": "Emre Guler",
      "key": "EMREGULER",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 470000,
      "priceImpliedProjection": 36.7,
      "seasonAverage": 37.8,
      "last3Average": 37.3,
      "lastGameScore": 39,
      "scoreVolatility": 8.2,
      "homeAverage": 34.8,
      "awayAverage": 40.8
    },
    "EGANBUTCHER": {
      "playerName": "Egan Butcher",
      "key": "EGANBUTCHER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 4,
      "currentPrice": 400000,
      "priceImpliedProjection": 31.3,
      "seasonAverage": 25.5,
      "last3Average": 23.3,
      "lastGameScore": 2,
      "scoreVolatility": 13.8,
      "homeAverage": 34,
      "awayAverage": 17
    },
    "THOMASCANT": {
      "playerName": "Thomas Cant",
      "key": "THOMASCANT",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 4,
      "currentPrice": 320000,
      "priceImpliedProjection": 25,
      "seasonAverage": 17.3,
      "last3Average": 18.3,
      "lastGameScore": 21,
      "scoreVolatility": 2.9,
      "homeAverage": 16.5,
      "awayAverage": 18
    },
    "DOMINICYOUNG": {
      "playerName": "Dominic Young",
      "key": "DOMINICYOUNG",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 499000,
      "priceImpliedProjection": 39,
      "seasonAverage": 41.6,
      "last3Average": 26.3,
      "lastGameScore": 36,
      "scoreVolatility": 19.1,
      "homeAverage": 41,
      "awayAverage": 42.3
    },
    "JASONTAUMALOLO": {
      "playerName": "Jason Taumalolo",
      "key": "JASONTAUMALOLO",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 496000,
      "priceImpliedProjection": 38.8,
      "seasonAverage": 39.3,
      "last3Average": 41.7,
      "lastGameScore": 33,
      "scoreVolatility": 5.3,
      "homeAverage": 39.3,
      "awayAverage": 39.3
    },
    "TAINETUAUPIKI": {
      "playerName": "Taine Tuaupiki",
      "key": "TAINETUAUPIKI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 6,
      "currentPrice": 507000,
      "priceImpliedProjection": 39.6,
      "seasonAverage": 43.5,
      "last3Average": 44.7,
      "lastGameScore": 64,
      "scoreVolatility": 11,
      "homeAverage": 47,
      "awayAverage": 40
    },
    "SANDONSMITH": {
      "playerName": "Sandon Smith",
      "key": "SANDONSMITH",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 510000,
      "priceImpliedProjection": 39.8,
      "seasonAverage": 39,
      "last3Average": 44,
      "lastGameScore": 36,
      "scoreVolatility": 10.2,
      "homeAverage": 33,
      "awayAverage": 45
    },
    "BILLYBURNS": {
      "playerName": "Billy Burns",
      "key": "BILLYBURNS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 473000,
      "priceImpliedProjection": 37,
      "seasonAverage": 36.9,
      "last3Average": 39,
      "lastGameScore": 37,
      "scoreVolatility": 14.2,
      "homeAverage": 38.5,
      "awayAverage": 34.7
    },
    "LUKEBROOKS": {
      "playerName": "Luke Brooks",
      "key": "LUKEBROOKS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 454000,
      "priceImpliedProjection": 35.5,
      "seasonAverage": 36.6,
      "last3Average": 39,
      "lastGameScore": 31,
      "scoreVolatility": 9.9,
      "homeAverage": 36.5,
      "awayAverage": 36.7
    },
    "OREGONKAUFUSI": {
      "playerName": "Oregon Kaufusi",
      "key": "OREGONKAUFUSI",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 376000,
      "priceImpliedProjection": 29.4,
      "seasonAverage": 28.6,
      "last3Average": 32.7,
      "lastGameScore": 28,
      "scoreVolatility": 5.9,
      "homeAverage": 30,
      "awayAverage": 26.7
    },
    "BLAIZETALAGI": {
      "playerName": "Blaize Talagi",
      "key": "BLAIZETALAGI",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 442000,
      "priceImpliedProjection": 34.5,
      "seasonAverage": 37,
      "last3Average": 39.3,
      "lastGameScore": 45,
      "scoreVolatility": 15.3,
      "homeAverage": 31,
      "awayAverage": 40.6
    },
    "DEMITRICVAIMAUGA": {
      "playerName": "Demitric Vaimauga",
      "key": "DEMITRICVAIMAUGA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 411000,
      "priceImpliedProjection": 32.1,
      "seasonAverage": 31,
      "last3Average": 39,
      "lastGameScore": 38,
      "scoreVolatility": 9.1,
      "homeAverage": 27.5,
      "awayAverage": 35.7
    },
    "LUCIANOLEILUA": {
      "playerName": "Luciano Leilua",
      "key": "LUCIANOLEILUA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 648000,
      "priceImpliedProjection": 50.6,
      "seasonAverage": 51.6,
      "last3Average": 55.7,
      "lastGameScore": 34,
      "scoreVolatility": 13.3,
      "homeAverage": 54,
      "awayAverage": 49.3
    },
    "KLESEHAAS": {
      "playerName": "Klese Haas",
      "key": "KLESEHAAS",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 417000,
      "priceImpliedProjection": 32.6,
      "seasonAverage": 31.8,
      "last3Average": 32.7,
      "lastGameScore": 25,
      "scoreVolatility": 7,
      "homeAverage": 36.5,
      "awayAverage": 29.5
    },
    "KURTCAPEWELL": {
      "playerName": "Kurt Capewell",
      "key": "KURTCAPEWELL",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 470000,
      "priceImpliedProjection": 36.7,
      "seasonAverage": 43,
      "last3Average": 43,
      "lastGameScore": 41,
      "scoreVolatility": 3.6,
      "homeAverage": 43,
      "awayAverage": 43
    },
    "MAXFEAGAI": {
      "playerName": "Max Feagai",
      "key": "MAXFEAGAI",
      "primaryPosition": "Centre",
      "gamesPlayed": 3,
      "currentPrice": 384000,
      "priceImpliedProjection": 30,
      "seasonAverage": 26,
      "last3Average": 26,
      "lastGameScore": 33,
      "scoreVolatility": 5.1,
      "homeAverage": 26,
      "awayAverage": 26
    },
    "WILLWARBRICK": {
      "playerName": "Will Warbrick",
      "key": "WILLWARBRICK",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 471000,
      "priceImpliedProjection": 36.8,
      "seasonAverage": 38.4,
      "last3Average": 31.3,
      "lastGameScore": 19,
      "scoreVolatility": 18.9,
      "homeAverage": 28.5,
      "awayAverage": 48.3
    },
    "BRONSONXERRI": {
      "playerName": "Bronson Xerri",
      "key": "BRONSONXERRI",
      "primaryPosition": "Centre",
      "gamesPlayed": 4,
      "currentPrice": 452000,
      "priceImpliedProjection": 35.3,
      "seasonAverage": 36.3,
      "last3Average": 36.3,
      "lastGameScore": 14,
      "scoreVolatility": 16.3,
      "homeAverage": 35.5,
      "awayAverage": 37
    },
    "SAMUELHUGHES": {
      "playerName": "Samuel Hughes",
      "key": "SAMUELHUGHES",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 348000,
      "priceImpliedProjection": 27.2,
      "seasonAverage": 26.5,
      "last3Average": 39,
      "lastGameScore": 45,
      "scoreVolatility": 13.3,
      "homeAverage": 27.5,
      "awayAverage": 26
    },
    "FRANCISMOLO": {
      "playerName": "Francis Molo",
      "key": "FRANCISMOLO",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 387000,
      "priceImpliedProjection": 30.2,
      "seasonAverage": 28.8,
      "last3Average": 29,
      "lastGameScore": 33,
      "scoreVolatility": 5.5,
      "homeAverage": 27,
      "awayAverage": 30.5
    },
    "COREYWADDELL": {
      "playerName": "Corey Waddell",
      "key": "COREYWADDELL",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 379000,
      "priceImpliedProjection": 29.6,
      "seasonAverage": 26.7,
      "last3Average": 27,
      "lastGameScore": 5,
      "scoreVolatility": 12.9,
      "homeAverage": 15.3,
      "awayAverage": 38
    },
    "BLAKESTEEP": {
      "playerName": "Blake Steep",
      "key": "BLAKESTEEP",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 375000,
      "priceImpliedProjection": 29.3,
      "seasonAverage": 22.3,
      "last3Average": 22.3,
      "lastGameScore": 18,
      "scoreVolatility": 3.3,
      "homeAverage": 20.5,
      "awayAverage": 26
    },
    "SEBASTIANKRIS": {
      "playerName": "Sebastian Kris",
      "key": "SEBASTIANKRIS",
      "primaryPosition": "Centre",
      "gamesPlayed": 8,
      "currentPrice": 375000,
      "priceImpliedProjection": 29.3,
      "seasonAverage": 28.9,
      "last3Average": 34,
      "lastGameScore": 35,
      "scoreVolatility": 9.4,
      "homeAverage": 36,
      "awayAverage": 24.6
    },
    "WILLIAMKENNEDY": {
      "playerName": "William Kennedy",
      "key": "WILLIAMKENNEDY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 473000,
      "priceImpliedProjection": 37,
      "seasonAverage": 37.7,
      "last3Average": 44.3,
      "lastGameScore": 44,
      "scoreVolatility": 15.7,
      "homeAverage": 38,
      "awayAverage": 37.3
    },
    "JAMESSCHILLER": {
      "playerName": "James Schiller",
      "key": "JAMESSCHILLER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "currentPrice": 402000,
      "priceImpliedProjection": 31.4,
      "seasonAverage": 19,
      "last3Average": 19,
      "lastGameScore": 19,
      "scoreVolatility": 0,
      "homeAverage": 19,
      "awayAverage": 19
    },
    "DEINEMARINER": {
      "playerName": "Deine Mariner",
      "key": "DEINEMARINER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 413000,
      "priceImpliedProjection": 32.3,
      "seasonAverage": 31.9,
      "last3Average": 39.7,
      "lastGameScore": 45,
      "scoreVolatility": 8.7,
      "homeAverage": 30.4,
      "awayAverage": 34.3
    },
    "JACKCOGGER": {
      "playerName": "Jack Cogger",
      "key": "JACKCOGGER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 6,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 9.7,
      "last3Average": 7,
      "lastGameScore": 15,
      "scoreVolatility": 6.4,
      "homeAverage": 10.5,
      "awayAverage": 9.3
    },
    "GRANTANDERSON": {
      "playerName": "Grant Anderson",
      "key": "GRANTANDERSON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 371000,
      "priceImpliedProjection": 29,
      "seasonAverage": 16,
      "last3Average": 16,
      "lastGameScore": 14,
      "scoreVolatility": 2,
      "homeAverage": 14,
      "awayAverage": 18
    },
    "BRAYDONTRINDALL": {
      "playerName": "Braydon Trindall",
      "key": "BRAYDONTRINDALL",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 511000,
      "priceImpliedProjection": 39.9,
      "seasonAverage": 42.1,
      "last3Average": 32.3,
      "lastGameScore": 17,
      "scoreVolatility": 16.5,
      "homeAverage": 49.8,
      "awayAverage": 32
    },
    "WILLPENISINI": {
      "playerName": "Will Penisini",
      "key": "WILLPENISINI",
      "primaryPosition": "Centre",
      "gamesPlayed": 4,
      "currentPrice": 486000,
      "priceImpliedProjection": 38,
      "seasonAverage": 42.5,
      "last3Average": 44.7,
      "lastGameScore": 27,
      "scoreVolatility": 11.5,
      "homeAverage": 53.5,
      "awayAverage": 31.5
    },
    "CHARLIEGUYMER": {
      "playerName": "Charlie Guymer",
      "key": "CHARLIEGUYMER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 5,
      "currentPrice": 378000,
      "priceImpliedProjection": 29.5,
      "seasonAverage": 28,
      "last3Average": 32,
      "lastGameScore": 26,
      "scoreVolatility": 16.1,
      "homeAverage": 28.5,
      "awayAverage": 26
    },
    "SITILITUPOUNIUA": {
      "playerName": "Sitili Tupouniua",
      "key": "SITILITUPOUNIUA",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 477000,
      "priceImpliedProjection": 37.3,
      "seasonAverage": 38.9,
      "last3Average": 42,
      "lastGameScore": 45,
      "scoreVolatility": 9.6,
      "homeAverage": 45.7,
      "awayAverage": 33.8
    },
    "JERMAINEMCEWEN": {
      "playerName": "Jermaine McEwen",
      "key": "JERMAINEMCEWEN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 523000,
      "priceImpliedProjection": 40.9,
      "seasonAverage": 41.3,
      "last3Average": 43.7,
      "lastGameScore": 40,
      "scoreVolatility": 9.9,
      "homeAverage": 38.5,
      "awayAverage": 44
    },
    "AUBLIXTAWHA": {
      "playerName": "Aublix Tawha",
      "key": "AUBLIXTAWHA",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 322000,
      "priceImpliedProjection": 25.2,
      "seasonAverage": 15,
      "last3Average": 15,
      "lastGameScore": 20,
      "scoreVolatility": 5.1,
      "homeAverage": 15,
      "awayAverage": 15
    },
    "BILLYSMITH": {
      "playerName": "Billy Smith",
      "key": "BILLYSMITH",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "currentPrice": 410000,
      "priceImpliedProjection": 32,
      "seasonAverage": 28.5,
      "last3Average": 28.5,
      "lastGameScore": 13,
      "scoreVolatility": 15.5,
      "homeAverage": 28.5,
      "awayAverage": 28.5
    },
    "CORYPAIX": {
      "playerName": "Cory Paix",
      "key": "CORYPAIX",
      "primaryPosition": null,
      "gamesPlayed": 7,
      "currentPrice": 435000,
      "priceImpliedProjection": 34,
      "seasonAverage": 34,
      "last3Average": 38,
      "lastGameScore": 46,
      "scoreVolatility": 9.7,
      "homeAverage": 32,
      "awayAverage": 39
    },
    "COREYJENSEN": {
      "playerName": "Corey Jensen",
      "key": "COREYJENSEN",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 474000,
      "priceImpliedProjection": 37,
      "seasonAverage": 37.7,
      "last3Average": 35.3,
      "lastGameScore": 44,
      "scoreVolatility": 13.4,
      "homeAverage": 36.3,
      "awayAverage": 39.7
    },
    "ALOFIANAKHANPEREIRA": {
      "playerName": "Alofiana Khan-Pereira",
      "key": "ALOFIANAKHANPEREIRA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 421000,
      "priceImpliedProjection": 32.9,
      "seasonAverage": 38.3,
      "last3Average": 38.3,
      "lastGameScore": 45,
      "scoreVolatility": 13.1,
      "homeAverage": 47.5,
      "awayAverage": 20
    },
    "RAYSTONE": {
      "playerName": "Ray Stone",
      "key": "RAYSTONE",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 336000,
      "priceImpliedProjection": 26.3,
      "seasonAverage": 26.2,
      "last3Average": 26,
      "lastGameScore": 37,
      "scoreVolatility": 8.6,
      "homeAverage": 24.7,
      "awayAverage": 27.7
    },
    "SEANKEPPIE": {
      "playerName": "Sean Keppie",
      "key": "SEANKEPPIE",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 349000,
      "priceImpliedProjection": 27.3,
      "seasonAverage": 26.5,
      "last3Average": 34.7,
      "lastGameScore": 37,
      "scoreVolatility": 10.9,
      "homeAverage": 28.5,
      "awayAverage": 22.5
    },
    "SPENCERLENIU": {
      "playerName": "Spencer Leniu",
      "key": "SPENCERLENIU",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 336000,
      "priceImpliedProjection": 26.3,
      "seasonAverage": 19.7,
      "last3Average": 19.7,
      "lastGameScore": 23,
      "scoreVolatility": 4.7,
      "homeAverage": 23,
      "awayAverage": 18
    },
    "TYSONGAMBLE": {
      "playerName": "Tyson Gamble",
      "key": "TYSONGAMBLE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 418000,
      "priceImpliedProjection": 32.7,
      "seasonAverage": 47,
      "last3Average": 47,
      "lastGameScore": 47,
      "scoreVolatility": 0,
      "homeAverage": 47,
      "awayAverage": 47
    },
    "JACKWIGHTON": {
      "playerName": "Jack Wighton",
      "key": "JACKWIGHTON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 347000,
      "priceImpliedProjection": 27.1,
      "seasonAverage": 27.7,
      "last3Average": 27,
      "lastGameScore": 32,
      "scoreVolatility": 9.4,
      "homeAverage": 22.5,
      "awayAverage": 34.7
    },
    "SUNIATURUVA": {
      "playerName": "Sunia Turuva",
      "key": "SUNIATURUVA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 565000,
      "priceImpliedProjection": 44.1,
      "seasonAverage": 46.6,
      "last3Average": 58.3,
      "lastGameScore": 45,
      "scoreVolatility": 15.9,
      "homeAverage": 55.3,
      "awayAverage": 35
    },
    "TYRANWISHART": {
      "playerName": "Tyran Wishart",
      "key": "TYRANWISHART",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 257000,
      "priceImpliedProjection": 20.1,
      "seasonAverage": 20.4,
      "last3Average": 11.7,
      "lastGameScore": 20,
      "scoreVolatility": 11.3,
      "homeAverage": 24,
      "awayAverage": 16.8
    },
    "FONUAPOLE": {
      "playerName": "Fonua Pole",
      "key": "FONUAPOLE",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 396000,
      "priceImpliedProjection": 30.9,
      "seasonAverage": 31.3,
      "last3Average": 33.7,
      "lastGameScore": 38,
      "scoreVolatility": 7.6,
      "homeAverage": 29.5,
      "awayAverage": 33.7
    },
    "SIULAGITUIMALATUBROWN": {
      "playerName": "Siulagi Tuimalatu-Brown",
      "key": "SIULAGITUIMALATUBROWN",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 3,
      "last3Average": 3,
      "lastGameScore": -1,
      "scoreVolatility": 4.3,
      "homeAverage": 1,
      "awayAverage": 4
    },
    "SALESIFOKETI": {
      "playerName": "Salesi Foketi",
      "key": "SALESIFOKETI",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 13.3,
      "last3Average": 8.3,
      "lastGameScore": 12,
      "scoreVolatility": 8.7,
      "homeAverage": 17.7,
      "awayAverage": 10
    },
    "ADAMPOMPEY": {
      "playerName": "Adam Pompey",
      "key": "ADAMPOMPEY",
      "primaryPosition": "Centre",
      "gamesPlayed": 4,
      "currentPrice": 333000,
      "priceImpliedProjection": 26,
      "seasonAverage": 21.3,
      "last3Average": 15.3,
      "lastGameScore": 21,
      "scoreVolatility": 11.5,
      "homeAverage": 21.3,
      "awayAverage": 21
    },
    "KURTMANN": {
      "playerName": "Kurt Mann",
      "key": "KURTMANN",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 359000,
      "priceImpliedProjection": 28,
      "seasonAverage": 28.9,
      "last3Average": 25.7,
      "lastGameScore": 41,
      "scoreVolatility": 9.2,
      "homeAverage": 26,
      "awayAverage": 31
    },
    "MARCELOMONTOYA": {
      "playerName": "Marcelo Montoya",
      "key": "MARCELOMONTOYA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 331000,
      "priceImpliedProjection": 25.9,
      "seasonAverage": 26.6,
      "last3Average": 12.7,
      "lastGameScore": 14,
      "scoreVolatility": 13.3,
      "homeAverage": 31,
      "awayAverage": 23.3
    },
    "JERALSKELTON": {
      "playerName": "Jeral Skelton",
      "key": "JERALSKELTON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 418000,
      "priceImpliedProjection": 32.7,
      "seasonAverage": 34.3,
      "last3Average": 34.3,
      "lastGameScore": 26,
      "scoreVolatility": 17.7,
      "homeAverage": 42.5,
      "awayAverage": 18
    },
    "ETHANSANDERS": {
      "playerName": "Ethan Sanders",
      "key": "ETHANSANDERS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 8,
      "currentPrice": 511000,
      "priceImpliedProjection": 39.9,
      "seasonAverage": 43.9,
      "last3Average": 45.7,
      "lastGameScore": 43,
      "scoreVolatility": 9.2,
      "homeAverage": 47,
      "awayAverage": 42
    },
    "THOMASFLETCHER": {
      "playerName": "Thomas Fletcher",
      "key": "THOMASFLETCHER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 0,
      "last3Average": 0,
      "lastGameScore": 0,
      "scoreVolatility": 0,
      "homeAverage": 0,
      "awayAverage": 0
    },
    "JOSHKERR": {
      "playerName": "Josh Kerr",
      "key": "JOSHKERR",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 6,
      "currentPrice": 322000,
      "priceImpliedProjection": 25.2,
      "seasonAverage": 23.2,
      "last3Average": 22.7,
      "lastGameScore": 10,
      "scoreVolatility": 7.1,
      "homeAverage": 19.5,
      "awayAverage": 25
    },
    "SEANOSULLIVAN": {
      "playerName": "Sean O'Sullivan",
      "key": "SEANOSULLIVAN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "currentPrice": 309000,
      "priceImpliedProjection": 24.1,
      "seasonAverage": 13,
      "last3Average": 13,
      "lastGameScore": 11,
      "scoreVolatility": 2,
      "homeAverage": 15,
      "awayAverage": 11
    },
    "MATTHEWLODGE": {
      "playerName": "Matthew Lodge",
      "key": "MATTHEWLODGE",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 299000,
      "priceImpliedProjection": 23.4,
      "seasonAverage": 23,
      "last3Average": 23,
      "lastGameScore": 34,
      "scoreVolatility": 7.1,
      "homeAverage": 25.3,
      "awayAverage": 20
    },
    "LATUFAINU": {
      "playerName": "Latu Fainu",
      "key": "LATUFAINU",
      "primaryPosition": "Halfback",
      "gamesPlayed": 4,
      "currentPrice": 268000,
      "priceImpliedProjection": 20.9,
      "seasonAverage": 13.3,
      "last3Average": 12,
      "lastGameScore": 12,
      "scoreVolatility": 3.6,
      "homeAverage": 10,
      "awayAverage": 16.5
    },
    "BAILEYHAYWARD": {
      "playerName": "Bailey Hayward",
      "key": "BAILEYHAYWARD",
      "primaryPosition": null,
      "gamesPlayed": 7,
      "currentPrice": 440000,
      "priceImpliedProjection": 34.4,
      "seasonAverage": 35.7,
      "last3Average": 34.3,
      "lastGameScore": 22,
      "scoreVolatility": 13,
      "homeAverage": 32,
      "awayAverage": 38.5
    },
    "SIMISASAGI": {
      "playerName": "Simi Sasagi",
      "key": "SIMISASAGI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 651000,
      "priceImpliedProjection": 50.9,
      "seasonAverage": 56.7,
      "last3Average": 65.7,
      "lastGameScore": 73,
      "scoreVolatility": 12.4,
      "homeAverage": 55.7,
      "awayAverage": 57.5
    },
    "CLAYTONFAULALO": {
      "playerName": "Clayton Faulalo",
      "key": "CLAYTONFAULALO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 391000,
      "priceImpliedProjection": 30.5,
      "seasonAverage": 37,
      "last3Average": 37,
      "lastGameScore": 48,
      "scoreVolatility": 14.9,
      "homeAverage": 48,
      "awayAverage": 31.5
    },
    "LUCAMORETTI": {
      "playerName": "Luca Moretti",
      "key": "LUCAMORETTI",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 378000,
      "priceImpliedProjection": 29.5,
      "seasonAverage": 33.6,
      "last3Average": 41.3,
      "lastGameScore": 67,
      "scoreVolatility": 18.1,
      "homeAverage": 28,
      "awayAverage": 42
    },
    "ORYNKEELEY": {
      "playerName": "Oryn Keeley",
      "key": "ORYNKEELEY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 380000,
      "priceImpliedProjection": 29.7,
      "seasonAverage": 30.3,
      "last3Average": 30.3,
      "lastGameScore": 30,
      "scoreVolatility": 2.9,
      "homeAverage": 30.5,
      "awayAverage": 30
    },
    "ZACLAYBUTT": {
      "playerName": "Zac Laybutt",
      "key": "ZACLAYBUTT",
      "primaryPosition": "Centre",
      "gamesPlayed": 4,
      "currentPrice": 336000,
      "priceImpliedProjection": 26.3,
      "seasonAverage": 24.8,
      "last3Average": 21.7,
      "lastGameScore": 26,
      "scoreVolatility": 11.9,
      "homeAverage": 30,
      "awayAverage": 19.5
    },
    "SAMUELSTONESTREET": {
      "playerName": "Samuel Stonestreet",
      "key": "SAMUELSTONESTREET",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 367000,
      "priceImpliedProjection": 28.7,
      "seasonAverage": 28.7,
      "last3Average": 22,
      "lastGameScore": 18,
      "scoreVolatility": 9.2,
      "homeAverage": 29,
      "awayAverage": 28.3
    },
    "RONALDVOLKMAN": {
      "playerName": "Ronald Volkman",
      "key": "RONALDVOLKMAN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 3,
      "currentPrice": 311000,
      "priceImpliedProjection": 24.3,
      "seasonAverage": 32.7,
      "last3Average": 32.7,
      "lastGameScore": 28,
      "scoreVolatility": 4.6,
      "homeAverage": 35,
      "awayAverage": 28
    },
    "ATAMARIOTA": {
      "playerName": "Ata Mariota",
      "key": "ATAMARIOTA",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 342000,
      "priceImpliedProjection": 26.7,
      "seasonAverage": 27.1,
      "last3Average": 34.3,
      "lastGameScore": 37,
      "scoreVolatility": 7.2,
      "homeAverage": 25.3,
      "awayAverage": 28.2
    },
    "BRONSONGARLICK": {
      "playerName": "Bronson Garlick",
      "key": "BRONSONGARLICK",
      "primaryPosition": null,
      "gamesPlayed": 6,
      "currentPrice": 278000,
      "priceImpliedProjection": 21.7,
      "seasonAverage": 20.8,
      "last3Average": 25.3,
      "lastGameScore": 35,
      "scoreVolatility": 8.4,
      "homeAverage": 18.3,
      "awayAverage": 23.3
    },
    "ALECMACDONALD": {
      "playerName": "Alec MacDonald",
      "key": "ALECMACDONALD",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 357000,
      "priceImpliedProjection": 27.9,
      "seasonAverage": 26.7,
      "last3Average": 28,
      "lastGameScore": 30,
      "scoreVolatility": 12.1,
      "homeAverage": 25,
      "awayAverage": 29
    },
    "MARATANIUKORE": {
      "playerName": "Marata Niukore",
      "key": "MARATANIUKORE",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 366000,
      "priceImpliedProjection": 28.6,
      "seasonAverage": 29.5,
      "last3Average": 24.7,
      "lastGameScore": 37,
      "scoreVolatility": 11.3,
      "homeAverage": 20,
      "awayAverage": 32.7
    },
    "SEANRUSSELL": {
      "playerName": "Sean Russell",
      "key": "SEANRUSSELL",
      "primaryPosition": "Centre",
      "gamesPlayed": 6,
      "currentPrice": 387000,
      "priceImpliedProjection": 30.2,
      "seasonAverage": 31.7,
      "last3Average": 30,
      "lastGameScore": 29,
      "scoreVolatility": 11.6,
      "homeAverage": 21,
      "awayAverage": 37
    },
    "ALILEIATAUA": {
      "playerName": "Ali Leiataua",
      "key": "ALILEIATAUA",
      "primaryPosition": "Centre",
      "gamesPlayed": 6,
      "currentPrice": 432000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 35.3,
      "last3Average": 36,
      "lastGameScore": 31,
      "scoreVolatility": 12.1,
      "homeAverage": 35.5,
      "awayAverage": 35
    },
    "LIPOIHOPOI": {
      "playerName": "Lipoi Hopoi",
      "key": "LIPOIHOPOI",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 262000,
      "priceImpliedProjection": 20.5,
      "seasonAverage": 12,
      "last3Average": 12,
      "lastGameScore": 17,
      "scoreVolatility": 5,
      "homeAverage": 7,
      "awayAverage": 17
    },
    "DAVVYMOALE": {
      "playerName": "Davvy Moale",
      "key": "DAVVYMOALE",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 265000,
      "priceImpliedProjection": 20.7,
      "seasonAverage": 15.3,
      "last3Average": 15.7,
      "lastGameScore": 19,
      "scoreVolatility": 5.4,
      "homeAverage": 18,
      "awayAverage": 7
    },
    "JAEMANSALMON": {
      "playerName": "Jaeman Salmon",
      "key": "JAEMANSALMON",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 429000,
      "priceImpliedProjection": 33.5,
      "seasonAverage": 36.6,
      "last3Average": 37.3,
      "lastGameScore": 52,
      "scoreVolatility": 9.6,
      "homeAverage": 38,
      "awayAverage": 35.5
    },
    "TYRELLSLOAN": {
      "playerName": "Tyrell Sloan",
      "key": "TYRELLSLOAN",
      "primaryPosition": "Fullback",
      "gamesPlayed": 4,
      "currentPrice": 352000,
      "priceImpliedProjection": 27.5,
      "seasonAverage": 26,
      "last3Average": 26.7,
      "lastGameScore": 15,
      "scoreVolatility": 14.9,
      "homeAverage": 33,
      "awayAverage": 19
    },
    "SIONEFAINU": {
      "playerName": "Sione Fainu",
      "key": "SIONEFAINU",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 374000,
      "priceImpliedProjection": 29.2,
      "seasonAverage": 30.4,
      "last3Average": 30.7,
      "lastGameScore": 33,
      "scoreVolatility": 6.6,
      "homeAverage": 29.8,
      "awayAverage": 31.3
    },
    "THOMASMIKAELE": {
      "playerName": "Thomas Mikaele",
      "key": "THOMASMIKAELE",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 450000,
      "priceImpliedProjection": 35.2,
      "seasonAverage": 38.3,
      "last3Average": 49,
      "lastGameScore": 56,
      "scoreVolatility": 15.3,
      "homeAverage": 37.7,
      "awayAverage": 39
    },
    "JESSEARTHARS": {
      "playerName": "Jesse Arthars",
      "key": "JESSEARTHARS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 411000,
      "priceImpliedProjection": 32.1,
      "seasonAverage": 36.3,
      "last3Average": 36.3,
      "lastGameScore": 14,
      "scoreVolatility": 16.4,
      "homeAverage": 42,
      "awayAverage": 33.5
    },
    "FELISEKAUFUSI": {
      "playerName": "Felise Kaufusi",
      "key": "FELISEKAUFUSI",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 302000,
      "priceImpliedProjection": 23.6,
      "seasonAverage": 23.1,
      "last3Average": 20.3,
      "lastGameScore": 21,
      "scoreVolatility": 4.6,
      "homeAverage": 23.5,
      "awayAverage": 22.7
    },
    "NATHANBROWN": {
      "playerName": "Nathan Brown",
      "key": "NATHANBROWN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 298000,
      "priceImpliedProjection": 23.3,
      "seasonAverage": 9,
      "last3Average": 9,
      "lastGameScore": 10,
      "scoreVolatility": 1,
      "homeAverage": 9,
      "awayAverage": 9
    },
    "LOKOPASIFIKITONGA": {
      "playerName": "Loko Pasifiki Tonga",
      "key": "LOKOPASIFIKITONGA",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 341000,
      "priceImpliedProjection": 26.6,
      "seasonAverage": 27,
      "last3Average": 27,
      "lastGameScore": 32,
      "scoreVolatility": 5,
      "homeAverage": 32,
      "awayAverage": 22
    },
    "CODYWALKER": {
      "playerName": "Cody Walker",
      "key": "CODYWALKER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 440000,
      "priceImpliedProjection": 34.4,
      "seasonAverage": 36.6,
      "last3Average": 41.7,
      "lastGameScore": 33,
      "scoreVolatility": 12.4,
      "homeAverage": 37.5,
      "awayAverage": 35.3
    },
    "JASONSAAB": {
      "playerName": "Jason Saab",
      "key": "JASONSAAB",
      "primaryPosition": "Fullback",
      "gamesPlayed": 6,
      "currentPrice": 265000,
      "priceImpliedProjection": 20.7,
      "seasonAverage": 19.2,
      "last3Average": 21.3,
      "lastGameScore": 28,
      "scoreVolatility": 8.1,
      "homeAverage": 19.8,
      "awayAverage": 18
    },
    "JESSECOLQUHOUN": {
      "playerName": "Jesse Colquhoun",
      "key": "JESSECOLQUHOUN",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 520000,
      "priceImpliedProjection": 40.6,
      "seasonAverage": 44.4,
      "last3Average": 44.3,
      "lastGameScore": 35,
      "scoreVolatility": 10.3,
      "homeAverage": 45.3,
      "awayAverage": 43.3
    },
    "TOBYRUDOLF": {
      "playerName": "Toby Rudolf",
      "key": "TOBYRUDOLF",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 375000,
      "priceImpliedProjection": 29.3,
      "seasonAverage": 28.7,
      "last3Average": 33.7,
      "lastGameScore": 20,
      "scoreVolatility": 8.5,
      "homeAverage": 32,
      "awayAverage": 24.3
    },
    "SIOSIFATALAKAI": {
      "playerName": "Siosifa Talakai",
      "key": "SIOSIFATALAKAI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 356000,
      "priceImpliedProjection": 27.8,
      "seasonAverage": 29.1,
      "last3Average": 46,
      "lastGameScore": 70,
      "scoreVolatility": 19,
      "homeAverage": 25.5,
      "awayAverage": 34
    },
    "TANNERSTOWERSSMITH": {
      "playerName": "Tanner Stowers-Smith",
      "key": "TANNERSTOWERSSMITH",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 355000,
      "priceImpliedProjection": 27.7,
      "seasonAverage": 27.6,
      "last3Average": 30.7,
      "lastGameScore": 17,
      "scoreVolatility": 9,
      "homeAverage": 29,
      "awayAverage": 25.5
    },
    "BLAKELAWRIE": {
      "playerName": "Blake Lawrie",
      "key": "BLAKELAWRIE",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 356000,
      "priceImpliedProjection": 27.8,
      "seasonAverage": 28.3,
      "last3Average": 24,
      "lastGameScore": 16,
      "scoreVolatility": 11.9,
      "homeAverage": 23.3,
      "awayAverage": 33.3
    },
    "BRADSCHNEIDER": {
      "playerName": "Brad Schneider",
      "key": "BRADSCHNEIDER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 5,
      "currentPrice": 317000,
      "priceImpliedProjection": 24.8,
      "seasonAverage": 24.2,
      "last3Average": 16.7,
      "lastGameScore": 28,
      "scoreVolatility": 12.5,
      "homeAverage": 33,
      "awayAverage": 11
    },
    "KEANOKINI": {
      "playerName": "Keano Kini",
      "key": "KEANOKINI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 614000,
      "priceImpliedProjection": 48,
      "seasonAverage": 48.6,
      "last3Average": 53.7,
      "lastGameScore": 43,
      "scoreVolatility": 18.4,
      "homeAverage": 33.5,
      "awayAverage": 54.6
    },
    "JACOBLABAN": {
      "playerName": "Jacob Laban",
      "key": "JACOBLABAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 320000,
      "priceImpliedProjection": 25,
      "seasonAverage": 25,
      "last3Average": 17,
      "lastGameScore": 10,
      "scoreVolatility": 13.7,
      "homeAverage": 25.2,
      "awayAverage": 24.7
    },
    "JACKGOSIEWSKI": {
      "playerName": "Jack Gosiewski",
      "key": "JACKGOSIEWSKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 4,
      "currentPrice": 353000,
      "priceImpliedProjection": 27.6,
      "seasonAverage": 33.3,
      "last3Average": 34,
      "lastGameScore": 58,
      "scoreVolatility": 19,
      "homeAverage": 31.3,
      "awayAverage": 39
    },
    "BRADENHAMLINUELE": {
      "playerName": "Braden Hamlin-Uele",
      "key": "BRADENHAMLINUELE",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 297000,
      "priceImpliedProjection": 23.2,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 15,
      "scoreVolatility": 1,
      "homeAverage": 13,
      "awayAverage": 15
    },
    "HARRISONGRAHAM": {
      "playerName": "Harrison Graham",
      "key": "HARRISONGRAHAM",
      "primaryPosition": null,
      "gamesPlayed": 6,
      "currentPrice": 357000,
      "priceImpliedProjection": 27.9,
      "seasonAverage": 30.2,
      "last3Average": 28,
      "lastGameScore": 34,
      "scoreVolatility": 6.9,
      "homeAverage": 33.5,
      "awayAverage": 28.5
    },
    "BENAIAHIOELU": {
      "playerName": "Benaiah Ioelu",
      "key": "BENAIAHIOELU",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "currentPrice": 342000,
      "priceImpliedProjection": 26.7,
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
      "gamesPlayed": 5,
      "currentPrice": 358000,
      "priceImpliedProjection": 28,
      "seasonAverage": 30.8,
      "last3Average": 30.3,
      "lastGameScore": 45,
      "scoreVolatility": 8.1,
      "homeAverage": 33.7,
      "awayAverage": 26.5
    },
    "BRANDONSMITH": {
      "playerName": "Brandon Smith",
      "key": "BRANDONSMITH",
      "primaryPosition": null,
      "gamesPlayed": 3,
      "currentPrice": 333000,
      "priceImpliedProjection": 26,
      "seasonAverage": 29.3,
      "last3Average": 29.3,
      "lastGameScore": 12,
      "scoreVolatility": 15.2,
      "homeAverage": 38,
      "awayAverage": 12
    },
    "TUKIMIHIASIMPKINS": {
      "playerName": "Tukimihia Simpkins",
      "key": "TUKIMIHIASIMPKINS",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 257000,
      "priceImpliedProjection": 20.1,
      "seasonAverage": 20,
      "last3Average": 20,
      "lastGameScore": 11,
      "scoreVolatility": 9,
      "homeAverage": 20,
      "awayAverage": 20
    },
    "JOASHPAPALII": {
      "playerName": "Joash Papalii",
      "key": "JOASHPAPALII",
      "primaryPosition": "Fullback",
      "gamesPlayed": 6,
      "currentPrice": 273000,
      "priceImpliedProjection": 21.3,
      "seasonAverage": 20.8,
      "last3Average": 28,
      "lastGameScore": 41,
      "scoreVolatility": 12.7,
      "homeAverage": 24,
      "awayAverage": 17.7
    },
    "XAVIERSAVAGE": {
      "playerName": "Xavier Savage",
      "key": "XAVIERSAVAGE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 427000,
      "priceImpliedProjection": 33.4,
      "seasonAverage": 37,
      "last3Average": 33.3,
      "lastGameScore": 18,
      "scoreVolatility": 11.8,
      "homeAverage": 41,
      "awayAverage": 34.3
    },
    "BRENDANPIAKURA": {
      "playerName": "Brendan Piakura",
      "key": "BRENDANPIAKURA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 6,
      "currentPrice": 298000,
      "priceImpliedProjection": 23.3,
      "seasonAverage": 23.2,
      "last3Average": 23,
      "lastGameScore": 19,
      "scoreVolatility": 2.8,
      "homeAverage": 23.3,
      "awayAverage": 23
    },
    "JORDANSAMRANI": {
      "playerName": "Jordan Samrani",
      "key": "JORDANSAMRANI",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "currentPrice": 295000,
      "priceImpliedProjection": 23,
      "seasonAverage": 19.5,
      "last3Average": 19.5,
      "lastGameScore": 22,
      "scoreVolatility": 2.5,
      "homeAverage": 22,
      "awayAverage": 17
    },
    "JOECHAN": {
      "playerName": "Joe Chan",
      "key": "JOECHAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 509000,
      "priceImpliedProjection": 39.8,
      "seasonAverage": 46.4,
      "last3Average": 28.7,
      "lastGameScore": 32,
      "scoreVolatility": 20.8,
      "homeAverage": 48.5,
      "awayAverage": 44.3
    },
    "DALLINWATENEZELEZNIAK": {
      "playerName": "Dallin Watene-Zelezniak",
      "key": "DALLINWATENEZELEZNIAK",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 436000,
      "priceImpliedProjection": 34.1,
      "seasonAverage": 33.5,
      "last3Average": 33.7,
      "lastGameScore": 17,
      "scoreVolatility": 16.5,
      "homeAverage": 25.4,
      "awayAverage": 47
    },
    "TRISTANHOPE": {
      "playerName": "Tristan Hope",
      "key": "TRISTANHOPE",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "currentPrice": 242000,
      "priceImpliedProjection": 18.9,
      "seasonAverage": 13,
      "last3Average": 13,
      "lastGameScore": 13,
      "scoreVolatility": 0,
      "homeAverage": 13,
      "awayAverage": 13
    },
    "THOMASDUFFY": {
      "playerName": "Thomas Duffy",
      "key": "THOMASDUFFY",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 302000,
      "priceImpliedProjection": 23.6,
      "seasonAverage": 70,
      "last3Average": 70,
      "lastGameScore": 70,
      "scoreVolatility": 0,
      "homeAverage": 70,
      "awayAverage": 70
    },
    "JEDSTUART": {
      "playerName": "Jed Stuart",
      "key": "JEDSTUART",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 260000,
      "priceImpliedProjection": 20.3,
      "seasonAverage": 18,
      "last3Average": 18,
      "lastGameScore": 29,
      "scoreVolatility": 7.8,
      "homeAverage": 13,
      "awayAverage": 20.5
    },
    "MATTDOOREY": {
      "playerName": "Matt Doorey",
      "key": "MATTDOOREY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 4,
      "currentPrice": 253000,
      "priceImpliedProjection": 19.8,
      "seasonAverage": 17.3,
      "last3Average": 19,
      "lastGameScore": 19,
      "scoreVolatility": 4.1,
      "homeAverage": 23,
      "awayAverage": 15.3
    },
    "SAMTUIVAITI": {
      "playerName": "Sam Tuivaiti",
      "key": "SAMTUIVAITI",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 312000,
      "priceImpliedProjection": 24.4,
      "seasonAverage": 24.4,
      "last3Average": 21,
      "lastGameScore": 11,
      "scoreVolatility": 7.9,
      "homeAverage": 25,
      "awayAverage": 23.5
    },
    "JOSHPATSTON": {
      "playerName": "Josh Patston",
      "key": "JOSHPATSTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 256000,
      "priceImpliedProjection": 20,
      "seasonAverage": 27,
      "last3Average": 27,
      "lastGameScore": 27,
      "scoreVolatility": 0,
      "homeAverage": 27,
      "awayAverage": 27
    },
    "LUKELAULILII": {
      "playerName": "Luke Laulilii",
      "key": "LUKELAULILII",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 368000,
      "priceImpliedProjection": 28.8,
      "seasonAverage": 35.2,
      "last3Average": 32.3,
      "lastGameScore": 42,
      "scoreVolatility": 13.8,
      "homeAverage": 50,
      "awayAverage": 25.3
    },
    "ATIVALULISATI": {
      "playerName": "Ativalu Lisati",
      "key": "ATIVALULISATI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "currentPrice": 427000,
      "priceImpliedProjection": 33.4,
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
      "currentPrice": 242000,
      "priceImpliedProjection": 18.9,
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
      "gamesPlayed": 7,
      "currentPrice": 319000,
      "priceImpliedProjection": 24.9,
      "seasonAverage": 27.3,
      "last3Average": 29.7,
      "lastGameScore": 45,
      "scoreVolatility": 8.3,
      "homeAverage": 23.5,
      "awayAverage": 28.8
    },
    "KAIODONNELL": {
      "playerName": "Kai O'Donnell",
      "key": "KAIODONNELL",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 5,
      "currentPrice": 321000,
      "priceImpliedProjection": 25.1,
      "seasonAverage": 27,
      "last3Average": 27.3,
      "lastGameScore": 19,
      "scoreVolatility": 8.1,
      "homeAverage": 19,
      "awayAverage": 29
    },
    "JAYDENSULLIVAN": {
      "playerName": "Jayden Sullivan",
      "key": "JAYDENSULLIVAN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 6,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 13,
      "last3Average": 10.7,
      "lastGameScore": 17,
      "scoreVolatility": 7,
      "homeAverage": 7,
      "awayAverage": 19
    },
    "JAKETURPIN": {
      "playerName": "Jake Turpin",
      "key": "JAKETURPIN",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "currentPrice": 249000,
      "priceImpliedProjection": 19.5,
      "seasonAverage": 19.5,
      "last3Average": 19.5,
      "lastGameScore": 35,
      "scoreVolatility": 15.5,
      "homeAverage": 4,
      "awayAverage": 35
    },
    "MANAIAWAITERE": {
      "playerName": "Manaia Waitere",
      "key": "MANAIAWAITERE",
      "primaryPosition": "Centre",
      "gamesPlayed": 5,
      "currentPrice": 288000,
      "priceImpliedProjection": 22.5,
      "seasonAverage": 24.4,
      "last3Average": 15.7,
      "lastGameScore": 22,
      "scoreVolatility": 17.1,
      "homeAverage": 12,
      "awayAverage": 32.7
    },
    "JAIYDENHUNT": {
      "playerName": "Jaiyden Hunt",
      "key": "JAIYDENHUNT",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 254000,
      "priceImpliedProjection": 19.8,
      "seasonAverage": 13,
      "last3Average": 13,
      "lastGameScore": 13,
      "scoreVolatility": 0,
      "homeAverage": 13,
      "awayAverage": 13
    },
    "NOAHMARTIN": {
      "playerName": "Noah Martin",
      "key": "NOAHMARTIN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 575000,
      "priceImpliedProjection": 44.9,
      "seasonAverage": 51.5,
      "last3Average": 35,
      "lastGameScore": 23,
      "scoreVolatility": 16.6,
      "homeAverage": 45.3,
      "awayAverage": 55.2
    },
    "JAYLANDEGROOT": {
      "playerName": "Jaylan De Groot",
      "key": "JAYLANDEGROOT",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "currentPrice": 244000,
      "priceImpliedProjection": 19.1,
      "seasonAverage": 15,
      "last3Average": 15,
      "lastGameScore": 15,
      "scoreVolatility": 0,
      "homeAverage": 15,
      "awayAverage": 15
    },
    "FREDDYLUSSICK": {
      "playerName": "Freddy Lussick",
      "key": "FREDDYLUSSICK",
      "primaryPosition": null,
      "gamesPlayed": 5,
      "currentPrice": 351000,
      "priceImpliedProjection": 27.4,
      "seasonAverage": 32.2,
      "last3Average": 41.7,
      "lastGameScore": 33,
      "scoreVolatility": 14.7,
      "homeAverage": 40.5,
      "awayAverage": 26.7
    },
    "JACKHETHERINGTON": {
      "playerName": "Jack Hetherington",
      "key": "JACKHETHERINGTON",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 239000,
      "priceImpliedProjection": 18.7,
      "seasonAverage": 16.7,
      "last3Average": 16.7,
      "lastGameScore": 12,
      "scoreVolatility": 3.7,
      "homeAverage": 16.7,
      "awayAverage": 16.7
    },
    "MOSESLEO": {
      "playerName": "Moses Leo",
      "key": "MOSESLEO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 319000,
      "priceImpliedProjection": 24.9,
      "seasonAverage": 27,
      "last3Average": 13,
      "lastGameScore": 12,
      "scoreVolatility": 21.4,
      "homeAverage": 32,
      "awayAverage": 19.5
    },
    "ROYCEHUNT": {
      "playerName": "Royce Hunt",
      "key": "ROYCEHUNT",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 294000,
      "priceImpliedProjection": 23,
      "seasonAverage": 24.6,
      "last3Average": 27.7,
      "lastGameScore": 44,
      "scoreVolatility": 9.4,
      "homeAverage": 24,
      "awayAverage": 25.3
    },
    "TALLYNDASILVA": {
      "playerName": "Tallyn Da Silva",
      "key": "TALLYNDASILVA",
      "primaryPosition": null,
      "gamesPlayed": 8,
      "currentPrice": 291000,
      "priceImpliedProjection": 22.7,
      "seasonAverage": 24,
      "last3Average": 28.7,
      "lastGameScore": 31,
      "scoreVolatility": 10.7,
      "homeAverage": 29,
      "awayAverage": 19
    },
    "ELIJAHSALESALEAUMOANA": {
      "playerName": "Elijah Salesa-Leaumoana",
      "key": "ELIJAHSALESALEAUMOANA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 238000,
      "priceImpliedProjection": 18.6,
      "seasonAverage": 11,
      "last3Average": 11,
      "lastGameScore": 11,
      "scoreVolatility": 0,
      "homeAverage": 11,
      "awayAverage": 11
    },
    "CAMERONMURRAY": {
      "playerName": "Cameron Murray",
      "key": "CAMERONMURRAY",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 632000,
      "priceImpliedProjection": 49.4,
      "seasonAverage": 48.3,
      "last3Average": 43,
      "lastGameScore": 35,
      "scoreVolatility": 6.9,
      "homeAverage": 48.5,
      "awayAverage": 48
    },
    "TONIMATAELE": {
      "playerName": "Toni Mataele",
      "key": "TONIMATAELE",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "currentPrice": 243000,
      "priceImpliedProjection": 19,
      "seasonAverage": 19.5,
      "last3Average": 19.5,
      "lastGameScore": 24,
      "scoreVolatility": 4.5,
      "homeAverage": 15,
      "awayAverage": 24
    },
    "JONAHPEZET": {
      "playerName": "Jonah Pezet",
      "key": "JONAHPEZET",
      "primaryPosition": "Halfback",
      "gamesPlayed": 5,
      "currentPrice": 343000,
      "priceImpliedProjection": 26.8,
      "seasonAverage": 23.6,
      "last3Average": 23,
      "lastGameScore": 16,
      "scoreVolatility": 7.7,
      "homeAverage": 21,
      "awayAverage": 25.3
    },
    "HOHEPAPURU": {
      "playerName": "Hohepa Puru",
      "key": "HOHEPAPURU",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 244000,
      "priceImpliedProjection": 19.1,
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
      "gamesPlayed": 8,
      "currentPrice": 469000,
      "priceImpliedProjection": 36.6,
      "seasonAverage": 39.6,
      "last3Average": 32.3,
      "lastGameScore": 43,
      "scoreVolatility": 11.8,
      "homeAverage": 41.5,
      "awayAverage": 37.8
    },
    "KAIDENLAHRS": {
      "playerName": "Kaiden Lahrs",
      "key": "KAIDENLAHRS",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 243000,
      "priceImpliedProjection": 19,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 14,
      "scoreVolatility": 0,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "ARAMAHAU": {
      "playerName": "Arama Hau",
      "key": "ARAMAHAU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 610000,
      "priceImpliedProjection": 47.7,
      "seasonAverage": 53,
      "last3Average": 52.7,
      "lastGameScore": 54,
      "scoreVolatility": 15.6,
      "homeAverage": 67.5,
      "awayAverage": 47.2
    },
    "PETERHOLA": {
      "playerName": "Peter Hola",
      "key": "PETERHOLA",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 232000,
      "priceImpliedProjection": 18.1,
      "seasonAverage": 4,
      "last3Average": 4,
      "lastGameScore": 4,
      "scoreVolatility": 0,
      "homeAverage": 4,
      "awayAverage": 4
    },
    "MATTHEWDUFTY": {
      "playerName": "Matthew Dufty",
      "key": "MATTHEWDUFTY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 443000,
      "priceImpliedProjection": 34.6,
      "seasonAverage": 63,
      "last3Average": 63,
      "lastGameScore": 66,
      "scoreVolatility": 3,
      "homeAverage": 60,
      "awayAverage": 66
    },
    "TUIKAMIKAMICA": {
      "playerName": "Tui Kamikamica",
      "key": "TUIKAMIKAMICA",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 282000,
      "priceImpliedProjection": 22,
      "seasonAverage": 22.8,
      "last3Average": 21.7,
      "lastGameScore": 14,
      "scoreVolatility": 6,
      "homeAverage": 23.5,
      "awayAverage": 22
    },
    "SONILUKE": {
      "playerName": "Soni Luke",
      "key": "SONILUKE",
      "primaryPosition": null,
      "gamesPlayed": 6,
      "currentPrice": 359000,
      "priceImpliedProjection": 28,
      "seasonAverage": 29.3,
      "last3Average": 48.7,
      "lastGameScore": 40,
      "scoreVolatility": 22.9,
      "homeAverage": 22.5,
      "awayAverage": 43
    },
    "FETALAIGAPAUGA": {
      "playerName": "Fetalaiga Pauga",
      "key": "FETALAIGAPAUGA",
      "primaryPosition": "Centre",
      "gamesPlayed": 3,
      "currentPrice": 374000,
      "priceImpliedProjection": 29.2,
      "seasonAverage": 30.3,
      "last3Average": 30.3,
      "lastGameScore": 22,
      "scoreVolatility": 7.9,
      "homeAverage": 25,
      "awayAverage": 41
    },
    "PATRICKHERBERT": {
      "playerName": "Patrick Herbert",
      "key": "PATRICKHERBERT",
      "primaryPosition": "Centre",
      "gamesPlayed": 3,
      "currentPrice": 312000,
      "priceImpliedProjection": 24.4,
      "seasonAverage": 28,
      "last3Average": 28,
      "lastGameScore": 1,
      "scoreVolatility": 21.3,
      "homeAverage": 28,
      "awayAverage": 28
    },
    "PASAMISAULO": {
      "playerName": "Pasami Saulo",
      "key": "PASAMISAULO",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 310000,
      "priceImpliedProjection": 24.2,
      "seasonAverage": 25.4,
      "last3Average": 26.3,
      "lastGameScore": 32,
      "scoreVolatility": 6.8,
      "homeAverage": 22.5,
      "awayAverage": 28.3
    },
    "KALANIGOING": {
      "playerName": "Kalani Going",
      "key": "KALANIGOING",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 12.7,
      "last3Average": 12.7,
      "lastGameScore": 14,
      "scoreVolatility": 2.6,
      "homeAverage": 15,
      "awayAverage": 11.5
    },
    "BRANDONWAKEHAM": {
      "playerName": "Brandon Wakeham",
      "key": "BRANDONWAKEHAM",
      "primaryPosition": "Halfback",
      "gamesPlayed": 6,
      "currentPrice": 298000,
      "priceImpliedProjection": 23.3,
      "seasonAverage": 24.7,
      "last3Average": 34.3,
      "lastGameScore": 60,
      "scoreVolatility": 16.4,
      "homeAverage": 30,
      "awayAverage": 19.3
    },
    "THOMASFLEGLER": {
      "playerName": "Thomas Flegler",
      "key": "THOMASFLEGLER",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 431000,
      "priceImpliedProjection": 33.7,
      "seasonAverage": 32.5,
      "last3Average": 30.3,
      "lastGameScore": 27,
      "scoreVolatility": 8.7,
      "homeAverage": 32.5,
      "awayAverage": 32.5
    },
    "BENTALTY": {
      "playerName": "Ben Talty",
      "key": "BENTALTY",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 433000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 33.9,
      "last3Average": 57,
      "lastGameScore": 57,
      "scoreVolatility": 18.8,
      "homeAverage": 33.8,
      "awayAverage": 34
    },
    "JOSHROGERS": {
      "playerName": "Josh Rogers",
      "key": "JOSHROGERS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 3,
      "currentPrice": 306000,
      "priceImpliedProjection": 23.9,
      "seasonAverage": 31.3,
      "last3Average": 31.3,
      "lastGameScore": 22,
      "scoreVolatility": 9.9,
      "homeAverage": 24.5,
      "awayAverage": 45
    },
    "JOCKMADDEN": {
      "playerName": "Jock Madden",
      "key": "JOCKMADDEN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 4,
      "currentPrice": 507000,
      "priceImpliedProjection": 39.6,
      "seasonAverage": 46.8,
      "last3Average": 43.7,
      "lastGameScore": 9,
      "scoreVolatility": 22.4,
      "homeAverage": 31.5,
      "awayAverage": 62
    },
    "MORGANKNOWLES": {
      "playerName": "Morgan Knowles",
      "key": "MORGANKNOWLES",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 463000,
      "priceImpliedProjection": 36.2,
      "seasonAverage": 32.7,
      "last3Average": 25.7,
      "lastGameScore": 7,
      "scoreVolatility": 12.5,
      "homeAverage": 29.3,
      "awayAverage": 39.5
    },
    "HAYZEPERHAM": {
      "playerName": "Hayze Perham",
      "key": "HAYZEPERHAM",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 243000,
      "priceImpliedProjection": 19,
      "seasonAverage": 20.5,
      "last3Average": 20.5,
      "lastGameScore": 30,
      "scoreVolatility": 9.5,
      "homeAverage": 30,
      "awayAverage": 11
    },
    "BRENTWOOLF": {
      "playerName": "Brent Woolf",
      "key": "BRENTWOOLF",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 15,
      "last3Average": 15,
      "lastGameScore": 15,
      "scoreVolatility": 0,
      "homeAverage": 15,
      "awayAverage": 15
    },
    "PRESTONRIKI": {
      "playerName": "Preston Riki",
      "key": "PRESTONRIKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 259000,
      "priceImpliedProjection": 20.2,
      "seasonAverage": 30,
      "last3Average": 30,
      "lastGameScore": 30,
      "scoreVolatility": 0,
      "homeAverage": 30,
      "awayAverage": 30
    },
    "HUGOSAVALA": {
      "playerName": "Hugo Savala",
      "key": "HUGOSAVALA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 4,
      "currentPrice": 406000,
      "priceImpliedProjection": 31.7,
      "seasonAverage": 29.8,
      "last3Average": 36.7,
      "lastGameScore": 27,
      "scoreVolatility": 13.6,
      "homeAverage": 38,
      "awayAverage": 27
    },
    "SETUTU": {
      "playerName": "Setu Tu",
      "key": "SETUTU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 6,
      "currentPrice": 433000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 40.3,
      "last3Average": 47.3,
      "lastGameScore": 47,
      "scoreVolatility": 11.6,
      "homeAverage": 38.7,
      "awayAverage": 42
    },
    "HEILUMLUKI": {
      "playerName": "Heilum Luki",
      "key": "HEILUMLUKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 655000,
      "priceImpliedProjection": 51.2,
      "seasonAverage": 58.1,
      "last3Average": 56,
      "lastGameScore": 69,
      "scoreVolatility": 10.1,
      "homeAverage": 53.5,
      "awayAverage": 62.8
    },
    "TOMCHESTER": {
      "playerName": "Tom Chester",
      "key": "TOMCHESTER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 559000,
      "priceImpliedProjection": 43.7,
      "seasonAverage": 51.1,
      "last3Average": 57,
      "lastGameScore": 62,
      "scoreVolatility": 13.9,
      "homeAverage": 43.7,
      "awayAverage": 56.8
    },
    "PAULBRYAN": {
      "playerName": "Paul Bryan",
      "key": "PAULBRYAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 9,
      "last3Average": 9,
      "lastGameScore": 3,
      "scoreVolatility": 6,
      "homeAverage": 9,
      "awayAverage": 9
    },
    "ASHTONWARD": {
      "playerName": "Ashton Ward",
      "key": "ASHTONWARD",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 381000,
      "priceImpliedProjection": 29.8,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 14,
      "scoreVolatility": 0,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "LUKEHANSON": {
      "playerName": "Luke Hanson",
      "key": "LUKEHANSON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 252000,
      "priceImpliedProjection": 19.7,
      "seasonAverage": 39,
      "last3Average": 39,
      "lastGameScore": 39,
      "scoreVolatility": 0,
      "homeAverage": 39,
      "awayAverage": 39
    },
    "SAXONPRYKE": {
      "playerName": "Saxon Pryke",
      "key": "SAXONPRYKE",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 288000,
      "priceImpliedProjection": 22.5,
      "seasonAverage": 40,
      "last3Average": 40,
      "lastGameScore": 41,
      "scoreVolatility": 1,
      "homeAverage": 39,
      "awayAverage": 41
    },
    "ARAZNANVA": {
      "playerName": "Araz Nanva",
      "key": "ARAZNANVA",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "currentPrice": 257000,
      "priceImpliedProjection": 20.1,
      "seasonAverage": 29,
      "last3Average": 29,
      "lastGameScore": 31,
      "scoreVolatility": 2,
      "homeAverage": 29,
      "awayAverage": 29
    },
    "JOSHFELEDY": {
      "playerName": "Josh Feledy",
      "key": "JOSHFELEDY",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "currentPrice": 269000,
      "priceImpliedProjection": 21,
      "seasonAverage": 9,
      "last3Average": 9,
      "lastGameScore": 9,
      "scoreVolatility": 0,
      "homeAverage": 9,
      "awayAverage": 9
    },
    "WILSONDECOURCEY": {
      "playerName": "Wilson De Courcey",
      "key": "WILSONDECOURCEY",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 5.5,
      "last3Average": 5.5,
      "lastGameScore": 0,
      "scoreVolatility": 5.5,
      "homeAverage": 11,
      "awayAverage": 0
    },
    "FAALETINOTAVANA": {
      "playerName": "Faaletino Tavana",
      "key": "FAALETINOTAVANA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 246000,
      "priceImpliedProjection": 19.2,
      "seasonAverage": 25,
      "last3Average": 25,
      "lastGameScore": 29,
      "scoreVolatility": 4,
      "homeAverage": 25,
      "awayAverage": 25
    },
    "PRESTONCONN": {
      "playerName": "Preston Conn",
      "key": "PRESTONCONN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 5,
      "last3Average": 5,
      "lastGameScore": 5,
      "scoreVolatility": 0,
      "homeAverage": 5,
      "awayAverage": 5
    },
    "ADAMCHRISTENSEN": {
      "playerName": "Adam Christensen",
      "key": "ADAMCHRISTENSEN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 10,
      "last3Average": 10,
      "lastGameScore": 10,
      "scoreVolatility": 0,
      "homeAverage": 10,
      "awayAverage": 10
    },
    "RYANCOUCHMAN": {
      "playerName": "Ryan Couchman",
      "key": "RYANCOUCHMAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 4,
      "currentPrice": 479000,
      "priceImpliedProjection": 37.4,
      "seasonAverage": 52.8,
      "last3Average": 51,
      "lastGameScore": 42,
      "scoreVolatility": 6.8,
      "homeAverage": 50.5,
      "awayAverage": 55
    },
    "FLETCHERHUNT": {
      "playerName": "Fletcher Hunt",
      "key": "FLETCHERHUNT",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 493000,
      "priceImpliedProjection": 38.5,
      "seasonAverage": 41.9,
      "last3Average": 39.7,
      "lastGameScore": 8,
      "scoreVolatility": 17.4,
      "homeAverage": 29.7,
      "awayAverage": 51
    },
    "BILLYPHILLIPS": {
      "playerName": "Billy Phillips",
      "key": "BILLYPHILLIPS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 306000,
      "priceImpliedProjection": 23.9,
      "seasonAverage": 25.8,
      "last3Average": 24,
      "lastGameScore": 30,
      "scoreVolatility": 8,
      "homeAverage": 30.7,
      "awayAverage": 22.8
    },
    "MORGANGANNON": {
      "playerName": "Morgan Gannon",
      "key": "MORGANGANNON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 409000,
      "priceImpliedProjection": 32,
      "seasonAverage": -1,
      "last3Average": -1,
      "lastGameScore": -1,
      "scoreVolatility": 0,
      "homeAverage": -1,
      "awayAverage": -1
    },
    "CAMERONBUKOWSKI": {
      "playerName": "Cameron Bukowski",
      "key": "CAMERONBUKOWSKI",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 11,
      "last3Average": 11,
      "lastGameScore": 11,
      "scoreVolatility": 0,
      "homeAverage": 11,
      "awayAverage": 11
    },
    "ANGUSHINCHEY": {
      "playerName": "Angus Hinchey",
      "key": "ANGUSHINCHEY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 5,
      "last3Average": 5,
      "lastGameScore": 5,
      "scoreVolatility": 0,
      "homeAverage": 5,
      "awayAverage": 5
    },
    "BLAKEMOZER": {
      "playerName": "Blake Mozer",
      "key": "BLAKEMOZER",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "currentPrice": 238000,
      "priceImpliedProjection": 18.6,
      "seasonAverage": 10,
      "last3Average": 10,
      "lastGameScore": 10,
      "scoreVolatility": 0,
      "homeAverage": 10,
      "awayAverage": 10
    },
    "VAASEMU": {
      "playerName": "Va'a Semu",
      "key": "VAASEMU",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 14,
      "scoreVolatility": 0,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "LEWISSYMONDS": {
      "playerName": "Lewis Symonds",
      "key": "LEWISSYMONDS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 17,
      "last3Average": 17,
      "lastGameScore": 17,
      "scoreVolatility": 0,
      "homeAverage": 17,
      "awayAverage": 17
    },
    "OLIVERPASCOE": {
      "playerName": "Oliver Pascoe",
      "key": "OLIVERPASCOE",
      "primaryPosition": null,
      "gamesPlayed": 4,
      "currentPrice": 298000,
      "priceImpliedProjection": 23.3,
      "seasonAverage": 28.8,
      "last3Average": 30,
      "lastGameScore": 23,
      "scoreVolatility": 12.6,
      "homeAverage": 21,
      "awayAverage": 36.5
    },
    "SIMIONELAIAFI": {
      "playerName": "Simione Laiafi",
      "key": "SIMIONELAIAFI",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 16,
      "last3Average": 16,
      "lastGameScore": 21,
      "scoreVolatility": 5,
      "homeAverage": 11,
      "awayAverage": 21
    },
    "HAYDENBUCHANAN": {
      "playerName": "Hayden Buchanan",
      "key": "HAYDENBUCHANAN",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "currentPrice": 334000,
      "priceImpliedProjection": 26.1,
      "seasonAverage": 13,
      "last3Average": 13,
      "lastGameScore": 13,
      "scoreVolatility": 0,
      "homeAverage": 13,
      "awayAverage": 13
    },
    "KADEREED": {
      "playerName": "Kade Reed",
      "key": "KADEREED",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 6,
      "last3Average": 6,
      "lastGameScore": 6,
      "scoreVolatility": 0,
      "homeAverage": 6,
      "awayAverage": 6
    },
    "JONATHANSUA": {
      "playerName": "Jonathan Sua",
      "key": "JONATHANSUA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 251000,
      "priceImpliedProjection": 19.6,
      "seasonAverage": 28.5,
      "last3Average": 28.5,
      "lastGameScore": 36,
      "scoreVolatility": 7.5,
      "homeAverage": 28.5,
      "awayAverage": 28.5
    },
    "FRANCISMANULELEUA": {
      "playerName": "Francis Manuleleua",
      "key": "FRANCISMANULELEUA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 270000,
      "priceImpliedProjection": 21.1,
      "seasonAverage": 28.3,
      "last3Average": 28.3,
      "lastGameScore": 28,
      "scoreVolatility": 14.3,
      "homeAverage": 19.5,
      "awayAverage": 46
    },
    "COOPERCLARKE": {
      "playerName": "Cooper Clarke",
      "key": "COOPERCLARKE",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 388000,
      "priceImpliedProjection": 30.3,
      "seasonAverage": 32.4,
      "last3Average": 42.3,
      "lastGameScore": 41,
      "scoreVolatility": 10.8,
      "homeAverage": 39.3,
      "awayAverage": 25.5
    },
    "SIALETILIFAEAMANI": {
      "playerName": "Sialetili Faeamani",
      "key": "SIALETILIFAEAMANI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 368000,
      "priceImpliedProjection": 28.8,
      "seasonAverage": 33.1,
      "last3Average": 41.3,
      "lastGameScore": 53,
      "scoreVolatility": 10.9,
      "homeAverage": 22.5,
      "awayAverage": 37.4
    },
    "COOPERBAI": {
      "playerName": "Cooper Bai",
      "key": "COOPERBAI",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 383000,
      "priceImpliedProjection": 29.9,
      "seasonAverage": 33.1,
      "last3Average": 45.3,
      "lastGameScore": 55,
      "scoreVolatility": 13.7,
      "homeAverage": 28,
      "awayAverage": 35.2
    },
    "ANTONIOVERHOEVEN": {
      "playerName": "Antonio Verhoeven",
      "key": "ANTONIOVERHOEVEN",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 7,
      "last3Average": 7,
      "lastGameScore": 7,
      "scoreVolatility": 0,
      "homeAverage": 7,
      "awayAverage": 7
    },
    "APATWIDLE": {
      "playerName": "Apa Twidle",
      "key": "APATWIDLE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 260000,
      "priceImpliedProjection": 20.3,
      "seasonAverage": 47,
      "last3Average": 47,
      "lastGameScore": 47,
      "scoreVolatility": 0,
      "homeAverage": 47,
      "awayAverage": 47
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
      },
      {
        "round": 3,
        "score": 67,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 5,
        "score": 43,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 65,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 24,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      }
    ],
    "TERRELLMAY": [
      {
        "round": 2,
        "score": 62,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 3,
        "score": 61,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 51,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 75,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 73,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 83,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 65,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "JOERODDY": [
      {
        "round": 4,
        "score": 21,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 24,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 60,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 75,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 80,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 46,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 93,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 85,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 57,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 67,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 78,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 109,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 56,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 71,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 48,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 45,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 77,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 70,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      }
    ],
    "JAYDENCAMPBELL": [
      {
        "round": 3,
        "score": 78,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 71,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 53,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 89,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 35,
        "opponent": "Warriors",
        "team": "Titans",
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
      },
      {
        "round": 3,
        "score": 65,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 53,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 56,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 54,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 67,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 65,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 58,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 34,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 53,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 34,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 70,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 66,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 44,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 57,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 41,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 64,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 51,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 54,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 56,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 66,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 66,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 104,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 87,
        "opponent": "Storm",
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
      },
      {
        "round": 3,
        "score": 59,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 62,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 38,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 55,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 31,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 44,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 80,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 44,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 42,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "FLETCHERSHARPE": [
      {
        "round": 1,
        "score": 41,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 35,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 49,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 27,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 25,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 19,
        "opponent": "Panthers",
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
      },
      {
        "round": 3,
        "score": 50,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 48,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 40,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 59,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 34,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 48,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 40,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 44,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 33,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 41,
        "opponent": "Storm",
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
      },
      {
        "round": 3,
        "score": 63,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 69,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 78,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 33,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 63,
        "opponent": "Cowboys",
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
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "KAIPEARCEPAUL": [
      {
        "round": 2,
        "score": 61,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 3,
        "score": 53,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 69,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 84,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 57,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 51,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 30,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 33,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 56,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 64,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 81,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 61,
        "opponent": "Roosters",
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
      },
      {
        "round": 4,
        "score": 49,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 47,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 65,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 73,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 78,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 76,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 51,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 49,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 69,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 71,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 55,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 26,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 60,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 97,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 70,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 51,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 66,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 61,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 62,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 43,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 31,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 54,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 45,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 43,
        "opponent": "Warriors",
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
      },
      {
        "round": 3,
        "score": 41,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 41,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 35,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 24,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 35,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 39,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 39,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 52,
        "opponent": "Warriors",
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
      },
      {
        "round": 3,
        "score": 44,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 64,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 48,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 57,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 33,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "LUKEMETCALF": [
      {
        "round": 4,
        "score": 20,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 44,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 34,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 34,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 30,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 69,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 44,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 17,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 49,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 35,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 31,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 26,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 48,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 44,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 39,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 44,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 51,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 50,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 82,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 31,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 34,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 32,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 50,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 37,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 39,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 60,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "CAMERONMCINNES": [
      {
        "round": 8,
        "score": 20,
        "opponent": "Cowboys",
        "team": "Sharks",
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
      },
      {
        "round": 3,
        "score": 44,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 47,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 39,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 40,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 57,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 56,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 51,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 42,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 21,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 38,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 30,
        "opponent": "Roosters",
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
      },
      {
        "round": 3,
        "score": 43,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 37,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 60,
        "opponent": "Panthers",
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
      },
      {
        "round": 4,
        "score": 46,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 18,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 7,
        "score": 58,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 57,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 3,
        "score": 57,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 36,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 46,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 35,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 36,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 36,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 43,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 38,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 47,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 46,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 39,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 50,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 61,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 43,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 28,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 25,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "DAVIDFALE": [
      {
        "round": 5,
        "score": 21,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 33,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 66,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 56,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 57,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 79,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 64,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 53,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 36,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 57,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 53,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 36,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 77,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 49,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 46,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 35,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 60,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 41,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 28,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 74,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 49,
        "opponent": "Roosters",
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 56,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 23,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 52,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 52,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 8,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 48,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 48,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 65,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 68,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 50,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 75,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 46,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 28,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 54,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 40,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 68,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 81,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 50,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 49,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 71,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 83,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 87,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 45,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 69,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 32,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 32,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 13,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "TRENTLOIERO": [
      {
        "round": 3,
        "score": 56,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 44,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 50,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 39,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 53,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Storm",
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
      },
      {
        "round": 3,
        "score": 34,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 40,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 61,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 75,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 29,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 6,
        "score": 24,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 26,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 37,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 65,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 22,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 70,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 44,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 41,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 92,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 33,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 68,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 40,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 49,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 51,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 78,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 54,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 72,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 46,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 62,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 8,
        "score": 53,
        "opponent": "Storm",
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
      },
      {
        "round": 7,
        "score": 35,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 52,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "LEOTHOMPSON": [
      {
        "round": 7,
        "score": 26,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 47,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 4,
        "score": 54,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 71,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 53,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 47,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 70,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 46,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 59,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 37,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 67,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 39,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 42,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 38,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 32,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 16,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 23,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": false
      }
    ],
    "MOALAGRAHAMTAUFA": [
      {
        "round": 3,
        "score": 11,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      }
    ],
    "JMAINEHOPGOOD": [
      {
        "round": 1,
        "score": 49,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 3,
        "score": 10,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 41,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 42,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 26,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 39,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 38,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 29,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 5,
        "score": 42,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 48,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 54,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 26,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 68,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 29,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 68,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 55,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": false
      }
    ],
    "MITCHELLBARNETT": [
      {
        "round": 3,
        "score": 34,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 32,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 7,
        "score": 44,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 28,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 86,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 58,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 43,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 59,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 57,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 39,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 32,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 64,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 37,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 28,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 35,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 35,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 43,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 16,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      }
    ],
    "APISAIKOROISAU": [
      {
        "round": 2,
        "score": 31,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 3,
        "score": 39,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 49,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 61,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 63,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 34,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 73,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 66,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 39,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 32,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 71,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 37,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 55,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 46,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 36,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 33,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 57,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 50,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "REECEROBSON": [
      {
        "round": 3,
        "score": 49,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 40,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 55,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 43,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 58,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 59,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 46,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 45,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 52,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 43,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 61,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 48,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 65,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 53,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 39,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 37,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 41,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 3,
        "score": 22,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 33,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 23,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 51,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 38,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 35,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 61,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 78,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 77,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 70,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 50,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 93,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 27,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 68,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 42,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 40,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 34,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 55,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 59,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 56,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 62,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 67,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 26,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 52,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 53,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 81,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "REUBENCOTTER": [
      {
        "round": 1,
        "score": 35,
        "opponent": "Knights",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 3,
        "score": 38,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 22,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 42,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 60,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 45,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "JOSHCURRAN": [
      {
        "round": 1,
        "score": 11,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 3,
        "score": 22,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 2,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 6,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 30,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 33,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 31,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 35,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 22,
        "opponent": "Warriors",
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
      },
      {
        "round": 3,
        "score": 50,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 70,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 89,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 48,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 53,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 4,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 24,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 18,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 22,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 27,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 3,
        "score": 27,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 46,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 62,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 56,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "KURTDONOGHOE": [
      {
        "round": 5,
        "score": 6,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 27,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 22,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 14,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 51,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 51,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 32,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 47,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 75,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 47,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 63,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 57,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 93,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 55,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 5,
        "score": 15,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 16,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 14,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 63,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 60,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 39,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 33,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      }
    ],
    "MATTHEWTIMOKO": [
      {
        "round": 2,
        "score": 21,
        "opponent": "Warriors",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 50,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 33,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 58,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 57,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 37,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 33,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 54,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 43,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 72,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 44,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 39,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 66,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 52,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 51,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 91,
        "opponent": "Storm",
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
      },
      {
        "round": 3,
        "score": 73,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 66,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 44,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 40,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 54,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 44,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "SHAWNBLORE": [
      {
        "round": 7,
        "score": 14,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 24,
        "opponent": "Rabbitohs",
        "team": "Storm",
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
      },
      {
        "round": 3,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 29,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 10,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 20,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 31,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 31,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 36,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 7,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      }
    ],
    "TEIGWILTON": [
      {
        "round": 3,
        "score": 16,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 41,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 31,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 26,
        "opponent": "Cowboys",
        "team": "Sharks",
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
      },
      {
        "round": 3,
        "score": 30,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 54,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 50,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 58,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 57,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 56,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 19,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 15,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 6,
        "score": 27,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 51,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 8,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 42,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 20,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 13,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 81,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 14,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 86,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 69,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 24,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 17,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 41,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 40,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 58,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 29,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 16,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 5,
        "score": 14,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 35,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 38,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 21,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "TEVITANAUFAHU": [
      {
        "round": 8,
        "score": 1,
        "opponent": "Warriors",
        "team": "Dolphins",
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
      },
      {
        "round": 4,
        "score": 55,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 44,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 52,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 6,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 35,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 50,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 17,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 26,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      }
    ],
    "JAMIEHUMPHREYS": [
      {
        "round": 3,
        "score": 33,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 40,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 42,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 28,
        "opponent": "Storm",
        "team": "Rabbitohs",
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
      },
      {
        "round": 3,
        "score": 47,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 32,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 19,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 53,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "HARRYHAYES": [
      {
        "round": 1,
        "score": 48,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 3,
        "score": 32,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 45,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 31,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 21,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 34,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 19,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 12,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      }
    ],
    "ALEXSEYFARTH": [
      {
        "round": 2,
        "score": 16,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 3,
        "score": 13,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 17,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 14,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 10,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 12,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 65,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 42,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 52,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 53,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 52,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 53,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 38,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 42,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 39,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 21,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 25,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 75,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
      }
    ],
    "JACOBHALANGAHU": [
      {
        "round": 5,
        "score": 22,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 9,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 4,
        "opponent": "Roosters",
        "team": "Dragons",
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
      },
      {
        "round": 4,
        "score": 60,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 65,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 28,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 61,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 37,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 40,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 47,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 28,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 35,
        "opponent": "Warriors",
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
      },
      {
        "round": 3,
        "score": 48,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 33,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 61,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 41,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 23,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 16,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 50,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 21,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 31,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 34,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
      }
    ],
    "JACOBLIDDLE": [
      {
        "round": 3,
        "score": 22,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 35,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 17,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 49,
        "opponent": "Sea Eagles",
        "team": "Dragons",
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
      },
      {
        "round": 4,
        "score": 37,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 27,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 47,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 23,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "CODYHOPWOOD": [
      {
        "round": 4,
        "score": 15,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 27,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 13,
        "opponent": "Panthers",
        "team": "Knights",
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
      },
      {
        "round": 3,
        "score": 54,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 34,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 50,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 16,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 8,
        "score": 60,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 34,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 62,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 68,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 11,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 43,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 18,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 19,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 3,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 4,
        "score": 60,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 42,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 20,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 27,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 65,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 32,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 30,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 37,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 41,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 38,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 37,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 21,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 6,
        "score": 51,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 27,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 43,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 4,
        "score": 49,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 79,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 48,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 70,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 80,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 75,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 64,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 46,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 49,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 31,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 36,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 7,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 25,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 49,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 37,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 28,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 36,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 60,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 6,
        "score": 40,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 45,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 42,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 66,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 32,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 33,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 30,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 28,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 15,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 53,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 49,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 36,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 37,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 26,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
      }
    ],
    "MAWENEHIROTI": [
      {
        "round": 6,
        "score": 33,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 28,
        "opponent": "Cowboys",
        "team": "Sharks",
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
      },
      {
        "round": 3,
        "score": 68,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 34,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 6,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      }
    ],
    "VICTORRADLEY": [
      {
        "round": 6,
        "score": 37,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 42,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 25,
        "opponent": "Dragons",
        "team": "Roosters",
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
      },
      {
        "round": 5,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 48,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 26,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 31,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 52,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 67,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 37,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 22,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 48,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 52,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 46,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 39,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 57,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 41,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 16,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 53,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 12,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 37,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 23,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 24,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 21,
        "opponent": "Panthers",
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
      },
      {
        "round": 4,
        "score": 46,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 38,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 63,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 62,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 46,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 31,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 20,
        "opponent": "Panthers",
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
      },
      {
        "round": 3,
        "score": 39,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 14,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 22,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 30,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 32,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
      }
    ],
    "KELMATUILAGI": [
      {
        "round": 2,
        "score": 73,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 3,
        "score": 48,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 47,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 37,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 62,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      }
    ],
    "LIAMMARTIN": [
      {
        "round": 3,
        "score": 44,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 20,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 32,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 26,
        "opponent": "Bulldogs",
        "team": "Panthers",
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
      },
      {
        "round": 3,
        "score": 40,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 45,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 28,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 44,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 30,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 17,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": false
      }
    ],
    "STARFORDTOA": [
      {
        "round": 8,
        "score": 28,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 34,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 13,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 50,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 2,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 8,
        "score": 35,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 40,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 41,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 31,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 45,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 35,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 28,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 53,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 29,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 42,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 20,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 45,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 45,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 36,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 37,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "JAROMELUAI": [
      {
        "round": 2,
        "score": 66,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 3,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 29,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 54,
        "opponent": "Raiders",
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
      },
      {
        "round": 7,
        "score": 40,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 96,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 4,
        "score": 36,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 40,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 45,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 60,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 39,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 55,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 76,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 66,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 49,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 4,
        "score": 40,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 37,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 28,
        "opponent": "Titans",
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
      },
      {
        "round": 3,
        "score": 65,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 73,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 29,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 55,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 62,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 66,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 46,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 67,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 22,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 71,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 55,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 38,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 50,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 36,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 54,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 42,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 23,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 37,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 15,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      }
    ],
    "JOSHPAPALII": [
      {
        "round": 1,
        "score": 12,
        "opponent": "Sea Eagles",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 3,
        "score": 44,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 24,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 9,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
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
      },
      {
        "round": 6,
        "score": 17,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 44,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 7,
        "opponent": "Roosters",
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
      },
      {
        "round": 5,
        "score": 32,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 29,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 13,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 48,
        "opponent": "Storm",
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 36,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 61,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 47,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 17,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 47,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 3,
        "score": 30,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 19,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 26,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 22,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 24,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 27,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 42,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 22,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 36,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 17,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 13,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 29,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 37,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 29,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 23,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 11,
        "opponent": "Broncos",
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
      },
      {
        "round": 3,
        "score": 35,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 38,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 47,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 17,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 40,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 46,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 45,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 21,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 50,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 26,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 83,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 79,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 3,
        "score": 63,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 35,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 60,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 36,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 28,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 57,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 50,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 32,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 17,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 8,
        "score": 43,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 58,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 41,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 47,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 29,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 42,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 50,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 54,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 41,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 46,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 55,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 43,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "IZACKTAGO": [
      {
        "round": 7,
        "score": 47,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 40,
        "opponent": "Knights",
        "team": "Panthers",
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
      },
      {
        "round": 3,
        "score": 33,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 75,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 47,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 46,
        "opponent": "Storm",
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
      },
      {
        "round": 3,
        "score": 43,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 16,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 21,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 27,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 40,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 22,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 22,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 23,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 45,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 31,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 33,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 31,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 22,
        "opponent": "Storm",
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
      },
      {
        "round": 3,
        "score": 51,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 27,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 53,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 30,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 20,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 32,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 38,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 56,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 34,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "SIOSIUATAUKEIAHO": [
      {
        "round": 1,
        "score": 7,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 7,
        "score": 19,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 31,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 51,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 46,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 20,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 8,
        "score": 27,
        "opponent": "Roosters",
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
      },
      {
        "round": 4,
        "score": 63,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 26,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 47,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 27,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 30,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 17,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 41,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 9,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 14,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "ENARITUALA": [
      {
        "round": 3,
        "score": 43,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 52,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 54,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 54,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 44,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 36,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 28,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 34,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 32,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 48,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 34,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 21,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 58,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 15,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "DAINELAURIE": [
      {
        "round": 8,
        "score": 39,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "JEREMIAHNANAI": [
      {
        "round": 8,
        "score": 30,
        "opponent": "Sharks",
        "team": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 21,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 12,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 18,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 6,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 28,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 6,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 31,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 10,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 48,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 27,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 36,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 38,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 67,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 33,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 33,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 30,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 27,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 46,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 64,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 65,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 36,
        "opponent": "Warriors",
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
      },
      {
        "round": 3,
        "score": 68,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 58,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 45,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 63,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 37,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 41,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 38,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 33,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 46,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 8,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 24,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 13,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 21,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 8,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 6,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 22,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "LYHKANKINGTOGIA": [
      {
        "round": 4,
        "score": 0,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 32,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
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
      },
      {
        "round": 4,
        "score": 24,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 37,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 21,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 32,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 8,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 28,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 32,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 40,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 27,
        "opponent": "Warriors",
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
      },
      {
        "round": 3,
        "score": 51,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 71,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 47,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 47,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 63,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 54,
        "opponent": "Roosters",
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
      },
      {
        "round": 5,
        "score": 20,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 45,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 22,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 48,
        "opponent": "Storm",
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
      },
      {
        "round": 3,
        "score": 52,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 39,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 34,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 30,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 39,
        "opponent": "Roosters",
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
      },
      {
        "round": 3,
        "score": 31,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 2,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "THOMASCANT": [
      {
        "round": 1,
        "score": 14,
        "opponent": "Cowboys",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 3,
        "score": 19,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 15,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 6,
        "score": 21,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 25,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 75,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 47,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 35,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 8,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 36,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 43,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 39,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 37,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 33,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "TAINETUAUPIKI": [
      {
        "round": 2,
        "score": 38,
        "opponent": "Raiders",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 3,
        "score": 50,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 39,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 41,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 29,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 8,
        "score": 64,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 32,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 50,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 41,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 58,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 38,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 36,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 38,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 44,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 64,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 16,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 37,
        "opponent": "Cowboys",
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
      },
      {
        "round": 4,
        "score": 34,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 24,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 34,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 52,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 31,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 20,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 41,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 28,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 50,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 26,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 10,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 63,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 29,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 5,
        "score": 31,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 47,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 32,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 38,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 57,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 41,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 63,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 77,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 56,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 34,
        "opponent": "Roosters",
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 35,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 38,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 7,
        "score": 25,
        "opponent": "Warriors",
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
      },
      {
        "round": 7,
        "score": 40,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 41,
        "opponent": "Dolphins",
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
      },
      {
        "round": 3,
        "score": 33,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 76,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 16,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 32,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 43,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 19,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "BRONSONXERRI": [
      {
        "round": 1,
        "score": 36,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 35,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 60,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 14,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "SAMUELHUGHES": [
      {
        "round": 1,
        "score": 19,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 3,
        "score": 8,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 5,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 36,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 36,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "FRANCISMOLO": [
      {
        "round": 4,
        "score": 28,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 34,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 20,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 33,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "COREYWADDELL": [
      {
        "round": 1,
        "score": 16,
        "opponent": "Raiders",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 4,
        "score": 25,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 38,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 42,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 34,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 5,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 18,
        "opponent": "Panthers",
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
      },
      {
        "round": 3,
        "score": 23,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 38,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 21,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 20,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 47,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 35,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 22,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 44,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 68,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 21,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 44,
        "opponent": "Cowboys",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "JAMESSCHILLER": [
      {
        "round": 8,
        "score": 19,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 36,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 34,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 26,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 41,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 5,
        "score": 17,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 2,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 4,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 15,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
      }
    ],
    "GRANTANDERSON": [
      {
        "round": 3,
        "score": 18,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 14,
        "opponent": "Dolphins",
        "team": "Broncos",
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
      },
      {
        "round": 3,
        "score": 50,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 53,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 33,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 47,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 17,
        "opponent": "Cowboys",
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
      },
      {
        "round": 6,
        "score": 53,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 54,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 27,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": false
      }
    ],
    "CHARLIEGUYMER": [
      {
        "round": 3,
        "score": -1,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 5,
        "score": 45,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 41,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 29,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 26,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 32,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 47,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 55,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 26,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 32,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 55,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 45,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 58,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 33,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 40,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 4,
        "score": 20,
        "opponent": "Dolphins",
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
      },
      {
        "round": 4,
        "score": 13,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 39,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 43,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 39,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 8,
        "score": 46,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 3,
        "score": 41,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 54,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 34,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 28,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 44,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      }
    ],
    "ALOFIANAKHANPEREIRA": [
      {
        "round": 6,
        "score": 20,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 50,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Dolphins",
        "team": "Warriors",
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
      },
      {
        "round": 3,
        "score": 20,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 26,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 11,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 30,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 37,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "SEANKEPPIE": [
      {
        "round": 2,
        "score": 8,
        "opponent": "Roosters",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 3,
        "score": 30,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 17,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 28,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 39,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 37,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "SPENCERLENIU": [
      {
        "round": 6,
        "score": 13,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 23,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 23,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "TYSONGAMBLE": [
      {
        "round": 3,
        "score": 47,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 24,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 17,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 37,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 12,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 32,
        "opponent": "Storm",
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
      },
      {
        "round": 3,
        "score": 24,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 46,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 35,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 80,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 50,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 45,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 26,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 12,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 31,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 8,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 7,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 20,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "FONUAPOLE": [
      {
        "round": 2,
        "score": 17,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 3,
        "score": 41,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 30,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 30,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 37,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 26,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 38,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "SIULAGITUIMALATUBROWN": [
      {
        "round": 3,
        "score": 1,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 9,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": -1,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 33,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 4,
        "score": 13,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 8,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 5,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 12,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 4,
        "score": 7,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 21,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      }
    ],
    "KURTMANN": [
      {
        "round": 1,
        "score": 33,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 3,
        "score": 22,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 31,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 39,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 14,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 22,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 41,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "MARCELOMONTOYA": [
      {
        "round": 1,
        "score": 42,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 3,
        "score": 35,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 44,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 27,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 7,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 17,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 14,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "JERALSKELTON": [
      {
        "round": 2,
        "score": 59,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 3,
        "score": 18,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 26,
        "opponent": "Knights",
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
      },
      {
        "round": 3,
        "score": 52,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 43,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 27,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 48,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 46,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 43,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "THOMASFLETCHER": [
      {
        "round": 3,
        "score": 0,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 18,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 29,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 7,
        "score": 29,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 10,
        "opponent": "Roosters",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "SEANOSULLIVAN": [
      {
        "round": 4,
        "score": 15,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 11,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 33,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 16,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 6,
        "score": 17,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 18,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 34,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "LATUFAINU": [
      {
        "round": 4,
        "score": 17,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 16,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 8,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 12,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "BAILEYHAYWARD": [
      {
        "round": 1,
        "score": 46,
        "opponent": "Dragons",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 3,
        "score": 27,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 23,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 27,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 54,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 22,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 58,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 64,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 60,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 73,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      }
    ],
    "CLAYTONFAULALO": [
      {
        "round": 5,
        "score": 16,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 47,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 48,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "LUCAMORETTI": [
      {
        "round": 4,
        "score": 17,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 27,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 20,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 37,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 67,
        "opponent": "Sea Eagles",
        "team": "Eels",
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
      },
      {
        "round": 3,
        "score": 30,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "ZACLAYBUTT": [
      {
        "round": 4,
        "score": 34,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 5,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 34,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 26,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 38,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 31,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 36,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 12,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 18,
        "opponent": "Cowboys",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "RONALDVOLKMAN": [
      {
        "round": 6,
        "score": 31,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 39,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 28,
        "opponent": "Sea Eagles",
        "team": "Eels",
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
      },
      {
        "round": 3,
        "score": 19,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 26,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 14,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 35,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 31,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 37,
        "opponent": "Tigers",
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
      },
      {
        "round": 3,
        "score": 14,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 22,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 19,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 35,
        "opponent": "Storm",
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
      },
      {
        "round": 3,
        "score": 36,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 30,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 37,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 34,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 20,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 30,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "MARATANIUKORE": [
      {
        "round": 3,
        "score": 44,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 20,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 17,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 37,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 26,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 45,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 16,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 29,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 40,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 30,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 47,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 31,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "LIPOIHOPOI": [
      {
        "round": 4,
        "score": 7,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 17,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "DAVVYMOALE": [
      {
        "round": 1,
        "score": 14,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 5,
        "score": 7,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 21,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 8,
        "score": 19,
        "opponent": "Rabbitohs",
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
      },
      {
        "round": 3,
        "score": 27,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 4,
        "score": 31,
        "opponent": "Knights",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 40,
        "opponent": "Rabbitohs",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 6,
        "score": 37,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 23,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 52,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "TYRELLSLOAN": [
      {
        "round": 4,
        "score": 24,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 6,
        "score": 51,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 14,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 15,
        "opponent": "Roosters",
        "team": "Dragons",
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
      },
      {
        "round": 3,
        "score": 38,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 20,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 36,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 23,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 36,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 33,
        "opponent": "Raiders",
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
      },
      {
        "round": 4,
        "score": 20,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 46,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 54,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 56,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "JESSEARTHARS": [
      {
        "round": 5,
        "score": 53,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 42,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 14,
        "opponent": "Tigers",
        "team": "Broncos",
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
      },
      {
        "round": 3,
        "score": 20,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 15,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 21,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
    "LOKOPASIFIKITONGA": [
      {
        "round": 7,
        "score": 22,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 32,
        "opponent": "Roosters",
        "team": "Dragons",
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
      },
      {
        "round": 3,
        "score": 22,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 54,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 38,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 33,
        "opponent": "Storm",
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
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 6,
        "score": 21,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 15,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 28,
        "opponent": "Eels",
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
      },
      {
        "round": 3,
        "score": 43,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 42,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 33,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 65,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 35,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 30,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 37,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 44,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 20,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 18,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 4,
        "score": 18,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 5,
        "score": 43,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 6,
        "score": 25,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 8,
        "score": 70,
        "opponent": "Cowboys",
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
      },
      {
        "round": 4,
        "score": 41,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 34,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 17,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      }
    ],
    "BLAKELAWRIE": [
      {
        "round": 3,
        "score": 28,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 51,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 19,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 35,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 21,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 16,
        "opponent": "Roosters",
        "team": "Dragons",
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
      },
      {
        "round": 3,
        "score": 20,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 2,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 7,
        "score": 28,
        "opponent": "Panthers",
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
      },
      {
        "round": 3,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 39,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 28,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 90,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 43,
        "opponent": "Warriors",
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
      },
      {
        "round": 3,
        "score": 39,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 50,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 13,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 22,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 19,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 10,
        "opponent": "Dolphins",
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
      },
      {
        "round": 7,
        "score": 39,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 58,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 4,
        "score": 15,
        "opponent": "Raiders",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "HARRISONGRAHAM": [
      {
        "round": 2,
        "score": 22,
        "opponent": "Sea Eagles",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 4,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 33,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 25,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 25,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 34,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 4,
        "score": 23,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 23,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 45,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "BRANDONSMITH": [
      {
        "round": 6,
        "score": 27,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 49,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 12,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "TUKIMIHIASIMPKINS": [
      {
        "round": 1,
        "score": 29,
        "opponent": "Sharks",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 3,
        "score": 11,
        "opponent": "Cowboys",
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
      },
      {
        "round": 4,
        "score": 11,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 23,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 20,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 41,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 3,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 49,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 18,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "BRENDANPIAKURA": [
      {
        "round": 3,
        "score": 25,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 23,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 22,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 28,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 22,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 19,
        "opponent": "Bulldogs",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "JORDANSAMRANI": [
      {
        "round": 2,
        "score": 17,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 3,
        "score": 22,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 83,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 39,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 50,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 10,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 44,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 28,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 4,
        "score": 15,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 66,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 6,
        "score": 47,
        "opponent": "Storm",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 7,
        "score": 37,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 8,
        "score": 17,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "TRISTANHOPE": [
      {
        "round": 3,
        "score": 13,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      }
    ],
    "THOMASDUFFY": [
      {
        "round": 6,
        "score": 70,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "JEDSTUART": [
      {
        "round": 6,
        "score": 12,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 13,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 29,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 23,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 19,
        "opponent": "Panthers",
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
      },
      {
        "round": 3,
        "score": 35,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 23,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 11,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      }
    ],
    "JOSHPATSTON": [
      {
        "round": 7,
        "score": 27,
        "opponent": "Warriors",
        "team": "Titans",
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
      },
      {
        "round": 3,
        "score": 21,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 33,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 22,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 42,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 30,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 23,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 24,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 20,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 45,
        "opponent": "Warriors",
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
      },
      {
        "round": 5,
        "score": 27,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 36,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 19,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 6,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 3,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 12,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 17,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "JAKETURPIN": [
      {
        "round": 6,
        "score": 4,
        "opponent": "Panthers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 35,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "MANAIAWAITERE": [
      {
        "round": 4,
        "score": 20,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 55,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 2,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 23,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 22,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "JAIYDENHUNT": [
      {
        "round": 8,
        "score": 13,
        "opponent": "Bulldogs",
        "team": "Broncos",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 4,
        "score": 53,
        "opponent": "Sharks",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 5,
        "score": 63,
        "opponent": "Knights",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 7,
        "score": 32,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 8,
        "score": 23,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "JAYLANDEGROOT": [
      {
        "round": 7,
        "score": 15,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": false
      }
    ],
    "FREDDYLUSSICK": [
      {
        "round": 3,
        "score": 10,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 26,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 55,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 37,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 33,
        "opponent": "Knights",
        "team": "Panthers",
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
      },
      {
        "round": 5,
        "score": 17,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 7,
        "score": 12,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 16,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 11,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 12,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      }
    ],
    "ROYCEHUNT": [
      {
        "round": 2,
        "score": 13,
        "opponent": "Cowboys",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 3,
        "score": 21,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 31,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 24,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 21,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 18,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 44,
        "opponent": "Raiders",
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
      },
      {
        "round": 3,
        "score": 44,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 12,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 17,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 6,
        "score": 22,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": false
      }
    ],
    "ELIJAHSALESALEAUMOANA": [
      {
        "round": 8,
        "score": 11,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 49,
        "opponent": "Tigers",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 5,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 6,
        "score": 53,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 7,
        "score": 41,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 35,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "TONIMATAELE": [
      {
        "round": 7,
        "score": 15,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 24,
        "opponent": "Sea Eagles",
        "team": "Eels",
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
      },
      {
        "round": 3,
        "score": 26,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 5,
        "score": 16,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 39,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 4,
        "score": 25,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 5,
        "score": 53,
        "opponent": "Cowboys",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 6,
        "score": 26,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 28,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 43,
        "opponent": "Roosters",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "KAIDENLAHRS": [
      {
        "round": 3,
        "score": 14,
        "opponent": "Titans",
        "team": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 52,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 87,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 48,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 56,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 54,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": false
      }
    ],
    "PETERHOLA": [
      {
        "round": 7,
        "score": 4,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      }
    ],
    "MATTHEWDUFTY": [
      {
        "round": 7,
        "score": 60,
        "opponent": "Dragons",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 8,
        "score": 66,
        "opponent": "Storm",
        "team": "Rabbitohs",
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
      },
      {
        "round": 3,
        "score": 21,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 14,
        "opponent": "Cowboys",
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
      },
      {
        "round": 3,
        "score": 12,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 4,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 6,
        "score": 72,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 34,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 40,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 22,
        "opponent": "Panthers",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "PATRICKHERBERT": [
      {
        "round": 6,
        "score": 53,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 30,
        "opponent": "Broncos",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 8,
        "score": 1,
        "opponent": "Raiders",
        "team": "Tigers",
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
      },
      {
        "round": 3,
        "score": 16,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 39,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 21,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 25,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 22,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 32,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 7,
        "score": 14,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      }
    ],
    "BRANDONWAKEHAM": [
      {
        "round": 2,
        "score": 19,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 4,
        "score": 11,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 5,
        "score": 15,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 6,
        "score": 17,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 7,
        "score": 26,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 8,
        "score": 60,
        "opponent": "Eels",
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
      },
      {
        "round": 4,
        "score": 38,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 27,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 37,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 8,
        "score": 27,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 20,
        "opponent": "Storm",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 4,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 5,
        "score": 18,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 64,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 57,
        "opponent": "Bulldogs",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "JOSHROGERS": [
      {
        "round": 6,
        "score": 27,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 7,
        "score": 45,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 22,
        "opponent": "Bulldogs",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "JOCKMADDEN": [
      {
        "round": 4,
        "score": 56,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 68,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 6,
        "score": 54,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 7,
        "score": 9,
        "opponent": "Broncos",
        "team": "Tigers",
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
      },
      {
        "round": 3,
        "score": 41,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 4,
        "score": 38,
        "opponent": "Broncos",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 5,
        "score": 32,
        "opponent": "Sea Eagles",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 7,
        "score": 7,
        "opponent": "Panthers",
        "team": "Dolphins",
        "isHome": true
      }
    ],
    "HAYZEPERHAM": [
      {
        "round": 7,
        "score": 11,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 8,
        "score": 30,
        "opponent": "Bulldogs",
        "team": "Broncos",
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
    "PRESTONRIKI": [
      {
        "round": 8,
        "score": 30,
        "opponent": "Bulldogs",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "HUGOSAVALA": [
      {
        "round": 4,
        "score": 9,
        "opponent": "Sea Eagles",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 6,
        "score": 45,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 7,
        "score": 38,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 8,
        "score": 27,
        "opponent": "Dragons",
        "team": "Roosters",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 42,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 6,
        "score": 53,
        "opponent": "Sea Eagles",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 7,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 47,
        "opponent": "Roosters",
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
      },
      {
        "round": 3,
        "score": 54,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 4,
        "score": 56,
        "opponent": "Storm",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 60,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 64,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 35,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 69,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 23,
        "opponent": "Titans",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 5,
        "score": 50,
        "opponent": "Dragons",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 6,
        "score": 63,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 7,
        "score": 46,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 8,
        "score": 62,
        "opponent": "Sharks",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "PAULBRYAN": [
      {
        "round": 2,
        "score": 15,
        "opponent": "Knights",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 4,
        "score": 3,
        "opponent": "Roosters",
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
    "LUKEHANSON": [
      {
        "round": 3,
        "score": 39,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      }
    ],
    "SAXONPRYKE": [
      {
        "round": 7,
        "score": 39,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 8,
        "score": 41,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": false
      }
    ],
    "ARAZNANVA": [
      {
        "round": 6,
        "score": 27,
        "opponent": "Titans",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 7,
        "score": 31,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": true
      }
    ],
    "JOSHFELEDY": [
      {
        "round": 5,
        "score": 9,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      }
    ],
    "WILSONDECOURCEY": [
      {
        "round": 5,
        "score": 11,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 0,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      }
    ],
    "FAALETINOTAVANA": [
      {
        "round": 4,
        "score": 21,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Eels",
        "team": "Tigers",
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
    "ADAMCHRISTENSEN": [
      {
        "round": 6,
        "score": 10,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
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
      },
      {
        "round": 3,
        "score": 52,
        "opponent": "Eels",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 8,
        "score": 42,
        "opponent": "Roosters",
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
      },
      {
        "round": 3,
        "score": 36,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 4,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 5,
        "score": 45,
        "opponent": "Raiders",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 6,
        "score": 40,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 7,
        "score": 71,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 8,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 17,
        "opponent": "Roosters",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 4,
        "score": 35,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 5,
        "score": 25,
        "opponent": "Storm",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 6,
        "score": 10,
        "opponent": "Bulldogs",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 7,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 8,
        "score": 30,
        "opponent": "Knights",
        "team": "Panthers",
        "isHome": false
      }
    ],
    "MORGANGANNON": [
      {
        "round": 3,
        "score": -1,
        "opponent": "Knights",
        "team": "Warriors",
        "isHome": false
      }
    ],
    "CAMERONBUKOWSKI": [
      {
        "round": 7,
        "score": 11,
        "opponent": "Tigers",
        "team": "Broncos",
        "isHome": false
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
    "BLAKEMOZER": [
      {
        "round": 6,
        "score": 10,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "VAASEMU": [
      {
        "round": 8,
        "score": 14,
        "opponent": "Bulldogs",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "LEWISSYMONDS": [
      {
        "round": 8,
        "score": 17,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "OLIVERPASCOE": [
      {
        "round": 4,
        "score": 25,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 17,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 50,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 23,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": false
      }
    ],
    "SIMIONELAIAFI": [
      {
        "round": 4,
        "score": 11,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 6,
        "score": 21,
        "opponent": "Dragons",
        "team": "Sea Eagles",
        "isHome": false
      }
    ],
    "HAYDENBUCHANAN": [
      {
        "round": 4,
        "score": 13,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      }
    ],
    "KADEREED": [
      {
        "round": 8,
        "score": 6,
        "opponent": "Roosters",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "JONATHANSUA": [
      {
        "round": 7,
        "score": 21,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 8,
        "score": 36,
        "opponent": "Broncos",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "FRANCISMANULELEUA": [
      {
        "round": 3,
        "score": 11,
        "opponent": "Warriors",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 7,
        "score": 46,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 8,
        "score": 28,
        "opponent": "Panthers",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 25,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 4,
        "score": 19,
        "opponent": "Cowboys",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Panthers",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 6,
        "score": 55,
        "opponent": "Warriors",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 7,
        "score": 31,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 8,
        "score": 41,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 3,
        "score": 26,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 18,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 27,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 44,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 53,
        "opponent": "Warriors",
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
      },
      {
        "round": 3,
        "score": 19,
        "opponent": "Cowboys",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 4,
        "score": 27,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 5,
        "score": 29,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 6,
        "score": 52,
        "opponent": "Eels",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 7,
        "score": 55,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": false
      }
    ],
    "ANTONIOVERHOEVEN": [
      {
        "round": 5,
        "score": 7,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      }
    ],
    "APATWIDLE": [
      {
        "round": 5,
        "score": 47,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": true
      }
    ]
  }
};
});
