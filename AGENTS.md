# Shortlinkmu Viewer (Technosia) — AGENTS.md

## Quick start

```bash
npm install
npm run dev        # next dev on :3001 (or :3000)
npm run build
npm run lint       # biome check
npm run format     # biome format --write
```

Lint dulu, baru format.

## Arsitektur

- **Next.js 16** (bukan 15 — `next@16.0.8`), React 19.2.1, TypeScript strict
- **Tailwind CSS v4** via `@tailwindcss/postcss` + `@tailwindcss/typography` plugin
- **Biome** (gak pake ESLint/Prettier)
- **FingerprintJS** buat device fingerprint (anti-fraud)
- **Framer Motion** buat animasi

## Routing

Dua route group:

| Group | Layout | Halaman |
|---|---|---|
| `(article)` | Navbar + Footer + InPagePush + Popunder | Home, article/[slug], about, privacy, terms, category pages (teknologi, keuangan, fintech, programming) |
| `(minimal)` | Gak ada layout (standalone) | ad, ad-step2, ad-step3, go, banned, loading |

## Alur Safelink

Ini adalah **Content Locking viewer** — user dicek API backend (`shortlinkapi`) sebelum bisa lanjut ke link tujuan:

1. **Init** — `GET /api/links/{code}` backend balikin session ID + token
2. **Session** — `GET /api/links/session/{sid}` ambil data session (step, ad_level, wait times)
3. **Step validation** — `POST /api/links/{code}/validate-step` validasi akses per step
4. **Step completion** — `POST /api/links/{code}/complete-step` tandai step selesai
5. **Go** — `POST /api/links/{code}/continue` dapetin redirect URL asli

## Komponen utama

- **`SafelinkPanel`** — panel content locking (countdown → scroll → ready). Punya 3 step flow: IDLE → COUNTING → SCROLL → READY
- **`AdClickModal`** — modal step terakhir, user wajib klik iklan N kali
- **`InvisibleDirectLink`** — overlay transparan periodik buat generate ad clicks
- **Ad banners**: `AdBanner`, `AdsterraBanner`, `HilltopAdsBanner`, `VignetteBanner`, `InPagePush`, `Popunder`
- **`TopLoadingBar`** — loading bar (kayak shortlinku)

## Hooks

| Hook | Fungsi |
|---|---|
| `useSession` | Fetch session data dari API (`GET /links/session/{sid}`) |
| `useMonetizationSession` | Kelola session cookie (`slm_session`), init param cleanup, fingerprint attach |
| `useStepValidation` | Validasi step access, redirect kalau invalid |
| `useFingerprint` | Device fingerprint via FingerprintJS |

## Halaman khusus

| Route | Fungsi |
|---|---|
| `/go?s={sessionId}` | Halaman "security check" 2 detik, lalu redirect ke link tujuan |
| `/ad` | Landing page iklan (dummy mode) |
| `/ad-step2`, `/ad-step3` | Step iklan perantara (placeholder) |
| `/banned?reason=...` | Halaman link diblokir (violation) |
| `/loading` | Loading state |

## Env

```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_AD_MODE=dummy   # "live" = real ads, "dummy" = /ad page
```

Ganti ke `NEXT_PUBLIC_AD_MODE=live` buat production — semua ad redirects pake URL affiliate beneran.

## Artikel

Data artikel hardcoded di `src/data/articles.ts` (1668+ baris). Niche: teknologi & finansial Indonesia. Setiap artikel punya slug, content HTML, kategori (Teknologi/Keuangan/Fintech/Programming/Gadget), dan SEO metadata.

Categories didukung routing: `/teknologi`, `/keuangan`, `/fintech`, `/programming` (masing-masing nampilin article list per kategori).

## Catatan

- Gak ada middleware (`src/middleware.ts` gak ada) — pure client-side
- Gak ada i18n — semua konten bahasa Indonesia
- Gak ada state management library (no React Query, no Zustand) — pake `fetch` + `useState` langsung
- Package `clsx` + `tailwind-merge` via `@/lib/utils` (`cn()` helper)
- Meta ads (Monetag) embed di layout metadata (`monetag` key)
- Brand: **Technosia** (technosia.web.id) — portal berita teknologi & keuangan
