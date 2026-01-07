import { LandingData } from './types';

// Kardiológiai szolgáltatások teljes adatbázisa a chatbothoz
export const FULL_SERVICES_DATA = {
  "cardiology_services": [
    {
      "service_name": "Kardiológiai konzultáció",
      "detailed_description": "Átfogó kardiológiai vizsgálat, mely magában foglalja az anamnézis felvételét, fizikális vizsgálatot, EKG-t és szükség szerint további vizsgálatok megbeszélését. A konzultáció során személyre szabott terápiás javaslatot kap.",
      "duration": "30-45 perc",
      "indication": "Általános szív-érrendszeri panaszok, kontroll vizsgálat, megelőzés"
    },
    {
      "service_name": "EKG (Elektrokardiográfia)",
      "detailed_description": "Az elektrokardiográfia a szív elektromos működésének vizsgálata. 10 elektródát helyezünk fel a mellkasra és a végtagokra. A vizsgálat fájdalommentes, pár percet vesz igénybe. Nemcsak ritmuszavarokat, hanem a legtöbb szervi szívbetegséget is kimutatja.",
      "duration": "10-15 perc",
      "indication": "Szívritmuszavar, mellkasi fájdalom, szívdobogásérzés"
    },
    {
      "service_name": "Szívultrahang (Echocardiographia)",
      "detailed_description": "A szívultrahang vizsgálat során működés közben láthatóvá válik a szív, vizsgálható a szívizom, az üregrendszer és a billentyűk. Megkülönböztethető a normális és a kóros véráramlás, mérhetők a szívméretek és az áramlási sebességek. A vizsgálat bal oldalon fekve történik.",
      "duration": "20-30 perc",
      "indication": "Szívbillentyű betegség, szívelégtelenség, cardiomyopathia"
    },
    {
      "service_name": "Terheléses EKG",
      "detailed_description": "Fizikai terhelés alatt a szív munkája 4-6-szorosára nőhet, és a szívizom vérellátásának is arányosan nőnie kell. Ha a koszorúerekben jelentős szűkületek vannak, a szívizom fokozott oxigénigénye nem elégíthető ki - ez jellegzetes EKG változásokkal jár. A vizsgálat futópadon vagy kerékpár-ergométeren történik.",
      "duration": "30-45 perc",
      "indication": "Koszorúér-betegség gyanúja, infarktus utáni kontroll"
    },
    {
      "service_name": "Holter EKG (24-48 órás)",
      "detailed_description": "A Holter monitorizálás során 24-48 órán keresztül folyamatosan rögzítjük a szív elektromos tevékenységét. A páciens egy mobiltelefon méretű készüléket visel, ami digitálisan rögzíti az EKG-t. A ritmuszavarok alapvető vizsgálómódszere.",
      "duration": "24-48 óra",
      "indication": "Szívritmuszavar, szívdobogásérzés, ájulás kivizsgálása"
    },
    {
      "service_name": "ABPM (24 órás vérnyomás monitorozás)",
      "detailed_description": "A készülék 24 órán át legalább óránként mér vérnyomást és tárolja az eredményeket. Betekintést nyerünk a napi vérnyomás-ingadozásba, kiszűrhetők a 'fehér köpeny' hipertónia esetek, amikor csak az orvosi rendelőben magas a vérnyomás.",
      "duration": "24 óra",
      "indication": "Magas vérnyomás kivizsgálása, terápia beállítása"
    },
    {
      "service_name": "Laboratóriumi vizsgálatok",
      "detailed_description": "A belgyógyászati és kardiológiai vizsgálat során, valamint a betegségek és beavatkozások követése kapcsán bizonyos vérlaboratóriumi paraméterek ismerete elengedhetetlen. A vérvétel a könyökhajlati vénából történik, zárt rendszerű technológiával szinte fájdalommentes.",
      "duration": "10 perc",
      "indication": "Koleszterin, vércukor, vesefunkció, pajzsmirigy"
    }
  ],
  "patient_advice": [
    {
      "topic": "Vérnyomásmérés",
      "advice": "A vérnyomás egészséges emberekben is változik percről percre, 100-140 Hgmm között. Fizikai aktivitás, pszichés stressz során akár az egészséges határértékeket is meghaladhatja. Magas vérnyomás betegség gyanúja akkor merül fel, ha a nyugalmi vérnyomásértékek 140 Hgmm felett vannak."
    },
    {
      "topic": "Szívinfarktus figyelmeztető jelei",
      "advice": "Figyelmeztető jelek: 1) Mellkasi fájdalom - legalább 30 percig tartó, nyomó vagy szorító jellegű. 2) Kellemetlen érzés a felsőtestben - kar, hát, nyak, állkapocs fájdalom. 3) Légszomj. 4) Hideg verejték, hányinger, szédülés. Nőknél gyakrabban jelentkezik hányinger és a hátba sugárzó fájdalom."
    },
    {
      "topic": "Teendő szívinfarktus gyanúja esetén",
      "advice": "Szívinfarktus esetén minden perc számít! A gyors cselekvés életet menthet. Ne késlekedjen a mentő hívásával - ez a leggyorsabb út az életmentő beavatkozáshoz. A kiérkező orvos azonnal megkezdi a gyógyszeres terápiát."
    }
  ]
};

export const LANDING_DATA: LandingData = {
  "service_categories": [
    {
      "category_name": "Kardiológiai konzultáció",
      "description": "Átfogó szív-érrendszeri vizsgálat, EKG és személyre szabott terápiás javaslat egyetlen alkalommal."
    },
    {
      "category_name": "Szívultrahang",
      "description": "A szív működésének, billentyűinek és üregrendszerének részletes ultrahangos vizsgálata."
    },
    {
      "category_name": "Terheléses EKG",
      "description": "A szív működésének vizsgálata fizikai terhelés alatt - koszorúér-betegség kiszűrésére."
    },
    {
      "category_name": "Holter vizsgálat",
      "description": "24-48 órás folyamatos EKG monitorozás ritmuszavarok kimutatására."
    },
    {
      "category_name": "ABPM vizsgálat",
      "description": "24 órás vérnyomás monitorozás a valós vérnyomásértékek megismerésére."
    }
  ],
  "treatment_benefits": [],
  "unique_selling_propositions": [
    { "value": "30+ év kardiológiai tapasztalat" },
    { "value": "Átfogó vizsgálat egy alkalommal" },
    { "value": "Modern, jól felszerelt rendelő" },
    { "value": "Személyre szabott terápia" },
    { "value": "Invazív kardiológiai jártasság" },
    { "value": "Demeter Alapítvány támogatása" }
  ],
  "pricing_structures": [],
  "contact_details": {
    "phone_number": "30/551-6668",
    "address": "4400 Nyíregyháza, Északi krt 46/Fsz 1",
    "email_address": "",
    "opening_hours": "Előzetes bejelentkezéssel"
  },
  "trust_signals": []
};

export const FAQ_ITEMS = [
  {
    question: "Hogyan készüljek fel a kardiológiai vizsgálatra?",
    answer: "Hozza magával korábbi leleteit, gyógyszerlistáját. Terheléses EKG esetén kényelmes ruházatot és sportcipőt viseljen. ABPM és Holter vizsgálat előtt zuhanyzás ajánlott, mert a készülék viselése alatt nem lehet."
  },
  {
    question: "Fáj-e a szívultrahang vizsgálat?",
    answer: "A szívultrahang teljesen fájdalommentes. A vizsgálat során bal oldalán fekszik, a vizsgálófej a mellkasára kerül. A vizsgálat 20-30 percet vesz igénybe."
  },
  {
    question: "Milyen gyakran érdemes kardiológushoz járni?",
    answer: "40 éves kor felett évente, magas vérnyomás, cukorbetegség, emelkedett koleszterin vagy szívbetegség a családban esetén már korábban is ajánlott a rendszeres kontroll."
  },
  {
    question: "Mikor forduljak azonnal orvoshoz?",
    answer: "Mellkasi fájdalom, szorításérzet, légszomj, tartós szívdobogásérzés, ájulás vagy eszméletvesztés esetén azonnal forduljon orvoshoz vagy hívjon mentőt!"
  },
  {
    question: "Elfogadnak-e beutalót?",
    answer: "A magánrendelés beutaló nélkül is igénybe vehető. A vizsgálati díj egy része a Demeter Alapítványt támogatja."
  }
];

// Orvosi szakértelem és képzettség
export const DOCTOR_EXPERTISE = [
  "Kardiológia",
  "Csecsemő és Gyermekgyógyászat",
  "Neonatológia",
  "Invazív Kardiológia",
  "ECHO licenc",
  "Akut infarktus ellátás"
];