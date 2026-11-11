# Reality Concept 3D

> 🇵🇹 Site da Reality Concept 3D, um estúdio do Porto que leva os móveis das lojas para 3D e realidade aumentada.

**Live:** [realityconcept3d.com](https://www.realityconcept3d.com)

Reality Concept 3D is a small startup from Porto, Portugal. We turn furniture stores' products into 3D models that shoppers can rotate on the product page and, on a phone, place in their own room at real size with augmented reality (AR).

This repository is the company website: the marketing site, the contact flow and the private demo pages we build for each store we talk to.

![Reality Concept 3D website](public/images/social-cover.jpg)

## What it does

- **Interactive 3D on the page.** Furniture models load on click, rotate with drag or keyboard and switch between real material variants.
- **AR on any phone.** One button opens WebXR, Android Scene Viewer or iPhone Quick Look. Models are locked to real-world scale, so a 79 cm chair stays 79 cm.
- **Desktop to phone handoff.** On a computer, the AR button shows a QR code that opens the same model on the phone.
- **Private store demos.** `/demo/<token>` pages show a store its own product in 3D and AR. Tokens are random, the pages are `noindex` and they are not linked anywhere.
- **Contact flow.** A validated enquiry form with timeout and retry states.
- **Privacy by default.** Cookie consent with preferences; analytics only load after consent.
- **Search ready.** Per-page metadata, JSON-LD structured data (organization, service, FAQ), sitemap, `robots.txt` and `llms.txt` for AI search engines.

## How it fits together

```
 realityconcept3d.com (this repo)          ar.realityconcept3d.com (rc3d-server)
 ────────────────────────────────          ─────────────────────────────────────
 Next.js site on Vercel                    Static 3D/AR server on Vercel
   • marketing pages        ── models ──▶    • .glb models + registry
   • /demo/<token> pages    ── demos  ──▶    • demo data (d/<token>.json)
   • contact form                            • embeddable widget for store sites
```

The 3D and AR server lives in its own repository, [rc3d-server](https://github.com/angel-callejero-rodriguez/rc3d-server). It also has a one-line widget that any store website (WooCommerce, Shopify, Squarespace or hand-made) can paste in.

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4**
- **Google model-viewer** for 3D and AR
- **Vercel** for hosting and analytics
- **Web3Forms** for contact form delivery

## Project structure

| Path | What it is |
|---|---|
| `app/page.tsx` | Home page composition |
| `app/demo/[token]/page.tsx` | Private store demo pages |
| `app/contacto/` | Contact page |
| `app/robots.ts`, `app/sitemap.ts` | Search engine files |
| `components/hero.tsx` | Hero with click-to-activate 3D |
| `components/home-experience.tsx` | Benefits, process, comparison demo, FAQ and model deep links |
| `components/model-viewer.tsx` | Client-only 3D runtime, material variants, loading and error states |
| `components/experience-dialog.tsx` | Accessible modal with device-aware AR and QR handoff |
| `components/roi-calculator.tsx` | Demo video section (the file keeps its original name) |
| `components/contact-form.tsx` | Contact form with validation, timeout and retry |
| `components/cookie-banner.tsx` | Consent storage and preferences |
| `lib/demos.ts` | Loads store demos from rc3d-server |
| `app/globals.css` | Visual system, responsive and reduced-motion rules |
| `docs/` | Design notes, asset credits and verification checklist |

## Run locally

Requires Node.js 20.19 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production build:

```sh
npm run build
npm start
```

AR needs HTTPS and a compatible phone, so test it on the deployed URL. A QR code generated on localhost only points to that computer.

## Assets and credits

Demo furniture comes from open-licence sources (CC0 and CC BY) or was modelled for the company. Details are in [`docs/assets.md`](docs/assets.md) and on the site's [/creditos](https://www.realityconcept3d.com/creditos) page.

## Author

Built by **Angel Rodriguez**, founder of Reality Concept 3D.
