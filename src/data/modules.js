const factorBank = [
  { id: "daily-habit", name: "Codzienny nawyk", desc: "Wprowadź mały, powtarzalny nawyk", barriers: ["Brak czasu", "Zapominanie", "Brak motywacji"] },
  { id: "weekly-routine", name: "Cotygodniowa rutyna", desc: "Zaplanuj stały rytuał raz w tygodniu", barriers: ["Zmienny harmonogram", "Brak planowania"] },
  { id: "tracking", name: "Śledzenie postępów", desc: "Monitoruj swoje działania codziennie", barriers: ["Zapominanie o zapisywaniu", "Brak narzędzia"] },
  { id: "social-support", name: "Wsparcie społeczne", desc: "Zaangażuj bliskich w swój cel", barriers: ["Brak chętnych osób", "Wstyd przed rozmową"] },
  { id: "environment-design", name: "Projektowanie otoczenia", desc: "Dostosuj swoje środowisko, by ułatwić nawyk", barriers: ["Ograniczona przestrzeń", "Współdzielenie przestrzeni"] },
  { id: "morning-routine", name: "Poranny rytuał", desc: "Wprowadź działanie zaraz po przebudzeniu", barriers: ["Pośpiech rano", "Brak energii o poranku"] },
  { id: "evening-routine", name: "Wieczorny rytuał", desc: "Dodaj nawyk przed snem", barriers: ["Zmęczenie wieczorem", "Nieregularna pora snu"] },
  { id: "meal-prep", name: "Przygotowanie posiłków", desc: "Planuj i przygotuj jedzenie z wyprzedzeniem", barriers: ["Brak czasu w weekend", "Mała lodówka", "Nuda smakowa"] },
  { id: "hydration", name: "Nawodnienie", desc: "Zwiększ spożycie wody w ciągu dnia", barriers: ["Zapominanie o piciu", "Brak dostępu do wody", "Niechęć do smaku wody"] },
  { id: "portion-control", name: "Kontrola porcji", desc: "Naucz się rozpoznawać właściwe wielkości porcji", barriers: ["Głód", "Jedzenie na mieście", "Duże talerze"] },
  { id: "mindful-eating", name: "Uważne jedzenie", desc: "Jedz powoli i bez rozpraszaczy", barriers: ["Jedzenie przed ekranem", "Pośpiech", "Stres"] },
  { id: "snack-swap", name: "Zamiana przekąsek", desc: "Zastąp niezdrowe przekąski zdrowszymi alternatywami", barriers: ["Zachcianki", "Dostępność słodyczy", "Przyzwyczajenie"] },
  { id: "cooking-skill", name: "Nauka gotowania", desc: "Opanuj podstawową technikę kulinarną", barriers: ["Brak umiejętności", "Strach przed gotowaniem", "Brak sprzętu"] },
  { id: "label-reading", name: "Czytanie etykiet", desc: "Naucz się analizować składy produktów", barriers: ["Mała czcionka", "Skomplikowane nazwy", "Brak czasu w sklepie"] },
  { id: "seasonal-eating", name: "Sezonowe jedzenie", desc: "Wybieraj produkty zgodne z porami roku", barriers: ["Ograniczona dostępność", "Wyższe ceny poza sezonem"] },
];

function factorForModule(moduleId, factorIndex) {
  const f = factorBank[(moduleId * 7 + factorIndex * 3) % factorBank.length];
  const suffix = moduleId > 1 ? ` (moduł ${moduleId})` : "";
  return {
    id: `${f.id}-m${moduleId}f${factorIndex}`,
    name: f.name + suffix,
    desc: f.desc + suffix,
    barriers: f.barriers,
  };
}

function makeFactors(moduleId) {
  return Array.from({ length: 15 }, (_, i) => factorForModule(moduleId, i));
}

const module1 = {
  id: 1,
  title: "Zwiększ spożycie warzyw",
  desc: "Warzywa są podstawą zdrowej diety — dostarczają błonnika, witamin i minerałów. W tym module nauczysz się, jak zwiększyć ich ilość w codziennym jadłospisie.",
  factors: [
    {
      id: "leafy-greens",
      name: "Zielone liście codziennie",
      desc: "Dodawaj szpinak, jarmuż, rukolę lub sałatę do przynajmniej jednego posiłku dziennie. Są bogate w żelazo, kwas foliowy i przeciwutleniacze.",
      barriers: ["Trudno dostępne świeże liście zimą", "Brak pomysłu jak je wykorzystać", "Szybko więdną w lodówce"]
    },
    {
      id: "rainbow-plate",
      name: "Talerz tęczowy",
      desc: "Staraj się, aby na każdym talerzu znalazły się warzywa w przynajmniej trzech kolorach. Różne kolory oznaczają różne fitoskładniki.",
      barriers: ["Ograniczona dostępność kolorowych warzyw", "Wyższy koszt różnorodnych warzyw", "Brak sezonowych warzyw zimą"]
    },
    {
      id: "five-portions",
      name: "Pięć porcji dziennie",
      desc: "Docelowo spożywaj minimum 5 porcji warzyw i owoców dziennie, z naciskiem na warzywa. Jedna porcja to garść lub pół szklanki.",
      barriers: ["Trudność w liczeniu porcji", "Brak czasu na przygotowanie", "Niechęć do warzyw w rodzinie"]
    },
    {
      id: "veggie-breakfast",
      name: "Warzywa na śniadanie",
      desc: "Wprowadź warzywa już od pierwszego posiłku dnia — dodaj pomidora, paprykę czy awokado do śniadania.",
      barriers: ["Poranny pośpiech", "Brak pomysłu na warzywne śniadanie", "Przyzwyczajenie do słodkich śniadań"]
    },
    {
      id: "raw-veggies",
      name: "Surowe przekąski",
      desc: "Miej zawsze pod ręką surowe warzywa do chrupania: marchewkę, seler naciowy, paprykę, kalarepę.",
      barriers: ["Brak czasu na krojenie", "Szybkie psucie się pokrojonych warzyw", "Brak miejsca w lodówce"]
    },
    {
      id: "smoothie-strategy",
      name: "Strategia smoothie",
      desc: "Przygotowuj koktajle z dodatkiem szpinaku, jarmużu czy selera — to prosty sposób na przemycenie większej ilości warzyw.",
      barriers: ["Brak blendera", "Niechęć do smaku zielonych koktajli", "Czas na przygotowanie rano"]
    },
    {
      id: "soup-power",
      name: "Zupy warzywne",
      desc: "Gotuj zupy kremy z różnych warzyw — to sycący i prosty sposób na spożycie kilku porcji naraz.",
      barriers: ["Brak czasu na gotowanie", "Niechęć do zup latem", "Brak umiejętności kulinarnych"]
    },
    {
      id: "hidden-veggies",
      name: "Ukryte warzywa",
      desc: "Dodawaj starte warzywa (cukinię, marchew) do sosów, kotletów i zapiekanek — nikt ich nie zauważy.",
      barriers: ["Brak tarki lub robota kuchennego", "Dodatkowy czas przygotowania", "Dzieci wyczuwają smak"]
    },
    {
      id: "frozen-vegetables",
      name: "Mrożone warzywa",
      desc: "Korzystaj z mrożonych warzyw jako szybkiej alternatywy — zachowują większość wartości odżywczych.",
      barriers: ["Przekonanie o niższej jakości mrożonek", "Brak miejsca w zamrażarce", "Inny smak niż świeże"]
    },
    {
      id: "vegetable-snack-prep",
      name: "Przygotowanie warzywnych przekąsek",
      desc: "Raz w tygodniu pokrój warzywa i przechowuj je w pojemnikach — gotowe do szybkiego sięgnięcia.",
      barriers: ["Brak czasu na przygotowanie", "Szybkie wysychanie pokrojonych warzyw", "Brak pojemników"]
    },
    {
      id: "seasonal-vegetables",
      name: "Sezonowe warzywa",
      desc: "Kupuj warzywa sezonowe — są smaczniejsze, tańsze i bardziej odżywcze niż te poza sezonem.",
      barriers: ["Nieznajomość sezonowości warzyw", "Ograniczona oferta w lokalnym sklepie", "Przyzwyczajenie do tych samych warzyw"]
    },
    {
      id: "double-veggie-portions",
      name: "Podwójna porcja warzyw",
      desc: "Kiedy gotujesz obiad, podwajaj ilość warzyw w przepisie — zamiast jednej papryki daj dwie.",
      barriers: ["Ograniczone miejsce na patelni", "Wyższy koszt", "Reszta rodziny nie chce tylu warzyw"]
    },
    {
      id: "plant-protein-veg",
      name: "Warzywa strączkowe",
      desc: "Regularnie jedz warzywa strączkowe: ciecierzycę, soczewicę, fasolę — są bogate w białko i błonnik.",
      barriers: ["Wzdęcia po strączkach", "Długi czas gotowania", "Nieznajomość przepisów"]
    },
    {
      id: "vegetable-first",
      name: "Warzywa na początek",
      desc: "Rozpoczynaj każdy posiłek od zjedzenia warzyw — zanim sięgniesz po resztę dania.",
      barriers: ["Głód i pośpiech", "Brak warzyw na stole", "Przyzwyczajenie do jedzenia wszystkiego naraz"]
    },
    {
      id: "local-market",
      name: "Zakupy na targu",
      desc: "Rób zakupy na lokalnym targu — warzywa są świeższe, a kontakt ze sprzedawcą może inspirować.",
      barriers: ["Brak targu w okolicy", "Ograniczone godziny otwarcia", "Wyższe ceny"]
    }
  ]
};

const moduleTitles = [
  "Zwiększ spożycie warzyw",
  "Pij więcej wody",
  "Ogranicz cukier",
  "Jedz więcej błonnika",
  "Zdrowe tłuszcze",
  "Regularne posiłki",
  "Ogranicz przetworzoną żywność",
  "Zdrowe przekąski",
  "Śniadanie białkowo-tłuszczowe",
  "Fermentowane produkty",
  "Ogranicz alkohol",
  "Aktywność fizyczna codziennie",
  "Sen i regeneracja",
  "Redukcja stresu",
  "Uważność przy jedzeniu",
  "Suplementacja witaminy D",
  "Kwasy omega-3",
  "Probiotyki i prebiotyki",
  "Zioła i przyprawy",
  "Domowe posiłki",
  "Czytanie etykiet",
  "Planowanie posiłków",
  "Zdrowe zakupy spożywcze",
  "Ogranicz sól",
  "Zwiększ spożycie ryb",
  "Orzechy i nasiona",
  "Pełnoziarniste produkty",
  "Ogranicz czerwone mięso",
  "Zdrowe gotowanie",
  "Śniadanie codziennie",
  "Drugie śniadanie do pracy",
  "Zamienniki cukru",
  "Desery bez cukru",
  "Napoje bez kalorii",
  "Smoothie warzywne",
  "Sałatki jako danie główne",
  "Kiełki i mikroliście",
  "Ogranicz kawę",
  "Herbaty ziołowe",
  "Ciemna czekolada",
  "Post przerywany",
  "Dieta śródziemnomorska",
  "Jelita i mikrobiota",
  "Nawodnienie przed posiłkiem",
  "Talerz zdrowego żywienia",
  "Batony energetyczne domowe",
  "Zupy domowe",
  "Kiszonki domowe",
  "Pieczywo na zakwasie",
  "Komosa ryżowa i kasze",
  "Awokado codziennie",
  "Jajka w diecie",
  "Nabiał fermentowany",
  "Ogranicz fast food",
  "Przerwy od jedzenia",
  "Odżywianie okołotreningowe",
  "Nawodnienie w upały",
  "Witamina C naturalna",
  "Magnez w diecie",
  "Żelazo w diecie",
  "Wapń nie tylko z nabiału",
  "Białko roślinne",
  "Dieta bezglutenowa świadomie",
  "Dieta wegetariańska",
  "Dieta fleksitariańska",
  "Ogranicz smażenie",
  "Gotowanie na parze",
  "Mrożenie posiłków",
  "Resztki bez marnowania",
  "Pojemniki na posiłki",
  "Lista zakupów",
  "Ogródek ziołowy w domu",
  "Grzyby w diecie",
  "Algi i wodorosty",
  "Ogranicz napoje gazowane",
  "Soki świeżo wyciskane",
  "Mleko roślinne",
  "Tofu i tempeh",
  "Zamienniki mięsa",
  "Sosy domowe",
  "Marynaty zdrowe",
  "Ogranicz glutaminian sodu",
  "Sól himalajska i morska",
  "Cukier kokosowy i syropy",
  "Miód w diecie",
  "Orzechy włoskie na mózg",
  "Migdały na skórę",
  "Pestki dyni i słonecznika",
  "Siemię lniane i chia",
  "Otręby i płatki owsiane",
  "Kasza gryczana i jaglana",
  "Ryż brązowy i dziki",
  "Makarony pełnoziarniste",
  "Ziemniaki i bataty",
  "Warzywa korzeniowe",
  "Kapusty i warzywa krzyżowe",
  "Pomidory i likopen",
  "Papryka i witamina C",
  "Czosnek i cebula",
  "Imbir i kurkuma",
  "Cynamon i kardamon",
];

function buildModule(id, title) {
  const desc = `Moduł ${id}: ${title}. Praktyczne kroki do wdrożenia zdrowego nawyku.`;
  return { id, title, desc, factors: makeFactors(id) };
}

const generatedModules = moduleTitles.map((title, i) => {
  const id = i + 1;
  if (id === 1) return module1;
  return buildModule(id, title);
});

export const MODULES = generatedModules;
