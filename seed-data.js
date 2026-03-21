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
    REECEWALSH:54,
    CONNORTRACEY:39,
    KAEOWEEKES:37,
    WILLKENNEDY:33,
    KEANOKINI:51,
    TOMTRBOJEVIC:53,
    SUAFAALOGO:42,
    KALYNPONGA:54,
    CHARNZENICOLLKLOKSTAD:44,
    DEINEMARINER:34,
    JACOBKIRAZ:52,
    SAVELIOTAMALE:39,
    SAMSTONESTREET:35,
    PHILLIPSAMI:44,
    LEHIHOPOATE:42,
    NICKMEANEY:42,
    GREGMARZHEW:49,
    DALLINWATENEZELEZNIAK:33,
    KOTONISTAGGS:40,
    STEPHENCRICHTON:45,
    MATTTIMOKO:41,
    KLIRO:48,
    JOJOFIFITA:36,
    REUBENGARRICK:40,
    JACKHOWARTH:38,
    BRADMANBEST:43,
    ADAMPOMPEY:30,
    GEHAMATSHIBASAKI:43,
    BRONSONXERRI:34,
    SEBASTIANKRIS:34,
    JESSERAMIEN:40,
    MAXFEAGAI:32,
    TOLUTAUKOULA:34,
    MOSESLEO:33,
    DANEGAGAI:47,
    ALILEIATAUA:33,
    JOSIAHKARAPANI:36,
    MARCELOMONTOYA:29,
    XAVIERSAVAGE:27,
    SIONEKATOA:35,
    SIALEFAEMANI:29,
    JASONSAAB:32,
    WILLWARBRICK:33,
    DOMYOUNG:40,
    ROGERTUIVASASHECK:44,
    EZRAMAM:23,
    MATTBURTON:44,
    ETHANSTRANGE:45,
    BRAYDENTRINDALL:33,
    AJBRIMSON:48,
    LUKEBROOKS:36,
    CAMERONMUNSTER:55,
    FLETCHERSHARPE:58,
    CHANELHARRISTAVITA:34,
    ADAMREYNOLDS:47,
    LACHLANGALVIN:48,
    ETHANSANDERS:40,
    NICHOHYNES:53,
    JAYDENCAMPBELL:60,
    JAMALFOGARTY:47,
    JAHROMEHUGHES:48,
    DYLANBROWN:51,
    TANAHBOYD:46,
    HAKEEMHAAS:76,
    MAXKING:50,
    JOSEPHTAPINE:56,
    ADDINFONUABLAKE:47,
    MOEAKIFOTUAIKA:41,
    TANIELAPASEKA:44,
    STEFANOUTOIKAMANU:50,
    JACOBSAIFITI:41,
    MITCHBARNETT:48,
    BENHUNT:40,
    BAILEYHAYWARD:39,
    JAYDENBRAILEY:13,
    BLAYKEBRAILEY:55,
    SAMVERRILLS:34,
    JAKESIMPKIN:50,
    HARRYGRANT:54,
    PHEONIXCROSSLAND:35,
    WAYDEEGAN:40,
    COREYJENSEN:37,
    SAMHUGHES:20,
    JOSHPAPALII:39,
    THOMASHAZELTON:44,
    TINOFAASUAMALAEAUI:47,
    SIOSIUATAUKEIAHO:37,
    JOSHKING:36,
    TREYMOONEY:50,
    JAMESFISHERHARRIS:48,
    JORDANRIKI:45,
    JACOBPRESTON:56,
    NOAHMARTIN:49,
    BRITONNIKORA:49,
    ARAMAHAU:39,
    HAUMOLEOLAKAUATU:52,
    ATIVALULISATI:50,
    DYLANLUCAS:55,
    JACOBLABAN:33,
    BRENDANPIAKURA:30,
    VILIAMEKIKAU:41,
    HUDSONYOUNG:55,
    TEIGWILTON:47,
    BEAUFERMOR:52,
    BENTRBOJEVIC:44,
    SHAWNBLORE:46,
    JERMAINEMCEWEN:37,
    KURTCAPEWELL:40,
    PATCARRIGAN:55,
    JAEMONSALMON:26,
    COREYHORSBURGH:53,
    JESSECOLQUHOUN:42,
    CHRISRANDALL:37,
    JAKETRBOJEVIC:32,
    TRENTLOIERO:46,
    TYSONFRIZELL:43,
    ERINCLARK:52,
    BENTALTY:27,
    JOSHCURRAN:14,
    ZACHOSKING:26,
    OREGONKAUFUSI:25,
    KURTISMORRIN:30,
    ETHANBULLEMOR:38,
    ALECMACDONALD:25,
    PASAMISAULO:23,
    JACKSONFORD:46,
    XAVIERWILLISON:40,
    HARRYHAYES:43,
    MORGANSMITHIES:33,
    TOBYRUDOLF:26,
    LUKESOMMERTON:23,
    KOBEHETHERINGTON:28,
    JOECHAN:16,
    THOMASCANT:27,
    LEKAHALASIMA:25,
    AUBLIXTAWHA:12,
    SITILITUPOUNIUA:28,
    SIMISASAGI:14,
    BILLYBURNS:0,
    KLESEHAAS:34,
    NATHANBROWN:16,
    TUIKAMIKAMIKA:20,
    MATCROKER:46,
    DEMETRICVAIMAUGA:33,
    COREYPAIX:16,
    KURTMANN:32,
    TOMSTARLING:43,
    SIOSIFATALAKAI:20,
    COOPERBAI:24,
    COREYWADDELL:13,
    TYRANWISHART:19,
    SANDONSMITH:13,
    SAMHEALEY:13,
    SCOTTDRINKWATER:53,
    ISAIAHIONGI:39,
    DYLANEDWARDS:48,
    JYEGRAY:44,
    CLINTGUTHERSON:38,
    JAMESTEDESCO:54,
    JAHREAMBULA:40,
    HAMISOTABUAIFIDOW:46,
    MURRAYTAULAGI:38,
    JOSHADDOCARR:37,
    BRIANTOO:44,
    ALEXJOHNSTON:34,
    SETUTU:35,
    MARKNAWAQANITAWASE:47,
    SUNIATURUVA:32,
    SELWYNCOBBO:43,
    JAXONPURDUE:43,
    WILLPENISINI:40,
    PAULALAMOTI:39,
    LATRELLMITCHELL:57,
    VALENTINEHOLMES:48,
    ROBERTTOIA:43,
    TAYLANMAY:44,
    HERBIEFARNWORTH:60,
    TOMCHESTER:34,
    SEANRUSSELL:39,
    CASEYMCLEAN:40,
    JACKWIGHTON:33,
    MOSESSULI:40,
    BILLYSMITH:36,
    STARFORDTOA:40,
    JAKEAVERILLO:36,
    BRAIDONBURNS:48,
    BAYLEYSIMONSSON:33,
    TOMJENKINS:39,
    CAMPBELLGRAHAM:38,
    CHRISTIANTUIPULOTU:36,
    DANIELTUPOU:39,
    HEAMASIMAKASINI:35,
    JAMAYNEISAAKO:41,
    JAKECLIFFORD:43,
    JONAHPEZET:25,
    BLAIZETALAGI:33,
    CODYWALKER:36,
    KYLEFLANAGAN:28,
    DALYCHERRYEVANS:43,
    ADAMDOUEIHI:58,
    KODINIKORIMA:37,
    TOMDEARDEN:51,
    MITCHELLMOSES:51,
    NATHANCLEARY:67,
    JAMIEHUMPHREYS:37,
    DANIELATKINSON:45,
    SAMWALKER:54,
    JAROMELUAI:35,
    ISAIYAKATOA:55,
    COENHESS:34,
    JUNIORPAULO:42,
    MOSESLEOTA:30,
    TEVITATATOLA:49,
    EMREGULER:30,
    NAUFAHUWHYTE:51,
    TERRELLMAY:64,
    FELISEKAUFUSI:28,
    REEDMAHONEY:42,
    TALLYNDASILVA:15,
    MITCHKENNY:41,
    BRANDONSMITH:33,
    DAMIENCOOK:51,
    REECEROBSON:48,
    APIKOROISAU:37,
    JEREMYMARSHALLKING:42,
    JASONTAUMALOLO:32,
    JACKDEBELIN:42,
    LINDSAYSMITH:48,
    KEAONKOLOAMATANGI:51,
    TOBYCOUCHMAN:53,
    SPENCERLENIU:32,
    FONUAPOLE:29,
    TOMGILBERT:37,
    HEILUMLUKI:47,
    KITIONEKAUTOGA:45,
    LIAMMARTIN:40,
    EUANAITKEN:44,
    JADYNSUA:51,
    ANGUSCRICHTON:52,
    KAIPEARCEPAUL:55,
    KULIKEFUFINEFEUIAKI:34,
    SAMMCINTYRE:36,
    JACKWILLIAMS:55,
    SCOTTSORENSON:43,
    DAVIDFIFITA:52,
    LUCIANOLEILUA:44,
    VICTORRADLEY:42,
    SAMUELAFAINU:41,
    CONNOLYLEMUELU:41,
    REUBENCOTTER:45,
    JMAINEHOPGOOD:53,
    ISAAHYEO:54,
    CAMERONMURRAY:60,
    HAMESELE:26,
    LINDSAYCOLLINS:44,
    ALEXTWAL:50,
    MAXPLATH:43,
    GRIFFINNEAME:43,
    DYLANWALKER:32,
    ISAIAHPAPALII:40,
    LACHLANHUBNER:21,
    JACOBLIDDLE:40,
    BLAKESTEEP:19,
    ALEXSEYFARTH:21,
    TOMFLEGLER:41,
    KAIODONNELL:28,
    MATTDOOREY:16,
    LIAMHENRY:36,
    BRONSONGARLICK:34,
    RYANCOUCHMAN:42,
    NATBUTCHER:31,
    SIONEFAINU:38,
    MORGANKNOWLES:46,
    TOMMIKAELE:25,
    SAMTUIVAITI:15,
    LUKEGARNER:16,
    TALLISDUNCAN:35,
    HAMISHSTEWART:44,
    SIUAWONG:29,
    ROYCEHUNT:26,
    ORYNKEELEY:28,
    MATTLODGE:19,
    RYLEYSMITH:41,
    BILLYPHILLIPS:18,
    PETERMAMOUZELOS:22,
    JOSHKERR:26,
    CONNORWATSON:25,
    LATUFAINU:9,
    KURTDONOGHUE:16
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
    {id:"cowboys-titans",title:"Cowboys vs Titans",homeTeam:"Cowboys",awayTeam:"Titans",venue:"Queensland Country Bank Stadium",roundLabel:"Round 3",kickoff:"Sun 22 Mar 6:15 PM",kickoffAt:"2026-03-22T18:15:00+10:00"}
  ];
  const matchOddsByGame={"raiders-bulldogs":{home:1.9,away:1.9},"roosters-panthers":{home:1.9,away:1.9},"storm-broncos":{home:1.9,away:1.9},"knights-warriors":{home:1.9,away:1.9},"sharks-dolphins":{home:1.9,away:1.9},"rabbitohs-wests-tigers":{home:1.9,away:1.9},"eels-dragons":{home:1.9,away:1.9},"cowboys-titans":{home:1.9,away:1.9}}; // Demo odds seed. Replace these with your actual match prices.
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
  function roundToHalf(value){return Math.round(value*2)/2;}
  function normalizePlayerKey(value){return String(value||"").toUpperCase().replace(/[^A-Z0-9]/g,"");}
  function derivedPlayerStatsFor(playerName){return derivedData?.playerStatsByName?.[normalizePlayerKey(playerName)]||null;}
  function derivedTeamStatsFor(teamName){return derivedData?.teamConcessionsByTeam?.[teamName]||null;}
  function priceImpliedProjectionForPlayer(playerName){
    const playerStats=derivedPlayerStatsFor(playerName);
    return Number.isFinite(Number(playerStats?.priceImpliedProjection))?Number(playerStats.priceImpliedProjection):null;
  }
  function playerLineOverrideFor(playerName){
    const key=normalizePlayerKey(playerName);
    return PLAYER_LINE_OVERRIDES[key]??PLAYER_LINE_OVERRIDES[PLAYER_LINE_ALIASES[key]];
  }
  function slugify(value){return value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");}
  function baseProjectionForPosition(position){
    const map={Fullback:35,Winger:32,Centre:34,"Five-Eighth":36,Halfback:42,Prop:38,Lock:42,"2nd Row":45,Edge:45,Hooker:42};
    return map[position]??36;
  }
  function getBaseProjection(player){
    const providedProjection=Number(player?.providedProjection);
    const baseProjection=baseProjectionForPosition(player?.position);
    const starterFloor=player?.isStarting===false?baseProjection:baseProjection-5;
    if(Number.isFinite(providedProjection)&&providedProjection>0){
      return roundToHalf(Math.max(providedProjection,starterFloor));
    }
    const fallbackProjection=baseProjection;
    return roundToHalf(Math.max(fallbackProjection,starterFloor));
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
  function buildRoundMarkets(){
    return Object.entries(playerRowsByGame).flatMap(([gameId,rows])=>rows.map(([team,playerName,position,jerseyNumber])=>buildMarketFromPlayer(gameId,team,playerName,position,jerseyNumber)));
  }
  return {HALF_POINT,roundGames,TEAM_COLORS,playerRowsByGame,buildRoundMarkets,roundToHalf,slugify,getBaseProjection};
});
