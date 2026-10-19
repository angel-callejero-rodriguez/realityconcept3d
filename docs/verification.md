# Verification — 18 October 2026

## Layout and rendering

- Inspected the supplied Augmenta Portuguese homepage in a real browser at 1440 × 1000, including every section after scrolling into view.
- Recreated the fixed navigation, two-column hero, dark benefits section, process cards, calculator, photo/3D comparison, FAQ, final invitation and column footer using Reality Concept's palette and own copy.
- Desktop hero measures approximately 958px, compared with 963px in the reference. All sections stay in normal document flow; no sticky chair or room transition remains.
- Inspected desktop (1440 × 1000), tablet (768 × 1024), mobile (390 × 844) and narrow mobile (320 × 760). No horizontal overflow was found. On mobile, the hero stacks its copy and model vertically, following the reference structure.
- Contact form moved to `/contacto`; all existing legal/credit pages remain available. Homepage, contact, legal pages and both featured GLB assets return HTTP 200.

## 3D interaction

- The hero and comparison model start with camera controls disabled and their custom elements inert. An explicit click or keyboard activation enables rotation. Escape or “Terminar” disables interaction and restores focus to the activation control.
- Automatic turntable code was removed. Camera orbit and turntable rotation stayed identical during the initial still-state check.
- Activated drag changed the hero camera theta from -0.489 to -2.059 radians. Wheel input over the same activated viewer moved the page 450px without changing its camera radius (3.4916) or field of view (30°). Wheel input before activation also scrolled the page 450px.
- Zoom is disabled on every viewer, including the modal; panning is disabled and vertical touch gestures remain available for scrolling.
- Full-view modal, desktop QR generation, nested Escape handling and opener-focus restoration work. Actual AR camera behaviour still requires a compatible physical device and public HTTPS URL; localhost QR links are not reachable from another device.

## Functional and accessibility checks

- Calculator updates with scenario selection and keyboard slider input: default +40% gives 80 projected orders / €12,000 monthly; +20% gives 40 / €6,000; changing visitors to 11,000 gives 44 / €6,600. Scenarios are explicitly illustrative, with the formula and exclusions disclosed.
- FAQ expansion, mobile navigation, Escape-to-close and menu-focus restoration pass. Reduced-motion mode removes entrance animation and smooth scrolling.
- Contact form rejects missing required fields. A mocked success sent exactly one intercepted request and displayed confirmation. No real enquiry was sent; mailbox delivery is external to this check. Existing submission, error/retry and consent logic is preserved.
- Automated axe-core checks against WCAG 2 A/AA and 2.1 AA found no violations on the homepage and contact confirmation state. This is an automated scan, not comprehensive accessibility certification.
- Production compilation and TypeScript validation pass (`npm run build`). `git diff --check` passes. The final healthy production browser session reports no runtime errors.

Local production preview: http://127.0.0.1:3001/.

## Live contact test — 19 October 2026

- Fetched the owner's upstream repository before the test. The latest contact fix is `d8cc8b5531475b2325e5b33f102fcf3bac6a38a1`, already present in this fork's history. The current form retains its direct browser POST, provider endpoint, account key and required enquiry fields.
- The user explicitly authorized one real test enquiry. Exactly one POST was attempted from the actual redesigned form at `http://127.0.0.1:3001/contacto`, without mocking the provider response. No live retry was made.
- Subject: `Novo Pedido de Demo: TESTE DO FORMULÁRIO — IGNORAR`. Message reference: `RC3D-CONTACT-20261019-01`. All visitor details were explicitly marked as test data; the reply-to address was the non-deliverable example address `qa@example.com`.
- Browser fetch rejected with `TypeError: Failed to fetch`. Chrome's diagnostic log identifies `CorsIssue / MissingAllowOriginHeader` on that exact POST: the response did not include an `Access-Control-Allow-Origin` header for the local origin.
- The form correctly displayed its error state and preserved the entered values. No provider success response was observable. This does not establish whether the provider processed the message, so the recipient must check the inbox/spam folder before another live submission is attempted.
- The root cause of the provider's missing header is unconfirmed. The official troubleshooting documentation supports browser-side FormData submission, which this form already uses: https://docs.web3forms.com/getting-started/troubleshooting . No speculative delivery-code change was made.
