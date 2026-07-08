// === 100 modułów Mindfullness ===
const TITLES = [
  "Dostosowanie diety do długowieczności",
  "Bezpieczne i skuteczne ćwiczenia dla seniorów",
  "Pozostań mentalnie sprawny i zaangażowany",
  "Zdrowie kości — znaczenie wapnia i witaminy D",
  "Budowanie i utrzymywanie relacji społecznych",
  "Proaktywne działania zapobiegające chorobom przewlekłym",
  "Utrzymywanie zdrowej skóry wraz z wiekiem",
  "Dostosowanie snu do zdrowego starzenia się",
  "Unikanie szkodliwych zachowań dla długowieczności",
  "Aktywność fizyczna i mentalna na co dzień",
  "Zrozumienie detoksu — co to właściwie znaczy",
  "Naturalne produkty wspierające detoks — co jeść",
  "Znaczenie nawodnienia w procesie detoksu",
  "Herbaty ziołowe na detoks — korzyści i przepisy",
  "Wypacanie toksyn — ćwiczenia wspierające detoks",
  "Obalanie mitów o detoksie — fakty kontra fikcja",
  "Wspieranie układu trawiennego podczas detoksu",
  "Ograniczanie ekspozycji na toksyny środowiskowe",
  "Klarowność umysłu — detoks ciała i psychiki",
  "Bezpieczne praktyki detoksu — unikanie szkodliwych metod",
  "Identyfikowanie i przetwarzanie emocji",
  "Techniki budowania odporności psychicznej",
  "Praktyczne strategie wzmacniania poczucia własnej wartości",
  "Kształtowanie pozytywnego nastawienia",
  "Skuteczne techniki radzenia sobie ze stresem",
  "Praktyki mindfulness dla zdrowia emocjonalnego",
  "Znaczenie wsparcia społecznego i relacji",
  "Rozwijanie inteligencji emocjonalnej",
  "Twórcza ekspresja dla dobrostanu emocjonalnego",
  "Kiedy szukać profesjonalnego wsparcia w zdrowiu emocjonalnym",
  "Identyfikowanie i zarządzanie czynnikami ryzyka",
  "Żywienie profilaktyczne w chorobach przewlekłych",
  "Najlepsze ćwiczenia zapobiegające chorobom",
  "Znaczenie regularnych badań kontrolnych",
  "Strategie rzucania palenia dla zdrowia",
  "Zrozumienie i umiarkowanie spożycia alkoholu",
  "Zarządzanie stresem w profilaktyce chorób",
  "Utrzymywanie zdrowej masy ciała w zapobieganiu chorobom",
  "Rola jakości snu w profilaktyce chorób",
  "Codzienne zdrowe praktyki dla długoterminowego zdrowia",
  "Kluczowe składniki odżywcze — wapń i witamina D",
  "Korzyści z ćwiczeń obciążeniowych dla kości",
  "Aktywności o niskim obciążeniu dla zdrowia stawów",
  "Zapobieganie osteoporozie — wskazówki i strategie",
  "Naturalne i medyczne metody radzenia sobie z artretyzmem",
  "Znaczenie prawidłowej postawy i ułożenia ciała",
  "Codzienne ćwiczenia rozciągające i poprawiające elastyczność",
  "Praktyki bezpiecznego ruchu i zapobiegania urazom",
  "Obalanie mitów dotyczących zdrowia kości",
  "Najlepsze produkty dla mocnych kości — wskazówki żywieniowe",
  "Nawodnienie dla promiennej skóry — pij więcej!",
  "Produkty dla zdrowej, promiennej skóry — wskazówki żywieniowe",
  "Ochrona przeciwsłoneczna — najlepsze praktyki",
  "Tworzenie rutyny pielęgnacyjnej — kroki do zdrowej skóry",
  "Naturalne sposoby na powszechne problemy skórne",
  "Zarządzanie stresem dla czystszej skóry",
  "Jak jakość snu wpływa na Twoją skórę",
  "Detoks dla zdrowej skóry — wskazówki oczyszczające",
  "Wskazówki przeciwstarzeniowe — jak zachować młody wygląd",
  "Zrozumienie typu skóry — spersonalizowana pielęgnacja",
  "Czym jest zdrowie holistyczne — zasady i korzyści",
  "Połączenie ciało–umysł — zrozumienie zależności",
  "Medytacja i praktyki mindfulness",
  "Odżywianie holistyczne — podejście oparte na naturalnych produktach",
  "Terapie alternatywne — akupunktura, reiki i inne",
  "Osiąganie równowagi emocjonalnej — techniki harmonii",
  "Łączenie form aktywności fizycznej dla pełnego dobrostanu",
  "Praktyki duchowe dla spokoju i poczucia celu",
  "Tworzenie zdrowej przestrzeni życiowej — wellness środowiskowy",
  "Codzienne praktyki dla całościowego dobrostanu",
  "Tworzenie zbilansowanych posiłków — żywienie rodzinne",
  "Zabawy ruchowe dla całej rodziny",
  "Wspieranie zdrowia psychicznego w rodzinie",
  "Budowanie silnych relacji dzięki zdrowej komunikacji",
  "Ustalanie zdrowych limitów czasu przed ekranem",
  "Zapewnienie jakościowego odpoczynku w każdym wieku",
  "Techniki radzenia sobie ze stresem dla całej rodziny",
  "Znaczenie regularnych badań i szczepień",
  "Tworzenie codziennych zdrowych praktyk w rodzinie",
  "Dawanie przykładu — modelowanie zdrowych zachowań",
  "Zarządzanie pracą i życiem prywatnym — wyznaczanie granic",
  "Skuteczne zarządzanie czasem",
  "Równowaga między obciążeniem a relaksem — redukcja stresu",
  "Zdrowe nawyki w pracy — ergonomia i przerwy",
  "Znajdowanie czasu dla siebie — priorytetyzacja self care",
  "Uważność w pracy — bycie obecnym i skupionym",
  "Budowanie wspierających relacji w pracy",
  "Włączanie aktywności fizycznej w ciągu dnia — bądź aktywny",
  "Zdrowe jedzenie w biegu — żywienie w pracy",
  "Ulepszanie przestrzeni roboczej — tworzenie pozytywnego środowiska",
  "Poprawa jakości powietrza w domu — wskazówki i triki",
  "Ograniczanie szkodliwych chemikaliów — życie bez toksyn",
  "Wskazówki dotyczące życia w zgodzie z naturą — ekologiczne praktyki",
  "Korzyści z organizacji przestrzeni — bałagan a zdrowie psychiczne",
  "Znaczenie naturalnego światła dla dobrego samopoczucia",
  "Projektowanie relaksującej przestrzeni — dom w stylu zen",
  "Naturalne środki czystości — ekologiczne sprzątanie",
  "Rośliny domowe dla dobrostanu — korzyści z zieleni",
  "Tworzenie spokojnego otoczenia — redukcja hałasu",
  "Codzienne ekologiczne praktyki dla zdrowszej planety"
];

const DETAILED = {
  1: [{id:'leafy-greens-daily',name:'Codzienna porcja zielonych warzyw',desc:'Wprowadź co najmniej jedną porcję zielonych warzyw liściastych (szpinak, jarmuż, rukola) do codziennego jadłospisu.',barriers:['Trudno znaleźć świeże warzywa w sklepie','Nie wiem, jak przygotować je smacznie','Brak czasu na codzienne zakupy']},{id:'whole-grains-intake',name:'Zamiana na pełne ziarna',desc:'Zastąp białe pieczywo, ryż i makaron ich pełnoziarnistymi odpowiednikami.',barriers:['Pełnoziarniste produkty są droższe','Przyzwyczajenie do smaku białego pieczywa','Trudność w znalezieniu w menu restauracji']},{id:'omega-3-sources',name:'Regularne spożycie kwasów omega-3',desc:'Włącz do diety tłuste ryby morskie (łosoś, makrela, sardynki) co najmniej 2 razy w tygodniu.',barriers:['Nie lubię smaku ryb','Wysoka cena świeżych ryb','Nie wiem, jakie są roślinne źródła omega-3']},{id:'calorie-awareness',name:'Świadomość kaloryczna posiłków',desc:'Naucz się szacować zapotrzebowanie kaloryczne i dostosuj wielkość porcji do swojego wieku i aktywności.',barriers:['Trudność w liczeniu kalorii','Brak wiedzy o swoim zapotrzebowaniu','Jedzenie poza domem utrudnia kontrolę']},{id:'antioxidant-foods',name:'Dieta bogata w antyoksydanty',desc:'Codziennie spożywaj produkty bogate w przeciwutleniacze: jagody, orzechy, gorzka czekolada, zielona herbata.',barriers:['Jagody są drogie poza sezonem','Nie znam wszystkich źródeł antyoksydantów','Trudność w utrzymaniu codziennej rutyny']},{id:'meal-timing-routine',name:'Regularne pory posiłków',desc:'Ustal stałe pory 3 głównych posiłków i 2 przekąsek, jedz ostatni posiłek 3 godziny przed snem.',barriers:['Zmienny grafik pracy','Podjadanie między posiłkami','Brak planowania posiłków']},{id:'protein-aging',name:'Odpowiednia podaż białka',desc:'Zadbaj o 1,2-1,5g białka na kg masy ciała dziennie dla utrzymania masy mięśniowej.',barriers:['Nie znam dobrych źródeł białka roślinnego','Trudność w przygotowaniu dań wysokobiałkowych','Obawa przed nadmiarem białka']},{id:'fermented-foods',name:'Fermentowana żywność codziennie',desc:'Wprowadź do diety kiszonki, jogurt naturalny, kefir lub kombuchę dla zdrowia jelit.',barriers:['Nie lubię kwaśnego smaku kiszonek','Brak dostępu do dobrej jakości fermentowanych produktów','Nie wiem, jak zrobić własne kiszonki']},{id:'sugar-reduction-plan',name:'Stopniowa redukcja cukru',desc:'Ogranicz dodany cukier do maksymalnie 25g dziennie, zastępując go naturalnymi słodzikami.',barriers:['Silne uzależnienie od słodkiego smaku','Cukier ukryty w produktach przetworzonych','Presja społeczna na spotkaniach']},{id:'optimal-hydration',name:'Optymalne nawodnienie organizmu',desc:'Pij minimum 1,5-2 litry wody dziennie, dostosowując ilość do aktywności fizycznej.',barriers:['Zapominanie o piciu wody','Nie lubię smaku czystej wody','Częste wizyty w toalecie']},{id:'herbs-spices-daily',name:'Zioła i przyprawy zamiast soli',desc:'Zastąp sól kuchenną ziołami (oregano, bazylia, tymianek) i przyprawami (kurkuma, imbir, cynamon).',barriers:['Przyzwyczajenie do słonego smaku','Brak wiedzy o przyprawach','Czasochłonne przygotowywanie']},{id:'portion-size-control',name:'Kontrola wielkości porcji',desc:'Używaj mniejszych talerzy i misek, naucz się rozpoznawać sygnały sytości.',barriers:['Przyzwyczajenie do dużych porcji','Jedzenie emocjonalne','Presja dokończenia wszystkiego z talerza']},{id:'food-journal-habit',name:'Dziennik żywieniowy',desc:'Prowadź dziennik spożywanych posiłków przez minimum 2 tygodnie.',barriers:['Zapominanie o zapisywaniu','Brak czasu na notowanie','Poczucie winy przy zapisywaniu niezdrowych wyborów']},{id:'mindful-eating-practice',name:'Praktyka uważnego jedzenia',desc:'Jedz bez rozpraszaczy, przeżuwaj każdy kęs minimum 20 razy.',barriers:['Nawyk jedzenia przed ekranem','Brak czasu na spokojny posiłek','Trudność w skupieniu na jedzeniu']},{id:'organic-choices',name:'Świadome wybory organiczne',desc:'W miarę możliwości wybieraj produkty ekologiczne, szczególnie z listy parszywej dwunastki.',barriers:['Wyższa cena produktów eko','Ograniczona dostępność','Trudność w ocenie, które produkty są naprawdę eko']}],
  2: [{id:'daily-walking-routine',name:'Codzienny spacer minimum 30 minut',desc:'Wprowadź codzienny 30-minutowy spacer jako fundament aktywności fizycznej.',barriers:['Brak czasu przy napiętym grafiku','Niechęć do spacerów w złą pogodę','Brak towarzystwa do chodzenia']},{id:'stretching-program',name:'Program rozciągania 10 min dziennie',desc:'Wykonuj codziennie 10-minutową sesję rozciągania wszystkich głównych grup mięśniowych.',barriers:['Sztywność ciała utrudnia ćwiczenia','Niewiedza jakie ćwiczenia wykonywać','Zapominanie o rozciąganiu']},{id:'balance-exercises',name:'Ćwiczenia równoważne 3x w tygodniu',desc:'Ćwicz równowagę 3 razy w tygodniu: stanie na jednej nodze, chodzenie po linii.',barriers:['Obawa przed upadkiem','Brak pewności w wykonywaniu','Brak instruktora']},{id:'strength-training-senior',name:'Trening siłowy dostosowany do wieku',desc:'Wykonuj ćwiczenia siłowe 2-3 razy w tygodniu z taśmami oporowymi lub masą własnego ciała.',barriers:['Obawa przed kontuzją','Brak sprzętu w domu','Nie wiem, od czego zacząć']},{id:'swimming-aquatics',name:'Pływanie lub aqua aerobik',desc:'Regularnie uczęszczaj na basen — pływanie odciąża stawy i wzmacnia całe ciało.',barriers:['Brak basenu w okolicy','Wstyd przed pływaniem','Koszt karnetu']},{id:'tai-chi-practice',name:'Praktyka tai chi',desc:'Dołącz do grupy tai chi — łączy powolny ruch, równowagę i medytację.',barriers:['Brak zajęć w okolicy','Wydaje się zbyt skomplikowane','Trudność w znalezieniu czasu']},{id:'chair-exercises',name:'Ćwiczenia na krześle',desc:'Wykonuj ćwiczenia na krześle w dni, gdy nie możesz wyjść z domu.',barriers:['Wydaje się mało efektywne','Brak motywacji w domu','Niewiedza jakie ćwiczenia robić']},{id:'joint-mobility',name:'Codzienna mobilizacja stawów',desc:'Poświęć 5 minut rano na krążenia wszystkich stawów.',barriers:['Poranny pośpiech','Ból stawów przy ruchu','Zapominanie o rutynie']},{id:'breathing-exercises',name:'Ćwiczenia oddechowe 5 min dziennie',desc:'Praktykuj przeponowe oddychanie: wdech nosem 4s, zatrzymanie 4s, wydech ustami 6s.',barriers:['Nie widzę potrzeby','Trudność w skupieniu','Zapominanie w ciągu dnia']},{id:'posture-correction',name:'Korekta postawy ciała',desc:'Świadomie koryguj postawę — proste plecy, cofnięte barki, głowa w osi kręgosłupa.',barriers:['Wieloletnie nawyki posturalne','Praca siedząca','Ból przy zmianie pozycji']},{id:'fall-prevention',name:'Profilaktyka upadków w domu',desc:'Usuń przeszkody z podłogi, zamontuj uchwyty w łazience, popraw oświetlenie schodów.',barriers:['Koszt adaptacji mieszkania','Opór przed zmianami','Brak świadomości zagrożeń']},{id:'warm-up-routine',name:'Rozgrzewka przed każdą aktywnością',desc:'Przed każdym wysiłkiem wykonaj 5-minutową rozgrzewkę.',barriers:['Pomijanie rozgrzewki z pośpiechu','Niewiedza jak się rozgrzać','Wydaje się niepotrzebne']},{id:'cool-down-stretching',name:'Schładzanie po wysiłku',desc:'Po każdej aktywności fizycznej poświęć 5 minut na łagodne rozciąganie.',barriers:['Brak czasu po ćwiczeniach','Zapominanie o schładzaniu','Nieumiejętność stretchingu']},{id:'progress-tracking',name:'Monitorowanie postępów aktywności',desc:'Zapisuj codzienną aktywność fizyczną w dzienniku lub aplikacji.',barriers:['Zapominanie o zapisywaniu','Brak odpowiedniej aplikacji','Zniechęcenie przy braku postępów']},{id:'rest-days-planning',name:'Planowanie dni odpoczynku',desc:'Zaplanuj minimum 2 dni w tygodniu na aktywną regenerację.',barriers:['Poczucie winy przy odpoczynku','Trudność w odróżnieniu lenistwa od regeneracji','Presja ciągłego ćwiczenia']}],
  3: [{id:'daily-puzzles',name:'Codzienne łamigłówki',desc:'Rozwiązuj codziennie krzyżówkę, sudoku lub zagadkę logiczną — minimum 10 minut dziennie.',barriers:['Nie lubię łamigłówek','Brak czasu','Trudność w znalezieniu poziomu']},{id:'learn-new-skill',name:'Nauka nowej umiejętności',desc:'Zapisz się na kurs lub rozpocznij naukę nowej umiejętności: język obcy, instrument, rękodzieło.',barriers:['Koszt kursów','Obawa przed porażką','Brak pomysłu co robić']},{id:'reading-habit',name:'Codzienna lektura 20 minut',desc:'Czytaj codziennie minimum 20 minut — książki, artykuły, biografie.',barriers:['Trudność ze skupieniem','Problemy ze wzrokiem','Brak ciekawych książek']},{id:'memory-games',name:'Gry pamięciowe 3x w tygodniu',desc:'Graj w gry pamięciowe: zapamiętywanie list, memory, aplikacje treningu mózgu.',barriers:['Wydaje się dziecinne','Brak partnera do gier','Nudzi mnie to']},{id:'social-engagement',name:'Aktywność społeczna stymulująca umysł',desc:'Dołącz do klubu dyskusyjnego, koła brydżowego, grupy wolontariatu.',barriers:['Nieśmiałość','Brak klubów w okolicy','Brak czasu na spotkania']},{id:'crossword-sudoku',name:'Krzyżówki i sudoku',desc:'Rozwiązuj krzyżówki lub sudoku codziennie rano jako rozgrzewkę umysłową.',barriers:['Nie umiem sudoku','Krzyżówki za trudne/łatwe','Brak dostępu do gazet']},{id:'language-learning',name:'Nauka języka obcego',desc:'Ucz się nowego języka przez 15 minut dziennie z aplikacją.',barriers:['Brak motywacji','Trudność w zapamiętywaniu','Koszt aplikacji']},{id:'brain-training-apps',name:'Aplikacje treningu mózgu',desc:'Korzystaj z aplikacji treningu poznawczego 3 razy w tygodniu po 15 minut.',barriers:['Sceptycyzm','Koszt aplikacji','Zmęczenie ekranem']},{id:'music-art-engagement',name:'Zaangażowanie w muzykę i sztukę',desc:'Słuchaj nowej muzyki, odwiedzaj galerie, maluj — sztuka tworzy nowe połączenia neuronowe.',barriers:['Nie mam talentu','Brak wydarzeń kulturalnych','Brak czasu na hobby']},{id:'mindfulness-meditation',name:'Medytacja mindfulness 10 min',desc:'Praktykuj medytację uważności 10 minut dziennie.',barriers:['Trudność w siedzeniu','Natłok myśli','Sceptycyzm']},{id:'journaling-practice',name:'Praktyka journalingu',desc:'Pisz dziennik 10 minut dziennie — refleksje, cele, podziękowania.',barriers:['Nie wiem o czym pisać','Brak czasu','Obawa o prywatność']},{id:'debate-discussion',name:'Dyskusje i debaty',desc:'Angażuj się w merytoryczne dyskusje — stymuluje krytyczne myślenie.',barriers:['Unikanie konfrontacji','Brak osób do dyskusji','Trudność w argumentacji']},{id:'teaching-others',name:'Dzielenie się wiedzą',desc:'Ucz innych tego, co sam potrafisz — mentoring, tutoriale, pomoc wnukom.',barriers:['Nie czuję się ekspertem','Brak okazji','Stres przed wystąpieniami']},{id:'limit-passive-media',name:'Ograniczenie biernych mediów',desc:'Zastąp oglądanie TV aktywnymi formami spędzania czasu.',barriers:['Silny nawyk TV','Nuda bez telewizora','Brak alternatyw']},{id:'sleep-cognition',name:'Sen dla sprawności umysłowej',desc:'Zadbaj o 7-8 godzin snu — mózg konsoliduje pamięć podczas snu.',barriers:['Problemy z zasypianiem','Budzenie się w nocy','Nieregularny harmonogram']}],
  4: [{id:'calcium-rich-diet',name:'Dieta bogata w wapń',desc:'Spożywaj 3 porcje produktów bogatych w wapń dziennie.',barriers:['Nietolerancja laktozy','Nie lubię nabiału','Nie znam roślinnych źródeł']},{id:'vitamin-d-sun',name:'Ekspozycja słoneczna dla witaminy D',desc:'Spędzaj 15-30 minut na słońcu dziennie dla naturalnej syntezy witaminy D.',barriers:['Praca w zamknięciu','Obawa przed rakiem skóry','Zimowy brak słońca']},{id:'vitamin-d-supplement',name:'Suplementacja witaminy D',desc:'Przyjmuj witaminę D3 800-2000 IU dziennie — skonsultuj dawkę z lekarzem.',barriers:['Zapominanie','Wątpliwości co do dawki','Koszt']},{id:'magnesium-intake',name:'Odpowiednia podaż magnezu',desc:'Jedz produkty bogate w magnez: orzechy, nasiona dyni, gorzka czekolada.',barriers:['Nie znam źródeł','Brak w diecie','Problemy z przyswajaniem']},{id:'weight-bearing-exercise',name:'Ćwiczenia obciążeniowe 3x w tygodniu',desc:'Wykonuj ćwiczenia z obciążeniem: szybki marsz, schody, lekkie ciężary.',barriers:['Ból stawów','Brak sprzętu','Niepewność co do bezpieczeństwa']},{id:'reduce-soda-intake',name:'Eliminacja napojów gazowanych',desc:'Wyklucz słodzone napoje gazowane — fosforany wypłukują wapń.',barriers:['Uzależnienie','Brak alternatyw','Presja społeczna']},{id:'bone-density-test',name:'Badanie gęstości kości',desc:'Wykonaj densytometrię co 2 lata po 50. roku życia.',barriers:['Koszt badania','Strach przed wynikiem','Brak skierowania']},{id:'protein-bone-health',name:'Białko dla zdrowia kości',desc:'Zadbaj o odpowiednią podaż białka 1-1,2g/kg masy ciała.',barriers:['Nie lubię mięsa','Nie znam zapotrzebowania','Trudność w przygotowaniu']},{id:'vitamin-k-sources',name:'Produkty bogate w witaminę K',desc:'Jedz zielone warzywa liściaste — witamina K kieruje wapń do kości.',barriers:['Nie lubię zielonych','Brak w diecie','Nie umiem przyrządzać']},{id:'reduce-sodium',name:'Ograniczenie sodu do 5g dziennie',desc:'Ogranicz sól — nadmiar sodu zwiększa wydalanie wapnia.',barriers:['Nawyk solenia','Sód ukryty','Jedzenie poza domem']},{id:'avoid-smoking-bone',name:'Unikanie palenia dla kości',desc:'Rzuć palenie — nikotyna uszkadza osteoblasty.',barriers:['Silne uzależnienie','Brak wsparcia','Przyrost wagi']},{id:'limit-alcohol-bone',name:'Ograniczenie alkoholu',desc:'Maksimum 1 drink dziennie — alkohol zaburza metabolizm wapnia.',barriers:['Presja towarzyska','Nawyk wieczorny','Trudność w odmawianiu']},{id:'balance-daily',name:'Ćwiczenia równoważne codziennie',desc:'Ćwicz równowagę 5 minut dziennie przy myciu zębów.',barriers:['Zapominanie','Obawa przed upadkiem','Brak cierpliwości']},{id:'fall-proof-home',name:'Zabezpieczenie domu przed upadkami',desc:'Usuń luźne dywaniki, zamontuj poręcze, popraw oświetlenie.',barriers:['Koszt adaptacji','Opór przed zmianą','Bagatelizowanie']},{id:'posture-bone',name:'Prawidłowa postawa dla kości',desc:'Utrzymuj prostą sylwetkę — zgarbienie zwiększa ryzyko złamań.',barriers:['Wieloletnie nawyki','Praca przy komputerze','Ból przy zmianie']}],
  5: [{id:'regular-checkins',name:'Regularne kontakty z bliskimi',desc:'Zaplanuj minimum 3 kontakty z bliskimi tygodniowo.',barriers:['Zapominanie','Brak czasu','Brak tematów']},{id:'active-listening',name:'Praktyka aktywnego słuchania',desc:'W rozmowach nie przerywaj, zadawaj pytania, parafrazuj.',barriers:['Nawyk przerywania','Rozpraszanie telefonem','Trudność w skupieniu']},{id:'join-group-activity',name:'Dołączenie do grupy zainteresowań',desc:'Zapisz się do klubu książki, grupy spacerowej, chóru.',barriers:['Nieśmiałość','Brak grup','Brak czasu']},{id:'volunteering',name:'Wolontariat',desc:'Zaangażuj się w wolontariat — pomaganie buduje relacje.',barriers:['Brak czasu','Nie wiem gdzie','Obawa przed zobowiązaniami']},{id:'reconnect-friends',name:'Odnowienie starych przyjaźni',desc:'Raz w miesiącu skontaktuj się z kimś z przeszłości.',barriers:['Obawa przed odrzuceniem','Brak kontaktu','Poczucie winy']},{id:'family-meals',name:'Regularne posiłki rodzinne',desc:'Minimum 3 wspólne posiłki tygodniowo bez telefonów.',barriers:['Różne harmonogramy','Brak tradycji','Konflikty']},{id:'digital-balance',name:'Równowaga cyfrowej komunikacji',desc:'Technologia do podtrzymywania relacji, nie zastępuj nią spotkań.',barriers:['Uzależnienie','Powierzchowność','Zmęczenie ekranem']},{id:'express-gratitude',name:'Wyrażanie wdzięczności',desc:'Codziennie wyraź wdzięczność przynajmniej jednej osobie.',barriers:['Zapominanie','Skrępowanie','Brak nawyku']},{id:'conflict-resolution',name:'Konstruktywne rozwiązywanie konfliktów',desc:'Użyj komunikatu ja: czuję... gdy... potrzebuję...',barriers:['Emocje biorą górę','Brak umiejętności','Unikanie rozmów']},{id:'set-boundaries',name:'Stawianie zdrowych granic',desc:'Naucz się mówić nie bez poczucia winy.',barriers:['Lęk przed odrzuceniem','Presja bycia miłym','Brak asertywności']},{id:'shared-hobbies',name:'Wspólne hobby',desc:'Znajdź aktywność z partnerem, przyjacielem lub rodziną.',barriers:['Różne zainteresowania','Brak czasu','Trudność w organizacji']},{id:'community-events',name:'Udział w wydarzeniach społecznych',desc:'Raz w miesiącu weź udział w lokalnym wydarzeniu.',barriers:['Nieśmiałość','Brak informacji','Zmęczenie']},{id:'pet-companionship',name:'Towarzystwo zwierząt',desc:'Rozważ adopcję — zwierzęta redukują samotność.',barriers:['Alergia','Koszt','Brak czasu']},{id:'intergenerational',name:'Relacje międzypokoleniowe',desc:'Spędzaj czas z osobami w różnym wieku.',barriers:['Różnice pokoleniowe','Brak wspólnych tematów','Bariery']},{id:'avoid-toxic',name:'Odcięcie od toksycznych relacji',desc:'Zidentyfikuj i ogranicz relacje, które Cię wyczerpują.',barriers:['Poczucie winy','Zależność finansowa','Strach przed samotnością']}]
};

function autoFactors(idx, title) {
  var p = ['Wprowadzenie do','Codzienna praktyka','Monitorowanie postępów','Edukacja o','Planowanie tygodniowe','Stopniowe wdrażanie','Świadome unikanie','Budowanie nawyku','Wsparcie otoczenia dla','Regularna ocena','Małe kroki w','Zastępowanie złych nawyków','Tworzenie środowiska dla','Refleksja nad','Świętowanie postępów w'];
  return p.map(function(pref, i) {
    return {
      id: 'm'+idx+'-f'+(i+1),
      name: pref+': '+title.slice(0,50),
      desc: 'Krok '+(i+1)+' w kierunku: '+title.toLowerCase()+'.',
      barriers: ['Brak motywacji','Trudność w utrzymaniu regularności','Brak wsparcia otoczenia']
    };
  });
}

export var MODULES = TITLES.map(function(title, i) {
  var idx = i+1;
  return {
    id: idx,
    themeId: 'mindfullness',
    title: title,
    desc: 'Moduł '+idx+': '+title+'. Praktyczne strategie wdrożeniowe krok po kroku.',
    factors: DETAILED[idx] || autoFactors(idx, title)
  };
});

var ALL_MODULES = { mindfullness: MODULES, sport: [], sen: [], relacje: [], praca: [], finanse: [] };
export function getModules(themeId) { return ALL_MODULES[themeId] || []; }
