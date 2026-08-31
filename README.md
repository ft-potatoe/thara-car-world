# Thara Car World — Website Redesign (Pitch Mock)

A multi-page marketing site for **Thara Car World / Thara Car Detailing** (CR: 217366), a premium
vehicle detailing service at Al Nayef Souq, Ain Khalid, Doha, Qatar. Built as a pitch mock to demonstrate
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

- Hero, gallery, before/after, and services flagship imagery use free stock photos from Unsplash
  (linked directly via `images.unsplash.com`, not stored in the repo) as stand-ins for real shop
  photography — see `components/Hero.tsx`, `components/GalleryGrid.tsx`, `app/page.tsx`, and
  `app/services/page.tsx`. Swap these for real photos of the shop's own work before launch.
- The contact page map is still a generated SVG placeholder (`/public/placeholder-map.svg`) pending
  a real embedded Google Maps location.
- Pricing, working hours, and social links are explicitly marked `[PLACEHOLDER — confirm with client]`
  or similarly flagged in the UI — do not treat them as real business data.
- The booking form does not submit to a backend yet; it shows a mock confirmation state.

Real business facts already wired in: name, CR number, category (Vehicle detailing service), address,
phone, email, the 8 services, the 4-step process, and value props — see `lib/i18n/dictionary.ts`.

## Deploying

Push to a Git provider and import into [Vercel](https://vercel.com/new). No environment variables
are required for this mock.
