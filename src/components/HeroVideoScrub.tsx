import React, { useEffect, useRef, useState } from "react";

interface HeroVideoScrubProps {
  className?: string;
}

export function HeroVideoScrub({ className = "" }: HeroVideoScrubProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPainted, setIsPainted] = useState(false);

  const targetProgress = useRef(0);
  const curProgress = useRef(0);
  const isVisibleRef = useRef(true);
  const stuckAtRef = useRef(0);
  const primedRef = useRef(false);

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  const videoMp4Src = `${normalizedBase}video/hero-keyboard.mp4`;
  const posterWebpSrc = `${normalizedBase}video/hero-keyboard-poster.webp`;
  const posterJpgSrc = `${normalizedBase}video/hero-keyboard-poster.jpg`;

  // 1. Reduced motion detection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // 2. Video loading via Blob URL for smooth local/range seeking without network hitches
  useEffect(() => {
    if (prefersReducedMotion) return;

    let isCancelled = false;
    let blobUrl: string | null = null;

    const video = videoRef.current;
    if (!video) return;

    fetch(videoMp4Src)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        if (isCancelled || !videoRef.current) return;
        blobUrl = URL.createObjectURL(blob);
        videoRef.current.src = blobUrl;
        videoRef.current.load();
      })
      .catch(() => {
        if (!isCancelled && videoRef.current) {
          videoRef.current.src = videoMp4Src;
          videoRef.current.load();
        }
      });

    return () => {
      isCancelled = true;
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [prefersReducedMotion, videoMp4Src]);

  // 3. Scroll tracking, IntersectionObserver & rAF lerp seek loop
  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Visibility observer to pause RAF work when hero is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const updateScrollProgress = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      // At scroll 0, rect.top is ~0.
      // As the user scrolls through the hero, rect.top becomes negative.
      // Travel is measured over the height of the hero.
      const travel = Math.max(rect.height, 300);
      const raw = -rect.top / travel;
      targetProgress.current = Math.max(0, Math.min(1, raw));
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });
    updateScrollProgress();

    // Priming on mobile / iOS devices
    const primeVideo = () => {
      if (!videoRef.current || primedRef.current) return;
      primedRef.current = true;
      const v = videoRef.current;
      v.play()
        .then(() => {
          v.pause();
          try {
            v.currentTime = 0.001;
          } catch {}
        })
        .catch(() => {
          primedRef.current = false;
        });
    };

    window.addEventListener("touchstart", primeVideo, { passive: true, once: true });
    window.addEventListener("pointerdown", primeVideo, { passive: true, once: true });

    // Video metadata & painted event listeners
    const handleLoadedMetadata = () => {
      try {
        video.currentTime = Math.max(targetProgress.current * (video.duration || 10), 0.001);
      } catch {}
    };

    const handleSeeked = () => {
      setIsPainted(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked, { once: true });

    // Fallback timer to show video even if seeked event is delayed
    const revealTimer = setTimeout(() => {
      setIsPainted(true);
    }, 2000);

    // Continuous rAF lerp loop for butter-smooth scrubbing
    let rafId: number;
    const tick = () => {
      if (isVisibleRef.current && video && !isNaN(video.duration) && video.duration > 0) {
        const lerpFactor = 0.18;
        curProgress.current += (targetProgress.current - curProgress.current) * lerpFactor;

        const targetTime = Math.max(0, Math.min(0.999, curProgress.current)) * video.duration;
        const eps = window.innerWidth <= 768 ? 0.02 : 0.008;

        if (video.seeking) {
          const now = performance.now();
          if (!stuckAtRef.current) {
            stuckAtRef.current = now;
          } else if (now - stuckAtRef.current > 700) {
            stuckAtRef.current = now;
            try {
              video.currentTime = video.currentTime + 0.001;
            } catch {}
          }
        } else {
          stuckAtRef.current = 0;
          if (Math.abs(video.currentTime - targetTime) > eps) {
            try {
              video.currentTime = targetTime;
            } catch {}
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(revealTimer);
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      window.removeEventListener("touchstart", primeVideo);
      window.removeEventListener("pointerdown", primeVideo);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Static Poster Frame (reduced-motion fallback & instant initial paint) */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={posterWebpSrc} type="image/webp" />
        <img
          src={posterJpgSrc}
          alt=""
          className="w-full h-full object-cover object-center opacity-45 dark:opacity-30 filter brightness-100 dark:brightness-90 transition-opacity duration-700"
        />
      </picture>

      {/* 2. Scroll-Scrubbed Video Element (loaded only when reduced motion is not requested) */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-100 dark:brightness-90 transition-opacity duration-700 ${
            isPainted ? "opacity-45 dark:opacity-30" : "opacity-0"
          }`}
          aria-hidden="true"
        />
      )}

      {/* 3. Layered Aesthetic Scrims for Light/Dark mode contrast & seamless edge fading */}
      {/* Base radial scrim focusing contrast behind central hero copy */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--background)/0.92)_0%,hsl(var(--background)/0.75)_55%,hsl(var(--background)/0.9)_100%)] dark:bg-[radial-gradient(ellipse_at_center,hsl(var(--background)/0.92)_0%,hsl(var(--background)/0.78)_55%,hsl(var(--background)/0.95)_100%)]" />

      {/* Vertical gradient to smoothly blend into header and next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Subtle school branding atmospheric glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-secondary/10 dark:bg-primary/5 rounded-full blur-3xl" />
    </div>
  );
}
