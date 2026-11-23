"use client";

import type { MouseEvent } from "react";

// Soft glow that follows the cursor inside a card. Colour only — no movement, so it is
// fine under reduced motion. The card needs `relative` and `group`.
export function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
}

export function SpotlightOverlay({ color = "56,189,248" }: { color?: string }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: `radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(${color},0.09), transparent 60%)`,
      }}
    />
  );
}

// Wrapper for cards rendered by server components
export function SpotlightCard({
  className = "",
  color,
  children,
}: {
  className?: string;
  color?: string;
  children: React.ReactNode;
}) {
  return (
    <div onMouseMove={trackSpotlight} className={`group relative ${className}`}>
      <SpotlightOverlay color={color} />
      {children}
    </div>
  );
}
