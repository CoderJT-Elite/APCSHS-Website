# Handoff: Home Hero Video Scroll-Scrubbing Integration (2026-08-27)

## Executive Summary

The watermark-free hero macro video asset (`hero_keyboard_watermark_removed.mp4`) has been encoded according to dense-GOP scroll-scrubbing specifications and integrated into the Home page hero section of the Grand Blanc Computer Science Honor Society web portal (`src/pages/Home.tsx`).

The integration tracks user scroll position to scrub the playhead smoothly without stutter or auto-playback, respects `prefers-reduced-motion` with an instant static WebP/JPG poster fallback, preserves Fraunces/Karla typography contrast in both light and dark themes with tailored gradient scrims, and leaves all other site sections and routes unmodified.

---

## 1. Encoding Specifications & Commands

Following the scrollcraft scrub-ready video guidelines (`assets.md` & `encode.sh`):

### H.264 MP4 Primary Encode
- **Command**:
  ```bash
  ffmpeg -y -hide_banner -i attached_assets/generated_video/hero_keyboard_watermark_removed.mp4 \
    -an \
    -vf "format=yuv420p" \
    -c:v libx264 -profile:v high -preset slow -crf 20 \
    -g 8 -keyint_min 8 -sc_threshold 0 \
    -movflags +faststart \
    public/video/hero-keyboard.mp4
  ```
- **Rationale**:
  - `-g 8 -keyint_min 8 -sc_threshold 0`: Forces an I-frame (keyframe) exactly every 8 frames (every ~0.33s at 24fps). A sparse encode (default 2-5s) requires decoding dozens of intermediate P/B frames sequentially per seek, causing severe lag and stutter during scrubbing. Dense GOP enables instantaneous hardware seeking.
  - `-an`: Strips audio stream to reduce file weight and prevent browser autoplay policy friction.
  - `-movflags +faststart`: Places the `moov` atom at the start of the file for instant initial playback/seeking without buffering the whole file.

### VP9 WebM Fallback Encode
- **Command**:
  ```bash
  ffmpeg -y -hide_banner -i attached_assets/generated_video/hero_keyboard_watermark_removed.mp4 \
    -an \
    -c:v libvpx-vp9 -crf 28 -b:v 0 \
    -g 8 -keyint_min 8 \
    public/video/hero-keyboard.webm
  ```

### Static Poster Frame Extractions (Frame 1)
- **WebP**:
  ```bash
  ffmpeg -y -i public/video/hero-keyboard.mp4 -frames:v 1 -vf "scale=1280:-2" -c:v libwebp -quality 85 public/video/hero-keyboard-poster.webp
  ```
- **JPG Fallback**:
  ```bash
  ffmpeg -y -i public/video/hero-keyboard.mp4 -frames:v 1 -q:v 2 public/video/hero-keyboard-poster.jpg
  ```

---

## 2. File Assets & Sizes

| File | Format / Codec | Dimensions | File Size | Description |
| :--- | :--- | :--- | :--- | :--- |
| `public/video/hero-keyboard.mp4` | H.264 / AVC | 1280x720 (24fps, dense GOP=8) | 2,618,678 bytes (2.50 MB) | Primary scrub-ready video stream |
| `public/video/hero-keyboard.webm` | VP9 | 1280x720 (24fps, dense GOP=8) | 1,805,680 bytes (1.72 MB) | Highly compressed WebM fallback |
| `public/video/hero-keyboard-poster.webp` | WebP | 1280x720 (quality 85) | 38,126 bytes (37.2 KB) | High-efficiency static poster frame |
| `public/video/hero-keyboard-poster.jpg` | JPEG | 1280x720 (quality 92) | 69,393 bytes (67.8 KB) | Legacy static poster frame fallback |

---

## 3. Implementation Details (`HeroVideoScrub.tsx`)

A dedicated, isolated component was implemented at `src/components/HeroVideoScrub.tsx`:

1. **Blob URL Loading**:
   - The video is fetched and loaded into a Blob URL to allow rapid frame-by-frame seeking in memory without triggering repetitive range request stalls on static hosts.
2. **Scroll-Progress Lerp Engine**:
   - Tracks the bounding box of the hero section relative to the viewport.
   - Computes target progress $p = \mathrm{clamp}_{0,1}(-\mathrm{rect.top} / \mathrm{rect.height})$.
   - Uses a smooth `requestAnimationFrame` lerp loop ($0.18$ factor) with a deadband ($0.008$ desktop, $0.02$ mobile) and a seeking queue guard (with a 700ms unstuck fallback).
3. **Reduced Motion Compliance**:
   - Actively checks and listens for `(prefers-reduced-motion: reduce)`.
   - If reduced motion is requested, the `<video>` element is never mounted or fetched; instead, the static poster `<picture>` is displayed with zero animation or scroll seeking.
4. **Contrast & Theme Scrims**:
   - In **Light Mode** (`#FAF8F5` paper background): Dual radial + linear scrims provide high contrast for dark Fraunces/Karla text, keeping contrast ratios well above WCAG AAA standards (> 7:1).
   - In **Dark Mode** (`#131316` charcoal background): Dark radial scrims elevate light text with rich ambient depth.
5. **IntersectionObserver Idle Handling**:
   - When the hero scrolls out of view, rAF seeking idles immediately, ensuring 0% GPU/CPU overhead while the user reads the rest of the page.

---

## 4. Verification Results

1. **Build & Typecheck**:
   - `npm run typecheck` (`tsc --noEmit`): Passed with 0 errors.
   - `npm run build` (`vite build`): Clean build producing optimized production bundle.
2. **CDP Automated & Visual Testing**:
   - Desktop & Mobile (390px) responsive layout verified.
   - Scroll tracking verified: `scrollY = 0` $\rightarrow$ `currentTime = 0.001s`, `scrollY = 300` $\rightarrow$ `currentTime = 2.35s`, `scrollY = 600` $\rightarrow$ `currentTime = 5.82s`, scroll back to top $\rightarrow$ `currentTime = 0.02s`.
   - Reduced motion emulation verified: `<video>` unmounted, poster active.
   - Light & Dark mode contrast visually verified from rendered headless captures.

---

## 5. Repository State

- **Branch**: `main`
- **Merge Commit**: `77ec126b031aee995bd561ef1689a99890dcca87`
- **Feature Commit**: `5b677b541d78c0677f7e4656072c048702300678`
