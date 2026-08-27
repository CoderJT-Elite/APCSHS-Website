# Agent goal: Phase 1 — Verify every fact, then find and fix real opportunities (2026-08-27)

**Repo state this builds on:** the full de-Replit rebuild and art-directed UI/UX rework from
`.agents/ANTIGRAVITY_GOAL_FULL_REBUILD_AND_UX_DIRECTION_2026-08-27.md` is complete and live on
`main` (see `.agents/HANDOFF_FULL_REBUILD_2026-08-27.md`). The site now lives at repo root as a
standalone Vite+React+TS app with 6 routes (Home, About, Membership, Academics, Service,
Leadership), a Fraunces/Karla type system, a school-grounded red/charcoal palette, and a custom
SVG brand mark. This file has two jobs, in order: **(1) verify every factual claim currently on the
site against a real source, fixing or flagging anything unverified**, and **(2) go find genuine
opportunities to make the site better — bugs, thin content, missing features, tasteful animation —
using real judgment, not a padded checklist.** Run `npm run dev` and keep it open throughout.

---

## Phase A — Fact verification against real sources (do this first)

The real source of truth for club facts is
`attached_assets/Grand_Blanc_Computer_Science_Honor_Society_Constitution_*.pdf` (all three copies
are identical). I've already read it and found two specific things worth your attention — verify
these first, then read the rest of the document yourself and check every other claim on the site
against it, not just the two below.

1. **The GPA/scholarship standard is optional in the source constitution, not mandatory.** Article
   VII, Section 2 reads: *"A chapter may, but does not have to, establish a minimum standard for
   scholarship for membership. If used, the GPA in computer science courses shall be an average of
   at least 80 percent, B, or 3.0..."* The current site presents "80% / 3.0 / B average" as a flat
   membership requirement. Find out whether GBCSHS has actually adopted this optional standard (a
   separate society bylaws document would be the real source if one exists anywhere — check the
   repo, check for any other attached document, ask in your handoff if you can't find one). If you
   cannot confirm GBCSHS actually adopted it, don't silently keep presenting it as settled fact —
   either find real confirmation, or soften the copy to something honest (e.g., framing it as the
   standard the society follows per its constitution, which is defensible, versus stating it as an
   unconditional rule, which overstates what you can actually verify).
2. **The Executive Committee's specific officer titles are not in this constitution.** Article X,
   Section 2 only says *"four or more officers... specific officer positions and responsibilities...
   shall be specified in the local society bylaws."* The site's Leadership page lists President,
   Vice President, Secretary, Treasurer specifically — that's a very standard structure and may
   well be accurate, but it isn't sourced from anything in this repo. Same instruction as above:
   find real confirmation if it exists, or be honest in the copy about what's confirmed vs.
   plausible-but-unsourced. **Do not invent specific student names for these roles** if none
   currently exist anywhere in the repo — a title framework is fine to describe, a fabricated
   roster of named individuals is not.
3. Independently re-verify every other specific number and name currently on the site against the
   constitution: Room 504, 12500 Holly Rd Grand Blanc MI 48439 (Article I §5), CSTA as the
   chartering body at 332 S. Michigan Avenue Chicago IL 60604 (Article I §4), Mr. Todd Beard as
   advisor (Article II §3), the three core values Equity/Service/Excellence and their exact
   definitions (Article I §3), the 9-12 grade eligibility and one-semester attendance rule (Article
   VII §1), the five qualifying courses (footnote 2 under Article VII), the 10-hour annual /
   5-hour-CS-minimum service requirement (Article XII §5), the Bronze/Silver/Gold 25/50/100-hour
   tiers (Article XII §6), and the non-discrimination clause (Article VII §4) and honor code
   (footnote 1, referenced from Article VI §6 — note this footnote's text prints on the page where
   Article VII begins, so don't mis-cite it as belonging to Article VII itself). Every single one of
   these should read as **substantively identical** to the source, even if the sentence is rephrased.
4. **Real, currently-unused facts from the constitution worth considering for genuine content
   depth** (don't force all of these in — use judgment on which actually improve a page): the
   school currently offers 6 sections of computer science coursework (Article II §3, item 2) — a
   concrete, real number that could strengthen the Academics page. The Equity article (Article
   XIII) commits the society to comparing membership demographics against school-wide enrollment
   annually and actively recruiting to close gaps — this is a specific, real, meaningful commitment
   that could deepen the About page's "Equity" pillar well beyond a generic one-line value
   statement, if it isn't already reflected there.
5. Check the copy doesn't overstate the design system's own naming as if it were official school
   terminology — "Bobcat Crimson" is a shade name chosen during the rework, not the school's own
   official color vocabulary (the school's actual official color is simply "red," per the
   verified Wikipedia infobox and the school's athletics site). That's a fine design choice; just
   don't let any copy imply "Crimson" is the school's own official term for its color.

Log every check with a plain PASS / FIXED / FLAGGED-UNVERIFIED verdict in
`.agents/PHASE1_FACT_VERIFICATION_2026-08-27.md` — this project's discipline (carried over from
other work in this hub) is that a claim of "verified" only counts if you can point to the exact
source line, and an honest "I couldn't confirm this" is worth more than a false "verified."

---

## Phase B — Bug and functional audit

The rebuild is new and hasn't had a real second pass yet. Actually use the site, don't just skim
the code:

1. Click through all 6 routes plus a hard refresh on each (not just in-app navigation) — confirm
   the GitHub Pages SPA 404-fallback trick actually works for direct/refreshed navigation to a
   non-home route, not just client-side link clicks.
2. Toggle light/dark mode on every page and check nothing breaks — contrast, the brand mark's
   colors, card borders, any hardcoded color that should have been a theme token but isn't.
3. Test at real mobile widths: does the mobile nav open/close correctly on every page, does any
   text overflow or get clipped, are tap targets big enough.
4. Check every internal and external link actually resolves (especially the constitution PDF link
   and anything pointing at CSTA's own site if you added one).
5. Check for anything left over from the single-page-scroll era that doesn't make sense in the new
   multi-page structure — leftover anchor-link hrefs (`#membership` etc.), orphaned IDs, unused CSS.
6. Run `npm run typecheck` and `npm run build` again from a clean state and confirm both are still
   clean after whatever you change in this run.

---

## Phase C — Find and fix real content gaps

Don't pad every page uniformly — find where a page is genuinely thinner than it should be and fix
that specifically. Questions to actually answer, not just consider:

- Membership page: is the actual induction/application process (how a student applies, when, to
  whom) concrete enough for a real student to act on, or does it stop at describing eligibility
  criteria abstractly?
- Is there a clear, easy-to-find answer to "how do I contact this club / when do you meet" anywhere
  prominent (not buried) — real meeting logistics matter more to a prospective member than most
  design polish does.
- Academics page: now that you know the school offers 6 real CS sections (Phase A, item 4), does
  the page make that concrete, or does it stay abstract about course offerings?
- Service page: does it give real, usable guidance on what counts as service, or is it just the
  three hour-tier numbers with no texture?
- Is the About page's "Equity/Service/Excellence" section doing real work, or could it use the
  concrete equity commitment from Article XIII to say something more specific and less generic?

---

## Phase D — Feature and motion pass (tasteful, not gratuitous)

`framer-motion` is already a dependency and currently under-used. Now that the visual identity is
settled, this is the right time for real, purposeful interaction polish:

- Page-transition animation between routes.
- Scroll-reveal for content sections on longer pages (Membership, Academics) — subtle, not
  distracting.
- A deliberate reveal or subtle animation on the custom SVG brand mark on the Home page — it's a
  real asset now, worth giving it a moment.
- Hover/focus states on cards and buttons that actually reflect the new brand system, not leftover
  default shadcn states.
- Respect `prefers-reduced-motion` for every animation you add — this is not optional.
- Use your own judgment for anything else genuinely valuable (a smoother theme-toggle transition, a
  small easter egg, whatever actually fits) — but everything you add needs to justify its own
  existence; don't add motion or a feature just to have used the time.

---

## Phase E — Use the `scrollcraft` skill (scoped — read this carefully before starting)

A skill called **scrollcraft** is installed **globally** for Antigravity on this machine, at
`~/.gemini/config/skills/scrollcraft/` (`C:\Users\natuj\.gemini\config\skills\scrollcraft\` —
`SKILL.md` plus `references/`, `engine/`, `scripts/`, `templates/`). Because it's in the global
skills directory rather than this repo's own `.agents/`, it's available the same way in every
project you work on, invocable either by typing `/scrollcraft` in chat or by you deciding on your
own to use it when relevant (per Antigravity's own skill-discovery rules). It's built for
building premium, scroll-driven landing pages — its full pipeline (an eight-question interview,
picking one of eight "page grammars," generating or encoding photoreal video/imagery, a
Playwright-based self-verification harness) is built for producing **one bespoke, from-scratch
landing page**, not for retrofitting an already-built six-route informational site. Don't force
this site into that mold. Use it in two specific, scoped ways instead:

1. **Adopt its craft/taste standard as an additional QA pass across the whole site.** Read
   `~/.gemini/config/skills/scrollcraft/references/taste.md` and the "refuse list" in the
   project's own `README.md` (identical feature-card grids, `01 / 06`-style counters, gratuitous
   scroll-cue hints, gradient text, em-dashes, invented statistics, fake dashboards, AI-purple
   gradients, and the cream-and-brass "artisan" palette every AI-generated craft brand defaults
   to). This overlaps heavily with the "kill the vibecoded feel" direction the whole rebuild has
   been chasing — treat it as a second, independent checklist to run the finished site against,
   and fix anything it catches that your own earlier passes missed. This part costs nothing (no
   ffmpeg, no Playwright, no assets) and applies everywhere.
2. **Run a real, scoped scrollcraft build for the Home page hero only**, using the skill's own
   documented "self-authored brief" fallback for unattended runs (`SKILL.md`, Step 0: *"If the
   human is genuinely unreachable and the run is fully autonomous, write BRIEF.md yourself... mark
   the file 'Self-authored, not interviewed' at the top"*). Write that brief honestly in the club's
   real voice using what you already know about GBCSHS from Phase A — don't invent a vibe that
   doesn't fit a high school computer science honor society. Pick a genuinely fitting page grammar
   and one real signature move for just the hero/landing moment (not the whole multi-page site).
   Hard constraints for this specific use:
   - **No paid asset generation.** Do not use `KIE_AI_API_KEY` / `scripts/kie.mjs` or spend any
     money — this project has no budget approval for that. Build only from real assets already in
     this repo (the custom SVG brand mark, `attached_assets/image_1781311947674.png`) or from
     non-video, non-photoreal scroll devices (headline assembly, pinning, color-shift-on-scroll,
     pointer-parallax, scroll-reveal) that need no generated imagery at all — `references/devices.md`
     has the full device catalog, most of which don't require video or generated photography.
   - Run `node "$HOME/.gemini/config/skills/scrollcraft/scripts/doctor.mjs"` first (or the
     equivalent absolute Windows path above). If it reports missing ffmpeg or `playwright-core`,
     that's fine — it just means you're limited to non-video devices and can skip the automated
     screenshot-verification harness in favor of your own manual check (Phase B already covers
     real click-through verification for this site).
   - The engine (`engine/scrollcraft.js`/`.css`) is meant to be themed via CSS custom properties,
     not edited — if you use it, theme it to this site's existing Fraunces/Karla/red-charcoal system
     rather than its own defaults, and make sure it doesn't fight with the existing React app's
     routing, `next-themes` dark mode, or the rest of the multi-page structure.
   - This is additive polish to the Home page's hero moment, not a replacement for it — the rest of
     Home (pillars overview, metrics strip, course preview, CTA) and all five other routes stay
     exactly as they are structurally; don't let this turn into a second full redesign.

If, after actually reading the skill, you judge that even this scoped version doesn't fit well —
say so plainly in the handoff with real reasoning, and skip it, rather than forcing a mismatched
technique onto the site just because it was requested. This phase is explicitly lower-priority than
Phases A through D — do it after those are solid, not instead of them.

---

## Boundaries

- No fabricated facts, ever — Phase A's standard applies to everything else you touch too.
- Keep the established palette/type system from the rebuild — this is a verification-and-polish
  pass, not another full redesign.
- Respect accessibility (contrast, focus states, reduced-motion) for anything you add.
- Small, logical commits on a feature branch; merge to `main` and push only once `npm run
  typecheck` and `npm run build` are clean and you've actually clicked through the live result
  yourself. Don't push a broken state.

## Stop here

Write `.agents/HANDOFF_PHASE1_VERIFY_AND_IMPROVE_2026-08-27.md`: the Phase A verification table
(PASS/FIXED/FLAGGED-UNVERIFIED per claim, with exact source citations), what bugs Phase B found and
fixed, what content gaps Phase C addressed and how, what Phase D added and why, whether Phase E's
scrollcraft pass was used (and if so, what its taste/refuse-list check caught, and an honest
description of the Home hero build or your reasoning for skipping it), and the final commit hash
live on `main`.
