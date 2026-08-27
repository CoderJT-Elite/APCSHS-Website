import React from "react";

interface BrandMarkProps {
  size?: number;
  className?: string;
  showText?: boolean;
  animated?: boolean;
}

export function BrandMark({ size = 36, className = "", showText = false, animated = false }: BrandMarkProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 transition-transform duration-300 ${animated ? "hover:scale-105" : ""}`}
        aria-hidden="true"
      >
        {/* Shield background */}
        <path
          d="M24 4L7 10.5V23C7 33.5 14.5 41.5 24 44C33.5 41.5 41 33.5 41 23V10.5L24 4Z"
          className="fill-secondary stroke-primary/30"
          strokeWidth="1.5"
        />
        {/* Inner geometric contour */}
        <path
          d="M24 8L11 13V22.5C11 31 16.8 37.6 24 39.8C31.2 37.6 37 31 37 22.5V13L24 8Z"
          className="fill-background"
        />
        {/* Bobcat ears / chevron geometry in crimson red */}
        <path
          d="M17 17L24 12L31 17L33 24L24 20L15 24L17 17Z"
          className={`fill-primary transition-all duration-300 ${animated ? "group-hover:brightness-110" : ""}`}
        />
        {/* Stylized code brackets & node core */}
        <path
          d="M19 28L15 32L19 36"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29 28L33 32L29 36"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="32" r="2" className="fill-primary" />
        {/* Precision circuit lines */}
        <line x1="24" y1="20" x2="24" y2="28" className="stroke-primary/40" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span className="font-serif font-bold text-base tracking-tight text-foreground">
            GBCSHS
          </span>
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
            Grand Blanc HS
          </span>
        </div>
      )}
    </div>
  );
}
