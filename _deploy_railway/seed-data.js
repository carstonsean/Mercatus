(function(root,factory){
  if(typeof module==="object"&&module.exports){
    module.exports=factory();
    return;
  }
  root.MERCATUS_SEED=factory();
})(typeof globalThis!=="undefined"?globalThis:this,function(){
  const HALF_POINT=0.5;
  const derivedData=typeof globalThis!=="undefined"&&globalThis.MERCATUS_DERIVED?globalThis.MERCATUS_DERIVED:(typeof require==="function"?(()=>{try{return require("./lib/derived-fantasy-data.js");}catch(error){return null;}})():null);
  const PLAYER_LINE_OVERRIDES={
    REECEWALSH:54.5,
    CONNORTRACEY:38.7,
    KAEOWEEKES:37.1,
    WILLKENNEDY:33.2,
    KEANOKINI:51.4,
    TOMTRBOJEVIC:53,
    SUAFAALOGO:45.0,
    KALYNPONGA:54,
    CHARNZENICOLLKLOKSTAD:41.9,
    DEINEMARINER:34.0,
    JACOBKIRAZ:54.5,
    SAVELIOTAMALE:38.7,
    SAMSTONESTREET:34.8,
    PHILLIPSAMI:43.5,
    LEHIHOPOATE:41.9,
    NICKMEANEY:39.6,
    GREGMARZHEW:37.9,
    DALLINWATENEZELEZNIAK:33.2,
    KOTONISTAGGS:40.3,
    STEPHENCRICHTON:38.7,
    MATTTIMOKO:41,
    KLIRO:48.2,
    JOJOFIFITA:35.6,
    REUBENGARRICK:40.3,
    JACKHOWARTH:37.9,
    BRADMANBEST:42.7,
    ADAMPOMPEY:28.4,
    GEHAMATSHIBASAKI:42.7,
    BRONSONXERRI:34,
    SEBASTIANKRIS:34.0,
    JESSERAMIEN:40.3,
    MAXFEAGAI:32,
    TOLUTAUKOULA:52.9,
    MOSESLEO:33,
    DANEGAGAI:46.6,
    ALILEIATAUA:33,
    JOSIAHKARAPANI:36.3,
    MARCELOMONTOYA:29.2,
    XAVIERSAVAGE:27,
    SIONEKATOA:34.8,
    SIALEFAEMANI:29,
    JASONSAAB:32.4,
    WILLWARBRICK:33.2,
    DOMYOUNG:40.3,
    ROGERTUIVASASHECK:41.1,
    EZRAMAM:33.2,
    MATTBURTON:52.3,
    ETHANSTRANGE:45.0,
    BRAYDENTRINDALL:36.3,
    AJBRIMSON:37.9,
    LUKEBROOKS:36.3,
    CAMERONMUNSTER:54.5,
    FLETCHERSHARPE:57.7,
    CHANELHARRISTAVITA:34,
    ADAMREYNOLDS:49.7,
    LACHLANGALVIN:49.0,
    ETHANSANDERS:41.1,
    NICHOHYNES:59.6,
    JAYDENCAMPBELL:62.3,
    JAMALFOGARTY:50.5,
    JAHROMEHUGHES:51.4,
    DYLANBROWN:57.7,
    TANAHBOYD:53.6,
    HAKEEMHAAS:67.6,
    MAXKING:50,
    JOSEPHTAPINE:55.6,
    ADDINFONUABLAKE:46.5,
    MOEAKIFOTUAIKA:38.6,
    TANIELAPASEKA:39.2,
    STEFANOUTOIKAMANU:52.5,
    JACOBSAIFITI:43.5,
    MITCHBARNETT:48,
    BENHUNT:40,
    BAILEYHAYWARD:39.0,
    JAYDENBRAILEY:13,
    BLAYKEBRAILEY:54.5,
    SAMVERRILLS:36.0,
    JAKESIMPKIN:35.5,
    HARRYGRANT:53.8,
    PHEONIXCROSSLAND:42.6,
    WAYDEEGAN:42.9,
    COREYJENSEN:34.4,
    SAMHUGHES:20,
    JOSHPAPALII:27.9,
    THOMASHAZELTON:39.2,
    TINOFAASUAMALAEAUI:47,
    SIOSIUATAUKEIAHO:37,
    JOSHKING:38.2,
    TREYMOONEY:45.0,
    JAMESFISHERHARRIS:47.5,
    JORDANRIKI:45.2,
    JACOBPRESTON:56.2,
    NOAHMARTIN:44.2,
    BRITONNIKORA:22.5,
    ARAMAHAU:50.6,
    HAUMOLEOLAKAUATU:51.5,
    ATIVALULISATI:43.6,
    DYLANLUCAS:54.6,
    JACOBLABAN:21.9,
    BRENDANPIAKURA:30.2,
    VILIAMEKIKAU:41.3,
    HUDSONYOUNG:55.4,
    TEIGWILTON:46.8,
    BEAUFERMOR:52.9,
    BENTRBOJEVIC:43.7,
    SHAWNBLORE:46,
    JERMAINEMCEWEN:39.6,
    KURTCAPEWELL:39.8,
    PATCARRIGAN:56.0,
    JAEMONSALMON:26,
    COREYHORSBURGH:44.1,
    JESSECOLQUHOUN:41.9,
    CHRISRANDALL:38.0,
    JAKETRBOJEVIC:33.0,
    TRENTLOIERO:46.4,
    TYSONFRIZELL:36.8,
    ERINCLARK:42.3,
    BENTALTY:27,
    JOSHCURRAN:14,
    ZACHOSKING:26,
    OREGONKAUFUSI:25,
    KURTISMORRIN:24.0,
    ETHANBULLEMOR:38,
    ALECMACDONALD:27.7,
    PASAMISAULO:23,
    JACKSONFORD:55.8,
    XAVIERWILLISON:36.1,
    HARRYHAYES:43,
    MORGANSMITHIES:36.0,
    TOBYRUDOLF:30.7,
    LUKESOMMERTON:23,
    KOBEHETHERINGTON:35.1,
    JOECHAN:48.0,
    THOMASCANT:24.4,
    LEKAHALASIMA:37.1,
    AUBLIXTAWHA:12,
    SITILITUPOUNIUA:25.9,
    SIMISASAGI:49.8,
    BILLYBURNS:42.1,
    KLESEHAAS:37.8,
    NATHANBROWN:16,
    TUIKAMIKAMIKA:20,
    MATCROKER:41.9,
    DEMETRICVAIMAUGA:33,
    COREYPAIX:35.4,
    KURTMANN:32,
    TOMSTARLING:45.4,
    SIOSIFATALAKAI:20,
    COOPERBAI:24,
    COREYWADDELL:13,
    TYRANWISHART:19,
    SANDONSMITH:16.8,
    SAMHEALEY:13,
    SCOTTDRINKWATER:50.6,
    ISAIAHIONGI:39,
    DYLANEDWARDS:48.2,
    JYEGRAY:44.2,
    CLINTGUTHERSON:37.9,
    JAMESTEDESCO:53.7,
    JAHREAMBULA:39.5,
    HAMISOTABUAIFIDOW:45.8,
    MURRAYTAULAGI:37.9,
    JOSHADDOCARR:35.6,
    BRIANTOO:42.7,
    ALEXJOHNSTON:34.0,
    SETUTU:34.8,
    MARKNAWAQANITAWASE:47.4,
    SUNIATURUVA:31.6,
    SELWYNCOBBO:39.5,
    JAXONPURDUE:42.7,
    WILLPENISINI:40.3,
    PAULALAMOTI:38.7,
    LATRELLMITCHELL:60.7,
    VALENTINEHOLMES:48.1,
    ROBERTTOIA:42.7,
    TAYLANMAY:44.2,
    HERBIEFARNWORTH:59.6,
    TOMCHESTER:47.4,
    SEANRUSSELL:33.2,
    CASEYMCLEAN:40.3,
    JACKWIGHTON:33.2,
    MOSESSULI:39.5,
    BILLYSMITH:36.3,
    STARFORDTOA:40,
    JAKEAVERILLO:35.6,
    BRAIDONBURNS:48.2,
    BAYLEYSIMONSSON:33,
    TOMJENKINS:39,
    CAMPBELLGRAHAM:37.9,
    CHRISTIANTUIPULOTU:36.3,
    DANIELTUPOU:38.7,
    HEAMASIMAKASINI:30.8,
    JAMAYNEISAAKO:41.3,
    JAKECLIFFORD:48.9,
    JONAHPEZET:25.3,
    BLAIZETALAGI:33.2,
    CODYWALKER:36.3,
    KYLEFLANAGAN:28,
    DALYCHERRYEVANS:46.6,
    ADAMDOUEIHI:52.1,
    KODINIKORIMA:37.1,
    TOMDEARDEN:53.7,
    MITCHELLMOSES:50.5,
    NATHANCLEARY:70.4,
    JAMIEHUMPHREYS:38.7,
    DANIELATKINSON:42.7,
    SAMWALKER:49.9,
    JAROMELUAI:34.8,
    ISAIYAKATOA:57.7,
    COENHESS:40.1,
    JUNIORPAULO:40.0,
    MOSESLEOTA:30.4,
    TEVITATATOLA:46.5,
    EMREGULER:32.8,
    NAUFAHUWHYTE:42.3,
    TERRELLMAY:67.2,
    FELISEKAUFUSI:22.7,
    REEDMAHONEY:39.0,
    TALLYNDASILVA:15,
    MITCHKENNY:0.0,
    BRANDONSMITH:38.0,
    DAMIENCOOK:60.8,
    REECEROBSON:49.6,
    APIKOROISAU:43.2,
    JEREMYMARSHALLKING:42,
    JASONTAUMALOLO:32.9,
    JACKDEBELIN:42,
    LINDSAYSMITH:47.5,
    KEAONKOLOAMATANGI:49.1,
    TOBYCOUCHMAN:55.6,
    SPENCERLENIU:32,
    FONUAPOLE:28.8,
    TOMGILBERT:36.9,
    HEILUMLUKI:56.2,
    KITIONEKAUTOGA:44.5,
    LIAMMARTIN:40.3,
    EUANAITKEN:44,
    JADYNSUA:50.7,
    ANGUSCRICHTON:52.3,
    KAIPEARCEPAUL:56.2,
    KULIKEFUFINEFEUIAKI:49.9,
    SAMMCINTYRE:38.3,
    JACKWILLIAMS:54.6,
    SCOTTSORENSON:43,
    DAVIDFIFITA:46.8,
    LUCIANOLEILUA:46.9,
    VICTORRADLEY:41.3,
    SAMUELAFAINU:46.0,
    CONNOLYLEMUELU:49.9,
    REUBENCOTTER:44.3,
    JMAINEHOPGOOD:53,
    ISAAHYEO:60.0,
    CAMERONMURRAY:61.6,
    HAMESELE:26,
    LINDSAYCOLLINS:36.9,
    ALEXTWAL:64.9,
    MAXPLATH:41.0,
    GRIFFINNEAME:43,
    DYLANWALKER:38.0,
    ISAIAHPAPALII:56.8,
    LACHLANHUBNER:22.4,
    JACOBLIDDLE:40,
    BLAKESTEEP:19,
    ALEXSEYFARTH:21,
    TOMFLEGLER:41,
    KAIODONNELL:28.5,
    MATTDOOREY:16,
    LIAMHENRY:36,
    BRONSONGARLICK:34,
    RYANCOUCHMAN:42,
    NATBUTCHER:31,
    SIONEFAINU:38,
    MORGANKNOWLES:42.0,
    TOMMIKAELE:25,
    SAMTUIVAITI:15,
    LUKEGARNER:15.9,
    TALLISDUNCAN:57.7,
    HAMISHSTEWART:47.0,
    SIUAWONG:45.6,
    ROYCEHUNT:26,
    ORYNKEELEY:28,
    MATTLODGE:19,
    RYLEYSMITH:23.9,
    BILLYPHILLIPS:18,
    PETERMAMOUZELOS:22,
    JOSHKERR:26,
    CONNORWATSON:25,
    LATUFAINU:9,
    KURTDONOGHUE:16,
    FLETCHERHUNT:40.3,
    ENARITUALA:45.8,
    CLAYTONFAULALO:30.0,
    MANAIAWAITERE:33.2,
    JEDSTUART:26.9,
    SIALETILIFAEAMANI:29.2,
    ALOFIANAKHANPEREIRA:29.2,
    LACHLANILIAS:31.6,
    LUKEMETCALF:38.7,
    LEOTHOMPSON:50.0,
    TINOFAASUAMALEAUI:43.2,
    BRANDONWAKEHAM:21.0,
    JOSHROGERS:14.3,
    JOASHPAPALII:39.5,
    BRIANKELLY:41.1,
    PATRICKHERBERT:31.6,
    THOMASJENKINS:46.6,
    LYHKANKINGTOGIA:31.6,
    FREDDYLUSSICK:34.3,
    KELMATUILAGI:47.6,
    THOMASFLEGLER:37.6,
    SONILUKE:10.7,
    LUCAMORETTI:19.5,
    CHARLIEGUYMER:26.1,
    JOCKMADDEN:8.8,
  };
  const PLAYER_LINE_ALIASES={
    WILLIAMKENNEDY:"WILLKENNEDY",
    SUALAUVIFAALOGO:"SUAFAALOGO",
    SAMUELSTONESTREET:"SAMSTONESTREET",
    BRAYDONTRINDALL:"BRAYDENTRINDALL",
    NICHOLASHYNES:"NICHOHYNES",
    PAYNEHAAS:"HAKEEMHAAS",
    PHOENIXCROSSLAND:"PHEONIXCROSSLAND",
    PATRICKCARRIGAN:"PATCARRIGAN",
    CLINTONGUTHERSON:"CLINTGUTHERSON",
    DOMINICYOUNG:"DOMYOUNG",
    CORYPAIX:"COREYPAIX",
    APISAIKOROISAU:"APIKOROISAU",
    CONNELLYLEMUELU:"CONNOLYLEMUELU",
    JAYDNSUA:"JADYNSUA"
  };
  const roundGames=[
    {id:"raiders-bulldogs",title:"Raiders vs Bulldogs",homeTeam:"Raiders",awayTeam:"Bulldogs",venue:"GIO Stadium",roundLabel:"Round 3",kickoff:"Thu 19 Mar 8:00 PM",kickoffAt:"2026-03-19T20:00:00+11:00"},
    {id:"roosters-panthers",title:"Roosters vs Panthers",homeTeam:"Roosters",awayTeam:"Panthers",venue:"Allianz Stadium",roundLabel:"Round 3",kickoff:"Fri 20 Mar 6:00 PM",kickoffAt:"2026-03-20T18:00:00+11:00"},
    {id:"storm-broncos",title:"Storm vs Broncos",homeTeam:"Storm",awayTeam:"Broncos",venue:"AAMI Park",roundLabel:"Round 3",kickoff:"Fri 20 Mar 8:00 PM",kickoffAt:"2026-03-20T20:00:00+11:00"},
    {id:"knights-warriors",title:"Knights vs Warriors",homeTeam:"Knights",awayTeam:"Warriors",venue:"McDonald Jones Stadium",roundLabel:"Round 3",kickoff:"Sat 21 Mar 3:00 PM",kickoffAt:"2026-03-21T15:00:00+11:00"},
    {id:"sharks-dolphins",title:"Sharks vs Dolphins",homeTeam:"Sharks",awayTeam:"Dolphins",venue:"Sharks Stadium",roundLabel:"Round 3",kickoff:"Sat 21 Mar 5:30 PM",kickoffAt:"2026-03-21T17:30:00+11:00"},
    {id:"rabbitohs-wests-tigers",title:"Rabbitohs vs Wests Tigers",homeTeam:"Rabbitohs",awayTeam:"Wests Tigers",venue:"Polytec Stadium, Gosford",roundLabel:"Round 3",kickoff:"Sat 21 Mar 7:35 PM",kickoffAt:"2026-03-21T19:35:00+11:00"},
    {id:"eels-dragons",title:"Eels vs Dragons",homeTeam:"Eels",awayTeam:"Dragons",venue:"CommBank Stadium",roundLabel:"Round 3",kickoff:"Sun 22 Mar 4:05 PM",kickoffAt:"2026-03-22T16:05:00+11:00"},
    {id:"cowboys-titans",title:"Cowboys vs Titans",homeTeam:"Cowboys",awayTeam:"Titans",venue:"Queensland Country Bank Stadium",roundLabel:"Round 3",kickoff:"Sun 22 Mar 6:15 PM",kickoffAt:"2026-03-22T18:15:00+10:00"},
    {id:"sea-eagles-roosters",title:"Sea Eagles vs Roosters",homeTeam:"Sea Eagles",awayTeam:"Roosters",venue:"4 Pines Park",roundLabel:"Round 4",kickoff:"Thu 26 Mar 8:00 PM",kickoffAt:"2026-03-26T20:00:00+11:00"},
    {id:"warriors-wests-tigers",title:"Warriors vs Wests Tigers",homeTeam:"Warriors",awayTeam:"Wests Tigers",venue:"Go Media Stadium",roundLabel:"Round 4",kickoff:"Fri 27 Mar 6:00 PM",kickoffAt:"2026-03-27T18:00:00+13:00"},
    {id:"broncos-dolphins",title:"Broncos vs Dolphins",homeTeam:"Broncos",awayTeam:"Dolphins",venue:"Suncorp Stadium",roundLabel:"Round 4",kickoff:"Fri 27 Mar 8:00 PM",kickoffAt:"2026-03-27T20:00:00+10:00"},
    {id:"bulldogs-knights",title:"Bulldogs vs Knights",homeTeam:"Bulldogs",awayTeam:"Knights",venue:"Accor Stadium",roundLabel:"Round 4",kickoff:"Sat 28 Mar 3:00 PM",kickoffAt:"2026-03-28T15:00:00+11:00"},
    {id:"cowboys-storm",title:"Cowboys vs Storm",homeTeam:"Cowboys",awayTeam:"Storm",venue:"Queensland Country Bank Stadium",roundLabel:"Round 4",kickoff:"Sat 28 Mar 5:30 PM",kickoffAt:"2026-03-28T17:30:00+10:00"},
    {id:"eels-panthers",title:"Eels vs Panthers",homeTeam:"Eels",awayTeam:"Panthers",venue:"CommBank Stadium",roundLabel:"Round 4",kickoff:"Sat 28 Mar 7:35 PM",kickoffAt:"2026-03-28T19:35:00+11:00"},
    {id:"raiders-sharks",title:"Raiders vs Sharks",homeTeam:"Raiders",awayTeam:"Sharks",venue:"GIO Stadium",roundLabel:"Round 4",kickoff:"Sun 29 Mar 4:05 PM",kickoffAt:"2026-03-29T16:05:00+11:00"},
    {id:"titans-dragons",title:"Titans vs Dragons",homeTeam:"Titans",awayTeam:"Dragons",venue:"Cbus Super Stadium",roundLabel:"Round 4",kickoff:"Sun 29 Mar 6:15 PM",kickoffAt:"2026-03-29T18:15:00+10:00"},
    {id:"dolphins-sea-eagles",title:"Dolphins vs Sea Eagles",homeTeam:"Dolphins",awayTeam:"Sea Eagles",venue:"Kayo Stadium",roundLabel:"Round 5",kickoff:"Thu 2 Apr 8:00 PM",kickoffAt:"2026-04-02T19:00:00+10:00"},
    {id:"rabbitohs-bulldogs",title:"Rabbitohs vs Bulldogs",homeTeam:"Rabbitohs",awayTeam:"Bulldogs",venue:"Accor Stadium",roundLabel:"Round 5",kickoff:"Fri 3 Apr 4:05 PM",kickoffAt:"2026-04-03T16:05:00+11:00"},
    {id:"panthers-storm",title:"Panthers vs Storm",homeTeam:"Panthers",awayTeam:"Storm",venue:"CommBank Stadium",roundLabel:"Round 5",kickoff:"Fri 3 Apr 8:00 PM",kickoffAt:"2026-04-03T20:00:00+11:00"},
    {id:"dragons-cowboys",title:"Dragons vs Cowboys",homeTeam:"Dragons",awayTeam:"Cowboys",venue:"Jubilee Oval",roundLabel:"Round 5",kickoff:"Sat 4 Apr 5:30 PM",kickoffAt:"2026-04-04T17:30:00+11:00"},
    {id:"titans-broncos",title:"Titans vs Broncos",homeTeam:"Titans",awayTeam:"Broncos",venue:"Cbus Super Stadium",roundLabel:"Round 5",kickoff:"Sat 4 Apr 6:35 PM",kickoffAt:"2026-04-04T18:35:00+10:00"},
    {id:"sharks-warriors",title:"Sharks vs Warriors",homeTeam:"Sharks",awayTeam:"Warriors",venue:"Ocean Protect Stadium",roundLabel:"Round 5",kickoff:"Sun 5 Apr 2:00 PM",kickoffAt:"2026-04-05T14:00:00+10:00"},
    {id:"knights-raiders",title:"Knights vs Raiders",homeTeam:"Knights",awayTeam:"Raiders",venue:"McDonald Jones Stadium",roundLabel:"Round 5",kickoff:"Sun 5 Apr 4:05 PM",kickoffAt:"2026-04-05T16:05:00+10:00"},
    {id:"eels-wests-tigers",title:"Eels vs Wests Tigers",homeTeam:"Eels",awayTeam:"Wests Tigers",venue:"CommBank Stadium",roundLabel:"Round 5",kickoff:"Mon 6 Apr 4:05 PM",kickoffAt:"2026-04-06T16:05:00+10:00"},
    {id:"bulldogs-panthers",title:"Bulldogs vs Panthers",homeTeam:"Bulldogs",awayTeam:"Panthers",venue:"Accor Stadium",roundLabel:"Round 6",kickoff:"Thu 9 Apr 7:50 PM",kickoffAt:"2026-04-09T19:50:00+10:00"},
    {id:"dragons-sea-eagles",title:"Dragons vs Sea Eagles",homeTeam:"Dragons",awayTeam:"Sea Eagles",venue:"WIN Stadium",roundLabel:"Round 6",kickoff:"Fri 10 Apr 6:00 PM",kickoffAt:"2026-04-10T18:00:00+10:00"},
    {id:"broncos-cowboys",title:"Broncos vs Cowboys",homeTeam:"Broncos",awayTeam:"Cowboys",venue:"Suncorp Stadium",roundLabel:"Round 6",kickoff:"Fri 10 Apr 8:00 PM",kickoffAt:"2026-04-10T20:00:00+10:00"},
    {id:"rabbitohs-raiders",title:"Rabbitohs vs Raiders",homeTeam:"Rabbitohs",awayTeam:"Raiders",venue:"Optus Stadium",roundLabel:"Round 6",kickoff:"Sat 11 Apr 3:00 PM",kickoffAt:"2026-04-11T15:00:00+10:00"},
    {id:"sharks-roosters",title:"Sharks vs Roosters",homeTeam:"Sharks",awayTeam:"Roosters",venue:"Optus Stadium",roundLabel:"Round 6",kickoff:"Sat 11 Apr 5:30 PM",kickoffAt:"2026-04-11T17:30:00+10:00"},
    {id:"storm-warriors",title:"Storm vs Warriors",homeTeam:"Storm",awayTeam:"Warriors",venue:"AAMI Park",roundLabel:"Round 6",kickoff:"Sat 11 Apr 7:35 PM",kickoffAt:"2026-04-11T19:35:00+10:00"},
    {id:"eels-titans",title:"Eels vs Titans",homeTeam:"Eels",awayTeam:"Titans",venue:"CommBank Stadium",roundLabel:"Round 6",kickoff:"Sun 12 Apr 2:00 PM",kickoffAt:"2026-04-12T14:00:00+10:00"},
    {id:"wests-tigers-knights",title:"Wests Tigers vs Knights",homeTeam:"Wests Tigers",awayTeam:"Knights",venue:"Campbelltown Sports Stadium",roundLabel:"Round 6",kickoff:"Sun 12 Apr 4:05 PM",kickoffAt:"2026-04-12T16:05:00+10:00"},
    {id:"cowboys-sea-eagles",title:"Cowboys vs Sea Eagles",homeTeam:"Cowboys",awayTeam:"Sea Eagles",venue:"Queensland Country Bank Stadium",roundLabel:"Round 7",kickoff:"Thu 16 Apr 7:50 PM",kickoffAt:"2026-04-16T09:50:00+00:00"},
    {id:"raiders-storm",title:"Raiders vs Storm",homeTeam:"Raiders",awayTeam:"Storm",venue:"GIO Stadium",roundLabel:"Round 7",kickoff:"Fri 17 Apr 6:00 PM",kickoffAt:"2026-04-17T08:00:00+00:00"},
    {id:"dolphins-panthers",title:"Dolphins vs Panthers",homeTeam:"Dolphins",awayTeam:"Panthers",venue:"TIO Stadium, Darwin",roundLabel:"Round 7",kickoff:"Fri 17 Apr 7:30 PM",kickoffAt:"2026-04-17T10:00:00+00:00"},
    {id:"warriors-titans",title:"Warriors vs Titans",homeTeam:"Warriors",awayTeam:"Titans",venue:"Go Media Stadium",roundLabel:"Round 7",kickoff:"Sat 18 Apr 5:00 PM",kickoffAt:"2026-04-18T05:00:00+00:00"},
    {id:"rabbitohs-dragons",title:"Rabbitohs vs Dragons",homeTeam:"Rabbitohs",awayTeam:"Dragons",venue:"Accor Stadium",roundLabel:"Round 7",kickoff:"Sat 18 Apr 5:30 PM",kickoffAt:"2026-04-18T07:30:00+00:00"},
    {id:"wests-tigers-broncos",title:"Wests Tigers vs Broncos",homeTeam:"Wests Tigers",awayTeam:"Broncos",venue:"Campbelltown Sports Stadium",roundLabel:"Round 7",kickoff:"Sat 18 Apr 7:35 PM",kickoffAt:"2026-04-18T09:35:00+00:00"},
    {id:"roosters-knights",title:"Roosters vs Knights",homeTeam:"Roosters",awayTeam:"Knights",venue:"Allianz Stadium",roundLabel:"Round 7",kickoff:"Sun 19 Apr 2:00 PM",kickoffAt:"2026-04-19T04:00:00+00:00"},
    {id:"eels-bulldogs",title:"Eels vs Bulldogs",homeTeam:"Eels",awayTeam:"Bulldogs",venue:"CommBank Stadium",roundLabel:"Round 7",kickoff:"Sun 19 Apr 4:05 PM",kickoffAt:"2026-04-19T06:05:00+00:00"},
    {id:"wests-tigers-raiders",title:"Wests Tigers vs Raiders",homeTeam:"Wests Tigers",awayTeam:"Raiders",venue:"Leichhardt Oval",roundLabel:"Round 8",kickoff:"Thu 23 Apr 7:50 PM",kickoffAt:"2026-04-23T19:50:00+10:00"},
    {id:"cowboys-sharks",title:"Cowboys vs Sharks",homeTeam:"Cowboys",awayTeam:"Sharks",venue:"Queensland Country Bank Stadium",roundLabel:"Round 8",kickoff:"Fri 24 Apr 6:00 PM",kickoffAt:"2026-04-24T18:00:00+10:00"},
    {id:"broncos-bulldogs",title:"Broncos vs Bulldogs",homeTeam:"Broncos",awayTeam:"Bulldogs",venue:"Suncorp Stadium",roundLabel:"Round 8",kickoff:"Fri 24 Apr 8:00 PM",kickoffAt:"2026-04-24T20:00:00+10:00"},
    {id:"dragons-roosters",title:"Dragons vs Roosters",homeTeam:"Dragons",awayTeam:"Roosters",venue:"Allianz Stadium",roundLabel:"Round 8",kickoff:"Sat 25 Apr 4:00 PM",kickoffAt:"2026-04-25T16:00:00+10:00"},
    {id:"warriors-dolphins",title:"Warriors vs Dolphins",homeTeam:"Warriors",awayTeam:"Dolphins",venue:"Sky Stadium",roundLabel:"Round 8",kickoff:"Sat 25 Apr 6:05 PM",kickoffAt:"2026-04-25T18:05:00+10:00"},
    {id:"storm-rabbitohs",title:"Storm vs Rabbitohs",homeTeam:"Storm",awayTeam:"Rabbitohs",venue:"AAMI Park",roundLabel:"Round 8",kickoff:"Sat 25 Apr 8:10 PM",kickoffAt:"2026-04-25T20:10:00+10:00"},
    {id:"knights-panthers",title:"Knights vs Panthers",homeTeam:"Knights",awayTeam:"Panthers",venue:"McDonald Jones Stadium",roundLabel:"Round 8",kickoff:"Sun 26 Apr 2:00 PM",kickoffAt:"2026-04-26T14:00:00+10:00"},
    {id:"sea-eagles-eels",title:"Sea Eagles vs Eels",homeTeam:"Sea Eagles",awayTeam:"Eels",venue:"4 Pines Park",roundLabel:"Round 8",kickoff:"Sun 26 Apr 4:05 PM",kickoffAt:"2026-04-26T16:05:00+10:00"}
  ];
  const matchOddsByGame={"raiders-bulldogs":{home:1.9,away:1.9},"roosters-panthers":{home:1.9,away:1.9},"storm-broncos":{home:1.9,away:1.9},"knights-warriors":{home:1.9,away:1.9},"sharks-dolphins":{home:1.9,away:1.9},"rabbitohs-wests-tigers":{home:1.9,away:1.9},"eels-dragons":{home:1.9,away:1.9},"cowboys-titans":{home:1.9,away:1.9},"sea-eagles-roosters":{home:1.9,away:1.9},"warriors-wests-tigers":{home:1.9,away:1.9},"broncos-dolphins":{home:1.9,away:1.9},"bulldogs-knights":{home:1.9,away:1.9},"cowboys-storm":{home:1.9,away:1.9},"eels-panthers":{home:1.9,away:1.9},"raiders-sharks":{home:1.9,away:1.9},"titans-dragons":{home:1.9,away:1.9},"dolphins-sea-eagles":{home:1.9,away:1.9},"rabbitohs-bulldogs":{home:1.9,away:1.9},"panthers-storm":{home:1.9,away:1.9},"dragons-cowboys":{home:1.9,away:1.9},"titans-broncos":{home:1.9,away:1.9},"sharks-warriors":{home:1.9,away:1.9},"knights-raiders":{home:1.9,away:1.9},"eels-wests-tigers":{home:1.9,away:1.9},"bulldogs-panthers":{home:1.9,away:1.9},"dragons-sea-eagles":{home:1.9,away:1.9},"broncos-cowboys":{home:1.9,away:1.9},"rabbitohs-raiders":{home:1.9,away:1.9},"sharks-roosters":{home:1.9,away:1.9},"storm-warriors":{home:1.9,away:1.9},"eels-titans":{home:1.9,away:1.9},"wests-tigers-knights":{home:1.9,away:1.9},"cowboys-sea-eagles":{home:1.9,away:1.9},"raiders-storm":{home:1.9,away:1.9},"dolphins-panthers":{home:1.9,away:1.9},"warriors-titans":{home:1.9,away:1.9},"rabbitohs-dragons":{home:1.9,away:1.9},"wests-tigers-broncos":{home:1.9,away:1.9},"roosters-knights":{home:1.9,away:1.9},"eels-bulldogs":{home:1.9,away:1.9}}; // Demo odds seed. Replace these with your actual match prices.
  const TEAM_COLORS={"Broncos":{primary:"#6A1F2B",secondary:"#FDB827"},"Raiders":{primary:"#00A651",secondary:"#FFFFFF"},"Bulldogs":{primary:"#003A8F",secondary:"#FFFFFF"},"Sharks":{primary:"#000000",secondary:"#0086C3"},"Dolphins":{primary:"#E31837",secondary:"#F2A900"},"Titans":{primary:"#00205B",secondary:"#F2A900"},"Sea Eagles":{primary:"#6A1F2B",secondary:"#FFFFFF"},"Storm":{primary:"#5C2D91",secondary:"#001A57"},"Knights":{primary:"#003A8F",secondary:"#E31837"},"Warriors":{primary:"#003A8F",secondary:"#00A651"},"Cowboys":{primary:"#002B5C",secondary:"#FFC72C"},"Eels":{primary:"#003A8F",secondary:"#FFC72C"},"Panthers":{primary:"#000000",secondary:"#00A3E0"},"Rabbitohs":{primary:"#8B1C2D",secondary:"#006341"},"Dragons":{primary:"#E31837",secondary:"#FFFFFF"},"Roosters":{primary:"#E31837",secondary:"#00205B"},"Wests Tigers":{primary:"#F36F21",secondary:"#000000"},"Tigers":{primary:"#F36F21",secondary:"#000000"}};
  const seededMarkets=[];
  const seededMarketOverrides=new Map(seededMarkets.map((market)=>[`${market.gameId}|${market.team}|${market.playerName}`,market]));
  const playerRowsByGame={
    "raiders-bulldogs":[
      ["Raiders","Kaeo Weekes","Fullback",1],["Raiders","Savelio Tamale","Winger",2],["Raiders","Simi Sasagi","Centre",3],["Raiders","Sebastian Kris","Centre",4],["Raiders","Xavier Savage","Winger",5],["Raiders","Ethan Strange","Five-Eighth",6],["Raiders","Ethan Sanders","Halfback",7],["Raiders","Josh Papalii","Prop",8],["Raiders","Tom Starling","Hooker",9],["Raiders","Joseph Tapine","Prop",10],["Raiders","Hudson Young","2nd Row",11],["Raiders","Noah Martin","2nd Row",12],["Raiders","Corey Horsburgh","Lock",13],
      ["Bulldogs","Connor Tracey","Fullback",1],["Bulldogs","Jacob Kiraz","Winger",2],["Bulldogs","Enari Tuala","Centre",3],["Bulldogs","Stephen Crichton","Centre",4],["Bulldogs","Marcelo Montoya","Winger",5],["Bulldogs","Matt Burton","Five-Eighth",6],["Bulldogs","Lachlan Galvin","Halfback",7],["Bulldogs","Max King","Prop",8],["Bulldogs","Bailey Hayward","Hooker",9],["Bulldogs","Samuel Hughes","Prop",10],["Bulldogs","Viliame Kikau","2nd Row",11],["Bulldogs","Jacob Preston","2nd Row",12],["Bulldogs","Jaeman Salmon","Lock",13]
    ],
    "roosters-panthers":[
      ["Roosters","James Tedesco","Fullback",1],["Roosters","Daniel Tupou","Winger",2],["Roosters","Fetalaiga Pauga","Centre",3],["Roosters","Robert Toia","Centre",4],["Roosters","Mark Nawaqanitawase","Winger",5],["Roosters","Daly Cherry-Evans","Five-Eighth",6],["Roosters","Sam Walker","Halfback",7],["Roosters","Naufahu Whyte","Prop",8],["Roosters","Reece Robson","Hooker",9],["Roosters","Lindsay Collins","Prop",10],["Roosters","Angus Crichton","2nd Row",11],["Roosters","Siua Wong","2nd Row",12],["Roosters","Egan Butcher","Lock",13],
      ["Panthers","Dylan Edwards","Fullback",1],["Panthers","Thomas Jenkins","Winger",2],["Panthers","Paul Alamoti","Centre",3],["Panthers","Casey McLean","Centre",4],["Panthers","Brian To'o","Winger",5],["Panthers","Blaize Talagi","Five-Eighth",6],["Panthers","Nathan Cleary","Halfback",7],["Panthers","Moses Leota","Prop",8],["Panthers","Mitch Kenny","Hooker",9],["Panthers","Lindsay Smith","Prop",10],["Panthers","Isaiah Papali'i","2nd Row",11],["Panthers","Liam Martin","2nd Row",12],["Panthers","Isaah Yeo","Lock",13]
    ],
    "storm-broncos":[
      ["Storm","Sualauvi Faalogo","Fullback",1],["Storm","Will Warbrick","Winger",2],["Storm","Jack Howarth","Centre",3],["Storm","Moses Leo","Centre",4],["Storm","Nick Meaney","Winger",5],["Storm","Cameron Munster","Five-Eighth",6],["Storm","Jahrome Hughes","Halfback",7],["Storm","Stefano Utoikamanu","Prop",8],["Storm","Harry Grant","Hooker",9],["Storm","Josh King","Prop",10],["Storm","Joe Chan","2nd Row",11],["Storm","Ativalu Lisati","2nd Row",12],["Storm","Tui Kamikamica","Lock",13],
      ["Broncos","Reece Walsh","Fullback",1],["Broncos","Josiah Karapani","Winger",2],["Broncos","Kotoni Staggs","Centre",3],["Broncos","Deine Mariner","Centre",4],["Broncos","Grant Anderson","Winger",5],["Broncos","Ezra Mam","Five-Eighth",6],["Broncos","Adam Reynolds","Halfback",7],["Broncos","Corey Jensen","Prop",8],["Broncos","Cory Paix","Hooker",9],["Broncos","Payne Haas","Prop",10],["Broncos","Xavier Willison","2nd Row",11],["Broncos","Jordan Riki","2nd Row",12],["Broncos","Patrick Carrigan","Lock",13]
    ],
    "knights-warriors":[
      ["Knights","Fletcher Hunt","Fullback",1],["Knights","Dominic Young","Winger",2],["Knights","Dane Gagai","Centre",3],["Knights","Bradman Best","Centre",4],["Knights","Greg Marzhew","Winger",5],["Knights","Fletcher Sharpe","Five-Eighth",6],["Knights","Sandon Smith","Halfback",7],["Knights","Jacob Saifiti","Prop",8],["Knights","Phoenix Crossland","Hooker",9],["Knights","Trey Mooney","Prop",10],["Knights","Dylan Lucas","2nd Row",11],["Knights","Jermaine McEwen","2nd Row",12],["Knights","Tyson Frizell","Lock",13],
      ["Warriors","Taine Tuaupiki","Fullback",1],["Warriors","Dallin Watene-Zelezniak","Winger",2],["Warriors","Ali Leiataua","Centre",3],["Warriors","Adam Pompey","Centre",4],["Warriors","Roger Tuivasa-Sheck","Winger",5],["Warriors","Luke Hanson","Five-Eighth",6],["Warriors","Tanah Boyd","Halfback",7],["Warriors","James Fisher-Harris","Prop",8],["Warriors","Wayde Egan","Hooker",9],["Warriors","Jackson Ford","Prop",10],["Warriors","Leka Halasima","2nd Row",11],["Warriors","Jacob Laban","2nd Row",12],["Warriors","Erin Clark","Lock",13]
    ],
    "sharks-dolphins":[
      ["Sharks","William Kennedy","Fullback",1],["Sharks","Sione Katoa","Winger",2],["Sharks","Jesse Ramien","Centre",3],["Sharks","KL Iro","Centre",4],["Sharks","Samuel Stonestreet","Winger",5],["Sharks","Braydon Trindall","Five-Eighth",6],["Sharks","Nicholas Hynes","Halfback",7],["Sharks","Addin Fonua-Blake","Prop",8],["Sharks","Blayke Brailey","Hooker",9],["Sharks","Thomas Hazelton","Prop",10],["Sharks","Briton Nikora","2nd Row",11],["Sharks","Billy Burns","2nd Row",12],["Sharks","Jesse Colquhoun","Lock",13],
      ["Dolphins","Hamiso Tabuai-Fidow","Fullback",1],["Dolphins","Jamayne Isaako","Winger",2],["Dolphins","Jake Averillo","Centre",3],["Dolphins","Herbie Farnworth","Centre",4],["Dolphins","Selwyn Cobbo","Winger",5],["Dolphins","Kodi Nikorima","Five-Eighth",6],["Dolphins","Isaiya Katoa","Halfback",7],["Dolphins","Tom Gilbert","Prop",8],["Dolphins","Max Plath","Hooker",9],["Dolphins","Thomas Flegler","Prop",10],["Dolphins","Connelly Lemuelu","2nd Row",11],["Dolphins","Kulikefu Finefeuiaki","2nd Row",12],["Dolphins","Morgan Knowles","Lock",13]
    ],
    "rabbitohs-wests-tigers":[
      ["Rabbitohs","Jye Gray","Fullback",1],["Rabbitohs","Alex Johnston","Winger",2],["Rabbitohs","Latrell Mitchell","Centre",3],["Rabbitohs","Jack Wighton","Centre",4],["Rabbitohs","Campbell Graham","Winger",5],["Rabbitohs","Cody Walker","Five-Eighth",6],["Rabbitohs","Jamie Humphreys","Halfback",7],["Rabbitohs","Tevita Tatola","Prop",8],["Rabbitohs","Bronson Garlick","Hooker",9],["Rabbitohs","Keaon Koloamatangi","Prop",10],["Rabbitohs","David Fifita","2nd Row",11],["Rabbitohs","Tallis Duncan","2nd Row",12],["Rabbitohs","Cameron Murray","Lock",13],
      ["Wests Tigers","Jahream Bula","Fullback",1],["Wests Tigers","Sunia Turuva","Winger",2],["Wests Tigers","Jeral Skelton","Centre",3],["Wests Tigers","Heamasi Makasini","Centre",4],["Wests Tigers","Luke Laulilii","Winger",5],["Wests Tigers","Jarome Luai","Five-Eighth",6],["Wests Tigers","Adam Doueihi","Halfback",7],["Wests Tigers","Terrell May","Prop",8],["Wests Tigers","Apisai Koroisau","Hooker",9],["Wests Tigers","Fonua Pole","Prop",10],["Wests Tigers","Samuela Fainu","2nd Row",11],["Wests Tigers","Kai Pearce-Paul","2nd Row",12],["Wests Tigers","Alex Twal","Lock",13]
    ],
    "eels-dragons":[
      ["Eels","Isaiah Iongi","Fullback",1],["Eels","Bailey Simonsson","Winger",2],["Eels","Jordan Samrani","Centre",3],["Eels","Sean Russell","Centre",4],["Eels","Josh Addo-Carr","Winger",5],["Eels","Jonah Pezet","Five-Eighth",6],["Eels","Mitchell Moses","Halfback",7],["Eels","J'maine Hopgood","Prop",8],["Eels","Ryley Smith","Hooker",9],["Eels","Junior Paulo","Prop",10],["Eels","Kelma Tuilagi","2nd Row",11],["Eels","Kitione Kautoga","2nd Row",12],["Eels","Jack Williams","Lock",13],
      ["Dragons","Clinton Gutherson","Fullback",1],["Dragons","Christian Tuipulotu","Winger",2],["Dragons","Moses Suli","Centre",3],["Dragons","Valentine Holmes","Centre",4],["Dragons","Setu Tu","Winger",5],["Dragons","Kyle Flanagan","Five-Eighth",6],["Dragons","Daniel Atkinson","Halfback",7],["Dragons","Emre Guler","Prop",8],["Dragons","Damien Cook","Hooker",9],["Dragons","Toby Couchman","Prop",10],["Dragons","Luciano Leilua","2nd Row",11],["Dragons","Jaydn Su'A","2nd Row",12],["Dragons","Hamish Stewart","Lock",13]
    ],
    "cowboys-titans":[
      ["Cowboys","Scott Drinkwater","Fullback",1],["Cowboys","Braidon Burns","Winger",2],["Cowboys","Jaxon Purdue","Centre",3],["Cowboys","Tom Chester","Centre",4],["Cowboys","Murray Taulagi","Winger",5],["Cowboys","Jake Clifford","Five-Eighth",6],["Cowboys","Tom Dearden","Halfback",7],["Cowboys","Coen Hess","Prop",8],["Cowboys","Reed Mahoney","Hooker",9],["Cowboys","Jason Taumalolo","Prop",10],["Cowboys","Heilum Luki","2nd Row",11],["Cowboys","Sam McIntyre","2nd Row",12],["Cowboys","Reuben Cotter","Lock",13],
      ["Titans","Keano Kini","Fullback",1],["Titans","Sialetili Faeamani","Winger",2],["Titans","Jojo Fifita","Centre",3],["Titans","Max Feagai","Centre",4],["Titans","Phillip Sami","Winger",5],["Titans","AJ Brimson","Five-Eighth",6],["Titans","Lachlan Ilias","Halfback",7],["Titans","Moeaki Fotuaika","Prop",8],["Titans","Sam Verrills","Hooker",9],["Titans","Tino Fa'asuamaleaui","Prop",10],["Titans","Arama Hau","2nd Row",11],["Titans","Beau Fermor","2nd Row",12],["Titans","Chris Randall","Lock",13]
    ]
  };
  const ROUND_2_SEA_EAGLES=[
    ["Sea Eagles","Tom Trbojevic","Fullback",1],["Sea Eagles","Jason Saab","Winger",2],["Sea Eagles","Tolutau Koula","Centre",3],["Sea Eagles","Reuben Garrick","Centre",4],["Sea Eagles","Lehi Hopoate","Winger",5],["Sea Eagles","Luke Brooks","Five-Eighth",6],["Sea Eagles","Jamal Fogarty","Halfback",7],["Sea Eagles","Taniela Paseka","Prop",8],["Sea Eagles","Jake Simpkin","Hooker",9],["Sea Eagles","Kobe Hetherington","Prop",10],["Sea Eagles","Haumole Olakau'atu","2nd Row",11],["Sea Eagles","Ben Trbojevic","2nd Row",12],["Sea Eagles","Jake Trbojevic","Lock",13]
  ];
  function cloneTeamRows(gameId,team){
    return (playerRowsByGame[gameId]||[]).filter((row)=>row[0]===team).map((row)=>[...row]);
  }
  playerRowsByGame["sea-eagles-roosters"]=[
    ["Sea Eagles","Tom Trbojevic","Fullback",1],["Sea Eagles","Jason Saab","Winger",2],["Sea Eagles","Tolutau Koula","Centre",3],["Sea Eagles","Reuben Garrick","Centre",4],["Sea Eagles","Lehi Hopoate","Winger",5],["Sea Eagles","Luke Brooks","Five-Eighth",6],["Sea Eagles","Jamal Fogarty","Halfback",7],["Sea Eagles","Taniela Paseka","Prop",8],["Sea Eagles","Jake Simpkin","Hooker",9],["Sea Eagles","Kobe Hetherington","Prop",10],["Sea Eagles","Haumole Olakau'atu","2nd Row",11],["Sea Eagles","Ben Trbojevic","2nd Row",12],["Sea Eagles","Jake Trbojevic","Lock",13],
    ["Roosters","James Tedesco","Fullback",1],["Roosters","Daniel Tupou","Winger",2],["Roosters","Billy Smith","Centre",3],["Roosters","Robert Toia","Centre",4],["Roosters","Mark Nawaqanitawase","Winger",5],["Roosters","Daly Cherry-Evans","Five-Eighth",6],["Roosters","Sam Walker","Halfback",7],["Roosters","Naufahu Whyte","Prop",8],["Roosters","Reece Robson","Hooker",9],["Roosters","Lindsay Collins","Prop",10],["Roosters","Angus Crichton","2nd Row",11],["Roosters","Siua Wong","2nd Row",12],["Roosters","Egan Butcher","Lock",13]
  ];
  playerRowsByGame["warriors-wests-tigers"]=[
    ["Warriors","Charnze Nicoll-Klokstad","Fullback",1],["Warriors","Dallin Watene-Zelezniak","Winger",2],["Warriors","Adam Pompey","Centre",3],["Warriors","Ali Leiataua","Centre",4],["Warriors","Roger Tuivasa-Sheck","Winger",5],["Warriors","Luke Metcalf","Five-Eighth",6],["Warriors","Tanah Boyd","Halfback",7],["Warriors","James Fisher-Harris","Prop",8],["Warriors","Wayde Egan","Hooker",9],["Warriors","Jackson Ford","Prop",10],["Warriors","Leka Halasima","2nd Row",11],["Warriors","Jacob Laban","2nd Row",12],["Warriors","Erin Clark","Lock",13],
    ["Wests Tigers","Jahream Bula","Fullback",1],["Wests Tigers","Jeral Skelton","Winger",2],["Wests Tigers","Sunia Turuva","Centre",3],["Wests Tigers","Heamasi Makasini","Centre",4],["Wests Tigers","Luke Laulilii","Winger",5],["Wests Tigers","Jock Madden","Five-Eighth",6],["Wests Tigers","Adam Doueihi","Halfback",7],["Wests Tigers","Terrell May","Prop",8],["Wests Tigers","Apisai Koroisau","Hooker",9],["Wests Tigers","Fonua Pole","Prop",10],["Wests Tigers","Samuela Fainu","2nd Row",11],["Wests Tigers","Kai Pearce-Paul","2nd Row",12],["Wests Tigers","Alex Twal","Lock",13]
  ];
  playerRowsByGame["broncos-dolphins"]=[
    ["Broncos","Reece Walsh","Fullback",1],["Broncos","Josiah Karapani","Winger",2],["Broncos","Kotoni Staggs","Centre",3],["Broncos","Deine Mariner","Centre",4],["Broncos","Grant Anderson","Winger",5],["Broncos","Ezra Mam","Five-Eighth",6],["Broncos","Adam Reynolds","Halfback",7],["Broncos","Corey Jensen","Prop",8],["Broncos","Cory Paix","Hooker",9],["Broncos","Xavier Willison","Prop",10],["Broncos","Brendan Piakura","2nd Row",11],["Broncos","Jordan Riki","2nd Row",12],["Broncos","Patrick Carrigan","Lock",13],
    ["Dolphins","Hamiso Tabuai-Fidow","Fullback",1],["Dolphins","Jamayne Isaako","Winger",2],["Dolphins","Jake Averillo","Centre",3],["Dolphins","Herbie Farnworth","Centre",4],["Dolphins","Selwyn Cobbo","Winger",5],["Dolphins","Kodi Nikorima","Five-Eighth",6],["Dolphins","Isaiya Katoa","Halfback",7],["Dolphins","Tom Gilbert","Prop",8],["Dolphins","Max Plath","Hooker",9],["Dolphins","Felise Kaufusi","Prop",10],["Dolphins","Connelly Lemuelu","2nd Row",11],["Dolphins","Kulikefu Finefeuiaki","2nd Row",12],["Dolphins","Morgan Knowles","Lock",13]
  ];
  playerRowsByGame["bulldogs-knights"]=[
    ["Bulldogs","Connor Tracey","Fullback",1],["Bulldogs","Jacob Kiraz","Winger",2],["Bulldogs","Enari Tuala","Centre",3],["Bulldogs","Stephen Crichton","Centre",4],["Bulldogs","Marcelo Montoya","Winger",5],["Bulldogs","Matt Burton","Five-Eighth",6],["Bulldogs","Lachlan Galvin","Halfback",7],["Bulldogs","Max King","Prop",8],["Bulldogs","Bailey Hayward","Hooker",9],["Bulldogs","Sitili Tupouniua","Prop",10],["Bulldogs","Viliame Kikau","2nd Row",11],["Bulldogs","Jacob Preston","2nd Row",12],["Bulldogs","Jaeman Salmon","Lock",13],
    ["Knights","Fletcher Hunt","Fullback",1],["Knights","Dominic Young","Winger",2],["Knights","Dane Gagai","Centre",3],["Knights","Bradman Best","Centre",4],["Knights","Greg Marzhew","Winger",5],["Knights","Fletcher Sharpe","Five-Eighth",6],["Knights","Sandon Smith","Halfback",7],["Knights","Jacob Saifiti","Prop",8],["Knights","Phoenix Crossland","Hooker",9],["Knights","Tyson Frizell","Prop",10],["Knights","Dylan Lucas","2nd Row",11],["Knights","Jermaine McEwen","2nd Row",12],["Knights","Mat Croker","Lock",13]
  ];
  playerRowsByGame["cowboys-storm"]=[
    ["Cowboys","Scott Drinkwater","Fullback",1],["Cowboys","Braidon Burns","Winger",2],["Cowboys","Jaxon Purdue","Centre",3],["Cowboys","Zac Laybutt","Centre",4],["Cowboys","Murray Taulagi","Winger",5],["Cowboys","Jake Clifford","Five-Eighth",6],["Cowboys","Tom Dearden","Halfback",7],["Cowboys","Coen Hess","Prop",8],["Cowboys","Reed Mahoney","Hooker",9],["Cowboys","Jason Taumalolo","Prop",10],["Cowboys","Heilum Luki","2nd Row",11],["Cowboys","Sam McIntyre","2nd Row",12],["Cowboys","Reuben Cotter","Lock",13],
    ["Storm","Sualauvi Faalogo","Fullback",1],["Storm","Will Warbrick","Winger",2],["Storm","Jack Howarth","Centre",3],["Storm","Moses Leo","Centre",4],["Storm","Nick Meaney","Winger",5],["Storm","Cameron Munster","Five-Eighth",6],["Storm","Jahrome Hughes","Halfback",7],["Storm","Stefano Utoikamanu","Prop",8],["Storm","Harry Grant","Hooker",9],["Storm","Josh King","Prop",10],["Storm","Joe Chan","2nd Row",11],["Storm","Alec MacDonald","2nd Row",12],["Storm","Trent Loiero","Lock",13]
  ];
  playerRowsByGame["eels-panthers"]=[
    ["Eels","Isaiah Iongi","Fullback",1],["Eels","Bailey Simonsson","Winger",2],["Eels","Brian Kelly","Centre",3],["Eels","Sean Russell","Centre",4],["Eels","Josh Addo-Carr","Winger",5],["Eels","Jonah Pezet","Five-Eighth",6],["Eels","Mitchell Moses","Halfback",7],["Eels","Jack Williams","Prop",8],["Eels","Ryley Smith","Hooker",9],["Eels","Junior Paulo","Prop",10],["Eels","Kelma Tuilagi","2nd Row",11],["Eels","Kitione Kautoga","2nd Row",12],["Eels","Dylan Walker","Lock",13],
    ["Panthers","Dylan Edwards","Fullback",1],["Panthers","Thomas Jenkins","Winger",2],["Panthers","Paul Alamoti","Centre",3],["Panthers","Casey McLean","Centre",4],["Panthers","Brian To'o","Winger",5],["Panthers","Blaize Talagi","Five-Eighth",6],["Panthers","Nathan Cleary","Halfback",7],["Panthers","Moses Leota","Prop",8],["Panthers","Mitch Kenny","Hooker",9],["Panthers","Lindsay Smith","Prop",10],["Panthers","Isaiah Papali'i","2nd Row",11],["Panthers","Liam Martin","2nd Row",12],["Panthers","Isaah Yeo","Lock",13]
  ];
  playerRowsByGame["raiders-sharks"]=[
    ["Raiders","Kaeo Weekes","Fullback",1],["Raiders","Savelio Tamale","Winger",2],["Raiders","Simi Sasagi","Centre",3],["Raiders","Sebastian Kris","Centre",4],["Raiders","Xavier Savage","Winger",5],["Raiders","Ethan Strange","Five-Eighth",6],["Raiders","Ethan Sanders","Halfback",7],["Raiders","Morgan Smithies","Prop",8],["Raiders","Tom Starling","Hooker",9],["Raiders","Joseph Tapine","Prop",10],["Raiders","Hudson Young","2nd Row",11],["Raiders","Noah Martin","2nd Row",12],["Raiders","Corey Horsburgh","Lock",13],
    ["Sharks","William Kennedy","Fullback",1],["Sharks","Sione Katoa","Winger",2],["Sharks","Jesse Ramien","Centre",3],["Sharks","KL Iro","Centre",4],["Sharks","Samuel Stonestreet","Winger",5],["Sharks","Braydon Trindall","Five-Eighth",6],["Sharks","Nicholas Hynes","Halfback",7],["Sharks","Addin Fonua-Blake","Prop",8],["Sharks","Blayke Brailey","Hooker",9],["Sharks","Thomas Hazelton","Prop",10],["Sharks","Billy Burns","2nd Row",11],["Sharks","Teig Wilton","2nd Row",12],["Sharks","Jesse Colquhoun","Lock",13]
  ];
  playerRowsByGame["titans-dragons"]=[
    ["Titans","Keano Kini","Fullback",1],["Titans","Sialetili Faeamani","Winger",2],["Titans","Jojo Fifita","Centre",3],["Titans","Max Feagai","Centre",4],["Titans","Phillip Sami","Winger",5],["Titans","AJ Brimson","Five-Eighth",6],["Titans","Jayden Campbell","Halfback",7],["Titans","Moeaki Fotuaika","Prop",8],["Titans","Sam Verrills","Hooker",9],["Titans","Tino Fa'asuamaleaui","Prop",10],["Titans","Arama Hau","2nd Row",11],["Titans","Beau Fermor","2nd Row",12],["Titans","Chris Randall","Lock",13],
    ["Dragons","Clinton Gutherson","Fullback",1],["Dragons","Christian Tuipulotu","Winger",2],["Dragons","Moses Suli","Centre",3],["Dragons","Valentine Holmes","Centre",4],["Dragons","Setu Tu","Winger",5],["Dragons","Kyle Flanagan","Five-Eighth",6],["Dragons","Daniel Atkinson","Halfback",7],["Dragons","Emre Guler","Prop",8],["Dragons","Damien Cook","Hooker",9],["Dragons","Blake Lawrie","Prop",10],["Dragons","Luciano Leilua","2nd Row",11],["Dragons","Jaydn Su'A","2nd Row",12],["Dragons","Hamish Stewart","Lock",13]
  ];
  playerRowsByGame["dolphins-sea-eagles"]=[
    ["Dolphins","Hamiso Tabuai-Fidow","Fullback",1],["Dolphins","Jamayne Isaako","Winger",2],["Dolphins","Jake Averillo","Centre",3],["Dolphins","Herbie Farnworth","Centre",4],["Dolphins","Selwyn Cobbo","Winger",5],["Dolphins","Kodi Nikorima","Five-Eighth",6],["Dolphins","Isaiya Katoa","Halfback",7],["Dolphins","Tom Gilbert","Prop",8],["Dolphins","Max Plath","Hooker",9],["Dolphins","Felise Kaufusi","Prop",10],["Dolphins","Connelly Lemuelu","2nd Row",11],["Dolphins","Kulikefu Finefeuiaki","2nd Row",12],["Dolphins","Morgan Knowles","Lock",13],
    ["Sea Eagles","Tom Trbojevic","Fullback",1],["Sea Eagles","Clayton Faulalo","Winger",2],["Sea Eagles","Tolutau Koula","Centre",3],["Sea Eagles","Reuben Garrick","Centre",4],["Sea Eagles","Lehi Hopoate","Winger",5],["Sea Eagles","Luke Brooks","Five-Eighth",6],["Sea Eagles","Jamal Fogarty","Halfback",7],["Sea Eagles","Taniela Paseka","Prop",8],["Sea Eagles","Brandon Wakeham","Hooker",9],["Sea Eagles","Kobe Hetherington","Prop",10],["Sea Eagles","Haumole Olakau'atu","2nd Row",11],["Sea Eagles","Ben Trbojevic","2nd Row",12],["Sea Eagles","Jake Trbojevic","Lock",13]
  ];
  playerRowsByGame["rabbitohs-bulldogs"]=[
    ["Rabbitohs","Jye Gray","Fullback",1],["Rabbitohs","Alex Johnston","Winger",2],["Rabbitohs","Latrell Mitchell","Centre",3],["Rabbitohs","Jack Wighton","Centre",4],["Rabbitohs","Campbell Graham","Winger",5],["Rabbitohs","Cody Walker","Five-Eighth",6],["Rabbitohs","Jamie Humphreys","Halfback",7],["Rabbitohs","Tevita Tatola","Prop",8],["Rabbitohs","Bronson Garlick","Hooker",9],["Rabbitohs","Keaon Koloamatangi","Prop",10],["Rabbitohs","David Fifita","2nd Row",11],["Rabbitohs","Tallis Duncan","2nd Row",12],["Rabbitohs","Cameron Murray","Lock",13],
    ["Bulldogs","Connor Tracey","Fullback",1],["Bulldogs","Jacob Kiraz","Winger",2],["Bulldogs","Enari Tuala","Centre",3],["Bulldogs","Stephen Crichton","Centre",4],["Bulldogs","Marcelo Montoya","Winger",5],["Bulldogs","Matt Burton","Five-Eighth",6],["Bulldogs","Lachlan Galvin","Halfback",7],["Bulldogs","Max King","Prop",8],["Bulldogs","Bailey Hayward","Hooker",9],["Bulldogs","Samuel Hughes","Prop",10],["Bulldogs","Viliame Kikau","2nd Row",11],["Bulldogs","Jacob Preston","2nd Row",12],["Bulldogs","Jaeman Salmon","Lock",13]
  ];
  playerRowsByGame["panthers-storm"]=[
    ["Panthers","Dylan Edwards","Fullback",1],["Panthers","Thomas Jenkins","Winger",2],["Panthers","Paul Alamoti","Centre",3],["Panthers","Casey McLean","Centre",4],["Panthers","Brian To'o","Winger",5],["Panthers","Blaize Talagi","Five-Eighth",6],["Panthers","Nathan Cleary","Halfback",7],["Panthers","Moses Leota","Prop",8],["Panthers","Freddy Lussick","Hooker",9],["Panthers","Lindsay Smith","Prop",10],["Panthers","Isaiah Papali'i","2nd Row",11],["Panthers","Liam Martin","2nd Row",12],["Panthers","Isaah Yeo","Lock",13],
    ["Storm","Sualauvi Faalogo","Fullback",1],["Storm","Will Warbrick","Winger",2],["Storm","Jack Howarth","Centre",3],["Storm","Nick Meaney","Centre",4],["Storm","Siulagi Tuimalatu-Brown","Winger",5],["Storm","Cameron Munster","Five-Eighth",6],["Storm","Jahrome Hughes","Halfback",7],["Storm","Stefano Utoikamanu","Prop",8],["Storm","Harry Grant","Hooker",9],["Storm","Josh King","Prop",10],["Storm","Joe Chan","2nd Row",11],["Storm","Alec MacDonald","2nd Row",12],["Storm","Trent Loiero","Lock",13]
  ];
  playerRowsByGame["dragons-cowboys"]=[
    ["Dragons","Clinton Gutherson","Fullback",1],["Dragons","Christian Tuipulotu","Winger",2],["Dragons","Moses Suli","Centre",3],["Dragons","Valentine Holmes","Centre",4],["Dragons","David Fale","Winger",5],["Dragons","Lyhkan King-Togia","Five-Eighth",6],["Dragons","Daniel Atkinson","Halfback",7],["Dragons","Emre Guler","Prop",8],["Dragons","Damien Cook","Hooker",9],["Dragons","Toby Couchman","Prop",10],["Dragons","Luciano Leilua","2nd Row",11],["Dragons","Jaydn Su'A","2nd Row",12],["Dragons","Hamish Stewart","Lock",13],
    ["Cowboys","Scott Drinkwater","Fullback",1],["Cowboys","Braidon Burns","Winger",2],["Cowboys","Jaxon Purdue","Centre",3],["Cowboys","Tom Chester","Centre",4],["Cowboys","Murray Taulagi","Winger",5],["Cowboys","Jake Clifford","Five-Eighth",6],["Cowboys","Tom Dearden","Halfback",7],["Cowboys","Coen Hess","Prop",8],["Cowboys","Reed Mahoney","Hooker",9],["Cowboys","Jason Taumalolo","Prop",10],["Cowboys","Heilum Luki","2nd Row",11],["Cowboys","Sam McIntyre","2nd Row",12],["Cowboys","Reuben Cotter","Lock",13]
  ];
  playerRowsByGame["titans-broncos"]=[
    ["Titans","Keano Kini","Fullback",1],["Titans","Sialetili Faeamani","Winger",2],["Titans","Jojo Fifita","Centre",3],["Titans","AJ Brimson","Centre",4],["Titans","Phillip Sami","Winger",5],["Titans","Lachlan Ilias","Five-Eighth",6],["Titans","Jayden Campbell","Halfback",7],["Titans","Klese Haas","Prop",8],["Titans","Sam Verrills","Hooker",9],["Titans","Tino Fa'asuamaleaui","Prop",10],["Titans","Arama Hau","2nd Row",11],["Titans","Beau Fermor","2nd Row",12],["Titans","Chris Randall","Lock",13],
    ["Broncos","Reece Walsh","Fullback",1],["Broncos","Deine Mariner","Winger",2],["Broncos","Kotoni Staggs","Centre",3],["Broncos","Gehamat Shibasaki","Centre",4],["Broncos","Jesse Arthars","Winger",5],["Broncos","Ezra Mam","Five-Eighth",6],["Broncos","Adam Reynolds","Halfback",7],["Broncos","Corey Jensen","Prop",8],["Broncos","Cory Paix","Hooker",9],["Broncos","Payne Haas","Prop",10],["Broncos","Brendan Piakura","2nd Row",11],["Broncos","Jordan Riki","2nd Row",12],["Broncos","Patrick Carrigan","Lock",13]
  ];
  playerRowsByGame["sharks-warriors"]=[
    ["Sharks","William Kennedy","Fullback",1],["Sharks","Sione Katoa","Winger",2],["Sharks","Jesse Ramien","Centre",3],["Sharks","KL Iro","Centre",4],["Sharks","Samuel Stonestreet","Winger",5],["Sharks","Braydon Trindall","Five-Eighth",6],["Sharks","Nicholas Hynes","Halfback",7],["Sharks","Addin Fonua-Blake","Prop",8],["Sharks","Blayke Brailey","Hooker",9],["Sharks","Toby Rudolf","Prop",10],["Sharks","Billy Burns","2nd Row",11],["Sharks","Teig Wilton","2nd Row",12],["Sharks","Jesse Colquhoun","Lock",13],
    ["Warriors","Taine Tuaupiki","Fullback",1],["Warriors","Dallin Watene-Zelezniak","Winger",2],["Warriors","Charnze Nicoll-Klokstad","Centre",3],["Warriors","Adam Pompey","Centre",4],["Warriors","Roger Tuivasa-Sheck","Winger",5],["Warriors","Luke Metcalf","Five-Eighth",6],["Warriors","Tanah Boyd","Halfback",7],["Warriors","James Fisher-Harris","Prop",8],["Warriors","Wayde Egan","Hooker",9],["Warriors","Jackson Ford","Prop",10],["Warriors","Leka Halasima","2nd Row",11],["Warriors","Jacob Laban","2nd Row",12],["Warriors","Erin Clark","Lock",13]
  ];
  playerRowsByGame["knights-raiders"]=[
    ["Knights","Fletcher Hunt","Fullback",1],["Knights","Dominic Young","Winger",2],["Knights","Dane Gagai","Centre",3],["Knights","Bradman Best","Centre",4],["Knights","Greg Marzhew","Winger",5],["Knights","Fletcher Sharpe","Five-Eighth",6],["Knights","Sandon Smith","Halfback",7],["Knights","Jacob Saifiti","Prop",8],["Knights","Phoenix Crossland","Hooker",9],["Knights","Trey Mooney","Prop",10],["Knights","Dylan Lucas","2nd Row",11],["Knights","Jermaine McEwen","2nd Row",12],["Knights","Mat Croker","Lock",13],
    ["Raiders","Kaeo Weekes","Fullback",1],["Raiders","Savelio Tamale","Winger",2],["Raiders","Simi Sasagi","Centre",3],["Raiders","Sebastian Kris","Centre",4],["Raiders","Xavier Savage","Winger",5],["Raiders","Ethan Strange","Five-Eighth",6],["Raiders","Ethan Sanders","Halfback",7],["Raiders","Josh Papalii","Prop",8],["Raiders","Tom Starling","Hooker",9],["Raiders","Joseph Tapine","Prop",10],["Raiders","Hudson Young","2nd Row",11],["Raiders","Noah Martin","2nd Row",12],["Raiders","Corey Horsburgh","Lock",13]
  ];
  playerRowsByGame["eels-wests-tigers"]=[
    ["Eels","Joash Papalii","Fullback",1],["Eels","Bailey Simonsson","Winger",2],["Eels","Brian Kelly","Centre",3],["Eels","Sean Russell","Centre",4],["Eels","Josh Addo-Carr","Winger",5],["Eels","Jonah Pezet","Five-Eighth",6],["Eels","Mitchell Moses","Halfback",7],["Eels","Jack Williams","Prop",8],["Eels","Ryley Smith","Hooker",9],["Eels","Junior Paulo","Prop",10],["Eels","Kelma Tuilagi","2nd Row",11],["Eels","Kitione Kautoga","2nd Row",12],["Eels","Dylan Walker","Lock",13],
    ["Wests Tigers","Jahream Bula","Fullback",1],["Wests Tigers","Faaletino Tavana","Winger",2],["Wests Tigers","Sunia Turuva","Centre",3],["Wests Tigers","Heamasi Makasini","Centre",4],["Wests Tigers","Luke Laulilii","Winger",5],["Wests Tigers","Jock Madden","Five-Eighth",6],["Wests Tigers","Adam Doueihi","Halfback",7],["Wests Tigers","Terrell May","Prop",8],["Wests Tigers","Apisai Koroisau","Hooker",9],["Wests Tigers","Fonua Pole","Prop",10],["Wests Tigers","Samuela Fainu","2nd Row",11],["Wests Tigers","Kai Pearce-Paul","2nd Row",12],["Wests Tigers","Alex Twal","Lock",13]
  ];
  playerRowsByGame["bulldogs-panthers"]=[
    ["Bulldogs","Connor Tracey","Fullback",1],["Bulldogs","Jacob Kiraz","Winger",2],["Bulldogs","Enari Tuala","Centre",3],["Bulldogs","Bronson Xerri","Centre",4],["Bulldogs","Marcelo Montoya","Winger",5],["Bulldogs","Matt Burton","Five-Eighth",6],["Bulldogs","Lachlan Galvin","Halfback",7],["Bulldogs","Max King","Prop",8],["Bulldogs","Bailey Hayward","Hooker",9],["Bulldogs","Samuel Hughes","Prop",10],["Bulldogs","Viliame Kikau","2nd Row",11],["Bulldogs","Jacob Preston","2nd Row",12],["Bulldogs","Jaeman Salmon","Lock",13],
    ["Panthers","Dylan Edwards","Fullback",1],["Panthers","Thomas Jenkins","Winger",2],["Panthers","Paul Alamoti","Centre",3],["Panthers","Casey McLean","Centre",4],["Panthers","Brian To'o","Winger",5],["Panthers","Blaize Talagi","Five-Eighth",6],["Panthers","Nathan Cleary","Halfback",7],["Panthers","Moses Leota","Prop",8],["Panthers","Mitch Kenny","Hooker",9],["Panthers","Lindsay Smith","Prop",10],["Panthers","Isaiah Papali'i","2nd Row",11],["Panthers","Liam Martin","2nd Row",12],["Panthers","Isaah Yeo","Lock",13]
  ];
  playerRowsByGame["dragons-sea-eagles"]=[
    ["Dragons","Tyrell Sloan","Fullback",1],["Dragons","Christian Tuipulotu","Winger",2],["Dragons","Moses Suli","Centre",3],["Dragons","Valentine Holmes","Centre",4],["Dragons","Setu Tu","Winger",5],["Dragons","Daniel Atkinson","Five-Eighth",6],["Dragons","Kyle Flanagan","Halfback",7],["Dragons","Emre Guler","Prop",8],["Dragons","Damien Cook","Hooker",9],["Dragons","Toby Couchman","Prop",10],["Dragons","Luciano Leilua","2nd Row",11],["Dragons","Jaydn Su'A","2nd Row",12],["Dragons","Hamish Stewart","Lock",13],
    ["Sea Eagles","Tom Trbojevic","Fullback",1],["Sea Eagles","Jason Saab","Winger",2],["Sea Eagles","Tolutau Koula","Centre",3],["Sea Eagles","Reuben Garrick","Centre",4],["Sea Eagles","Lehi Hopoate","Winger",5],["Sea Eagles","Luke Brooks","Five-Eighth",6],["Sea Eagles","Jamal Fogarty","Halfback",7],["Sea Eagles","Taniela Paseka","Prop",8],["Sea Eagles","Brandon Wakeham","Hooker",9],["Sea Eagles","Kobe Hetherington","Prop",10],["Sea Eagles","Haumole Olakau'atu","2nd Row",11],["Sea Eagles","Ben Trbojevic","2nd Row",12],["Sea Eagles","Jake Trbojevic","Lock",13]
  ];
  playerRowsByGame["broncos-cowboys"]=[
    ["Broncos","Jesse Arthars","Fullback",1],["Broncos","Josiah Karapani","Winger",2],["Broncos","Kotoni Staggs","Centre",3],["Broncos","Gehamat Shibasaki","Centre",4],["Broncos","Deine Mariner","Winger",5],["Broncos","Ezra Mam","Five-Eighth",6],["Broncos","Adam Reynolds","Halfback",7],["Broncos","Corey Jensen","Prop",8],["Broncos","Cory Paix","Hooker",9],["Broncos","Payne Haas","Prop",10],["Broncos","Brendan Piakura","2nd Row",11],["Broncos","Jordan Riki","2nd Row",12],["Broncos","Patrick Carrigan","Lock",13],
    ["Cowboys","Scott Drinkwater","Fullback",1],["Cowboys","Braidon Burns","Winger",2],["Cowboys","Jaxon Purdue","Centre",3],["Cowboys","Tom Chester","Centre",4],["Cowboys","Murray Taulagi","Winger",5],["Cowboys","Jake Clifford","Five-Eighth",6],["Cowboys","Tom Dearden","Halfback",7],["Cowboys","Coen Hess","Prop",8],["Cowboys","Reed Mahoney","Hooker",9],["Cowboys","Jason Taumalolo","Prop",10],["Cowboys","Heilum Luki","2nd Row",11],["Cowboys","Kai O'Donnell","2nd Row",12],["Cowboys","Reuben Cotter","Lock",13]
  ];
  playerRowsByGame["rabbitohs-raiders"]=[
    ["Rabbitohs","Jye Gray","Fullback",1],["Rabbitohs","Alex Johnston","Winger",2],["Rabbitohs","Latrell Mitchell","Centre",3],["Rabbitohs","Jack Wighton","Centre",4],["Rabbitohs","Campbell Graham","Winger",5],["Rabbitohs","Cody Walker","Five-Eighth",6],["Rabbitohs","Jamie Humphreys","Halfback",7],["Rabbitohs","Tevita Tatola","Prop",8],["Rabbitohs","Brandon Smith","Hooker",9],["Rabbitohs","Keaon Koloamatangi","Prop",10],["Rabbitohs","David Fifita","2nd Row",11],["Rabbitohs","Tallis Duncan","2nd Row",12],["Rabbitohs","Cameron Murray","Lock",13],
    ["Raiders","Kaeo Weekes","Fullback",1],["Raiders","Savelio Tamale","Winger",2],["Raiders","Simi Sasagi","Centre",3],["Raiders","Sebastian Kris","Centre",4],["Raiders","Jed Stuart","Winger",5],["Raiders","Ethan Strange","Five-Eighth",6],["Raiders","Ethan Sanders","Halfback",7],["Raiders","Josh Papalii","Prop",8],["Raiders","Tom Starling","Hooker",9],["Raiders","Joseph Tapine","Prop",10],["Raiders","Hudson Young","2nd Row",11],["Raiders","Noah Martin","2nd Row",12],["Raiders","Corey Horsburgh","Lock",13]
  ];
  playerRowsByGame["sharks-roosters"]=[
    ["Sharks","William Kennedy","Fullback",1],["Sharks","Sione Katoa","Winger",2],["Sharks","Mawene Hiroti","Centre",3],["Sharks","KL Iro","Centre",4],["Sharks","Samuel Stonestreet","Winger",5],["Sharks","Braydon Trindall","Five-Eighth",6],["Sharks","Nicholas Hynes","Halfback",7],["Sharks","Addin Fonua-Blake","Prop",8],["Sharks","Blayke Brailey","Hooker",9],["Sharks","Toby Rudolf","Prop",10],["Sharks","Billy Burns","2nd Row",11],["Sharks","Teig Wilton","2nd Row",12],["Sharks","Jesse Colquhoun","Lock",13],
    ["Roosters","James Tedesco","Fullback",1],["Roosters","Daniel Tupou","Winger",2],["Roosters","Hugo Savala","Centre",3],["Roosters","Robert Toia","Centre",4],["Roosters","Mark Nawaqanitawase","Winger",5],["Roosters","Daly Cherry-Evans","Five-Eighth",6],["Roosters","Sam Walker","Halfback",7],["Roosters","Naufahu Whyte","Prop",8],["Roosters","Reece Robson","Hooker",9],["Roosters","Lindsay Collins","Prop",10],["Roosters","Angus Crichton","2nd Row",11],["Roosters","Siua Wong","2nd Row",12],["Roosters","Victor Radley","Lock",13]
  ];
  playerRowsByGame["storm-warriors"]=[
    ["Storm","Sualauvi Faalogo","Fullback",1],["Storm","Will Warbrick","Winger",2],["Storm","Jack Howarth","Centre",3],["Storm","Nick Meaney","Centre",4],["Storm","Moses Leo","Winger",5],["Storm","Cameron Munster","Five-Eighth",6],["Storm","Jahrome Hughes","Halfback",7],["Storm","Stefano Utoikamanu","Prop",8],["Storm","Harry Grant","Hooker",9],["Storm","Josh King","Prop",10],["Storm","Joe Chan","2nd Row",11],["Storm","Cooper Clarke","2nd Row",12],["Storm","Trent Loiero","Lock",13],
    ["Warriors","Taine Tuaupiki","Fullback",1],["Warriors","Dallin Watene-Zelezniak","Winger",2],["Warriors","Charnze Nicoll-Klokstad","Centre",3],["Warriors","Adam Pompey","Centre",4],["Warriors","Roger Tuivasa-Sheck","Winger",5],["Warriors","Chanel Harris-Tavita","Five-Eighth",6],["Warriors","Tanah Boyd","Halfback",7],["Warriors","James Fisher-Harris","Prop",8],["Warriors","Wayde Egan","Hooker",9],["Warriors","Jackson Ford","Prop",10],["Warriors","Leka Halasima","2nd Row",11],["Warriors","Jacob Laban","2nd Row",12],["Warriors","Erin Clark","Lock",13]
  ];
  playerRowsByGame["eels-titans"]=[
    ["Eels","Joash Papalii","Fullback",1],["Eels","Araz Nanva","Winger",2],["Eels","Will Penisini","Centre",3],["Eels","Brian Kelly","Centre",4],["Eels","Josh Addo-Carr","Winger",5],["Eels","Ronald Volkman","Five-Eighth",6],["Eels","Mitchell Moses","Halfback",7],["Eels","Jack Williams","Prop",8],["Eels","Ryley Smith","Hooker",9],["Eels","Junior Paulo","Prop",10],["Eels","Kelma Tuilagi","2nd Row",11],["Eels","Kitione Kautoga","2nd Row",12],["Eels","Dylan Walker","Lock",13],
    ["Titans","Keano Kini","Fullback",1],["Titans","Sialetili Faeamani","Winger",2],["Titans","Jojo Fifita","Centre",3],["Titans","AJ Brimson","Centre",4],["Titans","Phillip Sami","Winger",5],["Titans","Lachlan Ilias","Five-Eighth",6],["Titans","Jayden Campbell","Halfback",7],["Titans","Klese Haas","Prop",8],["Titans","Sam Verrills","Hooker",9],["Titans","Tino Fa'asuamaleaui","Prop",10],["Titans","Arama Hau","2nd Row",11],["Titans","Beau Fermor","2nd Row",12],["Titans","Chris Randall","Lock",13]
  ];
  playerRowsByGame["wests-tigers-knights"]=[
    ["Wests Tigers","Jahream Bula","Fullback",1],["Wests Tigers","Faaletino Tavana","Winger",2],["Wests Tigers","Sunia Turuva","Centre",3],["Wests Tigers","Heamasi Makasini","Centre",4],["Wests Tigers","Jeral Skelton","Winger",5],["Wests Tigers","Jock Madden","Five-Eighth",6],["Wests Tigers","Adam Doueihi","Halfback",7],["Wests Tigers","Terrell May","Prop",8],["Wests Tigers","Apisai Koroisau","Hooker",9],["Wests Tigers","Fonua Pole","Prop",10],["Wests Tigers","Samuela Fainu","2nd Row",11],["Wests Tigers","Kai Pearce-Paul","2nd Row",12],["Wests Tigers","Alex Twal","Lock",13],
    ["Knights","Fletcher Hunt","Fullback",1],["Knights","Dominic Young","Winger",2],["Knights","Dane Gagai","Centre",3],["Knights","Wilson De Courcey","Centre",4],["Knights","Greg Marzhew","Winger",5],["Knights","Fletcher Sharpe","Five-Eighth",6],["Knights","Sandon Smith","Halfback",7],["Knights","Jacob Saifiti","Prop",8],["Knights","Phoenix Crossland","Hooker",9],["Knights","Trey Mooney","Prop",10],["Knights","Dylan Lucas","2nd Row",11],["Knights","Jermaine McEwen","2nd Row",12],["Knights","Mat Croker","Lock",13]
  ];
  playerRowsByGame["cowboys-sea-eagles"]=[
    ["Cowboys","Scott Drinkwater","Fullback",1],["Cowboys","Braidon Burns","Winger",2],["Cowboys","Jaxon Purdue","Centre",3],["Cowboys","Tom Chester","Centre",4],["Cowboys","Zac Laybutt","Winger",5],["Cowboys","Jake Clifford","Five-Eighth",6],["Cowboys","Tom Dearden","Halfback",7],["Cowboys","Coen Hess","Prop",8],["Cowboys","Soni Luke","Hooker",9],["Cowboys","Jason Taumalolo","Prop",10],["Cowboys","Heilum Luki","2nd Row",11],["Cowboys","Kai O'Donnell","2nd Row",12],["Cowboys","Reuben Cotter","Lock",13],
    ["Sea Eagles","Tom Trbojevic","Fullback",1],["Sea Eagles","Jason Saab","Winger",2],["Sea Eagles","Tolutau Koula","Centre",3],["Sea Eagles","Reuben Garrick","Centre",4],["Sea Eagles","Lehi Hopoate","Winger",5],["Sea Eagles","Luke Brooks","Five-Eighth",6],["Sea Eagles","Jamal Fogarty","Halfback",7],["Sea Eagles","Taniela Paseka","Prop",8],["Sea Eagles","Brandon Wakeham","Hooker",9],["Sea Eagles","Kobe Hetherington","Prop",10],["Sea Eagles","Haumole Olakau'atu","2nd Row",11],["Sea Eagles","Ben Trbojevic","2nd Row",12],["Sea Eagles","Jake Trbojevic","Lock",13]
  ];
  playerRowsByGame["raiders-storm"]=[
    ["Raiders","Kaeo Weekes","Fullback",1],["Raiders","Sebastian Kris","Winger",2],["Raiders","Simi Sasagi","Centre",3],["Raiders","Matthew Timoko","Centre",4],["Raiders","Jed Stuart","Winger",5],["Raiders","Ethan Strange","Five-Eighth",6],["Raiders","Ethan Sanders","Halfback",7],["Raiders","Josh Papalii","Prop",8],["Raiders","Tom Starling","Hooker",9],["Raiders","Joseph Tapine","Prop",10],["Raiders","Hudson Young","2nd Row",11],["Raiders","Noah Martin","2nd Row",12],["Raiders","Corey Horsburgh","Lock",13],
    ["Storm","Sualauvi Faalogo","Fullback",1],["Storm","Will Warbrick","Winger",2],["Storm","Jack Howarth","Centre",3],["Storm","Nick Meaney","Centre",4],["Storm","Manaia Waitere","Winger",5],["Storm","Cameron Munster","Five-Eighth",6],["Storm","Jahrome Hughes","Halfback",7],["Storm","Stefano Utoikamanu","Prop",8],["Storm","Harry Grant","Hooker",9],["Storm","Josh King","Prop",10],["Storm","Joe Chan","2nd Row",11],["Storm","Cooper Clarke","2nd Row",12],["Storm","Trent Loiero","Lock",13]
  ];
  playerRowsByGame["dolphins-panthers"]=[
    ["Dolphins","Hamiso Tabuai-Fidow","Fullback",1],["Dolphins","Jamayne Isaako","Winger",2],["Dolphins","Jake Averillo","Centre",3],["Dolphins","Herbie Farnworth","Centre",4],["Dolphins","Selwyn Cobbo","Winger",5],["Dolphins","Kodi Nikorima","Five-Eighth",6],["Dolphins","Isaiya Katoa","Halfback",7],["Dolphins","Tom Gilbert","Prop",8],["Dolphins","Max Plath","Hooker",9],["Dolphins","Felise Kaufusi","Prop",10],["Dolphins","Connelly Lemuelu","2nd Row",11],["Dolphins","Kulikefu Finefeuiaki","2nd Row",12],["Dolphins","Morgan Knowles","Lock",13],
    ["Panthers","Dylan Edwards","Fullback",1],["Panthers","Thomas Jenkins","Winger",2],["Panthers","Paul Alamoti","Centre",3],["Panthers","Izack Tago","Centre",4],["Panthers","Brian To'o","Winger",5],["Panthers","Blaize Talagi","Five-Eighth",6],["Panthers","Nathan Cleary","Halfback",7],["Panthers","Moses Leota","Prop",8],["Panthers","Mitch Kenny","Hooker",9],["Panthers","Lindsay Smith","Prop",10],["Panthers","Isaiah Papali'i","2nd Row",11],["Panthers","Luke Garner","2nd Row",12],["Panthers","Isaah Yeo","Lock",13]
  ];
  playerRowsByGame["warriors-titans"]=[
    ["Warriors","Taine Tuaupiki","Fullback",1],["Warriors","Dallin Watene-Zelezniak","Winger",2],["Warriors","Roger Tuivasa-Sheck","Centre",3],["Warriors","Ali Leiataua","Centre",4],["Warriors","Alofiana Khan-Pereira","Winger",5],["Warriors","Chanel Harris-Tavita","Five-Eighth",6],["Warriors","Tanah Boyd","Halfback",7],["Warriors","James Fisher-Harris","Prop",8],["Warriors","Wayde Egan","Hooker",9],["Warriors","Jackson Ford","Prop",10],["Warriors","Leka Halasima","2nd Row",11],["Warriors","Kurt Capewell","2nd Row",12],["Warriors","Erin Clark","Lock",13],
    ["Titans","Keano Kini","Fullback",1],["Titans","Sialetili Faeamani","Winger",2],["Titans","Jojo Fifita","Centre",3],["Titans","AJ Brimson","Centre",4],["Titans","Phillip Sami","Winger",5],["Titans","Lachlan Ilias","Five-Eighth",6],["Titans","Jayden Campbell","Halfback",7],["Titans","Kurtis Morrin","Prop",8],["Titans","Sam Verrills","Hooker",9],["Titans","Tino Fa'asuamaleaui","Prop",10],["Titans","Arama Hau","2nd Row",11],["Titans","Beau Fermor","2nd Row",12],["Titans","Chris Randall","Lock",13]
  ];
  playerRowsByGame["rabbitohs-dragons"]=[
    ["Rabbitohs","Matthew Dufty","Fullback",1],["Rabbitohs","Alex Johnston","Winger",2],["Rabbitohs","Latrell Mitchell","Centre",3],["Rabbitohs","Jack Wighton","Centre",4],["Rabbitohs","Campbell Graham","Winger",5],["Rabbitohs","Cody Walker","Five-Eighth",6],["Rabbitohs","Jamie Humphreys","Halfback",7],["Rabbitohs","Tevita Tatola","Prop",8],["Rabbitohs","Brandon Smith","Hooker",9],["Rabbitohs","Keaon Koloamatangi","Prop",10],["Rabbitohs","Lachlan Hubner","2nd Row",11],["Rabbitohs","Tallis Duncan","2nd Row",12],["Rabbitohs","Cameron Murray","Lock",13],
    ["Dragons","Tyrell Sloan","Fullback",1],["Dragons","Christian Tuipulotu","Winger",2],["Dragons","Mathew Feagai","Centre",3],["Dragons","Valentine Holmes","Centre",4],["Dragons","Setu Tu","Winger",5],["Dragons","Daniel Atkinson","Five-Eighth",6],["Dragons","Kyle Flanagan","Halfback",7],["Dragons","Emre Guler","Prop",8],["Dragons","Damien Cook","Hooker",9],["Dragons","Toby Couchman","Prop",10],["Dragons","Luciano Leilua","2nd Row",11],["Dragons","Jaydn Su'A","2nd Row",12],["Dragons","Hamish Stewart","Lock",13]
  ];
  playerRowsByGame["wests-tigers-broncos"]=[
    ["Wests Tigers","Jahream Bula","Fullback",1],["Wests Tigers","Sunia Turuva","Winger",2],["Wests Tigers","Taylan May","Centre",3],["Wests Tigers","Patrick Herbert","Centre",4],["Wests Tigers","Heamasi Makasini","Winger",5],["Wests Tigers","Jarome Luai","Five-Eighth",6],["Wests Tigers","Adam Doueihi","Halfback",7],["Wests Tigers","Terrell May","Prop",8],["Wests Tigers","Apisai Koroisau","Hooker",9],["Wests Tigers","Fonua Pole","Prop",10],["Wests Tigers","Samuela Fainu","2nd Row",11],["Wests Tigers","Kai Pearce-Paul","2nd Row",12],["Wests Tigers","Alex Twal","Lock",13],
    ["Broncos","Jesse Arthars","Fullback",1],["Broncos","Josiah Karapani","Winger",2],["Broncos","Kotoni Staggs","Centre",3],["Broncos","Gehamat Shibasaki","Centre",4],["Broncos","Deine Mariner","Winger",5],["Broncos","Ezra Mam","Five-Eighth",6],["Broncos","Adam Reynolds","Halfback",7],["Broncos","Corey Jensen","Prop",8],["Broncos","Josh Rogers","Hooker",9],["Broncos","Payne Haas","Prop",10],["Broncos","Brendan Piakura","2nd Row",11],["Broncos","Jordan Riki","2nd Row",12],["Broncos","Xavier Willison","Lock",13]
  ];
  playerRowsByGame["roosters-knights"]=[
    ["Roosters","James Tedesco","Fullback",1],["Roosters","Daniel Tupou","Winger",2],["Roosters","Hugo Savala","Centre",3],["Roosters","Robert Toia","Centre",4],["Roosters","Mark Nawaqanitawase","Winger",5],["Roosters","Daly Cherry-Evans","Five-Eighth",6],["Roosters","Sam Walker","Halfback",7],["Roosters","Naufahu Whyte","Prop",8],["Roosters","Reece Robson","Hooker",9],["Roosters","Lindsay Collins","Prop",10],["Roosters","Angus Crichton","2nd Row",11],["Roosters","Siua Wong","2nd Row",12],["Roosters","Victor Radley","Lock",13],
    ["Knights","Fletcher Sharpe","Fullback",1],["Knights","Dominic Young","Winger",2],["Knights","Dane Gagai","Centre",3],["Knights","Fletcher Hunt","Centre",4],["Knights","Greg Marzhew","Winger",5],["Knights","Sandon Smith","Five-Eighth",6],["Knights","Dylan Brown","Halfback",7],["Knights","Jacob Saifiti","Prop",8],["Knights","Phoenix Crossland","Hooker",9],["Knights","Trey Mooney","Prop",10],["Knights","Thomas Cant","2nd Row",11],["Knights","Jermaine McEwen","2nd Row",12],["Knights","Mat Croker","Lock",13]
  ];
  playerRowsByGame["eels-bulldogs"]=[
    ["Eels","Joash Papalii","Fullback",1],["Eels","Brian Kelly","Winger",2],["Eels","Will Penisini","Centre",3],["Eels","Sean Russell","Centre",4],["Eels","Josh Addo-Carr","Winger",5],["Eels","Ronald Volkman","Five-Eighth",6],["Eels","Mitchell Moses","Halfback",7],["Eels","Luca Moretti","Prop",8],["Eels","Ryley Smith","Hooker",9],["Eels","Junior Paulo","Prop",10],["Eels","Charlie Guymer","2nd Row",11],["Eels","Jack Williams","2nd Row",12],["Eels","Dylan Walker","Lock",13],
    ["Bulldogs","Connor Tracey","Fullback",1],["Bulldogs","Jacob Kiraz","Winger",2],["Bulldogs","Enari Tuala","Centre",3],["Bulldogs","Bronson Xerri","Centre",4],["Bulldogs","Marcelo Montoya","Winger",5],["Bulldogs","Matt Burton","Five-Eighth",6],["Bulldogs","Lachlan Galvin","Halfback",7],["Bulldogs","Samuel Hughes","Prop",8],["Bulldogs","Bailey Hayward","Hooker",9],["Bulldogs","Leo Thompson","Prop",10],["Bulldogs","Viliame Kikau","2nd Row",11],["Bulldogs","Jacob Preston","2nd Row",12],["Bulldogs","Jaeman Salmon","Lock",13]
  ];
  playerRowsByGame["wests-tigers-raiders"]=[
    ["Wests Tigers","Jahream Bula","Fullback",1],["Wests Tigers","Sunia Turuva","Winger",2],["Wests Tigers","Taylan May","Centre",3],["Wests Tigers","Starford To'a","Centre",4],["Wests Tigers","Luke Laulilii","Winger",5],["Wests Tigers","Jarome Luai","Five-Eighth",6],["Wests Tigers","Adam Doueihi","Halfback",7],["Wests Tigers","Terrell May","Prop",8],["Wests Tigers","Apisai Koroisau","Hooker",9],["Wests Tigers","Fonua Pole","Prop",10],["Wests Tigers","Samuela Fainu","2nd Row",11],["Wests Tigers","Kai Pearce-Paul","2nd Row",12],["Wests Tigers","Alex Twal","Lock",13],["Raiders","Kaeo Weekes","Fullback",1],["Raiders","Sebastian Kris","Winger",2],["Raiders","Simi Sasagi","Centre",3],["Raiders","Matthew Timoko","Centre",4],["Raiders","Jed Stuart","Winger",5],["Raiders","Ethan Strange","Five-Eighth",6],["Raiders","Ethan Sanders","Halfback",7],["Raiders","Ata Mariota","Prop",8],["Raiders","Tom Starling","Hooker",9],["Raiders","Joseph Tapine","Prop",10],["Raiders","Zac Hosking","2nd Row",11],["Raiders","Noah Martin","2nd Row",12],["Raiders","Corey Horsburgh","Lock",13]
  ];
  playerRowsByGame["cowboys-sharks"]=[
    ["Cowboys","Scott Drinkwater","Fullback",1],["Cowboys","Braidon Burns","Winger",2],["Cowboys","Jaxon Purdue","Centre",3],["Cowboys","Tom Chester","Centre",4],["Cowboys","Murray Taulagi","Winger",5],["Cowboys","Jake Clifford","Five-Eighth",6],["Cowboys","Tom Dearden","Halfback",7],["Cowboys","Coen Hess","Prop",8],["Cowboys","Reed Mahoney","Hooker",9],["Cowboys","Jason Taumalolo","Prop",10],["Cowboys","Heilum Luki","2nd Row",11],["Cowboys","Jeremiah Nanai","2nd Row",12],["Cowboys","Reuben Cotter","Lock",13],["Sharks","William Kennedy","Fullback",1],["Sharks","Mawene Hiroti","Winger",2],["Sharks","Siosifa Talakai","Centre",3],["Sharks","KL Iro","Centre",4],["Sharks","Samuel Stonestreet","Winger",5],["Sharks","Braydon Trindall","Five-Eighth",6],["Sharks","Nicholas Hynes","Halfback",7],["Sharks","Addin Fonua-Blake","Prop",8],["Sharks","Blayke Brailey","Hooker",9],["Sharks","Toby Rudolf","Prop",10],["Sharks","Billy Burns","2nd Row",11],["Sharks","Teig Wilton","2nd Row",12],["Sharks","Jesse Colquhoun","Lock",13]
  ];
  playerRowsByGame["broncos-bulldogs"]=[
    ["Broncos","Jesse Arthars","Fullback",1],["Broncos","Josiah Karapani","Winger",2],["Broncos","Kotoni Staggs","Centre",3],["Broncos","Gehamat Shibasaki","Centre",4],["Broncos","Deine Mariner","Winger",5],["Broncos","Ezra Mam","Five-Eighth",6],["Broncos","Adam Reynolds","Halfback",7],["Broncos","Ben Talty","Prop",8],["Broncos","Cory Paix","Hooker",9],["Broncos","Jack Gosiewski","Prop",10],["Broncos","Brendan Piakura","2nd Row",11],["Broncos","Jordan Riki","2nd Row",12],["Broncos","Xavier Willison","Lock",13],["Bulldogs","Connor Tracey","Fullback",1],["Bulldogs","Jonathan Sua","Winger",2],["Bulldogs","Bronson Xerri","Centre",3],["Bulldogs","Stephen Crichton","Centre",4],["Bulldogs","Marcelo Montoya","Winger",5],["Bulldogs","Matt Burton","Five-Eighth",6],["Bulldogs","Lachlan Galvin","Halfback",7],["Bulldogs","Samuel Hughes","Prop",8],["Bulldogs","Bailey Hayward","Hooker",9],["Bulldogs","Leo Thompson","Prop",10],["Bulldogs","Viliame Kikau","2nd Row",11],["Bulldogs","Jacob Preston","2nd Row",12],["Bulldogs","Jaeman Salmon","Lock",13]
  ];
  playerRowsByGame["dragons-roosters"]=[
    ["Dragons","Tyrell Sloan","Fullback",1],["Dragons","Setu Tu","Winger",2],["Dragons","Moses Suli","Centre",3],["Dragons","Valentine Holmes","Centre",4],["Dragons","Mathew Feagai","Winger",5],["Dragons","Daniel Atkinson","Five-Eighth",6],["Dragons","Kade Reed","Halfback",7],["Dragons","Emre Guler","Prop",8],["Dragons","Damien Cook","Hooker",9],["Dragons","Toby Couchman","Prop",10],["Dragons","Luciano Leilua","2nd Row",11],["Dragons","Ryan Couchman","2nd Row",12],["Dragons","Hamish Stewart","Lock",13],["Roosters","James Tedesco","Fullback",1],["Roosters","Daniel Tupou","Winger",2],["Roosters","Hugo Savala","Centre",3],["Roosters","Robert Toia","Centre",4],["Roosters","Mark Nawaqanitawase","Winger",5],["Roosters","Daly Cherry-Evans","Five-Eighth",6],["Roosters","Sam Walker","Halfback",7],["Roosters","Naufahu Whyte","Prop",8],["Roosters","Reece Robson","Hooker",9],["Roosters","Lindsay Collins","Prop",10],["Roosters","Angus Crichton","2nd Row",11],["Roosters","Siua Wong","2nd Row",12],["Roosters","Victor Radley","Lock",13]
  ];
  playerRowsByGame["warriors-dolphins"]=[
    ["Warriors","Taine Tuaupiki","Fullback",1],["Warriors","Dallin Watene-Zelezniak","Winger",2],["Warriors","Roger Tuivasa-Sheck","Centre",3],["Warriors","Ali Leiataua","Centre",4],["Warriors","Alofiana Khan-Pereira","Winger",5],["Warriors","Chanel Harris-Tavita","Five-Eighth",6],["Warriors","Tanah Boyd","Halfback",7],["Warriors","James Fisher-Harris","Prop",8],["Warriors","Wayde Egan","Hooker",9],["Warriors","Jackson Ford","Prop",10],["Warriors","Leka Halasima","2nd Row",11],["Warriors","Kurt Capewell","2nd Row",12],["Warriors","Erin Clark","Lock",13],["Dolphins","Hamiso Tabuai-Fidow","Fullback",1],["Dolphins","Jamayne Isaako","Winger",2],["Dolphins","Jake Averillo","Centre",3],["Dolphins","Herbie Farnworth","Centre",4],["Dolphins","Selwyn Cobbo","Winger",5],["Dolphins","Bradley Schneider","Five-Eighth",6],["Dolphins","Isaiya Katoa","Halfback",7],["Dolphins","Tom Gilbert","Prop",8],["Dolphins","Max Plath","Hooker",9],["Dolphins","Francis Molo","Prop",10],["Dolphins","Connelly Lemuelu","2nd Row",11],["Dolphins","Kulikefu Finefeuiaki","2nd Row",12],["Dolphins","Morgan Knowles","Lock",13]
  ];
  playerRowsByGame["storm-rabbitohs"]=[
    ["Storm","Sualauvi Faalogo","Fullback",1],["Storm","Will Warbrick","Winger",2],["Storm","Jack Howarth","Centre",3],["Storm","Nick Meaney","Centre",4],["Storm","Manaia Waitere","Winger",5],["Storm","Cameron Munster","Five-Eighth",6],["Storm","Jahrome Hughes","Halfback",7],["Storm","Stefano Utoikamanu","Prop",8],["Storm","Harry Grant","Hooker",9],["Storm","Josh King","Prop",10],["Storm","Joe Chan","2nd Row",11],["Storm","Cooper Clarke","2nd Row",12],["Storm","Trent Loiero","Lock",13],["Rabbitohs","Matthew Dufty","Fullback",1],["Rabbitohs","Alex Johnston","Winger",2],["Rabbitohs","Latrell Mitchell","Centre",3],["Rabbitohs","Jack Wighton","Centre",4],["Rabbitohs","Campbell Graham","Winger",5],["Rabbitohs","Cody Walker","Five-Eighth",6],["Rabbitohs","Jamie Humphreys","Halfback",7],["Rabbitohs","Tevita Tatola","Prop",8],["Rabbitohs","Bronson Garlick","Hooker",9],["Rabbitohs","Sean Keppie","Prop",10],["Rabbitohs","Brandon Smith","2nd Row",11],["Rabbitohs","Tallis Duncan","2nd Row",12],["Rabbitohs","Cameron Murray","Lock",13]
  ];
  playerRowsByGame["knights-panthers"]=[
    ["Knights","Fletcher Sharpe","Fullback",1],["Knights","Dominic Young","Winger",2],["Knights","Dane Gagai","Centre",3],["Knights","Fletcher Hunt","Centre",4],["Knights","James Schiller","Winger",5],["Knights","Sandon Smith","Five-Eighth",6],["Knights","Dylan Brown","Halfback",7],["Knights","Jacob Saifiti","Prop",8],["Knights","Phoenix Crossland","Hooker",9],["Knights","Trey Mooney","Prop",10],["Knights","Francis Manuleleua","2nd Row",11],["Knights","Jermaine McEwen","2nd Row",12],["Knights","Mat Croker","Lock",13],["Panthers","Dylan Edwards","Fullback",1],["Panthers","Thomas Jenkins","Winger",2],["Panthers","Paul Alamoti","Centre",3],["Panthers","Casey McLean","Centre",4],["Panthers","Brian To'o","Winger",5],["Panthers","Blaize Talagi","Five-Eighth",6],["Panthers","Nathan Cleary","Halfback",7],["Panthers","Moses Leota","Prop",8],["Panthers","Freddy Lussick","Hooker",9],["Panthers","Lindsay Smith","Prop",10],["Panthers","Isaiah Papali'i","2nd Row",11],["Panthers","Luke Garner","2nd Row",12],["Panthers","Isaah Yeo","Lock",13]
  ];
  playerRowsByGame["sea-eagles-eels"]=[
    ["Sea Eagles","Tolutau Koula","Fullback",1],["Sea Eagles","Jason Saab","Winger",2],["Sea Eagles","Clayton Faulalo","Centre",3],["Sea Eagles","Reuben Garrick","Centre",4],["Sea Eagles","Lehi Hopoate","Winger",5],["Sea Eagles","Luke Brooks","Five-Eighth",6],["Sea Eagles","Jamal Fogarty","Halfback",7],["Sea Eagles","Taniela Paseka","Prop",8],["Sea Eagles","Brandon Wakeham","Hooker",9],["Sea Eagles","Kobe Hetherington","Prop",10],["Sea Eagles","Haumole Olakau'atu","2nd Row",11],["Sea Eagles","Ben Trbojevic","2nd Row",12],["Sea Eagles","Jake Trbojevic","Lock",13],["Eels","Joash Papalii","Fullback",1],["Eels","Brian Kelly","Winger",2],["Eels","Will Penisini","Centre",3],["Eels","Sean Russell","Centre",4],["Eels","Josh Addo-Carr","Winger",5],["Eels","Ronald Volkman","Five-Eighth",6],["Eels","Mitchell Moses","Halfback",7],["Eels","Luca Moretti","Prop",8],["Eels","Ryley Smith","Hooker",9],["Eels","Junior Paulo","Prop",10],["Eels","Charlie Guymer","2nd Row",11],["Eels","Jack Williams","2nd Row",12],["Eels","Dylan Walker","Lock",13]
  ];
  function roundToHalf(value){return Math.round(value*2)/2;}
  function normalizePlayerKey(value){return String(value||"").toUpperCase().replace(/[^A-Z0-9]/g,"");}
  function derivedPlayerStatsFor(playerName){return derivedData?.playerStatsByName?.[normalizePlayerKey(playerName)]||null;}
  function derivedTeamStatsFor(teamName){return derivedData?.teamConcessionsByTeam?.[teamName]||null;}
  function pricedAtProjectionFromPrice(price){
    const normalizedPrice=Number(price);
    if(!Number.isFinite(normalizedPrice)||normalizedPrice<=0)return null;
    return Math.round((normalizedPrice/12800)*10)/10;
  }
  function priceImpliedProjectionForPlayer(playerName){
    const playerStats=derivedPlayerStatsFor(playerName);
    return pricedAtProjectionFromPrice(playerStats?.currentPrice)??(Number.isFinite(Number(playerStats?.priceImpliedProjection))?Number(playerStats.priceImpliedProjection):null);
  }
  function playerLineOverrideFor(playerName){
    const key=normalizePlayerKey(playerName);
    return PLAYER_LINE_OVERRIDES[key]??PLAYER_LINE_OVERRIDES[PLAYER_LINE_ALIASES[key]];
  }
  function slugify(value){return value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");}
  function roundToWhole(value){return Math.round(Number(value)||0);}
  function baseProjectionForPosition(position){
    const map={Fullback:35,Winger:32,Centre:34,"Five-Eighth":36,Halfback:42,Prop:38,Lock:42,"2nd Row":45,Edge:45,Hooker:35};
    return map[position]??36;
  }
  function getBaseProjection(player){
    const providedProjection=Number(player?.providedProjection);
    const baseProjection=baseProjectionForPosition(player?.position);
    const starterFloor=player?.isStarting===false?baseProjection:baseProjection-5;
    if(Number.isFinite(providedProjection)&&providedProjection>0){
      return roundToWhole(Math.max(providedProjection,starterFloor));
    }
    const fallbackProjection=baseProjection;
    return roundToWhole(Math.max(fallbackProjection,starterFloor));
  }
  function seasonAverageForPosition(position,jerseyNumber){return roundToHalf(baseProjectionForPosition(position)-2+(jerseyNumber%2));}
  function stableHash(value){return [...value].reduce((sum,char,index)=>sum+(char.charCodeAt(0)*(index+1)),0);}
  function clamp(value,min,max){return Math.max(min,Math.min(max,value));}
  function buildBotInputs(game,team,playerName,position,jerseyNumber,seasonAverage,initialLine){
    const seed=stableHash(`${game.id}|${team}|${playerName}|${position}|${jerseyNumber}`);
    const isHome=game.homeTeam===team;
    const opponent=game.homeTeam===team?game.awayTeam:game.homeTeam;
    const playerStats=derivedPlayerStatsFor(playerName);
    const opponentTeamStats=derivedTeamStatsFor(opponent);
    const leaguePositionAverage=derivedData?.leaguePositionAverages?.[position];
    const odds=matchOddsByGame[game.id]||{home:1.9,away:1.9};
    const teamOdds=isHome?odds.home:odds.away;
    const opponentOdds=isHome?odds.away:odds.home;
    const impliedTeamWinProb=Math.round(((1/teamOdds)/((1/teamOdds)+(1/opponentOdds)))*100)/100;
    const lastSeasonAverage=playerStats?.seasonAverage??seasonAverage;
    const lastGameScore=playerStats?.lastGameScore??roundToHalf(lastSeasonAverage+((seed%17)-8));
    const last3Average=playerStats?.last3Average??roundToHalf(lastSeasonAverage+(((seed>>2)%11)-5));
    const fallbackMatchupAdjustment=roundToHalf((((seed>>6)%13)-6)*0.4);
    const positionalMatchupAdjustment=Number.isFinite(opponentTeamStats?.positionDeltas?.[position])?roundToHalf(opponentTeamStats.positionDeltas[position]):fallbackMatchupAdjustment;
    const opponentPositionAverage=Number.isFinite(opponentTeamStats?.positionAverages?.[position])?roundToHalf(opponentTeamStats.positionAverages[position]):null;
    const popularity=clamp(1+((seed>>8)%5),1,5);
    const scoreVolatility=playerStats?.scoreVolatility??roundToHalf(clamp(4+((seed>>10)%9),4,12));
    const homeAverage=playerStats?.homeAverage??(isHome?lastSeasonAverage+1:lastSeasonAverage-1);
    const awayAverage=playerStats?.awayAverage??(isHome?lastSeasonAverage-1:lastSeasonAverage+1);
    return {
      isHome,
      teamOdds,
      opponentOdds,
      impliedTeamWinProb,
      lastSeasonAverage,
      lastGameScore,
      last3Average,
      positionalMatchupAdjustment,
      opponentPositionAverage,
      leaguePositionAverage,
      homeAverage,
      awayAverage,
      popularity,
      scoreVolatility,
      openingProjection: initialLine,
      botInputs: {
        baseline: lastSeasonAverage,
        recentDelta: roundToHalf(last3Average-lastSeasonAverage),
        lastGameDelta: roundToHalf(lastGameScore-lastSeasonAverage),
        venueAdjustment: isHome?1.5:-1,
        teamOdds,
        opponentOdds,
        impliedTeamWinProb,
        positionalMatchupAdjustment,
        opponentPositionAverage,
        leaguePositionAverage,
        homeAverage,
        awayAverage,
        popularity,
        scoreVolatility
      }
    };
  }
  function buildMarketFromPlayer(gameId,team,playerName,position,jerseyNumber){
    const game=roundGames.find((item)=>item.id===gameId);
    const opponent=game.homeTeam===team?game.awayTeam:game.homeTeam;
    const seeded=seededMarketOverrides.get(`${gameId}|${team}|${playerName}`);
    const playerStats=derivedPlayerStatsFor(playerName);
    const providedProjection=playerLineOverrideFor(playerName)??seeded?.initialLine??null;
    const initialLine=getBaseProjection({playerName,position,jerseyNumber,providedProjection,isStarting:true});
    const seasonAverage=playerStats?.seasonAverage??seeded?.seasonAverage??seasonAverageForPosition(position,jerseyNumber);
    const fantasyPrice=Number.isFinite(Number(playerStats?.currentPrice))?Number(playerStats.currentPrice):null;
    const priceImpliedProjection=priceImpliedProjectionForPlayer(playerName);
    return {id:slugify(`${gameId}-${team}-${playerName}`),gameId,playerName,team,opponent,position,jerseyNumber,initialLine,seasonAverage,fantasyPrice,priceImpliedProjection,...buildBotInputs(game,team,playerName,position,jerseyNumber,seasonAverage,initialLine)};
  }
  function buildLatestTeamRowTemplate(){
    const byTeam={};
    roundGames.forEach((game)=>{
      const rows=playerRowsByGame[game.id];
      if(!Array.isArray(rows)||!rows.length){
        return;
      }
      const homeRows=rows
        .filter(([team])=>team===game.homeTeam)
        .map(([,playerName,position,jerseyNumber])=>[game.homeTeam,playerName,position,jerseyNumber]);
      const awayRows=rows
        .filter(([team])=>team===game.awayTeam)
        .map(([,playerName,position,jerseyNumber])=>[game.awayTeam,playerName,position,jerseyNumber]);
      if(homeRows.length){
        byTeam[game.homeTeam]=homeRows;
      }
      if(awayRows.length){
        byTeam[game.awayTeam]=awayRows;
      }
    });
    return byTeam;
  }
  function buildFallbackRowsForGame(game,teamTemplateRows){
    const homeRows=(teamTemplateRows[game.homeTeam]||[]).map(([,playerName,position,jerseyNumber])=>[game.homeTeam,playerName,position,jerseyNumber]);
    const awayRows=(teamTemplateRows[game.awayTeam]||[]).map(([,playerName,position,jerseyNumber])=>[game.awayTeam,playerName,position,jerseyNumber]);
    return [...homeRows,...awayRows];
  }
  function buildRoundMarkets(){
    const teamTemplateRows=buildLatestTeamRowTemplate();
    return roundGames.flatMap((game)=>{
      const explicitRows=playerRowsByGame[game.id];
      const rows=Array.isArray(explicitRows)&&explicitRows.length
        ? explicitRows
        : buildFallbackRowsForGame(game,teamTemplateRows);
      return rows.map(([team,playerName,position,jerseyNumber])=>buildMarketFromPlayer(game.id,team,playerName,position,jerseyNumber));
    });
  }
  return {HALF_POINT,roundGames,TEAM_COLORS,playerRowsByGame,buildRoundMarkets,roundToHalf,slugify,getBaseProjection};
});
