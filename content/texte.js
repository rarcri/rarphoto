const texte = [
  // 1
  {
    id: 0,
    text: "“Pot să se mute munții, pot să se clatine dealurile, dar dragostea Mea nu se va muta de la tine, și legământul Meu de pace nu se va clătina, zice Domnul, care are milă de tine.”",
    reference: "Isaia 54:10",
    keyword: "green+mountains",
  },
  // 2
  {
    id: 1,
    text: "“Să nu vi se tulbure inima. Aveți credință în Dumnezeu, și aveți credință în Mine. În casa Tatălui Meu sunt multe locașuri.”",
    reference: "Ioan 14:1-2",
    keyword: "city",
  },
  // 3
  {
    id: 2,
    text: "“Isus a zis: ‘Eu sunt calea, adevărul și viața. Nimeni nu vine la Tatăl, decât prin Mine.”",
    reference: "Ioan 14:6",
  },
  // 4
  {
    id: 3,
    text: "“Iată, Eu vin curând; și răsplata Mea este cu Mine, ca să dau fiecăruia după fapta lui.”",
    reference: "Apocalipsa 22:12",
  },
  // 5
  {
    id: 4,
    text: "“Iată că El vine pe nori. Și orice ochi Îl va vedea; și cei ce L-au străpuns. Și toate semințiile pământului se vor boci din pricina Lui! Da, Amin.”",
    reference: "Apocalipsa 1:7",
  },
  // 6
  {
    id: 5,
    text: "“El va sterge orice lacrimă din ochii lor. Și moartea nu va mai fi. Nu va mai fi nici tânguire, nici țipăt, nici durere, pentru că lucrurile dintâi au trecut.”",
    reference: "Apocalipsa 21:4",
  },
  // 7
  {
    id: 6,
    text: "“Eu sunt Păstorul cel bun. Eu Îmi cunosc oile Mele, și ele Mă cunosc pe Mine, așa cum Mă cunoaște pe Mine Tătal, și cum cunosc Eu pe Tatăl; și Eu îmi dau viața pentru oile Mele.”",
    reference: "Ioan 10:14-15",
  },
  // 8
  {
    id: 7,
    text: "“Veniți la Mine, toți cei trudiți și împovarați, și Eu vă voi da odihnă.”",
    reference: "Matei 11:28",
  },
  // Aici am rămas cu verificatul
  // 9
  {
    id: 8,
    text: "“Luați jugul Meu asupra voastră, și învățați de la Mine, căci Eu sunt blând și smerit cu inima; și veți găsi odihna pentru sufletele voastre. Căci jugul Meu este bun, și sarcina Mea este ușoară.”",
    reference: "Matei 11:29-30",
  },

  // 10
  {
    id: 9,
    text: "“Căci, cum iese fulgerul de la răsărit și se vede până la apus, așa va fi și venirea Fiului omului.”",
    reference: "Matei 24:27",
  },

  // 11
  {
    id: 10,
    text: "“Cerul și pământul vor trece, dar cuvintele Mele nu vor trece.”",
    reference: "Matei 24:35",
  },

  // 12
  {
    id: 11,
    text: "“Dar cine va răbda până la sfârșit, va fi mântuit.”",
    reference: "Matei 24:13",
  },

  // 13
  {
    id: 12,
    text: "“Evanghelia aceasta a Împărăției va fi propovăduită în toată lumea, ca să slujească de mărturie tuturor neamurilor. Atunci va veni sfârșitul.” ",
    reference: "Matei 24:14",
  },

  // 14
  {
    id: 13,
    text: "“Înainte ca să Mă cheme, le voi răspunde; înainte ca să isprăvească vorba, îi voi asculta!”",
    reference: "Isaia 65:24",
  },

  {
    id: 14,
    text: "“Fiule, nu disprețui mustrarea Domnului, și nu te mâhni de pedepsele Lui.”",
    reference: "Proverbe 3:11",
  },
  {
    id: 15,
    text: "„Domnul Se va lupta pentru voi, dar voi staţi liniştiţi.”",
    reference: "Exodul 14:14",
  },
  {
    id: 16,
    text: "„Voi umbla în mijlocul vostru; Eu voi fi Dumnezeul vostru, şi voi veţi fi poporul Meu.”",
    reference: "Leveticul 26:12",
  },
  {
    id: 17,
    text: "„Ferice de omul care nu se duce la sfatul celor răi, nu se opreşte pe calea celor păcătoşi şi nu se aşază pe scaunul celor batjocoritori!”",
    reference: " Psalmii 1:1",
  },
  {
    id: 18,
    text: "„Tu-mi dai mai multă bucurie în inima mea, decât au ei când li se înmulţeşte rodul grâului şi al vinului.”",
    reference: "Psalmii 4:7",
  },
  {
    id: 19,
    text: "„Eu mă culc şi adorm în pace, căci numai Tu, Doamne, îmi dai linişte deplină în locuinţa mea.”",
    reference: "Psalmii 4:8",
  },
  {
    id: 20,
    text: "„Atunci toţi cei ce se încred în Tine se vor bucura, se vor înveseli totdeauna, căci Tu îi vei ocroti. Tu vei fi bucuria celor ce iubesc Numele Tău.”",
    reference: "Psalmii 5:11",
  },
  { reference: "Psalmii 5:12" },
  { reference: "Psalmii 6:9" },
  { reference: "Psalmii 7:10" },
  { reference: "Psalmii 9:4" },
  { reference: "Psalmii 9:9" },
  { reference: "Psalmii 9:10" },
  { reference: "Psalmii 11:7" },
  { reference: "Psalmii 13:5-6" },
  { reference: "Psalmii 15:1-2" },
  { reference: "Psalmii 16:5" },
  { reference: "Psalmii 16:7" },
  { reference: "Psalmii 16:8" },
  { reference: "Psalmii 16:11" },
  { reference: "Psalmii 18:16" },
  { reference: "Psalmii 18:19" },
  { reference: "Psalmii 18:23-24" },
  { reference: "Psalmii 18:28" },
  { reference: "Psalmii 18:29" },
  { reference: "Psalmii 18:30" },
  { reference: "Psalmii 18:31-32" },
  { reference: "Psalmii 18:33" },
  { reference: "Psalmii 18:35" },
  { reference: "Ioan 3:16" },
  { reference: "Romani 6:23" },
  { reference: "Ioan 1:12" },
  { reference: "Ioan 3:3" },
  { reference: "Ioan 3:3" },
  { reference: "Evrei 9:22" },
  { reference: "Matei 18:3" },
  { reference: "Apocalipsa 3:20" },
  { reference: "1 Ioan 1:9" },
  { reference: "Romani 10:9" },
  { reference: "Efeseni 2:8,9" },
  { reference: "Tit 3:5" },
  { reference: "Faptele Apostolilor 16:31" },
  { reference: "Ioan 3:36" },
  { reference: "Ioan 10:28" },
  { reference: "2 Corinteni 5:17" },
  //    18,28114) 18,29115) 18,30116) 18,31-32117) 18,33118) 18,35119) 18,36120) 18,39121) 19,7122) 19,8123) 19,9-11124) 20,1-2125) 20,6126) 20,7-8127) 22,26128) 23,1129) 23,2-3130) 23,4131) 23,5132) 23,6133) 24,4-5134) 25,2135) 25,5136) 25,8-9137) 25,10138) 25,12139) 25,14140) 25,15141) 27,1142) 27,3143) 27,5144) 28,6145) 28,7146) 28,8147) 29,11148) 30,1149) 30,2150) 30,3151) 30,4-5152) 30,11-12
  // {
  //   id: 21,
  //   text: "„”",
  //   reference: "",
  // },
];

export default texte;
