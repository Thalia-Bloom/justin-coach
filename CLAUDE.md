# Justin Coach — justinthepractice.com

## What This Is
Client website for Justin's coaching business. Static HTML/CSS/JS hosted on GitHub Pages. **This is a live client site — changes deploy immediately on push to main.**

## Current State
- **Status**: Live, production
- **Last worked on**: 2026-07-23
- **Deploy branch**: main (auto-deploys via GitHub Pages)
- **Live URL**: justinthepractice.com
- **Repo**: Thalia-Bloom/justin-coach
- 2026-07-23 (later, Apollo): **Icon pack + booking intake shipped to the branch.** `icons.svg` = 19-symbol two-tone sprite (ink stroke, clay accent) — implemented on all six resource-library cards, all three program heroes, and the /intro how-it-works strip (steps reordered: questions now come at booking, before the calendar). `checkout.html` collects name/email/optional phone plus three pointed questions; answers land in Justin's Calendly booking via `name`/`email`/`a1` URL prefill (a1 = the event's first custom question — Calendly's default "share anything" question catches it; when Justin creates the 60-min Intro Call event, tell him to keep at least one invitee question). Tests: `tests/icons-and-intake.test.cjs` + sharpened no-card-fields guard; all 4 suites green; Playwright desktop+mobile verified.
- **Branch `codex/justin-jul19-launch` = the full 2026-07-23 redesign, LIVE-READY, all pushed.** Whole site on the sand/Playfair system with honest CTAs; cinematic hero → backflip landing; icon principle cards; dashed map-route trail lines; paid path at `/intro` (old `/start` redirects) in Justin's first-person voice, order: hero → starting-point map route + Book Intro Call panel → compact how-it-works strip; founding-period flow: Book Intro Call → `checkout.html` ($0 due today, no card fields, test-locked) → check-off animation → Justin's Calendly (Clarity Call event, `start-config.js bookingUrl`); footer QR = tap-to-enlarge lightbox. Heathrow drove and approved the flow 2026-07-23 but session ended **without the explicit "push it" — main is untouched, site not yet deployed.**

## Stack & Architecture
- Pure static HTML/CSS/JavaScript — no build tools, no frameworks
- GitHub Pages hosting (CNAME configured)
- Google Fonts (DM Sans, Playfair Display)
- Design system: 8px spacing, purple accent (#7C3AED)

### Key Files
- `index.html` — Homepage (1,451 lines): hero, programs, resources, CTAs
- `hyrox-quiz.html` — Interactive Hyrox Readiness Quiz (906 lines, built by Sprout bot)
- `health-lifestyle-quiz.html` — Owned 12-question Health & Lifestyle quiz experience
- `health-lifestyle-quiz.js` — Quiz content, source scoring map, and tie-breaking logic
- `start.html` / `start/` — Paid Intro Call handoff; public Stripe Payment Link is configured in `start-config.js`
- `submit-testimonial.html` — Testimonial capture form
- `programs/` — 3 program pages (hyrox-prep, minimal-equipment, strength-structure)
- `resources/` — 5 resource pages (5-day-reset, morning-recentering, pattern-quiz, etc.)
- `CNAME` — Domain config for justinthepractice.com

## Decisions Made
- Static site, no framework — keeps it simple, fast, zero maintenance
- Sprout bot builds features (quiz, etc.) — commits show "Sprout:" prefix
- Programs priced at ~$67 range
- Homepage conversion is one paid path: the $79 Intro Call
- 2026-07-23 Heathrow: the paid page lives at `/intro` (old `/start` redirects); it ends on the payment path with NO free-resource exit — checkout is the last thing a visitor goes through. Free tools live only in the resources library
- Quizzes remain available as background coaching tools but are not public homepage pathways
- The `/start` page uses the PNW river loop; personal testimonial stories stay on the homepage testimonial section
- Health & Lifestyle answers stay in browser memory only; no PII, analytics, or third-party quiz runtime

## Known Issues & Gotchas
- **DO NOT push carelessly** — this is a live client site, changes go live immediately (main only; branches are safe)
- Email/lead capture is not production-backed yet: Hyrox quiz stores leads in browser `localStorage`. Demo alerts are gone as of 2026-07-23 — every CTA is now an honest link or an explicit "in the works" state
- Justin manages his own site content — coordinate before making changes

## Error Log
(No errors logged yet)

## What's Working
- Homepage renders cleanly with responsive design
- Hyrox Readiness Quiz: 17 questions, weighted scoring across 9 dimensions, personalized results
- Owned Health & Lifestyle quiz: 12 questions, five outcomes, paid-only next step
- All program and resource pages functional
- Domain properly configured and serving

## Next Steps
1. **Deploy on Heathrow's "push it": merge `codex/justin-jul19-launch` → `main`, push (GitHub Pages auto-deploys), verify justinthepractice.com live.** Justin approved going live 2026-07-23; Heathrow drove the flow and approved it, but the explicit deploy go was not given before session end — ask, don't assume.
2. Swap `start-config.js bookingUrl` to Justin's 60-minute "Intro Call" Calendly event when he creates one (currently his 30-min Clarity Call — Heathrow chose ship-now-fix-later). Stripe email draft to Justin still pending send.
3. When Justin's Stripe Payment Link arrives: paste into `paymentUrl` — it supersedes the booking flow automatically, restores "Pay, then book", and checkout.html retires itself.
- Verify email capture integration in quiz (may need webhook/Zapier)
- Launch brief and QA boundary: `docs/2026-07-19-paid-intro-launch-brief.md` (payment-first model amended 2026-07-23 by Heathrow+Justin: founding-period free booking allowed pre-Stripe)

## Handoffs
_Kyle (frontend) ↔ Atlas (backend) coordination. Add dated entries as work crosses domains. Thalia reads this for status._

### Atlas — 2026-05-26
Packet: Bloom Bot health check, dated 2026-05-26.
Status: Sprout repair shipped; WHOOP and core Google now pass from Sprout. Remaining gaps are NotebookLM browser auth, expanded Gmail inbox scope if needed, empty model-turn watch, and demo-only lead capture.

<!-- Template:
### Kyle → Atlas — YYYY-MM-DD
**Done:** what shipped, branch, deploy URL
**Needed:** endpoint shape, data contract, gotchas
**Context:** files, links

### Atlas → Kyle — YYYY-MM-DD
**Done:** backend state, schema, env vars
**Needed:** UI pieces still pending
-->
