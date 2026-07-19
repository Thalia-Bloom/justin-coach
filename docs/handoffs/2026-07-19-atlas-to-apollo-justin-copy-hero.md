# justin-coach Handoff - 2026-07-19 - Atlas to Apollo

Closure: `7719c83585c8`
Linear: not created
Repo: `/Users/heathrowandrews/justin-coach`
Owner now: Apollo
Status: Ready
Risk: low
Intent: intent:bloom-business
Stop/ask: Stop before any deploy, push to `main`, payment-provider change, new public claim, or change to approved testimonial facts.

## Result

- The local funnel now has one owned path from homepage or Health & Lifestyle quiz to a staged `/start` page for Justin's paid Intro Call.
- The homepage keeps the forest-to-backflip blend and approved Heathrow testimonial. The Intro Call page explains payment before booking and safely disables payment until Justin supplies a public Stripe Payment Link.
- Three automated suites pass. Mobile and desktop browser checks, local-link checks, keyboard dialog behavior, motion controls, and console checks are green.

## Needed

- Take one human-copy pass across the public homepage and Intro Call page. Make the writing plain, warm, specific, and recognizably Justin, without polishing it into generic sales copy.
- On the 390px homepage, remove the large empty fog area between the navigation and the eyebrow by moving the hero text block upward into the upper tree area. Preserve legibility, the tree-to-backflip blend, and desktop composition.
- Run the Professional Human Copy Editor truth lock and Bloom Claims Sentinel review before calling the copy ready.

## Done Means

- The mobile hero uses the available tree area instead of presenting a large empty band, while the copy remains readable and the backflip transition stays seamless.
- Homepage and `/start` read naturally aloud, keep the single paid action clear, and introduce no unsupported health, outcome, pricing, or testimonial claim.
- All tests pass and fresh 390px plus desktop screenshots show zero console errors or warnings.

## Context

- Heathrow's exact visual feedback: "Feel like too much black space, can we move the text below up high to live in the trees here?" The selected area was the upper fog/tree region of the mobile hero.
- His follow-up asked Claude to make the copy more human-readable. His final phrase cut off after "feel m"; do not infer a larger redesign from that fragment.
- Locked facts: the Intro Call is 60 minutes and $79; price appears on `/start`, not homepage/quiz buttons; payment comes before booking; Justin sends a personalized written recap; there is no free pathway; the payment link remains blank; testimonial quotes and numbers remain unchanged.
- This is the existing feature branch `codex/justin-jul19-launch`. Work in place and return it for Atlas review. Do not deploy or push `main`.

## References

- Intent charter: N/A
- Wells lens: warm lead on a phone, two to four minutes, one clear paid first step; hierarchy is promise, included value, sequence, proof, action; motion and focus controls must remain accessible.
- Mobbin refs: unavailable in the prior Codex session; preserve the approved Justin visual system rather than introducing a new pattern.
- Build preflight: `docs/2026-07-19-paid-intro-launch-brief.md` contains People, Future, Surface, References, Hazards, proof, and stop boundary.
- Hazard tags: public health-adjacent copy, approved testimonial, payment handoff, live client auto-deploy from `main`.
- Jimmy lane: bounded to `index.html`, `start.html`, and directly related tests/docs; proof command is `node --test tests/*.test.cjs`; stop before provider or deployment changes.
- Sources carried: `CLAUDE.md`, `docs/2026-07-19-paid-intro-launch-brief.md`, `docs/health-lifestyle-quiz-audit.md`, and the local pages at `http://127.0.0.1:3002/index.html` and `http://127.0.0.1:3002/start/`.

## Files

- `index.html` - homepage hero layout, core copy, backflip bridge, testimonial, and CTA.
- `start.html` - paid Intro Call explanation and staged Stripe handoff.
- `start-config.js` - must keep `paymentUrl` blank.
- `tests/start-flow.test.cjs` - locked offer facts and safety boundary.
- `docs/2026-07-19-paid-intro-launch-brief.md` - build intent, claims boundary, and QA receipt.

## Verification

- Baseline: `node --test tests/*.test.cjs` passes 3 suites; `git diff --check` passes; Stripe secret-bearing file count is zero.
- Browser sizes: mobile 390 by 844 and a desktop viewport; inspect homepage top, tree/backflip seam, `/start`, motion controls, and testimonial keyboard flow.
- Client-facing scan: `/Users/heathrowandrews/Projects/agent-orchestration/bin/client-leak-scan/scan.sh /Users/heathrowandrews/justin-coach justin`; approved offer/program prices are expected findings.

## Blockers

- The public Stripe Payment Link and successful-payment booking destination do not exist in the repo. They are out of scope for this pass.
- Justin has not confirmed reschedule/no-show policy wording, so keep it out of public copy.

Blocking question: None. Make the bounded copy and mobile-layout pass, then return proof for review.
