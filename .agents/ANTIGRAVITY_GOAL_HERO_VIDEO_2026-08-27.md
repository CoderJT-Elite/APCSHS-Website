# Agent goal: Encode and integrate the Home hero video (2026-08-27)

**Scope:** small, single-purpose task. This is separate from and can run before or after
`.agents/ANTIGRAVITY_GOAL_PHASE1_VERIFY_AND_IMPROVE_2026-08-27.md` — do not pull in that file's
other phases here, just this one asset.

## What exists already

A real, watermark-removed video clip is sitting at
`attached_assets/generated_video/hero_keyboard_watermark_removed.mp4` (1280x720, h264, 10s,
24fps, ~2.5MB). It's a macro/documentary-style shot of a mechanical keyboard in warm daylight
with a monitor softly out of focus in the background — generated footage, watermark already
stripped via ffmpeg's `delogo` filter and manually verified clean frame-by-frame. Treat it as a
real, usable asset — not a placeholder.

## Job 1 — Encode it for scroll-scrubbing, not autoplay

This clip needs to *scrub* under scroll position on the Home page hero (frame position tracks
scroll position), not just autoplay/loop like a background video. Read
`~/.gemini/config/skills/scrollcraft/references/assets.md` (global scrollcraft skill install —
`C:\Users\natuj\.gemini\config\skills\scrollcraft\references\assets.md`) for the actual encoding
recipe scrollcraft uses for scrub-ready video (keyframe interval, format/container choices that
let a `<video>` element seek frame-by-frame smoothly without stutter). Use
`~/.gemini/config/skills/scrollcraft/scripts/encode.sh` if it fits this single-clip case, or
replicate its ffmpeg parameters by hand — either is fine, but don't hand-roll settings from
scratch without checking that reference first, scroll-scrubbing has real gotchas around keyframe
spacing that a naive encode will hit.

Output the scrub-ready file into `public/video/` (create the folder), named descriptively (e.g.
`public/video/hero-keyboard.mp4`, plus a `.webm` fallback if the encode script produces one).

## Job 2 — Wire it into the Home hero

In `src/pages/Home.tsx`, replace or augment the current hero treatment with this video scrubbing
under scroll for the hero section only:

- Use a scroll-linked approach (a scroll listener or `IntersectionObserver`-driven progress value
  mapped to `video.currentTime`, or the scrollcraft engine's own scrub mechanism if you bring in
  `engine/scrollcraft.js`/`.css` themed to this site's tokens — your call which is simpler to wire
  correctly here for a single hero element, but no fighting with `next-themes` or `wouter`
  routing if you use the engine).
- Respect `prefers-reduced-motion`: if set, show a static poster frame (extract one, e.g. the
  first frame) instead of scrubbing.
- This affects the Home hero only. Don't touch the other 5 routes or the rest of Home's structure
  (pillars overview, metrics strip, course preview, CTA all stay as-is).
- Keep the existing Fraunces/Karla headline and copy in the hero — this video is a background/
  supporting element, not a replacement for the real content.

## Verification

1. `npm run typecheck` and `npm run build` clean.
2. Manually scroll through the hero at desktop and mobile widths — confirm the video frame
   position actually tracks scroll position smoothly, doesn't stutter or jump, and doesn't play on
   its own when not being scrolled.
3. Toggle `prefers-reduced-motion` (browser devtools emulation) and confirm the static-poster
   fallback works.
4. Check light and dark mode both still look right with the video in place (does it need a subtle
   overlay/scrim in one mode to keep hero text readable? use judgment, check real contrast).
5. Confirm total page weight is reasonable — a 2.5MB source clip should encode down further for
   web delivery; if the scrub-ready encode is still large, note the final file size in your
   handoff so it's a known tradeoff, not a silent one.

## Boundaries

- Small, logical commits on a feature branch; merge to `main` and push only once typecheck, build,
  and your own scroll-through check all genuinely pass.
- Don't expand this into a broader redesign — this is one asset, wired into one section.

## Stop here

Write `.agents/HANDOFF_HERO_VIDEO_2026-08-27.md`: the exact encode command/parameters used, final
file size and location, how the scroll-scrub was implemented, the reduced-motion fallback
behavior, and the final commit hash live on `main`.
