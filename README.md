# Thara Car World — Website Redesign (Pitch Mock)

A multi-page marketing site for **Thara Car World / Thara Car Detailing** (CR: 217366), a premium
auto detailing business at Al-Nayef Souq, Shop-32, Doha, Qatar. Built as a pitch mock to demonstrate
a "dark automotive luxury" visual identity — dark carbon/charcoal base, chrome-gradient headlines,
ceramic-blue glow accents, and motion-rich interactions.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, hover tilt, page transitions, light-sweep)
- Deployable to Vercel as a static/mostly-static build

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home (hero, stats, featured services, process timeline, why-choose-us, before/after slider, CTA)
- `/services` — Full service grid + Ceramic Coating flagship hero + package tiers
- `/gallery` — Filterable masonry gallery with lightbox
- `/book` — Booking form + WhatsApp quick-book
- `/contact` — Contact details, map placeholder, socials

## Bilingual (EN/AR)

Language toggle in the nav/footer switches all copy and flips to RTL layout (`lib/i18n/`).
Locale preference persists in `localStorage`.

## Placeholder content

This is a **design pitch**, not production content:

- All photography is a generated SVG placeholder (`/public/placeholder-*.svg`) with a code comment
  at each usage site noting what real asset should replace it.
- Pricing, working hours, and social links are explicitly marked `[PLACEHOLDER — confirm with client]`
  or similarly flagged in the UI — do not treat them as real business data.
- The booking form does not submit to a backend yet; it shows a mock confirmation state.

Real business facts already wired in: name, CR number, address, phone, email, the 8 services, the
4-step process, and value props — see `lib/i18n/dictionary.ts`.

## Deploying

Push to a Git provider and import into [Vercel](https://vercel.com/new). No environment variables
are required for this mock.
