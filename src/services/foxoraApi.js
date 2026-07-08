/**
 * Calls Foxora API to generate an MSWRP recommendation for a given factor.
 * Reads API configuration from localStorage first, then from Vite env vars.
 * @param {{ id: string, name: string, desc: string, barriers: string[] }} factor
 * @param {string} userContext
 * @returns {Promise<{zasada: string, procedura: string, pierwszyKrok: string, weryfikacja: string} | null>}
 */
export async function generateRecommendation(factor, userContext) {
  const endpoint = localStorage.getItem('foxora_endpoint') || import.meta.env.VITE_FOXORA_ENDPOINT || 'https://api.foxora.ai/v1';
  const apiKey = localStorage.getItem('foxora_api_key') || import.meta.env.VITE_FOXORA_API_KEY;
  const model = localStorage.getItem('foxora_model') || import.meta.env.VITE_FOXORA_MODEL || 'foxora-default';

  const prompt = `Jesteś ekspertem metody MSWRP (Metoda Specyficzna w Rozwiązywaniu Problemów, Jan Antoszkiewicz). Użytkownik chce wdrożyć nawyk: "${factor.name}". Opis czynnika: ${factor.desc}. Bariery, które może napotkać: ${factor.barriers.join(', ')}. Kontekst użytkownika: ${userContext || 'brak dodatkowego kontekstu'}.

Wygeneruj rekomendację wdrożeniową w następującym formacie (NIC poza tym formatem):

ZASADA: [1 zdanie — dlaczego ten czynnik jest ważny i jaka zasada za nim stoi]

PROCEDURA: [3-5 konkretnych kroków. Format: 1. Krok. 2. Krok. itd.]

PIERWSZY_KROK_24H: [1 konkretna czynność do wykonania w ciągu najbliższych 24 godzin]

WERYFIKACJA: [jak zweryfikować/policzyć wdrożenie jutro]`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(endpoint + "/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model: model,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error("Foxora API error:", response.status, response.statusText);
      return { error: "API error: " + response.status + " " + response.statusText };
    }

    const data = await response.json();
    const content = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;

    if (!content || typeof content !== "string") {
      return { error: "No content in API response" };
    }

    return parseMSWRP(content);
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === "AbortError") {
      return { error: "Request timed out after 15 seconds" };
    }
    return { error: "Network error: " + err.message };
  }
}

function parseMSWRP(text) {
  try {
    const zasadaMatch = text.match(/ZASADA:\s*([\s\S]*?)(?=PROCEDURA:|$)/);
    const proceduraMatch = text.match(/PROCEDURA:\s*([\s\S]*?)(?=PIERWSZY_KROK_24H:|$)/);
    const pierwszyKrokMatch = text.match(/PIERWSZY_KROK_24H:\s*([\s\S]*?)(?=WERYFIKACJA:|$)/);
    const weryfikacjaMatch = text.match(/WERYFIKACJA:\s*([\s\S]*?)$/);

    return {
      zasada: (zasadaMatch && zasadaMatch[1] || "").trim(),
      procedura: (proceduraMatch && proceduraMatch[1] || "").trim(),
      pierwszyKrok: (pierwszyKrokMatch && pierwszyKrokMatch[1] || "").trim(),
      weryfikacja: (weryfikacjaMatch && weryfikacjaMatch[1] || "").trim(),
    };
  } catch (err) {
    console.error("Failed to parse MSWRP response:", err);
    return { error: "Failed to parse recommendation format" };
  }
}
