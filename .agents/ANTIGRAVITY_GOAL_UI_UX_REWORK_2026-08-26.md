# Agent goal: Full UI/UX rework — kill the "vibecoded, AI-generated" feel (2026-08-26)

**Repo:** Grand Blanc Computer Science Honor Society (GBCSHS) website.
**App code:** `artifacts/gbcshs/` (Vite + React 19 + Tailwind v4 + shadcn/Radix UI + wouter router).
**Live site:** deploys automatically to GitHub Pages (`https://coderjt-elite.github.io/APCSHS-Website/`)
on every push to `main`, via `.github/workflows/deploy.yml`. There is no staging/preview branch for
this repo — see "How this ships" at the bottom before you do anything with git.

This file works as a goal prompt for either Replit's own Agent (if you're running inside this
Repl — you'll already have a live webview open, so just start working and John will watch it
update) or Antigravity/another coding agent working a local clone (in that case, run
`pnpm --filter @workspace/gbcshs run dev` and keep it running so changes are visible at
`localhost` throughout, not just at the end).

---

## The actual brief, in John's words

"Mainly UI/UX, make it friendlier/less vibecoded and AI generated feel. A complete rework."

This needs to be taken literally: **a real redesign, not a color-swap.** Below is a concrete list
of exactly what currently reads as generic/AI-template, verified by reading the actual code —
don't treat this as a vague vibe check, treat it as a checklist of specific things to actually fix.

---

## Phase 0 — Confirm the diagnosis, then extend it

Read `artifacts/gbcshs/src/pages/Home.tsx` (355 lines, the entire site — it's a single-page app
with sections `#home`, `#values`, a divider section, `#membership`, `#academics`, `#service`),
`artifacts/gbcshs/src/components/Navbar.tsx`, and `artifacts/gbcshs/src/index.css` in full.
Confirmed generic/AI-template tells already found:

1. **Forced dark mode with default shadcn slate/black tokens.** `index.css` explicitly says
   "Force dark mode colors universally" — there is no light mode, and the palette is the exact
   default shadcn dark theme almost every AI-scaffolded app ships with, unchanged.
2. **The Outfit + JetBrains Mono font pairing** (`index.css` line 1) is one of the most common
   default choices in AI website generators right now — it doesn't read as a deliberate choice for
   *this* site, a high school computer science honor society, it reads as "whatever the template
   shipped with."
3. **Two literally AI-generated stock images** doing a lot of visual work: `public/hero-bg.png`
   (internally titled "Late night coding session" per `.agents/agent_assets_metadata.toml`) and
   `public/abstract-tech.png` ("Tech abstract crest") — generic laptop-glow/circuit-pattern imagery
   that could be the hero of literally any coding-adjacent site, with no connection to Grand Blanc
   High School or this specific club.
4. **Repetitive section rhythm.** Every section (`values`, `membership`, `academics`, `service`)
   uses the same icon-in-a-box + bold heading + paragraph grid layout. Nothing visually
   distinguishes one section from another except the words in it — this is the single biggest
   driver of "AI landing page" feel, because real designed sites vary their rhythm section to
   section.
5. **Generic marketing-voice copy tendencies** common to AI-generated site copy — check the actual
   sentences in each section for filler phrasing that could apply to any club at any school, versus
   specific, concrete, human-sounding statements about *this* club.

Look for anything else in this category yourself before moving on — this list is a floor, not the
whole audit. Write what you find (confirmed + anything new) to
`.agents/UI_UX_REWORK_AUDIT_2026-08-26.md` before changing code.

---

## Phase 1 — Real visual identity, grounded in the actual school and club

1. **Look up Grand Blanc High School's real, current official colors and mascot** (a live web
   search — do not guess or rely on general knowledge that might be stale or wrong). Ground the new
   palette in something that actually connects this site to the real school, instead of a generic
   tech-startup indigo/violet gradient. This doesn't mean literally reusing the exact school
   colors unmodified if they don't work well for a clean web palette — use real design judgment
   (accessible contrast, a light and a dark mode that both actually work) but the direction should
   be recognizably tied to the real school identity, not an arbitrary AI-default choice.
2. **Ship a real, working light mode**, not just a re-tinted dark mode, with a genuine light/dark
   toggle (the `next-themes` package is already a dependency — it's set up but the "force dark"
   override in `index.css` is presumably overriding it; find and fix that). "Friendlier" for a
   high-school-facing site (prospective members, parents, faculty visiting) usually means a clean,
   welcoming light-first default, not a moody all-dark theme — use your judgment on the default
   but make it a genuine, deliberate choice, not a leftover from `--force-dark-mode-colors-universally`.
3. **Pick real typography**, not the default AI-template Outfit/JetBrains Mono pairing. Choose
   something that reads as friendly and readable for a high school audience while still feeling
   appropriately "computer science" — you have full creative latitude here, just make it a
   deliberate choice you can justify, not the path of least resistance.
4. **Replace or meaningfully rework the imagery.** Check `attached_assets/` at the repo root first
   — there is a real club-provided image there (`image_1781311947674.png`) and three copies of the
   actual `Grand_Blanc_Computer_Science_Honor_Society_Constitution` PDF (already linked as
   `public/constitution.pdf` per the build). See if the club logo/crest asset is usable as a real
   brand mark instead of (or alongside) generated art. Where you still need generated or stock
   imagery, make a deliberate choice about it (illustration style, abstract pattern work, etc.)
   rather than defaulting to photoreal "person coding at night" stock-AI imagery — that specific
   genre of image is one of the strongest "AI-generated site" tells there is.
5. **Give each section its own visual rhythm.** Hero, Values, Membership, Academics, and Service
   should not all resolve to the same icon-grid-of-cards pattern. Vary layout structure, spacing,
   and how content is grouped from section to section the way a human designer would, while keeping
   the whole page feeling like one coherent site (shared color/type system, not five unrelated
   designs stapled together).

---

## Phase 2 — Copy pass, grounded in real facts only

Rewrite section copy to sound like a real person wrote it for this specific club, not generic
"empowering the next generation of innovators" filler. Constraints:

- **Do not invent new facts about the club** — meeting times, officer names, membership
  requirements, service activities, academic requirements. Preserve every real fact currently in
  the copy (cross-check against `Grand_Blanc_Computer_Science_Honor_Society_Constitution` in
  `attached_assets/` for the source of truth on membership/selection rules — line 171's "Selection
  is based holistically on CS achievement, leadership potential, and commitment to service. No
  student shall be denied membership due to discrimination of any kind" is a real constitutional
  provision, keep its substance accurate even if you rewrite the sentence).
- Leadership names in the footer/leadership section (`h4` "Leadership" around line 314) were
  recently corrected per `git log` (commit "Fix leadership title, add mobile nav, fix placeholder
  meta tags") — do not touch the actual names/titles without a reason, only the surrounding
  presentation if it needs it.
- Where copy is genuinely generic and could be made more specific and human without fabricating
  anything (e.g., describing what a real meeting or service project looks like, if that's already
  described elsewhere in the app or the constitution), make it more specific. Where you don't have
  a real fact to make something concrete, don't invent one — better to keep a shorter, honest
  sentence than a padded, vague one.

---

## Phase 3 — Functional and accessibility verification

A visual rework this large risks silently breaking things. Before considering this done:

1. `pnpm --filter @workspace/gbcshs run typecheck` and `pnpm --filter @workspace/gbcshs run build`
   both need to pass cleanly.
2. Serve the production build locally (`pnpm --filter @workspace/gbcshs run serve`) and check it
   renders correctly — don't only check the dev server.
3. Check real responsive behavior at desktop, tablet, and mobile widths. The mobile nav was just
   fixed recently (per git log) — confirm your changes didn't regress it, and confirm the
   `IntersectionObserver`-based active-section highlighting in `Navbar.tsx` still works correctly
   against whatever new section structure/spacing you introduce.
4. Check color contrast in both light and dark mode meets a reasonable accessibility bar (this
   matters more, not less, once you've introduced a real light mode that didn't exist before).
5. Confirm `constitution.pdf`, `favicon.svg`, and `opengraph.jpg` still resolve correctly, and that
   `opengraph.jpg`/meta tags reflect the actual reworked branding if you changed the visual
   identity enough that the old OG image no longer matches.

---

## How this ships (read before touching git)

Unlike the Antigravity workflows on other projects in this hub, **this repo has no safe holding
branch with its own preview** — the only thing that actually deploys anywhere is a push to `main`,
which triggers GitHub Pages. Since John explicitly asked to see live changes when this is done, the
intended end state of this run **is** a push to `main` — but only after Phase 3's verification
passes for real, not before.

- Work in commits on a feature branch first (small, logical, reviewable commits — one per
  meaningful change, e.g. "theme tokens," "typography," "hero section rework," "values section
  rework," etc.) so the history is legible even though it's headed straight to main.
- Once typecheck, build, and your own visual/responsive check all genuinely pass, merge that
  branch into `main` and push. That's what makes GitHub Pages redeploy and puts the result at
  `https://coderjt-elite.github.io/APCSHS-Website/` for John to see.
- If you run out of confidence partway through (something doesn't build, something looks broken
  and you can't fix it in time) — **do not push a broken state to `main`.** Stop on the feature
  branch, and say clearly in your handoff what's done, what isn't, and why you held back.

## Stop here

Write a handoff (`.agents/HANDOFF_UI_UX_REWORK_2026-08-26.md`) covering: the audit findings from
Phase 0, the real color/font/imagery choices made in Phase 1 and why, what copy changed in Phase 2
and confirmation nothing was fabricated, the Phase 3 verification results, and the final commit
hash that's live on `main` (or, if you held back, exactly what state things are in and why).
