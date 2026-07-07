/**
 * Mindfullness — engine danych: moduły, czynniki i procedury rekomendacji.
 */
export const MODULES = [
  {
    id: 1,
    title: "Zwiększ spożycie warzyw",
    subtitle: "Dodaj dodatkową porcję warzyw do każdego posiłku",
    description:
      "Zacznij od włączenia do swojej diety zielonych warzyw liściastych, marchwi i brokułów. " +
      "Warzywa są fundamentem diety długowieczności — dostarczają błonnika, witamin, " +
      "minerałów i antyoksydantów, które chronią komórki przed starzeniem.",
    factors: [
      {
        id: "leafy-greens",
        name: "Zielone warzywa liściaste",
        emoji: "\u{1F96C}",
        description: "Szpinak, jarmuż, rukola, sałata rzymska — dodaj garść do każdego obiadu i kolacji.",
        target: "1 porcja dziennie (ok. 80 g)",
        barriers: [
          {
            id: "taste", label: "Nie lubię smaku",
            matchKeywords: ["smak", "gorzki", "niedobry", "nie smakuje", "ble"],
            procedure: {
              title: "Oswojenie smaku — metoda małych kroków",
              steps: [
                { phase: "START (A → B)", instruction: "Zacznij od łyżeczki drobno posiekanego szpinaku dodanego do omletu, sosu pomidorowego lub smoothie. Smak jest niewyczuwalny, a organizm dostaje dawkę żelaza i kwasu foliowego.", duration: "3–5 dni" },
                { phase: "PRZYSPOSOBIENIE", instruction: "Zwiększ porcję do 2–3 łyżek. Dodaj szczyptę soli i odrobinę oliwy z oliwek — tłuszcz pomaga przyswoić witaminy A, D, E, K. Wymieszaj z ulubionym sosem.", duration: "5–7 dni" },
                { phase: "INTEGRACJA", instruction: "Wprowadź drugie warzywo — rukolę lub jarmuż baby. Skrop sokiem z cytryny (neutralizuje goryczkę). Dodaj do wrapa, kanapki lub jako bazę sałatki z owocami.", duration: "7–10 dni" },
                { phase: "CEL (TAK)", instruction: "Komponuj posiłki tak, by zielone warzywa stanowiły ¼ talerza. Eksperymentuj: szpinak w koktajlu owocowym, jarmuż pieczony na chipsy, rukola z parmezanem.", duration: "nawyk na całe życie" }
              ]
            }
          },
          {
            id: "time", label: "Nie mam czasu przygotowywać",
            matchKeywords: ["czas", "szybko", "nie zdążam", "za długo", "gotowanie"],
            procedure: {
              title: "Strategia zero-wysiłku — warzywa bez gotowania",
              steps: [
                { phase: "START (A → B)", instruction: "Kup mieszankę sałat w opakowaniu (gotową do spożycia). Otwórz, przesyp do miski, polej oliwą i sokiem z cytryny. Czas: 60 sekund. Zero mycia, zero krojenia.", duration: "zacznij dziś" },
                { phase: "PRZYSPOSOBIENIE", instruction: "Miej w lodówce mrożony szpinak w kulkach — wrzuć 2–3 kulki do zupy, sosu, jajecznicy lub smoothie. Rozmraża się w 2 minuty podczas gotowania.", duration: "5–7 dni" },
                { phase: "INTEGRACJA", instruction: "Przygotuj 'zielony shot' raz w tygodniu: zmiksuj garść szpinaku, pół jabłka, sok z ½ cytryny i wodę. Przechowuj w butelce. Pij 50 ml przed obiadem. Inwestycja: 10 min/tydzień.", duration: "7–10 dni" },
                { phase: "CEL (TAK)", instruction: "Zasada 'zielonej wkładki': przy każdym gotowym daniu (odgrzewanym lub zamawianym) dodajesz garść gotowej sałaty lub mrożonego szpinaku. Nawyk bez wysiłku.", duration: "nawyk na całe życie" }
              ]
            }
          },
          {
            id: "forget", label: "Zapominam o tym",
            matchKeywords: ["zapominam", "pamiętam", "nie myślę", "przypomnienie"],
            procedure: {
              title: "System zakotwiczenia — warzywa jako automatyczny nawyk",
              steps: [
                { phase: "START (A → B)", instruction: "Ustaw budzik w telefonie na porę obiadu z etykietą '🥬 Zielone!'. Połóż karteczkę 'WARZYWA' na blacie kuchennym lub na lodówce.", duration: "zacznij dziś" },
                { phase: "PRZYSPOSOBIENIE", instruction: "Zastosuj technikę 'habit stacking': dołóż warzywa do czynności, którą już robisz. Np. 'Po zaparzeniu porannej kawy wrzucam szpinak do smoothie'.", duration: "5–7 dni" },
                { phase: "INTEGRACJA", instruction: "Zmień otoczenie: umieść miskę ze świeżymi warzywami na środku stołu lub na wysokości wzroku w lodówce. Dołącz do społeczności — dziel się zdjęciem talerza raz dziennie.", duration: "7–10 dni" },
                { phase: "CEL (TAK)", instruction: "Warzywa stały się domyślnym elementem posiłku — jesz je automatycznie, bez przypominania. Talerz bez zielonego wygląda niekompletnie.", duration: "nawyk na całe życie" }
              ]
            }
          },
          {
            id: "cost", label: "Świeże warzywa są za drogie",
            matchKeywords: ["drogo", "cena", "koszt", "drogie", "za dużo"],
            procedure: {
              title: "Strategia oszczędnego zielonego — maksimum wartości za minimum złotówek",
              steps: [
                { phase: "START (A → B)", instruction: "Kupuj mrożone warzywa — szpinak mrożony kosztuje ~3× mniej niż świeży za tę samą wagę, a ma identyczną wartość odżywczą.", duration: "zacznij dziś" },
                { phase: "PRZYSPOSOBIENIE", instruction: "Wybieraj warzywa sezonowe — w sezonie są nawet 3–4× tańsze. Kup na targu pod koniec dnia — sprzedawcy często oddają taniej.", duration: "5–7 dni" },
                { phase: "INTEGRACJA", instruction: "Uprawiaj mikrolistki (mikrogreens) na parapecie — nasiona rzeżuchy, brokuła czy słonecznika kosztują grosze. Kiełkują w 5–7 dni.", duration: "7–10 dni" },
                { phase: "CEL (TAK)", instruction: "Twój 'zielony budżet' pod kontrolą: mrożonki jako baza, sezonowe świeże jako urozmaicenie, własne kiełki jako codzienny superfood. Koszt: ~1–2 zł za porcję.", duration: "nawyk na całe życie" }
              ]
            }
          }
        ],
        defaultProcedure: {
          title: "Uniwersalna ścieżka wdrożenia zielonych warzyw",
          steps: [
            { phase: "START", instruction: "Dodaj łyżkę posiekanego szpinaku do jednego posiłku dziennie — omlet, kanapka, zupa. Cel: niewyczuwalny dodatek.", duration: "3–5 dni" },
            { phase: "BUDOWA NAWYKU", instruction: "Zwiększ porcję do garści i dodaj do dwóch posiłków. Wprowadź rukolę jako dodatek do kanapek.", duration: "7–10 dni" },
            { phase: "CEL", instruction: "Warzywa liściaste obecne w każdym obiedzie i kolacji. Talerz bez zielonego = niekompletny.", duration: "nawyk" }
          ]
        }
      }
    ]
  }
];

export function correlateProblemToProcedure(factorId, problemDescription) {
  var module = MODULES[0];
  var factor = module.factors.find(function(f) { return f.id === factorId; });
  if (!factor) return null;
  var desc = (problemDescription || "").toLowerCase();
  var bestBarrier = null;
  var bestScore = 0;
  for (var i = 0; i < factor.barriers.length; i++) {
    var barrier = factor.barriers[i];
    var score = 0;
    for (var j = 0; j < barrier.matchKeywords.length; j++) {
      if (desc.indexOf(barrier.matchKeywords[j].toLowerCase()) !== -1) score += 1;
    }
    if (score > bestScore) { bestScore = score; bestBarrier = barrier; }
  }
  if (bestBarrier && bestScore > 0) {
    return { barrierId: bestBarrier.id, barrierLabel: bestBarrier.label, procedure: bestBarrier.procedure, matchScore: bestScore };
  }
  return { barrierId: "default", barrierLabel: "ogólna rekomendacja", procedure: factor.defaultProcedure, matchScore: 0 };
}

export function getBarriersForFactor(factorId) {
  var module = MODULES[0];
  var factor = module.factors.find(function(f) { return f.id === factorId; });
  if (!factor) return [];
  return factor.barriers.map(function(b) { return { id: b.id, label: b.label }; });
}
