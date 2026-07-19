# Health & Lifestyle Quiz — Audit and Owned Rebuild

Date: 2026-07-19
Owner: Justin the Practice
Audited source: `https://justinthepractice.involve.me/health-lifestyle-quiz`
Replacement: `health-lifestyle-quiz.html`

## What the current quiz does

- It is an answer-based personality quiz with 14 visible steps: one welcome page, 12 required questions, and one outcome page.
- Each answer immediately advances to the next question. There is no visible back navigation.
- Every answer gives one point to one of five outcomes: Body Shaper, Energy Builder, Peak Performer, Health Guardian, or Lifestyle Explorer.
- The outcome with the most points wins. If top outcomes tie, Involve.me shows the outcome connected to the participant's latest answer among the tied outcomes.
- Questions 1, 2, and 4 randomize their answer order; the others keep a fixed order.
- The result gives a profile, strength, challenge, quick win, and a free discovery-call button to Justin's 30-minute Calendly link.
- There is no name, email, or contact field in this quiz flow. Involve.me still hosts the experience and records quiz visits, submissions, answers, outcomes, and response timing in its analytics.

Involve.me documents this as an answer-based outcome model: each mapped answer adds one point, the highest total wins, and the latest tied answer breaks a tie. See [Answer-based Outcomes](https://help.involve.me/en/articles/4667263-answer-based-outcomes) and [Analytics](https://help.involve.me/en/articles/1361207-analytics-access-the-participant-result-data-of-your-funnels).

## Scoring balance

| Outcome | Answer mappings |
| --- | ---: |
| Body Shaper | 12 |
| Energy Builder | 12 |
| Peak Performer | 13 |
| Health Guardian | 11 |
| Lifestyle Explorer | 12 |

Question 8 maps two answers to Peak Performer and none to Health Guardian. That creates a small built-in bias toward Peak Performer. The owned rebuild preserves it so existing results remain comparable.

## Dependencies being removed

- Involve.me hosting, runtime, watermark, submission tracking, and result routing.
- Involve.me's third-party CDN and project configuration.
- Five remote stock-result images.
- The free discovery-call CTA and old Calendly destination.

The replacement keeps answers in browser memory only. It sends no quiz response or personal data anywhere and adds no replacement analytics.

## Wells lens

- Audience: a prospective coaching client who is curious but may not know what kind of support fits.
- User story: As someone unsure where to focus, I want to answer a short set of questions so I leave with a useful health-and-lifestyle profile and one concrete action.
- Use context: about three minutes, usually on a phone, with low patience and mixed confidence.
- Structure: hierarchy — welcome, progress, one decision at a time, result, strength, challenge, quick win, paid next step.
- Accessibility risks: fake radio controls, surprise advancement, invisible focus, color-only scoring, motion, and health guidance that could sound diagnostic.
- Test task: complete all 12 questions by mouse and keyboard, go back without losing answers, receive the expected outcome, restart cleanly, and finish without horizontal overflow.

## Reference and build implication

Mobbin's live search tool was unavailable in this session. The shipped `hyrox-quiz.html` is the stronger project-specific reference: the rebuild reuses its 680-pixel reading column, paper/forest palette, Playfair and Source Sans typography, progress bar, question rhythm, focus treatment, result hierarchy, and reduced-motion behavior.

The replacement removes decorative result images and lets the outcome copy do the work. It keeps answer randomization stable within a run, adds Back and Restart controls, shows the five-point distribution without relying on color, and changes every result CTA to the approved paid Intro Call at `/start` without leading with price.

## Hidden-risk check

- Privacy: pass — no PII collection, tracking, cookies, or external submission in the replacement.
- Accessibility: verify with keyboard, focus, screen-reader structure, reduced motion, and mobile overflow checks.
- Claims: add a plain note that the result is coaching reflection, not medical advice or diagnosis.
- Conversion: the old result routes to a free call. The replacement follows Justin's paid-only direction.
- Publish gate: do not remove Involve.me publicly until the owned quiz and `/start` payment page are both live and verified.

## Proof required

- Automated tests for all five outcomes, tie-breaking, Back, Restart, keyboard flow, and mobile overflow.
- Desktop and mobile screenshots.
- Clean browser console.
- Client leak scan with the approved `$79` offer price disclosed on `/start`, not in button labels.

## Verification completed

- Six automated checks pass for structure, scoring balance, all five outcomes, tie-breaking, answer randomization, and removal of the old hosted/free-call path.
- Browser smoke test completes all 12 questions and returns the expected Lifestyle Explorer result with 12 points.
- Back restores the selected answer, Restart clears the run, and Space/Enter keyboard input advances the form.
- The original 390 × 844 mobile rebuild had no horizontal overflow; the launch branch receives a fresh browser pass before deployment.
- Production quiz files contain no old hosted-quiz or Calendly dependency. The launch branch receives a fresh leak scan before deployment.
