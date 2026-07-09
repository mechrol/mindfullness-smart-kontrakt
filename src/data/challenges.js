const CHALLENGES = {
'leafy-greens-daily':{experts:['Psycholog','Dietetyk','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Zielone warzywa to wyzwanie nawykowe. Potrzebujemy struktury: codziennie jedna porcja, małe kroki, nagroda za konsekwencję. Kto zaproponuje plan 7-dniowy?'},
{speaker:'Dietetyk',text:'Ja! Klucz to różnorodność. Każdego dnia inne zielone warzywo, inna forma podania. Dzień 1 zaczynamy od najłatwiejszego — szpinaku baby, bo nie wymaga gotowania.'},
{speaker:'Trener Rozwoju Osobistego',text:'A ja dodam system śledzenia — codzienny odhacznik na lodówce i nagroda po 7 dniach: nowa przyprawa lub zdrowy deser.'},
],days:[
{day:1,title:'Szpinak baby — surowy',task:'Dodaj garść świeżego szpinaku baby do kanapki, wrapa lub sałatki. Nie gotuj — jedz na surowo.',tip:'Najtrudniejszy jest pierwszy kęs. Potem już tylko satysfakcja.'},
{day:2,title:'Jarmuż — chipsy',task:'Upiecz chipsy z jarmużu: skrop oliwą, posyp solą i pieprzem, piecz 10 min w 180°C.',tip:'Zdrowe może być pyszne — przekonaj się sam.'},
{day:3,title:'Rukola — dodatek',task:'Dodaj garść rukoli do obiadu — do makaronu, pizzy lub jako podsypkę do zupy.',tip:'Małe dodatki tworzą wielkie zmiany.'},
{day:4,title:'Botwinka — zupa',task:'Ugotuj prostą zupę z botwinki: podsmaż cebulę, dodaj pokrojoną botwinkę, zalej bulionem, gotuj 15 min.',tip:'Domowa zupa to dowód, że dbasz o siebie.'},
{day:5,title:'Zielone smoothie',task:'Zblenduj garść szpinaku, banana, pół szklanki mleka roślinnego i łyżeczkę miodu.',tip:'Twoje ciało podziękuje ci za każdy łyk zielonej energii.'},
{day:6,title:'Sałata masłowa — baza',task:'Zrób sałatkę gdzie podstawą jest sałata masłowa. Dodaj pomidory, ogórka i ulubiony dressing.',tip:'Prostota to klucz do trwałego nawyku.'},
{day:7,title:'Mix zielonych — podsumowanie',task:'Stwórz własną kompozycję z ulubionych zielonych warzyw z całego tygodnia. Zrób zdjęcie i zapisz przepis.',tip:'Zrobiłeś/aś to! Tydzień zielonej mocy za Tobą. 🌿'},
]},

'whole-grains-intake':{experts:['Psycholog','Dietetyk','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Zmiana pieczywa i makaronu na pełnoziarniste to duży przeskok. Potrzebujemy stopniowego planu. Propozycje?'},
{speaker:'Dietetyk',text:'Proponuję metodę podmiany — każdego dnia jeden produkt. Zaczynamy od najłatwiejszego: płatki owsiane na śniadanie.'},
{speaker:'Coach Zdrowia',text:'A ja dodam element odkrywania — każdego dnia znajdujemy nowy produkt pełnoziarnisty i oceniamy smak. Jak w grze.'},
],days:[
{day:1,title:'Płatki owsiane na śniadanie',task:'Zamień białe pieczywo na miskę płatków owsianych z owocami i orzechami.',tip:'Dobre śniadanie to fundament dobrego dnia.'},
{day:2,title:'Chleb razowy — pierwszy kęs',task:'Kup chleb razowy na zakwasie. Zjedz jedną kromkę do obiadu zamiast białego pieczywa.',tip:'Smak, do którego trzeba dojrzeć — daj sobie czas.'},
{day:3,title:'Brązowy ryż — test',task:'Ugotuj brązowy ryż jako dodatek do obiadu. Dodaj ulubione przyprawy.',tip:'Nowe smaki to przygoda, nie wyrok.'},
{day:4,title:'Makaron pełnoziarnisty',task:'Ugotuj pełnoziarnisty makaron. Podaj z sosem pomidorowym — smakuje prawie tak samo!',tip:'Różnica jest mniejsza niż myślisz. Daj szansę.'},
{day:5,title:'Kasza gryczana — odkrycie',task:'Ugotuj kaszę gryczaną z warzywami i odrobiną masła. To polski superfood.',tip:'Tradycja ma w sobie mądrość pokoleń.'},
{day:6,title:'Komosa ryżowa — eksperyment',task:'Ugotuj komosę i użyj jako bazy do sałatki z warzywami i fetą.',tip:'Eksperymentuj — zdrowe jedzenie to też dobra zabawa.'},
{day:7,title:'Dzień pełnoziarnisty — całościowo',task:'Cały dzień jedz tylko pełnoziarniste produkty. OCEŃ samopoczucie i poziom energii.',tip:'Po tygodniu czujesz różnicę? Twoje ciało już wie, co dla niego dobre.'},
]},

'omega-3-sources':{experts:['Dietetyk','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Omega-3 to temat zdrowotny. Wielu ludzi unika ryb albo nie wie o roślinnych źródłach. Potrzebujemy planu dostępnego dla każdego.'},
{speaker:'Dietetyk',text:'Zróbmy plan mieszany: co drugi dzień coś innego. Dni nieparzyste — ryby, dni parzyste — roślinne omega-3. Elastycznie.'},
{speaker:'Coach Zdrowia',text:'Świetnie! Dodam motywację: omega-3 to lepszy nastrój i spokojniejszy sen. Warto dla samego samopoczucia.'},
],days:[
{day:1,title:'Łosoś z patelni',task:'Usmaż filet z łososia na oliwie z oliwek. Dopraw solą, pieprzem i koperkiem. Podaj z cytryną.',tip:'Zdrowe tłuszcze to paliwo dla twojego mózgu.'},
{day:2,title:'Siemię lniane — roślinnie',task:'Zmiel łyżkę siemienia lnianego i dodaj do owsianki, jogurtu lub smoothie.',tip:'Małe nasionko, wielka moc. Twoje serce ci podziękuje.'},
{day:3,title:'Makrela wędzona',task:'Zjedz makrelę wędzoną na kanapce z pełnoziarnistego pieczywa z ogórkiem kiszonym.',tip:'Proste jedzenie, które działa cuda dla twojego zdrowia.'},
{day:4,title:'Orzechy włoskie',task:'Zjedz garść (ok. 30g) orzechów włoskich jako przekąskę. Są bogate w omega-3 ALA.',tip:'Garść orzechów dziennie trzyma lekarza z daleka.'},
{day:5,title:'Sardynki w oleju',task:'Zjedz sardynki z puszki na sałatce z rukolą i pomidorami. Szybko i zdrowo.',tip:'Nie oceniaj puszki po okładce — sardynki to skarb.'},
{day:6,title:'Nasiona chia — pudding',task:'Przygotuj pudding chia: 3 łyżki nasion + szklanka mleka roślinnego. Odstaw na noc do lodówki.',tip:'Przygotowanie wieczorem to prezent dla jutrzejszego ciebie.'},
{day:7,title:'Obiad omega — połączenie',task:'Stwórz obiad łączący rybę i orzechy: łosoś posypany orzechami włoskimi + warzywa.',tip:'Tydzień omega-3 to inwestycja w lepszy nastrój i zdrowsze serce. ❤️'},
]},

'calorie-awareness':{experts:['Psycholog','Dietetyk','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Świadomość kaloryczna często przeradza się w obsesję. Jak zrobić to zdrowo, bez liczenia każdej kalorii?'},
{speaker:'Dietetyk',text:'Metoda talerza! 50% warzyw, 25% białka, 25% węglowodanów. Żadnego liczenia, tylko proporcje wizualne.'},
{speaker:'Trener Rozwoju Osobistego',text:'A ja proponuję dziennik sytości zamiast dziennika kalorii. Zapisujemy nie liczby, tylko jak się czujemy po posiłku.'},
],days:[
{day:1,title:'Talerz proporcji — wprowadzenie',task:'Przy każdym posiłku podziel talerz: pół warzyw, ćwiartka białka, ćwiartka węglowodanów.',tip:'Nie liczb kalorii — poczuj proporcje. Twoje ciało zna odpowiedź.'},
{day:2,title:'Dziennik sytości',task:'Po każdym posiłku zapisz w skali 1-10 jak bardzo jesteś syty/a. Cel: 7-8, nie 10.',tip:'Jedzenie do sytości to umiejętność, której można się nauczyć.'},
{day:3,title:'Mały talerz — trik',task:'Jedz tylko z małego talerza 20-22cm. Pełny mały talerz daje mózgowi sygnał: wystarczy.',tip:'Twój mózg widzi pełny talerz, nie jego rozmiar.'},
{day:4,title:'Wolne jedzenie — 20 minut',task:'Wydłuż posiłek do minimum 20 minut. Odłóż sztućce między kęsami.',tip:'Sytość przychodzi po 20 minutach. Daj sobie czas.'},
{day:5,title:'Woda przed posiłkiem',task:'Wypij szklankę wody 15 minut przed każdym posiłkiem.',tip:'Pragnienie często podszywa się pod głód. Nawodnij się najpierw.'},
{day:6,title:'Przekąski — kontrola',task:'Każdą przekąskę zjedz z talerzyka, nie z opakowania. Zobaczysz realną porcję.',tip:'Jedzenie z opakowania to jedzenie bez kontroli. Przełóż na talerz.'},
{day:7,title:'Świadomy dzień — podsumowanie',task:'Zastosuj wszystkie techniki naraz. Wieczorem zapisz jedną rzecz, która najbardziej ci pomogła.',tip:'Znalazłeś/aś swoją metodę? To twój klucz do świadomego jedzenia. 🔑'},
]},

'antioxidant-foods':{experts:['Dietetyk','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Antyoksydanty to ochrona przed starzeniem. Ale jak włączyć je do diety bez rewolucji?'},
{speaker:'Dietetyk',text:'Postawmy na kolory! Każdego dnia inny kolor — to proste do zapamiętania i atrakcyjne wizualnie.'},
{speaker:'Coach Zdrowia',text:'Dodajmy element przyjemności: gorzka czekolada i zielona herbata to też silne antyoksydanty. Kto by odmówił?'},
],days:[
{day:1,title:'Czerwony dzień — jagody',task:'Zjedz garść świeżych lub mrożonych jagód (borówki, maliny, truskawki). Dodaj do owsianki.',tip:'Małe owoce, wielka ochrona. Twoje komórki to kochają.'},
{day:2,title:'Zielony dzień — herbata',task:'Wypij 3 filiżanki zielonej herbaty w ciągu dnia. Parz maksymalnie 3 minuty w 80°C.',tip:'Każdy łyk zielonej herbaty to krok w stronę długowieczności.'},
{day:3,title:'Pomarańczowy dzień — kurkuma',task:'Dodaj łyżeczkę kurkumy do obiadu. Połącz z pieprzem dla lepszego wchłaniania.',tip:'Złota przyprawa, złote zdrowie. Kurkumina to twój sprzymierzeniec.'},
{day:4,title:'Brązowy dzień — czekolada',task:'Zjedz 2 kostki gorzkiej czekolady (minimum 70% kakao). Delektuj się powoli.',tip:'Czekolada, która leczy? Tak, jeśli jest gorzka i jedzona z umiarem.'},
{day:5,title:'Fioletowy dzień — bakłażan',task:'Upiecz bakłażana z oliwą i czosnkiem. Zjedz jako dodatek do obiadu.',tip:'Im ciemniejsze warzywo, tym więcej antyoksydantów. Fiolet rządzi.'},
{day:6,title:'Biały dzień — czosnek',task:'Dodaj świeży czosnek do dwóch posiłków. Najlepiej surowy, drobno posiekany.',tip:'Naturalny antybiotyk i antyoksydant w jednym. Twoja odporność ci podziękuje.'},
{day:7,title:'Tęczowy dzień — wszystkie kolory',task:'Stwórz tęczowy talerz: czerwony, pomarańczowy, żółty, zielony, fioletowy. Zrób zdjęcie.',tip:'Tydzień kolorów to tydzień ochrony. Twoje ciało jest teraz silniejsze. 🌈'},
]},

'meal-timing-routine':{experts:['Psycholog','Dietetyk','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Regularne posiłki to podstawa metabolizmu. Ale jak zbudować rutynę przy zmiennym grafiku?'},
{speaker:'Dietetyk',text:'Okno żywieniowe 10-godzinne jest elastyczne. Można je przesuwać w zależności od dnia.'},
{speaker:'Trener Rozwoju Osobistego',text:'Dodajmy przypomnienia w telefonie — nie jako przymus, tylko jako troskę o siebie.'},
],days:[
{day:1,title:'Ustal godziny',task:'Zapisz 3 godziny głównych posiłków na dziś. Ustaw przypomnienia w telefonie 15 min wcześniej.',tip:'Plan to pierwszy krok do wolności od chaosu żywieniowego.'},
{day:2,title:'Okno 10h — początek',task:'Zjedz wszystkie posiłki w oknie 10-godzinnym (np. 8:00-18:00). Poza oknem tylko woda.',tip:'Twoje ciało potrzebuje czasu na odpoczynek od trawienia.'},
{day:3,title:'Ostatni posiłek 3h przed snem',task:'Zjedz kolację minimum 3 godziny przed snem. Jeśli zgłodniejesz — szklanka herbaty.',tip:'Lekki sen to prezent od lekkiego żołądka.'},
{day:4,title:'Śniadanie w ciągu 1h od wstania',task:'Zjedz śniadanie w ciągu godziny od przebudzenia. To uruchamia metabolizm.',tip:'Śniadanie to jak zapłon silnika — bez niego nie ruszysz.'},
{day:5,title:'Przekąski — w oknie',task:'Zaplanuj 2 zdrowe przekąski w ustalonych godzinach. Np. owoc o 10:30, jogurt o 16:30.',tip:'Przekąski to nie wróg — wróg to chaos. Zaplanuj je.'},
{day:6,title:'Niedziela — elastyczność',task:'Dziś możesz przesunąć okno o 2 godziny. Chodzi o rytm, nie o sztywność.',tip:'Elastyczność w ramach struktury to przepis na trwały nawyk.'},
{day:7,title:'Podsumowanie rytmu',task:'Zapisz, które godziny najlepiej ci służą. Ustal swój stały rytm na przyszłość.',tip:'Znalazłeś/aś swój rytm? Trzymaj się go — twoje ciało kocha przewidywalność. ⏰'},
]},

'protein-aging':{experts:['Dietetyk','Trener Personalny','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Białko to paliwo dla mięśni. Po 50-tce potrzebujemy go więcej. Jak przekonać ludzi do zwiększenia podaży?'},
{speaker:'Dietetyk',text:'Rozłóżmy białko na każdy posiłek. Nie musimy jeść steków — jajka, tofu, jogurt grecki są równie dobre.'},
{speaker:'Trener Personalny',text:'Dodam aktywność fizyczną — białko działa najlepiej w duecie z ćwiczeniami.'},
],days:[
{day:1,title:'Policz swoje białko',task:'Oblicz zapotrzebowanie: 1,2g × masa ciała. Zapisz ile gramów potrzebujesz dziennie.',tip:'Świadomość to pierwszy krok. Teraz wiesz, do czego dążysz.'},
{day:2,title:'Białko na śniadanie',task:'Zjedz śniadanie z 25g białka: 2 jajka + plaster łososia + kromka razowca.',tip:'Białkowe śniadanie to energia na cały poranek.'},
{day:3,title:'Białko na obiad',task:'Do obiadu dodaj porcję białka wielkości twojej dłoni: pierś z kurczaka, tofu lub rybę.',tip:'Twoja dłoń to twoja miarka — zawsze masz ją przy sobie.'},
{day:4,title:'Białkowa przekąska',task:'Zjedz jogurt grecki lub skyr z orzechami jako przekąskę. To 15-20g białka.',tip:'Przekąska może budować mięśnie. Wybieraj mądrze.'},
{day:5,title:'Białko roślinne',task:'Ugotuj soczewicę lub ciecierzycę. Dodaj do sałatki. Poczuj moc roślin.',tip:'Roślinne białko to nie kompromis — to wybór.'},
{day:6,title:'Białko po ćwiczeniach',task:'Po spacerze lub ćwiczeniach zjedz posiłek bogaty w białko w ciągu 1 godziny.',tip:'Okno anaboliczne — twoje mięśnie czekają na paliwo.'},
{day:7,title:'Podsumowanie tygodnia',task:'Sprawdź czy osiągnąłeś/aś cel białkowy. Zapisz najlepsze źródła białka.',tip:'Silne mięśnie to dłuższe, zdrowsze życie. Zainwestowałeś/aś dobrze. 💪'},
]},

'fermented-foods':{experts:['Dietetyk','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Fermentowana żywność to bariera smakowa. Jak przekonać kogoś do kiszonek?'},
{speaker:'Dietetyk',text:'Zacznijmy od łagodnych smaków: jogurt naturalny i kefir są fermentowane i powszechnie lubiane.'},
{speaker:'Coach Zdrowia',text:'A ja proponuję wyzwanie: każdego dnia próbujemy czegoś nowego — jak degustacja, bez presji.'},
],days:[
{day:1,title:'Jogurt naturalny — start',task:'Zjedz kubeczek jogurtu naturalnego z owocami. Bez cukru — owoce wystarczą.',tip:'Fermentacja nie musi być trudna. Zaczynasz od czegoś, co już znasz.'},
{day:2,title:'Kefir — drugi krok',task:'Wypij szklankę kefiru. Możesz dodać odrobinę miodu lub cynamonu dla smaku.',tip:'Kefir to probiotyczna bomba. Twoje jelita już się cieszą.'},
{day:3,title:'Kiszony ogórek — klasyka',task:'Zjedz jednego kiszonego ogórka do obiadu. Nie oceniaj — po prostu spróbuj.',tip:'Jeden kęs dziennie wystarczy, by się przekonać.'},
{day:4,title:'Kiszona kapusta',task:'Dodaj łyżkę kiszonej kapusty do obiadu. Możesz ją podsmażyć — traci część probiotyków, ale zyskuje smak.',tip:'Kapusta kiszona to polski superfood. Nasi dziadkowie to wiedzieli.'},
{day:5,title:'Kombucha — napój',task:'Kup butelkę kombuchy. Wypij pół szklanki jako orzeźwienie po obiedzie.',tip:'Gazowana, lekko kwaśna — to jak lemoniada dla dorosłych.'},
{day:6,title:'Kimchi — egzotyka',task:'Spróbuj kimchi — koreańskiej kiszonki. Możesz dodać do ryżu lub zjeść solo.',tip:'Podróże kulinarne poszerzają horyzonty — i mikrobiom.'},
{day:7,title:'Domowe kiszonki — wyzwanie',task:'Przygotuj własne kiszone warzywa: włóż pokrojone ogórki do słoika, zalej słoną wodą, odstaw.',tip:'Zrobiłeś/aś to! Twoje własne kiszonki to powód do dumy. 🥒'},
]},

'sugar-reduction-plan':{experts:['Psycholog','Dietetyk','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Cukier uzależnia jak narkotyk. Potrzebujemy delikatnego planu odstawienia, bez szoku.'},
{speaker:'Dietetyk',text:'Stopniowa redukcja — co 2 dni zmniejszamy ilość. A na ochotę na słodkie: daktyle i cynamon.'},
{speaker:'Trener Rozwoju Osobistego',text:'Nagradzajmy postępy! Każdy dzień bez cukru to małe zwycięstwo — świętujmy je.'},
],days:[
{day:1,title:'Inwentaryzacja cukru',task:'Zapisz wszystkie produkty z cukrem, które dziś zjadłeś/aś. Nie oceniaj — tylko obserwuj.',tip:'Świadomość to pierwszy krok do zmiany. Już go zrobiłeś/aś.'},
{day:2,title:'Likwidacja cukierniczki',task:'Schowaj cukierniczkę. Herbatę i kawę pij bez cukru. Jeśli musisz — pół łyżeczki.',tip:'Każda nieposłodzona herbata to twoje zwycięstwo.'},
{day:3,title:'Daktyle zamiast słodyczy',task:'Gdy masz ochotę na słodkie, zjedz 2 daktyle. Są słodkie naturalnie i pełne błonnika.',tip:'Natura dała nam słodycz — korzystaj z niej mądrze.'},
{day:4,title:'Bez słodzonych napojów',task:'Nie pij żadnych słodzonych napojów. Woda, herbata, kawa bez cukru — tylko to.',tip:'Płynny cukier to najgorszy cukier. Wypij szklankę wody.'},
{day:5,title:'Cynamon — naturalna słodycz',task:'Dodaj cynamon do owsianki, kawy lub jogurtu. Daje wrażenie słodyczy bez cukru.',tip:'Cynamon oszukuje kubki smakowe. Wykorzystaj to.'},
{day:6,title:'Gorzka czekolada 85%',task:'Jeśli musisz — 1 kostka czekolady 85%+. Gorzka nie pobudza apetytu na słodycze.',tip:'Jakość ponad ilość. Jedna kostka dobrej czekolady to luksus, nie grzech.'},
{day:7,title:'Dzień bez dodanego cukru',task:'Przez cały dzień nie jedz nic z dodanym cukrem. Czytaj etykiety. Podsumuj samopoczucie.',tip:'Tydzień bez cukru? Jesteś silniejszy/a niż myślisz. 🎉'},
]},

'optimal-hydration':{experts:['Psycholog','Dietetyk','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Picie wody to niby proste, a jednak wiele osób zapomina. Jak zbudować nawyk?'},
{speaker:'Dietetyk',text:'Butelka na biurku to podstawa. Jak jest w zasięgu wzroku, ręka sama po nią sięga.'},
{speaker:'Coach Zdrowia',text:'A ja proponuję wodę z dodatkami. Smakowa woda to przyjemność, nie obowiązek.'},
],days:[
{day:1,title:'Kup ładną butelkę',task:'Kup lub znajdź butelkę na wodę 1-1,5L. Niech będzie ładna — będziesz chciał/a jej używać.',tip:'Piękne przedmioty inspirują do działania.'},
{day:2,title:'Butelka na biurku',task:'Napełnij butelkę rano i postaw na biurku. Pij co godzinę kilka łyków.',tip:'To, co w zasięgu wzroku, trafia do ust.'},
{day:3,title:'Woda z cytryną',task:'Dodaj plaster cytryny do wody. Smak jest lepszy, a dodatkowo witamina C.',tip:'Mały dodatek, wielka różnica. Woda już nie jest nudna.'},
{day:4,title:'Woda z miętą i ogórkiem',task:'Do dzbanka wrzuć plasterki ogórka i kilka listków mięty. Zalej wodą i pij cały dzień.',tip:'Spa w twojej kuchni. Nawadnianie może być luksusem.'},
{day:5,title:'Przypomnienia w telefonie',task:'Ustaw 4 przypomnienia dziennie: 9:00, 12:00, 15:00, 18:00 — "Napij się wody!"',tip:'Technologia w służbie zdrowia. Niech telefon przypomina.'},
{day:6,title:'Szklanka przed posiłkiem',task:'Wypij szklankę wody 15 minut przed każdym posiłkiem.',tip:'Nawodnienie + mniejszy apetyt. Dwa w jednym.'},
{day:7,title:'Pomiar — ile wypiłeś/aś',task:'Zmierz ile wody wypiłeś/aś w ciągu dnia. Cel: 1,5-2 litry. Zapisz najlepszy trik.',tip:'Znalazłeś/aś swoją metodę? Utrzymaj ją. Twoje ciało to w 60% woda — dbaj o nią. 💧'},
]},

'herbs-spices-daily':{experts:['Dietetyk','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Zioła zamiast soli to zmiana smakowa. Jak się do tego przekonać?'},
{speaker:'Dietetyk',text:'Eksperymentujmy! Każdego dnia jedna nowa przyprawa. Dzień 1: oregano. Dzień 2: bazylia itd.'},
{speaker:'Coach Zdrowia',text:'Dodajmy świeże zioła — można je hodować na parapecie. To satysfakcja i smak w jednym.'},
],days:[
{day:1,title:'Oregano — włoski akcent',task:'Dodaj łyżeczkę oregano do obiadu. Najlepiej do sosu pomidorowego lub pizzy.',tip:'Jedna przyprawa dziennie — za tydzień znasz ich siedem.'},
{day:2,title:'Bazylia — świeża lub suszona',task:'Dodaj bazylię do sałatki lub makaronu. Świeża jest najlepsza.',tip:'Zapach bazylii to zapach lata. Przenieś go na talerz.'},
{day:3,title:'Kurkuma — złoto przypraw',task:'Dodaj pół łyżeczki kurkumy do ryżu lub zupy. Pamiętaj o szczycie pieprzu.',tip:'Złoty kolor, złote zdrowie. Kurkuma to naturalny antyoksydant.'},
{day:4,title:'Imbir — ostro i zdrowo',task:'Zetrzyj kawałek świeżego imbiru do herbaty lub stir-fry. Doda pikanterii.',tip:'Imbir rozgrzewa i pobudza. Naturalny energetyk.'},
{day:5,title:'Tymianek — prowansalski klimat',task:'Dodaj tymianek do pieczonych warzyw lub mięsa. Uwalnia aromat podczas pieczenia.',tip:'Prowansja na twoim talerzu. Podróż bez biletu.'},
{day:6,title:'Papryka słodka i wędzona',task:'Dodaj łyżeczkę słodkiej papryki do gulaszu lub jajecznicy. Kolor i smak.',tip:'Czerwone złoto kuchni. Papryka to samo zdrowie.'},
{day:7,title:'Własna mieszanka',task:'Stwórz własną mieszankę z ulubionych przypraw. Nazwij ją i używaj codziennie.',tip:'Twoja własna przyprawa to twój kulinarny podpis. 🧂→🌿'},
]},

'portion-size-control':{experts:['Psycholog','Dietetyk','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Kontrola porcji to wyzwanie psychologiczne — talerz musi być pełny, żeby mózg był zadowolony.'},
{speaker:'Dietetyk',text:'Sztuczka z małym talerzem działa cuda. Mózg widzi pełny talerz i jest szczęśliwy.'},
{speaker:'Trener Rozwoju Osobistego',text:'Metoda dłoni — zawsze masz miarkę przy sobie. Zero liczenia, zero wagi.'},
],days:[
{day:1,title:'Mały talerz — rewolucja',task:'Jedz wszystkie posiłki z małego talerza 20-22cm. Nie dokładaj — zjedz to, co nałożyłeś/aś.',tip:'Mniej miejsca = mniej jedzenia. Twój mózg nawet nie zauważy.'},
{day:2,title:'Metoda dłoni — białko',task:'Porcja białka = wielkość twojej dłoni (bez palców). Zastosuj do każdego posiłku.',tip:'Twoja dłoń rośnie proporcjonalnie do ciebie — to idealna miarka.'},
{day:3,title:'Metoda dłoni — węglowodany',task:'Porcja węglowodanów = wielkość twojej zaciśniętej pięści.',tip:'Pięść ryżu, pięść makaronu. Proste i skuteczne.'},
{day:4,title:'Metoda dłoni — warzywa',task:'Porcja warzyw = dwie dłonie złożone razem. Warzyw nigdy dość.',tip:'Warzywa to jedyne, czego możesz jeść bez limitu.'},
{day:5,title:'Powoli — 20 przeżuć',task:'Przeżuwaj każdy kęs minimum 20 razy. Odłóż widelec między kęsami.',tip:'Szybkie jedzenie to wróg sytości. Daj mózgowi czas na reakcję.'},
{day:6,title:'Bez dokładek — zasada',task:'Nałóż raz i nie dokładaj. Po posiłku odczekaj 15 minut przed decyzją o deserze.',tip:'Druga porcja to często przyzwyczajenie, nie głód.'},
{day:7,title:'Podsumowanie — twój system',task:'Zapisz, która metoda działa na ciebie najlepiej. Stwórz swój system kontroli porcji.',tip:'Masz już narzędzia. Teraz tylko je stosuj. 🍽️'},
]},

'food-journal-habit':{experts:['Psycholog','Dietetyk','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Dziennik żywieniowy to potężne narzędzie, ale wiele osób rzuca po 3 dniach. Jak utrzymać motywację?'},
{speaker:'Dietetyk',text:'Uprośćmy maksymalnie. Żadnych kalorii, tylko co i kiedy. Zajmuje to 2 minuty dziennie.'},
{speaker:'Trener Rozwoju Osobistego',text:'Metoda fotograficzna — rób zdjęcia posiłków. To szybsze niż pisanie i bardziej angażujące.'},
],days:[
{day:1,title:'Wybierz metodę',task:'Wybierz: notatnik papierowy, aplikację w telefonie, lub zdjęcia. Cokolwiek jest dla ciebie najłatwiejsze.',tip:'Najlepsza metoda to ta, której faktycznie użyjesz.'},
{day:2,title:'Zapisuj tylko co i kiedy',task:'Zapisuj tylko nazwę posiłku i godzinę. Żadnych kalorii, gramów ani ocen.',tip:'Prostota to klucz do konsekwencji.'},
{day:3,title:'Zdjęcia posiłków',task:'Zrób zdjęcie każdemu posiłkowi. Stwórz album "Dziennik jedzenia".',tip:'Jedno zdjęcie mówi więcej niż strona notatek.'},
{day:4,title:'Dodaj samopoczucie',task:'Do każdego wpisu dodaj jeden emotikon: 😊😐😟. Jak się czułeś/aś po posiłku?',tip:'Emocje i jedzenie są połączone. Odkryj wzorce.'},
{day:5,title:'Zapisuj wszystko — bez wstydu',task:'Zapisz nawet niezdrowe przekąski. Zero oceniania — tylko fakty.',tip:'Dziennik to narzędzie, nie sędzia. Nie ocenia — pomaga zrozumieć.'},
{day:6,title:'Przegląd tygodnia',task:'Przejrzyj zapisy z całego tygodnia. Znajdź jeden wzorzec: co jesz regularnie?',tip:'Jeden wzorzec to jedna rzecz do poprawy. Małymi krokami.'},
{day:7,title:'Wyciągnij wniosek',task:'Zapisz jedną rzecz, którą chcesz zmienić i jedną, którą chcesz utrzymać.',tip:'Dziennik pokazuje prawdę. Teraz użyj jej mądrze. 📓'},
]},

'mindful-eating-practice':{experts:['Psycholog','Instruktor Mindfulness','Dietetyk'],conversation:[
{speaker:'Psycholog',text:'Uważne jedzenie to mindfulness w praktyce. Jak nauczyć ludzi jeść bez rozpraszaczy?'},
{speaker:'Instruktor Mindfulness',text:'Zacznijmy od prostego ćwiczenia: jeden posiłek dziennie w ciszy, bez telefonu i telewizora.'},
{speaker:'Dietetyk',text:'Dodajmy element zmysłowy: opisz smak, teksturę, zapach — to pogłębia doświadczenie.'},
],days:[
{day:1,title:'Jeden posiłek bez ekranów',task:'Zjedz jeden posiłek (nawet przekąskę) bez telefonu, TV i komputera. Tylko ty i jedzenie.',tip:'Obecność przy posiłku to pierwszy krok do uważności.'},
{day:2,title:'Pięć zmysłów przy jedzeniu',task:'Przed zjedzeniem opisz w myślach: jak pachnie? Jak wygląda? Jaka jest tekstura?',tip:'Jedzenie to doświadczenie zmysłowe, nie tylko paliwo.'},
{day:3,title:'Wolne pierwsze trzy kęsy',task:'Pierwsze trzy kęsy każdego posiłku jedz bardzo powoli. Przeżuwaj 20-30 razy.',tip:'Pierwsze kęsy nadają ton całemu posiłkowi.'},
{day:4,title:'Jedzenie w ciszy',task:'Zjedz jeden posiłek w całkowitej ciszy. Słuchaj dźwięków jedzenia.',tip:'Cisza pozwala usłyszeć, co mówi twoje ciało.'},
{day:5,title:'Pytanie przed jedzeniem',task:'Przed każdym posiłkiem zapytaj siebie: czy jestem głodny/a? W skali 1-10.',tip:'Głód fizyczny i emocjonalny to dwie różne rzeczy.'},
{day:6,title:'Odkładanie sztućców',task:'Po każdym kęsie odłóż widelec lub łyżkę. Podnieś dopiero po przełknięciu.',tip:'Automatyczne jedzenie to wróg uważności. Przerwij automat.'},
{day:7,title:'Posiłek celebracją',task:'Przygotuj ulubiony posiłek, nakryj ładnie stół, zapal świeczkę. Zjedz powoli, z wdzięcznością.',tip:'Jedzenie to nie tylko odżywianie — to rytuał. Szanuj go. 🕯️'},
]},

'organic-choices':{experts:['Dietetyk','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Eko produkty są droższe. Jak dokonywać mądrych wyborów bez poczucia winy?'},
{speaker:'Dietetyk',text:'Parszywa dwunastka to lista produktów, które najbardziej chłoną pestycydy. Tylko te kupujmy eko.'},
{speaker:'Coach Zdrowia',text:'Lokalny targ to lepsza opcja niż eko z supermarketu. Świeższe i wspierasz lokalnych rolników.'},
],days:[
{day:1,title:'Lista parszywej dwunastki',task:'Wydrukuj lub zapisz listę parszywej dwunastki. Sprawdź, które produkty z listy jadasz.',tip:'Nie musisz kupować wszystkiego eko. Wystarczy znać priorytety.'},
{day:2,title:'Znajdź lokalny targ',task:'Wyszukaj najbliższy targ lub bazarek. Sprawdź godziny otwarcia.',tip:'Lokalne = świeższe = mniej chemii. To prostsze niż myślisz.'},
{day:3,title:'Zakupy na targu',task:'Pójdź na targ i kup 3 sezonowe warzywa. Zapytaj sprzedawcę o pochodzenie.',tip:'Rozmowa z rolnikiem to najlepsza gwarancja jakości.'},
{day:4,title:'Czytaj etykiety',task:'W supermarkecie czytaj kraj pochodzenia. Wybieraj produkty z Polski — krótsza droga, mniej konserwantów.',tip:'Im bliżej, tym świeższe. Twoje pieniądze wspierają lokalną gospodarkę.'},
{day:5,title:'Sezonowy jadłospis',task:'Sprawdź, co jest teraz w sezonie. Zaplanuj 3 posiłki z sezonowych produktów.',tip:'Sezonowe jedzenie smakuje lepiej i jest tańsze.'},
{day:6,title:'Mrożonki — sprytne eko',task:'Kup mrożone warzywa i owoce. Są zbierane w sezonie i zachowują wartości odżywcze.',tip:'Mrożonka to nie gorszy wybór. Często lepszy niż świeże poza sezonem.'},
{day:7,title:'Twoje zasady eko',task:'Stwórz listę 5 produktów, które zawsze będziesz kupować w lepszej jakości.',tip:'Mądre wybory to nie perfekcja. To priorytetyzacja. 🌍'},
]},

'learn-new-language':{experts:['Psycholog','Trener Rozwoju Osobistego','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Nauka języka po 50-tce to jeden z najlepszych treningów mózgu. Neuroplastyczność działa! Potrzebujemy planu na 7 dni, który jest realistyczny i motywujący.'},
{speaker:'Trener Rozwoju Osobistego',text:'Codziennie 15 minut z aplikacją + jedna nowa fraza do użycia w praktyce. Mało, ale codziennie — to klucz.'},
{speaker:'Coach Zdrowia',text:'Dodajmy element zabawy: każdego dnia uczymy się słów z innej kategorii. Jak gra — przyjemnie i skutecznie.'},
],days:[
{day:1,title:'Wybierz język i aplikację',task:'Pobierz Duolingo, Babbel lub Memrise. Wybierz język, który zawsze chciałeś/aś znać. Zrób pierwszą lekcję (5-10 min).',tip:'Pierwszy krok jest najważniejszy. Nie czekaj na idealny moment — zacznij dziś.'},
{day:2,title:'Podstawowe zwroty',task:'Naucz się 5 podstawowych zwrotów: dzień dobry, dziękuję, proszę, przepraszam, jak się masz. Powtarzaj na głos.',tip:'5 słów dziennie to 1825 słów rocznie. Matematyka działa na twoją korzyść.'},
{day:3,title:'Słownictwo tematyczne',task:'Wybierz kategorię (np. jedzenie) i naucz się 10 słów. Zrób fiszki lub użyj funkcji w aplikacji.',tip:'Mózg kocha kategorie — łatwiej zapamiętujesz, gdy grupujesz.'},
{day:4,title:'Słuchanie — muzyka lub podcast',task:'Posłuchaj piosenki lub podcastu w wybranym języku przez 10 minut. Nie musisz rozumieć wszystkiego.',tip:'Osłuchanie to połowa sukcesu. Twój mózg uczy się nawet gdy nie rozumiesz.'},
{day:5,title:'Mówienie — nagraj się',task:'Nagraj jak się przedstawiasz w nowym języku. Odsłuchaj. Nie oceniaj — po prostu ćwicz.',tip:'Nikt nie mówi idealnie od razu. Akcent to znak odwagi, nie błąd.'},
{day:6,title:'Praktyka w realnym życiu',task:'Znajdź okazję: zamów kawę po włosku, przywitaj się po hiszpańsku, przeczytaj menu po francusku.',tip:'Język żyje poza aplikacją. Użyj go — choćby jednym słowem.'},
{day:7,title:'Podsumowanie i plan',task:'Podsumuj czego się nauczyłeś/aś. Zaplanuj kolejny tydzień. Nagraj krótki filmik — zobaczysz postęp za miesiąc.',tip:'7 dni to dopiero początek. Wyobraź sobie siebie za rok — poliglotą! 🌍'},
]},

'play-instrument':{experts:['Psycholog','Instruktor Mindfulness','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Gra na instrumencie angażuje obie półkule mózgu jednocześnie. To jak siłownia dla neuronów. Od czego zaczynamy?'},
{speaker:'Instruktor Mindfulness',text:'Proponuję zacząć od prostego instrumentu: ukulele, keyboard lub bębenek. 10 minut dziennie, bez presji. Chodzi o flow, nie o koncert.'},
{speaker:'Trener Rozwoju Osobistego',text:'Dokładnie! Każdy dzień to jedna nowa umiejętność — nuta, akord, rytm. Po tygodniu zagrasz prostą melodię.'},
],days:[
{day:1,title:'Wybierz i zdobądź instrument',task:'Wybierz instrument (ukulele, keyboard, gitara, bębenek). Jeśli nie masz — pożycz lub kup prosty model dla początkujących.',tip:'Nie potrzebujesz fortepianu koncertowego. Prosty instrument to prosta radość.'},
{day:2,title:'Poznaj swój instrument',task:'Dowiedz się jak trzymać instrument, jak wydobyć pierwszy dźwięk. Obejrzyj tutorial na YouTube (10 min).',tip:'Każdy mistrz zaczynał od pierwszego nieporadnego dźwięku.'},
{day:3,title:'Pierwsza nuta / akord',task:'Naucz się jednej nuty lub akordu. Powtarzaj aż zabrzmi czysto. 15 minut praktyki.',tip:'Jeden czysty dźwięk to więcej niż 100 niepewnych.'},
{day:4,title:'Prosty rytm',task:'Ćwicz uderzanie w równym rytmie. Użyj metronomu (aplikacja w telefonie). 10 minut.',tip:'Rytm to serce muzyki. Gdy go poczujesz, reszta przyjdzie sama.'},
{day:5,title:'Dwa akordy — przejście',task:'Naucz się drugiego akordu i ćwicz płynne przechodzenie między nimi.',tip:'Przejścia są trudne — i to jest normalne. Mózg właśnie tworzy nowe połączenia.'},
{day:6,title:'Prosta melodia',task:'Zagraj prostą melodię (np. "Wlazł kotek na płotek" lub "Oda do radości"). Powoli, bez pośpiechu.',tip:'Zagranie pierwszej melodii to moment dumy. Zapamiętaj go.'},
{day:7,title:'Mini-koncert',task:'Zagraj to, czego się nauczyłeś/aś — dla siebie lub kogoś bliskiego. Nagraj krótki filmik.',tip:'Nie musisz być wirtuozem. Już jesteś muzykiem — bo grasz. 🎵'},
]},

'join-theater-group':{experts:['Psycholog','Trener Rozwoju Osobistego','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Teatr to potężne narzędzie społeczne. Wychodzisz z domu, poznajesz ludzi, wyrażasz emocje. Ale wielu boi się sceny.'},
{speaker:'Trener Rozwoju Osobistego',text:'Nie musisz być aktorem! Możesz pomagać za kulisami, przy scenografii, kostiumach. Teatr to drużyna.'},
{speaker:'Coach Zdrowia',text:'A ja powiem: nawet jeśli masz tremę — pokonanie jej to najlepszy trening pewności siebie.'},
],days:[
{day:1,title:'Znajdź teatr w okolicy',task:'Wyszukaj "teatr amatorski" lub "grupa teatralna" + twoja miejscowość. Zapisz 3 opcje.',tip:'Teatr jest bliżej niż myślisz. Społeczności kochają nowych członków.'},
{day:2,title:'Sprawdź ofertę',task:'Wejdź na strony lub profile społecznościowe znalezionych grup. Zobacz, co grają i kogo szukają.',tip:'Nie musisz od razu grać Hamleta. Każda pomoc jest cenna.'},
{day:3,title:'Kontakt — pierwszy krok',task:'Napisz maila lub zadzwoń do jednej grupy. Zapytaj, czy możesz przyjść na próbę jako obserwator.',tip:'Jeden telefon może zmienić twoje życie towarzyskie na lata.'},
{day:4,title:'Wizyta na próbie',task:'Idź na próbę jako gość. Zobacz, jak wygląda praca od kulis. Porozmawiaj z ludźmi.',tip:'Obserwacja to też uczestnictwo. Już jesteś częścią tej historii.'},
{day:5,title:'Wybierz swoją rolę',task:'Zastanów się: scena, kulisy, kostiumy, scenografia, światło, promocja? Co cię kręci?',tip:'Teatr potrzebuje wszystkich — nie tylko aktorów.'},
{day:6,title:'Dołącz oficjalnie',task:'Zgłoś chęć dołączenia. Zadeklaruj małe zaangażowanie — np. pomoc przy najbliższym spektaklu.',tip:'Małe zobowiązanie to niskie ryzyko i wysoka nagroda.'},
{day:7,title:'Pierwsze zadanie',task:'Wykonaj swoje pierwsze zadanie w grupie. Może to być roznoszenie plakatów, pomoc przy dekoracjach.',tip:'Jesteś w drużynie! Teatr to rodzina — właśnie zyskała nowego członka. 🎭'},
]},

'attend-lectures':{experts:['Psycholog','Instruktor Mindfulness','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Wykłady utrzymują umysł w formie. Nowa wiedza tworzy nowe połączenia neuronalne. Ale jak znaleźć te wartościowe?'},
{speaker:'Trener Rozwoju Osobistego',text:'YouTube, TED, uniwersytety otwarte, biblioteki — możliwości są nieograniczone. Zacznij od jednego wykładu tygodniowo.'},
{speaker:'Instruktor Mindfulness',text:'Klucz to aktywne słuchanie. Nie tylko oglądaj — rób notatki, zadawaj pytania, dyskutuj potem z kimś.'},
],days:[
{day:1,title:'Wybierz platformę',task:'Wybierz platformę: TED Talks, YouTube, Coursera, lokalny uniwersytet trzeciego wieku. Zapisz się.',tip:'Światowa wiedza jest na wyciągnięcie ręki. Za darmo.'},
{day:2,title:'Znajdź swój pierwszy wykład',task:'Wyszukaj wykład na temat, który cię fascynuje. Max 30 minut. Obejrzyj i zrób 3 notatki.',tip:'Ciekawość to paliwo mózgu. Karm ją regularnie.'},
{day:3,title:'Notatki i refleksja',task:'Po obejrzeniu zapisz: 1) co było nowe, 2) z czym się nie zgadzasz, 3) o czym chcesz wiedzieć więcej.',tip:'Aktywne notowanie zwiększa zapamiętywanie o 50%. Twój mózg to potwierdza.'},
{day:4,title:'Podziel się wiedzą',task:'Opowiedz komuś, czego się dowiedziałeś/aś. Przy obiedzie, przez telefon — podziel się.',tip:'Najlepszy sposób na zapamiętanie to nauczenie kogoś innego.'},
{day:5,title:'Wykład na żywo (lub live)',task:'Znajdź i obejrzyj wykład na żywo — online lub w twojej okolicy. Poczuj energię sali.',tip:'Wykład na żywo to doświadczenie, nie tylko informacja.'},
{day:6,title:'Głębsze zanurzenie',task:'Wybierz temat z tego tygodnia i zgłęb go: przeczytaj artykuł, obejrzyj dodatkowy materiał.',tip:'Jeden temat dogłębnie jest wart więcej niż dziesięć pobieżnie.'},
{day:7,title:'Zaplanuj cykl',task:'Wybierz 4 wykłady na kolejny miesiąc. Wpisz do kalendarza. Stwórz nawyk.',tip:'Jeden wykład tygodniowo = 52 nowe perspektywy rocznie. 🎓'},
]},

'volunteer-regularly':{experts:['Psycholog','Coach Zdrowia','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Wolontariat daje poczucie celu i przynależności. Pomagając innym, pomagamy też sobie. To udowodnione badaniami.'},
{speaker:'Coach Zdrowia',text:'Wolontariat obniża ciśnienie krwi i poziom stresu. To jak lekarstwo — tylko przyjemniejsze.'},
{speaker:'Trener Rozwoju Osobistego',text:'Zacznijmy od małego zaangażowania — 2 godziny tygodniowo. I znajdźmy sprawę, która naprawdę cię porusza.'},
],days:[
{day:1,title:'Zidentyfikuj swoje pasje',task:'Zapisz 3 sprawy społeczne, które cię poruszają: zwierzęta, dzieci, seniorzy, ekologia, kultura.',tip:'Najlepszy wolontariat to ten, który kocha się całym sercem.'},
{day:2,title:'Szukaj organizacji',task:'Wyszukaj organizacje w twojej okolicy związane z wybraną sprawą. Zrób listę 3-5.',tip:'Google Maps + "wolontariat" + twoje miasto = lista gotowa.'},
{day:3,title:'Kontakt — wyślij maila',task:'Napisz do jednej organizacji: kim jesteś, ile czasu możesz poświęcić, dlaczego chcesz pomóc.',tip:'Krótki, szczery mail otwiera więcej drzwi niż idealne CV.'},
{day:4,title:'Rozmowa telefoniczna',task:'Zadzwoń lub odbierz telefon. Umów się na spotkanie zapoznawcze.',tip:'Jeden telefon dzieli cię od nowego rozdziału w życiu.'},
{day:5,title:'Wizyta w organizacji',task:'Odwiedź miejsce. Zobacz jak działa, poznaj ludzi. Poczuj atmosferę.',tip:'Nie zobowiązuj się od razu. Daj sobie czas na decyzję.'},
{day:6,title:'Pierwszy dzień wolontariatu',task:'Przyjdź na pierwszy dyżur. 2 godziny. Bądź otwarty/a, uśmiechnięty/a, gotowy/a pomóc.',tip:'Pierwszy raz jest najtrudniejszy. Potem już tylko leci.'},
{day:7,title:'Refleksja i decyzja',task:'Zapisz, co czułeś/aś po wolontariacie. Czy chcesz kontynuować? Jeśli tak — ustal regularny grafik.',tip:'Pomagasz innym, a bogatszy/a stajesz się ty. To magia wolontariatu. ❤️'},
]},

'practice-mindfulness-daily':{experts:['Psycholog','Instruktor Mindfulness','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Mindfulness to nie moda — to udowodniona metoda redukcji stresu i poprawy koncentracji. Kluczem jest codzienna praktyka.'},
{speaker:'Instruktor Mindfulness',text:'10 minut dziennie wystarczy. Zaczniemy od oddechu, potem dodamy skanowanie ciała, potem uważność w codzienności.'},
{speaker:'Trener Rozwoju Osobistego',text:'Bez oceniania siebie. Jeśli myśli odpływają — to normalne. Delikatnie wracasz do oddechu. I tyle.'},
],days:[
{day:1,title:'5 minut oddechu',task:'Usiądź wygodnie, zamknij oczy. Skup się na oddechu przez 5 minut. Gdy myśli odpłyną — wróć do oddechu.',tip:'Nie ma złej medytacji. Sama próba już jest sukcesem.'},
{day:2,title:'Skanowanie ciała',task:'Połóż się wygodnie. Przesuwaj uwagę od stóp do głowy — zauważaj napięcia, ciepło, mrowienie. 10 minut.',tip:'Twoje ciało mówi do ciebie cały czas. Dziś nauczysz się słuchać.'},
{day:3,title:'Uważny spacer',task:'Idź na 10-minutowy spacer. Skup się na krokach: pięta, śródstopie, palce. Poczuj kontakt z ziemią.',tip:'Zwykły spacer staje się medytacją, gdy jesteś w pełni obecny/a.'},
{day:4,title:'Uważne picie herbaty',task:'Zaparzyć herbatę. Obserwuj parowanie, zapach, ciepło kubka. Pij powoli — każdy łyk osobno.',tip:'Jedna filiżanka wypita uważnie jest warta więcej niż litr wypity w pośpiechu.'},
{day:5,title:'3-minutowa przerwa w pracy',task:'3 razy dziś zatrzymaj się na 1 minutę. Weź 3 głębokie oddechy. Zauważ, co czujesz.',tip:'Mikro-przerwy resetują mózg lepiej niż kawa.'},
{day:6,title:'Uważne słuchanie',task:'Podczas rozmowy skup się w 100% na rozmówcy. Nie planuj odpowiedzi — po prostu słuchaj.',tip:'Najlepszym prezentem dla drugiej osoby jest twoja pełna uwaga.'},
{day:7,title:'Całościowa sesja',task:'Połącz oddech, skanowanie ciała i uważność. Stwórz własną 15-minutową rutynę.',tip:'Mindfulness to nie cel — to droga. Jesteś na niej od tygodnia. 🧘'},
]},

'explore-new-hobby':{experts:['Psycholog','Trener Rozwoju Osobistego','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Nowe hobby to nowe połączenia neuronowe. Mózg uwielbia nowość. Ale jak wybrać spośród tylu możliwości?'},
{speaker:'Trener Rozwoju Osobistego',text:'Metoda prób i odkryć. Przez 7 dni testujemy różne hobby. Jak degustacja — każdego dnia coś innego.'},
{speaker:'Coach Zdrowia',text:'I żadnej presji! Jeśli coś nie spodoba się dziś — jutro spróbujesz czegoś nowego. To przygoda.'},
],days:[
{day:1,title:'Malowanie / rysowanie',task:'Weź kartkę i cokolwiek do rysowania (ołówek, kredki, farby). Przez 20 minut rysuj cokolwiek. Bez ocen.',tip:'Nie musisz być Picassem. Radość tworzenia jest dla każdego.'},
{day:2,title:'Gotowanie — nowy przepis',task:'Znajdź przepis, którego nigdy nie robiłeś/aś. Może kuchnia tajska, indyjska? Ugotuj i zjedz z dumą.',tip:'Gotowanie to chemia, sztuka i przyjemność w jednym.'},
{day:3,title:'Ogrodnictwo — pierwsza roślina',task:'Kup małą roślinę doniczkową. Przesadź ją, podlej, znajdź jej miejsce. Nazwij ją.',tip:'Opieka nad rośliną uczy cierpliwości i daje satysfakcję.'},
{day:4,title:'Fotografia — telefonem',task:'Zrób 10 zdjęć w swojej okolicy. Skup się na detalach: fakturze, świetle, cieniu. Wybierz najlepsze.',tip:'Nie potrzebujesz drogiego sprzętu. Dobre oko masz za darmo.'},
{day:5,title:'Pisanie — dziennik lub opowiadanie',task:'Napisz jedną stronę: opowiadanie, wiersz, wspomnienie. Nie edytuj — po prostu pisz.',tip:'Każdy ma historię do opowiedzenia. Twoja też jest warta zapisania.'},
{day:6,title:'Rękodzieło — coś z niczego',task:'Zrób coś rękami: origami, szydełko, modelina, kolaż. 30 minut twórczej zabawy.',tip:'Ręce pamiętają radość tworzenia z dzieciństwa. Obudź ją.'},
{day:7,title:'Wybierz swoje hobby',task:'Która aktywność dała ci najwięcej radości? Wybierz ją. Zaplanuj regularny czas w tygodniu.',tip:'Znalazłeś/aś nową pasję? To dopiero początek przygody. 🎨'},
]},

'join-social-clubs':{experts:['Psycholog','Coach Zdrowia','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Kluby społeczne to naturalne antidotum na samotność. Przynależność do grupy to podstawowa potrzeba człowieka.'},
{speaker:'Coach Zdrowia',text:'Ludzie zaangażowani społecznie żyją dłużej i zdrowiej. To nie opinia — to statystyka.'},
{speaker:'Trener Rozwoju Osobistego',text:'Klucz to znaleźć klub, który naprawdę rezonuje z twoimi zainteresowaniami. Nie udawaj kogoś, kim nie jesteś.'},
],days:[
{day:1,title:'Zrób listę zainteresowań',task:'Zapisz 5 tematów, które cię pasjonują: książki, szachy, wędrówki, fotografia, taniec, ogrodnictwo.',tip:'Twoje pasje to mapa do twoich ludzi. Podążaj za nią.'},
{day:2,title:'Szukaj klubów i grup',task:'Wyszukaj kluby w twojej okolicy: Facebook Groups, Meetup, biblioteka, dom kultury. Zapisz 3 opcje.',tip:'Każdy klub kiedyś zaczynał od jednej osoby, która zaprosiła drugą.'},
{day:3,title:'Skontaktuj się',task:'Wyślij wiadomość lub zadzwoń do jednego klubu. Zapytaj o termin najbliższego spotkania.',tip:'Jedna wiadomość to most do nowej społeczności.'},
{day:4,title:'Idź na spotkanie',task:'Weź udział w spotkaniu. Przyjdź 5 minut wcześniej. Uśmiechnij się. Przedstaw się.',tip:'Wszyscy byli kiedyś nowi. Pamiętaj o tym.'},
{day:5,title:'Aktywnie uczestnicz',task:'Podczas spotkania zadaj pytanie, podziel się opinią, zaproponuj temat na następny raz.',tip:'Bierność nie buduje relacji. Twoje zaangażowanie tak.'},
{day:6,title:'Zaproponuj coś od siebie',task:'Masz pomysł na aktywność? Wycieczkę, warsztat, dyskusję? Zaproponuj grupie.',tip:'Liderzy nie czekają na pozwolenie. Działają.'},
{day:7,title:'Oceń i zdecyduj',task:'Czy czujesz się dobrze w tej grupie? Jeśli tak — zostań. Jeśli nie — wróć do listy i spróbuj innego klubu.',tip:'Nie każda grupa będzie twoja. I to jest OK. Szukaj dalej. 🤝'},
]},

'solve-puzzles-games':{experts:['Psycholog','Trener Rozwoju Osobistego','Instruktor Mindfulness'],conversation:[
{speaker:'Psycholog',text:'Łamigłówki to fitness dla mózgu. Sudoku, krzyżówki, szachy — każde ćwiczenie tworzy nowe połączenia neuronalne.'},
{speaker:'Trener Rozwoju Osobistego',text:'Codziennie jedna łamigłówka do kawy. 10 minut — wystarczy, żeby rozruszać szare komórki.'},
{speaker:'Instruktor Mindfulness',text:'Klucz to różnorodność. Dziś sudoku, jutro krzyżówka, pojutrze szachy. Mózg nie lubi rutyny.'},
],days:[
{day:1,title:'Sudoku — na początek',task:'Rozwiąż jedno łatwe sudoku. Użyj aplikacji lub gazety. Zmierz czas — dla zabawy.',tip:'Sudoku uczy logicznego myślenia. Każda wypełniona cyfra to małe zwycięstwo.'},
{day:2,title:'Krzyżówka klasyczna',task:'Rozwiąż krzyżówkę. Sięgnij po gazetę lub znajdź online. Nowe słowa = nowe synapsy.',tip:'Każde przypomniane słowo to mały trening pamięci.'},
{day:3,title:'Szachy lub warcaby',task:'Zagraj w szachy online lub z kimś bliskim. Jeśli nie umiesz — obejrzyj podstawy na YouTube.',tip:'Szachy to nie gra — to gimnastyka dla mózgu.'},
{day:4,title:'Aplikacje do treningu mózgu',task:'Pobierz aplikację: Peak, Lumosity lub Elevate. Zrób codzienną sesję treningową.',tip:'10 minut dziennie z aplikacją to jak siłownia dla neuronów.'},
{day:5,title:'Zagadki logiczne',task:'Znajdź 3 zagadki logiczne online. Rozwiąż je. Daj sobie czas — nie spiesz się.',tip:'Zagadki uczą patrzenia na problem z różnych stron.'},
{day:6,title:'Łamigłówki przestrzenne',task:'Puzzle, kostka Rubika, tangram. Wybierz jedno. Ćwicz 15 minut.',tip:'Myślenie przestrzenne to jedna z kluczowych funkcji poznawczych.'},
{day:7,title:'Turniej domowy',task:'Zaproś kogoś na wieczór gier: szachy, scrabble, warcaby. Połącz umysł z relacjami.',tip:'Gry to najlepszy sposób na łączenie przyjemności z rozwojem. ♟️'},
]},

'read-widely':{experts:['Psycholog','Trener Rozwoju Osobistego','Instruktor Mindfulness'],conversation:[
{speaker:'Psycholog',text:'Czytanie to najpotężniejszy trening umysłu. Poszerza słownictwo, empatię, wiedzę. Ale trzeba czytać różnorodnie.'},
{speaker:'Trener Rozwoju Osobistego',text:'20 stron dziennie — to wszystko. Po roku to 7300 stron, czyli około 25 książek. Mało, a tak dużo.'},
{speaker:'Instruktor Mindfulness',text:'Czytaj uważnie — nie dla zaliczenia, tylko dla zrozumienia. Jedna strona z refleksją jest lepsza niż rozdział z pośpiechu.'},
],days:[
{day:1,title:'Wybierz pierwszą książkę',task:'Wybierz książkę z gatunku, którego zwykle nie czytasz. Reportaż, biografia, science fiction.',tip:'Nowy gatunek to nowa perspektywa. Daj się zaskoczyć.'},
{day:2,title:'20 stron przed snem',task:'Przeczytaj 20 stron przed snem. Bez telefonu obok. Tylko ty i książka.',tip:'Wieczorna lektura wycisza umysł lepiej niż ekran.'},
{day:3,title:'Notatki na marginesie',task:'Czytaj z ołówkiem. Podkreśl jedno zdanie, które cię poruszyło. Zapisz dlaczego.',tip:'Aktywne czytanie to różnica między przeczytaniem a zrozumieniem.'},
{day:4,title:'Artykuł z innej dziedziny',task:'Przeczytaj długi artykuł na temat, o którym nic nie wiesz. Astronomia, ekonomia, filozofia.',tip:'Szeroka wiedza buduje szeroki umysł.'},
{day:5,title:'Podziel się cytatem',task:'Znajdź jeden cytat z lektury i podziel się nim z kimś. Wyjaśnij, dlaczego cię poruszył.',tip:'Dzielenie się wiedzą pogłębia zrozumienie.'},
{day:6,title:'Czytanie na głos',task:'Przeczytaj stronę na głos. Poczuj rytm zdań, dźwięk słów. To inne doświadczenie.',tip:'Czytanie na głos angażuje więcej obszarów mózgu.'},
{day:7,title:'Podsumowanie i nowy cel',task:'Zapisz 3 najważniejsze rzeczy, które wyniosłeś/aś z lektury. Wybierz następną książkę.',tip:'Tydzień czytania to tydzień wzrostu. Za rok będziesz mądrzejszy/a o 25 książek. 📚'},
]},

'attend-community-events':{experts:['Psycholog','Coach Zdrowia','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Wydarzenia społecznościowe to naturalne źródło kontaktu z ludźmi. Festiwale, targi, pikniki — są wszędzie.'},
{speaker:'Coach Zdrowia',text:'Bycie częścią społeczności to ochrona przed izolacją. A izolacja jest groźniejsza niż palenie papierosów.'},
{speaker:'Trener Rozwoju Osobistego',text:'Nie musisz być duszą towarzystwa. Wystarczy przyjść, uśmiechnąć się, porozmawiać z jedną osobą.'},
],days:[
{day:1,title:'Kalendarz wydarzeń',task:'Sprawdź lokalny kalendarz wydarzeń: strona miasta, Facebook Events, plakaty w bibliotece. Zapisz 3.',tip:'Twoje miasto tętni życiem — wystarczy spojrzeć.'},
{day:2,title:'Wybierz i zaplanuj',task:'Wybierz jedno wydarzenie na ten tydzień. Wpisz w kalendarz. Potwierdź obecność.',tip:'Decyzja podjęta — to już połowa sukcesu.'},
{day:3,title:'Przygotuj się',task:'Dowiedz się więcej: jaki jest program, kto organizuje, czy trzeba się zapisać.',tip:'Przygotowanie usuwa niepewność. Wiesz, na co idziesz.'},
{day:4,title:'Weź udział!',task:'Idź na wydarzenie. Zostań minimum 30 minut. Porozmawiaj z minimum jedną nową osobą.',tip:'30 minut to bezpieczny cel. Jeśli ci się spodoba — zostaniesz dłużej.'},
{day:5,title:'Refleksja',task:'Zapisz co ci się podobało, co dało ci energię. Czego się dowiedziałeś/aś?',tip:'Refleksja zamienia doświadczenie w naukę.'},
{day:6,title:'Zaangażuj się bardziej',task:'Następne wydarzenie: zapytaj, czy możesz pomóc przy organizacji. Choćby na godzinę.',tip:'Współtworzenie daje więcej satysfakcji niż bierne uczestnictwo.'},
{day:7,title:'Zaplanuj miesiąc',task:'Wybierz 2-3 wydarzenia na następny miesiąc. Wpisz do kalendarza. Stwórz nawyk.',tip:'Regularny kontakt ze społecznością to przepis na długie i szczęśliwe życie. 🎪'},
]},

'take-skill-workshops':{experts:['Psycholog','Trener Rozwoju Osobistego','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Warsztaty łączą naukę z działaniem. Uczysz się przez praktykę, od razu widzisz efekty. To bardzo motywujące.'},
{speaker:'Trener Rozwoju Osobistego',text:'Nie ważne co — gotowanie, fotografia, ceramika, kodowanie. Ważne, żeby robić coś nowego.'},
{speaker:'Coach Zdrowia',text:'Warsztaty to też okazja do poznania ludzi o podobnych zainteresowaniach. Podwójna korzyść.'},
],days:[
{day:1,title:'Burza mózgów — czego chcesz się nauczyć?',task:'Zapisz 5 umiejętności, które zawsze chciałeś/aś zdobyć. Od ceramiki po programowanie.',tip:'Lista marzeń to pierwszy krok do ich realizacji.'},
{day:2,title:'Szukaj warsztatów',task:'Wyszukaj warsztaty: lokalne domy kultury, online (Udemy, Skillshare), uniwersytety otwarte.',tip:'Żyjemy w złotej erze nauki. Wszystko jest dostępne.'},
{day:3,title:'Wybierz jeden warsztat',task:'Wybierz jeden warsztat — stacjonarny lub online. Zapisz się. Opłać, jeśli trzeba.',tip:'Inwestycja w umiejętności to najlepsza inwestycja.'},
{day:4,title:'Przygotuj się',task:'Sprawdź, czego potrzebujesz na warsztat: materiały, narzędzia, dostęp do komputera. Przygotuj.',tip:'Dobre przygotowanie to połowa sukcesu warsztatu.'},
{day:5,title:'Weź udział — dzień 1',task:'Pierwsza sesja warsztatu. Bądź punktualny/a. Zadawaj pytania. Nawiąż kontakt z minimum 2 osobami.',tip:'Wszyscy są na tym samym poziomie. Nikt nie oczekuje, że będziesz ekspertem.'},
{day:6,title:'Praktykuj po warsztacie',task:'Poświęć 20 minut na przećwiczenie tego, czego się dziś nauczyłeś/aś.',tip:'Praktyka poza warsztatem jest tym, co odróżnia uczestników od mistrzów.'},
{day:7,title:'Oceń i planuj dalej',task:'Czy podobało ci się? Zapisz się na kolejny poziom lub wybierz inny warsztat.',tip:'Każdy nowy skill to nowa wersja ciebie. Stajesz się coraz lepszy/a. 🛠️'},
]},

'travel-and-explore':{experts:['Psycholog','Trener Rozwoju Osobistego','Instruktor Mindfulness'],conversation:[
{speaker:'Psycholog',text:'Podróże poszerzają perspektywę i budują odporność psychiczną. I nie muszą być dalekie — wystarczy nowa dzielnica.'},
{speaker:'Instruktor Mindfulness',text:'Podróżowanie z uważnością to podwójna korzyść. Nie tylko miejsce, ale sposób patrzenia.'},
{speaker:'Trener Rozwoju Osobistego',text:'Każdego dnia odkrywamy nowe miejsce. Od parku, w którym nigdy nie byłeś, po miasto o którym marzyłeś.'},
],days:[
{day:1,title:'Mikro-przygoda w okolicy',task:'Odwiedź miejsce w odległości 15 minut spacerem, w którym nigdy nie byłeś/aś. Park, ulica, kawiarnia.',tip:'Przygoda nie potrzebuje biletu lotniczego. Zaczyna się za rogiem.'},
{day:2,title:'Nowa dzielnica',task:'Pojedź autobusem/tramwajem do dzielnicy, której nie znasz. Spaceruj bez planu przez godzinę.',tip:'Zgubienie się jest początkiem odkrywania.'},
{day:3,title:'Jednodniowa wycieczka — plan',task:'Zaplanuj jednodniową wycieczkę: miejsce w promieniu 50-100 km. Sprawdź dojazd i atrakcje.',tip:'Planowanie to już część podróży. Ciesz się tym.'},
{day:4,title:'Wirtualna podróż',task:'Wybierz kraj, który chcesz odwiedzić. Obejrzyj film dokumentalny, poczytaj o kulturze, znajdź muzykę.',tip:'Nie możesz polecieć? Odwiedź kraj oczami i uszami.'},
{day:5,title:'Muzeum lub galeria',task:'Odwiedź muzeum, w którym nie byłeś/aś od lat. Albo galerię sztuki. Pochłoń atmosferę.',tip:'Sztuka i historia to podróże w czasie.'},
{day:6,title:'Posiłek z innej kultury',task:'Zjedz w restauracji serwującej kuchnię, której nie znasz. Etiopska, wietnamska, peruwiańska.',tip:'Podróże kulinarne są najsmaczniejsze.'},
{day:7,title:'Stwórz listę marzeń podróżniczych',task:'Zapisz 5 miejsc, które chcesz odwiedzić. Dużych i małych. To twoja mapa na przyszłość.',tip:'Marzenia podróżnicze nadają życiu kierunek. Gdzie pojedziesz najpierw? ✈️'},
]},

'discuss-new-ideas':{experts:['Psycholog','Coach Zdrowia','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Dyskusje intelektualne to trening dla mózgu i budulec relacji. Ale trzeba to robić regularnie.'},
{speaker:'Coach Zdrowia',text:'Nie chodzi o kłótnie! Chodzi o wymianę perspektyw. Słuchanie i bycie wysłuchanym.'},
{speaker:'Trener Rozwoju Osobistego',text:'Możemy stworzyć klub dyskusyjny przy kawie. Raz w tygodniu, jeden temat, otwarte umysły.'},
],days:[
{day:1,title:'Znajdź ciekawy temat',task:'Wybierz jeden temat, który cię nurtuje: sztuczna inteligencja, zmiany klimatu, filozofia szczęścia.',tip:'Ciekawość to początek każdej wartościowej rozmowy.'},
{day:2,title:'Poznaj temat',task:'Obejrzyj krótki film lub przeczytaj artykuł na wybrany temat. Zapisz 3 kluczowe tezy.',tip:'Przygotowanie daje pewność siebie w dyskusji.'},
{day:3,title:'Zaproś kogoś do rozmowy',task:'Zaproś przyjaciela lub członka rodziny na kawę i rozmowę. Temat: ten, który wybrałeś/aś.',tip:'Ludzie kochają być pytani o zdanie. Dajesz im prezent.'},
{day:4,title:'Zadawaj pytania',task:'W rozmowie zadaj minimum 3 pytania otwarte: co myślisz o...? dlaczego uważasz, że...?',tip:'Dobre pytania są ważniejsze niż dobre odpowiedzi.'},
{day:5,title:'Zmiana perspektywy',task:'Spróbuj bronić stanowiska przeciwnego do twojego. Tylko jako ćwiczenie umysłowe.',tip:'Zrozumienie drugiej strony to oznaka siły, nie słabości.'},
{day:6,title:'Grupa dyskusyjna',task:'Zaproś 2-3 osoby na wspólną dyskusję. Ustal temat. Niech każdy mówi po 3 minuty.',tip:'Grupa wnosi więcej perspektyw niż jedna osoba.'},
{day:7,title:'Refleksja — czego się nauczyłeś?',task:'Zapisz, co nowego usłyszałeś/aś w tym tygodniu. Która opinia cię zaskoczyła?',tip:'Najmądrzejsi to ci, którzy zmieniają zdanie pod wpływem faktów. 🗣️'},
]},

'creative-activities-engage':{experts:['Psycholog','Instruktor Mindfulness','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Kreatywność to nie talent — to umiejętność. Każdy może być kreatywny, jeśli regularnie ćwiczy twórcze myślenie.'},
{speaker:'Instruktor Mindfulness',text:'Kreatywność kwitnie w ciszy. Gdy umysł nie jest przebodźcowany, pojawiają się najlepsze pomysły.'},
{speaker:'Trener Rozwoju Osobistego',text:'Codziennie jedna twórcza aktywność. Bez oceniania, bez celu — tylko dla przyjemności tworzenia.'},
],days:[
{day:1,title:'Swobodne pisanie',task:'Napisz przez 10 minut bez zatrzymywania. Cokolwiek przyjdzie do głowy. Nie edytuj. Nie czytaj.',tip:'Najlepsze pomysły rodzą się, gdy przestajesz je kontrolować.'},
{day:2,title:'Kolaż marzeń',task:'Weź stare gazety, nożyczki, klej. Stwórz kolaż — co chcesz osiągnąć, co czujesz, o czym marzysz.',tip:'Obrazy mówią to, czego słowa nie potrafią wyrazić.'},
{day:3,title:'Mandala lub kolorowanka',task:'Wydrukuj mandalę lub kup kolorowankę dla dorosłych. Koloruj przez 20 minut w ciszy.',tip:'Kolorowanie uspokaja ciało migdałowate — centrum stresu w mózgu.'},
{day:4,title:'Improwizacja muzyczna',task:'Użyj czegokolwiek: garnków, łyżek, własnego głosu. Stwórz 2-minutowy utwór.',tip:'Nie musisz znać nut. Rytm masz we krwi od pierwszego bicia serca.'},
{day:5,title:'Fotografia tematyczna',task:'Wybierz temat: "radość", "spokój", "energia". Zrób 5 zdjęć, które go wyrażają.',tip:'Twoje spojrzenie jest unikatowe. Nikt nie widzi świata tak jak ty.'},
{day:6,title:'Rękodzieło z recyklingu',task:'Ze starych przedmiotów stwórz coś nowego. Butelka jako wazon, puszka jako organizer.',tip:'Kreatywność to umiejętność widzenia potencjału tam, gdzie inni widzą śmieć.'},
{day:7,title:'Wystawa tygodnia',task:'Zbierz wszystko, co stworzyłeś/aś w tym tygodniu. Zrób mini-wystawę. Doceń siebie.',tip:'Stworzyłeś/aś więcej niż myślisz. Kreatywność to twój superpower. 🎨'},
]},

'daily-walking-routine':{experts:['Psycholog','Trener Personalny','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Codzienny spacer to najprostsza i najbezpieczniejsza forma ruchu. Ale rutyna może nudzić. Jak zrobić, żeby spacer stał się przyjemnością, a nie obowiązkiem?'},
{speaker:'Trener Personalny',text:'Klucz to różnorodność tras i celów. Każdego dnia inna trasa, inne tempo, inny cel — liczba kroków, zdjęcie, spotkanie z kimś.'},
{speaker:'Coach Zdrowia',text:'Spacer to też okazja do mini-medytacji w ruchu. Obserwuj otoczenie, oddychaj, bądź obecny/a. 30 minut dla ciała i umysłu.'},
],days:[
{day:1,title:'Wyznacz trasę — 15 minut',task:'Wybierz trasę w okolicy: do parku, wokół osiedla, nad rzekę. Przejdź się 15 minut spokojnym tempem.',tip:'Pierwszy krok jest zawsze najtrudniejszy. Ale już jesteś na trasie.'},
{day:2,title:'30 minut — wydłuż dystans',task:'Wydłuż spacer do 30 minut. Możesz iść tą samą trasą lub odkryć nową uliczkę.',tip:'30 minut dziennie to 3,5 godziny tygodniowo dla twojego serca.'},
{day:3,title:'Spacer z celem — zrób zdjęcie',task:'Znajdź coś pięknego podczas spaceru i zrób zdjęcie: kwiat, zachód słońca, architekturę.',tip:'Cel zmienia obowiązek w przygodę. Co dziś odkryjesz?'},
{day:4,title:'Spacer z przyjacielem',task:'Zaproś kogoś na spacer. Rozmowa sprawi, że nie zauważysz, kiedy minie 30 minut.',tip:'Relacje + ruch = podwójna dawka zdrowia.'},
{day:5,title:'Spacer z kijkami — nordic walking',task:'Jeśli masz kijki, zabierz je na spacer. Jeśli nie — spróbuj energicznego marszu z pracą ramion.',tip:'Kijki angażują 90% mięśni. Spacer staje się treningiem całego ciała.'},
{day:6,title:'Spacer uważnościowy',task:'Idź w ciszy, bez muzyki. Skup się na oddechu i krokach. Poczuj wiatr, słońce, zapachy.',tip:'Uważny spacer to medytacja w ruchu. Twój umysł ci podziękuje.'},
{day:7,title:'Podsumowanie — twój tydzień spacerów',task:'Zapisz ile łącznie przeszedłeś/aś minut. Wyznacz cel na kolejny tydzień: może 5 minut więcej dziennie?',tip:'3,5 godziny ruchu w tym tygodniu! Twoje ciało jest silniejsze. 🚶'},
]},

'stretching-program':{experts:['Fizjoterapeuta','Trener Personalny','Instruktor Mindfulness'],conversation:[
{speaker:'Fizjoterapeuta',text:'Rozciąganie to podstawa mobilności po 50-tce. 10 minut dziennie wystarczy, by zachować elastyczność stawów i mięśni.'},
{speaker:'Trener Personalny',text:'Zrobimy plan progresywny. Każdego dnia nowa grupa mięśni. Bez bólu — rozciągamy do uczucia lekkiego napięcia, nigdy do bólu.'},
{speaker:'Instruktor Mindfulness',text:'Połączmy rozciąganie z oddechem. Każdy ruch na wydechu. To podwaja efektywność i relaksuje.'},
],days:[
{day:1,title:'Kark i szyja — 10 min',task:'Delikatne skłony głowy: przód-tył, ucho do ramienia, półkola. Po 30 sekund każda pozycja. Oddychaj spokojnie.',tip:'Napięcie w karku to napięcie w myślach. Rozluźnij jedno, rozluźnisz drugie.'},
{day:2,title:'Ramiona i barki — 10 min',task:'Krążenia ramion, przyciąganie łokcia do przeciwległego barku, ręce za plecami. Powoli i delikatnie.',tip:'Barki dźwigają ciężar świata. Daj im dziś odpocząć.'},
{day:3,title:'Plecy — skręt i skłon',task:'Siedząc na krześle: skręt tułowia w lewo i prawo, skłon do przodu. Przytrzymaj 20-30 sekund.',tip:'Elastyczne plecy to młody kręgosłup. Niezależnie od wieku.'},
{day:4,title:'Biodra i pośladki — 10 min',task:'Leżąc: przyciągnij kolano do klatki piersiowej. Siedząc: kostka na kolanie. Po 30 sekund na nogę.',tip:'Biodra to centrum ruchu. Gdy są rozluźnione, całe ciało pracuje lepiej.'},
{day:5,title:'Uda i łydki — 10 min',task:'Stojąc: przytrzymaj się krzesła. Przyciągnij piętę do pośladka. Wypad w przód. Delikatnie.',tip:'Silne nogi to niezależność. Dbaj o nie z wdzięcznością.'},
{day:6,title:'Całe ciało — flow',task:'Połącz wszystkie ćwiczenia w 10-minutowy flow. Płynnie przechodź od góry do dołu.',tip:'Twoje ciało jest jak instrument — nastrojone, gra piękniej.'},
{day:7,title:'Stwórz swoją rutynę',task:'Wybierz ulubione ćwiczenia i ułóż własną 10-minutową sekwencję. Nagraj ją w telefonie do codziennego użycia.',tip:'10 minut dziennie to 60 godzin rocznie dla twojej elastyczności. 🧘'},
]},

'balance-exercises':{experts:['Fizjoterapeuta','Trener Personalny','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Równowaga to nie tylko ciało — to też pewność siebie. Lęk przed upadkiem często sam powoduje upadek. Musimy pracować nad obydwoma.'},
{speaker:'Fizjoterapeuta',text:'Ćwiczenia równoważne są proste i bezpieczne. Zaczynamy od stania na jednej nodze przy ścianie, stopniowo zwiększamy trudność.'},
{speaker:'Trener Personalny',text:'3 razy w tygodniu po 10 minut. To wystarczy, by znacząco zmniejszyć ryzyko upadku.'},
],days:[
{day:1,title:'Stanie na dwóch nogach — oczy zamknięte',task:'Stań przy ścianie. Zamknij oczy na 30 sekund. Poczuj, jak ciało balansuje. Powtórz 3 razy.',tip:'Zamknięte oczy uczą ciało polegać na zmyśle równowagi, nie wzroku.'},
{day:2,title:'Stanie na jednej nodze — przy ścianie',task:'Przytrzymaj się ściany lub krzesła. Unieś jedną stopę. Wytrzymaj 15 sekund. 3 razy na nogę.',tip:'15 sekund dziś, 30 za tydzień. Postęp przychodzi z praktyką.'},
{day:3,title:'Chodzenie po linii — pięta-palce',task:'Idź wzdłuż linii na podłodze: pięta jednej stopy tuż przed palcami drugiej. 10 kroków w przód i w tył.',tip:'To ćwiczenie policjantów i... tancerzy. Elegancja i równowaga.'},
{day:4,title:'Wstawanie z krzesła bez rąk',task:'Usiądź na krześle. Wstań nie używając rąk. Powtórz 5 razy. Rób powoli.',tip:'Wstawanie bez rąk to codzienny test siły i równowagi.'},
{day:5,title:'Stanie na poduszce',task:'Stań na miękkiej poduszce (obok ściany). Utrzymaj równowagę 30 sekund na dwóch nogach. Powtórz 3 razy.',tip:'Niestabilne podłoże zmusza mięśnie głębokie do pracy.'},
{day:6,title:'Jedna noga na poduszce',task:'Stań na poduszce na jednej nodze. Przy ścianie. 10 sekund. 3 razy na nogę.',tip:'To już poziom mistrzowski! Czujesz, jak ciało walczy o równowagę?'},
{day:7,title:'Test równowagi — podsumowanie',task:'Stań na jednej nodze bez podparcia. Zmierz czas. Zapisz wynik. Powtórz test za miesiąc.',tip:'Postaw sobie cel: 30 sekund na jednej nodze bez podparcia. Dasz radę! ⚖️'},
]},

'strength-training-senior':{experts:['Trener Personalny','Fizjoterapeuta','Coach Zdrowia'],conversation:[
{speaker:'Fizjoterapeuta',text:'Trening siłowy po 50-tce to nie kulturystyka. To inwestycja w niezależność: wstawanie z krzesła, noszenie zakupów, wchodzenie po schodach.'},
{speaker:'Trener Personalny',text:'Zaczynamy od masy własnego ciała. Żadnych ciężarów. Przysiady przy krześle, pompki przy ścianie, mostki biodrowe.'},
{speaker:'Coach Zdrowia',text:'Mięśnie to organ długowieczności. Im więcej ich masz, tym dłużej żyjesz. To nie opinia — to nauka.'},
],days:[
{day:1,title:'Przysiady przy krześle',task:'Stań przed krzesłem. Powoli usiądź i wstań bez pomocy rąk. 3 serie po 5 powtórzeń.',tip:'Krzesło to twoja asekuracja. Zawsze jest za tobą.'},
{day:2,title:'Pompki przy ścianie',task:'Stań na odległość ramion od ściany. Oprzyj dłonie, ugnij łokcie. 3 serie po 8 powtórzeń.',tip:'Pompki przy ścianie są bezpieczne i skuteczne. Zero obciążenia kręgosłupa.'},
{day:3,title:'Mostek biodrowy',task:'Połóż się na plecach, ugnij kolana. Unieś biodra, napnij pośladki. Wytrzymaj 3 sekundy. 3x8 powtórzeń.',tip:'Silne pośladki to zdrowy kręgosłup. Leżysz i ćwiczysz — idealnie.'},
{day:4,title:'Wiosłowanie z taśmą',task:'Jeśli masz taśmę oporową: usiądź, zahacz taśmę o stopy, przyciągaj do brzucha. 3x10. Jeśli nie — użyj butelek z wodą.',tip:'Taśma to najbezpieczniejszy przyrząd do treningu siłowego.'},
{day:5,title:'Wspinanie na palce',task:'Stań przy ścianie. Wspinaj się na palce, wytrzymaj 2 sekundy, opuść. 3 serie po 10.',tip:'Silne łydki to lepsze krążenie i stabilność.'},
{day:6,title:'Superman — wzmacnianie pleców',task:'Leżąc na brzuchu, unieś jednocześnie przeciwną rękę i nogę. Wytrzymaj 2 sekundy. 3x6 na stronę.',tip:'Latanie bez skrzydeł. Twoje plecy ci podziękują.'},
{day:7,title:'Trening obwodowy — połącz wszystko',task:'Zrób wszystkie ćwiczenia po kolei: 30 sekund pracy, 30 sekund przerwy. Jeden obwód. Poczuj moc.',tip:'Silniejsze mięśnie to więcej lat w samodzielności. Zainwestowałeś/aś mądrze. 💪'},
]},

'swimming-aquatics':{experts:['Trener Personalny','Fizjoterapeuta','Psycholog'],conversation:[
{speaker:'Fizjoterapeuta',text:'Woda to idealne środowisko dla seniorów. Odbciąża stawy o 90%, a opór wody naturalnie wzmacnia mięśnie.'},
{speaker:'Trener Personalny',text:'Nie musisz być pływakiem! Aqua aerobik, spacery w wodzie, ćwiczenia przy brzegu — wszystko się liczy.'},
{speaker:'Psycholog',text:'Woda uspokaja. Już samo przebywanie w basenie obniża poziom kortyzolu. To terapia dla ciała i umysłu.'},
],days:[
{day:1,title:'Znajdź basen — rekonesans',task:'Wyszukaj basen z ciepłą wodą (28-30°C) i zajęciami dla seniorów. Sprawdź godziny i ceny.',tip:'Woda to twoje nowe centrum fitness. Zero obciążenia, maksimum korzyści.'},
{day:2,title:'Pierwsza wizyta — oswajanie',task:'Wejdź do wody. Spaceruj wzdłuż brzegu 15 minut. Poczuj opór wody. Nie spiesz się.',tip:'Już samo stanie w wodzie to ćwiczenie. Opór wody pracuje za ciebie.'},
{day:3,title:'Spacer w wodzie — 20 minut',task:'Maszeruj w wodzie sięgającej do pasa. Wysoko unosząc kolana. 20 minut.',tip:'Spacer w wodzie spala 2x więcej kalorii niż na lądzie.'},
{day:4,title:'Ćwiczenia przy brzegu',task:'Trzymając się brzegu: wymachy nogami w przód, w bok, w tył. 10 powtórzeń na każdą nogę.',tip:'Brzeg basenu to twoja siłownia. Bezpieczna i skuteczna.'},
{day:5,title:'Pływanie na plecach',task:'Jeśli umiesz — pływaj na plecach 10 minut. To najbezpieczniejszy styl. Jeśli nie — ćwicz unoszenie się na wodzie.',tip:'Leżenie na wodzie to wolność. Zaufaj wodzie — ona cię uniesie.'},
{day:6,title:'Aqua aerobik — spróbuj zajęć',task:'Weź udział w zajęciach aqua aerobiku dla seniorów. Jeśli nie ma — ćwicz samodzielnie: pajacyki w wodzie, wymachy.',tip:'Grupa daje energię. Ćwiczenia w wodzie z innymi to podwójna przyjemność.'},
{day:7,title:'Zaplanuj regularne wizyty',task:'Ustal grafik: 1-2 razy w tygodniu basen. Zapisz się na karnet. Zaplanuj z kim możesz chodzić.',tip:'Basen to twój nowy nawyk. Twoje stawy są ci wdzięczne. 🏊'},
]},

'tai-chi-practice':{experts:['Instruktor Tai Chi','Psycholog','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Tai Chi to medytacja w ruchu. Łączy ciało, oddech i umysł. Badania pokazują, że redukuje ryzyko upadków o 50%.'},
{speaker:'Instruktor Tai Chi',text:'Zaczynamy od najprostszej formy — 5 ruchów. Nie spiesz się. Tai Chi to nie wyścig, to podróż.'},
{speaker:'Coach Zdrowia',text:'Chińczycy praktykują Tai Chi od setek lat. Nazywają je eliksirem długowieczności.'},
],days:[
{day:1,title:'Obejrzyj i poczuj',task:'Obejrzyj 5-minutowy film z podstawami Tai Chi na YouTube. Stań i spróbuj naśladować powolne ruchy.',tip:'Nie musisz być perfekcyjny/a. Tai Chi to praktyka, nie występ.'},
{day:2,title:'"Trzymanie nieba" — pierwszy ruch',task:'Stojąc ze stopami na szerokość bioder: powoli unoś ręce przed sobą, jakbyś trzymał/a piłkę. Wdech w górę, wydech w dół. 10 razy.',tip:'Ten jeden ruch rozciąga kręgosłup i uspokaja umysł.'},
{day:3,title:'"Rozsuwanie zasłon"',task:'Ręce na wysokości klatki piersiowej, dłonie do siebie. Powoli rozsuwaj je na boki. Wróć. 10 powtórzeń.',tip:'Wyobraź sobie, że rozsuwasz zasłony na nowy, spokojniejszy dzień.'},
{day:4,title:'Przenoszenie ciężaru',task:'Stań w lekkim rozkroku. Powoli przenoś ciężar na prawą nogę, potem na lewą. Ręce unoszą się naturalnie. 5 minut.',tip:'Płynność to esencja Tai Chi. Jak woda, nie jak kamień.'},
{day:5,title:'"Fala" — kręgosłup w ruchu',task:'Stań prosto. Wyobraź sobie falę płynącą od stóp do głowy. Pozwól ciału płynąć — kolana, biodra, kręgosłup, ramiona.',tip:'Twoje ciało jest płynne. Przestań je blokować.'},
{day:6,title:'Sekwencja 3 ruchów — flow',task:'Połącz 3 poznane ruchy w płynną sekwencję. Powtarzaj przez 10 minut. Nie myśl — płyń.',tip:'Gdy ruchy stają się automatyczne, umysł odpoczywa.'},
{day:7,title:'Codzienna praktyka — twój rytuał',task:'Stwórz 5-minutową poranną rutynę Tai Chi. Ustal godzinę. Niech to będzie pierwsza rzecz po przebudzeniu.',tip:'Tai Chi o poranku to jak naładowanie baterii na cały dzień. ☯️'},
]},

'chair-exercises':{experts:['Fizjoterapeuta','Trener Personalny','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Ćwiczenia na krześle są doskonałe dla osób z ograniczoną mobilnością. Ale ważne, żeby nie czuły się przez to gorsze. To nie gorszy trening — to mądry trening.'},
{speaker:'Fizjoterapeuta',text:'Z krzesła można zrobić naprawdę solidny trening: wzmacnianie, rozciąganie, mobilizacja. Wszystko bezpiecznie.'},
{speaker:'Trener Personalny',text:'Codziennie 15 minut na krześle. Możesz ćwiczyć nawet podczas oglądania telewizji.'},
],days:[
{day:1,title:'Marsz na siedząco',task:'Siedząc na krześle: unoś na przemian kolana, jakbyś maszerował/a. 3 minuty w spokojnym tempie.',tip:'Nawet siedząc możesz rozruszać krążenie. Zero wymówek.'},
{day:2,title:'Unoszenie nóg — wzmacnianie ud',task:'Siedząc: wyprostuj jedną nogę i unieś na wysokość kolana drugiej. Wytrzymaj 5 sekund. 10x na nogę.',tip:'Proste ćwiczenie, wielki efekt. Twoje uda będą silniejsze.'},
{day:3,title:'Skręty tułowia',task:'Siedząc prosto: skręć tułów w lewo, wytrzymaj 10 sekund. W prawo. Powtórz 5 razy na stronę.',tip:'Skręty masują narządy wewnętrzne. Zdrowie od środka.'},
{day:4,title:'Wiosłowanie — plecy i ramiona',task:'Siedząc: ściągnij łopatki, jakbyś chciał/a przyciągnąć coś do klatki piersiowej. 3x10 powtórzeń.',tip:'Silne plecy to zdrowa postawa. Ćwiczysz nie wstając z krzesła.'},
{day:5,title:'Krążenia ramion i nadgarstków',task:'Siedząc: krążenia ramion w przód i w tył, potem nadgarstki. Po 30 sekund każde.',tip:'Małe stawy też potrzebują ruchu. Nie zapominaj o nich.'},
{day:6,title:'"Rower" na siedząco',task:'Siedząc: unoś kolana i wykonuj ruch jak na rowerze. 2 minuty. Poczuj pracę brzucha.',tip:'Brzuch pracuje, nogi pracują, a ty siedzisz wygodnie.'},
{day:7,title:'Całościowy trening na krześle',task:'Zrób wszystkie 6 ćwiczeń po kolei. 2 minuty każde. To twój 12-minutowy trening.',tip:'12 minut z krzesła = lepsze krążenie, silniejsze mięśnie, lepszy nastrój. 🪑'},
]},

'joint-mobility':{experts:['Fizjoterapeuta','Trener Personalny','Instruktor Mindfulness'],conversation:[
{speaker:'Fizjoterapeuta',text:'Stawy lubią ruch. Im więcej się ruszają, tym lepiej są nawilżone i odżywione. Codzienna mobilizacja to klucz.'},
{speaker:'Instruktor Mindfulness',text:'Proponuję poranną rutynę 7-minutową. Każdy staw dostaje minutę uwagi. Od stóp do głowy.'},
{speaker:'Trener Personalny',text:'Pełen zakres ruchu, powoli, bez szarpania. Jakość, nie ilość.'},
],days:[
{day:1,title:'Stopy i kostki',task:'Siedząc: krążenia stóp 10x w każdą stronę. Zginanie i prostowanie palców. 2 minuty na każdą stopę.',tip:'Stopy to fundament. Gdy są sprawne, całe ciało pracuje lepiej.'},
{day:2,title:'Kolana — zginanie i prostowanie',task:'Siedząc na krześle: powoli prostuj i zginaj kolano. 15 razy na nogę. Płynnie, jak tłok.',tip:'Kolana kochają ruch bez obciążenia.'},
{day:3,title:'Biodra — krążenia',task:'Stojąc przy krześle: unoś kolano i zataczaj małe kółka. 10 w każdą stronę na nogę.',tip:'Biodra to centrum ruchu. Rozruszane biodra to swobodny chód.'},
{day:4,title:'Nadgarstki i łokcie',task:'Krążenia nadgarstków 10x w każdą stronę. Zginanie i prostowanie łokci 10x.',tip:'Drobne stawy też potrzebują miłości. Zasługują na minutę uwagi.'},
{day:5,title:'Ramiona — pełen zakres',task:'Krążenia ramion: małe kółka, duże kółka. Po 10 w przód i w tył. Powoli i świadomie.',tip:'Ramiona dźwigają stres. Rozruszaj je — poczujesz ulgę.'},
{day:6,title:'Kręgosłup — koci grzbiet',task:'Siedząc: zrób "koci grzbiet" — zaokrąglij plecy, potem delikatnie wygnij. 10 powtórzeń.',tip:'Kręgosłup to łańcuch stawów. Każdy potrzebuje ruchu.'},
{day:7,title:'Poranna mobilizacja — full body',task:'Połącz wszystkie ćwiczenia w 7-minutową poranną rutynę. Od stóp do głowy, każdy staw po minucie.',tip:'7 minut rano to lepsze samopoczucie przez cały dzień. 🦴'},
]},

'breathing-exercises':{experts:['Instruktor Mindfulness','Psycholog','Fizjoterapeuta'],conversation:[
{speaker:'Instruktor Mindfulness',text:'Oddech to jedyna funkcja autonomiczna, którą możemy świadomie kontrolować. 5 minut dziennie zmienia poziom stresu.'},
{speaker:'Psycholog',text:'Głęboki oddech aktywuje układ przywspółczulny — ten od regeneracji. To jak przycisk reset dla układu nerwowego.'},
{speaker:'Fizjoterapeuta',text:'Prawidłowy oddech to oddech przeponą. Większość ludzi oddycha płytko, klatką piersiową. Nauczmy się oddychać głęboko.'},
],days:[
{day:1,title:'Świadomość oddechu — obserwacja',task:'Usiądź wygodnie. Połóż jedną rękę na brzuchu, drugą na klatce. Obserwuj, która się unosi. 5 minut.',tip:'Większość z nas nie wie, jak oddycha. Dziś się dowiesz.'},
{day:2,title:'Oddech przeponą — nauka',task:'Połóż się na plecach. Książka na brzuchu. Wdech nosem — unieś książkę. Wydech ustami — opuść. 5 minut.',tip:'Przepona to twój naturalny masażysta narządów wewnętrznych.'},
{day:3,title:'Oddech 4-4-4 — rytm',task:'Wdech 4 sekundy, wstrzymaj 4 sekundy, wydech 4 sekundy. Powtarzaj 5 minut.',tip:'Ten rytm uspokaja tętno i wycisza gonitwę myśli.'},
{day:4,title:'Oddech 4-7-8 — głęboki relaks',task:'Wdech nosem 4s, wstrzymaj 7s, wydech ustami 8s (ze świstem). 5 cykli.',tip:'Technika stosowana przez Navy SEALs do zasypiania w 2 minuty.'},
{day:5,title:'Oddech z wizualizacją',task:'Wdech: wyobraź sobie złote światło wypełniające ciało. Wydech: szare napięcie opuszcza ciało. 5 minut.',tip:'Obraz wzmacnia efekt. Twój mózg nie odróżnia wyobrażenia od rzeczywistości.'},
{day:6,title:'Oddech w ruchu',task:'Podczas spaceru: wdech na 4 kroki, wydech na 4 kroki. Zsynchronizuj oddech z ruchem.',tip:'Rytmiczny oddech w ruchu to medytacja dla zabieganych.'},
{day:7,title:'Twoja rutyna oddechowa',task:'Wybierz ulubioną technikę. Ustal porę: rano, w południe, przed snem. 5 minut dziennie.',tip:'5 minut oddechu to najlepsza inwestycja w spokój. Za darmo. 🌬️'},
]},

'posture-correction':{experts:['Fizjoterapeuta','Trener Personalny','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Postawa ciała wpływa na nastrój. Wyprostowana sylwetka to więcej pewności siebie i mniej kortyzolu.'},
{speaker:'Fizjoterapeuta',text:'Problem to nie tylko garbienie. To cały łańcuch: głowa wysunięta w przód, zaokrąglone ramiona, zapadnięta klatka.'},
{speaker:'Trener Personalny',text:'Codzienna korekta postawy to ćwiczenie świadomości ciała. Z czasem staje się nawykiem.'},
],days:[
{day:1,title:'Test postawy przy ścianie',task:'Stań plecami do ściany: pięty, pośladki, łopatki i głowa dotykają ściany. Zauważ, gdzie masz największą lukę.',tip:'To twój punkt wyjścia. Za tydzień sprawdzimy postęp.'},
{day:2,title:'Ćwiczenie "sznurek"',task:'Wyobraź sobie sznurek przyczepiony do czubka głowy, ciągnący w górę. Wydłuż kręgosłup. Utrzymaj 5 minut.',tip:'Sznurek to najprostsza wizualizacja. Używaj jej co godzinę.'},
{day:3,title:'Ściąganie łopatek',task:'Stojąc lub siedząc: ściągnij łopatki do siebie i w dół. Wytrzymaj 5 sekund. 10 powtórzeń co 2 godziny.',tip:'Łopatki to skrzydła postawy. Gdy są na miejscu, reszta ciała podąża.'},
{day:4,title:'Brodawki do przodu — otwórz klatkę',task:'Stań prosto. Obróć ramiona na zewnątrz, jakbyś chciał/a pokazać kciuki na zewnątrz. Klatka się otwiera.',tip:'Otwarta klatka to otwarte serce. Dosłownie i w przenośni.'},
{day:5,title:'Głowa na miejsce — cofnięcie',task:'Cofnij głowę, jakbyś chciał/a zrobić podwójny podbródek. Wytrzymaj 5 sekund. 10x. Nie odchylaj — cofaj.',tip:'Każdy centymetr głowy w przód to +5kg obciążenia dla kręgosłupa.'},
{day:6,title:'Postawa siedząca — ergonomia',task:'Sprawdź swoją pozycję przy biurku: stopy na ziemi, kolana 90°, ekran na wysokości oczu.',tip:'Spędzasz godziny siedząc — niech to będzie zdrowe siedzenie.'},
{day:7,title:'Test postawy — powtórka',task:'Powtórz test przy ścianie. Czy luka się zmniejszyła? Zapisz wynik. Kontynuuj ćwiczenia.',tip:'Postawa to nawyk. Wypracowałeś/aś go przez tydzień. Teraz tylko utrzymać. 🧍'},
]},

'fall-prevention':{experts:['Fizjoterapeuta','Psycholog','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Lęk przed upadkiem paradoksalnie zwiększa ryzyko. Usztywniamy się, skracamy krok, przestajemy patrzeć przed siebie.'},
{speaker:'Fizjoterapeuta',text:'Większość upadków zdarza się w domu. Sprawdźmy i zabezpieczmy otoczenie. Proste zmiany ratują życie.'},
{speaker:'Coach Zdrowia',text:'Profilaktyka upadków to nie tylko ćwiczenia. To też dobre oświetlenie, porządek, odpowiednie obuwie.'},
],days:[
{day:1,title:'Audyt łazienki',task:'Sprawdź łazienkę: mata antypoślizgowa pod prysznicem, uchwyty przy wannie/toalecie. Zrób listę potrzebnych zmian.',tip:'Łazienka to miejsce nr 1 upadków. Zabezpiecz ją dziś.'},
{day:2,title:'Audyt korytarza i schodów',task:'Sprawdź: czy kable nie leżą na podłodze? Czy schody mają poręcze? Czy oświetlenie jest wystarczające?',tip:'Czysta podłoga to bezpieczna podłoga.'},
{day:3,title:'Usuń zagrożenia',task:'Zrealizuj najpilniejsze zmiany z listy: przyklej taśmę antypoślizgową, przesuń kable, dokup matę.',tip:'Każda usunięta przeszkoda to mniejsze ryzyko.'},
{day:4,title:'Obuwie domowe — sprawdź',task:'Noś w domu buty z antypoślizgową podeszwą. Kapcie i skarpety na śliskiej podłodze to proszenie się o upadek.',tip:'Dobre buty w domu to najprostsza polisa ubezpieczeniowa.'},
{day:5,title:'Oświetlenie nocne',task:'Zainstaluj lampkę nocną na drodze z sypialni do łazienki. Automatyczną, na czujnik ruchu.',tip:'Większość upadków zdarza się w nocy. Światło to tarcza.'},
{day:6,title:'Ćwiczenia na wypadek upadku',task:'Naucz się bezpiecznie wstawać: z pleców obróć się na bok, na czworaki, podciągnij przy krześle.',tip:'Umiejętność wstawania po upadku odbiera strach przed upadkiem.'},
{day:7,title:'Plan bezpieczeństwa',task:'Zapisz numer alarmowy w kilku miejscach. Noś telefon przy sobie. Poinformuj kogoś o swojej aktywności.',tip:'Przygotowanie to spokój. Twój dom jest teraz bezpieczniejszy. 🏠'},
]},

'warm-up-routine':{experts:['Trener Personalny','Fizjoterapeuta','Coach Zdrowia'],conversation:[
{speaker:'Fizjoterapeuta',text:'Rozgrzewka to nie opcja — to konieczność. Zimne mięśnie są podatne na kontuzje. 5 minut rozgrzewki przed każdym treningiem.'},
{speaker:'Trener Personalny',text:'Zrobimy uniwersalną rozgrzewkę 5-minutową. Proste ruchy, które przygotują całe ciało.'},
{speaker:'Coach Zdrowia',text:'Rozgrzewka to też sygnał dla mózgu: uwaga, zaczynamy ćwiczyć. Psychicznie też się przygotowujesz.'},
],days:[
{day:1,title:'Marsz w miejscu — 2 minuty',task:'Maszeruj w miejscu 2 minuty. Wysoko unoś kolana, machaj ramionami. Poczuj, jak ciało się rozgrzewa.',tip:'Po 2 minutach twoja temperatura ciała wzrasta. Mięśnie są gotowe.'},
{day:2,title:'Krążenia — wszystkie stawy',task:'Krążenia: kostki, kolana, biodra, ramiona, nadgarstki, szyja. Po 5 w każdą stronę. 3 minuty.',tip:'Nasmarowane stawy to ciche stawy. Ruch to najlepszy smar.'},
{day:3,title:'Wymachy i skłony',task:'Wymachy nóg w przód i w tył (przy krześle). Skłony tułowia w bok. 10 powtórzeń każde.',tip:'Rozgrzane biodra to swobodny chód przez cały dzień.'},
{day:4,title:'Rozgrzewka sercowo-naczyniowa',task:'Szybszy marsz w miejscu + unoszenie kolan. 30 sekund intensywnie, 30 sekund spokojnie. 3 minuty.',tip:'Serce też potrzebuje rozgrzewki. Stopniowo zwiększaj tempo.'},
{day:5,title:'Rozgrzewka z taśmą',task:'Jeśli masz taśmę: lekkie rozciąganie przed treningiem. Jeśli nie — użyj ręcznika. 5 minut.',tip:'Taśma aktywuje mięśnie, których nie czujesz na co dzień.'},
{day:6,title:'Pełna rozgrzewka — 5 minut',task:'Połącz wszystkie elementy: 2 min marszu + 3 min krążeń i wymachów. Stwórz swoją sekwencję.',tip:'5 minut przed treningiem oszczędza tygodni rehabilitacji.'},
{day:7,title:'Rozgrzewka jako rytuał',task:'Ustal kolejność ćwiczeń. Zrób playlistę 5-minutową. Niech rozgrzewka będzie twoim nawykiem.',tip:'Rytuał to coś więcej niż ćwiczenia. To troska o siebie. 🔥'},
]},

'cool-down-stretching':{experts:['Fizjoterapeuta','Instruktor Mindfulness','Trener Personalny'],conversation:[
{speaker:'Fizjoterapeuta',text:'Schładzanie jest równie ważne jak rozgrzewka. Stopniowo wycisza organizm, zapobiega sztywnieniu mięśni.'},
{speaker:'Instruktor Mindfulness',text:'To też moment na refleksję: co dziś zrobiłeś/aś dla swojego ciała? Podziękuj mu.'},
{speaker:'Trener Personalny',text:'5 minut stretchingu po treningu zmniejsza zakwasy i poprawia regenerację.'},
],days:[
{day:1,title:'Zwolnij — marsz wyciszający',task:'Po treningu: 2 minuty wolnego marszu. Stopniowo zwalniaj. Oddychaj głęboko.',tip:'Nie zatrzymuj się nagle. Daj sercu czas na powrót do spoczynku.'},
{day:2,title:'Rozciąganie łydek',task:'Oprzyj dłonie o ścianę. Jedna noga z tyłu, pięta na ziemi. Pochyl się. 30 sekund na nogę.',tip:'Łydki to drugie serce. Rozciągnięte, lepiej pompują krew.'},
{day:3,title:'Rozciąganie ud — przód i tył',task:'Stojąc: przyciągnij piętę do pośladka (przód uda). Siedząc: sięgnij do palców stóp (tył uda). 30s każde.',tip:'Uda pracują najciężej. Zasługują na troskę po treningu.'},
{day:4,title:'Rozciąganie pleców i barków',task:'Spleć dłonie przed sobą, wyciągnij ramiona. Zaokrąglij plecy. Potem spleć za plecami. 30s każde.',tip:'Plecy i barki są napięte od codziennego stresu. Rozluźnij je.'},
{day:5,title:'Rozciąganie bioder',task:'Siedząc: kostka na kolanie drugiej nogi. Delikatnie pochyl się do przodu. 30s na stronę.',tip:'Biodra przechowują emocje. Rozciąganie bioder uwalnia napięcie.'},
{day:6,title:'Oddech i wdzięczność — 2 minuty',task:'Po rozciąganiu: połóż dłonie na sercu. Weź 10 głębokich oddechów. Podziękuj ciału za dzisiejszy wysiłek.',tip:'Wdzięczność wobec ciała wzmacnia motywację do dalszych ćwiczeń.'},
{day:7,title:'Stwórz swoją rutynę schładzania',task:'Wybierz ulubione ćwiczenia. Ustal kolejność: marsz→łydki→uda→plecy→biodra→oddech.',tip:'5 minut po treningu to inwestycja w jutrzejszą energię. 🌅'},
]},

'progress-tracking':{experts:['Trener Personalny','Psycholog','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Monitorowanie postępów to potężny motywator. Gdy widzisz, że idziesz do przodu, chcesz iść dalej.'},
{speaker:'Trener Personalny',text:'Nie chodzi o liczby na wadze. Chodzi o funkcjonalność: ile kroków dziennie, ile minut ćwiczeń, ile przysiadów.'},
{speaker:'Coach Zdrowia',text:'Zapisuj małe zwycięstwa. Każdy dodatkowy przysiad, każda minuta więcej — to sukces.'},
],days:[
{day:1,title:'Wybierz metodę śledzenia',task:'Wybierz: notes papierowy, aplikacja w telefonie, kalendarz na ścianie. Cokolwiek będzie ci najwygodniejsze.',tip:'Najlepsza metoda to ta, której faktycznie użyjesz.'},
{day:2,title:'Zapisz swój punkt wyjścia',task:'Zapisz: ile kroków dziś zrobiłeś/aś, ile minut ćwiczyłeś/aś, ile przysiadów zrobiłeś/aś.',tip:'Punkt wyjścia to nie ocena — to punkt odniesienia.'},
{day:3,title:'Śledź codziennie — małe kroki',task:'Zapisuj każdą aktywność. Nie oceniaj — tylko zapisuj. Liczy się regularność.',tip:'To, co mierzone, rośnie. Twój postęp jest na papierze.'},
{day:4,title:'Ustal mały cel tygodniowy',task:'Na podstawie 3 dni ustal cel: np. 10% więcej kroków lub 5 minut dłuższy spacer.',tip:'Mały cel to pewny sukces. Duże cele rodzą frustrację.'},
{day:5,title:'Zdjęcie "przed"',task:'Zrób zdjęcie — nie dla wyglądu, tylko dla postawy. Jak stoisz? Powtórz za miesiąc.',tip:'Zdjęcie pokazuje to, czego nie widzisz na co dzień.'},
{day:6,title:'Refleksja tygodnia',task:'Przejrzyj zapisy tygodnia. Znajdź jeden pozytywny trend. Zapisz go.',tip:'Jeden trend to jeden powód do dumy. Znajdź go.'},
{day:7,title:'Nagroda i nowy cel',task:'Jeśli osiągnąłeś/aś cel — nagródź się (nie jedzeniem!). Nowa książka, kąpiel, film.',tip:'Nagroda cementuje nawyk. Świętuj każdy sukces. 📊'},
]},

'rest-days-planning':{experts:['Fizjoterapeuta','Psycholog','Trener Personalny'],conversation:[
{speaker:'Psycholog',text:'Odpoczynek to nie lenistwo. To część treningu. Mięśnie rosną i regenerują się podczas odpoczynku, nie podczas ćwiczeń.'},
{speaker:'Fizjoterapeuta',text:'Minimum 1-2 dni odpoczynku w tygodniu. Ale odpoczynek aktywny: spacer, stretching, a nie leżenie na kanapie.'},
{speaker:'Trener Personalny',text:'Zaplanujmy dni odpoczynku tak samo starannie jak dni treningowe.'},
],days:[
{day:1,title:'Oceń swój tydzień',task:'Zapisz ile dni ćwiczyłeś/aś w ostatnim tygodniu. Czy czujesz zmęczenie czy energię?',tip:'Zmęczenie to sygnał, nie słabość. Twoje ciało mówi: potrzebuję przerwy.'},
{day:2,title:'Wyznacz dzień odpoczynku',task:'Wybierz dzień bez intensywnego treningu. Wpisz do kalendarza: "Dzień regeneracji".',tip:'Zaplanowany odpoczynek to odpoczynek bez poczucia winy.'},
{day:3,title:'Aktywny odpoczynek — spacer',task:'W dniu odpoczynku: 20-minutowy spokojny spacer. Bez celu, bez tempa. Tylko przyjemność.',tip:'Aktywny odpoczynek poprawia krążenie bez obciążania mięśni.'},
{day:4,title:'Regeneracja — sen i woda',task:'W dniu odpoczynku: pij więcej wody i idź spać 30 minut wcześniej.',tip:'Sen to najlepszy trener. Podczas snu ciało się naprawia.'},
{day:5,title:'Masaż lub rolowanie',task:'Użyj wałka lub piłeczki do automasażu. Albo po prostu rozciągaj się przed snem.',tip:'Automasaż to darmowy fizjoterapeuta. Twoje mięśnie ci podziękują.'},
{day:6,title:'Dzień dla umysłu',task:'Zamiast ćwiczeń fizycznych: medytacja, czytanie, hobby. Nakarm umysł.',tip:'Regeneracja psychiczna jest równie ważna jak fizyczna.'},
{day:7,title:'Zaplanuj rytm tygodnia',task:'Ustal rytm: 3 dni ćwiczeń, 1 dzień odpoczynku, 3 dni ćwiczeń. Albo 2+1+2+1+1.',tip:'Rytm to klucz. Twoje ciało kocha przewidywalność. 🛌'},
]},

'increase-dairy-intake':{experts:['Dietetyk','Psycholog','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Zwiększenie nabiału to dla wielu wyzwanie — nietolerancja laktozy, przyzwyczajenia smakowe. Potrzebujemy elastycznego planu.'},
{speaker:'Dietetyk',text:'Klucz: różnorodność źródeł. Nie tylko mleko — jogurt, kefir, ser biały, ser żółty. Każdy znajdzie coś dla siebie.'},
{speaker:'Coach Zdrowia',text:'A jeśli nie możesz nabiału? Też są opcje. Mleko bez laktozy, napoje roślinne wzbogacane wapniem. Nie ma wymówek.'},
],days:[
{day:1,title:'Sprawdź, ile wapnia jesz',task:'Zapisz wszystkie produkty mleczne, które dziś zjadłeś/aś. Oszacuj ile to mg wapnia (jogurt 200ml = ~300mg).',tip:'Świadomość to pierwszy krok. Dziś tylko obserwujesz.'},
{day:2,title:'Jogurt naturalny — baza',task:'Zjedz jogurt naturalny na śniadanie lub jako przekąskę. Dodaj owoce, orzechy — będzie pysznie.',tip:'Jeden jogurt to 25% dziennego zapotrzebowania na wapń. Proste.'},
{day:3,title:'Ser twarogowy — uniwersalny',task:'Dodaj ser biały do jednego posiłku: na kanapkę, do sałatki, z rzodkiewką. Albo słodko z miodem.',tip:'Twaróg to polski superfood. Wapń + białko w jednym.'},
{day:4,title:'Mleko w nowej formie',task:'Dodaj mleko tam, gdzie go nie dajesz: do zupy-krem zamiast wody, do owsianki, do koktajlu.',tip:'Mleko to nie tylko napój — to składnik. Wykorzystaj je kreatywnie.'},
{day:5,title:'Kefir — probiotyki + wapń',task:'Wypij szklankę kefiru. Możesz doprawić solą i pieprzem (tak, na słono!) lub dodać owoce.',tip:'Kefir to 2w1: wapń dla kości i probiotyki dla jelit.'},
{day:6,title:'Ser żółty — z umiarem',task:'Zjedz plasterek dobrego sera żółtego. Wybierz ten o wyższej zawartości wapnia: parmezan, gouda.',tip:'Twarde sery mają najwięcej wapnia. Jeden plasterek parmezanu to tyle wapnia co szklanka mleka.'},
{day:7,title:'Nabiałowy plan tygodnia',task:'Zaplanuj produkty mleczne na każdy dzień tygodnia. 2-3 porcje dziennie. Zapisz ulubione kombinacje.',tip:'Tydzień z nabiałem to inwestycja w mocne kości na lata. 🥛'},
]},

'add-leafy-greens':{experts:['Dietetyk','Psycholog','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Zielone warzywa to roślinne źródło wapnia. Ale wiele osób ma opór przed ich smakiem. Jak to przełamać?'},
{speaker:'Dietetyk',text:'Sztuka to ukrycie. Szpinak w koktajlu jest niewyczuwalny. Jarmuż jako chipsy smakuje lepiej niż ziemniaczane.'},
{speaker:'Coach Zdrowia',text:'Każdego dnia jedno zielone warzywo w nowej odsłonie. Po tygodniu będziesz mieć 7 sprawdzonych przepisów.'},
],days:[
{day:1,title:'Szpinak w koktajlu',task:'Zblenduj garść szpinaku z bananem, mlekiem i odrobiną miodu. Nie poczujesz smaku szpinaku — obiecuję.',tip:'Zielony kolor to nie smak. Daj szansę — będziesz zaskoczony/a.'},
{day:2,title:'Jarmuż — chipsy z piekarnika',task:'Porwij jarmuż na kawałki, skrop oliwą, posyp solą. Piecz 10 minut w 180°C. Chrupiące!',tip:'Chipsy z jarmużu to zdrowsze chipsy. I naprawdę smaczne.'},
{day:3,title:'Brokuł na parze z czosnkiem',task:'Ugotuj brokuła na parze (zachowuje najwięcej wapnia). Skrop oliwą i posyp czosnkiem. 5 minut.',tip:'Brokuł na parze to zielone złoto. Nie rozgotowuj — ma być al dente.'},
{day:4,title:'Rukola w sałatce',task:'Zrób sałatkę z rukolą jako bazą. Dodaj pomidory, ser, orzechy. Rukola ma pieprzny smak — energetyzuje.',tip:'Rukola to nie tylko wapń. To też żelazo i witamina K dla kości.'},
{day:5,title:'Kapusta włoska — duszona',task:'Podduś kapustę włoską na oliwie z kminkiem. Podawaj jako dodatek do obiadu.',tip:'Kapusta to niedocenione źródło wapnia. Polska kuchnia to znała.'},
{day:6,title:'Szpinak na ciepło — dodatek',task:'Dodaj garść szpinaku do makaronu, omletu lub zupy. Ciepły szpinak ma łagodniejszy smak.',tip:'Szpinak zmniejsza objętość 10x po podgrzaniu. Garść znika w mgnieniu oka.'},
{day:7,title:'Zielony tydzień — podsumowanie',task:'Które warzywo najbardziej ci smakowało? Wybierz 3 ulubione i włącz je do stałego menu.',tip:'3 zielone warzywa w tygodniu to lepsze kości i więcej energii. 🥬'},
]},

'eat-fortified-foods':{experts:['Dietetyk','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Żywność wzbogacana to sprytny sposób na uzupełnienie wapnia i witaminy D bez zmiany nawyków.'},
{speaker:'Dietetyk',text:'Płatki śniadaniowe, mleko roślinne, soki — wszystko może być fortyfikowane. Trzeba tylko czytać etykiety.'},
{speaker:'Coach Zdrowia',text:'Czytanie etykiet to nawyk na całe życie. Dziś uczymy się go — jutro robisz to automatycznie.'},
],days:[
{day:1,title:'Sprawdź swoją spiżarnię',task:'Przejrzyj produkty w kuchni. Sprawdź etykiety: które mają dodany wapń lub witaminę D? Zapisz.',tip:'Może już jesz wzbogacone produkty, nie wiedząc o tym?'},
{day:2,title:'Płatki śniadaniowe — wybierz mądrze',task:'Kup płatki wzbogacone wapniem i witaminą D. Sprawdź etykietę: minimum 15% RWS wapnia.',tip:'Jedna miska wzbogaconych płatków to nawet 50% dziennego wapnia.'},
{day:3,title:'Mleko roślinne — porównanie',task:'Porównaj etykiety 3 mlek roślinnych. Wybierz to z największą zawartością wapnia (min. 120mg/100ml).',tip:'Nie każde mleko roślinne jest wzbogacone. Czytaj — to twój nowy nawyk.'},
{day:4,title:'Sok pomarańczowy z wapniem',task:'Kup sok pomarańczowy wzbogacony wapniem. Wypij szklankę do śniadania.',tip:'Szklanka soku z wapniem to tyle samo wapnia co szklanka mleka.'},
{day:5,title:'Tofu — wapń z roślin',task:'Kup tofu wzbogacane wapniem (sprawdź etykietę!). Dodaj do stir-fry lub sałatki.',tip:'Tofu wzbogacane wapniem ma go więcej niż mleko krowie. Zaskakujące? Tak.'},
{day:6,title:'Chleb wzbogacony — alternatywa',task:'Poszukaj pieczywa wzbogacanego wapniem. Coraz więcej piekarni dodaje wapń do chleba.',tip:'Chleb z wapniem to prosty sposób na dodatkową porcję minerału.'},
{day:7,title:'Lista wzbogaconych — twój przewodnik',task:'Stwórz listę 5 wzbogaconych produktów, które będziesz regularnie kupować. Trzymaj ją w telefonie.',tip:'Teraz już wiesz, jak czytać etykiety. Ta umiejętność zostanie z tobą na zawsze. 📋'},
]},

'get-sunlight-exposure':{experts:['Psycholog','Coach Zdrowia','Dietetyk'],conversation:[
{speaker:'Psycholog',text:'15 minut słońca dziennie to najprostszy sposób na witaminę D. Ale trzeba to zrobić regularnie, nie okazyjnie.'},
{speaker:'Coach Zdrowia',text:'Połączmy słońce z codzienną rutyną: poranna kawa na balkonie, spacer do sklepu, czytanie w parku.'},
{speaker:'Dietetyk',text:'Pamiętajmy: witamina D ze słońca to tylko okres wiosna-lato w Polsce. Jesienią i zimą potrzebujemy diety i suplementów.'},
],days:[
{day:1,title:'Poranna ekspozycja — 10 minut',task:'Wypij poranną kawę lub herbatę na balkonie, w ogrodzie lub przy otwartym oknie. 10 minut twarzą do słońca.',tip:'Poranne słońce jest łagodniejsze i bezpieczniejsze dla skóry.'},
{day:2,title:'Spacer w porze lunchu',task:'Wyjdź na 15-minutowy spacer w okolicy południa. Odsłoń ramiona i twarz.',tip:'Południowe słońce daje najwięcej witaminy D w najkrótszym czasie.'},
{day:3,title:'Słońce z zadaniem',task:'Połącz ekspozycję z aktywnością: czytanie na ławce, praca w ogrodzie, rozmowa telefoniczna na zewnątrz.',tip:'Gdy masz cel, 15 minut mija błyskawicznie.'},
{day:4,title:'Weekendowa dawka',task:'Dziś zostań na słońcu 20-30 minut. Spacer, piknik, rower. Nanieś krem z filtrem po 15 minutach.',tip:'Dłuższa ekspozycja w weekend nadrabia krótsze w tygodniu.'},
{day:5,title:'Aktywność na słońcu',task:'Połącz ćwiczenia ze słońcem: joga w parku, stretching na tarasie, nordic walking.',tip:'Słońce + ruch = podwójna korzyść: witamina D i mocniejsze kości.'},
{day:6,title:'Słońce o różnych porach',task:'Wyjdź na słońce o 3 różnych porach: rano, w południe, po południu. Po 5 minut. Poczuj różnicę.',tip:'Każda pora dnia ma inne światło. Twoje ciało korzysta z każdego.'},
{day:7,title:'Zaplanuj słoneczny tydzień',task:'Wpisz 15-minutowe okienka słoneczne do kalendarza na każdy dzień przyszłego tygodnia.',tip:'15 minut dziennie to 91 godzin słońca rocznie. Twoje kości to czują. ☀️'},
]},

'weight-bearing-exercise':{experts:['Trener Personalny','Fizjoterapeuta','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Ćwiczenia z obciążeniem brzmią groźnie. Wiele osób myśli: to nie dla mnie, jestem za stary/a. A prawda jest odwrotna.'},
{speaker:'Fizjoterapeuta',text:'Obciążenie to niekoniecznie sztanga. To spacer, schody, taniec. Kości reagują na wstrząsy — wzmacniają się.'},
{speaker:'Trener Personalny',text:'Codziennie jedna aktywność obciążająca kości. Proste, bezpieczne, w domu lub na zewnątrz.'},
],days:[
{day:1,title:'Spacer z tupaniem — obciążenie',task:'Idź energicznie 20 minut. Świadomie stawiaj stopy — pięta-palce, z lekkim tupnięciem.',tip:'Każdy krok to mikro-wstrząs, który mówi kościom: wzmacniajcie się.'},
{day:2,title:'Schody — naturalne obciążenie',task:'Wejdź po schodach 3 razy (jeśli możesz). Wchodź energicznie. Jeśli nie ma schodów — wchodzenie na palce 20x.',tip:'Schody to darmowa siłownia. Twoje kości biodrowe to kochają.'},
{day:3,title:'Przysiady przy krześle — z obciążeniem',task:'Trzymając butelkę 1,5L wody w dłoniach: zrób 10 przysiadów przy krześle.',tip:'Butelka wody to twój pierwszy ciężar. Nic nie kosztuje.'},
{day:4,title:'Marsz z plecakiem',task:'Włóż do plecaka 2 butelki wody (3kg). Idź na 15-minutowy spacer. Poczuj dodatkowe obciążenie.',tip:'Plecak z obciążeniem to bezpieczny trening kości kręgosłupa.'},
{day:5,title:'Tańcz! — 15 minut',task:'Włącz ulubioną muzykę. Tańcz 15 minut. Skacz delikatnie, przytupuj. Baw się.',tip:'Taniec to ćwiczenie z obciążeniem w przebraniu. I daje endorfiny.'},
{day:6,title:'Wchodzenie na podwyższenie',task:'Wchodź na niski stopień (15-20cm) na zmianę nogami. 3 serie po 10 na nogę. Trzymaj się ściany.',tip:'Step w domu to najprostszy trening kości nóg.'},
{day:7,title:'Podsumowanie — twój plan obciążeniowy',task:'Wybierz 3 ulubione ćwiczenia z tygodnia. Ustal plan: 3x w tygodniu po 20 minut.',tip:'Silne kości to niezależność na lata. Zainwestowałeś/aś w przyszłość. 🦴'},
]},

'eat-fatty-fish':{experts:['Dietetyk','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Tłuste ryby to najlepsze źródło witaminy D. Ale wiele osób mówi: nie lubię ryb. Znajdźmy sposób.'},
{speaker:'Dietetyk',text:'Łosoś, makrela, sardynki, śledź — każda ma inny smak. A do tego ryby w puszce są łatwe i niedrogie.'},
{speaker:'Coach Zdrowia',text:'Jedna porcja tłustej ryby tygodniowo to minimum. Dwie to optimum. Zacznijmy od jednej.'},
],days:[
{day:1,title:'Łosoś wędzony — najłatwiejszy',task:'Kup paczkę łososia wędzonego. Zjedz na kanapce z pełnoziarnistego pieczywa i awokado.',tip:'Wędzony łosoś nie wymaga gotowania. Smakuje każdemu.'},
{day:2,title:'Makrela w puszce — budżetowo',task:'Kup makrelę w puszce (w oleju lub sosie własnym). Zjedz z pieczywem i ogórkiem kiszonym.',tip:'Puszka makreli to 200% dziennego zapotrzebowania na witaminę D. Za 5 zł.'},
{day:3,title:'Sardynki — małe, ale potężne',task:'Zjedz sardynki z puszki na sałatce. Są delikatniejsze w smaku niż makrela.',tip:'Sardynki jada się w całości — z ośćmi! Te miękkie ości to dodatkowa porcja wapnia.'},
{day:4,title:'Łosoś świeży — na patelni',task:'Usmaż filet z łososia na oliwie. Sól, pieprz, koperek. Podawaj z cytryną i warzywami.',tip:'Świeży łosoś to celebracja. Nie musisz jeść go codziennie — raz w tygodniu wystarczy.'},
{day:5,title:'Śledź — polska tradycja',task:'Zjedz śledzia w oleju lub w śmietanie. Na Wigilię i nie tylko. Polacy to znają.',tip:'Śledź to tłusta ryba z witaminą D. Tradycja ma naukowe podstawy.'},
{day:6,title:'Pasta rybna — domowa',task:'Zrób pastę z makreli: widelec + odrobina jogurtu + szczypiorek. Smaruj na pieczywie.',tip:'Domowa pasta rybna to zdrowsza alternatywa dla sklepowych pasztetów.'},
{day:7,title:'Rybny plan — minimum raz w tygodniu',task:'Wybierz ulubioną rybę. Zaplanuj dzień rybny w tygodniu. Wpisz do kalendarza.',tip:'Jedna porcja tłustej ryby tygodniowo = zdrowe kości i lepszy nastrój. 🐟'},
]},

'discuss-supplements':{experts:['Psycholog','Dietetyk','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Wizyta u lekarza bywa stresująca. Ale rozmowa o suplementach to rozmowa o inwestycji w zdrowie. Warto.'},
{speaker:'Dietetyk',text:'Nie łykaj suplementów na własną rękę. Nadmiar wapnia może szkodzić. Tylko lekarz zleci odpowiednie badania.'},
{speaker:'Coach Zdrowia',text:'Przygotowanie do wizyty to połowa sukcesu. Zrobimy z tego plan na 7 dni.'},
],days:[
{day:1,title:'Zapisz objawy i pytania',task:'Zapisz wszystkie pytania do lekarza: jakie suplementy, w jakich dawkach, jak długo brać.',tip:'Zapisane pytania nie uciekną podczas wizyty.'},
{day:2,title:'Sprawdź dotychczasowe badania',task:'Znajdź wyniki ostatnich badań. Sprawdź, czy miałeś/aś badany poziom witaminy D i wapnia.',tip:'Stare wyniki to punkt wyjścia dla lekarza.'},
{day:3,title:'Umów wizytę',task:'Zadzwoń do przychodni lub umów przez internet. Lekarz rodzinny to dobry początek.',tip:'Jeden telefon dzieli cię od profesjonalnej porady.'},
{day:4,title:'Przygotuj listę leków',task:'Spisz wszystkie leki i suplementy, które już bierzesz. Lekarz musi wiedzieć o interakcjach.',tip:'Pełna lista to bezpieczeństwo. Nie pomiń niczego.'},
{day:5,title:'Wizyta — zadaj pytania',task:'Podczas wizyty: zapytaj o dawkę, formę (D3 czy D2?), porę przyjmowania, interakcje.',tip:'Nie wstydź się pytać. To twoje zdrowie i twoje prawo.'},
{day:6,title:'Kup suplementy — jeśli zalecone',task:'Kup tylko to, co zalecił lekarz. Sprawdź aptekę — nie kupuj przez internet z nieznanych źródeł.',tip:'Jakość suplementu ma znaczenie. Apteka daje gwarancję.'},
{day:7,title:'Ustaw przypomnienie',task:'Ustaw codzienne przypomnienie w telefonie o przyjmowaniu suplementu. O tej samej porze.',tip:'Regularność to klucz do skuteczności suplementacji. 💊'},
]},

'bone-density-checks':{experts:['Psycholog','Fizjoterapeuta','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Badanie gęstości kości — densytometria — brzmi groźnie, ale jest bezbolesne i trwa 15 minut. A daje bezcenną wiedzę.'},
{speaker:'Fizjoterapeuta',text:'Po 50-tce densytometria raz na 2 lata. Po 65-tce — co roku. Wczesne wykrycie osteopenii pozwala zatrzymać osteoporozę.'},
{speaker:'Coach Zdrowia',text:'Zróbmy z tego misję na 7 dni. Od znalezienia placówki po umówienie terminu.'},
],days:[
{day:1,title:'Dowiedz się, gdzie zrobić badanie',task:'Wyszukaj "densytometria" + twoje miasto. Sprawdź, które placówki mają skierowania NFZ.',tip:'Densytometria jest refundowana dla osób 65+ i z grup ryzyka.'},
{day:2,title:'Sprawdź, czy potrzebujesz skierowania',task:'Zapytaj lekarza rodzinnego o skierowanie. Możesz też zrobić prywatnie (koszt ok. 100-200 zł).',tip:'Skierowanie od lekarza to oszczędność. Zapytaj przy okazji wizyty.'},
{day:3,title:'Umów termin',task:'Zadzwoń i umów badanie. Nie odkładaj — terminy bywają odległe.',tip:'Im szybciej umówisz, tym szybciej poznasz stan swoich kości.'},
{day:4,title:'Przygotuj się do badania',task:'W dniu badania nie bierz suplementów wapnia. Ubierz się wygodnie, bez metalowych elementów.',tip:'Badanie jest bezbolesne. Leżysz 15 minut — to jak leżenie na plaży, tylko chłodniej.'},
{day:5,title:'Wykonaj badanie',task:'Idź na densytometrię. To tylko 15 minut. Po badaniu odbierz wynik.',tip:'Zrobiłeś/aś to! Teraz już wiesz, jaki jest stan twoich kości.'},
{day:6,title:'Zinterpretuj wynik z lekarzem',task:'Umów się na omówienie wyniku. Lekarz wyjaśni wskaźnik T-score: powyżej -1 = norma, -1 do -2.5 = osteopenia.',tip:'Nie interpretuj wyniku sam/a. Lekarz powie ci, co robić dalej.'},
{day:7,title:'Zaplanuj następne badanie',task:'Wpisz do kalendarza przypomnienie o kolejnym badaniu za 2 lata (lub wcześniej, jeśli zalecono).',tip:'Regularne kontrole to spokój. Wiesz, że dbasz o kości. 🩻'},
]},

'safe-sun-exposure':{experts:['Dermatolog','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Słońce to miecz obosieczny — daje witaminę D, ale może szkodzić skórze. Klucz to równowaga, nie unikanie.'},
{speaker:'Dermatolog',text:'15-20 minut bez filtra jest bezpieczne dla większości osób. Potem nakładamy SPF 30+. Złoty środek.'},
{speaker:'Coach Zdrowia',text:'Wyrobienie nawyku: słońce + krem. Jak mycie zębów — automatyczne.'},
],days:[
{day:1,title:'Poznaj swój fototyp',task:'Określ fototyp skóry: I (bardzo jasna) do VI (ciemna). Im jaśniejsza skóra, tym krótsza bezpieczna ekspozycja.',tip:'Fototyp I: 10-15 min. Fototyp III: 20-30 min. Znaj swoje limity.'},
{day:2,title:'Kup krem z SPF 30',task:'Kup krem z filtrem SPF 30 lub 50. Niech stanie przy szczoteczce do zębów — będzie przypomnieniem.',tip:'Krem na widoku to krem użyty. Ukryty w szafce = zapomniany.'},
{day:3,title:'Poranna rutyna: słońce, potem SPF',task:'Wyjdź na 15 minut. Po powrocie nałóż krem na twarz i odsłonięte części ciała.',tip:'15 minut bez filtra, potem filtr. Równowaga osiągnięta.'},
{day:4,title:'Ochrona w południe',task:'Między 11 a 15 słońce jest najsilniejsze. Noś kapelusz i okulary. Nałóż SPF przed wyjściem.',tip:'W godzinach szczytu lepiej chronić niż produkować witaminę D.'},
{day:5,title:'Krem w trudno dostępne miejsca',task:'Nie zapomnij o uszach, karku, wierzchu dłoni i stóp. To częste miejsca poparzeń.',tip:'Rak skóry najczęściej atakuje tam, gdzie zapominamy o kremie.'},
{day:6,title:'Słońce przez szybę — witamina D nie przechodzi',task:'Pamiętaj: szyba blokuje UVB potrzebne do produkcji witaminy D. Musisz wyjść na zewnątrz.',tip:'Siedzenie przy oknie nie zastąpi wyjścia na dwór.'},
{day:7,title:'Stwórz zasadę: 15+SPF',task:'Zapamiętaj regułę: 15 minut słońca, potem SPF. Zapisz ją na kartce przy lustrze.',tip:'Prosta zasada, zdrowe kości i bezpieczna skóra. Dasz radę. ☀️🧴'},
]},

'vitamin-d-foods':{experts:['Dietetyk','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Witamina D z jedzenia to plan B — na jesień i zimę. Ale trzeba wiedzieć, co jeść i jak często.'},
{speaker:'Dietetyk',text:'Jajka, grzyby, wzbogacone soki — każdego dnia coś innego. Zbudujmy talerz witaminy D.'},
{speaker:'Coach Zdrowia',text:'W Polsce od października do marca słońce nie daje witaminy D. Dieta i suplementy to konieczność.'},
],days:[
{day:1,title:'Jajka — żółtko to skarb',task:'Zjedz 2 jajka na śniadanie. Żółtko zawiera witaminę D. Nie oddzielaj go!',tip:'Jajka z wolnego wybiegu mają więcej witaminy D.'},
{day:2,title:'Grzyby — witamina D z lasu',task:'Kup grzyby (pieczarki, shitake, borowiki). Zjedz jako dodatek do obiadu.',tip:'Grzyby wystawione na słońce zwiększają zawartość witaminy D 10-krotnie.'},
{day:3,title:'Wzbogacony sok pomarańczowy',task:'Wypij szklankę soku wzbogacanego witaminą D. Sprawdź etykietę.',tip:'Jedna szklanka to nawet 25% dziennego zapotrzebowania na witaminę D.'},
{day:4,title:'Mleko lub jogurt wzbogacany',task:'Kup mleko lub jogurt z dodatkiem witaminy D. Coraz więcej produktów jest fortyfikowanych.',tip:'Nabiał + witamina D = synergia. Wapń lepiej się wchłania.'},
{day:5,title:'Wątróbka — bogactwo witamin',task:'Jeśli jesz mięso: zjedz porcję wątróbki (kurza jest najdelikatniejsza). Bogata w witaminę D i żelazo.',tip:'Wątróbka raz na 2 tygodnie wystarczy. Nie przesadzaj — zawiera też witaminę A.'},
{day:6,title:'Kombinacja witaminy D',task:'Zjedz posiłek łączący źródła witaminy D: omlet z grzybami + szklanka wzbogacanego mleka.',tip:'Różne źródła = lepsze pokrycie zapotrzebowania.'},
{day:7,title:'Plan witaminy D na zimę',task:'Stwórz listę 5 produktów bogatych w witaminę D. Kupuj je regularnie od października do marca.',tip:'Zimą polegaj na jedzeniu i suplementach. Słońce wróci w kwietniu. 🍳'},
]},

'maintain-hydration-bones':{experts:['Dietetyk','Fizjoterapeuta','Coach Zdrowia'],conversation:[
{speaker:'Fizjoterapeuta',text:'Woda to nie tylko nawodnienie. Kości to w 25% woda. Odwodnienie osłabia strukturę kostną.'},
{speaker:'Dietetyk',text:'Wapń potrzebuje wody do transportu. Bez odpowiedniego nawodnienia nawet najlepsza dieta nie pomoże kościom.'},
{speaker:'Coach Zdrowia',text:'Minimum 1,5 litra dziennie. Zaczynamy od szklanki wody zaraz po przebudzeniu.'},
],days:[
{day:1,title:'Szklanka na dobry początek',task:'Wypij szklankę wody (250ml) zaraz po przebudzeniu. Postaw szklankę przy łóżku wieczorem.',tip:'Po 8 godzinach snu twoje ciało jest odwodnione. Daj mu wodę.'},
{day:2,title:'Butelka na biurku',task:'Napełnij butelkę 1,5L rano. Postaw na biurku. Pij małymi łykami przez cały dzień.',tip:'To, co widzisz — pijesz. Butelka w zasięgu wzroku to podstawa.'},
{day:3,title:'Woda przed posiłkiem',task:'Wypij szklankę wody 15 minut przed każdym posiłkiem. To też pomaga kontrolować porcje.',tip:'Woda przed jedzeniem = lepsze wchłanianie składników mineralnych.'},
{day:4,title:'Woda z minerałami',task:'Wybierz wodę mineralną z zawartością wapnia (min. 150mg/l). Sprawdź etykietę.',tip:'Woda mineralna może dostarczać nawet 30% dziennego zapotrzebowania na wapń.'},
{day:5,title:'Herbata ziołowa — też się liczy',task:'Wypij 2 filiżanki herbaty ziołowej (mięta, rumianek, pokrzywa) w ciągu dnia.',tip:'Herbata ziołowa to woda w przebraniu. I dodatkowe minerały.'},
{day:6,title:'Zupa na obiad',task:'Zjedz zupę na obiad. Bulionowa, krem, jarzynowa — każda to dodatkowa porcja płynów.',tip:'Zupa to sprytny sposób na nawodnienie. I ciepło w zimny dzień.'},
{day:7,title:'Twój system nawodnienia',task:'Ustal system: szklanka rano + butelka w ciągu dnia + herbata po południu + zupa.',tip:'1,5 litra dziennie? Zrobiłeś/aś to. Twoje kości są wdzięczne. 💧'},
]},

'track-calcium-intake':{experts:['Dietetyk','Psycholog','Trener Rozwoju Osobistego'],conversation:[
{speaker:'Psycholog',text:'Monitorowanie wapnia może wydawać się uciążliwe. Ale nie chodzi o perfekcyjne liczenie — chodzi o świadomość.'},
{speaker:'Dietetyk',text:'Dorośli potrzebują 1000-1200mg wapnia dziennie. Szklanka mleka to 300mg. Łatwo policzyć orientacyjnie.'},
{speaker:'Trener Rozwoju Osobistego',text:'Prosty dzienniczek: nabiał, zielone warzywa, wzbogacone produkty. 3 kategorie, 5 minut dziennie.'},
],days:[
{day:1,title:'Dowiedz się, ile potrzebujesz',task:'Sprawdź normę dla swojego wieku: dorośli 1000mg, kobiety 50+ i mężczyźni 70+: 1200mg.',tip:'Znajomość celu to połowa sukcesu.'},
{day:2,title:'Poznaj źródła wapnia',task:'Zapisz 5 produktów bogatych w wapń i ich zawartość: jogurt 200ml = 300mg, ser biały 100g = 90mg, szpinak 100g = 100mg.',tip:'Ściągawka w telefonie to twój sprytny pomocnik.'},
{day:3,title:'Policz dzisiejszy wapń',task:'Oszacuj, ile wapnia zjadłeś/aś dziś. Użyj ściągawki. Nie musi być idealnie.',tip:'Szacowanie to nie egzamin. Chodzi o przybliżony obraz.'},
{day:4,title:'Znajdź luki',task:'Czy osiągnąłeś/aś 1000mg? Jeśli nie — gdzie możesz dodać jeden produkt bogaty w wapń?',tip:'Jeden jogurt lub garść jarmużu może wypełnić lukę.'},
{day:5,title:'Aplikacja do śledzenia',task:'Pobierz darmową aplikację do śledzenia składników odżywczych (np. Fitatu). Wpisz dzisiejsze posiłki.',tip:'Aplikacja liczy za ciebie. Technologia w służbie zdrowia.'},
{day:6,title:'Dzień optymalny',task:'Zaplanuj dzień, w którym osiągniesz 100% zapotrzebowania na wapń. Zrealizuj go.',tip:'Teraz już wiesz, jak to zrobić. To nie jest trudne.'},
{day:7,title:'Nawyk, nie obsesja',task:'Nie waż wszystkiego codziennie. Raz w tygodniu zrób szybki szacunek. Resztę niech robi rutyna.',tip:'Świadomość, nie perfekcja. Twoje kości dostają, czego potrzebują. 📊'},
]},

'balanced-diet-bones':{experts:['Dietetyk','Coach Zdrowia','Psycholog'],conversation:[
{speaker:'Psycholog',text:'Zbilansowana dieta dla kości to nie tylko wapń. To symfonia składników: magnez, witamina K, cynk, białko.'},
{speaker:'Dietetyk',text:'Każdego dnia dodajemy jeden składnik-pomocnik. Magnez z migdałów, witamina K z natki pietruszki, cynk z pestek dyni.'},
{speaker:'Coach Zdrowia',text:'Różnorodność to klucz. Im więcej kolorów na talerzu, tym lepiej dla kości.'},
],days:[
{day:1,title:'Magnez — partner wapnia',task:'Zjedz garść migdałów lub pestek dyni. Magnez jest niezbędny do wchłaniania wapnia.',tip:'Bez magnezu wapń nie trafi do kości. To duet.'},
{day:2,title:'Witamina K — zielenina',task:'Dodaj natkę pietruszki lub świeży szpinak do obiadu. Witamina K kieruje wapń do kości.',tip:'Witamina K to kontroler lotów wapnia. Bez niej wapń ląduje w tętnicach, nie kościach.'},
{day:3,title:'Cynk — budulec kości',task:'Zjedz porcję wołowiny, pestek dyni lub ciecierzycy. Cynk wspomaga tworzenie kolagenu w kościach.',tip:'Cynk to jak zaprawa murarska dla kości. Spaja wszystko.'},
{day:4,title:'Białko — struktura',task:'Upewnij się, że każdy posiłek ma źródło białka: jajko, ryba, rośliny strączkowe.',tip:'Kość to w 50% białko (kolagen). Nie tylko minerały.'},
{day:5,title:'Potas — równowaga',task:'Zjedz banana lub ziemniaka. Potas neutralizuje kwasy odciągające wapń z kości.',tip:'Potas chroni wapń przed wypłukiwaniem. Banany to tarcza dla kości.'},
{day:6,title:'Witamina C — kolagen',task:'Zjedz paprykę, cytrusy lub kiwi. Witamina C jest niezbędna do produkcji kolagenu w kościach.',tip:'Kolagen to rusztowanie kości. Witamina C je buduje.'},
{day:7,title:'Tęczowy talerz — pełnia składników',task:'Stwórz talerz zawierający wszystkie poznane składniki. Zrób zdjęcie — to twoje dzieło.',tip:'Zbilansowana dieta to nie wyrzeczenia — to różnorodność. Twoje kości są silne. 🌈'},
]},

'limit-alcohol-bones':{experts:['Psycholog','Dietetyk','Coach Zdrowia'],conversation:[
{speaker:'Psycholog',text:'Alkohol wypłukuje wapń i zaburza wchłanianie witaminy D. Ale ograniczenie picia to delikatny temat.'},
{speaker:'Dietetyk',text:'Nie trzeba rezygnować całkowicie. 1 drink dziennie dla kobiet, 2 dla mężczyzn to bezpieczny limit dla kości.'},
{speaker:'Coach Zdrowia',text:'Zacznijmy od świadomości — zapisz, ile naprawdę pijesz. Potem małe kroki w stronę ograniczenia.'},
],days:[
{day:1,title:'Tydzień prawdy — zapisuj',task:'Zapisuj każdy alkoholowy napój przez najbliższy tydzień. Bez oceniania.',tip:'Świadomość to pierwszy krok. Zapisuj szczerze.'},
{day:2,title:'Poznaj bezpieczne limity',task:'Sprawdź: dla kobiet max 1 porcja dziennie (150ml wina, 350ml piwa), dla mężczyzn max 2.',tip:'Limity dla kości są niższe niż dla wątroby. Kości są bardziej wrażliwe.'},
{day:3,title:'Dzień bez alkoholu',task:'Dziś nie pij nic alkoholowego. Zastąp wodą mineralną z cytryną.',tip:'Jeden dzień przerwy to już 15% mniej alkoholu w tygodniu.'},
{day:4,title:'Woda między drinkami',task:'Jeśli pijesz alkohol: po każdym drinku wypij szklankę wody. Spowolnisz i nawodnisz.',tip:'Woda między drinkami to trick, który zmniejsza spożycie o połowę.'},
{day:5,title:'Alternatywy — co pić zamiast',task:'Znajdź bezalkoholowe alternatywy: kombucha, woda z miętą, bezalkoholowe piwo 0%.',tip:'Bezalkoholowe piwo ma tyle samo wapnia co zwykłe — minus alkohol.'},
{day:6,title:'Społecznie bez alkoholu',task:'Na spotkaniu zamów napój bezalkoholowy. Zobaczysz — nikt nie zauważy.',tip:'Presja społeczna jest głównie w twojej głowie.'},
{day:7,title:'Podsumuj tydzień i ustal cel',task:'Ile porcji alkoholu wypiłeś/aś w tym tygodniu? Ustal cel na przyszły: max 7 (kobiety) lub 14 (mężczyźni).',tip:'Mniej alkoholu = mocniejsze kości. Twoje zdrowie, twój wybór. 🍷→💧'},
]},

'quit-smoking-bones':{experts:['Psycholog','Coach Zdrowia','Dietetyk'],conversation:[
{speaker:'Psycholog',text:'Palenie to jeden z najsilniejszych wrogów kości. Zmniejsza gęstość kości o 10-30%. Ale rzucenie jest możliwe.'},
{speaker:'Coach Zdrowia',text:'Kości regenerują się po rzuceniu palenia. Po roku bez papierosów ryzyko złamania spada o połowę.'},
{speaker:'Dietetyk',text:'Podczas rzucania zwiększ spożycie antyoksydantów — pomogą organizmowi się oczyścić.'},
],days:[
{day:1,title:'Znajdź swój powód — zapisz go',task:'Zapisz na kartce dlaczego chcesz rzucić: dla kości, dla rodziny, dla oddechu. Przyklej na lodówce.',tip:'Silny powód pokona silne uzależnienie. Znajdź swój.'},
{day:2,title:'Poznaj metody rzucania',task:'Poczytaj o metodach: terapia zastępcza (plastry, gumy), leki (bupropion, wareniklina), akupunktura.',tip:'Nie musisz rzucać sam/a. Metody medyczne podwajają szanse na sukces.'},
{day:3,title:'Wybierz datę rzucenia',task:'Wybierz konkretną datę w ciągu najbliższych 2 tygodni. Zapisz w kalendarzu.',tip:'Data zmienia "kiedyś" w "wtedy". To potężna różnica.'},
{day:4,title:'Znajdź wsparcie',task:'Powiedz bliskim o swojej decyzji. Znajdź kogoś, kto też rzuca lub już rzucił.',tip:'Wsparcie podwaja szanse. Nie walcz sam/a.'},
{day:5,title:'Zastąp rytuał palenia',task:'Zidentyfikuj momenty, kiedy sięgasz po papierosa. Zaplanuj, co zrobisz zamiast: spacer, guma, głębokie oddechy.',tip:'Rytuał można zastąpić innym rytuałem. Klucz to plan.'},
{day:6,title:'Dieta wspierająca rzucanie',task:'Jedz więcej owoców i warzyw (antyoksydanty), pij wodę, unikaj kawy (wyzwala chęć palenia).',tip:'To, co jesz, wpływa na chęć palenia. Wybieraj mądrze.'},
{day:7,title:'Nagroda za tydzień przygotowań',task:'Jesteś gotowy/a do rzucenia. Nagródź się za przygotowania — zasłużyłeś/aś.',tip:'Przygotowanie to już połowa sukcesu. Data rzucenia to twój pierwszy dzień nowego życia. 🚭'},
]},
};
export default CHALLENGES;
