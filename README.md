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

Astro wystartuje na `http://localhost:5173` (port ustawiony w `astro.config.mjs`,
żeby zgadzał się z `.claude/launch.json`). Build produkcyjny:

```bash
npm run build && npm run preview
```

**Wymagania:** Node 18+ (testowane na Node 22).

### Panel CMS

`http://localhost:5173/admin/` — panel Decap/Sveltia (statyczny, w `public/admin/`).
Lokalnie treść zapisuje się wprost do plików przez proxy:

```bash
npm run cms   # decap-server na localhost, backend „local_backend"
```

### Agentation (feedback wizualny)

W trybie `dev` w prawym dolnym rogu działa toolbar **Agentation** — można klikać
elementy strony i zostawiać adnotacje dla agenta. Widoczny **tylko w `dev`**
(`import.meta.env.DEV`), nie pojawia się w buildzie produkcyjnym.

---

## Stack

- **Astro + TypeScript** — strona renderuje się statycznie, do przeglądarki nie
  trafia żaden framework runtime (interaktywność to kilka inline'owych `<script>`).
- **React** — tylko jako dev-only wyspa dla toolbara Agentation (`@astrojs/react`).
- **Tailwind CSS v4** (przez `@tailwindcss/vite`; tokeny w `src/styles/global.css` → `@theme`)
- Fonty z **Google Fonts**: Cormorant Garamond, Inter, JetBrains Mono
- Zero backendu — wszystko statyczne

### Struktura

```
src/
  content/salon.json     # jedno źródło treści (edytowane przez /admin)
  lib/salon.ts           # typowany loader tej treści + wyliczany embed mapy
  scripts/reveal.ts      # scroll-reveal (IntersectionObserver, respektuje reduced-motion)
  styles/global.css      # tokeny @theme, warstwa `.skin-gold`, animacje
  layouts/Base.astro     # <head>: meta, fonty, tytuł
  components/
    Icon.astro           # zestaw cienkich ikon line-art (prop `name`)
    Nav.astro            # nawigacja + menu mobilne (inline script)
    BottomBar.astro      # „przyklejony" pasek rezerwacji (inline script)
    Hero / Benefits / About / Services / Gallery / Team /
    Testimonials / Voucher / Contact / Footer  # sekcje strony
    Pill / Kicker / Heading.astro              # elementy współdzielone
  pages/index.astro       # składa całość w zakresie `.skin-gold`
public/images/            # zdjęcia salonu (z profilu Booksy)
public/admin/             # panel CMS (Decap/Sveltia)
```

> **Kolorystyka:** layout napisany jest w neutralnych tokenach (`forest`, `moss`,
> `sage…`), a `.skin-gold` w `src/styles/global.css` przemapowuje je na paletę
> złoto/espresso. Dzięki temu przemalowanie całej strony to jeden blok CSS, bez
> zmian w markupie. Wersja robocza miała też warianty „Editorial" i „Sage" pod
> przełącznikiem — na życzenie klienta zostawiono wyłącznie „Gold Wellness".

---

## ⚠️ Do uzupełnienia przed produkcją

Dane niepotwierdzone w briefie są **placeholderami** w `src/content/salon.json`
(hinty w panelu `/admin/` — patrz `public/admin/config.yml`):

- **Godziny otwarcia** — użyto „pon.–sob. 08:00–20:00, niedz. nieczynne".
  Booksy potwierdza tylko dzisiejsze godziny.
- **Telefon** — `+48 000 000 000` (placeholder).
- **Dane rejestrowe (NIP / nazwa firmy)** — placeholder w stopce.
- **Role / specjalizacje zespołu** — brief podaje tylko imiona; przypisane role są
  wstępne i wymagają potwierdzenia.

### Zdjęcia

Wszystkie zdjęcia w `public/images/` pochodzą z **publicznego profilu Booksy**
salonu (CDN Booksy). Są użyte poglądowo w prototypie. **Przed produkcją należy je
zastąpić materiałami, do których klient posiada prawa** (sesja zdjęciowa / własne
zdjęcia wnętrza, zabiegów i zespołu).

### Rezerwacja i mapa

- Wszystkie CTA „Umów wizytę / Zapytaj o voucher / Pełny cennik" linkują do profilu
  **Booksy** (`src/content/salon.json` → `business.links.booking`).
- Mapa w sekcji „Kontakt" to osadzony **Google Maps** (embed bez klucza API) na
  podany adres.
