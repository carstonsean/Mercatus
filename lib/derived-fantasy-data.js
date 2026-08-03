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
    "generatedAt": "2026-08-03T22:53:26.190Z",
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
    "players": 484
  },
  "playerStatsByName": {
    "PAYNEHAAS": {
      "playerName": "Payne Haas",
      "key": "PAYNEHAAS",
      "primaryPosition": "Prop",
      "gamesPlayed": 12,
      "currentPrice": 753000,
      "priceImpliedProjection": 58.8,
      "seasonAverage": 59.9,
      "last3Average": 57.7,
      "lastGameScore": 60,
      "scoreVolatility": 15.4,
      "homeAverage": 67.4,
      "awayAverage": 49.4
    },
    "TERRELLMAY": {
      "playerName": "Terrell May",
      "key": "TERRELLMAY",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 792000,
      "priceImpliedProjection": 61.9,
      "seasonAverage": 68.1,
      "last3Average": 60,
      "lastGameScore": 63,
      "scoreVolatility": 11.1,
      "homeAverage": 71.4,
      "awayAverage": 63.6
    },
    "JOERODDY": {
      "playerName": "Joe Roddy",
      "key": "JOERODDY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 258000,
      "priceImpliedProjection": 20.2,
      "seasonAverage": 22,
      "last3Average": 22,
      "lastGameScore": 21,
      "scoreVolatility": 1.4,
      "homeAverage": 21,
      "awayAverage": 22.5
    },
    "NATHANCLEARY": {
      "playerName": "Nathan Cleary",
      "key": "NATHANCLEARY",
      "primaryPosition": "Halfback",
      "gamesPlayed": 16,
      "currentPrice": 879000,
      "priceImpliedProjection": 68.7,
      "seasonAverage": 74,
      "last3Average": 70.7,
      "lastGameScore": 90,
      "scoreVolatility": 17.9,
      "homeAverage": 73,
      "awayAverage": 74.8
    },
    "HERBIEFARNWORTH": {
      "playerName": "Herbie Farnworth",
      "key": "HERBIEFARNWORTH",
      "primaryPosition": "Centre",
      "gamesPlayed": 18,
      "currentPrice": 718000,
      "priceImpliedProjection": 56.1,
      "seasonAverage": 64.9,
      "last3Average": 58.7,
      "lastGameScore": 82,
      "scoreVolatility": 17.7,
      "homeAverage": 64.6,
      "awayAverage": 65.4
    },
    "HUDSONYOUNG": {
      "playerName": "Hudson Young",
      "key": "HUDSONYOUNG",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 14,
      "currentPrice": 649000,
      "priceImpliedProjection": 50.7,
      "seasonAverage": 54.7,
      "last3Average": 36,
      "lastGameScore": 35,
      "scoreVolatility": 16,
      "homeAverage": 56.8,
      "awayAverage": 52
    },
    "JAYDENCAMPBELL": {
      "playerName": "Jayden Campbell",
      "key": "JAYDENCAMPBELL",
      "primaryPosition": "Halfback",
      "gamesPlayed": 17,
      "currentPrice": 741000,
      "priceImpliedProjection": 57.9,
      "seasonAverage": 60.4,
      "last3Average": 67,
      "lastGameScore": 45,
      "scoreVolatility": 18,
      "homeAverage": 56.9,
      "awayAverage": 63.4
    },
    "ISAAHYEO": {
      "playerName": "Isaah Yeo",
      "key": "ISAAHYEO",
      "primaryPosition": "Prop",
      "gamesPlayed": 16,
      "currentPrice": 676000,
      "priceImpliedProjection": 52.8,
      "seasonAverage": 57.2,
      "last3Average": 61.3,
      "lastGameScore": 80,
      "scoreVolatility": 9.6,
      "homeAverage": 60.7,
      "awayAverage": 54.4
    },
    "ERINCLARK": {
      "playerName": "Erin Clark",
      "key": "ERINCLARK",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 586000,
      "priceImpliedProjection": 45.8,
      "seasonAverage": 50.8,
      "last3Average": 47,
      "lastGameScore": 53,
      "scoreVolatility": 10.8,
      "homeAverage": 49.3,
      "awayAverage": 52.1
    },
    "JOSEPHTAPINE": {
      "playerName": "Joseph Tapine",
      "key": "JOSEPHTAPINE",
      "primaryPosition": "Prop",
      "gamesPlayed": 20,
      "currentPrice": 587000,
      "priceImpliedProjection": 45.9,
      "seasonAverage": 50.3,
      "last3Average": 46.7,
      "lastGameScore": 49,
      "scoreVolatility": 11.5,
      "homeAverage": 54.7,
      "awayAverage": 45.9
    },
    "LATRELLMITCHELL": {
      "playerName": "Latrell Mitchell",
      "key": "LATRELLMITCHELL",
      "primaryPosition": "Fullback",
      "gamesPlayed": 9,
      "currentPrice": 906000,
      "priceImpliedProjection": 70.8,
      "seasonAverage": 69.9,
      "last3Average": 68.7,
      "lastGameScore": 38,
      "scoreVolatility": 18.4,
      "homeAverage": 66,
      "awayAverage": 74.8
    },
    "DYLANLUCAS": {
      "playerName": "Dylan Lucas",
      "key": "DYLANLUCAS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 16,
      "currentPrice": 789000,
      "priceImpliedProjection": 61.6,
      "seasonAverage": 59.6,
      "last3Average": 51.7,
      "lastGameScore": 16,
      "scoreVolatility": 16.9,
      "homeAverage": 60.9,
      "awayAverage": 58.3
    },
    "JACOBPRESTON": {
      "playerName": "Jacob Preston",
      "key": "JACOBPRESTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 15,
      "currentPrice": 586000,
      "priceImpliedProjection": 45.8,
      "seasonAverage": 51.1,
      "last3Average": 63.3,
      "lastGameScore": 74,
      "scoreVolatility": 19.2,
      "homeAverage": 50.3,
      "awayAverage": 52.1
    },
    "FLETCHERSHARPE": {
      "playerName": "Fletcher Sharpe",
      "key": "FLETCHERSHARPE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 18,
      "currentPrice": 570000,
      "priceImpliedProjection": 44.5,
      "seasonAverage": 42.8,
      "last3Average": 56,
      "lastGameScore": 80,
      "scoreVolatility": 14.1,
      "homeAverage": 42,
      "awayAverage": 43.7
    },
    "ISAIYAKATOA": {
      "playerName": "Isaiya Katoa",
      "key": "ISAIYAKATOA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 15,
      "currentPrice": 586000,
      "priceImpliedProjection": 45.8,
      "seasonAverage": 47.7,
      "last3Average": 39.3,
      "lastGameScore": 48,
      "scoreVolatility": 15.6,
      "homeAverage": 45.9,
      "awayAverage": 49.9
    },
    "KEAONKOLOAMATANGI": {
      "playerName": "Keaon Koloamatangi",
      "key": "KEAONKOLOAMATANGI",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 703000,
      "priceImpliedProjection": 54.9,
      "seasonAverage": 49.2,
      "last3Average": 55.3,
      "lastGameScore": 51,
      "scoreVolatility": 12.4,
      "homeAverage": 46.8,
      "awayAverage": 51.4
    },
    "NICHOLASHYNES": {
      "playerName": "Nicholas Hynes",
      "key": "NICHOLASHYNES",
      "primaryPosition": "Halfback",
      "gamesPlayed": 16,
      "currentPrice": 913000,
      "priceImpliedProjection": 71.3,
      "seasonAverage": 68.6,
      "last3Average": 88.7,
      "lastGameScore": 105,
      "scoreVolatility": 23.5,
      "homeAverage": 71.1,
      "awayAverage": 66.1
    },
    "TRAIFULLER": {
      "playerName": "Trai Fuller",
      "key": "TRAIFULLER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 561000,
      "priceImpliedProjection": 43.8,
      "seasonAverage": 44.7,
      "last3Average": 58,
      "lastGameScore": 60,
      "scoreVolatility": 19.8,
      "homeAverage": 37.3,
      "awayAverage": 50.3
    },
    "KAIPEARCEPAUL": {
      "playerName": "Kai Pearce-Paul",
      "key": "KAIPEARCEPAUL",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 12,
      "currentPrice": 646000,
      "priceImpliedProjection": 50.5,
      "seasonAverage": 54.7,
      "last3Average": 41,
      "lastGameScore": 7,
      "scoreVolatility": 18.8,
      "homeAverage": 47.6,
      "awayAverage": 68.8
    },
    "TOBYCOUCHMAN": {
      "playerName": "Toby Couchman",
      "key": "TOBYCOUCHMAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 785000,
      "priceImpliedProjection": 61.3,
      "seasonAverage": 60.5,
      "last3Average": 60,
      "lastGameScore": 21,
      "scoreVolatility": 17.5,
      "homeAverage": 57.9,
      "awayAverage": 63.1
    },
    "JAMALFOGARTY": {
      "playerName": "Jamal Fogarty",
      "key": "JAMALFOGARTY",
      "primaryPosition": "Halfback",
      "gamesPlayed": 17,
      "currentPrice": 645000,
      "priceImpliedProjection": 50.4,
      "seasonAverage": 54.4,
      "last3Average": 50.3,
      "lastGameScore": 57,
      "scoreVolatility": 12,
      "homeAverage": 50.9,
      "awayAverage": 58.3
    },
    "BLAYKEBRAILEY": {
      "playerName": "Blayke Brailey",
      "key": "BLAYKEBRAILEY",
      "primaryPosition": null,
      "gamesPlayed": 15,
      "currentPrice": 640000,
      "priceImpliedProjection": 50,
      "seasonAverage": 55.7,
      "last3Average": 54.7,
      "lastGameScore": 68,
      "scoreVolatility": 10.1,
      "homeAverage": 58,
      "awayAverage": 53
    },
    "JAMESTEDESCO": {
      "playerName": "James Tedesco",
      "key": "JAMESTEDESCO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 16,
      "currentPrice": 590000,
      "priceImpliedProjection": 46.1,
      "seasonAverage": 52.4,
      "last3Average": 54.3,
      "lastGameScore": 51,
      "scoreVolatility": 19.7,
      "homeAverage": 56,
      "awayAverage": 49.7
    },
    "PATRICKCARRIGAN": {
      "playerName": "Patrick Carrigan",
      "key": "PATRICKCARRIGAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 13,
      "currentPrice": 661000,
      "priceImpliedProjection": 51.6,
      "seasonAverage": 55.8,
      "last3Average": 57,
      "lastGameScore": 52,
      "scoreVolatility": 10.6,
      "homeAverage": 51.8,
      "awayAverage": 59.1
    },
    "MATTYNICHOLSON": {
      "playerName": "Matty Nicholson",
      "key": "MATTYNICHOLSON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "currentPrice": 582000,
      "priceImpliedProjection": 45.5,
      "seasonAverage": 24,
      "last3Average": 24,
      "lastGameScore": 41,
      "scoreVolatility": 17,
      "homeAverage": 7,
      "awayAverage": 41
    },
    "BEAUFERMOR": {
      "playerName": "Beau Fermor",
      "key": "BEAUFERMOR",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 19,
      "currentPrice": 609000,
      "priceImpliedProjection": 47.6,
      "seasonAverage": 49.2,
      "last3Average": 52.3,
      "lastGameScore": 49,
      "scoreVolatility": 8.9,
      "homeAverage": 45.5,
      "awayAverage": 51.8
    },
    "LINDSAYSMITH": {
      "playerName": "Lindsay Smith",
      "key": "LINDSAYSMITH",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 594000,
      "priceImpliedProjection": 46.4,
      "seasonAverage": 41.9,
      "last3Average": 41,
      "lastGameScore": 34,
      "scoreVolatility": 13.8,
      "homeAverage": 44.4,
      "awayAverage": 39.7
    },
    "TINOFAASUAMALEAUI": {
      "playerName": "Tino Fa'asuamaleaui",
      "key": "TINOFAASUAMALEAUI",
      "primaryPosition": "Prop",
      "gamesPlayed": 16,
      "currentPrice": 647000,
      "priceImpliedProjection": 50.5,
      "seasonAverage": 46.8,
      "last3Average": 56.3,
      "lastGameScore": 43,
      "scoreVolatility": 12.7,
      "homeAverage": 53.3,
      "awayAverage": 41.8
    },
    "DALYCHERRYEVANS": {
      "playerName": "Daly Cherry-Evans",
      "key": "DALYCHERRYEVANS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 19,
      "currentPrice": 562000,
      "priceImpliedProjection": 43.9,
      "seasonAverage": 46.4,
      "last3Average": 48,
      "lastGameScore": 36,
      "scoreVolatility": 10.6,
      "homeAverage": 50.3,
      "awayAverage": 42.8
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
      "gamesPlayed": 20,
      "currentPrice": 644000,
      "priceImpliedProjection": 50.3,
      "seasonAverage": 51.9,
      "last3Average": 57.3,
      "lastGameScore": 70,
      "scoreVolatility": 12.2,
      "homeAverage": 51.6,
      "awayAverage": 52.1
    },
    "JACOBKIRAZ": {
      "playerName": "Jacob Kiraz",
      "key": "JACOBKIRAZ",
      "primaryPosition": "Centre",
      "gamesPlayed": 15,
      "currentPrice": 550000,
      "priceImpliedProjection": 43,
      "seasonAverage": 46.3,
      "last3Average": 42.7,
      "lastGameScore": 28,
      "scoreVolatility": 21,
      "homeAverage": 52.3,
      "awayAverage": 37.3
    },
    "ADDINFONUABLAKE": {
      "playerName": "Addin Fonua-Blake",
      "key": "ADDINFONUABLAKE",
      "primaryPosition": "Prop",
      "gamesPlayed": 17,
      "currentPrice": 531000,
      "priceImpliedProjection": 41.5,
      "seasonAverage": 46.1,
      "last3Average": 42.3,
      "lastGameScore": 57,
      "scoreVolatility": 10.6,
      "homeAverage": 47.1,
      "awayAverage": 44.6
    },
    "REECEWALSH": {
      "playerName": "Reece Walsh",
      "key": "REECEWALSH",
      "primaryPosition": "Fullback",
      "gamesPlayed": 14,
      "currentPrice": 631000,
      "priceImpliedProjection": 49.3,
      "seasonAverage": 49.5,
      "last3Average": 58.7,
      "lastGameScore": 44,
      "scoreVolatility": 18.3,
      "homeAverage": 52.7,
      "awayAverage": 46.3
    },
    "ZACHOSKING": {
      "playerName": "Zac Hosking",
      "key": "ZACHOSKING",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 18,
      "currentPrice": 627000,
      "priceImpliedProjection": 49,
      "seasonAverage": 47.8,
      "last3Average": 41.7,
      "lastGameScore": 52,
      "scoreVolatility": 14,
      "homeAverage": 46,
      "awayAverage": 49.7
    },
    "CAMERONMCINNES": {
      "playerName": "Cameron McInnes",
      "key": "CAMERONMCINNES",
      "primaryPosition": "Prop",
      "gamesPlayed": 12,
      "currentPrice": 543000,
      "priceImpliedProjection": 42.4,
      "seasonAverage": 43.1,
      "last3Average": 47.7,
      "lastGameScore": 57,
      "scoreVolatility": 14.5,
      "homeAverage": 46.2,
      "awayAverage": 40.9
    },
    "HARRYGRANT": {
      "playerName": "Harry Grant",
      "key": "HARRYGRANT",
      "primaryPosition": null,
      "gamesPlayed": 18,
      "currentPrice": 622000,
      "priceImpliedProjection": 48.6,
      "seasonAverage": 53.5,
      "last3Average": 37.3,
      "lastGameScore": 6,
      "scoreVolatility": 16.9,
      "homeAverage": 55.1,
      "awayAverage": 51.9
    },
    "VALENTINEHOLMES": {
      "playerName": "Valentine Holmes",
      "key": "VALENTINEHOLMES",
      "primaryPosition": "Centre",
      "gamesPlayed": 19,
      "currentPrice": 482000,
      "priceImpliedProjection": 37.7,
      "seasonAverage": 37.9,
      "last3Average": 35.7,
      "lastGameScore": 69,
      "scoreVolatility": 18.2,
      "homeAverage": 41.1,
      "awayAverage": 35.1
    },
    "MAXKING": {
      "playerName": "Max King",
      "key": "MAXKING",
      "primaryPosition": "Prop",
      "gamesPlayed": 15,
      "currentPrice": 643000,
      "priceImpliedProjection": 50.2,
      "seasonAverage": 51.1,
      "last3Average": 47.7,
      "lastGameScore": 41,
      "scoreVolatility": 10.6,
      "homeAverage": 50.6,
      "awayAverage": 51.8
    },
    "ADAMREYNOLDS": {
      "playerName": "Adam Reynolds",
      "key": "ADAMREYNOLDS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 14,
      "currentPrice": 451000,
      "priceImpliedProjection": 35.2,
      "seasonAverage": 36.9,
      "last3Average": 24.7,
      "lastGameScore": -2,
      "scoreVolatility": 19.4,
      "homeAverage": 38.1,
      "awayAverage": 35.6
    },
    "CAMERONMUNSTER": {
      "playerName": "Cameron Munster",
      "key": "CAMERONMUNSTER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 15,
      "currentPrice": 679000,
      "priceImpliedProjection": 53,
      "seasonAverage": 51.3,
      "last3Average": 53.3,
      "lastGameScore": 58,
      "scoreVolatility": 13.6,
      "homeAverage": 54.1,
      "awayAverage": 48.1
    },
    "ANGUSCRICHTON": {
      "playerName": "Angus Crichton",
      "key": "ANGUSCRICHTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 13,
      "currentPrice": 529000,
      "priceImpliedProjection": 41.3,
      "seasonAverage": 43.2,
      "last3Average": 42.7,
      "lastGameScore": 65,
      "scoreVolatility": 10.7,
      "homeAverage": 44.5,
      "awayAverage": 42.1
    },
    "NAUFAHUWHYTE": {
      "playerName": "Naufahu Whyte",
      "key": "NAUFAHUWHYTE",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 604000,
      "priceImpliedProjection": 47.2,
      "seasonAverage": 46.5,
      "last3Average": 48,
      "lastGameScore": 46,
      "scoreVolatility": 11.7,
      "homeAverage": 48.7,
      "awayAverage": 44.6
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
      "gamesPlayed": 20,
      "currentPrice": 517000,
      "priceImpliedProjection": 40.4,
      "seasonAverage": 46.1,
      "last3Average": 36,
      "lastGameScore": 32,
      "scoreVolatility": 17.3,
      "homeAverage": 47.4,
      "awayAverage": 44.7
    },
    "JACKWILLIAMS": {
      "playerName": "Jack Williams",
      "key": "JACKWILLIAMS",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 698000,
      "priceImpliedProjection": 54.5,
      "seasonAverage": 53,
      "last3Average": 71.3,
      "lastGameScore": 50,
      "scoreVolatility": 12.2,
      "homeAverage": 51.8,
      "awayAverage": 54.3
    },
    "JAYDNSUA": {
      "playerName": "Jaydn Su'A",
      "key": "JAYDNSUA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 579000,
      "priceImpliedProjection": 45.2,
      "seasonAverage": 46.8,
      "last3Average": 28.7,
      "lastGameScore": 11,
      "scoreVolatility": 18.3,
      "homeAverage": 48.7,
      "awayAverage": 45.6
    },
    "DAMIENCOOK": {
      "playerName": "Damien Cook",
      "key": "DAMIENCOOK",
      "primaryPosition": null,
      "gamesPlayed": 19,
      "currentPrice": 463000,
      "priceImpliedProjection": 36.2,
      "seasonAverage": 48.4,
      "last3Average": 27.7,
      "lastGameScore": 33,
      "scoreVolatility": 19.8,
      "homeAverage": 43.1,
      "awayAverage": 53.2
    },
    "VILIAMEKIKAU": {
      "playerName": "Viliame Kikau",
      "key": "VILIAMEKIKAU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 10,
      "currentPrice": 500000,
      "priceImpliedProjection": 39.1,
      "seasonAverage": 42.9,
      "last3Average": 45.3,
      "lastGameScore": 51,
      "scoreVolatility": 18.2,
      "homeAverage": 53.4,
      "awayAverage": 32.4
    },
    "TOMDEARDEN": {
      "playerName": "Tom Dearden",
      "key": "TOMDEARDEN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 11,
      "currentPrice": 742000,
      "priceImpliedProjection": 58,
      "seasonAverage": 56.8,
      "last3Average": 61.7,
      "lastGameScore": 62,
      "scoreVolatility": 12.5,
      "homeAverage": 58.2,
      "awayAverage": 55.7
    },
    "KLIRO": {
      "playerName": "KL Iro",
      "key": "KLIRO",
      "primaryPosition": "Centre",
      "gamesPlayed": 18,
      "currentPrice": 512000,
      "priceImpliedProjection": 40,
      "seasonAverage": 43.1,
      "last3Average": 37.7,
      "lastGameScore": 10,
      "scoreVolatility": 15.8,
      "homeAverage": 39.9,
      "awayAverage": 46.3
    },
    "JOHNBATEMAN": {
      "playerName": "John Bateman",
      "key": "JOHNBATEMAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 524000,
      "priceImpliedProjection": 40.9,
      "seasonAverage": 30.3,
      "last3Average": 30.3,
      "lastGameScore": 31,
      "scoreVolatility": 1.7,
      "homeAverage": 32,
      "awayAverage": 29.5
    },
    "JACKSONFORD": {
      "playerName": "Jackson Ford",
      "key": "JACKSONFORD",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 699000,
      "priceImpliedProjection": 54.6,
      "seasonAverage": 61.1,
      "last3Average": 42.7,
      "lastGameScore": 22,
      "scoreVolatility": 19.3,
      "homeAverage": 57.6,
      "awayAverage": 65.8
    },
    "CONNORWATSON": {
      "playerName": "Connor Watson",
      "key": "CONNORWATSON",
      "primaryPosition": null,
      "gamesPlayed": 18,
      "currentPrice": 453000,
      "priceImpliedProjection": 35.4,
      "seasonAverage": 36.6,
      "last3Average": 33,
      "lastGameScore": 29,
      "scoreVolatility": 16.3,
      "homeAverage": 39.7,
      "awayAverage": 33.4
    },
    "JEREMYMARSHALLKING": {
      "playerName": "Jeremy Marshall-King",
      "key": "JEREMYMARSHALLKING",
      "primaryPosition": null,
      "gamesPlayed": 11,
      "currentPrice": 547000,
      "priceImpliedProjection": 42.7,
      "seasonAverage": 44,
      "last3Average": 34.3,
      "lastGameScore": 37,
      "scoreVolatility": 11.7,
      "homeAverage": 44.4,
      "awayAverage": 43.7
    },
    "TRENTLOIERO": {
      "playerName": "Trent Loiero",
      "key": "TRENTLOIERO",
      "primaryPosition": "Prop",
      "gamesPlayed": 17,
      "currentPrice": 628000,
      "priceImpliedProjection": 49.1,
      "seasonAverage": 49.2,
      "last3Average": 52.7,
      "lastGameScore": 62,
      "scoreVolatility": 10.7,
      "homeAverage": 50.7,
      "awayAverage": 47.5
    },
    "HAMISOTABUAIFIDOW": {
      "playerName": "Hamiso Tabuai-Fidow",
      "key": "HAMISOTABUAIFIDOW",
      "primaryPosition": "Fullback",
      "gamesPlayed": 14,
      "currentPrice": 595000,
      "priceImpliedProjection": 46.5,
      "seasonAverage": 49,
      "last3Average": 54.7,
      "lastGameScore": 40,
      "scoreVolatility": 14.7,
      "homeAverage": 56.8,
      "awayAverage": 38.7
    },
    "DYLANEGAN": {
      "playerName": "Dylan Egan",
      "key": "DYLANEGAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 11,
      "currentPrice": 615000,
      "priceImpliedProjection": 48,
      "seasonAverage": 52.2,
      "last3Average": 45.7,
      "lastGameScore": 43,
      "scoreVolatility": 10.8,
      "homeAverage": 47.8,
      "awayAverage": 55.8
    },
    "JACKDEBELIN": {
      "playerName": "Jack De Belin",
      "key": "JACKDEBELIN",
      "primaryPosition": "Prop",
      "gamesPlayed": 16,
      "currentPrice": 305000,
      "priceImpliedProjection": 23.8,
      "seasonAverage": 28.1,
      "last3Average": 24,
      "lastGameScore": 39,
      "scoreVolatility": 8.5,
      "homeAverage": 24.6,
      "awayAverage": 31.6
    },
    "DYLANEDWARDS": {
      "playerName": "Dylan Edwards",
      "key": "DYLANEDWARDS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 17,
      "currentPrice": 610000,
      "priceImpliedProjection": 47.7,
      "seasonAverage": 52.4,
      "last3Average": 44,
      "lastGameScore": 46,
      "scoreVolatility": 15.5,
      "homeAverage": 50.1,
      "awayAverage": 54.3
    },
    "MARKNAWAQANITAWASE": {
      "playerName": "Mark Nawaqanitawase",
      "key": "MARKNAWAQANITAWASE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 15,
      "currentPrice": 496000,
      "priceImpliedProjection": 38.8,
      "seasonAverage": 43.7,
      "last3Average": 42,
      "lastGameScore": 80,
      "scoreVolatility": 22,
      "homeAverage": 38.9,
      "awayAverage": 48
    },
    "JORDANRIKI": {
      "playerName": "Jordan Riki",
      "key": "JORDANRIKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 17,
      "currentPrice": 610000,
      "priceImpliedProjection": 47.7,
      "seasonAverage": 51.7,
      "last3Average": 52.3,
      "lastGameScore": 41,
      "scoreVolatility": 11,
      "homeAverage": 50.1,
      "awayAverage": 53.1
    },
    "EUANAITKEN": {
      "playerName": "Euan Aitken",
      "key": "EUANAITKEN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 14,
      "currentPrice": 567000,
      "priceImpliedProjection": 44.3,
      "seasonAverage": 48,
      "last3Average": 35.3,
      "lastGameScore": 43,
      "scoreVolatility": 18.7,
      "homeAverage": 47.4,
      "awayAverage": 48.3
    },
    "TAYLANMAY": {
      "playerName": "Taylan May",
      "key": "TAYLANMAY",
      "primaryPosition": "Centre",
      "gamesPlayed": 9,
      "currentPrice": 519000,
      "priceImpliedProjection": 40.5,
      "seasonAverage": 38.2,
      "last3Average": 30,
      "lastGameScore": 9,
      "scoreVolatility": 27.5,
      "homeAverage": 32.8,
      "awayAverage": 49
    },
    "LEOTHOMPSON": {
      "playerName": "Leo Thompson",
      "key": "LEOTHOMPSON",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 580000,
      "priceImpliedProjection": 45.3,
      "seasonAverage": 49.5,
      "last3Average": 45.7,
      "lastGameScore": 50,
      "scoreVolatility": 11.5,
      "homeAverage": 52.3,
      "awayAverage": 46.7
    },
    "HAUMOLEOLAKAUATU": {
      "playerName": "Haumole Olakau'atu",
      "key": "HAUMOLEOLAKAUATU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 16,
      "currentPrice": 804000,
      "priceImpliedProjection": 62.8,
      "seasonAverage": 62.7,
      "last3Average": 62.7,
      "lastGameScore": 55,
      "scoreVolatility": 12.8,
      "homeAverage": 58.6,
      "awayAverage": 68
    },
    "ISAIAHPAPALII": {
      "playerName": "Isaiah Papali'i",
      "key": "ISAIAHPAPALII",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 640000,
      "priceImpliedProjection": 50,
      "seasonAverage": 52.6,
      "last3Average": 56,
      "lastGameScore": 69,
      "scoreVolatility": 11.4,
      "homeAverage": 55.1,
      "awayAverage": 50.5
    },
    "SAMVERRILLS": {
      "playerName": "Sam Verrills",
      "key": "SAMVERRILLS",
      "primaryPosition": null,
      "gamesPlayed": 11,
      "currentPrice": 292000,
      "priceImpliedProjection": 22.8,
      "seasonAverage": 27.1,
      "last3Average": 19,
      "lastGameScore": 19,
      "scoreVolatility": 12.4,
      "homeAverage": 23.4,
      "awayAverage": 30.2
    },
    "MOALAGRAHAMTAUFA": {
      "playerName": "Moala Graham-Taufa",
      "key": "MOALAGRAHAMTAUFA",
      "primaryPosition": "Centre",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 9,
      "last3Average": 9,
      "lastGameScore": 7,
      "scoreVolatility": 2,
      "homeAverage": 11,
      "awayAverage": 7
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
      "gamesPlayed": 12,
      "currentPrice": 445000,
      "priceImpliedProjection": 34.8,
      "seasonAverage": 34.7,
      "last3Average": 30.7,
      "lastGameScore": 17,
      "scoreVolatility": 7.3,
      "homeAverage": 37.7,
      "awayAverage": 31.7
    },
    "TREYMOONEY": {
      "playerName": "Trey Mooney",
      "key": "TREYMOONEY",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 574000,
      "priceImpliedProjection": 44.8,
      "seasonAverage": 47.6,
      "last3Average": 48.3,
      "lastGameScore": 49,
      "scoreVolatility": 13.4,
      "homeAverage": 45.6,
      "awayAverage": 49.7
    },
    "MITCHELLMOSES": {
      "playerName": "Mitchell Moses",
      "key": "MITCHELLMOSES",
      "primaryPosition": "Halfback",
      "gamesPlayed": 14,
      "currentPrice": 566000,
      "priceImpliedProjection": 44.2,
      "seasonAverage": 46.3,
      "last3Average": 43.7,
      "lastGameScore": 36,
      "scoreVolatility": 13.2,
      "homeAverage": 49.5,
      "awayAverage": 42
    },
    "MITCHELLBARNETT": {
      "playerName": "Mitchell Barnett",
      "key": "MITCHELLBARNETT",
      "primaryPosition": "Prop",
      "gamesPlayed": 10,
      "currentPrice": 548000,
      "priceImpliedProjection": 42.8,
      "seasonAverage": 42.5,
      "last3Average": 45.7,
      "lastGameScore": 47,
      "scoreVolatility": 8.3,
      "homeAverage": 39.8,
      "awayAverage": 46.5
    },
    "TANAHBOYD": {
      "playerName": "Tanah Boyd",
      "key": "TANAHBOYD",
      "primaryPosition": "Halfback",
      "gamesPlayed": 10,
      "currentPrice": 638000,
      "priceImpliedProjection": 49.8,
      "seasonAverage": 56,
      "last3Average": 34.3,
      "lastGameScore": 5,
      "scoreVolatility": 21.7,
      "homeAverage": 53.2,
      "awayAverage": 60.3
    },
    "WAYDEEGAN": {
      "playerName": "Wayde Egan",
      "key": "WAYDEEGAN",
      "primaryPosition": null,
      "gamesPlayed": 19,
      "currentPrice": 484000,
      "priceImpliedProjection": 37.8,
      "seasonAverage": 38.6,
      "last3Average": 41,
      "lastGameScore": 50,
      "scoreVolatility": 12.2,
      "homeAverage": 37.9,
      "awayAverage": 39.2
    },
    "BRADMANBEST": {
      "playerName": "Bradman Best",
      "key": "BRADMANBEST",
      "primaryPosition": "Centre",
      "gamesPlayed": 12,
      "currentPrice": 536000,
      "priceImpliedProjection": 41.9,
      "seasonAverage": 42.5,
      "last3Average": 37.7,
      "lastGameScore": 41,
      "scoreVolatility": 14.2,
      "homeAverage": 38.9,
      "awayAverage": 47.6
    },
    "APISAIKOROISAU": {
      "playerName": "Apisai Koroisau",
      "key": "APISAIKOROISAU",
      "primaryPosition": null,
      "gamesPlayed": 15,
      "currentPrice": 536000,
      "priceImpliedProjection": 41.9,
      "seasonAverage": 45,
      "last3Average": 39.7,
      "lastGameScore": 34,
      "scoreVolatility": 10.1,
      "homeAverage": 44.1,
      "awayAverage": 46
    },
    "JAHROMEHUGHES": {
      "playerName": "Jahrome Hughes",
      "key": "JAHROMEHUGHES",
      "primaryPosition": "Halfback",
      "gamesPlayed": 16,
      "currentPrice": 618000,
      "priceImpliedProjection": 48.3,
      "seasonAverage": 52.7,
      "last3Average": 47.3,
      "lastGameScore": 64,
      "scoreVolatility": 14.1,
      "homeAverage": 48,
      "awayAverage": 58.7
    },
    "JAMESFISHERHARRIS": {
      "playerName": "James Fisher-Harris",
      "key": "JAMESFISHERHARRIS",
      "primaryPosition": "Prop",
      "gamesPlayed": 16,
      "currentPrice": 553000,
      "priceImpliedProjection": 43.2,
      "seasonAverage": 47.2,
      "last3Average": 38.3,
      "lastGameScore": 36,
      "scoreVolatility": 10,
      "homeAverage": 48.7,
      "awayAverage": 46
    },
    "REECEROBSON": {
      "playerName": "Reece Robson",
      "key": "REECEROBSON",
      "primaryPosition": null,
      "gamesPlayed": 15,
      "currentPrice": 558000,
      "priceImpliedProjection": 43.6,
      "seasonAverage": 47.5,
      "last3Average": 52.3,
      "lastGameScore": 46,
      "scoreVolatility": 9,
      "homeAverage": 49.3,
      "awayAverage": 45.9
    },
    "STEFANOUTOIKAMANU": {
      "playerName": "Stefano Utoikamanu",
      "key": "STEFANOUTOIKAMANU",
      "primaryPosition": "Prop",
      "gamesPlayed": 20,
      "currentPrice": 687000,
      "priceImpliedProjection": 53.7,
      "seasonAverage": 54.8,
      "last3Average": 63,
      "lastGameScore": 45,
      "scoreVolatility": 11,
      "homeAverage": 56.1,
      "awayAverage": 53.4
    },
    "KOTONISTAGGS": {
      "playerName": "Kotoni Staggs",
      "key": "KOTONISTAGGS",
      "primaryPosition": "Centre",
      "gamesPlayed": 16,
      "currentPrice": 488000,
      "priceImpliedProjection": 38.1,
      "seasonAverage": 41.1,
      "last3Average": 47,
      "lastGameScore": 38,
      "scoreVolatility": 11.9,
      "homeAverage": 39.2,
      "awayAverage": 44.3
    },
    "TOMSTARLING": {
      "playerName": "Tom Starling",
      "key": "TOMSTARLING",
      "primaryPosition": null,
      "gamesPlayed": 20,
      "currentPrice": 291000,
      "priceImpliedProjection": 22.7,
      "seasonAverage": 32.2,
      "last3Average": 18.3,
      "lastGameScore": 12,
      "scoreVolatility": 13.8,
      "homeAverage": 33.9,
      "awayAverage": 30.5
    },
    "ALEXTWAL": {
      "playerName": "Alex Twal",
      "key": "ALEXTWAL",
      "primaryPosition": "Prop",
      "gamesPlayed": 15,
      "currentPrice": 730000,
      "priceImpliedProjection": 57,
      "seasonAverage": 64.9,
      "last3Average": 50.7,
      "lastGameScore": 60,
      "scoreVolatility": 13.3,
      "homeAverage": 65.4,
      "awayAverage": 64.4
    },
    "BRAIDONBURNS": {
      "playerName": "Braidon Burns",
      "key": "BRAIDONBURNS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 16,
      "currentPrice": 580000,
      "priceImpliedProjection": 45.3,
      "seasonAverage": 46.3,
      "last3Average": 37,
      "lastGameScore": 29,
      "scoreVolatility": 13.3,
      "homeAverage": 41.3,
      "awayAverage": 51.4
    },
    "SIUAWONG": {
      "playerName": "Siua Wong",
      "key": "SIUAWONG",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 19,
      "currentPrice": 593000,
      "priceImpliedProjection": 46.3,
      "seasonAverage": 51.9,
      "last3Average": 48.7,
      "lastGameScore": 39,
      "scoreVolatility": 10.3,
      "homeAverage": 51.9,
      "awayAverage": 52
    },
    "SAMWALKER": {
      "playerName": "Sam Walker",
      "key": "SAMWALKER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 17,
      "currentPrice": 660000,
      "priceImpliedProjection": 51.6,
      "seasonAverage": 50.5,
      "last3Average": 63.3,
      "lastGameScore": 106,
      "scoreVolatility": 22.3,
      "homeAverage": 44.6,
      "awayAverage": 55.7
    },
    "REUBENCOTTER": {
      "playerName": "Reuben Cotter",
      "key": "REUBENCOTTER",
      "primaryPosition": "Prop",
      "gamesPlayed": 17,
      "currentPrice": 501000,
      "priceImpliedProjection": 39.1,
      "seasonAverage": 41.7,
      "last3Average": 39,
      "lastGameScore": 37,
      "scoreVolatility": 9.9,
      "homeAverage": 37.9,
      "awayAverage": 46
    },
    "JOSHCURRAN": {
      "playerName": "Josh Curran",
      "key": "JOSHCURRAN",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 490000,
      "priceImpliedProjection": 38.3,
      "seasonAverage": 32.3,
      "last3Average": 36,
      "lastGameScore": 35,
      "scoreVolatility": 20.8,
      "homeAverage": 32.6,
      "awayAverage": 31.8
    },
    "MOEAKIFOTUAIKA": {
      "playerName": "Moeaki Fotuaika",
      "key": "MOEAKIFOTUAIKA",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 545000,
      "priceImpliedProjection": 42.6,
      "seasonAverage": 39,
      "last3Average": 36.7,
      "lastGameScore": 39,
      "scoreVolatility": 13,
      "homeAverage": 40.6,
      "awayAverage": 37.8
    },
    "JAKECLIFFORD": {
      "playerName": "Jake Clifford",
      "key": "JAKECLIFFORD",
      "primaryPosition": "Halfback",
      "gamesPlayed": 19,
      "currentPrice": 597000,
      "priceImpliedProjection": 46.6,
      "seasonAverage": 51.3,
      "last3Average": 38.3,
      "lastGameScore": 33,
      "scoreVolatility": 15.1,
      "homeAverage": 50.3,
      "awayAverage": 52.3
    },
    "GEHAMATSHIBASAKI": {
      "playerName": "Gehamat Shibasaki",
      "key": "GEHAMATSHIBASAKI",
      "primaryPosition": "Centre",
      "gamesPlayed": 14,
      "currentPrice": 316000,
      "priceImpliedProjection": 24.7,
      "seasonAverage": 23.1,
      "last3Average": 28.7,
      "lastGameScore": 30,
      "scoreVolatility": 8.4,
      "homeAverage": 23.9,
      "awayAverage": 22.3
    },
    "MAXPLATH": {
      "playerName": "Max Plath",
      "key": "MAXPLATH",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 524000,
      "priceImpliedProjection": 40.9,
      "seasonAverage": 45.1,
      "last3Average": 39.7,
      "lastGameScore": 49,
      "scoreVolatility": 13.1,
      "homeAverage": 45.4,
      "awayAverage": 44.8
    },
    "KURTDONOGHOE": {
      "playerName": "Kurt Donoghoe",
      "key": "KURTDONOGHOE",
      "primaryPosition": null,
      "gamesPlayed": 12,
      "currentPrice": 501000,
      "priceImpliedProjection": 39.1,
      "seasonAverage": 37.6,
      "last3Average": 42.7,
      "lastGameScore": 49,
      "scoreVolatility": 14.3,
      "homeAverage": 33,
      "awayAverage": 42.2
    },
    "ROGERTUIVASASHECK": {
      "playerName": "Roger Tuivasa-Sheck",
      "key": "ROGERTUIVASASHECK",
      "primaryPosition": "Fullback",
      "gamesPlayed": 10,
      "currentPrice": 436000,
      "priceImpliedProjection": 34.1,
      "seasonAverage": 31.2,
      "last3Average": 28.3,
      "lastGameScore": 2,
      "scoreVolatility": 16.3,
      "homeAverage": 33.4,
      "awayAverage": 29
    },
    "ADAMDOUEIHI": {
      "playerName": "Adam Doueihi",
      "key": "ADAMDOUEIHI",
      "primaryPosition": "Halfback",
      "gamesPlayed": 13,
      "currentPrice": 708000,
      "priceImpliedProjection": 55.3,
      "seasonAverage": 61.3,
      "last3Average": 64.3,
      "lastGameScore": 92,
      "scoreVolatility": 19.3,
      "homeAverage": 72.8,
      "awayAverage": 51.4
    },
    "BRITONNIKORA": {
      "playerName": "Briton Nikora",
      "key": "BRITONNIKORA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 14,
      "currentPrice": 512000,
      "priceImpliedProjection": 40,
      "seasonAverage": 37.6,
      "last3Average": 42.3,
      "lastGameScore": 42,
      "scoreVolatility": 17.1,
      "homeAverage": 35.7,
      "awayAverage": 41.2
    },
    "KITIONEKAUTOGA": {
      "playerName": "Kitione Kautoga",
      "key": "KITIONEKAUTOGA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 14,
      "currentPrice": 580000,
      "priceImpliedProjection": 45.3,
      "seasonAverage": 46,
      "last3Average": 36.3,
      "lastGameScore": 31,
      "scoreVolatility": 12.5,
      "homeAverage": 51.4,
      "awayAverage": 40.6
    },
    "MATTHEWTIMOKO": {
      "playerName": "Matthew Timoko",
      "key": "MATTHEWTIMOKO",
      "primaryPosition": "Centre",
      "gamesPlayed": 15,
      "currentPrice": 535000,
      "priceImpliedProjection": 41.8,
      "seasonAverage": 42.7,
      "last3Average": 45.3,
      "lastGameScore": 60,
      "scoreVolatility": 14,
      "homeAverage": 36.6,
      "awayAverage": 49.6
    },
    "ROBERTTOIA": {
      "playerName": "Robert Toia",
      "key": "ROBERTTOIA",
      "primaryPosition": "Centre",
      "gamesPlayed": 16,
      "currentPrice": 597000,
      "priceImpliedProjection": 46.6,
      "seasonAverage": 47.4,
      "last3Average": 52.3,
      "lastGameScore": 60,
      "scoreVolatility": 11.1,
      "homeAverage": 42.3,
      "awayAverage": 52.5
    },
    "REUBENGARRICK": {
      "playerName": "Reuben Garrick",
      "key": "REUBENGARRICK",
      "primaryPosition": "Centre",
      "gamesPlayed": 18,
      "currentPrice": 498000,
      "priceImpliedProjection": 38.9,
      "seasonAverage": 40.6,
      "last3Average": 39,
      "lastGameScore": 22,
      "scoreVolatility": 14.6,
      "homeAverage": 36.9,
      "awayAverage": 44.3
    },
    "TALLISDUNCAN": {
      "playerName": "Tallis Duncan",
      "key": "TALLISDUNCAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 17,
      "currentPrice": 683000,
      "priceImpliedProjection": 53.4,
      "seasonAverage": 53.1,
      "last3Average": 55.3,
      "lastGameScore": 57,
      "scoreVolatility": 15.7,
      "homeAverage": 54.5,
      "awayAverage": 51.8
    },
    "MATTBURTON": {
      "playerName": "Matt Burton",
      "key": "MATTBURTON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 18,
      "currentPrice": 471000,
      "priceImpliedProjection": 36.8,
      "seasonAverage": 46.7,
      "last3Average": 39.7,
      "lastGameScore": 40,
      "scoreVolatility": 16.1,
      "homeAverage": 46.6,
      "awayAverage": 46.9
    },
    "SHAWNBLORE": {
      "playerName": "Shawn Blore",
      "key": "SHAWNBLORE",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 9,
      "currentPrice": 314000,
      "priceImpliedProjection": 24.5,
      "seasonAverage": 23.6,
      "last3Average": 12.7,
      "lastGameScore": 7,
      "scoreVolatility": 12.7,
      "homeAverage": 22.8,
      "awayAverage": 24.2
    },
    "AJBRIMSON": {
      "playerName": "AJ Brimson",
      "key": "AJBRIMSON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 17,
      "currentPrice": 370000,
      "priceImpliedProjection": 28.9,
      "seasonAverage": 29.6,
      "last3Average": 31.7,
      "lastGameScore": 25,
      "scoreVolatility": 9.3,
      "homeAverage": 27.8,
      "awayAverage": 31.3
    },
    "PETERMAMOUZELOS": {
      "playerName": "Peter Mamouzelos",
      "key": "PETERMAMOUZELOS",
      "primaryPosition": null,
      "gamesPlayed": 8,
      "currentPrice": 376000,
      "priceImpliedProjection": 29.4,
      "seasonAverage": 30,
      "last3Average": 24.3,
      "lastGameScore": 41,
      "scoreVolatility": 10,
      "homeAverage": 26.3,
      "awayAverage": 33.8
    },
    "TEIGWILTON": {
      "playerName": "Teig Wilton",
      "key": "TEIGWILTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 17,
      "currentPrice": 523000,
      "priceImpliedProjection": 40.9,
      "seasonAverage": 42.9,
      "last3Average": 38.7,
      "lastGameScore": 25,
      "scoreVolatility": 16.7,
      "homeAverage": 41.3,
      "awayAverage": 44.8
    },
    "LACHLANGALVIN": {
      "playerName": "Lachlan Galvin",
      "key": "LACHLANGALVIN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 19,
      "currentPrice": 639000,
      "priceImpliedProjection": 49.9,
      "seasonAverage": 54.2,
      "last3Average": 50.7,
      "lastGameScore": 46,
      "scoreVolatility": 10.8,
      "homeAverage": 58.8,
      "awayAverage": 49
    },
    "KYLEFLANAGAN": {
      "playerName": "Kyle Flanagan",
      "key": "KYLEFLANAGAN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 16,
      "currentPrice": 345000,
      "priceImpliedProjection": 27,
      "seasonAverage": 28.1,
      "last3Average": 31.3,
      "lastGameScore": 44,
      "scoreVolatility": 10.3,
      "homeAverage": 30.2,
      "awayAverage": 26.9
    },
    "BRIANTOO": {
      "playerName": "Brian To'o",
      "key": "BRIANTOO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 17,
      "currentPrice": 551000,
      "priceImpliedProjection": 43,
      "seasonAverage": 39.5,
      "last3Average": 42.7,
      "lastGameScore": 19,
      "scoreVolatility": 21.7,
      "homeAverage": 39.6,
      "awayAverage": 39.3
    },
    "DANEGAGAI": {
      "playerName": "Dane Gagai",
      "key": "DANEGAGAI",
      "primaryPosition": "Centre",
      "gamesPlayed": 19,
      "currentPrice": 433000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 38.8,
      "last3Average": 33.3,
      "lastGameScore": 40,
      "scoreVolatility": 19.7,
      "homeAverage": 34.3,
      "awayAverage": 42.9
    },
    "NATBUTCHER": {
      "playerName": "Nat Butcher",
      "key": "NATBUTCHER",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 587000,
      "priceImpliedProjection": 45.9,
      "seasonAverage": 44.9,
      "last3Average": 55.3,
      "lastGameScore": 47,
      "scoreVolatility": 11.9,
      "homeAverage": 46.9,
      "awayAverage": 43.4
    },
    "KALYNPONGA": {
      "playerName": "Kalyn Ponga",
      "key": "KALYNPONGA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 11,
      "currentPrice": 696000,
      "priceImpliedProjection": 54.4,
      "seasonAverage": 59,
      "last3Average": 60.7,
      "lastGameScore": 60,
      "scoreVolatility": 17.3,
      "homeAverage": 55.5,
      "awayAverage": 61
    },
    "NICKMEANEY": {
      "playerName": "Nick Meaney",
      "key": "NICKMEANEY",
      "primaryPosition": "Centre",
      "gamesPlayed": 16,
      "currentPrice": 409000,
      "priceImpliedProjection": 32,
      "seasonAverage": 31.2,
      "last3Average": 35.3,
      "lastGameScore": 35,
      "scoreVolatility": 13,
      "homeAverage": 30.9,
      "awayAverage": 31.5
    },
    "TEVITANAUFAHU": {
      "playerName": "Tevita Naufahu",
      "key": "TEVITANAUFAHU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 540000,
      "priceImpliedProjection": 42.2,
      "seasonAverage": 44,
      "last3Average": 39.3,
      "lastGameScore": 33,
      "scoreVolatility": 22.3,
      "homeAverage": 52.7,
      "awayAverage": 37.5
    },
    "TOMTRBOJEVIC": {
      "playerName": "Tom Trbojevic",
      "key": "TOMTRBOJEVIC",
      "primaryPosition": "Fullback",
      "gamesPlayed": 11,
      "currentPrice": 534000,
      "priceImpliedProjection": 41.7,
      "seasonAverage": 45.5,
      "last3Average": 40.7,
      "lastGameScore": 20,
      "scoreVolatility": 16.7,
      "homeAverage": 55.2,
      "awayAverage": 37.5
    },
    "GREGMARZHEW": {
      "playerName": "Greg Marzhew",
      "key": "GREGMARZHEW",
      "primaryPosition": "Fullback",
      "gamesPlayed": 19,
      "currentPrice": 481000,
      "priceImpliedProjection": 37.6,
      "seasonAverage": 42.6,
      "last3Average": 52.3,
      "lastGameScore": 70,
      "scoreVolatility": 23.1,
      "homeAverage": 42.9,
      "awayAverage": 42.4
    },
    "JAMIEHUMPHREYS": {
      "playerName": "Jamie Humphreys",
      "key": "JAMIEHUMPHREYS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 14,
      "currentPrice": 416000,
      "priceImpliedProjection": 32.5,
      "seasonAverage": 35,
      "last3Average": 30.3,
      "lastGameScore": 26,
      "scoreVolatility": 10.6,
      "homeAverage": 36.7,
      "awayAverage": 33.3
    },
    "STEPHENCRICHTON": {
      "playerName": "Stephen Crichton",
      "key": "STEPHENCRICHTON",
      "primaryPosition": "Centre",
      "gamesPlayed": 15,
      "currentPrice": 541000,
      "priceImpliedProjection": 42.3,
      "seasonAverage": 42.3,
      "last3Average": 44.3,
      "lastGameScore": 67,
      "scoreVolatility": 13.3,
      "homeAverage": 39.3,
      "awayAverage": 45
    },
    "HARRYHAYES": {
      "playerName": "Harry Hayes",
      "key": "HARRYHAYES",
      "primaryPosition": "Prop",
      "gamesPlayed": 16,
      "currentPrice": 373000,
      "priceImpliedProjection": 29.1,
      "seasonAverage": 32.9,
      "last3Average": 24.7,
      "lastGameScore": 22,
      "scoreVolatility": 9.4,
      "homeAverage": 34.4,
      "awayAverage": 31.5
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
      "gamesPlayed": 19,
      "currentPrice": 375000,
      "priceImpliedProjection": 29.3,
      "seasonAverage": 28.5,
      "last3Average": 22.3,
      "lastGameScore": 28,
      "scoreVolatility": 18.3,
      "homeAverage": 35.7,
      "awayAverage": 20.6
    },
    "SAMUELAFAINU": {
      "playerName": "Samuela Fainu",
      "key": "SAMUELAFAINU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 12,
      "currentPrice": 571000,
      "priceImpliedProjection": 44.6,
      "seasonAverage": 50.5,
      "last3Average": 42.7,
      "lastGameScore": 36,
      "scoreVolatility": 10.6,
      "homeAverage": 52,
      "awayAverage": 49
    },
    "PAULALAMOTI": {
      "playerName": "Paul Alamoti",
      "key": "PAULALAMOTI",
      "primaryPosition": "Centre",
      "gamesPlayed": 19,
      "currentPrice": 542000,
      "priceImpliedProjection": 42.3,
      "seasonAverage": 40.5,
      "last3Average": 37.3,
      "lastGameScore": 32,
      "scoreVolatility": 17.1,
      "homeAverage": 42.4,
      "awayAverage": 38.7
    },
    "JACOBHALANGAHU": {
      "playerName": "Jacob Halangahu",
      "key": "JACOBHALANGAHU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 268000,
      "priceImpliedProjection": 20.9,
      "seasonAverage": 20.1,
      "last3Average": 30.3,
      "lastGameScore": 32,
      "scoreVolatility": 10.6,
      "homeAverage": 21.3,
      "awayAverage": 16.5
    },
    "TOLUTAUKOULA": {
      "playerName": "Tolutau Koula",
      "key": "TOLUTAUKOULA",
      "primaryPosition": "Centre",
      "gamesPlayed": 16,
      "currentPrice": 562000,
      "priceImpliedProjection": 43.9,
      "seasonAverage": 46.1,
      "last3Average": 38,
      "lastGameScore": 28,
      "scoreVolatility": 15.9,
      "homeAverage": 45.2,
      "awayAverage": 47.1
    },
    "RONALDOMULITALO": {
      "playerName": "Ronaldo Mulitalo",
      "key": "RONALDOMULITALO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 10,
      "currentPrice": 500000,
      "priceImpliedProjection": 39.1,
      "seasonAverage": 41.8,
      "last3Average": 52.3,
      "lastGameScore": 64,
      "scoreVolatility": 17.1,
      "homeAverage": 45,
      "awayAverage": 38.6
    },
    "PHILLIPSAMI": {
      "playerName": "Phillip Sami",
      "key": "PHILLIPSAMI",
      "primaryPosition": "Centre",
      "gamesPlayed": 19,
      "currentPrice": 493000,
      "priceImpliedProjection": 38.5,
      "seasonAverage": 37.9,
      "last3Average": 30,
      "lastGameScore": 23,
      "scoreVolatility": 13.8,
      "homeAverage": 39.1,
      "awayAverage": 37
    },
    "TOMGILBERT": {
      "playerName": "Tom Gilbert",
      "key": "TOMGILBERT",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 456000,
      "priceImpliedProjection": 35.6,
      "seasonAverage": 39.3,
      "last3Average": 33.3,
      "lastGameScore": 25,
      "scoreVolatility": 11.3,
      "homeAverage": 40.6,
      "awayAverage": 38
    },
    "LIAMHENRY": {
      "playerName": "Liam Henry",
      "key": "LIAMHENRY",
      "primaryPosition": "Prop",
      "gamesPlayed": 10,
      "currentPrice": 568000,
      "priceImpliedProjection": 44.4,
      "seasonAverage": 47.4,
      "last3Average": 41,
      "lastGameScore": 56,
      "scoreVolatility": 15.1,
      "homeAverage": 48.8,
      "awayAverage": 46
    },
    "LUKEGARNER": {
      "playerName": "Luke Garner",
      "key": "LUKEGARNER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 14,
      "currentPrice": 420000,
      "priceImpliedProjection": 32.8,
      "seasonAverage": 34.3,
      "last3Average": 38.7,
      "lastGameScore": 32,
      "scoreVolatility": 11,
      "homeAverage": 34.7,
      "awayAverage": 34
    },
    "JACOBLIDDLE": {
      "playerName": "Jacob Liddle",
      "key": "JACOBLIDDLE",
      "primaryPosition": null,
      "gamesPlayed": 11,
      "currentPrice": 381000,
      "priceImpliedProjection": 29.8,
      "seasonAverage": 29.3,
      "last3Average": 30.3,
      "lastGameScore": 18,
      "scoreVolatility": 11.8,
      "homeAverage": 33.6,
      "awayAverage": 25.7
    },
    "JAKESIMPKIN": {
      "playerName": "Jake Simpkin",
      "key": "JAKESIMPKIN",
      "primaryPosition": null,
      "gamesPlayed": 19,
      "currentPrice": 517000,
      "priceImpliedProjection": 40.4,
      "seasonAverage": 36.5,
      "last3Average": 47,
      "lastGameScore": 32,
      "scoreVolatility": 12.7,
      "homeAverage": 34.4,
      "awayAverage": 38.9
    },
    "CODYHOPWOOD": {
      "playerName": "Cody Hopwood",
      "key": "CODYHOPWOOD",
      "primaryPosition": "Prop",
      "gamesPlayed": 10,
      "currentPrice": 375000,
      "priceImpliedProjection": 29.3,
      "seasonAverage": 27.9,
      "last3Average": 35.3,
      "lastGameScore": 35,
      "scoreVolatility": 11.9,
      "homeAverage": 26,
      "awayAverage": 30.8
    },
    "MURRAYTAULAGI": {
      "playerName": "Murray Taulagi",
      "key": "MURRAYTAULAGI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 15,
      "currentPrice": 386000,
      "priceImpliedProjection": 30.2,
      "seasonAverage": 35.7,
      "last3Average": 20,
      "lastGameScore": 14,
      "scoreVolatility": 13.9,
      "homeAverage": 36.7,
      "awayAverage": 34.9
    },
    "ETHANSTRANGE": {
      "playerName": "Ethan Strange",
      "key": "ETHANSTRANGE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 17,
      "currentPrice": 514000,
      "priceImpliedProjection": 40.2,
      "seasonAverage": 43.9,
      "last3Average": 53,
      "lastGameScore": 63,
      "scoreVolatility": 16.8,
      "homeAverage": 48.7,
      "awayAverage": 38.6
    },
    "CHRISTIANTUIPULOTU": {
      "playerName": "Christian Tuipulotu",
      "key": "CHRISTIANTUIPULOTU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 9,
      "currentPrice": 307000,
      "priceImpliedProjection": 24,
      "seasonAverage": 25.2,
      "last3Average": 29,
      "lastGameScore": 30,
      "scoreVolatility": 13,
      "homeAverage": 18.8,
      "awayAverage": 33.3
    },
    "BRIANKELLY": {
      "playerName": "Brian Kelly",
      "key": "BRIANKELLY",
      "primaryPosition": "Centre",
      "gamesPlayed": 17,
      "currentPrice": 424000,
      "priceImpliedProjection": 33.1,
      "seasonAverage": 37.6,
      "last3Average": 30.7,
      "lastGameScore": 28,
      "scoreVolatility": 13.1,
      "homeAverage": 36.4,
      "awayAverage": 38.9
    },
    "JOSHKING": {
      "playerName": "Josh King",
      "key": "JOSHKING",
      "primaryPosition": "Prop",
      "gamesPlayed": 20,
      "currentPrice": 528000,
      "priceImpliedProjection": 41.3,
      "seasonAverage": 42.2,
      "last3Average": 41.3,
      "lastGameScore": 23,
      "scoreVolatility": 12.9,
      "homeAverage": 34.9,
      "awayAverage": 49.5
    },
    "JOSIAHKARAPANI": {
      "playerName": "Josiah Karapani",
      "key": "JOSIAHKARAPANI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 17,
      "currentPrice": 430000,
      "priceImpliedProjection": 33.6,
      "seasonAverage": 30.7,
      "last3Average": 36.7,
      "lastGameScore": 31,
      "scoreVolatility": 14,
      "homeAverage": 35.2,
      "awayAverage": 25.6
    },
    "BENTRBOJEVIC": {
      "playerName": "Ben Trbojevic",
      "key": "BENTRBOJEVIC",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 18,
      "currentPrice": 520000,
      "priceImpliedProjection": 40.6,
      "seasonAverage": 46.6,
      "last3Average": 21.3,
      "lastGameScore": 21,
      "scoreVolatility": 18.1,
      "homeAverage": 44.9,
      "awayAverage": 48.6
    },
    "THOMASJENKINS": {
      "playerName": "Thomas Jenkins",
      "key": "THOMASJENKINS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 19,
      "currentPrice": 598000,
      "priceImpliedProjection": 46.7,
      "seasonAverage": 51.1,
      "last3Average": 41.3,
      "lastGameScore": 56,
      "scoreVolatility": 21.2,
      "homeAverage": 51.3,
      "awayAverage": 50.8
    },
    "CLINTONGUTHERSON": {
      "playerName": "Clinton Gutherson",
      "key": "CLINTONGUTHERSON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 16,
      "currentPrice": 385000,
      "priceImpliedProjection": 30.1,
      "seasonAverage": 29.7,
      "last3Average": 43.3,
      "lastGameScore": 60,
      "scoreVolatility": 13.2,
      "homeAverage": 29.7,
      "awayAverage": 29.7
    },
    "MOSESLEOTA": {
      "playerName": "Moses Leota",
      "key": "MOSESLEOTA",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 417000,
      "priceImpliedProjection": 32.6,
      "seasonAverage": 35.7,
      "last3Average": 31,
      "lastGameScore": 33,
      "scoreVolatility": 8.7,
      "homeAverage": 34.6,
      "awayAverage": 36.8
    },
    "CHANELHARRISTAVITA": {
      "playerName": "Chanel Harris-Tavita",
      "key": "CHANELHARRISTAVITA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 16,
      "currentPrice": 474000,
      "priceImpliedProjection": 37,
      "seasonAverage": 37.3,
      "last3Average": 53.7,
      "lastGameScore": 63,
      "scoreVolatility": 14,
      "homeAverage": 33,
      "awayAverage": 41.6
    },
    "CONNORTRACEY": {
      "playerName": "Connor Tracey",
      "key": "CONNORTRACEY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 17,
      "currentPrice": 464000,
      "priceImpliedProjection": 36.3,
      "seasonAverage": 35.4,
      "last3Average": 43.3,
      "lastGameScore": 30,
      "scoreVolatility": 14.7,
      "homeAverage": 40.6,
      "awayAverage": 29.6
    },
    "MATCROKER": {
      "playerName": "Mat Croker",
      "key": "MATCROKER",
      "primaryPosition": "Prop",
      "gamesPlayed": 20,
      "currentPrice": 486000,
      "priceImpliedProjection": 38,
      "seasonAverage": 39,
      "last3Average": 45.3,
      "lastGameScore": 23,
      "scoreVolatility": 10.9,
      "homeAverage": 40.7,
      "awayAverage": 37.2
    },
    "MAWENEHIROTI": {
      "playerName": "Mawene Hiroti",
      "key": "MAWENEHIROTI",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 401000,
      "priceImpliedProjection": 31.3,
      "seasonAverage": 31.6,
      "last3Average": 32.7,
      "lastGameScore": 43,
      "scoreVolatility": 7.4,
      "homeAverage": 30.6,
      "awayAverage": 34
    },
    "JYEGRAY": {
      "playerName": "Jye Gray",
      "key": "JYEGRAY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 13,
      "currentPrice": 487000,
      "priceImpliedProjection": 38,
      "seasonAverage": 38.6,
      "last3Average": 41,
      "lastGameScore": 30,
      "scoreVolatility": 15.6,
      "homeAverage": 38.1,
      "awayAverage": 39.2
    },
    "VICTORRADLEY": {
      "playerName": "Victor Radley",
      "key": "VICTORRADLEY",
      "primaryPosition": "Prop",
      "gamesPlayed": 13,
      "currentPrice": 482000,
      "priceImpliedProjection": 37.7,
      "seasonAverage": 35.6,
      "last3Average": 45.3,
      "lastGameScore": 31,
      "scoreVolatility": 10.8,
      "homeAverage": 36.5,
      "awayAverage": 34.9
    },
    "ETHANBULLEMOR": {
      "playerName": "Ethan Bullemor",
      "key": "ETHANBULLEMOR",
      "primaryPosition": "Prop",
      "gamesPlayed": 16,
      "currentPrice": 385000,
      "priceImpliedProjection": 30.1,
      "seasonAverage": 31.2,
      "last3Average": 35.7,
      "lastGameScore": 17,
      "scoreVolatility": 11.9,
      "homeAverage": 26,
      "awayAverage": 36.4
    },
    "JAHREAMBULA": {
      "playerName": "Jahream Bula",
      "key": "JAHREAMBULA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 17,
      "currentPrice": 344000,
      "priceImpliedProjection": 26.9,
      "seasonAverage": 34,
      "last3Average": 28.7,
      "lastGameScore": 24,
      "scoreVolatility": 12.6,
      "homeAverage": 33.8,
      "awayAverage": 34.3
    },
    "PHOENIXCROSSLAND": {
      "playerName": "Phoenix Crossland",
      "key": "PHOENIXCROSSLAND",
      "primaryPosition": null,
      "gamesPlayed": 20,
      "currentPrice": 545000,
      "priceImpliedProjection": 42.6,
      "seasonAverage": 43.1,
      "last3Average": 47.3,
      "lastGameScore": 40,
      "scoreVolatility": 12.7,
      "homeAverage": 47.6,
      "awayAverage": 38.5
    },
    "LEKAHALASIMA": {
      "playerName": "Leka Halasima",
      "key": "LEKAHALASIMA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 16,
      "currentPrice": 330000,
      "priceImpliedProjection": 25.8,
      "seasonAverage": 31.2,
      "last3Average": 27.7,
      "lastGameScore": 38,
      "scoreVolatility": 14.3,
      "homeAverage": 31.4,
      "awayAverage": 31
    },
    "ISAIAHIONGI": {
      "playerName": "Isaiah Iongi",
      "key": "ISAIAHIONGI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 12,
      "currentPrice": 556000,
      "priceImpliedProjection": 43.4,
      "seasonAverage": 45.6,
      "last3Average": 40,
      "lastGameScore": 33,
      "scoreVolatility": 16.8,
      "homeAverage": 47.6,
      "awayAverage": 44.1
    },
    "LEHIHOPOATE": {
      "playerName": "Lehi Hopoate",
      "key": "LEHIHOPOATE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 18,
      "currentPrice": 449000,
      "priceImpliedProjection": 35.1,
      "seasonAverage": 38.3,
      "last3Average": 34,
      "lastGameScore": 35,
      "scoreVolatility": 14.2,
      "homeAverage": 34.9,
      "awayAverage": 41.8
    },
    "KODINIKORIMA": {
      "playerName": "Kodi Nikorima",
      "key": "KODINIKORIMA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 16,
      "currentPrice": 403000,
      "priceImpliedProjection": 31.5,
      "seasonAverage": 33.9,
      "last3Average": 29,
      "lastGameScore": 38,
      "scoreVolatility": 11.5,
      "homeAverage": 32.6,
      "awayAverage": 35.6
    },
    "SCOTTSORENSEN": {
      "playerName": "Scott Sorensen",
      "key": "SCOTTSORENSEN",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 403000,
      "priceImpliedProjection": 31.5,
      "seasonAverage": 30.1,
      "last3Average": 31.7,
      "lastGameScore": 30,
      "scoreVolatility": 7.5,
      "homeAverage": 28.6,
      "awayAverage": 31.5
    },
    "KELMATUILAGI": {
      "playerName": "Kelma Tuilagi",
      "key": "KELMATUILAGI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 16,
      "currentPrice": 453000,
      "priceImpliedProjection": 35.4,
      "seasonAverage": 42.1,
      "last3Average": 36,
      "lastGameScore": 21,
      "scoreVolatility": 14.3,
      "homeAverage": 43.4,
      "awayAverage": 40.4
    },
    "LIAMMARTIN": {
      "playerName": "Liam Martin",
      "key": "LIAMMARTIN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 11,
      "currentPrice": 565000,
      "priceImpliedProjection": 44.1,
      "seasonAverage": 42.4,
      "last3Average": 60,
      "lastGameScore": 52,
      "scoreVolatility": 17.5,
      "homeAverage": 36.8,
      "awayAverage": 47
    },
    "JOSHADDOCARR": {
      "playerName": "Josh Addo-Carr",
      "key": "JOSHADDOCARR",
      "primaryPosition": "Fullback",
      "gamesPlayed": 18,
      "currentPrice": 315000,
      "priceImpliedProjection": 24.6,
      "seasonAverage": 29.9,
      "last3Average": 15.3,
      "lastGameScore": 21,
      "scoreVolatility": 11.9,
      "homeAverage": 31.2,
      "awayAverage": 28.3
    },
    "STARFORDTOA": {
      "playerName": "Starford To'a",
      "key": "STARFORDTOA",
      "primaryPosition": "Centre",
      "gamesPlayed": 9,
      "currentPrice": 372000,
      "priceImpliedProjection": 29.1,
      "seasonAverage": 29.1,
      "last3Average": 28.3,
      "lastGameScore": 45,
      "scoreVolatility": 12.9,
      "homeAverage": 30,
      "awayAverage": 28
    },
    "REEDMAHONEY": {
      "playerName": "Reed Mahoney",
      "key": "REEDMAHONEY",
      "primaryPosition": null,
      "gamesPlayed": 18,
      "currentPrice": 407000,
      "priceImpliedProjection": 31.8,
      "seasonAverage": 36.4,
      "last3Average": 22.3,
      "lastGameScore": 10,
      "scoreVolatility": 17.3,
      "homeAverage": 33.1,
      "awayAverage": 39
    },
    "CHRISRANDALL": {
      "playerName": "Chris Randall",
      "key": "CHRISRANDALL",
      "primaryPosition": null,
      "gamesPlayed": 16,
      "currentPrice": 431000,
      "priceImpliedProjection": 33.7,
      "seasonAverage": 36.3,
      "last3Average": 38.3,
      "lastGameScore": 34,
      "scoreVolatility": 10.9,
      "homeAverage": 34.3,
      "awayAverage": 37.9
    },
    "MORGANSMITHIES": {
      "playerName": "Morgan Smithies",
      "key": "MORGANSMITHIES",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 333000,
      "priceImpliedProjection": 26,
      "seasonAverage": 32.7,
      "last3Average": 23.3,
      "lastGameScore": 29,
      "scoreVolatility": 8.5,
      "homeAverage": 29.3,
      "awayAverage": 36
    },
    "DANIELTUPOU": {
      "playerName": "Daniel Tupou",
      "key": "DANIELTUPOU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 13,
      "currentPrice": 407000,
      "priceImpliedProjection": 31.8,
      "seasonAverage": 32.8,
      "last3Average": 34.7,
      "lastGameScore": 7,
      "scoreVolatility": 14.2,
      "homeAverage": 33.1,
      "awayAverage": 32.2
    },
    "JAROMELUAI": {
      "playerName": "Jarome Luai",
      "key": "JAROMELUAI",
      "primaryPosition": "Halfback",
      "gamesPlayed": 16,
      "currentPrice": 446000,
      "priceImpliedProjection": 34.8,
      "seasonAverage": 39.2,
      "last3Average": 28,
      "lastGameScore": 26,
      "scoreVolatility": 19.3,
      "homeAverage": 45.3,
      "awayAverage": 29
    },
    "DYLANBROWN": {
      "playerName": "Dylan Brown",
      "key": "DYLANBROWN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 15,
      "currentPrice": 695000,
      "priceImpliedProjection": 54.3,
      "seasonAverage": 55,
      "last3Average": 57.7,
      "lastGameScore": 41,
      "scoreVolatility": 17,
      "homeAverage": 57.6,
      "awayAverage": 52
    },
    "TANIELAPASEKA": {
      "playerName": "Taniela Paseka",
      "key": "TANIELAPASEKA",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 488000,
      "priceImpliedProjection": 38.1,
      "seasonAverage": 42.7,
      "last3Average": 31.3,
      "lastGameScore": 33,
      "scoreVolatility": 8.6,
      "homeAverage": 40.2,
      "awayAverage": 45.4
    },
    "KULIKEFUFINEFEUIAKI": {
      "playerName": "Kulikefu Finefeuiaki",
      "key": "KULIKEFUFINEFEUIAKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 18,
      "currentPrice": 631000,
      "priceImpliedProjection": 49.3,
      "seasonAverage": 53.8,
      "last3Average": 57.3,
      "lastGameScore": 63,
      "scoreVolatility": 13.1,
      "homeAverage": 53.7,
      "awayAverage": 53.9
    },
    "CHARNZENICOLLKLOKSTAD": {
      "playerName": "Charnze Nicoll-Klokstad",
      "key": "CHARNZENICOLLKLOKSTAD",
      "primaryPosition": "Fullback",
      "gamesPlayed": 11,
      "currentPrice": 546000,
      "priceImpliedProjection": 42.7,
      "seasonAverage": 42.8,
      "last3Average": 49.7,
      "lastGameScore": 55,
      "scoreVolatility": 14.7,
      "homeAverage": 41.5,
      "awayAverage": 44.4
    },
    "JAMAYNEISAAKO": {
      "playerName": "Jamayne Isaako",
      "key": "JAMAYNEISAAKO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 19,
      "currentPrice": 554000,
      "priceImpliedProjection": 43.3,
      "seasonAverage": 47.9,
      "last3Average": 40.3,
      "lastGameScore": 33,
      "scoreVolatility": 18.6,
      "homeAverage": 48.7,
      "awayAverage": 47.1
    },
    "JAKEAVERILLO": {
      "playerName": "Jake Averillo",
      "key": "JAKEAVERILLO",
      "primaryPosition": "Centre",
      "gamesPlayed": 9,
      "currentPrice": 560000,
      "priceImpliedProjection": 43.8,
      "seasonAverage": 46.2,
      "last3Average": 29.3,
      "lastGameScore": 18,
      "scoreVolatility": 16.7,
      "homeAverage": 43.6,
      "awayAverage": 49.5
    },
    "CASEYMCLEAN": {
      "playerName": "Casey McLean",
      "key": "CASEYMCLEAN",
      "primaryPosition": "Centre",
      "gamesPlayed": 15,
      "currentPrice": 432000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 38.8,
      "last3Average": 24.7,
      "lastGameScore": 26,
      "scoreVolatility": 16.1,
      "homeAverage": 41.4,
      "awayAverage": 35.9
    },
    "TYSONFRIZELL": {
      "playerName": "Tyson Frizell",
      "key": "TYSONFRIZELL",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 414000,
      "priceImpliedProjection": 32.3,
      "seasonAverage": 33.4,
      "last3Average": 34,
      "lastGameScore": 35,
      "scoreVolatility": 8,
      "homeAverage": 32.3,
      "awayAverage": 34.6
    },
    "JESSERAMIEN": {
      "playerName": "Jesse Ramien",
      "key": "JESSERAMIEN",
      "primaryPosition": "Centre",
      "gamesPlayed": 13,
      "currentPrice": 438000,
      "priceImpliedProjection": 34.2,
      "seasonAverage": 36,
      "last3Average": 43,
      "lastGameScore": 28,
      "scoreVolatility": 14.7,
      "homeAverage": 34,
      "awayAverage": 37.7
    },
    "JOSHPAPALII": {
      "playerName": "Josh Papalii",
      "key": "JOSHPAPALII",
      "primaryPosition": "Prop",
      "gamesPlayed": 9,
      "currentPrice": 276000,
      "priceImpliedProjection": 21.6,
      "seasonAverage": 21.2,
      "last3Average": 21,
      "lastGameScore": 20,
      "scoreVolatility": 9.6,
      "homeAverage": 24,
      "awayAverage": 19
    },
    "MATHEWFEAGAI": {
      "playerName": "Mathew Feagai",
      "key": "MATHEWFEAGAI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 13,
      "currentPrice": 348000,
      "priceImpliedProjection": 27.2,
      "seasonAverage": 23.9,
      "last3Average": 32.7,
      "lastGameScore": 6,
      "scoreVolatility": 17.1,
      "homeAverage": 15.5,
      "awayAverage": 31.1
    },
    "LACHLANHUBNER": {
      "playerName": "Lachlan Hubner",
      "key": "LACHLANHUBNER",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 365000,
      "priceImpliedProjection": 28.5,
      "seasonAverage": 30.1,
      "last3Average": 35.3,
      "lastGameScore": 46,
      "scoreVolatility": 10.5,
      "homeAverage": 29.5,
      "awayAverage": 30.6
    },
    "EZRAMAM": {
      "playerName": "Ezra Mam",
      "key": "EZRAMAM",
      "primaryPosition": "Halfback",
      "gamesPlayed": 17,
      "currentPrice": 355000,
      "priceImpliedProjection": 27.7,
      "seasonAverage": 31.8,
      "last3Average": 34,
      "lastGameScore": 28,
      "scoreVolatility": 14.1,
      "homeAverage": 34.4,
      "awayAverage": 29.6
    },
    "GRIFFINNEAME": {
      "playerName": "Griffin Neame",
      "key": "GRIFFINNEAME",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 309000,
      "priceImpliedProjection": 24.1,
      "seasonAverage": 24.6,
      "last3Average": 25.3,
      "lastGameScore": 28,
      "scoreVolatility": 5.7,
      "homeAverage": 27.8,
      "awayAverage": 21.8
    },
    "RYLEYSMITH": {
      "playerName": "Ryley Smith",
      "key": "RYLEYSMITH",
      "primaryPosition": null,
      "gamesPlayed": 9,
      "currentPrice": 315000,
      "priceImpliedProjection": 24.6,
      "seasonAverage": 24.9,
      "last3Average": 15,
      "lastGameScore": 3,
      "scoreVolatility": 12,
      "homeAverage": 22.2,
      "awayAverage": 28.3
    },
    "HEAMASIMAKASINI": {
      "playerName": "Heamasi Makasini",
      "key": "HEAMASIMAKASINI",
      "primaryPosition": "Centre",
      "gamesPlayed": 14,
      "currentPrice": 308000,
      "priceImpliedProjection": 24.1,
      "seasonAverage": 25.6,
      "last3Average": 28.7,
      "lastGameScore": 23,
      "scoreVolatility": 9.1,
      "homeAverage": 24.4,
      "awayAverage": 27.2
    },
    "SIONEKATOA": {
      "playerName": "Sione Katoa",
      "key": "SIONEKATOA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 13,
      "currentPrice": 502000,
      "priceImpliedProjection": 39.2,
      "seasonAverage": 39.8,
      "last3Average": 37.7,
      "lastGameScore": 22,
      "scoreVolatility": 13.4,
      "homeAverage": 37.8,
      "awayAverage": 41.4
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
      "gamesPlayed": 19,
      "currentPrice": 610000,
      "priceImpliedProjection": 47.7,
      "seasonAverage": 47.4,
      "last3Average": 41.7,
      "lastGameScore": 3,
      "scoreVolatility": 24,
      "homeAverage": 43.3,
      "awayAverage": 52
    },
    "JAXONPURDUE": {
      "playerName": "Jaxon Purdue",
      "key": "JAXONPURDUE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 20,
      "currentPrice": 481000,
      "priceImpliedProjection": 37.6,
      "seasonAverage": 38.5,
      "last3Average": 37,
      "lastGameScore": 30,
      "scoreVolatility": 12.8,
      "homeAverage": 38.7,
      "awayAverage": 38.2
    },
    "SAVELIOTAMALE": {
      "playerName": "Savelio Tamale",
      "key": "SAVELIOTAMALE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 14,
      "currentPrice": 351000,
      "priceImpliedProjection": 27.4,
      "seasonAverage": 32.4,
      "last3Average": 16.3,
      "lastGameScore": -4,
      "scoreVolatility": 16.7,
      "homeAverage": 29.6,
      "awayAverage": 35.1
    },
    "KAEOWEEKES": {
      "playerName": "Kaeo Weekes",
      "key": "KAEOWEEKES",
      "primaryPosition": "Fullback",
      "gamesPlayed": 20,
      "currentPrice": 467000,
      "priceImpliedProjection": 36.5,
      "seasonAverage": 42,
      "last3Average": 48.7,
      "lastGameScore": 58,
      "scoreVolatility": 12.9,
      "homeAverage": 42.1,
      "awayAverage": 41.8
    },
    "SUALAUVIFAALOGO": {
      "playerName": "Sualauvi Faalogo",
      "key": "SUALAUVIFAALOGO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 20,
      "currentPrice": 756000,
      "priceImpliedProjection": 59.1,
      "seasonAverage": 57.1,
      "last3Average": 61.7,
      "lastGameScore": 72,
      "scoreVolatility": 17.4,
      "homeAverage": 57.2,
      "awayAverage": 57
    },
    "IZACKTAGO": {
      "playerName": "Izack Tago",
      "key": "IZACKTAGO",
      "primaryPosition": "Centre",
      "gamesPlayed": 11,
      "currentPrice": 341000,
      "priceImpliedProjection": 26.6,
      "seasonAverage": 31.3,
      "last3Average": 16,
      "lastGameScore": 27,
      "scoreVolatility": 12.2,
      "homeAverage": 30.2,
      "awayAverage": 32.2
    },
    "ALEXJOHNSTON": {
      "playerName": "Alex Johnston",
      "key": "ALEXJOHNSTON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 16,
      "currentPrice": 498000,
      "priceImpliedProjection": 38.9,
      "seasonAverage": 44.8,
      "last3Average": 35,
      "lastGameScore": 31,
      "scoreVolatility": 16.5,
      "homeAverage": 55.6,
      "awayAverage": 36.3
    },
    "BENHUNT": {
      "playerName": "Ben Hunt",
      "key": "BENHUNT",
      "primaryPosition": "Halfback",
      "gamesPlayed": 15,
      "currentPrice": 305000,
      "priceImpliedProjection": 23.8,
      "seasonAverage": 26.5,
      "last3Average": 19,
      "lastGameScore": 31,
      "scoreVolatility": 9.3,
      "homeAverage": 28.9,
      "awayAverage": 23.7
    },
    "LINDSAYCOLLINS": {
      "playerName": "Lindsay Collins",
      "key": "LINDSAYCOLLINS",
      "primaryPosition": "Prop",
      "gamesPlayed": 13,
      "currentPrice": 334000,
      "priceImpliedProjection": 26.1,
      "seasonAverage": 28.4,
      "last3Average": 29.7,
      "lastGameScore": 17,
      "scoreVolatility": 9.9,
      "homeAverage": 29,
      "awayAverage": 27.9
    },
    "TEVITATATOLA": {
      "playerName": "Tevita Tatola",
      "key": "TEVITATATOLA",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 461000,
      "priceImpliedProjection": 36,
      "seasonAverage": 35,
      "last3Average": 39.3,
      "lastGameScore": 43,
      "scoreVolatility": 9,
      "homeAverage": 37.9,
      "awayAverage": 32.4
    },
    "DAVIDFIFITA": {
      "playerName": "David Fifita",
      "key": "DAVIDFIFITA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 11,
      "currentPrice": 545000,
      "priceImpliedProjection": 42.6,
      "seasonAverage": 44.2,
      "last3Average": 45,
      "lastGameScore": 45,
      "scoreVolatility": 9.3,
      "homeAverage": 47.8,
      "awayAverage": 41.2
    },
    "COENHESS": {
      "playerName": "Coen Hess",
      "key": "COENHESS",
      "primaryPosition": "Prop",
      "gamesPlayed": 20,
      "currentPrice": 371000,
      "priceImpliedProjection": 29,
      "seasonAverage": 33.6,
      "last3Average": 27,
      "lastGameScore": 36,
      "scoreVolatility": 9.1,
      "homeAverage": 33.3,
      "awayAverage": 33.8
    },
    "SIOSIUATAUKEIAHO": {
      "playerName": "Siosiua Taukeiaho",
      "key": "SIOSIUATAUKEIAHO",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 380000,
      "priceImpliedProjection": 29.7,
      "seasonAverage": 28,
      "last3Average": 38,
      "lastGameScore": 37,
      "scoreVolatility": 13.7,
      "homeAverage": 25,
      "awayAverage": 32.5
    },
    "MOSESSULI": {
      "playerName": "Moses Suli",
      "key": "MOSESSULI",
      "primaryPosition": "Centre",
      "gamesPlayed": 10,
      "currentPrice": 352000,
      "priceImpliedProjection": 27.5,
      "seasonAverage": 30.5,
      "last3Average": 22.3,
      "lastGameScore": 16,
      "scoreVolatility": 11.6,
      "homeAverage": 29.6,
      "awayAverage": 31.4
    },
    "KOBEHETHERINGTON": {
      "playerName": "Kobe Hetherington",
      "key": "KOBEHETHERINGTON",
      "primaryPosition": "Prop",
      "gamesPlayed": 17,
      "currentPrice": 402000,
      "priceImpliedProjection": 31.4,
      "seasonAverage": 32.5,
      "last3Average": 40,
      "lastGameScore": 25,
      "scoreVolatility": 14.2,
      "homeAverage": 35.8,
      "awayAverage": 29.6
    },
    "SAMMCINTYRE": {
      "playerName": "Sam McIntyre",
      "key": "SAMMCINTYRE",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 371000,
      "priceImpliedProjection": 29,
      "seasonAverage": 30.4,
      "last3Average": 25.3,
      "lastGameScore": 20,
      "scoreVolatility": 14.5,
      "homeAverage": 30.4,
      "awayAverage": 30.3
    },
    "ENARITUALA": {
      "playerName": "Enari Tuala",
      "key": "ENARITUALA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 15,
      "currentPrice": 529000,
      "priceImpliedProjection": 41.3,
      "seasonAverage": 43.8,
      "last3Average": 45.7,
      "lastGameScore": 36,
      "scoreVolatility": 10.6,
      "homeAverage": 45.6,
      "awayAverage": 41.7
    },
    "THOMASHAZELTON": {
      "playerName": "Thomas Hazelton",
      "key": "THOMASHAZELTON",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 451000,
      "priceImpliedProjection": 35.2,
      "seasonAverage": 33.4,
      "last3Average": 45,
      "lastGameScore": 26,
      "scoreVolatility": 10.2,
      "homeAverage": 32.8,
      "awayAverage": 34.1
    },
    "SELWYNCOBBO": {
      "playerName": "Selwyn Cobbo",
      "key": "SELWYNCOBBO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 14,
      "currentPrice": 573000,
      "priceImpliedProjection": 44.8,
      "seasonAverage": 42.3,
      "last3Average": 44.3,
      "lastGameScore": 55,
      "scoreVolatility": 14.6,
      "homeAverage": 40.1,
      "awayAverage": 45.2
    },
    "DAINELAURIE": {
      "playerName": "Daine Laurie",
      "key": "DAINELAURIE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 12,
      "currentPrice": 442000,
      "priceImpliedProjection": 34.5,
      "seasonAverage": 36.3,
      "last3Average": 33.3,
      "lastGameScore": 11,
      "scoreVolatility": 16.7,
      "homeAverage": 36,
      "awayAverage": 36.7
    },
    "JEREMIAHNANAI": {
      "playerName": "Jeremiah Nanai",
      "key": "JEREMIAHNANAI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 512000,
      "priceImpliedProjection": 40,
      "seasonAverage": 42,
      "last3Average": 46,
      "lastGameScore": 40,
      "scoreVolatility": 12.5,
      "homeAverage": 39.3,
      "awayAverage": 44.8
    },
    "SAMUELHEALEY": {
      "playerName": "Samuel Healey",
      "key": "SAMUELHEALEY",
      "primaryPosition": null,
      "gamesPlayed": 16,
      "currentPrice": 245000,
      "priceImpliedProjection": 19.1,
      "seasonAverage": 19.1,
      "last3Average": 18.3,
      "lastGameScore": 20,
      "scoreVolatility": 9.3,
      "homeAverage": 17.7,
      "awayAverage": 20.2
    },
    "JACKHOWARTH": {
      "playerName": "Jack Howarth",
      "key": "JACKHOWARTH",
      "primaryPosition": "Centre",
      "gamesPlayed": 16,
      "currentPrice": 418000,
      "priceImpliedProjection": 32.7,
      "seasonAverage": 33.9,
      "last3Average": 26.7,
      "lastGameScore": 18,
      "scoreVolatility": 10.6,
      "homeAverage": 36.6,
      "awayAverage": 31.3
    },
    "JACOBSAIFITI": {
      "playerName": "Jacob Saifiti",
      "key": "JACOBSAIFITI",
      "primaryPosition": "Prop",
      "gamesPlayed": 16,
      "currentPrice": 441000,
      "priceImpliedProjection": 34.5,
      "seasonAverage": 38.4,
      "last3Average": 29,
      "lastGameScore": 9,
      "scoreVolatility": 12.7,
      "homeAverage": 34.6,
      "awayAverage": 43.4
    },
    "JOJOFIFITA": {
      "playerName": "Jojo Fifita",
      "key": "JOJOFIFITA",
      "primaryPosition": "Centre",
      "gamesPlayed": 17,
      "currentPrice": 493000,
      "priceImpliedProjection": 38.5,
      "seasonAverage": 39.6,
      "last3Average": 46.3,
      "lastGameScore": 22,
      "scoreVolatility": 15.9,
      "homeAverage": 42.6,
      "awayAverage": 37
    },
    "CONNELLYLEMUELU": {
      "playerName": "Connelly Lemuelu",
      "key": "CONNELLYLEMUELU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 19,
      "currentPrice": 593000,
      "priceImpliedProjection": 46.3,
      "seasonAverage": 49.9,
      "last3Average": 44.7,
      "lastGameScore": 40,
      "scoreVolatility": 9.6,
      "homeAverage": 46,
      "awayAverage": 54.3
    },
    "DYLANWALKER": {
      "playerName": "Dylan Walker",
      "key": "DYLANWALKER",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 340000,
      "priceImpliedProjection": 26.6,
      "seasonAverage": 28.8,
      "last3Average": 29,
      "lastGameScore": 25,
      "scoreVolatility": 10,
      "homeAverage": 30.1,
      "awayAverage": 27.3
    },
    "HARRISONEDWARDS": {
      "playerName": "Harrison Edwards",
      "key": "HARRISONEDWARDS",
      "primaryPosition": "Prop",
      "gamesPlayed": 9,
      "currentPrice": 287000,
      "priceImpliedProjection": 22.4,
      "seasonAverage": 21.9,
      "last3Average": 19,
      "lastGameScore": 14,
      "scoreVolatility": 9.3,
      "homeAverage": 26.3,
      "awayAverage": 18.4
    },
    "JAYDENBRAILEY": {
      "playerName": "Jayden Brailey",
      "key": "JAYDENBRAILEY",
      "primaryPosition": null,
      "gamesPlayed": 16,
      "currentPrice": 327000,
      "priceImpliedProjection": 25.5,
      "seasonAverage": 21.8,
      "last3Average": 17.3,
      "lastGameScore": 7,
      "scoreVolatility": 13.1,
      "homeAverage": 22.4,
      "awayAverage": 21.3
    },
    "LYHKANKINGTOGIA": {
      "playerName": "Lyhkan King-Togia",
      "key": "LYHKANKINGTOGIA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 5,
      "currentPrice": 316000,
      "priceImpliedProjection": 24.7,
      "seasonAverage": 21.2,
      "last3Average": 24.7,
      "lastGameScore": 39,
      "scoreVolatility": 14.8,
      "homeAverage": 26.5,
      "awayAverage": 0
    },
    "JAKETRBOJEVIC": {
      "playerName": "Jake Trbojevic",
      "key": "JAKETRBOJEVIC",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 494000,
      "priceImpliedProjection": 38.6,
      "seasonAverage": 37.3,
      "last3Average": 40,
      "lastGameScore": 32,
      "scoreVolatility": 8,
      "homeAverage": 38.8,
      "awayAverage": 35.7
    },
    "LACHLANILIAS": {
      "playerName": "Lachlan Ilias",
      "key": "LACHLANILIAS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 9,
      "currentPrice": 353000,
      "priceImpliedProjection": 27.6,
      "seasonAverage": 26.2,
      "last3Average": 19.3,
      "lastGameScore": 0,
      "scoreVolatility": 12.7,
      "homeAverage": 22.8,
      "awayAverage": 29
    },
    "HAMISHSTEWART": {
      "playerName": "Hamish Stewart",
      "key": "HAMISHSTEWART",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 710000,
      "priceImpliedProjection": 55.5,
      "seasonAverage": 55.2,
      "last3Average": 58.7,
      "lastGameScore": 50,
      "scoreVolatility": 9.6,
      "homeAverage": 50.3,
      "awayAverage": 59.6
    },
    "CAMPBELLGRAHAM": {
      "playerName": "Campbell Graham",
      "key": "CAMPBELLGRAHAM",
      "primaryPosition": "Centre",
      "gamesPlayed": 14,
      "currentPrice": 493000,
      "priceImpliedProjection": 38.5,
      "seasonAverage": 39.6,
      "last3Average": 49.3,
      "lastGameScore": 58,
      "scoreVolatility": 12.5,
      "homeAverage": 39.7,
      "awayAverage": 39.4
    },
    "EMREGULER": {
      "playerName": "Emre Guler",
      "key": "EMREGULER",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 377000,
      "priceImpliedProjection": 29.5,
      "seasonAverage": 34,
      "last3Average": 25.7,
      "lastGameScore": 30,
      "scoreVolatility": 9.1,
      "homeAverage": 32,
      "awayAverage": 36
    },
    "EGANBUTCHER": {
      "playerName": "Egan Butcher",
      "key": "EGANBUTCHER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 13,
      "currentPrice": 261000,
      "priceImpliedProjection": 20.4,
      "seasonAverage": 21.8,
      "last3Average": 27.7,
      "lastGameScore": 23,
      "scoreVolatility": 12.9,
      "homeAverage": 25.3,
      "awayAverage": 17.8
    },
    "THOMASCANT": {
      "playerName": "Thomas Cant",
      "key": "THOMASCANT",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 12,
      "currentPrice": 359000,
      "priceImpliedProjection": 28,
      "seasonAverage": 25.3,
      "last3Average": 27,
      "lastGameScore": 16,
      "scoreVolatility": 15.8,
      "homeAverage": 27,
      "awayAverage": 23.5
    },
    "DOMINICYOUNG": {
      "playerName": "Dominic Young",
      "key": "DOMINICYOUNG",
      "primaryPosition": "Fullback",
      "gamesPlayed": 20,
      "currentPrice": 421000,
      "priceImpliedProjection": 32.9,
      "seasonAverage": 39.9,
      "last3Average": 29.7,
      "lastGameScore": 48,
      "scoreVolatility": 16.6,
      "homeAverage": 37.8,
      "awayAverage": 42
    },
    "JASONTAUMALOLO": {
      "playerName": "Jason Taumalolo",
      "key": "JASONTAUMALOLO",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 456000,
      "priceImpliedProjection": 35.6,
      "seasonAverage": 39.2,
      "last3Average": 35.3,
      "lastGameScore": 31,
      "scoreVolatility": 5.5,
      "homeAverage": 38.2,
      "awayAverage": 40.3
    },
    "TAINETUAUPIKI": {
      "playerName": "Taine Tuaupiki",
      "key": "TAINETUAUPIKI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 16,
      "currentPrice": 445000,
      "priceImpliedProjection": 34.8,
      "seasonAverage": 39.3,
      "last3Average": 27.7,
      "lastGameScore": 8,
      "scoreVolatility": 13.8,
      "homeAverage": 42.4,
      "awayAverage": 36.8
    },
    "SANDONSMITH": {
      "playerName": "Sandon Smith",
      "key": "SANDONSMITH",
      "primaryPosition": "Halfback",
      "gamesPlayed": 17,
      "currentPrice": 455000,
      "priceImpliedProjection": 35.5,
      "seasonAverage": 38.4,
      "last3Average": 45,
      "lastGameScore": 57,
      "scoreVolatility": 12.5,
      "homeAverage": 32.7,
      "awayAverage": 44.8
    },
    "BILLYBURNS": {
      "playerName": "Billy Burns",
      "key": "BILLYBURNS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 19,
      "currentPrice": 464000,
      "priceImpliedProjection": 36.3,
      "seasonAverage": 37.7,
      "last3Average": 29.7,
      "lastGameScore": 20,
      "scoreVolatility": 14.6,
      "homeAverage": 38.1,
      "awayAverage": 37.2
    },
    "LUKEBROOKS": {
      "playerName": "Luke Brooks",
      "key": "LUKEBROOKS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 15,
      "currentPrice": 489000,
      "priceImpliedProjection": 38.2,
      "seasonAverage": 38.7,
      "last3Average": 34.3,
      "lastGameScore": 19,
      "scoreVolatility": 10.2,
      "homeAverage": 37.4,
      "awayAverage": 40.3
    },
    "OREGONKAUFUSI": {
      "playerName": "Oregon Kaufusi",
      "key": "OREGONKAUFUSI",
      "primaryPosition": "Prop",
      "gamesPlayed": 15,
      "currentPrice": 418000,
      "priceImpliedProjection": 32.7,
      "seasonAverage": 30.5,
      "last3Average": 40.3,
      "lastGameScore": 46,
      "scoreVolatility": 13.8,
      "homeAverage": 29.7,
      "awayAverage": 31.3
    },
    "BLAIZETALAGI": {
      "playerName": "Blaize Talagi",
      "key": "BLAIZETALAGI",
      "primaryPosition": "Halfback",
      "gamesPlayed": 18,
      "currentPrice": 452000,
      "priceImpliedProjection": 35.3,
      "seasonAverage": 39.3,
      "last3Average": 34.3,
      "lastGameScore": 43,
      "scoreVolatility": 14.6,
      "homeAverage": 35.4,
      "awayAverage": 42.4
    },
    "DEMITRICVAIMAUGA": {
      "playerName": "Demitric Vaimauga",
      "key": "DEMITRICVAIMAUGA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 17,
      "currentPrice": 366000,
      "priceImpliedProjection": 28.6,
      "seasonAverage": 30.2,
      "last3Average": 36.3,
      "lastGameScore": 42,
      "scoreVolatility": 8.1,
      "homeAverage": 26.9,
      "awayAverage": 33.1
    },
    "LUCIANOLEILUA": {
      "playerName": "Luciano Leilua",
      "key": "LUCIANOLEILUA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 14,
      "currentPrice": 363000,
      "priceImpliedProjection": 28.4,
      "seasonAverage": 38.6,
      "last3Average": 17,
      "lastGameScore": 10,
      "scoreVolatility": 18.5,
      "homeAverage": 44.2,
      "awayAverage": 34.5
    },
    "KLESEHAAS": {
      "playerName": "Klese Haas",
      "key": "KLESEHAAS",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 423000,
      "priceImpliedProjection": 33,
      "seasonAverage": 33.9,
      "last3Average": 26.7,
      "lastGameScore": 31,
      "scoreVolatility": 10.5,
      "homeAverage": 38,
      "awayAverage": 30.7
    },
    "KURTCAPEWELL": {
      "playerName": "Kurt Capewell",
      "key": "KURTCAPEWELL",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 9,
      "currentPrice": 477000,
      "priceImpliedProjection": 37.3,
      "seasonAverage": 38.9,
      "last3Average": 34.3,
      "lastGameScore": 13,
      "scoreVolatility": 14.3,
      "homeAverage": 37.4,
      "awayAverage": 40.8
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
      "gamesPlayed": 18,
      "currentPrice": 452000,
      "priceImpliedProjection": 35.3,
      "seasonAverage": 34.5,
      "last3Average": 27.3,
      "lastGameScore": 0,
      "scoreVolatility": 20.8,
      "homeAverage": 35.1,
      "awayAverage": 33.9
    },
    "BRONSONXERRI": {
      "playerName": "Bronson Xerri",
      "key": "BRONSONXERRI",
      "primaryPosition": "Centre",
      "gamesPlayed": 12,
      "currentPrice": 359000,
      "priceImpliedProjection": 28,
      "seasonAverage": 30.6,
      "last3Average": 19,
      "lastGameScore": 21,
      "scoreVolatility": 14.1,
      "homeAverage": 32.5,
      "awayAverage": 28.7
    },
    "SAMUELHUGHES": {
      "playerName": "Samuel Hughes",
      "key": "SAMUELHUGHES",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 372000,
      "priceImpliedProjection": 29.1,
      "seasonAverage": 26.5,
      "last3Average": 32.7,
      "lastGameScore": 32,
      "scoreVolatility": 11.8,
      "homeAverage": 25.3,
      "awayAverage": 27.2
    },
    "FRANCISMOLO": {
      "playerName": "Francis Molo",
      "key": "FRANCISMOLO",
      "primaryPosition": "Prop",
      "gamesPlayed": 15,
      "currentPrice": 417000,
      "priceImpliedProjection": 32.6,
      "seasonAverage": 31.3,
      "last3Average": 33.3,
      "lastGameScore": 34,
      "scoreVolatility": 9.6,
      "homeAverage": 30,
      "awayAverage": 32.7
    },
    "COREYWADDELL": {
      "playerName": "Corey Waddell",
      "key": "COREYWADDELL",
      "primaryPosition": "Prop",
      "gamesPlayed": 8,
      "currentPrice": 331000,
      "priceImpliedProjection": 25.9,
      "seasonAverage": 25,
      "last3Average": 15,
      "lastGameScore": 9,
      "scoreVolatility": 12.8,
      "homeAverage": 13.8,
      "awayAverage": 36.3
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
      "gamesPlayed": 15,
      "currentPrice": 330000,
      "priceImpliedProjection": 25.8,
      "seasonAverage": 28.1,
      "last3Average": 18,
      "lastGameScore": 18,
      "scoreVolatility": 12.8,
      "homeAverage": 36.2,
      "awayAverage": 22.8
    },
    "WILLIAMKENNEDY": {
      "playerName": "William Kennedy",
      "key": "WILLIAMKENNEDY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 19,
      "currentPrice": 435000,
      "priceImpliedProjection": 34,
      "seasonAverage": 35.9,
      "last3Average": 32,
      "lastGameScore": 23,
      "scoreVolatility": 12.6,
      "homeAverage": 36.6,
      "awayAverage": 35.1
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
      "gamesPlayed": 13,
      "currentPrice": 332000,
      "priceImpliedProjection": 25.9,
      "seasonAverage": 27.8,
      "last3Average": 22,
      "lastGameScore": 24,
      "scoreVolatility": 12.7,
      "homeAverage": 31.4,
      "awayAverage": 23.7
    },
    "JACKCOGGER": {
      "playerName": "Jack Cogger",
      "key": "JACKCOGGER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 14,
      "currentPrice": 355000,
      "priceImpliedProjection": 27.7,
      "seasonAverage": 21.4,
      "last3Average": 27.3,
      "lastGameScore": 25,
      "scoreVolatility": 16.6,
      "homeAverage": 23.1,
      "awayAverage": 19.6
    },
    "GRANTANDERSON": {
      "playerName": "Grant Anderson",
      "key": "GRANTANDERSON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 7,
      "currentPrice": 350000,
      "priceImpliedProjection": 27.3,
      "seasonAverage": 25.1,
      "last3Average": 20,
      "lastGameScore": 5,
      "scoreVolatility": 15.6,
      "homeAverage": 23.2,
      "awayAverage": 30
    },
    "BRAYDONTRINDALL": {
      "playerName": "Braydon Trindall",
      "key": "BRAYDONTRINDALL",
      "primaryPosition": "Halfback",
      "gamesPlayed": 19,
      "currentPrice": 598000,
      "priceImpliedProjection": 46.7,
      "seasonAverage": 48.8,
      "last3Average": 42.7,
      "lastGameScore": 51,
      "scoreVolatility": 15.7,
      "homeAverage": 52.2,
      "awayAverage": 45
    },
    "WILLPENISINI": {
      "playerName": "Will Penisini",
      "key": "WILLPENISINI",
      "primaryPosition": "Centre",
      "gamesPlayed": 7,
      "currentPrice": 429000,
      "priceImpliedProjection": 33.5,
      "seasonAverage": 36,
      "last3Average": 27.3,
      "lastGameScore": 27,
      "scoreVolatility": 12.5,
      "homeAverage": 40.5,
      "awayAverage": 30
    },
    "CHARLIEGUYMER": {
      "playerName": "Charlie Guymer",
      "key": "CHARLIEGUYMER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 351000,
      "priceImpliedProjection": 27.4,
      "seasonAverage": 27.1,
      "last3Average": 25.7,
      "lastGameScore": 30,
      "scoreVolatility": 13.1,
      "homeAverage": 27.2,
      "awayAverage": 27
    },
    "SITILITUPOUNIUA": {
      "playerName": "Sitili Tupouniua",
      "key": "SITILITUPOUNIUA",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 619000,
      "priceImpliedProjection": 48.4,
      "seasonAverage": 45.6,
      "last3Average": 54.7,
      "lastGameScore": 40,
      "scoreVolatility": 11.6,
      "homeAverage": 48.3,
      "awayAverage": 43
    },
    "JERMAINEMCEWEN": {
      "playerName": "Jermaine McEwen",
      "key": "JERMAINEMCEWEN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 16,
      "currentPrice": 488000,
      "priceImpliedProjection": 38.1,
      "seasonAverage": 39.6,
      "last3Average": 33,
      "lastGameScore": 19,
      "scoreVolatility": 12,
      "homeAverage": 35.8,
      "awayAverage": 43.5
    },
    "AUBLIXTAWHA": {
      "playerName": "Aublix Tawha",
      "key": "AUBLIXTAWHA",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 264000,
      "priceImpliedProjection": 20.6,
      "seasonAverage": 17.3,
      "last3Average": 19.7,
      "lastGameScore": 24,
      "scoreVolatility": 5.2,
      "homeAverage": 17.3,
      "awayAverage": 17.5
    },
    "BILLYSMITH": {
      "playerName": "Billy Smith",
      "key": "BILLYSMITH",
      "primaryPosition": "Centre",
      "gamesPlayed": 10,
      "currentPrice": 583000,
      "priceImpliedProjection": 45.5,
      "seasonAverage": 45.7,
      "last3Average": 53.7,
      "lastGameScore": 43,
      "scoreVolatility": 13.9,
      "homeAverage": 52,
      "awayAverage": 43
    },
    "CORYPAIX": {
      "playerName": "Cory Paix",
      "key": "CORYPAIX",
      "primaryPosition": null,
      "gamesPlayed": 18,
      "currentPrice": 421000,
      "priceImpliedProjection": 32.9,
      "seasonAverage": 34.8,
      "last3Average": 30,
      "lastGameScore": 26,
      "scoreVolatility": 10.1,
      "homeAverage": 31.6,
      "awayAverage": 38.8
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
      "gamesPlayed": 12,
      "currentPrice": 406000,
      "priceImpliedProjection": 31.7,
      "seasonAverage": 34.9,
      "last3Average": 36,
      "lastGameScore": 53,
      "scoreVolatility": 19.9,
      "homeAverage": 26.6,
      "awayAverage": 40.9
    },
    "RAYSTONE": {
      "playerName": "Ray Stone",
      "key": "RAYSTONE",
      "primaryPosition": "Prop",
      "gamesPlayed": 15,
      "currentPrice": 374000,
      "priceImpliedProjection": 29.2,
      "seasonAverage": 29.5,
      "last3Average": 37,
      "lastGameScore": 39,
      "scoreVolatility": 8.4,
      "homeAverage": 30,
      "awayAverage": 29.1
    },
    "JACKBOSTOCK": {
      "playerName": "Jack Bostock",
      "key": "JACKBOSTOCK",
      "primaryPosition": "Fullback",
      "gamesPlayed": 9,
      "currentPrice": 504000,
      "priceImpliedProjection": 39.4,
      "seasonAverage": 45.9,
      "last3Average": 39.7,
      "lastGameScore": 50,
      "scoreVolatility": 10.2,
      "homeAverage": 47.8,
      "awayAverage": 44.4
    },
    "SEANKEPPIE": {
      "playerName": "Sean Keppie",
      "key": "SEANKEPPIE",
      "primaryPosition": "Prop",
      "gamesPlayed": 12,
      "currentPrice": 375000,
      "priceImpliedProjection": 29.3,
      "seasonAverage": 28.8,
      "last3Average": 26,
      "lastGameScore": 24,
      "scoreVolatility": 11.6,
      "homeAverage": 28.7,
      "awayAverage": 29
    },
    "SPENCERLENIU": {
      "playerName": "Spencer Leniu",
      "key": "SPENCERLENIU",
      "primaryPosition": "Prop",
      "gamesPlayed": 15,
      "currentPrice": 379000,
      "priceImpliedProjection": 29.6,
      "seasonAverage": 26.7,
      "last3Average": 26,
      "lastGameScore": 19,
      "scoreVolatility": 13.5,
      "homeAverage": 24.3,
      "awayAverage": 28.9
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
      "gamesPlayed": 13,
      "currentPrice": 312000,
      "priceImpliedProjection": 24.4,
      "seasonAverage": 25.9,
      "last3Average": 28.7,
      "lastGameScore": 23,
      "scoreVolatility": 9.9,
      "homeAverage": 26,
      "awayAverage": 25.9
    },
    "SUNIATURUVA": {
      "playerName": "Sunia Turuva",
      "key": "SUNIATURUVA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 20,
      "currentPrice": 280000,
      "priceImpliedProjection": 21.9,
      "seasonAverage": 30.3,
      "last3Average": 20,
      "lastGameScore": 23,
      "scoreVolatility": 16.9,
      "homeAverage": 34.6,
      "awayAverage": 24.9
    },
    "TYRANWISHART": {
      "playerName": "Tyran Wishart",
      "key": "TYRANWISHART",
      "primaryPosition": "Halfback",
      "gamesPlayed": 14,
      "currentPrice": 526000,
      "priceImpliedProjection": 41.1,
      "seasonAverage": 33.6,
      "last3Average": 62.7,
      "lastGameScore": 55,
      "scoreVolatility": 20.8,
      "homeAverage": 35.5,
      "awayAverage": 32.3
    },
    "FONUAPOLE": {
      "playerName": "Fonua Pole",
      "key": "FONUAPOLE",
      "primaryPosition": "Prop",
      "gamesPlayed": 20,
      "currentPrice": 484000,
      "priceImpliedProjection": 37.8,
      "seasonAverage": 37.1,
      "last3Average": 45,
      "lastGameScore": 60,
      "scoreVolatility": 9.9,
      "homeAverage": 39.3,
      "awayAverage": 34.4
    },
    "SIULAGITUIMALATUBROWN": {
      "playerName": "Siulagi Tuimalatu-Brown",
      "key": "SIULAGITUIMALATUBROWN",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 10,
      "last3Average": 16.3,
      "lastGameScore": -2,
      "scoreVolatility": 11.5,
      "homeAverage": 6.3,
      "awayAverage": 12.2
    },
    "SALESIFOKETI": {
      "playerName": "Salesi Foketi",
      "key": "SALESIFOKETI",
      "primaryPosition": "Prop",
      "gamesPlayed": 17,
      "currentPrice": 312000,
      "priceImpliedProjection": 24.4,
      "seasonAverage": 21.3,
      "last3Average": 34,
      "lastGameScore": 58,
      "scoreVolatility": 13.2,
      "homeAverage": 21.9,
      "awayAverage": 20.9
    },
    "ADAMPOMPEY": {
      "playerName": "Adam Pompey",
      "key": "ADAMPOMPEY",
      "primaryPosition": "Centre",
      "gamesPlayed": 13,
      "currentPrice": 411000,
      "priceImpliedProjection": 32.1,
      "seasonAverage": 28.8,
      "last3Average": 31.7,
      "lastGameScore": 20,
      "scoreVolatility": 14.4,
      "homeAverage": 27.9,
      "awayAverage": 29.8
    },
    "KURTMANN": {
      "playerName": "Kurt Mann",
      "key": "KURTMANN",
      "primaryPosition": "Prop",
      "gamesPlayed": 15,
      "currentPrice": 286000,
      "priceImpliedProjection": 22.3,
      "seasonAverage": 25.1,
      "last3Average": 16.3,
      "lastGameScore": 3,
      "scoreVolatility": 10.7,
      "homeAverage": 25.9,
      "awayAverage": 24.4
    },
    "BILLYWALTERS": {
      "playerName": "Billy Walters",
      "key": "BILLYWALTERS",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "currentPrice": 341000,
      "priceImpliedProjection": 26.6,
      "seasonAverage": 16.5,
      "last3Average": 16.5,
      "lastGameScore": 24,
      "scoreVolatility": 7.5,
      "homeAverage": 24,
      "awayAverage": 9
    },
    "MARCELOMONTOYA": {
      "playerName": "Marcelo Montoya",
      "key": "MARCELOMONTOYA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 311000,
      "priceImpliedProjection": 24.3,
      "seasonAverage": 27.6,
      "last3Average": 22,
      "lastGameScore": 35,
      "scoreVolatility": 12.8,
      "homeAverage": 32,
      "awayAverage": 23.3
    },
    "JERALSKELTON": {
      "playerName": "Jeral Skelton",
      "key": "JERALSKELTON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 10,
      "currentPrice": 286000,
      "priceImpliedProjection": 22.3,
      "seasonAverage": 26.3,
      "last3Average": 15.7,
      "lastGameScore": 25,
      "scoreVolatility": 17.8,
      "homeAverage": 30.2,
      "awayAverage": 20.5
    },
    "ROBERTDERBY": {
      "playerName": "Robert Derby",
      "key": "ROBERTDERBY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "currentPrice": 379000,
      "priceImpliedProjection": 29.6,
      "seasonAverage": 32,
      "last3Average": 32,
      "lastGameScore": 32,
      "scoreVolatility": 0,
      "homeAverage": 32,
      "awayAverage": 32
    },
    "ETHANSANDERS": {
      "playerName": "Ethan Sanders",
      "key": "ETHANSANDERS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 20,
      "currentPrice": 631000,
      "priceImpliedProjection": 49.3,
      "seasonAverage": 47.2,
      "last3Average": 64,
      "lastGameScore": 43,
      "scoreVolatility": 15.1,
      "homeAverage": 50,
      "awayAverage": 44.3
    },
    "THOMASFLETCHER": {
      "playerName": "Thomas Fletcher",
      "key": "THOMASFLETCHER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 11.3,
      "last3Average": 11.3,
      "lastGameScore": 28,
      "scoreVolatility": 12,
      "homeAverage": 14,
      "awayAverage": 6
    },
    "JOSHKERR": {
      "playerName": "Josh Kerr",
      "key": "JOSHKERR",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 17,
      "currentPrice": 275000,
      "priceImpliedProjection": 21.5,
      "seasonAverage": 22.9,
      "last3Average": 22.7,
      "lastGameScore": 34,
      "scoreVolatility": 6.7,
      "homeAverage": 22.1,
      "awayAverage": 23.5
    },
    "SEANOSULLIVAN": {
      "playerName": "Sean O'Sullivan",
      "key": "SEANOSULLIVAN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 6,
      "currentPrice": 251000,
      "priceImpliedProjection": 19.6,
      "seasonAverage": 20,
      "last3Average": 23.7,
      "lastGameScore": 54,
      "scoreVolatility": 16.4,
      "homeAverage": 21.5,
      "awayAverage": 17
    },
    "MATTHEWLODGE": {
      "playerName": "Matthew Lodge",
      "key": "MATTHEWLODGE",
      "primaryPosition": "Prop",
      "gamesPlayed": 15,
      "currentPrice": 305000,
      "priceImpliedProjection": 23.8,
      "seasonAverage": 23.9,
      "last3Average": 18.3,
      "lastGameScore": 21,
      "scoreVolatility": 7.7,
      "homeAverage": 22.8,
      "awayAverage": 25.1
    },
    "BRODIEJONES": {
      "playerName": "Brodie Jones",
      "key": "BRODIEJONES",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 319000,
      "priceImpliedProjection": 24.9,
      "seasonAverage": 17.3,
      "last3Average": 17.3,
      "lastGameScore": 5,
      "scoreVolatility": 13.4,
      "homeAverage": 36,
      "awayAverage": 8
    },
    "LATUFAINU": {
      "playerName": "Latu Fainu",
      "key": "LATUFAINU",
      "primaryPosition": "Halfback",
      "gamesPlayed": 12,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 15.9,
      "last3Average": 11.7,
      "lastGameScore": 13,
      "scoreVolatility": 8.3,
      "homeAverage": 19,
      "awayAverage": 11.6
    },
    "BAILEYHAYWARD": {
      "playerName": "Bailey Hayward",
      "key": "BAILEYHAYWARD",
      "primaryPosition": null,
      "gamesPlayed": 19,
      "currentPrice": 409000,
      "priceImpliedProjection": 32,
      "seasonAverage": 34.1,
      "last3Average": 29.7,
      "lastGameScore": 23,
      "scoreVolatility": 10.5,
      "homeAverage": 34.2,
      "awayAverage": 34
    },
    "SIMISASAGI": {
      "playerName": "Simi Sasagi",
      "key": "SIMISASAGI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 13,
      "currentPrice": 551000,
      "priceImpliedProjection": 43,
      "seasonAverage": 50.5,
      "last3Average": 49.7,
      "lastGameScore": 75,
      "scoreVolatility": 19.4,
      "homeAverage": 46.7,
      "awayAverage": 55
    },
    "CLAYTONFAULALO": {
      "playerName": "Clayton Faulalo",
      "key": "CLAYTONFAULALO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 10,
      "currentPrice": 489000,
      "priceImpliedProjection": 38.2,
      "seasonAverage": 38.1,
      "last3Average": 26.7,
      "lastGameScore": 5,
      "scoreVolatility": 17.4,
      "homeAverage": 44,
      "awayAverage": 34.2
    },
    "LUCAMORETTI": {
      "playerName": "Luca Moretti",
      "key": "LUCAMORETTI",
      "primaryPosition": "Prop",
      "gamesPlayed": 13,
      "currentPrice": 315000,
      "priceImpliedProjection": 24.6,
      "seasonAverage": 28.1,
      "last3Average": 24.7,
      "lastGameScore": 19,
      "scoreVolatility": 13.5,
      "homeAverage": 27.9,
      "awayAverage": 28.4
    },
    "ORYNKEELEY": {
      "playerName": "Oryn Keeley",
      "key": "ORYNKEELEY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 10,
      "currentPrice": 433000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 34.8,
      "last3Average": 51.3,
      "lastGameScore": 44,
      "scoreVolatility": 15.1,
      "homeAverage": 29.2,
      "awayAverage": 39.5
    },
    "ZACLAYBUTT": {
      "playerName": "Zac Laybutt",
      "key": "ZACLAYBUTT",
      "primaryPosition": "Centre",
      "gamesPlayed": 16,
      "currentPrice": 231000,
      "priceImpliedProjection": 18,
      "seasonAverage": 22.4,
      "last3Average": 10.3,
      "lastGameScore": 8,
      "scoreVolatility": 13.6,
      "homeAverage": 24.3,
      "awayAverage": 20.6
    },
    "SAMUELSTONESTREET": {
      "playerName": "Samuel Stonestreet",
      "key": "SAMUELSTONESTREET",
      "primaryPosition": "Fullback",
      "gamesPlayed": 12,
      "currentPrice": 346000,
      "priceImpliedProjection": 27,
      "seasonAverage": 29.2,
      "last3Average": 28.3,
      "lastGameScore": 32,
      "scoreVolatility": 7.3,
      "homeAverage": 28.9,
      "awayAverage": 29.8
    },
    "RONALDVOLKMAN": {
      "playerName": "Ronald Volkman",
      "key": "RONALDVOLKMAN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 14,
      "currentPrice": 458000,
      "priceImpliedProjection": 35.8,
      "seasonAverage": 38.7,
      "last3Average": 18.3,
      "lastGameScore": 28,
      "scoreVolatility": 16.2,
      "homeAverage": 41.1,
      "awayAverage": 35.5
    },
    "ATAMARIOTA": {
      "playerName": "Ata Mariota",
      "key": "ATAMARIOTA",
      "primaryPosition": "Prop",
      "gamesPlayed": 20,
      "currentPrice": 524000,
      "priceImpliedProjection": 40.9,
      "seasonAverage": 36.6,
      "last3Average": 47,
      "lastGameScore": 48,
      "scoreVolatility": 10.7,
      "homeAverage": 37.5,
      "awayAverage": 35.7
    },
    "BRONSONGARLICK": {
      "playerName": "Bronson Garlick",
      "key": "BRONSONGARLICK",
      "primaryPosition": null,
      "gamesPlayed": 11,
      "currentPrice": 265000,
      "priceImpliedProjection": 20.7,
      "seasonAverage": 19.9,
      "last3Average": 17.3,
      "lastGameScore": 10,
      "scoreVolatility": 8.1,
      "homeAverage": 19.7,
      "awayAverage": 20.2
    },
    "ALECMACDONALD": {
      "playerName": "Alec MacDonald",
      "key": "ALECMACDONALD",
      "primaryPosition": "Prop",
      "gamesPlayed": 16,
      "currentPrice": 387000,
      "priceImpliedProjection": 30.2,
      "seasonAverage": 29,
      "last3Average": 30.7,
      "lastGameScore": 28,
      "scoreVolatility": 9.9,
      "homeAverage": 29,
      "awayAverage": 29
    },
    "MARATANIUKORE": {
      "playerName": "Marata Niukore",
      "key": "MARATANIUKORE",
      "primaryPosition": "Prop",
      "gamesPlayed": 9,
      "currentPrice": 270000,
      "priceImpliedProjection": 21.1,
      "seasonAverage": 22.9,
      "last3Average": 19.7,
      "lastGameScore": 15,
      "scoreVolatility": 10.6,
      "homeAverage": 22.3,
      "awayAverage": 23.2
    },
    "MAVRIKGEYER": {
      "playerName": "Mavrik Geyer",
      "key": "MAVRIKGEYER",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 272000,
      "priceImpliedProjection": 21.3,
      "seasonAverage": 20,
      "last3Average": 20,
      "lastGameScore": 20,
      "scoreVolatility": 10.6,
      "homeAverage": 33,
      "awayAverage": 13.5
    },
    "SEANRUSSELL": {
      "playerName": "Sean Russell",
      "key": "SEANRUSSELL",
      "primaryPosition": "Centre",
      "gamesPlayed": 14,
      "currentPrice": 322000,
      "priceImpliedProjection": 25.2,
      "seasonAverage": 27.9,
      "last3Average": 31.7,
      "lastGameScore": 25,
      "scoreVolatility": 11,
      "homeAverage": 26.9,
      "awayAverage": 28.9
    },
    "ALILEIATAUA": {
      "playerName": "Ali Leiataua",
      "key": "ALILEIATAUA",
      "primaryPosition": "Centre",
      "gamesPlayed": 16,
      "currentPrice": 414000,
      "priceImpliedProjection": 32.3,
      "seasonAverage": 33.4,
      "last3Average": 46.3,
      "lastGameScore": 59,
      "scoreVolatility": 13.4,
      "homeAverage": 32.9,
      "awayAverage": 34
    },
    "LIPOIHOPOI": {
      "playerName": "Lipoi Hopoi",
      "key": "LIPOIHOPOI",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 14.1,
      "last3Average": 18,
      "lastGameScore": 12,
      "scoreVolatility": 8.6,
      "homeAverage": 9.3,
      "awayAverage": 20.7
    },
    "DAVVYMOALE": {
      "playerName": "Davvy Moale",
      "key": "DAVVYMOALE",
      "primaryPosition": "Prop",
      "gamesPlayed": 9,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 16,
      "last3Average": 13.7,
      "lastGameScore": 3,
      "scoreVolatility": 6.4,
      "homeAverage": 18.8,
      "awayAverage": 13.8
    },
    "JAEMANSALMON": {
      "playerName": "Jaeman Salmon",
      "key": "JAEMANSALMON",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 569000,
      "priceImpliedProjection": 44.5,
      "seasonAverage": 43.2,
      "last3Average": 50.7,
      "lastGameScore": 71,
      "scoreVolatility": 11.5,
      "homeAverage": 41.6,
      "awayAverage": 44.9
    },
    "JACKCOLE": {
      "playerName": "Jack Cole",
      "key": "JACKCOLE",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 312000,
      "priceImpliedProjection": 24.4,
      "seasonAverage": 40,
      "last3Average": 40,
      "lastGameScore": 40,
      "scoreVolatility": 0,
      "homeAverage": 40,
      "awayAverage": 40
    },
    "TYRELLSLOAN": {
      "playerName": "Tyrell Sloan",
      "key": "TYRELLSLOAN",
      "primaryPosition": "Fullback",
      "gamesPlayed": 13,
      "currentPrice": 329000,
      "priceImpliedProjection": 25.7,
      "seasonAverage": 26.6,
      "last3Average": 37.3,
      "lastGameScore": 38,
      "scoreVolatility": 12.5,
      "homeAverage": 32.4,
      "awayAverage": 19.8
    },
    "SIONEFAINU": {
      "playerName": "Sione Fainu",
      "key": "SIONEFAINU",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 387000,
      "priceImpliedProjection": 30.2,
      "seasonAverage": 32,
      "last3Average": 23.7,
      "lastGameScore": 21,
      "scoreVolatility": 9.2,
      "homeAverage": 32.6,
      "awayAverage": 31.3
    },
    "THOMASMIKAELE": {
      "playerName": "Thomas Mikaele",
      "key": "THOMASMIKAELE",
      "primaryPosition": "Prop",
      "gamesPlayed": 17,
      "currentPrice": 437000,
      "priceImpliedProjection": 34.1,
      "seasonAverage": 38.8,
      "last3Average": 32.3,
      "lastGameScore": 28,
      "scoreVolatility": 12.9,
      "homeAverage": 37.2,
      "awayAverage": 40.5
    },
    "JESSEARTHARS": {
      "playerName": "Jesse Arthars",
      "key": "JESSEARTHARS",
      "primaryPosition": "Fullback",
      "gamesPlayed": 10,
      "currentPrice": 328000,
      "priceImpliedProjection": 25.6,
      "seasonAverage": 27.6,
      "last3Average": 23,
      "lastGameScore": 16,
      "scoreVolatility": 13.6,
      "homeAverage": 31.8,
      "awayAverage": 24.8
    },
    "FELISEKAUFUSI": {
      "playerName": "Felise Kaufusi",
      "key": "FELISEKAUFUSI",
      "primaryPosition": "Prop",
      "gamesPlayed": 16,
      "currentPrice": 240000,
      "priceImpliedProjection": 18.8,
      "seasonAverage": 20.7,
      "last3Average": 22,
      "lastGameScore": 32,
      "scoreVolatility": 7.5,
      "homeAverage": 21.8,
      "awayAverage": 19.3
    },
    "NATHANBROWN": {
      "playerName": "Nathan Brown",
      "key": "NATHANBROWN",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 343000,
      "priceImpliedProjection": 26.8,
      "seasonAverage": 25.7,
      "last3Average": 27,
      "lastGameScore": 32,
      "scoreVolatility": 8.9,
      "homeAverage": 26.6,
      "awayAverage": 24.5
    },
    "LOKOPASIFIKITONGA": {
      "playerName": "Loko Pasifiki Tonga",
      "key": "LOKOPASIFIKITONGA",
      "primaryPosition": "Prop",
      "gamesPlayed": 13,
      "currentPrice": 521000,
      "priceImpliedProjection": 40.7,
      "seasonAverage": 40.8,
      "last3Average": 43,
      "lastGameScore": 40,
      "scoreVolatility": 10.5,
      "homeAverage": 45,
      "awayAverage": 37.1
    },
    "CODYWALKER": {
      "playerName": "Cody Walker",
      "key": "CODYWALKER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 18,
      "currentPrice": 439000,
      "priceImpliedProjection": 34.3,
      "seasonAverage": 36.2,
      "last3Average": 36.3,
      "lastGameScore": 41,
      "scoreVolatility": 11.2,
      "homeAverage": 33.8,
      "awayAverage": 38.1
    },
    "ZACHDOCKARCLAY": {
      "playerName": "Zach Dockar-Clay",
      "key": "ZACHDOCKARCLAY",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "currentPrice": 340000,
      "priceImpliedProjection": 26.6,
      "seasonAverage": 23,
      "last3Average": 23,
      "lastGameScore": 23,
      "scoreVolatility": 0,
      "homeAverage": 23,
      "awayAverage": 23
    },
    "JASONSAAB": {
      "playerName": "Jason Saab",
      "key": "JASONSAAB",
      "primaryPosition": "Fullback",
      "gamesPlayed": 18,
      "currentPrice": 391000,
      "priceImpliedProjection": 30.5,
      "seasonAverage": 27.6,
      "last3Average": 34.3,
      "lastGameScore": 12,
      "scoreVolatility": 16.2,
      "homeAverage": 24.9,
      "awayAverage": 31
    },
    "JESSECOLQUHOUN": {
      "playerName": "Jesse Colquhoun",
      "key": "JESSECOLQUHOUN",
      "primaryPosition": "Prop",
      "gamesPlayed": 17,
      "currentPrice": 531000,
      "priceImpliedProjection": 41.5,
      "seasonAverage": 44.4,
      "last3Average": 45,
      "lastGameScore": 49,
      "scoreVolatility": 8.4,
      "homeAverage": 45.1,
      "awayAverage": 43.5
    },
    "TOBYRUDOLF": {
      "playerName": "Toby Rudolf",
      "key": "TOBYRUDOLF",
      "primaryPosition": "Prop",
      "gamesPlayed": 13,
      "currentPrice": 409000,
      "priceImpliedProjection": 32,
      "seasonAverage": 30.9,
      "last3Average": 33,
      "lastGameScore": 24,
      "scoreVolatility": 9.7,
      "homeAverage": 33.4,
      "awayAverage": 27
    },
    "SIOSIFATALAKAI": {
      "playerName": "Siosifa Talakai",
      "key": "SIOSIFATALAKAI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 17,
      "currentPrice": 283000,
      "priceImpliedProjection": 22.1,
      "seasonAverage": 25.2,
      "last3Average": 25,
      "lastGameScore": 17,
      "scoreVolatility": 14.9,
      "homeAverage": 21.6,
      "awayAverage": 28.3
    },
    "JOSIAHPAHULU": {
      "playerName": "Josiah Pahulu",
      "key": "JOSIAHPAHULU",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 279000,
      "priceImpliedProjection": 21.8,
      "seasonAverage": 5,
      "last3Average": 5,
      "lastGameScore": 5,
      "scoreVolatility": 0,
      "homeAverage": 5,
      "awayAverage": 5
    },
    "TANNERSTOWERSSMITH": {
      "playerName": "Tanner Stowers-Smith",
      "key": "TANNERSTOWERSSMITH",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 496000,
      "priceImpliedProjection": 38.8,
      "seasonAverage": 37.8,
      "last3Average": 47.7,
      "lastGameScore": 52,
      "scoreVolatility": 11.2,
      "homeAverage": 37.7,
      "awayAverage": 37.9
    },
    "BLAKELAWRIE": {
      "playerName": "Blake Lawrie",
      "key": "BLAKELAWRIE",
      "primaryPosition": "Prop",
      "gamesPlayed": 9,
      "currentPrice": 303000,
      "priceImpliedProjection": 23.7,
      "seasonAverage": 26.4,
      "last3Average": 22.7,
      "lastGameScore": 21,
      "scoreVolatility": 10.7,
      "homeAverage": 23.3,
      "awayAverage": 28
    },
    "BRADSCHNEIDER": {
      "playerName": "Brad Schneider",
      "key": "BRADSCHNEIDER",
      "primaryPosition": "Halfback",
      "gamesPlayed": 13,
      "currentPrice": 461000,
      "priceImpliedProjection": 36,
      "seasonAverage": 33.7,
      "last3Average": 40.3,
      "lastGameScore": 38,
      "scoreVolatility": 14.3,
      "homeAverage": 34.4,
      "awayAverage": 32.6
    },
    "KEANOKINI": {
      "playerName": "Keano Kini",
      "key": "KEANOKINI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 19,
      "currentPrice": 666000,
      "priceImpliedProjection": 52,
      "seasonAverage": 50.9,
      "last3Average": 47.7,
      "lastGameScore": 48,
      "scoreVolatility": 16.9,
      "homeAverage": 41.8,
      "awayAverage": 57.5
    },
    "JACOBLABAN": {
      "playerName": "Jacob Laban",
      "key": "JACOBLABAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 18,
      "currentPrice": 527000,
      "priceImpliedProjection": 41.2,
      "seasonAverage": 36.4,
      "last3Average": 43,
      "lastGameScore": 75,
      "scoreVolatility": 21,
      "homeAverage": 28,
      "awayAverage": 43.1
    },
    "JACKGOSIEWSKI": {
      "playerName": "Jack Gosiewski",
      "key": "JACKGOSIEWSKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 10,
      "currentPrice": 419000,
      "priceImpliedProjection": 32.7,
      "seasonAverage": 33.8,
      "last3Average": 32,
      "lastGameScore": 30,
      "scoreVolatility": 14.4,
      "homeAverage": 35.8,
      "awayAverage": 30.8
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
      "gamesPlayed": 13,
      "currentPrice": 380000,
      "priceImpliedProjection": 29.7,
      "seasonAverage": 30.7,
      "last3Average": 33,
      "lastGameScore": 17,
      "scoreVolatility": 11.2,
      "homeAverage": 30.8,
      "awayAverage": 30.6
    },
    "BENAIAHIOELU": {
      "playerName": "Benaiah Ioelu",
      "key": "BENAIAHIOELU",
      "primaryPosition": null,
      "gamesPlayed": 4,
      "currentPrice": 353000,
      "priceImpliedProjection": 27.6,
      "seasonAverage": 30.5,
      "last3Average": 28.7,
      "lastGameScore": 22,
      "scoreVolatility": 9.3,
      "homeAverage": 21.5,
      "awayAverage": 39.5
    },
    "LURONPATEA": {
      "playerName": "Luron Patea",
      "key": "LURONPATEA",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 350000,
      "priceImpliedProjection": 27.3,
      "seasonAverage": 35.5,
      "last3Average": 35.5,
      "lastGameScore": 27,
      "scoreVolatility": 8.5,
      "homeAverage": 27,
      "awayAverage": 44
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
      "gamesPlayed": 11,
      "currentPrice": 342000,
      "priceImpliedProjection": 26.7,
      "seasonAverage": 28.3,
      "last3Average": 34,
      "lastGameScore": 13,
      "scoreVolatility": 14.9,
      "homeAverage": 29.2,
      "awayAverage": 27.5
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
      "gamesPlayed": 13,
      "currentPrice": 391000,
      "priceImpliedProjection": 30.5,
      "seasonAverage": 28.5,
      "last3Average": 30,
      "lastGameScore": 36,
      "scoreVolatility": 13.3,
      "homeAverage": 27.3,
      "awayAverage": 29.6
    },
    "EDWARDKOSI": {
      "playerName": "Edward Kosi",
      "key": "EDWARDKOSI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 6,
      "currentPrice": 260000,
      "priceImpliedProjection": 20.3,
      "seasonAverage": 20.7,
      "last3Average": 33.3,
      "lastGameScore": 32,
      "scoreVolatility": 13.1,
      "homeAverage": 15,
      "awayAverage": 26.3
    },
    "XAVIERSAVAGE": {
      "playerName": "Xavier Savage",
      "key": "XAVIERSAVAGE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 15,
      "currentPrice": 315000,
      "priceImpliedProjection": 24.6,
      "seasonAverage": 28.5,
      "last3Average": 20.3,
      "lastGameScore": 18,
      "scoreVolatility": 12.8,
      "homeAverage": 29.3,
      "awayAverage": 27.6
    },
    "BRENDANPIAKURA": {
      "playerName": "Brendan Piakura",
      "key": "BRENDANPIAKURA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 12,
      "currentPrice": 341000,
      "priceImpliedProjection": 26.6,
      "seasonAverage": 26,
      "last3Average": 15.7,
      "lastGameScore": 6,
      "scoreVolatility": 13.9,
      "homeAverage": 28.9,
      "awayAverage": 22
    },
    "JORDANSAMRANI": {
      "playerName": "Jordan Samrani",
      "key": "JORDANSAMRANI",
      "primaryPosition": "Centre",
      "gamesPlayed": 12,
      "currentPrice": 449000,
      "priceImpliedProjection": 35.1,
      "seasonAverage": 35,
      "last3Average": 40.3,
      "lastGameScore": 44,
      "scoreVolatility": 15.3,
      "homeAverage": 30.2,
      "awayAverage": 39.8
    },
    "JOECHAN": {
      "playerName": "Joe Chan",
      "key": "JOECHAN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 17,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 29.6,
      "last3Average": 13,
      "lastGameScore": 16,
      "scoreVolatility": 22.4,
      "homeAverage": 30.8,
      "awayAverage": 28.4
    },
    "DALLINWATENEZELEZNIAK": {
      "playerName": "Dallin Watene-Zelezniak",
      "key": "DALLINWATENEZELEZNIAK",
      "primaryPosition": "Fullback",
      "gamesPlayed": 18,
      "currentPrice": 437000,
      "priceImpliedProjection": 34.1,
      "seasonAverage": 37.5,
      "last3Average": 43.3,
      "lastGameScore": 41,
      "scoreVolatility": 17.2,
      "homeAverage": 34.9,
      "awayAverage": 40.1
    },
    "TRISTANHOPE": {
      "playerName": "Tristan Hope",
      "key": "TRISTANHOPE",
      "primaryPosition": null,
      "gamesPlayed": 5,
      "currentPrice": 348000,
      "priceImpliedProjection": 27.2,
      "seasonAverage": 30.4,
      "last3Average": 27.3,
      "lastGameScore": 9,
      "scoreVolatility": 17.6,
      "homeAverage": 22.5,
      "awayAverage": 35.7
    },
    "THOMASDUFFY": {
      "playerName": "Thomas Duffy",
      "key": "THOMASDUFFY",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 337000,
      "priceImpliedProjection": 26.3,
      "seasonAverage": 32.6,
      "last3Average": 31.3,
      "lastGameScore": 32,
      "scoreVolatility": 18.6,
      "homeAverage": 43.3,
      "awayAverage": 18.3
    },
    "JEDSTUART": {
      "playerName": "Jed Stuart",
      "key": "JEDSTUART",
      "primaryPosition": "Fullback",
      "gamesPlayed": 13,
      "currentPrice": 293000,
      "priceImpliedProjection": 22.9,
      "seasonAverage": 21.1,
      "last3Average": 34.3,
      "lastGameScore": 17,
      "scoreVolatility": 11.9,
      "homeAverage": 24.1,
      "awayAverage": 17.5
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
    "BLAKEWILSON": {
      "playerName": "Blake Wilson",
      "key": "BLAKEWILSON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 21,
      "scoreVolatility": 7,
      "homeAverage": 21,
      "awayAverage": 7
    },
    "SAMTUIVAITI": {
      "playerName": "Sam Tuivaiti",
      "key": "SAMTUIVAITI",
      "primaryPosition": "Prop",
      "gamesPlayed": 13,
      "currentPrice": 385000,
      "priceImpliedProjection": 30.1,
      "seasonAverage": 29.3,
      "last3Average": 35.7,
      "lastGameScore": 42,
      "scoreVolatility": 8.4,
      "homeAverage": 30.4,
      "awayAverage": 28
    },
    "JOSHPATSTON": {
      "playerName": "Josh Patston",
      "key": "JOSHPATSTON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 10,
      "currentPrice": 358000,
      "priceImpliedProjection": 28,
      "seasonAverage": 29.5,
      "last3Average": 28.7,
      "lastGameScore": 32,
      "scoreVolatility": 11,
      "homeAverage": 37.5,
      "awayAverage": 24.2
    },
    "LUKELAULILII": {
      "playerName": "Luke Laulilii",
      "key": "LUKELAULILII",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 439000,
      "priceImpliedProjection": 34.3,
      "seasonAverage": 39,
      "last3Average": 45.3,
      "lastGameScore": 55,
      "scoreVolatility": 15.4,
      "homeAverage": 47,
      "awayAverage": 22
    },
    "TAYLORLOSALU": {
      "playerName": "Taylor Losalu",
      "key": "TAYLORLOSALU",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 241000,
      "priceImpliedProjection": 18.8,
      "seasonAverage": 13,
      "last3Average": 13,
      "lastGameScore": 13,
      "scoreVolatility": 0,
      "homeAverage": 13,
      "awayAverage": 13
    },
    "ATIVALULISATI": {
      "playerName": "Ativalu Lisati",
      "key": "ATIVALULISATI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 10,
      "currentPrice": 562000,
      "priceImpliedProjection": 43.9,
      "seasonAverage": 53.4,
      "last3Average": 39.7,
      "lastGameScore": 40,
      "scoreVolatility": 15.2,
      "homeAverage": 56,
      "awayAverage": 50.8
    },
    "LUKESOMMERTON": {
      "playerName": "Luke Sommerton",
      "key": "LUKESOMMERTON",
      "primaryPosition": null,
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 13.3,
      "last3Average": 13.3,
      "lastGameScore": 15,
      "scoreVolatility": 1.2,
      "homeAverage": 13,
      "awayAverage": 13.5
    },
    "KURTISMORRIN": {
      "playerName": "Kurtis Morrin",
      "key": "KURTISMORRIN",
      "primaryPosition": "Prop",
      "gamesPlayed": 17,
      "currentPrice": 452000,
      "priceImpliedProjection": 35.3,
      "seasonAverage": 32.4,
      "last3Average": 34.7,
      "lastGameScore": 20,
      "scoreVolatility": 11.1,
      "homeAverage": 34.7,
      "awayAverage": 30.7
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
      "gamesPlayed": 9,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 11.9,
      "last3Average": 9.7,
      "lastGameScore": 14,
      "scoreVolatility": 6.6,
      "homeAverage": 9.4,
      "awayAverage": 15
    },
    "TONYSUKKAR": {
      "playerName": "Tony Sukkar",
      "key": "TONYSUKKAR",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 6,
      "currentPrice": 470000,
      "priceImpliedProjection": 36.7,
      "seasonAverage": 43.2,
      "last3Average": 38.7,
      "lastGameScore": 21,
      "scoreVolatility": 14.2,
      "homeAverage": 39.7,
      "awayAverage": 46.7
    },
    "JAKETURPIN": {
      "playerName": "Jake Turpin",
      "key": "JAKETURPIN",
      "primaryPosition": null,
      "gamesPlayed": 3,
      "currentPrice": 262000,
      "priceImpliedProjection": 20.5,
      "seasonAverage": 23,
      "last3Average": 23,
      "lastGameScore": 30,
      "scoreVolatility": 13.6,
      "homeAverage": 17,
      "awayAverage": 35
    },
    "MANAIAWAITERE": {
      "playerName": "Manaia Waitere",
      "key": "MANAIAWAITERE",
      "primaryPosition": "Centre",
      "gamesPlayed": 8,
      "currentPrice": 291000,
      "priceImpliedProjection": 22.7,
      "seasonAverage": 24.8,
      "last3Average": 25.3,
      "lastGameScore": 12,
      "scoreVolatility": 18.1,
      "homeAverage": 20,
      "awayAverage": 32.7
    },
    "JAIYDENHUNT": {
      "playerName": "Jaiyden Hunt",
      "key": "JAIYDENHUNT",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 265000,
      "priceImpliedProjection": 20.7,
      "seasonAverage": 24.5,
      "last3Average": 28.3,
      "lastGameScore": 45,
      "scoreVolatility": 12.2,
      "homeAverage": 29,
      "awayAverage": 20
    },
    "HEATHMASON": {
      "playerName": "Heath Mason",
      "key": "HEATHMASON",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 282000,
      "priceImpliedProjection": 22,
      "seasonAverage": 27.7,
      "last3Average": 27.7,
      "lastGameScore": 28,
      "scoreVolatility": 3.7,
      "homeAverage": 25.5,
      "awayAverage": 32
    },
    "NOAHMARTIN": {
      "playerName": "Noah Martin",
      "key": "NOAHMARTIN",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 10,
      "currentPrice": 565000,
      "priceImpliedProjection": 44.1,
      "seasonAverage": 52.7,
      "last3Average": 46,
      "lastGameScore": 53,
      "scoreVolatility": 15.2,
      "homeAverage": 47.3,
      "awayAverage": 56.3
    },
    "JAYLANDEGROOT": {
      "playerName": "Jaylan De Groot",
      "key": "JAYLANDEGROOT",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 253000,
      "priceImpliedProjection": 19.8,
      "seasonAverage": 23.2,
      "last3Average": 24.7,
      "lastGameScore": 44,
      "scoreVolatility": 11.4,
      "homeAverage": 16,
      "awayAverage": 25
    },
    "FREDDYLUSSICK": {
      "playerName": "Freddy Lussick",
      "key": "FREDDYLUSSICK",
      "primaryPosition": null,
      "gamesPlayed": 16,
      "currentPrice": 469000,
      "priceImpliedProjection": 36.6,
      "seasonAverage": 38.1,
      "last3Average": 40,
      "lastGameScore": 46,
      "scoreVolatility": 12.2,
      "homeAverage": 38,
      "awayAverage": 38.3
    },
    "TRENTTOELAU": {
      "playerName": "Trent Toelau",
      "key": "TRENTTOELAU",
      "primaryPosition": "Halfback",
      "gamesPlayed": 9,
      "currentPrice": 312000,
      "priceImpliedProjection": 24.4,
      "seasonAverage": 24.8,
      "last3Average": 37,
      "lastGameScore": 29,
      "scoreVolatility": 11.1,
      "homeAverage": 19.3,
      "awayAverage": 29.2
    },
    "LIAMLEBLANC": {
      "playerName": "Liam Le Blanc",
      "key": "LIAMLEBLANC",
      "primaryPosition": "Prop",
      "gamesPlayed": 6,
      "currentPrice": 259000,
      "priceImpliedProjection": 20.2,
      "seasonAverage": 22.2,
      "last3Average": 21.3,
      "lastGameScore": 20,
      "scoreVolatility": 4.6,
      "homeAverage": 22.7,
      "awayAverage": 21.7
    },
    "TUKUHAUTAPUHA": {
      "playerName": "Tuku Hau Tapuha",
      "key": "TUKUHAUTAPUHA",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 13.3,
      "last3Average": 13.3,
      "lastGameScore": 9,
      "scoreVolatility": 3.3,
      "homeAverage": 9,
      "awayAverage": 15.5
    },
    "OWENPATTIE": {
      "playerName": "Owen Pattie",
      "key": "OWENPATTIE",
      "primaryPosition": null,
      "gamesPlayed": 11,
      "currentPrice": 501000,
      "priceImpliedProjection": 39.1,
      "seasonAverage": 33.7,
      "last3Average": 57.3,
      "lastGameScore": 55,
      "scoreVolatility": 19.9,
      "homeAverage": 27.5,
      "awayAverage": 41.2
    },
    "JACKHETHERINGTON": {
      "playerName": "Jack Hetherington",
      "key": "JACKHETHERINGTON",
      "primaryPosition": "Prop",
      "gamesPlayed": 9,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 15,
      "last3Average": 12.3,
      "lastGameScore": 11,
      "scoreVolatility": 3.7,
      "homeAverage": 16,
      "awayAverage": 14.5
    },
    "MOSESLEO": {
      "playerName": "Moses Leo",
      "key": "MOSESLEO",
      "primaryPosition": "Fullback",
      "gamesPlayed": 13,
      "currentPrice": 399000,
      "priceImpliedProjection": 31.2,
      "seasonAverage": 33.8,
      "last3Average": 21.3,
      "lastGameScore": 29,
      "scoreVolatility": 20.1,
      "homeAverage": 36.4,
      "awayAverage": 30.7
    },
    "TEMAIREMARTIN": {
      "playerName": "Te Maire Martin",
      "key": "TEMAIREMARTIN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 10,
      "currentPrice": 611000,
      "priceImpliedProjection": 47.7,
      "seasonAverage": 56.5,
      "last3Average": 50,
      "lastGameScore": 75,
      "scoreVolatility": 12.7,
      "homeAverage": 53,
      "awayAverage": 58.8
    },
    "ROYCEHUNT": {
      "playerName": "Royce Hunt",
      "key": "ROYCEHUNT",
      "primaryPosition": "Prop",
      "gamesPlayed": 12,
      "currentPrice": 237000,
      "priceImpliedProjection": 18.5,
      "seasonAverage": 20.4,
      "last3Average": 16,
      "lastGameScore": 15,
      "scoreVolatility": 9.2,
      "homeAverage": 20.6,
      "awayAverage": 20.2
    },
    "TALLYNDASILVA": {
      "playerName": "Tallyn Da Silva",
      "key": "TALLYNDASILVA",
      "primaryPosition": null,
      "gamesPlayed": 19,
      "currentPrice": 428000,
      "priceImpliedProjection": 33.4,
      "seasonAverage": 31.6,
      "last3Average": 36.7,
      "lastGameScore": 38,
      "scoreVolatility": 11.6,
      "homeAverage": 33.4,
      "awayAverage": 29.6
    },
    "ELIJAHSALESALEAUMOANA": {
      "playerName": "Elijah Salesa-Leaumoana",
      "key": "ELIJAHSALESALEAUMOANA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 15,
      "last3Average": 15,
      "lastGameScore": 19,
      "scoreVolatility": 4,
      "homeAverage": 15,
      "awayAverage": 15
    },
    "CAMERONMURRAY": {
      "playerName": "Cameron Murray",
      "key": "CAMERONMURRAY",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 664000,
      "priceImpliedProjection": 51.9,
      "seasonAverage": 52.1,
      "last3Average": 57.3,
      "lastGameScore": 69,
      "scoreVolatility": 10,
      "homeAverage": 50.1,
      "awayAverage": 54.1
    },
    "TONIMATAELE": {
      "playerName": "Toni Mataele",
      "key": "TONIMATAELE",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 6,
      "currentPrice": 280000,
      "priceImpliedProjection": 21.9,
      "seasonAverage": 23.5,
      "last3Average": 22.7,
      "lastGameScore": 25,
      "scoreVolatility": 7.1,
      "homeAverage": 23,
      "awayAverage": 24
    },
    "JONAHPEZET": {
      "playerName": "Jonah Pezet",
      "key": "JONAHPEZET",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 359000,
      "priceImpliedProjection": 28,
      "seasonAverage": 28.9,
      "last3Average": 33.3,
      "lastGameScore": 43,
      "scoreVolatility": 10.6,
      "homeAverage": 27.7,
      "awayAverage": 29.8
    },
    "JUNIORTUPOU": {
      "playerName": "Junior Tupou",
      "key": "JUNIORTUPOU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 250000,
      "priceImpliedProjection": 19.5,
      "seasonAverage": 23,
      "last3Average": 23,
      "lastGameScore": 30,
      "scoreVolatility": 7.9,
      "homeAverage": 21,
      "awayAverage": 27
    },
    "HOHEPAPURU": {
      "playerName": "Hohepa Puru",
      "key": "HOHEPAPURU",
      "primaryPosition": "Prop",
      "gamesPlayed": 10,
      "currentPrice": 320000,
      "priceImpliedProjection": 25,
      "seasonAverage": 27.6,
      "last3Average": 18.7,
      "lastGameScore": 5,
      "scoreVolatility": 14.7,
      "homeAverage": 36.3,
      "awayAverage": 21.8
    },
    "DANIELATKINSON": {
      "playerName": "Daniel Atkinson",
      "key": "DANIELATKINSON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 17,
      "currentPrice": 575000,
      "priceImpliedProjection": 44.9,
      "seasonAverage": 44.1,
      "last3Average": 47.3,
      "lastGameScore": 37,
      "scoreVolatility": 10.9,
      "homeAverage": 42.7,
      "awayAverage": 45
    },
    "AARONSCHOUPP": {
      "playerName": "Aaron Schoupp",
      "key": "AARONSCHOUPP",
      "primaryPosition": "Centre",
      "gamesPlayed": 1,
      "currentPrice": 248000,
      "priceImpliedProjection": 19.4,
      "seasonAverage": 20,
      "last3Average": 20,
      "lastGameScore": 20,
      "scoreVolatility": 0,
      "homeAverage": 20,
      "awayAverage": 20
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
      "gamesPlayed": 19,
      "currentPrice": 449000,
      "priceImpliedProjection": 35.1,
      "seasonAverage": 41.2,
      "last3Average": 36,
      "lastGameScore": 29,
      "scoreVolatility": 18.7,
      "homeAverage": 40.6,
      "awayAverage": 41.5
    },
    "CHEVYSTEWART": {
      "playerName": "Chevy Stewart",
      "key": "CHEVYSTEWART",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "currentPrice": 237000,
      "priceImpliedProjection": 18.5,
      "seasonAverage": 9,
      "last3Average": 9,
      "lastGameScore": 9,
      "scoreVolatility": 0,
      "homeAverage": 9,
      "awayAverage": 9
    },
    "JOEYWALSH": {
      "playerName": "Joey Walsh",
      "key": "JOEYWALSH",
      "primaryPosition": "Halfback",
      "gamesPlayed": 7,
      "currentPrice": 506000,
      "priceImpliedProjection": 39.5,
      "seasonAverage": 47.4,
      "last3Average": 52.7,
      "lastGameScore": 54,
      "scoreVolatility": 12,
      "homeAverage": 43,
      "awayAverage": 53.3
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
    "JAXENEDGAR": {
      "playerName": "Jaxen Edgar",
      "key": "JAXENEDGAR",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 273000,
      "priceImpliedProjection": 21.3,
      "seasonAverage": 31.5,
      "last3Average": 31.5,
      "lastGameScore": 39,
      "scoreVolatility": 7.5,
      "homeAverage": 39,
      "awayAverage": 24
    },
    "ADAMELLIOTT": {
      "playerName": "Adam Elliott",
      "key": "ADAMELLIOTT",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 414000,
      "priceImpliedProjection": 32.3,
      "seasonAverage": 25,
      "last3Average": 27,
      "lastGameScore": 18,
      "scoreVolatility": 6.5,
      "homeAverage": 25,
      "awayAverage": 25
    },
    "JAYDENBERRELL": {
      "playerName": "Jayden Berrell",
      "key": "JAYDENBERRELL",
      "primaryPosition": null,
      "gamesPlayed": 4,
      "currentPrice": 235000,
      "priceImpliedProjection": 18.4,
      "seasonAverage": 17.5,
      "last3Average": 15.3,
      "lastGameScore": 3,
      "scoreVolatility": 9.6,
      "homeAverage": 19.5,
      "awayAverage": 15.5
    },
    "MATTHEWDUFTY": {
      "playerName": "Matthew Dufty",
      "key": "MATTHEWDUFTY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 10,
      "currentPrice": 500000,
      "priceImpliedProjection": 39.1,
      "seasonAverage": 42.6,
      "last3Average": 44.7,
      "lastGameScore": 50,
      "scoreVolatility": 22,
      "homeAverage": 35.8,
      "awayAverage": 49.4
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
    "BUNTYAFOA": {
      "playerName": "Bunty Afoa",
      "key": "BUNTYAFOA",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 315000,
      "priceImpliedProjection": 24.6,
      "seasonAverage": 26.3,
      "last3Average": 19.3,
      "lastGameScore": 9,
      "scoreVolatility": 9.6,
      "homeAverage": 34.7,
      "awayAverage": 20
    },
    "SONILUKE": {
      "playerName": "Soni Luke",
      "key": "SONILUKE",
      "primaryPosition": null,
      "gamesPlayed": 14,
      "currentPrice": 252000,
      "priceImpliedProjection": 19.7,
      "seasonAverage": 22.6,
      "last3Average": 28.7,
      "lastGameScore": 37,
      "scoreVolatility": 17.8,
      "homeAverage": 19.7,
      "awayAverage": 27.8
    },
    "FETALAIGAPAUGA": {
      "playerName": "Fetalaiga Pauga",
      "key": "FETALAIGAPAUGA",
      "primaryPosition": "Centre",
      "gamesPlayed": 4,
      "currentPrice": 352000,
      "priceImpliedProjection": 27.5,
      "seasonAverage": 26,
      "last3Average": 21,
      "lastGameScore": 13,
      "scoreVolatility": 10.2,
      "homeAverage": 21,
      "awayAverage": 41
    },
    "PATRICKHERBERT": {
      "playerName": "Patrick Herbert",
      "key": "PATRICKHERBERT",
      "primaryPosition": "Centre",
      "gamesPlayed": 9,
      "currentPrice": 316000,
      "priceImpliedProjection": 24.7,
      "seasonAverage": 27.8,
      "last3Average": 20.3,
      "lastGameScore": 23,
      "scoreVolatility": 15.6,
      "homeAverage": 28.3,
      "awayAverage": 26
    },
    "PASAMISAULO": {
      "playerName": "Pasami Saulo",
      "key": "PASAMISAULO",
      "primaryPosition": "Prop",
      "gamesPlayed": 13,
      "currentPrice": 295000,
      "priceImpliedProjection": 23,
      "seasonAverage": 24.2,
      "last3Average": 21.7,
      "lastGameScore": 17,
      "scoreVolatility": 6.8,
      "homeAverage": 21.3,
      "awayAverage": 26.6
    },
    "KALANIGOING": {
      "playerName": "Kalani Going",
      "key": "KALANIGOING",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 16.8,
      "last3Average": 19.3,
      "lastGameScore": 29,
      "scoreVolatility": 7.4,
      "homeAverage": 22,
      "awayAverage": 11.5
    },
    "BRANDONWAKEHAM": {
      "playerName": "Brandon Wakeham",
      "key": "BRANDONWAKEHAM",
      "primaryPosition": "Halfback",
      "gamesPlayed": 12,
      "currentPrice": 319000,
      "priceImpliedProjection": 24.9,
      "seasonAverage": 24.4,
      "last3Average": 22.7,
      "lastGameScore": 25,
      "scoreVolatility": 12.8,
      "homeAverage": 29.3,
      "awayAverage": 19.5
    },
    "THOMASFLEGLER": {
      "playerName": "Thomas Flegler",
      "key": "THOMASFLEGLER",
      "primaryPosition": "Prop",
      "gamesPlayed": 14,
      "currentPrice": 379000,
      "priceImpliedProjection": 29.6,
      "seasonAverage": 31.1,
      "last3Average": 33,
      "lastGameScore": 46,
      "scoreVolatility": 9.8,
      "homeAverage": 28.9,
      "awayAverage": 35.2
    },
    "BENTALTY": {
      "playerName": "Ben Talty",
      "key": "BENTALTY",
      "primaryPosition": "Prop",
      "gamesPlayed": 19,
      "currentPrice": 370000,
      "priceImpliedProjection": 28.9,
      "seasonAverage": 31.6,
      "last3Average": 28.3,
      "lastGameScore": 24,
      "scoreVolatility": 13,
      "homeAverage": 31.8,
      "awayAverage": 31.3
    },
    "JOSHROGERS": {
      "playerName": "Josh Rogers",
      "key": "JOSHROGERS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 4,
      "currentPrice": 318000,
      "priceImpliedProjection": 24.8,
      "seasonAverage": 31.3,
      "last3Average": 32.7,
      "lastGameScore": 31,
      "scoreVolatility": 8.6,
      "homeAverage": 24.5,
      "awayAverage": 38
    },
    "TOMMYTALAU": {
      "playerName": "Tommy Talau",
      "key": "TOMMYTALAU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 313000,
      "priceImpliedProjection": 24.5,
      "seasonAverage": 34.3,
      "last3Average": 34.3,
      "lastGameScore": 57,
      "scoreVolatility": 16.1,
      "homeAverage": 21,
      "awayAverage": 41
    },
    "BAYLEIGHBENTLEYHAPE": {
      "playerName": "Bayleigh Bentley-Hape",
      "key": "BAYLEIGHBENTLEYHAPE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "currentPrice": 265000,
      "priceImpliedProjection": 20.7,
      "seasonAverage": 36,
      "last3Average": 36,
      "lastGameScore": 36,
      "scoreVolatility": 0,
      "homeAverage": 36,
      "awayAverage": 36
    },
    "JENSENTAUMOEPEAU": {
      "playerName": "Jensen Taumoepeau",
      "key": "JENSENTAUMOEPEAU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 6,
      "currentPrice": 263000,
      "priceImpliedProjection": 20.5,
      "seasonAverage": 22.3,
      "last3Average": 18.7,
      "lastGameScore": 12,
      "scoreVolatility": 7.4,
      "homeAverage": 16.5,
      "awayAverage": 25.3
    },
    "JOCKMADDEN": {
      "playerName": "Jock Madden",
      "key": "JOCKMADDEN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 12,
      "currentPrice": 440000,
      "priceImpliedProjection": 34.4,
      "seasonAverage": 40.7,
      "last3Average": 31.3,
      "lastGameScore": 38,
      "scoreVolatility": 18.2,
      "homeAverage": 35.9,
      "awayAverage": 47.4
    },
    "MORGANKNOWLES": {
      "playerName": "Morgan Knowles",
      "key": "MORGANKNOWLES",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 395000,
      "priceImpliedProjection": 30.9,
      "seasonAverage": 34,
      "last3Average": 27.7,
      "lastGameScore": 40,
      "scoreVolatility": 11.6,
      "homeAverage": 31.4,
      "awayAverage": 37.3
    },
    "HAYZEPERHAM": {
      "playerName": "Hayze Perham",
      "key": "HAYZEPERHAM",
      "primaryPosition": "Fullback",
      "gamesPlayed": 4,
      "currentPrice": 264000,
      "priceImpliedProjection": 20.6,
      "seasonAverage": 26.3,
      "last3Average": 31.3,
      "lastGameScore": 49,
      "scoreVolatility": 14.9,
      "homeAverage": 39.5,
      "awayAverage": 13
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
      "gamesPlayed": 10,
      "currentPrice": 372000,
      "priceImpliedProjection": 29.1,
      "seasonAverage": 30.9,
      "last3Average": 25.3,
      "lastGameScore": 14,
      "scoreVolatility": 10.3,
      "homeAverage": 30.8,
      "awayAverage": 31
    },
    "WIREMUGREIG": {
      "playerName": "Wiremu Greig",
      "key": "WIREMUGREIG",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 10,
      "last3Average": 10,
      "lastGameScore": 8,
      "scoreVolatility": 2.2,
      "homeAverage": 9,
      "awayAverage": 10.5
    },
    "GORDONCHANKUMTONG": {
      "playerName": "Gordon Chan Kum Tong",
      "key": "GORDONCHANKUMTONG",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "currentPrice": 273000,
      "priceImpliedProjection": 21.3,
      "seasonAverage": 17,
      "last3Average": 17,
      "lastGameScore": 17,
      "scoreVolatility": 0,
      "homeAverage": 17,
      "awayAverage": 17
    },
    "CODYRAMSEY": {
      "playerName": "Cody Ramsey",
      "key": "CODYRAMSEY",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 371000,
      "priceImpliedProjection": 29,
      "seasonAverage": 32,
      "last3Average": 41,
      "lastGameScore": 50,
      "scoreVolatility": 14,
      "homeAverage": 32.4,
      "awayAverage": 31.3
    },
    "NIWHAIPURU": {
      "playerName": "Niwhai Puru",
      "key": "NIWHAIPURU",
      "primaryPosition": "Halfback",
      "gamesPlayed": 3,
      "currentPrice": 322000,
      "priceImpliedProjection": 25.2,
      "seasonAverage": 39.3,
      "last3Average": 39.3,
      "lastGameScore": 34,
      "scoreVolatility": 3.8,
      "homeAverage": 42,
      "awayAverage": 34
    },
    "JOSHUACORIC": {
      "playerName": "Joshua Coric",
      "key": "JOSHUACORIC",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 232000,
      "priceImpliedProjection": 18.1,
      "seasonAverage": 23,
      "last3Average": 23,
      "lastGameScore": 23,
      "scoreVolatility": 0,
      "homeAverage": 23,
      "awayAverage": 23
    },
    "JACKSONSHEREB": {
      "playerName": "Jackson Shereb",
      "key": "JACKSONSHEREB",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 4,
      "currentPrice": 306000,
      "priceImpliedProjection": 23.9,
      "seasonAverage": 29.5,
      "last3Average": 35.3,
      "lastGameScore": 13,
      "scoreVolatility": 18.3,
      "homeAverage": 34,
      "awayAverage": 25
    },
    "HUGOSAVALA": {
      "playerName": "Hugo Savala",
      "key": "HUGOSAVALA",
      "primaryPosition": "Halfback",
      "gamesPlayed": 15,
      "currentPrice": 432000,
      "priceImpliedProjection": 33.8,
      "seasonAverage": 35.1,
      "last3Average": 34,
      "lastGameScore": 45,
      "scoreVolatility": 11.8,
      "homeAverage": 37.2,
      "awayAverage": 33.8
    },
    "LUKEGALE": {
      "playerName": "Luke Gale",
      "key": "LUKEGALE",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 12,
      "last3Average": 12,
      "lastGameScore": 12,
      "scoreVolatility": 0,
      "homeAverage": 12,
      "awayAverage": 12
    },
    "LATRELLSIEGWALT": {
      "playerName": "Latrell Siegwalt",
      "key": "LATRELLSIEGWALT",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 489000,
      "priceImpliedProjection": 38.2,
      "seasonAverage": 43.9,
      "last3Average": 40.3,
      "lastGameScore": 30,
      "scoreVolatility": 8.7,
      "homeAverage": 50,
      "awayAverage": 40.2
    },
    "SETUTU": {
      "playerName": "Setu Tu",
      "key": "SETUTU",
      "primaryPosition": "Fullback",
      "gamesPlayed": 17,
      "currentPrice": 393000,
      "priceImpliedProjection": 30.7,
      "seasonAverage": 34.6,
      "last3Average": 24.7,
      "lastGameScore": 29,
      "scoreVolatility": 10.9,
      "homeAverage": 33.4,
      "awayAverage": 35.8
    },
    "DEANIEREMIA": {
      "playerName": "Dean Ieremia",
      "key": "DEANIEREMIA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 4,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 17.5,
      "last3Average": 18.3,
      "lastGameScore": 18,
      "scoreVolatility": 1.5,
      "homeAverage": 18.5,
      "awayAverage": 16.5
    },
    "RILEYPRICE": {
      "playerName": "Riley Price",
      "key": "RILEYPRICE",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 246000,
      "priceImpliedProjection": 19.2,
      "seasonAverage": 18,
      "last3Average": 18,
      "lastGameScore": 18,
      "scoreVolatility": 0,
      "homeAverage": 18,
      "awayAverage": 18
    },
    "HEILUMLUKI": {
      "playerName": "Heilum Luki",
      "key": "HEILUMLUKI",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 20,
      "currentPrice": 624000,
      "priceImpliedProjection": 48.8,
      "seasonAverage": 54.3,
      "last3Average": 53.3,
      "lastGameScore": 57,
      "scoreVolatility": 10.9,
      "homeAverage": 54.9,
      "awayAverage": 53.7
    },
    "NICHOLASLENAZ": {
      "playerName": "Nicholas Lenaz",
      "key": "NICHOLASLENAZ",
      "primaryPosition": null,
      "gamesPlayed": 1,
      "currentPrice": 242000,
      "priceImpliedProjection": 18.9,
      "seasonAverage": 14,
      "last3Average": 14,
      "lastGameScore": 14,
      "scoreVolatility": 0,
      "homeAverage": 14,
      "awayAverage": 14
    },
    "LACHLANCROUCH": {
      "playerName": "Lachlan Crouch",
      "key": "LACHLANCROUCH",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 285000,
      "priceImpliedProjection": 22.3,
      "seasonAverage": 27.8,
      "last3Average": 25.7,
      "lastGameScore": 29,
      "scoreVolatility": 4.1,
      "homeAverage": 34,
      "awayAverage": 25.7
    },
    "LIAMSUTTON": {
      "playerName": "Liam Sutton",
      "key": "LIAMSUTTON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 4,
      "currentPrice": 375000,
      "priceImpliedProjection": 29.3,
      "seasonAverage": 43,
      "last3Average": 46.7,
      "lastGameScore": 52,
      "scoreVolatility": 8.7,
      "homeAverage": 51.5,
      "awayAverage": 34.5
    },
    "CHARLIEMURRAY": {
      "playerName": "Charlie Murray",
      "key": "CHARLIEMURRAY",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 247000,
      "priceImpliedProjection": 19.3,
      "seasonAverage": 17.5,
      "last3Average": 17.5,
      "lastGameScore": 7,
      "scoreVolatility": 10.5,
      "homeAverage": 17.5,
      "awayAverage": 17.5
    },
    "TOMCHESTER": {
      "playerName": "Tom Chester",
      "key": "TOMCHESTER",
      "primaryPosition": "Fullback",
      "gamesPlayed": 19,
      "currentPrice": 449000,
      "priceImpliedProjection": 35.1,
      "seasonAverage": 43.9,
      "last3Average": 34.7,
      "lastGameScore": 20,
      "scoreVolatility": 16.8,
      "homeAverage": 47.3,
      "awayAverage": 40.8
    },
    "JOHNRADEL": {
      "playerName": "John Radel",
      "key": "JOHNRADEL",
      "primaryPosition": "Prop",
      "gamesPlayed": 4,
      "currentPrice": 315000,
      "priceImpliedProjection": 24.6,
      "seasonAverage": 33.5,
      "last3Average": 32.7,
      "lastGameScore": 36,
      "scoreVolatility": 10.9,
      "homeAverage": 41,
      "awayAverage": 26
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
    "TALANOAPENITANI": {
      "playerName": "Talanoa Penitani",
      "key": "TALANOAPENITANI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "currentPrice": 272000,
      "priceImpliedProjection": 21.3,
      "seasonAverage": 63,
      "last3Average": 63,
      "lastGameScore": 63,
      "scoreVolatility": 0,
      "homeAverage": 63,
      "awayAverage": 63
    },
    "ASHTONWARD": {
      "playerName": "Ashton Ward",
      "key": "ASHTONWARD",
      "primaryPosition": "Halfback",
      "gamesPlayed": 12,
      "currentPrice": 498000,
      "priceImpliedProjection": 38.9,
      "seasonAverage": 39.1,
      "last3Average": 43.3,
      "lastGameScore": 12,
      "scoreVolatility": 14.8,
      "homeAverage": 47.2,
      "awayAverage": 33.3
    },
    "BILLYSCOTT": {
      "playerName": "Billy Scott",
      "key": "BILLYSCOTT",
      "primaryPosition": null,
      "gamesPlayed": 5,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 10.8,
      "last3Average": 9,
      "lastGameScore": 7,
      "scoreVolatility": 4,
      "homeAverage": 9.7,
      "awayAverage": 12.5
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
    "JETTLIU": {
      "playerName": "Jett Liu",
      "key": "JETTLIU",
      "primaryPosition": "Prop",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 12.5,
      "last3Average": 12.5,
      "lastGameScore": 12,
      "scoreVolatility": 0.5,
      "homeAverage": 12,
      "awayAverage": 13
    },
    "SAXONPRYKE": {
      "playerName": "Saxon Pryke",
      "key": "SAXONPRYKE",
      "primaryPosition": "Prop",
      "gamesPlayed": 5,
      "currentPrice": 336000,
      "priceImpliedProjection": 26.3,
      "seasonAverage": 31,
      "last3Average": 25,
      "lastGameScore": 23,
      "scoreVolatility": 7.7,
      "homeAverage": 30.3,
      "awayAverage": 32
    },
    "VENAPATUKICASE": {
      "playerName": "Vena Patuki-Case",
      "key": "VENAPATUKICASE",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 19,
      "last3Average": 19,
      "lastGameScore": 19,
      "scoreVolatility": 0,
      "homeAverage": 19,
      "awayAverage": 19
    },
    "ETHANROBERTS": {
      "playerName": "Ethan Roberts",
      "key": "ETHANROBERTS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 3,
      "currentPrice": 301000,
      "priceImpliedProjection": 23.5,
      "seasonAverage": 38.7,
      "last3Average": 38.7,
      "lastGameScore": 64,
      "scoreVolatility": 18.1,
      "homeAverage": 29,
      "awayAverage": 43.5
    },
    "ARAZNANVA": {
      "playerName": "Araz Nanva",
      "key": "ARAZNANVA",
      "primaryPosition": "Centre",
      "gamesPlayed": 3,
      "currentPrice": 282000,
      "priceImpliedProjection": 22,
      "seasonAverage": 31,
      "last3Average": 31,
      "lastGameScore": 35,
      "scoreVolatility": 3.3,
      "homeAverage": 29,
      "awayAverage": 35
    },
    "JOSHFELEDY": {
      "playerName": "Josh Feledy",
      "key": "JOSHFELEDY",
      "primaryPosition": "Centre",
      "gamesPlayed": 8,
      "currentPrice": 234000,
      "priceImpliedProjection": 18.3,
      "seasonAverage": 19.8,
      "last3Average": 12.3,
      "lastGameScore": 20,
      "scoreVolatility": 11,
      "homeAverage": 25,
      "awayAverage": 14.5
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
      "gamesPlayed": 7,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 14.7,
      "last3Average": 12,
      "lastGameScore": 14,
      "scoreVolatility": 11.5,
      "homeAverage": 20.5,
      "awayAverage": 12.4
    },
    "KEAGANRUSSELLSMITH": {
      "playerName": "Keagan Russell-Smith",
      "key": "KEAGANRUSSELLSMITH",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 247000,
      "priceImpliedProjection": 19.3,
      "seasonAverage": 39,
      "last3Average": 39,
      "lastGameScore": 39,
      "scoreVolatility": 0,
      "homeAverage": 39,
      "awayAverage": 39
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
      "gamesPlayed": 15,
      "currentPrice": 778000,
      "priceImpliedProjection": 60.8,
      "seasonAverage": 62.9,
      "last3Average": 82,
      "lastGameScore": 97,
      "scoreVolatility": 14.1,
      "homeAverage": 64,
      "awayAverage": 62
    },
    "FLETCHERHUNT": {
      "playerName": "Fletcher Hunt",
      "key": "FLETCHERHUNT",
      "primaryPosition": "Fullback",
      "gamesPlayed": 14,
      "currentPrice": 316000,
      "priceImpliedProjection": 24.7,
      "seasonAverage": 31.3,
      "last3Average": 24.7,
      "lastGameScore": 30,
      "scoreVolatility": 19.5,
      "homeAverage": 28.5,
      "awayAverage": 33.4
    },
    "BILLYPHILLIPS": {
      "playerName": "Billy Phillips",
      "key": "BILLYPHILLIPS",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 16,
      "currentPrice": 365000,
      "priceImpliedProjection": 28.5,
      "seasonAverage": 27.4,
      "last3Average": 11.7,
      "lastGameScore": 5,
      "scoreVolatility": 15.2,
      "homeAverage": 29.1,
      "awayAverage": 25.6
    },
    "TEANCUMBROWN": {
      "playerName": "Teancum Brown",
      "key": "TEANCUMBROWN",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 306000,
      "priceImpliedProjection": 23.9,
      "seasonAverage": 26.4,
      "last3Average": 34.7,
      "lastGameScore": 31,
      "scoreVolatility": 10.1,
      "homeAverage": 20.5,
      "awayAverage": 34.3
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
    "JEDREARDON": {
      "playerName": "Jed Reardon",
      "key": "JEDREARDON",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 5.5,
      "last3Average": 5.5,
      "lastGameScore": 1,
      "scoreVolatility": 4.5,
      "homeAverage": 10,
      "awayAverage": 1
    },
    "JAIBOWDEN": {
      "playerName": "Jai Bowden",
      "key": "JAIBOWDEN",
      "primaryPosition": null,
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
    "STANLEYHUEN": {
      "playerName": "Stanley Huen",
      "key": "STANLEYHUEN",
      "primaryPosition": "Halfback",
      "gamesPlayed": 4,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 12.3,
      "last3Average": 15.7,
      "lastGameScore": 22,
      "scoreVolatility": 8.1,
      "homeAverage": 2,
      "awayAverage": 15.7
    },
    "REECEFOLEY": {
      "playerName": "Reece Foley",
      "key": "REECEFOLEY",
      "primaryPosition": "Halfback",
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
    "XAVIERKERRISK": {
      "playerName": "Xavier Kerrisk",
      "key": "XAVIERKERRISK",
      "primaryPosition": null,
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
    "JACKUNDERHILL": {
      "playerName": "Jack Underhill",
      "key": "JACKUNDERHILL",
      "primaryPosition": "Prop",
      "gamesPlayed": 7,
      "currentPrice": 273000,
      "priceImpliedProjection": 21.3,
      "seasonAverage": 24.4,
      "last3Average": 19,
      "lastGameScore": 15,
      "scoreVolatility": 8.6,
      "homeAverage": 21.3,
      "awayAverage": 28.7
    },
    "ANGUSHINCHEY": {
      "playerName": "Angus Hinchey",
      "key": "ANGUSHINCHEY",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 14.5,
      "last3Average": 14.5,
      "lastGameScore": 24,
      "scoreVolatility": 9.5,
      "homeAverage": 24,
      "awayAverage": 5
    },
    "BLAKEMOZER": {
      "playerName": "Blake Mozer",
      "key": "BLAKEMOZER",
      "primaryPosition": null,
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 14.3,
      "last3Average": 14.3,
      "lastGameScore": 12,
      "scoreVolatility": 4.8,
      "homeAverage": 14.3,
      "awayAverage": 14.3
    },
    "VAASEMU": {
      "playerName": "Va'a Semu",
      "key": "VAASEMU",
      "primaryPosition": "Prop",
      "gamesPlayed": 9,
      "currentPrice": 247000,
      "priceImpliedProjection": 19.3,
      "seasonAverage": 21.1,
      "last3Average": 25.3,
      "lastGameScore": 35,
      "scoreVolatility": 7.5,
      "homeAverage": 19.2,
      "awayAverage": 23.5
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
    "MAKAIATAFUA": {
      "playerName": "Makaia Tafua",
      "key": "MAKAIATAFUA",
      "primaryPosition": null,
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 11.5,
      "last3Average": 11.5,
      "lastGameScore": 13,
      "scoreVolatility": 1.5,
      "homeAverage": 11.5,
      "awayAverage": 11.5
    },
    "ETHANKING": {
      "playerName": "Ethan King",
      "key": "ETHANKING",
      "primaryPosition": "Fullback",
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 10,
      "last3Average": 10,
      "lastGameScore": 3,
      "scoreVolatility": 9.2,
      "homeAverage": 3.5,
      "awayAverage": 23
    },
    "OLIVERPASCOE": {
      "playerName": "Oliver Pascoe",
      "key": "OLIVERPASCOE",
      "primaryPosition": null,
      "gamesPlayed": 16,
      "currentPrice": 656000,
      "priceImpliedProjection": 51.3,
      "seasonAverage": 48.1,
      "last3Average": 58.7,
      "lastGameScore": 36,
      "scoreVolatility": 18.1,
      "homeAverage": 41.3,
      "awayAverage": 54.9
    },
    "ZANEHARRISON": {
      "playerName": "Zane Harrison",
      "key": "ZANEHARRISON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 11,
      "currentPrice": 442000,
      "priceImpliedProjection": 34.5,
      "seasonAverage": 37.7,
      "last3Average": 30.3,
      "lastGameScore": 29,
      "scoreVolatility": 11.4,
      "homeAverage": 37.6,
      "awayAverage": 37.8
    },
    "SIMIONELAIAFI": {
      "playerName": "Simione Laiafi",
      "key": "SIMIONELAIAFI",
      "primaryPosition": "Prop",
      "gamesPlayed": 10,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 17.7,
      "last3Average": 22.7,
      "lastGameScore": 30,
      "scoreVolatility": 6.1,
      "homeAverage": 18.2,
      "awayAverage": 17.2
    },
    "JORDANUTA": {
      "playerName": "Jordan Uta",
      "key": "JORDANUTA",
      "primaryPosition": "2nd Row",
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
    "HAYDENBUCHANAN": {
      "playerName": "Hayden Buchanan",
      "key": "HAYDENBUCHANAN",
      "primaryPosition": "Centre",
      "gamesPlayed": 3,
      "currentPrice": 257000,
      "priceImpliedProjection": 20.1,
      "seasonAverage": 7.7,
      "last3Average": 7.7,
      "lastGameScore": -3,
      "scoreVolatility": 7.5,
      "homeAverage": -3,
      "awayAverage": 13
    },
    "KADEREED": {
      "playerName": "Kade Reed",
      "key": "KADEREED",
      "primaryPosition": "Halfback",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 21.5,
      "last3Average": 21.5,
      "lastGameScore": 37,
      "scoreVolatility": 15.5,
      "homeAverage": 21.5,
      "awayAverage": 21.5
    },
    "JONATHANSUA": {
      "playerName": "Jonathan Sua",
      "key": "JONATHANSUA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 5,
      "currentPrice": 275000,
      "priceImpliedProjection": 21.5,
      "seasonAverage": 23.4,
      "last3Average": 20,
      "lastGameScore": 19,
      "scoreVolatility": 8.3,
      "homeAverage": 29,
      "awayAverage": 22
    },
    "TOBYRODWELL": {
      "playerName": "Toby Rodwell",
      "key": "TOBYRODWELL",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 246000,
      "priceImpliedProjection": 19.2,
      "seasonAverage": 39,
      "last3Average": 39,
      "lastGameScore": 39,
      "scoreVolatility": 0,
      "homeAverage": 39,
      "awayAverage": 39
    },
    "JOSESELANYON": {
      "playerName": "Josese Lanyon",
      "key": "JOSESELANYON",
      "primaryPosition": null,
      "gamesPlayed": 4,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 19.5,
      "last3Average": 15,
      "lastGameScore": 22,
      "scoreVolatility": 9.2,
      "homeAverage": 21,
      "awayAverage": 15
    },
    "BRIANPOUNIU": {
      "playerName": "Brian Pouniu",
      "key": "BRIANPOUNIU",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 1,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 16,
      "last3Average": 16,
      "lastGameScore": 16,
      "scoreVolatility": 0,
      "homeAverage": 16,
      "awayAverage": 16
    },
    "GABRIELSATRICK": {
      "playerName": "Gabriel Satrick",
      "key": "GABRIELSATRICK",
      "primaryPosition": null,
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
    "JAREDHAYWOOD": {
      "playerName": "Jared Haywood",
      "key": "JAREDHAYWOOD",
      "primaryPosition": null,
      "gamesPlayed": 3,
      "currentPrice": 254000,
      "priceImpliedProjection": 19.8,
      "seasonAverage": 22.3,
      "last3Average": 22.3,
      "lastGameScore": 17,
      "scoreVolatility": 12.8,
      "homeAverage": 40,
      "awayAverage": 13.5
    },
    "HUGOPEEL": {
      "playerName": "Hugo Peel",
      "key": "HUGOPEEL",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 11.5,
      "last3Average": 11.5,
      "lastGameScore": 11,
      "scoreVolatility": 0.5,
      "homeAverage": 11,
      "awayAverage": 12
    },
    "FRANCISMANULELEUA": {
      "playerName": "Francis Manuleleua",
      "key": "FRANCISMANULELEUA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 8,
      "currentPrice": 444000,
      "priceImpliedProjection": 34.7,
      "seasonAverage": 38.1,
      "last3Average": 55.7,
      "lastGameScore": 54,
      "scoreVolatility": 20.2,
      "homeAverage": 33.2,
      "awayAverage": 46.3
    },
    "ALEKOLASIMIJONES": {
      "playerName": "Alekolasimi Jones",
      "key": "ALEKOLASIMIJONES",
      "primaryPosition": "Prop",
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 17,
      "last3Average": 17,
      "lastGameScore": 9,
      "scoreVolatility": 5.7,
      "homeAverage": 15,
      "awayAverage": 21
    },
    "COOPERCLARKE": {
      "playerName": "Cooper Clarke",
      "key": "COOPERCLARKE",
      "primaryPosition": "Prop",
      "gamesPlayed": 20,
      "currentPrice": 552000,
      "priceImpliedProjection": 43.1,
      "seasonAverage": 39,
      "last3Average": 48.3,
      "lastGameScore": 35,
      "scoreVolatility": 12.7,
      "homeAverage": 41,
      "awayAverage": 36.9
    },
    "REXBASSINGTHWAIGHTE": {
      "playerName": "Rex Bassingthwaighte",
      "key": "REXBASSINGTHWAIGHTE",
      "primaryPosition": "Fullback",
      "gamesPlayed": 2,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 15.5,
      "last3Average": 15.5,
      "lastGameScore": -2,
      "scoreVolatility": 17.5,
      "homeAverage": -2,
      "awayAverage": 33
    },
    "JETHRORINAKAMA": {
      "playerName": "Jethro Rinakama",
      "key": "JETHRORINAKAMA",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 468000,
      "priceImpliedProjection": 36.6,
      "seasonAverage": 40.8,
      "last3Average": 44,
      "lastGameScore": 47,
      "scoreVolatility": 12.9,
      "homeAverage": 36.4,
      "awayAverage": 48
    },
    "SIALETILIFAEAMANI": {
      "playerName": "Sialetili Faeamani",
      "key": "SIALETILIFAEAMANI",
      "primaryPosition": "Fullback",
      "gamesPlayed": 8,
      "currentPrice": 386000,
      "priceImpliedProjection": 30.2,
      "seasonAverage": 31.8,
      "last3Average": 39.7,
      "lastGameScore": 22,
      "scoreVolatility": 10.9,
      "homeAverage": 22.3,
      "awayAverage": 37.4
    },
    "COOPERBAI": {
      "playerName": "Cooper Bai",
      "key": "COOPERBAI",
      "primaryPosition": "Prop",
      "gamesPlayed": 18,
      "currentPrice": 244000,
      "priceImpliedProjection": 19.1,
      "seasonAverage": 27.4,
      "last3Average": 19,
      "lastGameScore": 16,
      "scoreVolatility": 13.4,
      "homeAverage": 25.7,
      "awayAverage": 28.5
    },
    "PHILLIPCOATES": {
      "playerName": "Phillip Coates",
      "key": "PHILLIPCOATES",
      "primaryPosition": "Fullback",
      "gamesPlayed": 1,
      "currentPrice": 242000,
      "priceImpliedProjection": 18.9,
      "seasonAverage": 31,
      "last3Average": 31,
      "lastGameScore": 31,
      "scoreVolatility": 0,
      "homeAverage": 31,
      "awayAverage": 31
    },
    "JOHNFINEANGANOFO": {
      "playerName": "John Fineanganofo",
      "key": "JOHNFINEANGANOFO",
      "primaryPosition": null,
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
    "HAYDENWATSON": {
      "playerName": "Hayden Watson",
      "key": "HAYDENWATSON",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 256000,
      "priceImpliedProjection": 20,
      "seasonAverage": 46,
      "last3Average": 46,
      "lastGameScore": 46,
      "scoreVolatility": 0,
      "homeAverage": 46,
      "awayAverage": 46
    },
    "SEBASTIANSUA": {
      "playerName": "Sebastian Su'a",
      "key": "SEBASTIANSUA",
      "primaryPosition": "Prop",
      "gamesPlayed": 1,
      "currentPrice": 251000,
      "priceImpliedProjection": 19.6,
      "seasonAverage": 24,
      "last3Average": 24,
      "lastGameScore": 24,
      "scoreVolatility": 0,
      "homeAverage": 24,
      "awayAverage": 24
    },
    "JAVONANDREWS": {
      "playerName": "Javon Andrews",
      "key": "JAVONANDREWS",
      "primaryPosition": "Halfback",
      "gamesPlayed": 1,
      "currentPrice": 245000,
      "priceImpliedProjection": 19.1,
      "seasonAverage": 35,
      "last3Average": 35,
      "lastGameScore": 35,
      "scoreVolatility": 0,
      "homeAverage": 35,
      "awayAverage": 35
    },
    "EDDIEIEREMIATOEAVA": {
      "playerName": "Eddie Ieremia-Toeava",
      "key": "EDDIEIEREMIATOEAVA",
      "primaryPosition": "2nd Row",
      "gamesPlayed": 7,
      "currentPrice": 452000,
      "priceImpliedProjection": 35.3,
      "seasonAverage": 40.7,
      "last3Average": 55,
      "lastGameScore": 83,
      "scoreVolatility": 21,
      "homeAverage": 36.5,
      "awayAverage": 42.4
    },
    "DAYNEJENNINGS": {
      "playerName": "Dayne Jennings",
      "key": "DAYNEJENNINGS",
      "primaryPosition": "Centre",
      "gamesPlayed": 3,
      "currentPrice": 236000,
      "priceImpliedProjection": 18.4,
      "seasonAverage": 19,
      "last3Average": 19,
      "lastGameScore": -1,
      "scoreVolatility": 24.8,
      "homeAverage": -1,
      "awayAverage": 29
    },
    "ANTONIOVERHOEVEN": {
      "playerName": "Antonio Verhoeven",
      "key": "ANTONIOVERHOEVEN",
      "primaryPosition": "Centre",
      "gamesPlayed": 3,
      "currentPrice": 230000,
      "priceImpliedProjection": 18,
      "seasonAverage": 19,
      "last3Average": 19,
      "lastGameScore": 27,
      "scoreVolatility": 8.6,
      "homeAverage": 19,
      "awayAverage": 19
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
      },
      {
        "round": 13,
        "score": 79,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 54,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 17,
        "score": 83,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 58,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 55,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 60,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 70,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 70,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 86,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 61,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 83,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 78,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 84,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 51,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 61,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 67,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 50,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 63,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 21,
        "opponent": "Titans",
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
      },
      {
        "round": 9,
        "score": 82,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 95,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 58,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 85,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 64,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 20,
        "score": 34,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 88,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 90,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 63,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 40,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 93,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 63,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 76,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 60,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 65,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 45,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 34,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 60,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 82,
        "opponent": "Dragons",
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
      },
      {
        "round": 10,
        "score": 52,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 65,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 57,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 16,
        "score": 70,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 56,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 17,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 35,
        "opponent": "Rabbitohs",
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
      },
      {
        "round": 9,
        "score": 67,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 33,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 49,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 63,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 66,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 45,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 75,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 66,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 60,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 96,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 45,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 71,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 42,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 56,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 47,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 20,
        "score": 55,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 49,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 80,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 59,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 62,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 59,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 58,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 47,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 34,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 42,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 56,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 39,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 49,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 53,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 55,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 60,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 76,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 53,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 62,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 53,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 22,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 53,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 49,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 50,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 41,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 49,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 81,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 61,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 47,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 56,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 90,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 72,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 17,
        "score": 79,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 71,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 76,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 63,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 16,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 58,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 44,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 62,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 4,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 19,
        "score": 39,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 45,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 71,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 74,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 39,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 35,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 66,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 37,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 43,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 54,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 51,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 47,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 35,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 41,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 80,
        "opponent": "Broncos",
        "team": "Knights",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 67,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 50,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 64,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 55,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 68,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 17,
        "score": 2,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 48,
        "opponent": "Dragons",
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
      },
      {
        "round": 9,
        "score": 37,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 28,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 56,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 37,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 45,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 50,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 69,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 78,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 66,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 59,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 56,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 51,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 81,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 70,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 16,
        "score": 50,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 64,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 107,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 55,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 106,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 105,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 12,
        "score": 42,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 49,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 72,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 18,
        "score": 42,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 60,
        "opponent": "Sharks",
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
      },
      {
        "round": 10,
        "score": 69,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 59,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 57,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 59,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 7,
        "opponent": "Titans",
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
      },
      {
        "round": 10,
        "score": 57,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 83,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 81,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 62,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 50,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 52,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 69,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 70,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 82,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 77,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 21,
        "opponent": "Dolphins",
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
      },
      {
        "round": 11,
        "score": 48,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 42,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 74,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 33,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 60,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 57,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 55,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 50,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 44,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 57,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 46,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 44,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 13,
        "score": 48,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 16,
        "score": 53,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 51,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 49,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 68,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 51,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 80,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 19,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 40,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 27,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 48,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 45,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 21,
        "score": 67,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 51,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 73,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 58,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 52,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 27,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 60,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 59,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 52,
        "opponent": "Knights",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "MATTYNICHOLSON": [
      {
        "round": 21,
        "score": 7,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 41,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 58,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 69,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 34,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 54,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 46,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 57,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 52,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 39,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 52,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 61,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 49,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 34,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 47,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 47,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 48,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 78,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 31,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 76,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 42,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 34,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 57,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 57,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 57,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 14,
        "score": 41,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 17,
        "score": 68,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 38,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 74,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 43,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 58,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 46,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 41,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 29,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 57,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 43,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 50,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 37,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 46,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 52,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 56,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 36,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 60,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 68,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 57,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 47,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 58,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 63,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 64,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 37,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 49,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 55,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 70,
        "opponent": "Panthers",
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
      },
      {
        "round": 12,
        "score": 83,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 85,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 72,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 53,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 33,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 22,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 57,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 28,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 42,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 66,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 48,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 68,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 16,
        "score": 43,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 29,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 28,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 57,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 58,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 21,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 32,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 45,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 59,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 17,
        "score": 45,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 80,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 44,
        "opponent": "Knights",
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
      },
      {
        "round": 12,
        "score": 63,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 63,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 59,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 51,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 42,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 51,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 83,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 49,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 24,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 52,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 32,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 13,
        "score": 65,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 30,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 70,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 42,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 29,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 49,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 39,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 57,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 63,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 88,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 68,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 60,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 60,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 37,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 57,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 48,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 58,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 6,
        "opponent": "Rabbitohs",
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
      },
      {
        "round": 10,
        "score": 28,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 43,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 26,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 65,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 41,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 19,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 80,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 13,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 25,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 69,
        "opponent": "Dolphins",
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
      },
      {
        "round": 11,
        "score": 41,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 54,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 66,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 55,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 50,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 78,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 43,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 50,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 41,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 8,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 47,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 44,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 44,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 20,
        "score": 42,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 34,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": -2,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 45,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 53,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 70,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 81,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 45,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 57,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 58,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 9,
        "score": 27,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 57,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 55,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 26,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 37,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 65,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 42,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 49,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 75,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 35,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 45,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 59,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 54,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 43,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 58,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 49,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 49,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 46,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 53,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 36,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 31,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 77,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 26,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 23,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 63,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 38,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 53,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 31,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 45,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 32,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 46,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 60,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 42,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 55,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 59,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 53,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 46,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 39,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 86,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 78,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 50,
        "opponent": "Tigers",
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
      },
      {
        "round": 14,
        "score": 11,
        "opponent": "Sharks",
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
      },
      {
        "round": 10,
        "score": 45,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 88,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 68,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 60,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 40,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 27,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 43,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 22,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 33,
        "opponent": "Dolphins",
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
      },
      {
        "round": 20,
        "score": 35,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 50,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 51,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 53,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 70,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 20,
        "score": 62,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 74,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 53,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 34,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 39,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 37,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 46,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 42,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 31,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 72,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 10,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
      }
    ],
    "JOHNBATEMAN": [
      {
        "round": 16,
        "score": 28,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 32,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 90,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 44,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 55,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 49,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 57,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 22,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 37,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 28,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 76,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 15,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 48,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 37,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 33,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 47,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 34,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 22,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "JEREMYMARSHALLKING": [
      {
        "round": 10,
        "score": 35,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 39,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 39,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 67,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 61,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 54,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 52,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 33,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 37,
        "opponent": "Dragons",
        "team": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 53,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 39,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 47,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 76,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 42,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 51,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 61,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 53,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 62,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 31,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 40,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 51,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 53,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 71,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 40,
        "opponent": "Dragons",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "DYLANEGAN": [
      {
        "round": 10,
        "score": 36,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 55,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 68,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 57,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 65,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 66,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 39,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 51,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 53,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 41,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 43,
        "opponent": "Dolphins",
        "team": "Dragons",
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
      },
      {
        "round": 9,
        "score": 31,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 22,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 26,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 36,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 22,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 23,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 20,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 13,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 39,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 54,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 50,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 53,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 66,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 50,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 52,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 46,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 2,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 14,
        "score": 76,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 65,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 15,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 46,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 13,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 80,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 50,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 48,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 15,
        "score": 47,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 43,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 47,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 67,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 41,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 31,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 63,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 72,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 54,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 28,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 57,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 75,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 50,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 2,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 61,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 43,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 34,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 104,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 24,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 48,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 33,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 9,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 63,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 55,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 43,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 72,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 56,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 57,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 46,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 50,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 41,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 32,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 55,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 50,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 85,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 51,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 88,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 68,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 61,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 72,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 19,
        "score": 62,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 71,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 55,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 61,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 76,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 57,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 50,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 48,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 20,
        "score": 44,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 55,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 69,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 9,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 16,
        "score": 28,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 10,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 19,
        "opponent": "Dragons",
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
      },
      {
        "round": 9,
        "score": 7,
        "opponent": "Knights",
        "team": "Rabbitohs",
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
      },
      {
        "round": 9,
        "score": 41,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 38,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 37,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 17,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 80,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 47,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 44,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 31,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 52,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 44,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 62,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 38,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 58,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 49,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 45,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 51,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 40,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 33,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 21,
        "score": 62,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 36,
        "opponent": "Tigers",
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
      },
      {
        "round": 11,
        "score": 47,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 54,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 39,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 47,
        "opponent": "Titans",
        "team": "Warriors",
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
      },
      {
        "round": 9,
        "score": 53,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 5,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 11,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 45,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 32,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 56,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 55,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 48,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 24,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 43,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 37,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 50,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 57,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 75,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 37,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 53,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 20,
        "score": 31,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 41,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 41,
        "opponent": "Broncos",
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
      },
      {
        "round": 13,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 55,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 53,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 51,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 37,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 20,
        "score": 41,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 44,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 34,
        "opponent": "Eels",
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
      },
      {
        "round": 10,
        "score": 67,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 69,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 50,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 57,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 31,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 19,
        "score": 47,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 21,
        "score": 64,
        "opponent": "Rabbitohs",
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
      },
      {
        "round": 9,
        "score": 47,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 42,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 62,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 44,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 52,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 30,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 49,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 36,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 47,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 66,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 48,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 34,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 44,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 37,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 20,
        "score": 55,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 56,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 46,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 56,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 53,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 46,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 76,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 61,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 59,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 47,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 62,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 82,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 45,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 25,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 44,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 45,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 17,
        "score": 26,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 27,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 65,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 38,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 38,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 44,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 54,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 28,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 57,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 34,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 27,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 23,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 30,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 7,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 8,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 35,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 12,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 81,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 66,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 13,
        "score": 72,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 18,
        "score": 60,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 58,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 41,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 51,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 60,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 42,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 69,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 16,
        "score": 54,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 46,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 64,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 38,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 44,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 29,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 43,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 76,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 48,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 40,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 55,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 65,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 42,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 46,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 39,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 54,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 53,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 39,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 41,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 53,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 55,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 9,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 74,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 41,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 72,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 20,
        "score": 46,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 38,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 106,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 59,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 42,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 41,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 44,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 40,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 24,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 55,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 36,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 44,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 37,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 57,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 13,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 13,
        "score": 40,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 33,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 54,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 75,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 31,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 52,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 21,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 35,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 30,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 34,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 57,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 81,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 40,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 57,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 34,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 39,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 50,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 64,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 63,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 59,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 32,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 36,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 64,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 67,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 40,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 33,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 9,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 15,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 39,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 25,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 31,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 30,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 62,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 46,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 62,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 41,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 19,
        "score": 18,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 52,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 49,
        "opponent": "Dragons",
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
      },
      {
        "round": 9,
        "score": 28,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 26,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 31,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 67,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 36,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 38,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 49,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 42,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 49,
        "opponent": "Dragons",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 51,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 12,
        "score": 2,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 22,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 54,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 64,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 50,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 92,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 20,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 30,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 69,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 16,
        "score": 54,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 39,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 46,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 13,
        "score": 44,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 43,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 62,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 57,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 67,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 39,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 39,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 31,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 61,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 29,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 36,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 40,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 62,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 69,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 36,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 41,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 37,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 39,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 60,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 28,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 59,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 47,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 64,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 45,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 41,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 56,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 60,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 35,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 60,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 46,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 40,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 35,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 54,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 53,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 18,
        "score": 22,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 31,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 64,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 22,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 34,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 36,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 70,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 42,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 62,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 62,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 63,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 49,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 60,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 57,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 35,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 56,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 83,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 45,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 55,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 38,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 19,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 23,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 52,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 27,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 40,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 34,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 36,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 49,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 17,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 14,
        "score": 14,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 17,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 7,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 41,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 49,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 19,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 28,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 37,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 21,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 28,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 32,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 32,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 38,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 22,
        "score": 25,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 25,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 41,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 65,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 50,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 29,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 72,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 43,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 57,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 74,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 29,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 40,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 51,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 25,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 66,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 44,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 53,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 74,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 47,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 71,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 50,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 58,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 39,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 58,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 48,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 46,
        "opponent": "Storm",
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
      },
      {
        "round": 11,
        "score": 14,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 33,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 17,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 24,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 29,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 38,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 23,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 22,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 44,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 52,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 27,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 86,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 32,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 40,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 64,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 45,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 19,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 12,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 20,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 74,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 31,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 48,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 45,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 30,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 33,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 28,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 22,
        "score": 40,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 61,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 36,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 31,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 27,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 46,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 51,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 49,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 20,
        "score": 58,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 61,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 47,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 65,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 85,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 43,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 40,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 81,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 17,
        "score": 37,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 65,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 57,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 22,
        "score": 60,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 28,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 40,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 44,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 34,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 11,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 19,
        "score": 49,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 15,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 56,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 35,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 12,
        "score": 55,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 70,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 64,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 18,
        "score": 30,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 55,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
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
      },
      {
        "round": 16,
        "score": 54,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 44,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 49,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 53,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 20,
        "opponent": "Titans",
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
      },
      {
        "round": 9,
        "score": 67,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 116,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 52,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 50,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 21,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 49,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 31,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 12,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 40,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 70,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 19,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 46,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 53,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 38,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 50,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 17,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 26,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 39,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 26,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 42,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 53,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 13,
        "score": 26,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 42,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 52,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 63,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 27,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 39,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 67,
        "opponent": "Storm",
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
      },
      {
        "round": 10,
        "score": 35,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 48,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 35,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 16,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 32,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 38,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 34,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 19,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 22,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 32,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 16,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 28,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 42,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 84,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 58,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 32,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 22,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 28,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 22,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 17,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 28,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 43,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 42,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 49,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 36,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 26,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 24,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 46,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 57,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 64,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 51,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 17,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 76,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 47,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 32,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": true
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
      },
      {
        "round": 10,
        "score": 10,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 18,
        "score": 25,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 24,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 35,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 32,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 24,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 51,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 43,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 50,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 59,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 56,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 50,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "RONALDOMULITALO": [
      {
        "round": 11,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 20,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 69,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 34,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 31,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 21,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 44,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 30,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 63,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 64,
        "opponent": "Rabbitohs",
        "team": "Sharks",
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
      },
      {
        "round": 9,
        "score": 47,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 26,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 30,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 38,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 62,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 47,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 44,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 69,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 34,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 42,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 27,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 33,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 52,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 46,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 18,
        "score": 27,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 26,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 25,
        "opponent": "Dragons",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "LIAMHENRY": [
      {
        "round": 10,
        "score": 54,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 45,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 33,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 54,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 48,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 83,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 27,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 40,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 56,
        "opponent": "Raiders",
        "team": "Panthers",
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
      },
      {
        "round": 9,
        "score": 29,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 29,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 34,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 32,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 52,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 32,
        "opponent": "Cowboys",
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
      },
      {
        "round": 14,
        "score": 21,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 25,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 14,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 48,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 37,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 36,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 18,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 43,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 18,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 27,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 21,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 51,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 28,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 25,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 54,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 48,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 56,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 53,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 32,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 11,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 16,
        "score": 26,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 37,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 44,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 46,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 25,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 35,
        "opponent": "Broncos",
        "team": "Knights",
        "isHome": false
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
      },
      {
        "round": 13,
        "score": 45,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 34,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 35,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 39,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 33,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 24,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 22,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 14,
        "opponent": "Roosters",
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
      },
      {
        "round": 10,
        "score": 66,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 56,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 16,
        "score": 29,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 47,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 19,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 54,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 42,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 63,
        "opponent": "Panthers",
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
      },
      {
        "round": 10,
        "score": 12,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 45,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 30,
        "opponent": "Warriors",
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
      },
      {
        "round": 9,
        "score": 40,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 42,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 31,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 25,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 48,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 13,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 51,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 28,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 68,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 40,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 50,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 59,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 47,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 18,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 62,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 45,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 42,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 59,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 7,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 9,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 9,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 47,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 44,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 46,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 32,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 50,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 31,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 27,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 30,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 37,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 56,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 65,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 58,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 46,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 68,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 38,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 5,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 21,
        "score": 21,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 19,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 25,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 71,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 31,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 89,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 34,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 56,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 69,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 46,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 22,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 56,
        "opponent": "Raiders",
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
      },
      {
        "round": 10,
        "score": 14,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 44,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 28,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 22,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 41,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 10,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 26,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 44,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 60,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 30,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 40,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 41,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 37,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 30,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 31,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 42,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 40,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 20,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 33,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 47,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 23,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 43,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 30,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 26,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 37,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 31,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 27,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 46,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 63,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 20,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 12,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 28,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 54,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 54,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 25,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 34,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 57,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 30,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 45,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 29,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 30,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 55,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 32,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 38,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 29,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 45,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 68,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Broncos",
        "team": "Knights",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 22,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 40,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 13,
        "score": 23,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 10,
        "score": 55,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 22,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 14,
        "score": 28,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 46,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 47,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 57,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 30,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 21,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 27,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 32,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 18,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 43,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 44,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 38,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 48,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 57,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 31,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 42,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 25,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 28,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 26,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 10,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 16,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 23,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 34,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 27,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 63,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 17,
        "opponent": "Sharks",
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
      },
      {
        "round": 13,
        "score": 46,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 30,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 32,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 20,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 21,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 23,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 27,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 32,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 30,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 24,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 26,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 49,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 32,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 5,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 42,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 65,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 49,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 51,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 51,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 40,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 37,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 32,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 17,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 24,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 20,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 25,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 38,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 13,
        "score": 52,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 45,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 61,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 27,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 73,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 34,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 53,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 33,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 29,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 39,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 46,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 13,
        "score": 21,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 52,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 19,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 51,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 42,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 25,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 35,
        "opponent": "Sharks",
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
      },
      {
        "round": 10,
        "score": 58,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 21,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 46,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 43,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 43,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 44,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 24,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 17,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 32,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 38,
        "opponent": "Dragons",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 24,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 27,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 26,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 42,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 28,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 27,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 47,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 32,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 30,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 45,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 35,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 48,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 60,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 22,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 51,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 21,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": false
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
      },
      {
        "round": 13,
        "score": 23,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 54,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 64,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 23,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 20,
        "score": 57,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 71,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 52,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 31,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 53,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 36,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 31,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 29,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 19,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 13,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 12,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 21,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 19,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 13,
        "score": 10,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 40,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 51,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 29,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 19,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 21,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 45,
        "opponent": "Bulldogs",
        "team": "Tigers",
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
      },
      {
        "round": 9,
        "score": 71,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 59,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 41,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 53,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 38,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 39,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 21,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 10,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 36,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 57,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 17,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 35,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 15,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 17,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 29,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 34,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 47,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 34,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 43,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 22,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 31,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 24,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 20,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 21,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 29,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 39,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 38,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 3,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 19,
        "score": 49,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 48,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 7,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 30,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 34,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 30,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 12,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 91,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 60,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 20,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 38,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 31,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 27,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 26,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 65,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 39,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 45,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 46,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 64,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 77,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 37,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 62,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 72,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 60,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 41,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 34,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 44,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 56,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 45,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 54,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 41,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 52,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 40,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 44,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 37,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 24,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 33,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 71,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 53,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 44,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 43,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 16,
        "score": 28,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 40,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 74,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 52,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 57,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 63,
        "opponent": "Dragons",
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
      },
      {
        "round": 15,
        "score": 25,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 81,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 36,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 46,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 21,
        "score": 48,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 55,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 39,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 104,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 30,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 35,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 44,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 57,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 36,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 51,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 53,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 30,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 58,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 33,
        "opponent": "Dragons",
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
      },
      {
        "round": 18,
        "score": 48,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 18,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 33,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 38,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 45,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 55,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 30,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 20,
        "score": 2,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 46,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 26,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 22,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 22,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 30,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 29,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 41,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 24,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 35,
        "opponent": "Broncos",
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
      },
      {
        "round": 11,
        "score": 39,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 27,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 41,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 27,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 23,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 70,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 21,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 28,
        "opponent": "Rabbitohs",
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
      },
      {
        "round": 19,
        "score": 24,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 25,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 18,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 20,
        "opponent": "Panthers",
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
      },
      {
        "round": 10,
        "score": 15,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 54,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 28,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 21,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 16,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 46,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 46,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 6,
        "opponent": "Titans",
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
      },
      {
        "round": 9,
        "score": 29,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 32,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 45,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 45,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 19,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 18,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 26,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 27,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 46,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 29,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 15,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 19,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 30,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 23,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 20,
        "score": 13,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 61,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 28,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 23,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 34,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 15,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 33,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 16,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 27,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 26,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 30,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 18,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 3,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
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
      },
      {
        "round": 13,
        "score": 23,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 12,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 25,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 15,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 33,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 43,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 20,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Eels",
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
      },
      {
        "round": 15,
        "score": 17,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 38,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 57,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 53,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 49,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 22,
        "opponent": "Rabbitohs",
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
      },
      {
        "round": 9,
        "score": 49,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 21,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 52,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 75,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 69,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 69,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 10,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 66,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 60,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 62,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 3,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 24,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 48,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 26,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 14,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 33,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 41,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 54,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 40,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 48,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 29,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 30,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 39,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 32,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 38,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 30,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 4,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": -4,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 56,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 40,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 34,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 55,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 52,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 45,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 42,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 24,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 11,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 58,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 30,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 58,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 68,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 26,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 32,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 51,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 84,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 51,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 83,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 76,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 62,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 80,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 72,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 22,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 43,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 38,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 40,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 29,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 15,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 6,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 22,
        "score": 27,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 59,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 72,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 24,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 33,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 70,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 22,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 41,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 31,
        "opponent": "Sharks",
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
      },
      {
        "round": 10,
        "score": 26,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 25,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 24,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 36,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 25,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 21,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 43,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 9,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 17,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 31,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 12,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 34,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 21,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 28,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 44,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 17,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 23,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 26,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 33,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 41,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 24,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 38,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 57,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 29,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 46,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 43,
        "opponent": "Sharks",
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
      },
      {
        "round": 14,
        "score": 40,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 49,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 51,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 31,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 59,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 45,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 29,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 41,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 40,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 49,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 42,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 25,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 23,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 34,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 22,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 23,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 36,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 46,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Broncos",
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
      },
      {
        "round": 11,
        "score": 23,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 13,
        "score": 35,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 16,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 22,
        "score": 16,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 5,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 42,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 35,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 10,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 18,
        "score": 36,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 48,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 25,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 12,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 46,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 36,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 34,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 39,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 20,
        "score": 17,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 22,
        "score": 20,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 26,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 26,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 36,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 57,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 59,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 34,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 41,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 38,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 54,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 36,
        "opponent": "Storm",
        "team": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 26,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 26,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 20,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 38,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 23,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 41,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 22,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 39,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 55,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 54,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 22,
        "score": 26,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 50,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 54,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 51,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 68,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 42,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 36,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 55,
        "opponent": "Dragons",
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
      },
      {
        "round": 9,
        "score": 54,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 23,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 29,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 46,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 50,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 16,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 19,
        "score": 50,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 21,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 68,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 11,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 26,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 16,
        "score": 68,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 39,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 46,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 40,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 35,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 18,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 7,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 17,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 27,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 8,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 22,
        "score": 20,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 32,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 24,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 37,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 38,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 42,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 19,
        "score": 34,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 28,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 18,
        "opponent": "Rabbitohs",
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
      },
      {
        "round": 9,
        "score": 19,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 46,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 37,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 46,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 39,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 39,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 9,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 44,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 18,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 14,
        "score": 50,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 33,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 43,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 19,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 71,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 46,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 22,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 36,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 53,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 47,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 53,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 59,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 50,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 52,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 58,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 40,
        "opponent": "Dragons",
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
      },
      {
        "round": 9,
        "score": 16,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 16,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 15,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 32,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 20,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 30,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 30,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 32,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 25,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": false
      }
    ],
    "HARRISONEDWARDS": [
      {
        "round": 2,
        "score": 11,
        "opponent": "Broncos",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 13,
        "score": 21,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 27,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 44,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 14,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 23,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 19,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 24,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 14,
        "opponent": "Tigers",
        "team": "Eels",
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
      },
      {
        "round": 9,
        "score": 42,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 22,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 44,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 45,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 11,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 7,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
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
      },
      {
        "round": 10,
        "score": 27,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 21,
        "score": 8,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 39,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 37,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 40,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 27,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 46,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 46,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 43,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 45,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 33,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 47,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 41,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 32,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 31,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 20,
        "score": 0,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 10,
        "score": 50,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 53,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 66,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 56,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 57,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 58,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 70,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 50,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 74,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 50,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 37,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 41,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 51,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 14,
        "score": 16,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 42,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 57,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 58,
        "opponent": "Sharks",
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
      },
      {
        "round": 10,
        "score": 28,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 42,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 27,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 16,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 31,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 22,
        "score": 30,
        "opponent": "Dolphins",
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
      },
      {
        "round": 10,
        "score": 13,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 42,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 15,
        "score": 7,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 1,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 14,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 22,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 31,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 29,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Cowboys",
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
      },
      {
        "round": 14,
        "score": 11,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 60,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 6,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 25,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 51,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 27,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 38,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 16,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 26,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 73,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 51,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 44,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 28,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 35,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 41,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 39,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 39,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 12,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 29,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 48,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 49,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 50,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 12,
        "score": 37,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 43,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 37,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 36,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 36,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 41,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 34,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 31,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 38,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 47,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 59,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 28,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 57,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 22,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 37,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 38,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 8,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 10,
        "score": 17,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 57,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 35,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 16,
        "score": 47,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 17,
        "score": 19,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 47,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 31,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 57,
        "opponent": "Broncos",
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
      },
      {
        "round": 9,
        "score": 30,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 32,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 65,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 47,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 36,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 19,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 69,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 37,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 20,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 36,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 53,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 51,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 36,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 46,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 45,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 39,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 19,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 19,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 15,
        "score": 13,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 26,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 64,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 23,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 46,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 54,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 69,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 43,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 36,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 52,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 21,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 36,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 24,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 43,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 35,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 26,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 29,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 17,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 30,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 22,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 28,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 40,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 27,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 11,
        "score": 21,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 27,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 16,
        "score": 29,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 19,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 22,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 10,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 23,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 46,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 25,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 50,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 41,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 61,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 27,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 29,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 20,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 31,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 32,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 25,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 61,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 33,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 57,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 13,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 17,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 29,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 30,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 17,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 12,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 46,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 81,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 48,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 34,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 0,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 27,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 17,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 32,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 54,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 35,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 22,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 14,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 21,
        "opponent": "Raiders",
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
      },
      {
        "round": 9,
        "score": 21,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 32,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 22,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 16,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 12,
        "score": 30,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 23,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 54,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 33,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 28,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 48,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 35,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 31,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 34,
        "opponent": "Dragons",
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
      },
      {
        "round": 18,
        "score": 31,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 9,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 36,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 57,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 7,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 21,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 15,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 18,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 37,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 36,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 23,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 52,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 32,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 17,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 38,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 51,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 30,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": -3,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 18,
        "score": 44,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 16,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 26,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 24,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 2,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 11,
        "score": 26,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 58,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 21,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 52,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 27,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 30,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 22,
        "score": 25,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": true
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
      },
      {
        "round": 14,
        "score": 42,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 44,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 11,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 22,
        "score": 5,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 65,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 45,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 81,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 54,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 55,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 37,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 53,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 67,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 25,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 51,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 18,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 21,
        "score": 37,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 27,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 19,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 28,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 30,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 50,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 44,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 51,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 58,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 71,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 53,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 40,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 9,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 53,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 45,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 37,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 55,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 17,
        "score": 37,
        "opponent": "Tigers",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 43,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 19,
        "opponent": "Broncos",
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
      },
      {
        "round": 4,
        "score": 20,
        "opponent": "Dolphins",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 10,
        "score": 14,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 21,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 24,
        "opponent": "Roosters",
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
      },
      {
        "round": 13,
        "score": 50,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 44,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 43,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 38,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 64,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 53,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 65,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 43,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 44,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 50,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 32,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 28,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 23,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 50,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 21,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 26,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 56,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": -7,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 54,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 38,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 7,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 19,
        "score": 48,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 38,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 17,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 53,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 26,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 39,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 32,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 15,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 31,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 32,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 40,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 39,
        "opponent": "Dragons",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "JACKBOSTOCK": [
      {
        "round": 9,
        "score": 63,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 45,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 57,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 39,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 50,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 40,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 26,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 43,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 50,
        "opponent": "Dragons",
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
      },
      {
        "round": 9,
        "score": 51,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 32,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 26,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 40,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 14,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 22,
        "score": 24,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 1,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 34,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 18,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 25,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 43,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 46,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 15,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 27,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 55,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 24,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 35,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 19,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 4,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 25,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 28,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 25,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 38,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 15,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 12,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 23,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 40,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 4,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 32,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 15,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 24,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 31,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 23,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 22,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 15,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 25,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 17,
        "score": 33,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 62,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 59,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 74,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 55,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 41,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 29,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 35,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 60,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 41,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 29,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 44,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 39,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 60,
        "opponent": "Eels",
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
      },
      {
        "round": 17,
        "score": 2,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 20,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 20,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 31,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": -2,
        "opponent": "Bulldogs",
        "team": "Storm",
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
      },
      {
        "round": 10,
        "score": 25,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 26,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 9,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 38,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 18,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 17,
        "score": 18,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 33,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 24,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 20,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 58,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 17,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 19,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 13,
        "score": 40,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 26,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 61,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 31,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 50,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 25,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 20,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 10,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 35,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 19,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 16,
        "score": 28,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 16,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 30,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 3,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "BILLYWALTERS": [
      {
        "round": 21,
        "score": 9,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 24,
        "opponent": "Knights",
        "team": "Broncos",
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
      },
      {
        "round": 12,
        "score": 35,
        "opponent": "Storm",
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
      },
      {
        "round": 11,
        "score": 16,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 61,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 14,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 22,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 17,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 5,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 25,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      }
    ],
    "ROBERTDERBY": [
      {
        "round": 12,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 53,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 57,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 57,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 39,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 15,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 43,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 33,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 42,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 61,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 58,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 91,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 43,
        "opponent": "Panthers",
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
      },
      {
        "round": 12,
        "score": 6,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Storm",
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
      },
      {
        "round": 10,
        "score": 28,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 24,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 11,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 18,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 21,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 31,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 25,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 25,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 16,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 18,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 34,
        "opponent": "Dolphins",
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
      },
      {
        "round": 10,
        "score": 23,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 2,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 19,
        "score": 15,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 54,
        "opponent": "Tigers",
        "team": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 29,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 17,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 26,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 33,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 37,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 24,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 10,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 21,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "BRODIEJONES": [
      {
        "round": 20,
        "score": 11,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 36,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 5,
        "opponent": "Broncos",
        "team": "Knights",
        "isHome": false
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
      },
      {
        "round": 10,
        "score": 9,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 24,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 16,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 17,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 3,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 19,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 13,
        "opponent": "Bulldogs",
        "team": "Tigers",
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
      },
      {
        "round": 9,
        "score": 43,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 25,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 35,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 24,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 24,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 48,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 37,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 45,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 28,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 38,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Storm",
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
      },
      {
        "round": 9,
        "score": 69,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 6,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 17,
        "score": 36,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 31,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 43,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 75,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 32,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 35,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 60,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 63,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 45,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 30,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 5,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 32,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 22,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 19,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 17,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 17,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 38,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 21,
        "score": 19,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      }
    ],
    "ORYNKEELEY": [
      {
        "round": 1,
        "score": 34,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 2,
        "score": 27,
        "opponent": "Dragons",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 3,
        "score": 30,
        "opponent": "Broncos",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 12,
        "score": 21,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 15,
        "score": 44,
        "opponent": null,
        "team": null,
        "isHome": null
      },
      {
        "round": 16,
        "score": 11,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 19,
        "score": 27,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 41,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 69,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 44,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 22,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 29,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 10,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 49,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 48,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 7,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 20,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 30,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 14,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 12,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 11,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 8,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 30,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 34,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 28,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 41,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 42,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 62,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 33,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 53,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 71,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 4,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 23,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 28,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 28,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 44,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 52,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 31,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 40,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 53,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 45,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 39,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 42,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 41,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 52,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 48,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 11,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 22,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 14,
        "score": 20,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 10,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
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
      },
      {
        "round": 12,
        "score": 27,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 26,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 25,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 35,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 47,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 39,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 25,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 28,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 13,
        "score": 11,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 18,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 15,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 15,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      }
    ],
    "MAVRIKGEYER": [
      {
        "round": 10,
        "score": 7,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 14,
        "score": 33,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 20,
        "opponent": "Knights",
        "team": "Tigers",
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
      },
      {
        "round": 9,
        "score": 24,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 14,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 27,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 14,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 47,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 23,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
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
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 19,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 29,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 12,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 24,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 18,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 44,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 47,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 59,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 10,
        "score": 11,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 10,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 20,
        "score": 8,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 12,
        "opponent": "Warriors",
        "team": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 21,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 21,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 22,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 16,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 20,
        "score": 3,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 38,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 50,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 54,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 46,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 42,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 42,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 45,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 64,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 42,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 39,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 71,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "JACKCOLE": [
      {
        "round": 18,
        "score": 40,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
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
      },
      {
        "round": 10,
        "score": 26,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 12,
        "score": 30,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 7,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 22,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 27,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 18,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 25,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 49,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 38,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 28,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 42,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 19,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 52,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 29,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 39,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 33,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 30,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 20,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 21,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 62,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 33,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 43,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 62,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 33,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 35,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 33,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 31,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 33,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 28,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 6,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 21,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 31,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 40,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 24,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 16,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 12,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 9,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 11,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 27,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 32,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 12,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 18,
        "score": 17,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 17,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 32,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 18,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 28,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 39,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 21,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 24,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 38,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 30,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 23,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 26,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 32,
        "opponent": "Sharks",
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
      },
      {
        "round": 10,
        "score": 34,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 46,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 51,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 33,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 49,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 34,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 46,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 54,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 30,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 59,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 40,
        "opponent": "Dolphins",
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
      },
      {
        "round": 9,
        "score": 32,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 29,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 28,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 43,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 41,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 45,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 47,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 21,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 20,
        "score": 50,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 18,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 41,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "ZACHDOCKARCLAY": [
      {
        "round": 11,
        "score": 23,
        "opponent": "Tigers",
        "team": "Sea Eagles",
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
      },
      {
        "round": 9,
        "score": 14,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 21,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 11,
        "score": 73,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 17,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 22,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 49,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 35,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 28,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 20,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 43,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 48,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 12,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 46,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 40,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 57,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 37,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 46,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 46,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 51,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 21,
        "score": 35,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 49,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 17,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 38,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 33,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 24,
        "opponent": "Warriors",
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
      },
      {
        "round": 9,
        "score": 22,
        "opponent": "Tigers",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 10,
        "score": 35,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 11,
        "score": 7,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 29,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 14,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 17,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 15,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 21,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 22,
        "score": 17,
        "opponent": "Rabbitohs",
        "team": "Sharks",
        "isHome": true
      }
    ],
    "JOSIAHPAHULU": [
      {
        "round": 19,
        "score": 5,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 12,
        "score": 42,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 51,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 36,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 38,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 32,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 54,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 37,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 52,
        "opponent": "Titans",
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
      },
      {
        "round": 13,
        "score": 31,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 16,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 21,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 34,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 12,
        "score": 49,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 12,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 52,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 43,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 40,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 38,
        "opponent": "Cowboys",
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
      },
      {
        "round": 9,
        "score": 28,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 65,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 42,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 86,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 48,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 65,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 70,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 40,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 55,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 48,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 12,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 12,
        "score": 65,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 52,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 54,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 18,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 56,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 69,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 26,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 75,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 38,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 29,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 42,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 49,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 17,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 30,
        "opponent": "Roosters",
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
      },
      {
        "round": 11,
        "score": 20,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 41,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 47,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 16,
        "score": 11,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 18,
        "score": 35,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 47,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 17,
        "opponent": "Sharks",
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
      },
      {
        "round": 15,
        "score": 43,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 22,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "LURONPATEA": [
      {
        "round": 16,
        "score": 44,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 27,
        "opponent": "Rabbitohs",
        "team": "Panthers",
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
      },
      {
        "round": 14,
        "score": 22,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 28,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 44,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 23,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 4,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 51,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 38,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 13,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 38,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 52,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 37,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 29,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 37,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 17,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 36,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      }
    ],
    "EDWARDKOSI": [
      {
        "round": 10,
        "score": 6,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 4,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 14,
        "score": 14,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 35,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 33,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 32,
        "opponent": "Panthers",
        "team": "Rabbitohs",
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
      },
      {
        "round": 12,
        "score": 18,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 40,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 10,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 10,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 29,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 41,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 18,
        "opponent": "Panthers",
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
      },
      {
        "round": 13,
        "score": 28,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 63,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 35,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 33,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 8,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 6,
        "opponent": "Panthers",
        "team": "Broncos",
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
      },
      {
        "round": 3,
        "score": 22,
        "opponent": "Dragons",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 64,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 13,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 43,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 32,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 24,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 58,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 45,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 32,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 44,
        "opponent": "Tigers",
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
      },
      {
        "round": 9,
        "score": 9,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 4,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 31,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 14,
        "score": 12,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 7,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 6,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 17,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 22,
        "score": 16,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 48,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 11,
        "score": 79,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 50,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 22,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 32,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 34,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 12,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 42,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 41,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
      }
    ],
    "TRISTANHOPE": [
      {
        "round": 3,
        "score": 13,
        "opponent": "Rabbitohs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 9,
        "score": 57,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 9,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "THOMASDUFFY": [
      {
        "round": 6,
        "score": 70,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 9,
        "score": 30,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 5,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 14,
        "score": 29,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 20,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 42,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 32,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 14,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 23,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 24,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 1,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 22,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 23,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 19,
        "score": 10,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 49,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 21,
        "score": 37,
        "opponent": "Tigers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 17,
        "opponent": "Panthers",
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
    "BLAKEWILSON": [
      {
        "round": 11,
        "score": 7,
        "opponent": "Tigers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 21,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
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
      },
      {
        "round": 13,
        "score": 22,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 27,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 25,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 43,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 30,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 35,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 42,
        "opponent": "Tigers",
        "team": "Eels",
        "isHome": false
      }
    ],
    "JOSHPATSTON": [
      {
        "round": 7,
        "score": 27,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 10,
        "score": 17,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 12,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 23,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 49,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 19,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 20,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 34,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 32,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
      }
    ],
    "LUKELAULILII": [
      {
        "round": 2,
        "score": 58,
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
        "score": 33,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 5,
        "score": 22,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 8,
        "score": 42,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 9,
        "score": 23,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 10,
        "score": 58,
        "opponent": null,
        "team": null,
        "isHome": null
      },
      {
        "round": 11,
        "score": 55,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "TAYLORLOSALU": [
      {
        "round": 19,
        "score": 13,
        "opponent": "Eels",
        "team": "Roosters",
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
      },
      {
        "round": 9,
        "score": 50,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 79,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 62,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 35,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 48,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 36,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 43,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 40,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 11,
        "score": 13,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 15,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 9,
        "score": 34,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 20,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 52,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 31,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 41,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 52,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 38,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 46,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 20,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 15,
        "score": 12,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 3,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 14,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      }
    ],
    "TONYSUKKAR": [
      {
        "round": 9,
        "score": 45,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 15,
        "score": 43,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 55,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 64,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 31,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 21,
        "opponent": "Eels",
        "team": "Tigers",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 30,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
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
      },
      {
        "round": 13,
        "score": 11,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 53,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 22,
        "score": 12,
        "opponent": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 20,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 20,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 45,
        "opponent": "Knights",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "HEATHMASON": [
      {
        "round": 10,
        "score": 32,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 23,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 28,
        "opponent": "Dolphins",
        "team": "Tigers",
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
      },
      {
        "round": 19,
        "score": 62,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 53,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      }
    ],
    "JAYLANDEGROOT": [
      {
        "round": 7,
        "score": 15,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 12,
        "score": 27,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 14,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 17,
        "score": 16,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 44,
        "opponent": "Dragons",
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
      },
      {
        "round": 9,
        "score": 35,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 52,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 44,
        "opponent": "Dragons",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 36,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 59,
        "opponent": "Tigers",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 16,
        "score": 25,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 17,
        "score": 45,
        "opponent": "Cowboys",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 33,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 29,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 45,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 46,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "TRENTTOELAU": [
      {
        "round": 9,
        "score": 18,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 20,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 16,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 23,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 26,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 9,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 50,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 32,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 29,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "LIAMLEBLANC": [
      {
        "round": 12,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 24,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 18,
        "score": 16,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 26,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 18,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 20,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "TUKUHAUTAPUHA": [
      {
        "round": 18,
        "score": 17,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 14,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 9,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      }
    ],
    "OWENPATTIE": [
      {
        "round": 9,
        "score": 10,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 10,
        "score": 15,
        "opponent": "Panthers",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 12,
        "score": 13,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 13,
        "score": 5,
        "opponent": "Cowboys",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 14,
        "score": 26,
        "opponent": "Roosters",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 15,
        "score": 34,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 16,
        "score": 45,
        "opponent": "Storm",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 17,
        "score": 51,
        "opponent": "Dragons",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 19,
        "score": 62,
        "opponent": "Bulldogs",
        "team": "Raiders",
        "isHome": false
      },
      {
        "round": 20,
        "score": 55,
        "opponent": "Rabbitohs",
        "team": "Raiders",
        "isHome": true
      },
      {
        "round": 22,
        "score": 55,
        "opponent": "Panthers",
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
      },
      {
        "round": 13,
        "score": 19,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 16,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 13,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 9,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 20,
        "score": 17,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 11,
        "opponent": "Rabbitohs",
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
      },
      {
        "round": 11,
        "score": 43,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 67,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 42,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 39,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 49,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": -1,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 36,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 29,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "TEMAIREMARTIN": [
      {
        "round": 11,
        "score": 58,
        "opponent": "Broncos",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 12,
        "score": 72,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 13,
        "score": 63,
        "opponent": "Panthers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 46,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 68,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 54,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 54,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 20,
        "score": 40,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 21,
        "score": 35,
        "opponent": "Bulldogs",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 75,
        "opponent": "Titans",
        "team": "Warriors",
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
      },
      {
        "round": 9,
        "score": 9,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 16,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 22,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 11,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 15,
        "opponent": "Panthers",
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
      },
      {
        "round": 9,
        "score": 33,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 61,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 39,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 29,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 14,
        "score": 25,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 40,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 37,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 35,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 38,
        "opponent": "Tigers",
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
      },
      {
        "round": 21,
        "score": 19,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 42,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 60,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 60,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 14,
        "score": 58,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 17,
        "score": 66,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 37,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 69,
        "opponent": "Raiders",
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
      },
      {
        "round": 10,
        "score": 34,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 29,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 13,
        "score": 14,
        "opponent": "Knights",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 18,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
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
      },
      {
        "round": 18,
        "score": 41,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 43,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      }
    ],
    "JUNIORTUPOU": [
      {
        "round": 15,
        "score": 12,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 27,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 30,
        "opponent": "Eels",
        "team": "Tigers",
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
      },
      {
        "round": 11,
        "score": 47,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 13,
        "score": 23,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 38,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 49,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 16,
        "score": 14,
        "opponent": "Roosters",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 35,
        "opponent": "Broncos",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 19,
        "score": 14,
        "opponent": "Dolphins",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 20,
        "score": 37,
        "opponent": "Knights",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 21,
        "score": 5,
        "opponent": "Sea Eagles",
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
      },
      {
        "round": 11,
        "score": 37,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 48,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 59,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 46,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 59,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 41,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 48,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 57,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 37,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "AARONSCHOUPP": [
      {
        "round": 17,
        "score": 20,
        "opponent": "Storm",
        "team": "Sea Eagles",
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
      },
      {
        "round": 9,
        "score": 20,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 15,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 17,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 41,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 64,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 68,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 17,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 25,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 39,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 40,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 29,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
      }
    ],
    "CHEVYSTEWART": [
      {
        "round": 9,
        "score": 9,
        "opponent": "Titans",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "JOEYWALSH": [
      {
        "round": 9,
        "score": 43,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 54,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 17,
        "score": 26,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 51,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 38,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 66,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 54,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": true
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
    "JAXENEDGAR": [
      {
        "round": 21,
        "score": 24,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 39,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "ADAMELLIOTT": [
      {
        "round": 10,
        "score": 19,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 31,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 32,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 22,
        "score": 18,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "JAYDENBERRELL": [
      {
        "round": 11,
        "score": 24,
        "opponent": "Bulldogs",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 15,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 28,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      },
      {
        "round": 18,
        "score": 3,
        "opponent": "Broncos",
        "team": "Sharks",
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
      },
      {
        "round": 9,
        "score": 40,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 1,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 6,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 61,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 58,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 30,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 54,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 50,
        "opponent": "Sharks",
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
    "BUNTYAFOA": [
      {
        "round": 10,
        "score": 21,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 15,
        "score": 38,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 39,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 17,
        "score": 28,
        "opponent": "Knights",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 22,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 27,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 9,
        "opponent": "Raiders",
        "team": "Tigers",
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
      },
      {
        "round": 10,
        "score": 5,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 14,
        "score": 9,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 16,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 8,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 16,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 21,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 37,
        "opponent": "Roosters",
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
      },
      {
        "round": 11,
        "score": 13,
        "opponent": "Cowboys",
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
      },
      {
        "round": 10,
        "score": 24,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 49,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 32,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 10,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 28,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 23,
        "opponent": "Eels",
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
      },
      {
        "round": 9,
        "score": 23,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 10,
        "score": 23,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 15,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 17,
        "opponent": "Storm",
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
      },
      {
        "round": 7,
        "score": 14,
        "opponent": "Dolphins",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 29,
        "opponent": "Rabbitohs",
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
      },
      {
        "round": 9,
        "score": 12,
        "opponent": "Panthers",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 12,
        "score": 28,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 22,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 21,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 25,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 26,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 17,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 20,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 45,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 34,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 19,
        "score": 21,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 32,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 46,
        "opponent": "Dragons",
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
      },
      {
        "round": 9,
        "score": 38,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 21,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 36,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 30,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 29,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 25,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 34,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 35,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 26,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 24,
        "opponent": "Knights",
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
      },
      {
        "round": 15,
        "score": 31,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      }
    ],
    "TOMMYTALAU": [
      {
        "round": 15,
        "score": 25,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 16,
        "score": 21,
        "opponent": "Sharks",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 22,
        "score": 57,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "BAYLEIGHBENTLEYHAPE": [
      {
        "round": 11,
        "score": 36,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      }
    ],
    "JENSENTAUMOEPEAU": [
      {
        "round": 10,
        "score": 21,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 21,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 18,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 26,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 12,
        "opponent": "Panthers",
        "team": "Titans",
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
      },
      {
        "round": 9,
        "score": 28,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 10,
        "score": 47,
        "opponent": "Storm",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 11,
        "score": 58,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 13,
        "score": 54,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 20,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 15,
        "score": 42,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 14,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 18,
        "score": 38,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 28,
        "opponent": "Storm",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 10,
        "score": 36,
        "opponent": "Bulldogs",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 11,
        "score": 27,
        "opponent": "Rabbitohs",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 12,
        "score": 60,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 14,
        "score": 28,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 15,
        "score": 50,
        "opponent": "Roosters",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 16,
        "score": 30,
        "opponent": "Tigers",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 17,
        "score": 40,
        "opponent": "Warriors",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 18,
        "score": 34,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      },
      {
        "round": 19,
        "score": 18,
        "opponent": "Sharks",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 20,
        "score": 25,
        "opponent": "Cowboys",
        "team": "Dolphins",
        "isHome": true
      },
      {
        "round": 22,
        "score": 40,
        "opponent": "Dragons",
        "team": "Dolphins",
        "isHome": false
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
      },
      {
        "round": 15,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 18,
        "score": 49,
        "opponent": "Sharks",
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
      },
      {
        "round": 10,
        "score": 31,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 42,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 12,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 41,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 15,
        "score": 42,
        "opponent": "Rabbitohs",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 17,
        "score": 35,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 36,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 20,
        "score": 26,
        "opponent": "Panthers",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 21,
        "score": 14,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      }
    ],
    "WIREMUGREIG": [
      {
        "round": 11,
        "score": 13,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 9,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 8,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      }
    ],
    "GORDONCHANKUMTONG": [
      {
        "round": 20,
        "score": 17,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      }
    ],
    "CODYRAMSEY": [
      {
        "round": 9,
        "score": 7,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 33,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 49,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 15,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 29,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 37,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 36,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 22,
        "score": 50,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "NIWHAIPURU": [
      {
        "round": 13,
        "score": 42,
        "opponent": "Sea Eagles",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 14,
        "score": 42,
        "opponent": "Dragons",
        "team": "Sharks",
        "isHome": true
      },
      {
        "round": 15,
        "score": 34,
        "opponent": "Warriors",
        "team": "Sharks",
        "isHome": false
      }
    ],
    "JOSHUACORIC": [
      {
        "round": 18,
        "score": 23,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "JACKSONSHEREB": [
      {
        "round": 10,
        "score": 12,
        "opponent": "Broncos",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 12,
        "score": 56,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 37,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 20,
        "score": 13,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 28,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 10,
        "score": 46,
        "opponent": "Titans",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 11,
        "score": 47,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 13,
        "score": 45,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 14,
        "score": 35,
        "opponent": "Raiders",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 15,
        "score": 16,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 17,
        "score": 52,
        "opponent": "Broncos",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": 37,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 20,
        "score": 27,
        "opponent": "Storm",
        "team": "Roosters",
        "isHome": true
      },
      {
        "round": 21,
        "score": 30,
        "opponent": "Knights",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 22,
        "score": 45,
        "opponent": "Cowboys",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "LUKEGALE": [
      {
        "round": 18,
        "score": 12,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      }
    ],
    "LATRELLSIEGWALT": [
      {
        "round": 10,
        "score": 55,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 35,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 40,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 55,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 45,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 51,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 40,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 30,
        "opponent": "Sharks",
        "team": "Rabbitohs",
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
      },
      {
        "round": 10,
        "score": 20,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 38,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 31,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 26,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 32,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 50,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 31,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 45,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 19,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 26,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 29,
        "opponent": "Dolphins",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "DEANIEREMIA": [
      {
        "round": 19,
        "score": 15,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 19,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 18,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 18,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
      }
    ],
    "RILEYPRICE": [
      {
        "round": 22,
        "score": 18,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
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
      },
      {
        "round": 9,
        "score": 33,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 61,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 44,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 68,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 67,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 50,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 41,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 41,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 56,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 45,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 58,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 57,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "NICHOLASLENAZ": [
      {
        "round": 21,
        "score": 14,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "LACHLANCROUCH": [
      {
        "round": 18,
        "score": 34,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 24,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 20,
        "score": 24,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 22,
        "score": 29,
        "opponent": "Broncos",
        "team": "Knights",
        "isHome": false
      }
    ],
    "LIAMSUTTON": [
      {
        "round": 11,
        "score": 32,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 51,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 37,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 52,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "CHARLIEMURRAY": [
      {
        "round": 14,
        "score": 28,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 22,
        "score": 7,
        "opponent": "Eels",
        "team": "Tigers",
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
      },
      {
        "round": 9,
        "score": 43,
        "opponent": "Bulldogs",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 10,
        "score": 57,
        "opponent": "Eels",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 11,
        "score": 30,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 12,
        "score": 80,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 13,
        "score": 27,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 48,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 16,
        "score": 21,
        "opponent": "Warriors",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 17,
        "score": 36,
        "opponent": "Panthers",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 19,
        "score": 30,
        "opponent": "Sea Eagles",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 20,
        "score": 30,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 21,
        "score": 54,
        "opponent": "Broncos",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 20,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "JOHNRADEL": [
      {
        "round": 15,
        "score": 36,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 16,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 46,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 36,
        "opponent": "Sharks",
        "team": "Rabbitohs",
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
      },
      {
        "round": 4,
        "score": 3,
        "opponent": "Roosters",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "TALANOAPENITANI": [
      {
        "round": 12,
        "score": 63,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "ASHTONWARD": [
      {
        "round": 1,
        "score": 14,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 10,
        "score": 55,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 11,
        "score": 43,
        "opponent": "Dolphins",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 12,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 39,
        "opponent": "Sea Eagles",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 15,
        "score": 44,
        "opponent": "Broncos",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 45,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 29,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 37,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 61,
        "opponent": "Raiders",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 21,
        "score": 57,
        "opponent": "Storm",
        "team": "Rabbitohs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 12,
        "opponent": "Sharks",
        "team": "Rabbitohs",
        "isHome": false
      }
    ],
    "BILLYSCOTT": [
      {
        "round": 13,
        "score": 9,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 18,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 12,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 8,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 7,
        "opponent": "Eels",
        "team": "Panthers",
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
    "JETTLIU": [
      {
        "round": 15,
        "score": 13,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 12,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 29,
        "opponent": "Warriors",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 10,
        "score": 23,
        "opponent": "Cowboys",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 11,
        "score": 23,
        "opponent": "Storm",
        "team": "Eels",
        "isHome": true
      }
    ],
    "VENAPATUKICASE": [
      {
        "round": 15,
        "score": 19,
        "opponent": "Eels",
        "team": "Raiders",
        "isHome": false
      }
    ],
    "ETHANROBERTS": [
      {
        "round": 11,
        "score": 29,
        "opponent": "Sea Eagles",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 23,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 64,
        "opponent": "Raiders",
        "team": "Tigers",
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
      },
      {
        "round": 19,
        "score": 35,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      }
    ],
    "JOSHFELEDY": [
      {
        "round": 5,
        "score": 9,
        "opponent": "Dolphins",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 12,
        "score": 39,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 13,
        "score": 32,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 14,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 17,
        "score": 27,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 9,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 20,
        "score": 8,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 20,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 3,
        "opponent": "Sharks",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 13,
        "score": 14,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 14,
        "score": 27,
        "opponent": "Panthers",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 18,
        "score": -5,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 14,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      }
    ],
    "KEAGANRUSSELLSMITH": [
      {
        "round": 12,
        "score": 39,
        "opponent": "Bulldogs",
        "team": "Storm",
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
      },
      {
        "round": 10,
        "score": 69,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 11,
        "score": 61,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": 60,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 13,
        "score": 62,
        "opponent": "Broncos",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 14,
        "score": 66,
        "opponent": "Sharks",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 16,
        "score": 77,
        "opponent": "Knights",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 17,
        "score": 51,
        "opponent": "Raiders",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 18,
        "score": 41,
        "opponent": "Tigers",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 20,
        "score": 69,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 21,
        "score": 80,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 22,
        "score": 97,
        "opponent": "Dolphins",
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
      },
      {
        "round": 10,
        "score": 2,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 11,
        "score": 0,
        "opponent": "Titans",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 13,
        "score": 23,
        "opponent": "Eels",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 14,
        "score": 46,
        "opponent": "Storm",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 18,
        "score": 29,
        "opponent": "Dolphins",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 19,
        "score": 15,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 30,
        "opponent": "Roosters",
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
      },
      {
        "round": 9,
        "score": 27,
        "opponent": "Sea Eagles",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 10,
        "score": 30,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 13,
        "score": 24,
        "opponent": "Warriors",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 43,
        "opponent": "Titans",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 18,
        "score": 73,
        "opponent": "Rabbitohs",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 12,
        "opponent": "Broncos",
        "team": "Panthers",
        "isHome": true
      },
      {
        "round": 21,
        "score": 18,
        "opponent": "Eels",
        "team": "Panthers",
        "isHome": false
      },
      {
        "round": 22,
        "score": 5,
        "opponent": "Raiders",
        "team": "Panthers",
        "isHome": true
      }
    ],
    "TEANCUMBROWN": [
      {
        "round": 14,
        "score": 34,
        "opponent": "Bulldogs",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 15,
        "score": 9,
        "opponent": "Raiders",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 17,
        "score": 16,
        "opponent": "Rabbitohs",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 18,
        "score": 22,
        "opponent": "Sea Eagles",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 19,
        "score": 38,
        "opponent": "Roosters",
        "team": "Eels",
        "isHome": false
      },
      {
        "round": 21,
        "score": 35,
        "opponent": "Panthers",
        "team": "Eels",
        "isHome": true
      },
      {
        "round": 22,
        "score": 31,
        "opponent": "Tigers",
        "team": "Eels",
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
    "JEDREARDON": [
      {
        "round": 12,
        "score": 10,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 1,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "JAIBOWDEN": [
      {
        "round": 22,
        "score": 7,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": true
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
    "STANLEYHUEN": [
      {
        "round": 10,
        "score": 2,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 7,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 17,
        "score": 18,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 20,
        "score": 22,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      }
    ],
    "REECEFOLEY": [
      {
        "round": 15,
        "score": 10,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "XAVIERKERRISK": [
      {
        "round": 12,
        "score": 0,
        "opponent": "Rabbitohs",
        "team": "Cowboys",
        "isHome": true
      }
    ],
    "JACKUNDERHILL": [
      {
        "round": 11,
        "score": 30,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 12,
        "score": 39,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 28,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 14,
        "score": 17,
        "opponent": "Eels",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 16,
        "score": 14,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 28,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 15,
        "opponent": "Raiders",
        "team": "Bulldogs",
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
      },
      {
        "round": 22,
        "score": 24,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "BLAKEMOZER": [
      {
        "round": 6,
        "score": 10,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 17,
        "score": 21,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 12,
        "opponent": "Sharks",
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
      },
      {
        "round": 9,
        "score": 20,
        "opponent": "Roosters",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 20,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 11,
        "score": 33,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 13,
        "score": 15,
        "opponent": "Dragons",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 14,
        "score": 12,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 18,
        "score": 20,
        "opponent": "Sharks",
        "team": "Broncos",
        "isHome": true
      },
      {
        "round": 21,
        "score": 21,
        "opponent": "Cowboys",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 22,
        "score": 35,
        "opponent": "Knights",
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
    "MAKAIATAFUA": [
      {
        "round": 15,
        "score": 10,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 13,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      }
    ],
    "ETHANKING": [
      {
        "round": 13,
        "score": 23,
        "opponent": "Raiders",
        "team": "Cowboys",
        "isHome": false
      },
      {
        "round": 14,
        "score": 4,
        "opponent": "Dolphins",
        "team": "Cowboys",
        "isHome": true
      },
      {
        "round": 22,
        "score": 3,
        "opponent": "Roosters",
        "team": "Cowboys",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 36,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 77,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 67,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 53,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 56,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 47,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 31,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 46,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 65,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 72,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 68,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 36,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
      }
    ],
    "ZANEHARRISON": [
      {
        "round": 10,
        "score": 45,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 32,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 40,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 38,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 25,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 63,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 17,
        "score": 28,
        "opponent": "Bulldogs",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 53,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 36,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 26,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 29,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 13,
        "score": 10,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 14,
        "score": 10,
        "opponent": "Rabbitohs",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 16,
        "score": 14,
        "opponent": "Bulldogs",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 17,
        "score": 21,
        "opponent": "Storm",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 18,
        "score": 22,
        "opponent": "Eels",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 19,
        "score": 19,
        "opponent": "Cowboys",
        "team": "Sea Eagles",
        "isHome": true
      },
      {
        "round": 20,
        "score": 19,
        "opponent": "Titans",
        "team": "Sea Eagles",
        "isHome": false
      },
      {
        "round": 21,
        "score": 30,
        "opponent": "Sharks",
        "team": "Sea Eagles",
        "isHome": true
      }
    ],
    "JORDANUTA": [
      {
        "round": 12,
        "score": 14,
        "opponent": "Dolphins",
        "team": "Raiders",
        "isHome": true
      }
    ],
    "HAYDENBUCHANAN": [
      {
        "round": 4,
        "score": 13,
        "opponent": "Titans",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 11,
        "score": 13,
        "opponent": "Panthers",
        "team": "Dragons",
        "isHome": false
      },
      {
        "round": 12,
        "score": -3,
        "opponent": "Warriors",
        "team": "Dragons",
        "isHome": true
      }
    ],
    "KADEREED": [
      {
        "round": 8,
        "score": 6,
        "opponent": "Roosters",
        "team": "Dragons",
        "isHome": true
      },
      {
        "round": 10,
        "score": 37,
        "opponent": "Knights",
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
      },
      {
        "round": 9,
        "score": 29,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 12,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 11,
        "score": 19,
        "opponent": "Sharks",
        "team": "Bulldogs",
        "isHome": false
      }
    ],
    "TOBYRODWELL": [
      {
        "round": 15,
        "score": 39,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      }
    ],
    "JOSESELANYON": [
      {
        "round": 15,
        "score": 33,
        "opponent": "Titans",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 16,
        "score": 8,
        "opponent": "Dolphins",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 18,
        "score": 15,
        "opponent": "Dragons",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 19,
        "score": 22,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      }
    ],
    "BRIANPOUNIU": [
      {
        "round": 12,
        "score": 16,
        "opponent": "Raiders",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "GABRIELSATRICK": [
      {
        "round": 12,
        "score": 7,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      }
    ],
    "JAREDHAYWOOD": [
      {
        "round": 19,
        "score": 40,
        "opponent": "Warriors",
        "team": "Tigers",
        "isHome": true
      },
      {
        "round": 20,
        "score": 10,
        "opponent": "Bulldogs",
        "team": "Tigers",
        "isHome": false
      },
      {
        "round": 21,
        "score": 17,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      }
    ],
    "HUGOPEEL": [
      {
        "round": 9,
        "score": 12,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 11,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 10,
        "opponent": "Rabbitohs",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 16,
        "score": 43,
        "opponent": "Dragons",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 20,
        "score": 39,
        "opponent": "Sharks",
        "team": "Knights",
        "isHome": false
      },
      {
        "round": 21,
        "score": 74,
        "opponent": "Roosters",
        "team": "Knights",
        "isHome": true
      },
      {
        "round": 22,
        "score": 54,
        "opponent": "Broncos",
        "team": "Knights",
        "isHome": false
      }
    ],
    "ALEKOLASIMIJONES": [
      {
        "round": 9,
        "score": 21,
        "opponent": "Cowboys",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 10,
        "score": 21,
        "opponent": "Dolphins",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 16,
        "score": 9,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 23,
        "opponent": "Dolphins",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 10,
        "score": 56,
        "opponent": "Tigers",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 11,
        "score": 57,
        "opponent": "Eels",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 12,
        "score": 27,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 13,
        "score": 44,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 14,
        "score": 31,
        "opponent": "Knights",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 16,
        "score": 39,
        "opponent": "Raiders",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 17,
        "score": 50,
        "opponent": "Sea Eagles",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 19,
        "score": 48,
        "opponent": "Titans",
        "team": "Storm",
        "isHome": true
      },
      {
        "round": 20,
        "score": 63,
        "opponent": "Roosters",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 21,
        "score": 47,
        "opponent": "Rabbitohs",
        "team": "Storm",
        "isHome": false
      },
      {
        "round": 22,
        "score": 35,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "REXBASSINGTHWAIGHTE": [
      {
        "round": 15,
        "score": 33,
        "opponent": "Dolphins",
        "team": "Roosters",
        "isHome": false
      },
      {
        "round": 19,
        "score": -2,
        "opponent": "Eels",
        "team": "Roosters",
        "isHome": true
      }
    ],
    "JETHRORINAKAMA": [
      {
        "round": 12,
        "score": 47,
        "opponent": "Storm",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 13,
        "score": 34,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 16,
        "score": 19,
        "opponent": "Sea Eagles",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 17,
        "score": 63,
        "opponent": "Titans",
        "team": "Bulldogs",
        "isHome": false
      },
      {
        "round": 19,
        "score": 31,
        "opponent": "Raiders",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 20,
        "score": 51,
        "opponent": "Tigers",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 21,
        "score": 34,
        "opponent": "Warriors",
        "team": "Bulldogs",
        "isHome": true
      },
      {
        "round": 22,
        "score": 47,
        "opponent": "Storm",
        "team": "Bulldogs",
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
      },
      {
        "round": 9,
        "score": 22,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
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
      },
      {
        "round": 9,
        "score": 45,
        "opponent": "Raiders",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 10,
        "score": 28,
        "opponent": "Roosters",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 11,
        "score": 39,
        "opponent": "Knights",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 12,
        "score": 25,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 14,
        "score": 28,
        "opponent": "Broncos",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 15,
        "score": 29,
        "opponent": "Tigers",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 16,
        "score": 7,
        "opponent": "Panthers",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 19,
        "score": 4,
        "opponent": "Storm",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 20,
        "score": 17,
        "opponent": "Sea Eagles",
        "team": "Titans",
        "isHome": true
      },
      {
        "round": 21,
        "score": 24,
        "opponent": "Dragons",
        "team": "Titans",
        "isHome": false
      },
      {
        "round": 22,
        "score": 16,
        "opponent": "Warriors",
        "team": "Titans",
        "isHome": true
      }
    ],
    "PHILLIPCOATES": [
      {
        "round": 11,
        "score": 31,
        "opponent": "Warriors",
        "team": "Broncos",
        "isHome": false
      }
    ],
    "JOHNFINEANGANOFO": [
      {
        "round": 18,
        "score": 5,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "HAYDENWATSON": [
      {
        "round": 22,
        "score": 46,
        "opponent": "Bulldogs",
        "team": "Storm",
        "isHome": true
      }
    ],
    "SEBASTIANSUA": [
      {
        "round": 18,
        "score": 24,
        "opponent": "Knights",
        "team": "Dolphins",
        "isHome": false
      }
    ],
    "JAVONANDREWS": [
      {
        "round": 21,
        "score": 35,
        "opponent": "Raiders",
        "team": "Tigers",
        "isHome": false
      }
    ],
    "EDDIEIEREMIATOEAVA": [
      {
        "round": 9,
        "score": 39,
        "opponent": "Eels",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 12,
        "score": 8,
        "opponent": "Dragons",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 15,
        "score": 40,
        "opponent": "Sharks",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 16,
        "score": 33,
        "opponent": "Cowboys",
        "team": "Warriors",
        "isHome": true
      },
      {
        "round": 17,
        "score": 50,
        "opponent": "Dolphins",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 19,
        "score": 32,
        "opponent": "Tigers",
        "team": "Warriors",
        "isHome": false
      },
      {
        "round": 22,
        "score": 83,
        "opponent": "Titans",
        "team": "Warriors",
        "isHome": false
      }
    ],
    "DAYNEJENNINGS": [
      {
        "round": 17,
        "score": 4,
        "opponent": "Eels",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 18,
        "score": 54,
        "opponent": "Panthers",
        "team": "Rabbitohs",
        "isHome": false
      },
      {
        "round": 19,
        "score": -1,
        "opponent": "Knights",
        "team": "Rabbitohs",
        "isHome": true
      }
    ],
    "ANTONIOVERHOEVEN": [
      {
        "round": 5,
        "score": 7,
        "opponent": "Titans",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 10,
        "score": 23,
        "opponent": "Sea Eagles",
        "team": "Broncos",
        "isHome": false
      },
      {
        "round": 15,
        "score": 27,
        "opponent": "Rabbitohs",
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
