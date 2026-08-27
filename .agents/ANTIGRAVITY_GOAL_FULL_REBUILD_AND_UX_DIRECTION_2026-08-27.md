# Agent goal: Full de-Replit rebuild + complete, art-directed UI/UX rework (2026-08-27)

**This supersedes `.agents/ANTIGRAVITY_GOAL_UI_UX_REWORK_2026-08-26.md`.** That file assumed you'd
run inside Replit's own Agent for live preview and left the visual direction mostly open. Both of
those assumptions have changed: this repo needs to stop depending on Replit at all, and the design
direction below is not a suggestion to riff on — it's the direction. Run this with any normal
coding agent working the local clone (Antigravity, Claude Code, etc.) — not Replit's Agent, since
Phase 0 below removes Replit as a dependency entirely, which would be a strange thing to do from
inside Replit itself.

**App code today:** `artifacts/gbcshs/` (a pnpm-workspace member). **Live site:** GitHub Pages,
redeployed automatically on every push to `main` via `.github/workflows/deploy.yml`, currently at
`https://coderjt-elite.github.io/APCSHS-Website/`. Run `npm run dev` (or your package manager's
equivalent, once Phase 0 removes the required-env-var friction below) throughout and keep it open
locally so you can see changes as you make them — don't wait until the end to look at it.

---

## Phase 0 — De-Replit and make this repo usable by literally any agent, in any editor

Verified facts to work from (checked directly, don't re-derive from scratch):

- `artifacts/gbcshs` does **not** import or use `@workspace/api-client-react`, and has zero
  references to `artifacts/api-server`, `artifacts/mockup-sandbox`, `lib/api-spec`, `lib/api-zod`,
  or `lib/db` anywhere in its source. It is a fully static frontend with no backend dependency,
  sitting inside a multi-package monorepo it doesn't actually need.
- `artifacts/gbcshs/vite.config.ts` unconditionally imports `@replit/vite-plugin-runtime-error-modal`,
  and conditionally imports `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner`
  when `process.env.REPL_ID` is set. It also **hard-throws** if `PORT` or `BASE_PATH` env vars
  aren't set — meaning `npm run dev` fails immediately for anyone who doesn't already know to set
  Replit-style env vars first. That's the single biggest portability problem to fix.
- Root-level Replit-only files: `.replit`, `.replitignore`, `replit.md`. Replit-only agent
  bookkeeping: `.agents/agent_assets_metadata.toml` (records provenance for the two generated
  images currently in `public/` — before deleting this file, copy its provenance notes — image IDs,
  titles "Late night coding session" / "Tech abstract crest" — into a plain-text comment or a line
  in the new project's README, so that history isn't silently lost even though those specific
  images are being replaced in Phase 2 anyway).

Do this, in order:

1. **Extract `gbcshs` into its own standalone, ordinary Vite + React + TypeScript + Tailwind
   project** — its own `package.json` with real pinned versions (not `catalog:` references into
   the parent workspace), no dependency on any sibling package. End state: cloning just this
   repo and running `npm install && npm run dev` works immediately, with zero required environment
   variables, zero Replit account, zero workspace-wide install step.
2. **Remove all three `@replit/*` packages** from dependencies and from `vite.config.ts` — delete
   the plugin imports, the `REPL_ID` conditional block, and the `runtimeErrorOverlay()` plugin call
   entirely.
3. **Fix the `PORT`/`BASE_PATH` hard-throws.** Default `PORT` to `5173` (Vite's normal default) and
   `BASE_PATH` to `/` for local dev, while still supporting a production build that sets the GitHub
   Pages subpath base (`/APCSHS-Website/`) — read this from an optional env var with a sensible
   fallback, don't require it to be set for the app to even boot.
4. **Delete `.replit`, `.replitignore`, `replit.md`, and `.agents/agent_assets_metadata.toml`**
   (after copying its provenance notes somewhere durable, per above).
5. **Decide what happens to the now-orphaned sibling packages** (`artifacts/api-server`,
   `artifacts/mockup-sandbox`, `lib/api-client-react`, `lib/api-spec`, `lib/api-zod`, `lib/db`).
   Check `git log` across those directories and any doc comments inside them for evidence they were
   built toward a real, still-intended feature. If you find real evidence of planned future use,
   say so plainly in the handoff and leave them alone rather than deleting them. If (as a first
   pass suggests) they're unused scaffolding with no real evidence of a concrete plan, remove them
   — a repo that's still technically a multi-package monorepo full of dead packages isn't actually
   the portable, any-agent-can-use-it repo John asked for.
6. **Update `.github/workflows/deploy.yml`** to match whatever the new project layout ends up
   being, and confirm a GitHub Pages build with the correct subpath base still produces a working
   site (asset paths, router base) — don't just confirm `npm run build` exits 0, actually check the
   built output's asset references are correct for being served from a subpath.
7. **Prove it, don't just claim it.** As a real end-of-phase check: in a clean temp directory,
   clone what you're about to commit, run `npm install && npm run dev` (or the finalized commands)
   with no environment variables set beforehand, and confirm it works. Log the exact commands you
   ran and their result in your handoff.

---

## Phase 1 — Complete UI/UX rework, art-directed (not open-ended)

The instruction is "completely rework the UI and UX," and here is the actual direction — follow
it deliberately, not as loose inspiration.

### Identity, grounded in the real school

Grand Blanc High School's verified official colors are **red and black**, mascot **Bobcats**
(confirmed via Wikipedia's infobox and the school's own athletics site,
`grandblancathletics.com` — re-verify yourself if you want independent confirmation, but don't
second-guess this into something else). The goal is a site that reads as *this specific school's
computer science honor society* — not a generic tech-startup palette, and not a literal
sports-jersey red/black either. Translate the school identity into something editorial and warm:

- **Background (light mode, the default):** a warm off-white / warm paper tone — not stark white,
  not black, not a cold light-gray.
- **Primary text:** a deep warm charcoal, not pure `#000000`.
- **Primary accent — the school's red, refined:** a deepened, slightly muted red (think a rich
  brick/crimson rather than a fire-engine or "danger" red), used **deliberately and sparingly** —
  buttons, links, underlines, small accent marks, a section divider. Never a full-bleed red hero
  background or a red-dominant page — that reads as loud and corporate, not friendly.
- **Secondary dark tone:** a near-black warm charcoal (not pure black) — this is where the school's
  "black" shows up: a footer, one deliberately dark section for contrast, or the dark-mode surface
  color. Not the whole site forced dark.
- **One warm neutral** (a soft tan/stone tone) for borders, card backgrounds, and muted text — this
  is what keeps the palette feeling human and warm instead of sterile.
- **Ship a genuine, working light/dark toggle** (the `next-themes` package is already a dependency)
  with both modes actually designed on purpose — not dark-forced, not light-as-an-afterthought.

### Typography — a real, specific choice

- **Headline/display font: Fraunces** (Google Fonts, variable). A warm, editorial serif with real
  character — this single choice does most of the work of moving away from the generic
  geometric-sans "AI startup" look the current site has.
- **Body font: Karla** (Google Fonts). Humanist, rounded, warm, highly legible — deliberately not
  Inter/Outfit/another default geometric sans.
- **A small mono accent only** (e.g. IBM Plex Mono), used exclusively for tiny label/tag-style
  details — a "GBCSHS" wordmark treatment, a small "est." detail, a code-flavored micro-label.
  Never as a body or heading font — mono-as-primary-typeface was one of the site's biggest
  "vibecoded" tells; mono-as-a-tiny-accent is a deliberate, controlled nod to "this is a CS club"
  instead.

### Imagery — replace the AI-stock-photo approach entirely

Remove `public/hero-bg.png` ("Late night coding session") and `public/abstract-tech.png") outright
— photoreal AI-generated stock imagery is one of the strongest "this was AI-generated" signals
there is, and no amount of color/type work fixes a page anchored by one. Replace with a deliberate
**illustration/iconography system** instead: simple geometric shapes, clean line-art icons, or a
tastefully abstracted mark built from the Bobcat mascot or a circuit/geometric motif — built in the
site's own color system, so it reads as designed specifically for this club rather than generated
by an image model. There's a real club asset at `attached_assets/image_1781311947674.png` (the
actual club crest/logo) — use it as a starting reference for a real logo/mark treatment instead of
ignoring it in favor of new generated art.

### Structure — stop being a single-page scroll

Restructure from one long page with anchor-linked sections into a real small multi-page site using
`wouter` (already a dependency, no new router needed): **Home, About/Values, Membership, Academics,
Service, Leadership.** A single-page-with-anchors layout is itself a common tell of AI landing-page
generators — separate pages with real routes read as a more substantial, deliberately built site.
Keep a persistent nav across all pages (the existing `Navbar.tsx` has working mobile-nav and
scroll-based active-state logic worth adapting rather than throwing away, even though its visual
design should change with everything else).

### Section-level rhythm

Don't let every page fall back into the same icon-in-a-box-times-three grid the current site
repeats everywhere. Let each page's layout follow its actual content: Membership probably wants a
step-by-step/checklist treatment (selection criteria, induction process), Academics probably wants
a clearer structured/table-like treatment (requirements, GPA, course expectations), Service
probably wants a more narrative, example-driven layout. Vary deliberately, the way a human designer
would, while keeping one consistent color/type system tying it all together.

---

## Phase 2 — Copy pass, grounded in real facts only

Same discipline as before: rewrite copy to sound like a real person wrote it for this specific
club, not generic filler. Do not invent facts. Cross-check membership/selection rules against
`attached_assets/Grand_Blanc_Computer_Science_Honor_Society_Constitution_*.pdf` (the real source of
truth — e.g. the existing "Selection is based holistically on CS achievement, leadership potential,
and commitment to service. No student shall be denied membership due to discrimination of any
kind" language is a real constitutional provision; preserve its substance even if you rewrite the
sentence). Leadership names/titles were corrected in a recent commit — carry them over accurately
into whatever new Leadership page you build, don't touch the actual names without reason.

---

## Phase 3 — Verification before shipping

1. `npm run typecheck` and `npm run build` both need to pass cleanly with the new, portable setup.
2. Serve the production build locally and check it, not just the dev server.
3. Real responsive check at desktop, tablet, and mobile widths, across all new pages, both light
   and dark mode.
4. Color contrast check in both modes now that a real light mode and a refined red accent exist —
   don't let the accent red fail contrast on small text.
5. Confirm routing works correctly for a GitHub Pages subpath deployment (this is a common gotcha
   with client-side routers on GH Pages — verify direct navigation to a non-home route doesn't
   404, not just in-app link clicks).
6. Confirm `constitution.pdf`, favicon, and Open Graph image/meta all still resolve and reflect the
   new branding if the visual identity changed enough to make the old OG image mismatched.

---

## How this ships

Work in small, logical commits on a feature branch first. Once typecheck, build, and your own
verification all genuinely pass, merge to `main` and push — that's what redeploys GitHub Pages and
puts the finished rebuild at `https://coderjt-elite.github.io/APCSHS-Website/` (or wherever the
Pages URL resolves to after the workflow/path updates in Phase 0). If you run out of confidence
partway through — something doesn't build, routing breaks on Pages, anything you can't fix
confidently — **do not push a broken state to `main`.** Stay on the feature branch and say clearly
in the handoff what's done, what isn't, and why.

## Stop here

Write `.agents/HANDOFF_FULL_REBUILD_2026-08-27.md` covering: exactly what was removed/restructured
in Phase 0 and why (including what you found — or didn't find — about the orphaned sibling
packages), the real design decisions made in Phase 1 (final palette values, confirmation of the
font choices, what the imagery/logo treatment ended up being), what copy changed in Phase 2 and
confirmation nothing was fabricated, the Phase 3 verification results, and the final commit hash
live on `main`.
