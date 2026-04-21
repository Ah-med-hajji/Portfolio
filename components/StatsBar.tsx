"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";
import { useCountUp } from "@/lib/useCountUp";

function StatItem({ stat, started }: { stat: (typeof STATS)[number]; started: boolean }) {
  const count = useCountUp(stat.value, started);

  return (
    <div className="flex flex-col items-center gap-1 px-4 py-3">
      <span className="text-3xl font-bold text-[#38bdf8]">
        {count}
        {stat.suffix}
      </span>
      <span className="text-xs text-gray-500 sm:text-sm">{stat.label}</span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto grid max-w-4xl grid-cols-2 sm:grid-cols-4">
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} started={started} />
        ))}
      </div>
    </div>
  );
}
