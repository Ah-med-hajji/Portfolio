"use client";

import { useEffect, useRef, useState } from "react";
import type { StatItem } from "@/lib/types";
import { useCountUp } from "@/lib/useCountUp";
import { useContent } from "@/lib/content/context";

function Stat({ stat, started }: { stat: StatItem; started: boolean }) {
  const count = useCountUp(stat.value, started);
  return (
    <div className="flex flex-col gap-1 px-2 py-4 text-center lg:text-left">
      <span className="text-2xl font-bold text-[#38bdf8] sm:text-3xl">
        {started ? count : stat.value}
        {stat.suffix}
      </span>
      <span className="text-xs text-gray-400 sm:text-sm">{stat.label}</span>
    </div>
  );
}

export default function HeroStats() {
  const c = useContent();
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 divide-white/5 border-t border-white/5 sm:grid-cols-4 sm:divide-x"
    >
      {c.STATS.map((stat) => (
        <Stat key={stat.label} stat={stat} started={started} />
      ))}
    </div>
  );
}
