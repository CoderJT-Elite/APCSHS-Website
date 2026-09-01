# Agent goal: pull the developer out of Leadership, credit him prominently instead, and push the theme to real GBHS red/black (2026-09-01)

## Read the prior work first

`.agents/` already has four completed goal/handoff pairs for this site (`FULL_REBUILD_AND_UX_DIRECTION`,
`UI_UX_REWORK`, `HERO_VIDEO`, `PHASE1_VERIFY_AND_IMPROVE`) — this is a mature, deliberately
designed editorial site, not a scaffold. Read those handoffs before changing anything so you
understand why the current design looks the way it does, and don't regress that quality while
making the three changes below. This is a scoped edit, not a redesign.

This is a real Vite + React + TypeScript + Tailwind site for an actual GBHS student
organization, deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to
`main`. **Never push to the remote without explicit approval** — commit locally as you go, ask
before pushing.

## Change 1 — take the developer off the Leadership page

`src/pages/Leadership.tsx` currently renders a 3-column "Leadership Spotlight Grid" (lines
32-121) with the Faculty Advisor, the Principal, and a third card titled "Web Developer •
Architecture" / "John Tewolde" — sitting alongside the actual constitutional leadership (the
page itself is headed "Leadership & Governance," framed around Article IX/X governance, and its
intro line says "Meet the faculty advisor and leadership team"). John Tewolde (the site's
developer) does not want to be presented as part of the chapter's leadership — he's not an
advisor, principal, or elected officer, and this page is specifically about that governance
structure.

- Remove the developer card from that grid entirely. Adjust the grid from 3 columns to however
  many actually belong there now (Advisor + Principal — 2 columns) and rebalance the layout so
  it doesn't look like a card was just deleted (spacing, grid sizing, whatever reads as
  intentional).
- Also look at `src/components/Footer.tsx`'s fourth column, currently headed "Leadership &
  Contacts" (line 98), which groups the Advisor and the "Website Builder" credit under one
  leadership-labeled heading. Re-think that grouping/heading so the developer credit isn't
  filed under "leadership" there either — your call on the exact restructure (split into two
  columns, rename the heading, move the credit elsewhere in the footer), as long as the end
  result doesn't label the developer's credit as part of chapter leadership.
- Don't touch the actual leadership content (Advisor, Principal, the Executive Committee
  structure section) beyond removing/rebalancing around the developer card.

## Change 2 — make the developer credit itself bigger and more visible, not smaller

This is not "remove John from the site" — it's "get him off the leadership page but make sure
his actual role is easy to see." Right now his name and role appear in exactly three places
(`Footer.tsx` twice, `Leadership.tsx` once before you remove it), and the title used for him is
inconsistent across those three spots ("Web Developer • Architecture", "Website Builder", "Web
Architect & Software Dev").

- Standardize on the exact title **"Website Developer"** everywhere his name appears — don't
  keep the inconsistent variants.
- His name ("John Tewolde") and that exact title need to appear multiple times across the site
  and be genuinely easy to see — not small, low-contrast, or buried in a footer bottom-bar at
  10-11px like `Footer.tsx` line 144 currently does. Use real design judgment on where else a
  developer credit legitimately belongs on a site like this (a clearly-labeled section on the
  About page, a more prominent footer treatment, a small persistent credit badge — your call),
  but the bar is: a visitor should actually notice it, not need to hunt for tiny text to find
  it. Keep it tasteful and proportionate to a school club site — prominent doesn't mean it
  should compete with or overshadow the chapter's own identity, just that it shouldn't be an
  afterthought either.
- Keep the existing `mailto:jg.tewolde@gmail.com` contact link somewhere in the credit.

## Change 3 — push the palette to real GBHS red and black

Grand Blanc High School's actual colors are red and black (the Bobcats). The current theme in
`src/index.css` already has a red primary named "Refined Bobcat Crimson" (`--primary: 0 66% 44%`
light / `0 72% 54%` dark), but it's used sparingly as an accent against a warm cream/paper
background (`--background: 38 25% 97%`) and warm charcoal secondary — the overall effect reads
as a muted editorial site with a red accent, not as a school's red-and-black identity. Push it
further toward genuinely feeling like GBHS red and black, in both the light and dark theme
(there's a working dark-mode toggle — `ThemeToggle.tsx` — check both).

Use your own design judgment on exactly how far to take this and which specific values to
change (deeper/truer red, how much black/near-black to bring into backgrounds vs. keeping the
current warm-paper/charcoal editorial base, how bold vs. restrained the red-black contrast
should be site-wide) — the goal is that someone glancing at this site should read it as
Grand Blanc's colors, not just notice a red accent buried in an otherwise neutral palette. Keep
the existing typography system (Fraunces/Karla/IBM Plex Mono) and the site's overall editorial,
professional feel — this is a retheme, not a rebuild, and it still needs to look like a
legitimate school honor society site, not a sports jersey.

## Verification

- `npm run typecheck` and `npm run build` must both pass clean.
- Actually run the dev server and look at every page (`/`, `/about`, `/membership`,
  `/academics`, `/service`, `/leadership`) in both light and dark mode — confirm the developer
  card is genuinely gone from Leadership, confirm his credit is genuinely more visible elsewhere
  (screenshot it), and confirm the new palette actually renders as intended (screenshot a few
  representative pages in both themes). Don't just trust the CSS values — look at the rendered
  result.
- Commit locally with clear, incremental commits. Do not push without asking first.

## When you're done

Write `.agents/HANDOFF_DEVELOPER_CREDIT_AND_GBHS_THEME_2026-09-01.md`: exactly what changed in
the Leadership page and Footer and why, where the new developer credit(s) live and what they
say, the specific palette values you landed on and the reasoning, and confirmation typecheck/
build passed and you visually checked both themes across all pages.
