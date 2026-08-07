# Thalassa Seychelles — Website Rebuild

A premium, from-scratch rebuild of thalassaseychelles.com — a React + Vite +
Tailwind CSS site with Framer Motion animation, Lenis smooth scroll, and
React Router.

The old WordPress/template site was used **only as a content source** (rooms,
amenities, address, review-style copy, photography). The design, layout,
components and code are entirely new.

## Tech stack

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion (page/scroll animation, micro-interactions)
- Lenis (smooth scroll)
- React Router v7
- React Icons

## Getting started

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, Button, ApartmentCard,
                   ReviewCard, FeatureCard, FAQItem, Lightbox, Stat
                   (animated counters), MapEmbed, WaveMark, TideDivider,
                   Reveal (scroll-in animation wrapper), etc.
  pages/          Home, Apartments, ApartmentDetail, Gallery, Explore,
                   Contact, NotFound
  data/content.js Single source of truth for site copy, images, apartment
                   data, amenities, reviews, FAQs, and explore-Seychelles
                   listings. Edit this file to update site content.
  lib/useLenis.js Smooth-scroll hook (respects prefers-reduced-motion)
```

## Design system

- **Colors** (Tailwind theme, see `tailwind.config.js`): `navy`, `teal`,
  `aqua`, `sand`, `fog` — derived from the Thalassa logo's teal/cream
  palette. No purples, neons, or off-brand colors.
- **Type**: Fraunces (display serif, headings) + Plus Jakarta Sans (body) +
  Space Grotesk (eyebrows/labels), loaded via Google Fonts in `index.css`.
- **Signature motif**: a "tide line" wave — echoing the logo's wave marks —
  used as section dividers (`TideDivider`) and a small mark (`WaveMark`) on
  the CTA section.
- **Logo** (`components/Logo.jsx`): the real Thalassa wave mark, traced from
  the brand logo file and rebuilt as inline SVG paths using `currentColor`,
  so it adapts to the navbar's transparent/solid state and the footer's dark
  background instead of shipping a flat raster file that only reads
  correctly on one background color. The favicon (`public/favicon.svg`) uses
  the same mark on a navy roundel.

## Booking widget & STAAH rates

The home page includes a date-range + guest-count widget right under the
hero (`components/BookingWidget.jsx`) that calls `lib/staah.js` →
`getRates()`. That function is written in the real integration shape STAAH
expects, but a STAAH API key is a server-side secret and must never ship in
client JS — see the comments in `src/config.js` and `src/lib/staah.js` for
exactly how to wire a backend proxy. Until that backend exists, it returns a
clearly-labelled local estimate (visible to visitors as "indicative rates")
so the UI is fully demoable today; flip `result.source` to `"live"` once the
real endpoint is in place.

## Content & images

Copy has been rewritten in an original voice from the source site's facts
(location, room types, amenities, GSC Hospitality background, etc). Photos
currently reference the property's existing photo library
(`homesweb.staah.net`) so the site launches with real imagery — swap the
URLs in `src/data/content.js` → `images` for your own hosted assets
whenever you're ready (e.g. move them into `public/images/` and update the
paths).

## Notes for a production launch

- The Contact page form is currently client-side only (no backend) — wire
  `handleSubmit` in `src/pages/Contact.jsx` to your email/CRM endpoint.
- The STAAH rates widget needs a backend proxy before it can show real
  prices — see "Booking widget & STAAH rates" above.
- `Book Now` buttons link to the existing SwiftBook booking engine URL from
  the source site — replace with your preferred booking system if it
  changes.
- Google Maps embed uses a generic Beau Vallon query string in
  `MapEmbed.jsx` — swap in a Place ID or exact coordinates for pinpoint
  accuracy.
- Run a Lighthouse pass after pointing image URLs at an optimized/CDN host
  (e.g. converting to WebP, adding `srcset`) to hit the >95 performance
  target once you're not relying on the legacy CDN's originals.
