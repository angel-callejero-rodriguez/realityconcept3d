# Reality Concept 3D

Redesigned from [angel-callejero-rodriguez/realityconcept3d](https://github.com/angel-callejero-rodriguez/realityconcept3d). The original commit history is preserved.

A Portuguese-language website for furniture 3D modelling and augmented reality. Built with Next.js App Router, React, TypeScript, Tailwind 4, and Google's model-viewer.

## Run locally

Requires Node.js 20.19+ (Node 24 used for verification).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run build
npm start
```

The repository also includes an updated pnpm lockfile. TypeScript validation runs during production builds.

## Main files

- `app/page.tsx`: page composition.
- `components/home-experience.tsx`: benefits, process, comparison demo, FAQ, and model deep links.
- `components/hero.tsx`: two-column hero with click-to-activate 3D.
- `components/interactive-product.tsx`: explicit activation and rotation, with normal page scrolling.
- `components/roi-calculator.tsx`: illustrative conversion scenarios calculated locally.
- `app/contacto/page.tsx`: dedicated demonstration enquiry page.
- `components/model-viewer.tsx`: client-only 3D runtime, real material variants, loading/error states.
- `components/experience-dialog.tsx`: accessible native modal, device-aware AR, locally generated QR handoff.
- `components/contact-form.tsx`: Web3Forms contact flow, browser validation, timeout and retry states.
- `components/cookie-banner.tsx`: consent storage, preference controls, consent-gated production analytics.
- `app/globals.css`: the visual system and responsive/reduced-motion rules.

## Content and integrations

The site preserves the existing Web3Forms public access key and business email. No new account or backend is required. Web3Forms sends the actual enquiry; its receiving account and delivery configuration remain external to this repository. Browser QA uses intercepted responses and does not send real enquiries.

AR is provided by model-viewer through WebXR, Android Scene Viewer, and iOS Quick Look on supported devices. Desktop users get a QR code pointing to the current site with `?modelo=atelier` or `?modelo=mesa`. Open the deployed public URL for a QR code that can be reached by another device; a localhost QR code only points to that device's own localhost. Camera and AR hardware behaviour requires a compatible physical phone and HTTPS.

The impact calculator is an illustrative scenario tool, not a promise of conversion or revenue. No Shopify or WooCommerce app, store connector, or customer account is implied by this marketing website.

## Asset provenance

See `docs/assets.md` and `/creditos` for model attribution and the generated architectural background. The visible furniture is explicitly labelled as demonstration content, not client work.

## Verification

Production build and TypeScript checking; visual browser inspection at desktop, tablet, and narrow mobile widths; model loading and material switching; non-blocking hero scrolling; 3D modals and QR handoff; deep links; Escape/focus restoration; mobile navigation; calculator and FAQ controls; contact form validation and mocked error/success; cookie preferences; legal pages; reduced-motion behaviour. The hero is still until clicked. Rotation then responds to drag or keyboard controls. Zoom is disabled across viewers. Actual email delivery and physical-device AR are external checks.
