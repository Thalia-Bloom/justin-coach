# Justin Paid Intro Launch Brief

Date: 2026-07-19
Owner: Heathrow Andrews
Client: Justin the Practice

## Build preflight

- People: a referral or site visitor who is interested in Justin but not ready to choose a long coaching program.
- Future: one calm path from trust to a paid Intro Call, with no free access to Justin's time.
- Surface: homepage CTAs, owned Health & Lifestyle quiz result, and `/start`.
- Prior art: the approved homepage draft, owned quiz, and the earlier `codex/justin-start-prototype` start page. Bloom Map returned no additional matching build.
- Hazards: live client site, GitHub Pages auto-deploy from `main`, payment-provider secrets, health-adjacent intake data, and an unconfirmed reschedule/no-show policy.
- Lane: one static-site branch. No public deploy, provider mutation, secret handling, or production payment change in this slice.
- Proof: automated quiz tests, link scan, desktop/mobile Playwright path, accessibility checks, clean console, and client leak scan.
- Stop/ask: production Stripe link, booking destination, email delivery, policy copy, and public deploy require explicit approval or client-owned configuration.

## Wells lens

- Audience: a warm lead, often arriving from a conversation or QR card.
- User story: As someone who trusts Justin but does not know the right coaching plan, I want one useful paid first session so I can understand my next step without committing to a long program.
- Use context: mostly phone, two to four minutes, cautious but interested, likely comparing the cost with the value of direct access to Justin.
- LATCH structure: hierarchy. Promise, what the session includes, what happens next, trust proof, then one action.
- Content type: narrative first, then a short process.
- Accessibility risks: video motion, low-contrast text over imagery, unclear disabled checkout state, missing focus management, and health copy that could sound diagnostic.
- Test task: from homepage or quiz result, reach `/start`, understand the session length and deliverables, locate the price, and attempt the secure payment handoff without encountering a dead link.

## Visual and interaction thesis

- Visual thesis: quiet forest tones, real outdoor movement, and generous space should make the paid session feel grounded and personal rather than transactional.
- Content plan: single promise, session value, three-step path, Heathrow proof, final action.
- Interaction thesis: restrained hero entrance, clear hover/focus feedback, and reduced-motion support. No slot picker or simulated checkout.

## Reference evidence

- Project reference: the live Justin homepage supplies the approved forest, paper, clay, Playfair, and Source Sans system.
- Project reference: the owned Health & Lifestyle quiz supplies the one-decision-at-a-time rhythm and mobile reading width.
- Prior prototype: `codex/justin-start-prototype` proved the visual direction but was rejected as too complex because it offered multiple sessions and fake appointment slots.
- Mobbin: the MCP is enabled locally but not exposed to the Codex app in this session. No proprietary layout is being copied; this build narrows an existing approved client surface instead of inventing a new system.

## Build implication

- Keep one offer: a 60-minute Intro Call for $79.
- Explain the deliverable before asking for payment: live assessment, clear next step, and a personalized written recap after the call.
- Use payment before booking. Do not simulate time slots or claim checkout works until Justin's client-owned Stripe and booking links are configured.
- Do not show the price in homepage or quiz button labels. Show it clearly on `/start` before the payment handoff.
- Keep the owned quiz and HYROX assessment as optional background tools, not competing hero actions.
- Keep testimonial submission private; show only approved proof publicly.
- Defer the owner dashboard, recurring payment plans, automated email, and policy language until the real launch path and client choices are available.

## Wells verification

### Crampton Smith checks

- Mental model: pass. The page follows the expected pay, book, prepare, meet sequence.
- Feedback: pass for the staged state. The disabled payment action explains exactly what is still being connected.
- Navigability: pass. Homepage and quiz both reach `/start`, and every local link resolves.
- Consistency: pass. Type, color, spacing, buttons, forest imagery, and motion match the approved site.
- Intuitive use: pass. One offer, one price, one next action; no simulated calendar or checkout.
- Responsive use: pass at 390px and desktop widths with no horizontal overflow.

### Accessibility checks

- Contrast, headings, landmarks, grouping, predictable order, link purpose, focus visibility, and non-color status cues: pass in browser review.
- Input labels: not applicable on `/start`; it contains no form fields.
- Motion: pass. The decorative video has pause/play control and honors reduced-motion preference.
- Keyboard dialog behavior: pass. Focus enters the testimonial, stays on its only control, closes with Escape, and returns to the trigger.
- Skip navigation: pass on `/start`.

### Launch boundary

- Automated tests: all three suites pass, including quiz behavior, the paid path, and every local HTML asset/link.
- Browser proof: homepage, `/start`, and quiz pass desktop/mobile checks with zero console errors or warnings.
- Client leak scan: the approved offer prices are the only public-copy findings; an internal absolute path was removed.
- Public deployment remains blocked until Justin supplies a public Stripe Payment Link that redirects successful payment to his 60-minute booking calendar.
- Reschedule/no-show language remains omitted until Justin confirms the policy.
