# Estetica — prototyp strony (pitch)

Klikalny prototyp strony marketingowej salonu kosmetycznego **Estetica — Strefa
Piękna i Relaksu** (Katowice). Landing one-page z sekcjami, w pełni responsywny,
bez backendu. Rezerwacja to CTA linkujące do profilu Booksy salonu.

**Kierunek wizualny: „Gold Wellness"** — miękki, zaokrąglony layout wellness
(duże panele, pill-buttony, adnotacje z liniami-łącznikami, „przyklejony" pasek
rezerwacji na dole) w ciepłej kolorystyce **kremy + espresso + przygaszone złoto**,
z serifem **Cormorant Garamond**.

---

## Uruchomienie

```bash
npm install
npm run dev
```

Vite wskaże adres w terminalu (domyślnie `http://localhost:5173`, a jeśli port jest
zajęty — kolejny wolny). Build produkcyjny:

```bash
npm run build && npm run preview
```

**Wymagania:** Node 18+ (testowane na Node 24).

### Agentation (feedback wizualny)

W trybie `dev` w prawym dolnym rogu działa toolbar **Agentation** — można klikać
elementy strony i zostawiać adnotacje dla agenta. Widoczny **tylko w `dev`**
(`import.meta.env.DEV`), nie pojawia się w buildzie produkcyjnym.

---

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (przez `@tailwindcss/vite`; tokeny w `src/index.css` → `@theme`)
- Fonty z **Google Fonts**: Cormorant Garamond, Inter, JetBrains Mono
- Zero backendu — wszystko statyczne

### Struktura

```
src/
  data/salon.ts        # jedno źródło treści (usługi, zespół, opinie, kontakt…)
  lib/useReveal.ts     # scroll-reveal (IntersectionObserver, respektuje reduced-motion)
  lib/icons.tsx        # zestaw cienkich ikon line-art
  versions/V2.tsx      # layout „Wellness" (autorsko w tokenach sage)
  versions/V3.tsx      # strona finalna: V2 w zakresie `.skin-gold` (kolorystyka złota)
  App.tsx              # renderuje V3 + Agentation
public/images/         # zdjęcia salonu (z profilu Booksy)
```

> **Kolorystyka:** layout napisany jest w neutralnych tokenach (`forest`, `moss`,
> `sage…`), a `.skin-gold` w `src/index.css` przemapowuje je na paletę złoto/espresso.
> Dzięki temu przemalowanie całej strony to jeden blok CSS, bez zmian w markupie.
> Wersja robocza miała też warianty „Editorial" i „Sage" pod przełącznikiem — na
> życzenie klienta zostawiono wyłącznie „Gold Wellness".

---

## ⚠️ Do uzupełnienia przed produkcją

Dane niepotwierdzone w briefie są **placeholderami** i oznaczone w kodzie
komentarzem `// TODO` (patrz `src/data/salon.ts`):

- **Godziny otwarcia** — użyto „pon.–sob. 08:00–20:00, niedz. nieczynne".
  Booksy potwierdza tylko dzisiejsze godziny. → `// TODO: potwierdzić godziny`
- **Telefon** — `+48 000 000 000` (placeholder). → `// TODO`
- **Dane rejestrowe (NIP / nazwa firmy)** — placeholder w stopce. → `// TODO`
- **Role / specjalizacje zespołu** — brief podaje tylko imiona; przypisane role są
  wstępne i wymagają potwierdzenia. → `// TODO`

### Zdjęcia

Wszystkie zdjęcia w `public/images/` pochodzą z **publicznego profilu Booksy**
salonu (CDN Booksy). Są użyte poglądowo w prototypie. **Przed produkcją należy je
zastąpić materiałami, do których klient posiada prawa** (sesja zdjęciowa / własne
zdjęcia wnętrza, zabiegów i zespołu).

### Rezerwacja i mapa

- Wszystkie CTA „Umów wizytę / Zapytaj o voucher / Pełny cennik" linkują do profilu
  **Booksy** (`src/data/salon.ts` → `links.booking`).
- Mapa w sekcji „Kontakt" to osadzony **Google Maps** (embed bez klucza API) na
  podany adres.
