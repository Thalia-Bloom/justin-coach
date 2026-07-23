# Justin Coach — justinthepractice.com

## What This Is
Client website for Justin's coaching business. Static HTML/CSS/JS hosted on GitHub Pages. **This is a live client site — changes deploy immediately on push to main.**

## Current State
- **Status**: Live, production
- **Last worked on**: 2026-07-23
- **Deploy branch**: main (auto-deploys via GitHub Pages)
- **Live URL**: justinthepractice.com
- **Repo**: Thalia-Bloom/justin-coach
- **Local draft**: backflip homepage bridge, homepage-only Heathrow testimonial, mobile-first PNW river `/start` hero, $79 Intro Call path with a quiet self-guided resource exit, and owned Health & Lifestyle quiz; not deployed
- **2026-07-23 cohesion pass** (branch `codex/justin-jul19-launch`): every page now shares the sand/Playfair/Source Sans system. Programs ×3, old resource pages ×3, and submit-testimonial ported off the legacy EB Garamond/Inter look; all fake demo alerts removed (program checkouts → Intro Call, email-gated PDFs → honest "in the works" + Circadian PDF, pattern quiz → owned quiz, testimonial form → copy-and-send handoff). Resources library rebuilt: Ready Now (3 working tools incl. both quizzes) / Training Programs / quiet In-the-Works list — no dead Coming Soon buttons. Homepage: dead contact modal removed, focus-visible + reduced-motion + OG tags added, footer Resources link.

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
- The bottom of `/start` offers three working self-guided tools plus a link to the full resource library; it does not offer a free coaching path
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
- Verify email capture integration in quiz (may need webhook/Zapier)
- Confirm with Justin before any future changes
- Publish and verify `/start` with payment before deploying the paid-only homepage draft
- Replace the public Involve.me quiz only when the owned quiz and `/start` are both deployed and verified
- Launch brief and QA boundary: `docs/2026-07-19-paid-intro-launch-brief.md`

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
