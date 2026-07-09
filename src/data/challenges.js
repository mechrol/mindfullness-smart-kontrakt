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
};
export default CHALLENGES;
