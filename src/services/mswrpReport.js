/**
 * MSWRP Report Generator — Metoda Specyficzna w Rozwiązywaniu Problemów (Antoszkiewicz)
 * M(P) = Z(P,E) • Q(P,E)   gdzie Z = R • U • J • W
 *
 * Generuje RAPORT Z MOŻLIWOŚCIAMI — wiele wariantów rozwiązania problemu,
 * z których użytkownik wybiera spersonalizowaną ścieżkę wdrożenia.
 */

function todayIso() { return new Date().toISOString().slice(0, 10); }

function buildSkillName(factorName) {
  return `skill-mswrp-${factorName.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)}`;
}

const APPROACH_TYPES = [
  {
    id: 'minimalna',
    label: 'Metoda minimalna (Micro-Habit)',
    description: 'Najmniejsza, codzienna porcja. Bez presji perfekcji — liczy się powtarzalność.',
    reguly: [
      'Codziennie ta sama minimalna czynność. Bez wyjątków.',
      'Jeden dzień przerwy nie przerywa cyklu; dwa przerywają.',
      'Zawsze w tym samym miejscu i o tej samej porze.',
    ],
    podejscie: ['Start: 30 sekund wersji lub 1 szt./łyk.',
      'Skala: dodawaj tylko gdy 100% wykonania przez 14 dni.',
      'Wariant „jeśli… to…": jeśli bariera, to 50% wersji.'],
    wyposazenie: ['Jeden przedmiot (szklanka, butelka, notes, timer).',
      'Stała lokalizacja w zasięgu wzroku.',
      'Zero innych zmian w środowisku.'],
    metryka: '1 szt./łyk/czynność dziennie + znacznik ✓ w kalendarzu.',
    procedura: [
      'Dzień 1: wersja minimalna, zmierz czas wykonania',
      'Dzień 2-3: powtórz + 1-linijkowa notatka „co mi utrudniało"',
      'Dzień 4: stała godzina i miejsce',
      'Dzień 5-6: ekspozycja bez zmian',
      'Dzień 7: audyt — czy forma jest zbyt łatwa?',
    ],
    silne_strony: 'Najmniejsze ryzyko porażki. Buduje nawyk przed ambicją.',
    ryzyka: 'Może być zbyt łagodne, brak efektu zdrowotnego.',
    recepta: 'Dla początkujących, niskiej energii, wielu obowiązków.',
  },
  {
    id: 'progresywna',
    label: 'Metoda progresywna (Nawyk schodkowy)',
    description: 'Zaczynasz mało, dodajesz co tydzień. Stały wzrost obciążenia.',
    reguly: ['Co tydzień jedno rozszerzenie (ilość / czas / zakres).',
      'Nie pomija się poziomów — kolejność ma znaczenie.',
      'Jeśli nie ukończysz tygodnia, powtarzasz tygodniowy etap.'],
    podejscie: ['Tyzień 1: 50% docelowej dawki.',
      'Tyzień 2: 75%, Tydzień 3: 100%.',
      'Potem: utrzymanie lub dalsza progresja.'],
    wyposazenie: ['Dziennik postępów.',
      'Timer / aplikacja do śledzenia.',
      'Tygodniowy plan w kalendarzu.'],
    metryka: 'Tygodniowy przyrost + ilość/jednostka.',
    procedura: [
      'Pn: pomiar wyjściowy (waga/wartość/czas)',
      'Śr-Pt: dawka tygodniowa',
      'Sb: pełna sesja + notatka',
      'Nd: tygodniowy audyt, decyzja o dawce na kolejny tydzień',
      'Powtarzaj cykl 12 tygodni',
    ],
    silne_strony: 'Skokowe wzrosty widoczne i satysfakcjonujące.',
    ryzyka: 'Wymaga konsekwencji — duże odpady w razie pominięcia.',
    recepta: 'Dla zdeterminowanych, z dobrym wsparciem (partner, lekarz, trener).',
  },
  {
    id: 'maksymalna',
    label: 'Metoda intensywna (Sprint 30-dniowy)',
    description: 'Pełna dawka od początku. Szybkie efekty kosztem wyższego ryzyka.',
    reguly: ['Codziennie pełna dawka bez przerw.',
      '3 dni przerwy = restart programu.',
      'Rygorystyczne reguły: 0 kompromisu w pierwszych 30 dniach.'],
    podejscie: ['Tydzień 1: baza wiedzy, plan posiłków/treningów.',
      'Tydzień 2-3: pełne obciążenie + monitoring.',
      'Tydzień 4: stabilizacja.'],
    wyposazenie: ['Gotowe posiłki / plany treningowe / suplementacja.',
      'Codzienny notatnik postępów.',
      'System wsparcia (mentor, grupa, aplikacja).'],
    metryka: 'Codzienny compliance% + tygodniowy wynik.',
    procedura: [
      'Dzień 1: pełne wejście w plan',
      'Dzień 2-7: codzienny check (rano) i raport (wieczór)',
      'Dzień 8-21: stałe tempo, zwiększanie obciążenia co tydzień',
      'Dzień 22-30: integracja i praca nad nawykiem długoterminowym',
      'Po dniu 30: ocena efektów, decyzja: utrzymanie lub faza 2',
    ],
    silne_strony: 'Najszybsze efekty. Buduje dyscyplinę.',
    ryzyka: 'Wysokie ryzyko porzucenia. Możliwe przeciążenie lub kontuzje.',
    recepta: 'Dla osób z silną motywacją, krótkim terminem celu, wsparciem specjalisty.',
  },
  {
    id: 'socjalna',
    label: 'Metoda socjalna (Wspólna odpowiedzialność)',
    description: 'Zespół / partner / grupa odpowiedzialna za postępy.',
    reguly: ['Cotygodniowy check-in z partnerem / grupą.',
      'Transparentność postępów.',
      'Spotkanie kontrolne co 7-14 dni.'],
    podejscie: ['Wybierz 1-3 osoby odpowiedzialne.',
      'Ustalcie wspólny cel + spotkanie kontrolne.',
      'Dzielenie się wynikami co tydzień.'],
    wyposazenie: ['Aplikacja do śledzenia widoczna dla grupy.',
      'Cotygodniowe wideospotkanie 15 min.',
      'Wspólny kanał komunikacji (np. grupa czatowa).'],
    metryka: '% wykonania tygodniowego + frekwencja check-inów.',
    procedura: [
      'Tyzień 0: wybór osób + ustalenie zasad',
      'Każdy poniedziałek: publikacja planu tygodnia',
      'Piątek: krótki raport (co się udało, co nie)',
      'Niedziela: spotkanie kontrolne online 15 min',
      'Co miesiąc: retrospektywa miesięczna',
    ],
    silne_strony: 'Motywacja społeczna, mniejsze odpadanie.',
    ryzyka: 'Zależność od innych. Może generować presję.',
    recepta: 'Dla osób, które lepiej funkcjonują w grupie lub potrzebują odpowiedzialności.',
  },
  {
    id: 'eksperymentalna',
    label: 'Metoda eksperymentalna (Test N=1)',
    description: 'Traktuj wdrożenie jak naukowy eksperyment z hipotezą i pomiarem.',
    reguly: ['Zdefiniuj hipotezę przed startem.',
      'Zmieniaj JEDNĄ zmienną na tydzień.',
      'Dokumentuj wszystko, łącznie z porażkami.'],
    podejscie: ['Tyzień 1: pomiar bazy wyjściowej.',
      'Tyzień 2-3: test wariantu A.',
      'Tyzień 4-5: test wariantu B.',
      'Tyzień 6: porównanie, wybór optymalnego.'],
    wyposazenie: ['Arkusz kalkulacyjny / notatnik naukowy.',
      'System mierzenia wyjścia (waga, ciśnienie, energia 1-10).',
      'Gotowość na eksperymenty.'],
    metryka: 'Pomiar obiektywny + subiektywny (1-10).',
    procedura: [
      'Dzień 0: hipoteza + pomiar bazy',
      'Tydzień 1: wariant A (stały)',
      'Tydzień 2: wariant B (jedna zmiana)',
      'Tydzień 3: powtórzenie zwycięzcy',
      'Dzień 28: wnioski + decyzja',
    ],
    silne_strony: 'Dane zamiast domysłów. Personalizacja oparta na wynikach.',
    ryzyka: 'Wymaga dyscypliny pomiaru. Może prowadzić do „próbowania bez końca".',
    recepta: 'Dla analityków, osób zainteresowanych optymalizacją własnego zdrowia.',
  },
];

function regulyForApproach(type) { return type.reguly.join(' '); }
function podejscieForApproach(type) { return type.podejscie.join(' '); }

function buildApproaches(factor, context) {
  return APPROACH_TYPES.map((a) => ({
    id: a.id,
    label: a.label,
    opis: a.description,
    zasada: {
      R_regula: regulyForApproach(a),
      U_podejscie: podejscieForApproach(a),
      J_metryka: a.metryka,
      W_wyposazenie: a.wyposazenie.join(', '),
    },
    procedura_7dni: a.procedura.join(' / '),
    silne_strony: a.silne_strony,
    ryzyka: a.ryzyka,
    rekomendowany_kontekst: a.recepta,
    ograniczenia_typowe: (factor.barriers || []).slice(0, 3).join('; ') || 'brak zgłoszonych',
  }));
}

function buildSkill(factor, context) {
  return {
    skill_id: buildSkillName(factor.name),
    version: '1.0',
    generated_at: todayIso(),
    purpose: `Wiele ścieżek wdrożenia czynnika: ${factor.name}`,
    mswrp_formula: 'M(P) = Z(P,E) • Q(P,E); Z = R • U • J • W',
    count_approaches: APPROACH_TYPES.length,
    context_input: context || '',
  };
}

export function buildMswrpReport(factor, userContext = '') {
  if (!factor) return null;
  const ctx = (userContext || '').trim();
  const skill = buildSkill(factor, ctx);
  const approaches = buildApproaches(factor, ctx);

  return {
    meta: {
      report_id: `${skill.skill_id}-${Date.now()}`,
      factor_id: factor.id,
      factor_name: factor.name,
      generated_at: skill.generated_at,
      mswrp_version: '1.0 (Antoszkiewicz) — tryb możliwości',
      skill_name: skill.skill_id,
    },
    problem: { name: factor.name, desc: factor.desc, barriers: factor.barriers || [] },
    user_context: ctx,
    formuła_MSWRP: 'M(P) = Z(P,E) • Q(P,E); Z = R • U • J • W',
    mozliwosci: approaches,
    instrukcja_wyboru: 'Przejrzyj każdą możliwość. Wybierz tę, która najlepiej pasuje do Twojej aktualnej sytuacji. Spersonalizowana metoda powinna być możliwa do realizacji od dziś, z uwzględnieniem ograniczeń (E) i najmniejszym wysiłkiem startowym.',
    weryfikacja: {
      metryka_24h: 'Wykonaj pierwszy krok wybranej możliwości (max 10 min).',
      metryka_7_dni: 'Po 7 dniach oceń: ile razy wykonano i czy forma była możliwa do utrzymania.',
      kryterium_zmiany_możliwości: 'Jeśli wybrana forma nie działa, wróć do raportu i wybierz inną (np. mniejszą intensywność lub wersję socjalną).',
    },
    skill,
  };
}

export function reportToText(r) {
  if (!r) return '';
  const out = [];
  out.push(`# RAPORT MSWRP — ${r.meta.factor_name}`);
  out.push(`# Tryb: możliwości rozwiązania  |  Wygenerowano: ${r.meta.generated_at}`);
  out.push(`# Skill: ${r.meta.skill_name}`);
  out.push('');
  out.push(`## Problem (P): ${r.problem.name}`);
  out.push(r.problem.desc);
  if (r.problem.barriers?.length) out.push(`Bariery: ${r.problem.barriers.join('; ')}`);
  if (r.user_context) { out.push(''); out.push('## Kontekst użytkownika'); out.push(r.user_context); }
  out.push('');
  out.push('## Formuła MSWRP');
  out.push(r.formuła_MSWRP);
  out.push('');
  out.push('## Możliwości rozwiązania (do wyboru spersonalizowanego)');
  (r.mozliwosci || []).forEach((m, i) => {
    out.push('');
    out.push(`### ${i + 1}. ${m.label}  [${m.id}]`);
    out.push(m.opis);
    out.push(`Reguły (R): ${m.zasada.R_regula}`);
    out.push(`Podejście (U): ${m.zasada.U_podejscie}`);
    out.push(`Metryka (J): ${m.zasada.J_metryka}`);
    out.push(`Wyposażenie (W): ${m.zasada.W_wyposazenie}`);
    out.push(`Procedura 7 dni (Q): ${m.procedura_7dni}`);
    out.push(`Silne strony: ${m.silne_strony}`);
    out.push(`Ryzyka: ${m.ryzyka}`);
    out.push(`Rekomendowany kontekst: ${m.rekomendowany_kontekst}`);
    out.push(`Typowe ograniczenia: ${m.ograniczenia_typowe}`);
  });
  out.push('');
  out.push('## Instrukcja wyboru');
  out.push(r.instrukcja_wyboru);
  out.push('');
  out.push('## Weryfikacja');
  out.push(`- 24h: ${r.weryfikacja.metryka_24h}`);
  out.push(`- 7 dni: ${r.weryfikacja.metryka_7_dni}`);
  out.push(`- Zmiana możliwości: ${r.weryfikacja.kryterium_zmiany_możliwości}`);
  out.push('');
  out.push('## Skill');
  out.push(JSON.stringify(r.skill, null, 2));
  return out.join('\n');
}
