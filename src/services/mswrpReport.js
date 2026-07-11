/**
 * MSWRP Report Generator — Metoda Specyficzna w Rozwiązywaniu Problemów (Antoszkiewicz)
 * M(P) = Z(P,E) • Q(P,E)   gdzie Z = R • U • J • W
 *
 * Generuje raport offline na podstawie:
 *  - czynnika (P)
 *  - kontekstu użytkownika (bariery z formularza)
 *  - wzorców wyzwań 7-dniowych jeśli istnieją
 */

function todayIso() { return new Date().toISOString().slice(0, 10); }

function buildSkillName(factorName) {
  return `skill-mswrp-${factorName.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)}`;
}

function buildZasada(factor, context) {
  const ctx = context ? ` W kontekście użytkownika: ${context.split('\n')[0].slice(0, 180)}.` : '';
  return `Aby skutecznie wdrożyć czynnik "${factor.name}", konieczne jest skorelowanie zasady (R-U-J-W) z konkretną procedurą (Q) przy uwzględnieniu ograniczeń (E).${ctx}`;
}

function buildRegula(factor) {
  const b1 = factor.barriers?.[0] || 'brak specyficznych barier';
  return `Robimy to codziennie w małej, stałej porcji. Nie czekamy na idealne warunki — działamy pomimo bariery: "${b1}".`;
}

function buildPodejscie(factor) {
  return `Start od najmniejszej, najłatwiejszej wersji nawyku związanego z "${factor.name.toLowerCase()}" — bez ambicji perfekcji.`;
}

function buildJezyk() {
  return `Mierzalny: 1 konkretna liczba dziennie + krótka refleksja "co dziś zrobiłem/am?".`;
}

function buildWyposazenie(factor) {
  return `Notatnik lub telefon z przypomnieniem; stałe miejsce na realizację; czas 10-15 minut.`;
}

function buildProcedura(factor) {
  return [
    `Dzień 1: wybierz minimalną wersję "${factor.name.toLowerCase()}" i zrób ją raz`,
    `Dzień 2: powtórz wersję minimalną + zapisz w notatniku 1 fakt`,
    `Dzień 3: dodaj 1 rozszerzenie (np. drugą porcję, dodatkowy wymiar)`,
    `Dzień 4: napotkaj barierę i użyj przygotowanej reguły`,
    `Dzień 5: utrzymaj rytm i zmierz wynik w metryce J`,
    `Dzień 6: standaryzuj czas i miejsce nawyku`,
    `Dzień 7: audyt — co działa, co skorygować, jak utrzymać po tygodniu`,
  ].join('\n');
}

function buildOgraniczenia(factor) {
  const barriers = factor.barriers || [];
  if (barriers.length === 0) return 'brak zgłoszonych ograniczeń';
  return barriers.map((b, i) => `${i + 1}. ${b}`).join('\n');
}

function buildSkill(factor, context) {
  const meta = {
    skill_id: buildSkillName(factor.name),
    version: '1.0',
    generated_at: todayIso(),
    purpose: `Skuteczne wdrożenie czynnika: ${factor.name}`,
    mswrp_formula: 'M(P) = Z(P,E) • Q(P,E); Z = R • U • J • W',
  };
  return { ...meta, context_input: context || '' };
}

export function buildMswrpReport(factor, userContext = '') {
  if (!factor) return null;
  const ctx = (userContext || '').trim();
  const skill = buildSkill(factor, ctx);

  const report = {
    meta: {
      report_id: `${skill.skill_id}-${Date.now()}`,
      factor_id: factor.id,
      factor_name: factor.name,
      generated_at: skill.generated_at,
      mswrp_version: '1.0 (Antoszkiewicz)',
      skill_name: skill.skill_id,
    },
    problem: { name: factor.name, desc: factor.desc, barriers: factor.barriers || [] },
    zasada: {
      definicja: buildZasada(factor, ctx),
      skladniki: {
        R_regula: buildRegula(factor),
        U_podejscie: buildPodejscie(factor),
        J_jezyk_metryka: buildJezyk(),
        W_wyposazenie: buildWyposazenie(factor),
      },
    },
    procedura: buildProcedura(factor),
    ograniczenia: buildOgraniczenia(factor),
    weryfikacja: {
      metryka_24h: 'Wykonaj minimalną wersję czynnika w ciągu 24h i zanotuj czas trwania.',
      metryka_7_dni: 'Po 7 dniach oceń: ile razy wykonano, jakie bariery się pojawiły, jak je rozwiązano.',
      kryterium_sukcesu: 'Minimum 5 z 7 dni z wykonanym nawykiem + brak pominięć z powodu tej samej bariery.',
    },
    skill: skill,
    context_snapshot: ctx,
  };
  return report;
}

export function reportToText(r) {
  if (!r) return '';
  const lines = [];
  lines.push(`# RAPORT MSWRP — ${r.meta.factor_name}`);
  lines.push(`# Wygenerowano: ${r.meta.generated_at}  |  Skill: ${r.meta.skill_name}`);
  lines.push('');
  lines.push(`## Problem (P): ${r.problem.name}`);
  lines.push(r.problem.desc);
  if (r.problem.barriers?.length) lines.push(`Bariery: ${r.problem.barriers.join('; ')}`);
  lines.push('');
  lines.push('## Zasada metodyczna (Z)');
  lines.push(r.zasada.definicja);
  lines.push(`R — Reguła: ${r.zasada.skladniki.R_regula}`);
  lines.push(`U — Podejście: ${r.zasada.skladniki.U_podejscie}`);
  lines.push(`J — Język/metryka: ${r.zasada.skladniki.J_jezyk_metryka}`);
  lines.push(`W — Wyposażenie: ${r.zasada.skladniki.W_wyposazenie}`);
  lines.push('');
  lines.push('## Procedura (Q)');
  lines.push(r.procedura);
  lines.push('');
  lines.push('## Ograniczenia (E)');
  lines.push(r.ograniczenia);
  lines.push('');
  lines.push('## Weryfikacja');
  lines.push(`- 24h: ${r.weryfikacja.metryka_24h}`);
  lines.push(`- 7 dni: ${r.weryfikacja.metryka_7_dni}`);
  lines.push(`- Sukces: ${r.weryfikacja.kryterium_sukcesu}`);
  lines.push('');
  lines.push('## Skill (kompetencja do nauczenia)');
  lines.push(JSON.stringify(r.skill, null, 2));
  if (r.context_snapshot) {
    lines.push('');
    lines.push('## Kontekst użytkownika');
    lines.push(r.context_snapshot);
  }
  return lines.join('\n');
}
