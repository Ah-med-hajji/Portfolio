"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Lock,
  Users,
  Calendar,
  DollarSign,
  UserCog,
  CalendarDays,
  BarChart2,
  BookOpen,
  Bell,
  Shield,
  Globe,
  Code2,
} from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Calendar,
  DollarSign,
  UserCog,
  CalendarDays,
  BarChart2,
  BookOpen,
  Bell,
  Shield,
  Globe,
};

/* ── Impact stat with count-up (for numeric values) ── */
function ImpactStat({ value, label }: { value: string; label: string }) {
  const numericPart = parseInt(value, 10);
  const suffix = value.replace(String(numericPart), "");
  const isNumeric = !isNaN(numericPart);

  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNumeric) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / 1200, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * numericPart));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isNumeric, numericPart]);

  return (
    <div ref={ref} className="flex flex-col items-center px-3 py-2">
      <span className="text-xl font-bold text-[#38bdf8]">
        {isNumeric ? `${count}${suffix}` : value}
      </span>
      <span className="text-[11px] text-gray-500">{label}</span>
    </div>
  );
}

/* ── Browser Mockup ── */
function BrowserMockup({ url, companyName }: { url: string; companyName: string }) {
  const [iframeFailed, setIframeFailed] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-xl border border-cyan-400/15 shadow-[0_0_40px_rgba(56,189,248,0.05)]"
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-2 bg-[#1e2130] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
        <div className="ml-3 flex flex-1 items-center justify-center gap-1.5 rounded bg-[#0f1117]/50 px-3 py-1">
          <Lock className="h-3 w-3 text-gray-500" />
          <span className="text-xs text-gray-500">{url.replace("https://", "")}</span>
        </div>
      </div>

      {/* Content */}
      {!iframeFailed ? (
        <iframe
          src={url}
          sandbox="allow-scripts allow-same-origin"
          scrolling="no"
          onError={() => setIframeFailed(true)}
          onLoad={(e) => {
            try {
              const doc = (e.target as HTMLIFrameElement).contentWindow?.document;
              if (!doc) setIframeFailed(true);
            } catch {
              setIframeFailed(true);
            }
          }}
          className="pointer-events-none h-[340px] w-full border-0"
          title={`${companyName} preview`}
        />
      ) : (
        <FallbackPreview companyName={companyName} />
      )}
    </motion.div>
  );
}

/* ── Fallback placeholder (looks designed, not broken) ── */
function FallbackPreview({ companyName }: { companyName: string }) {
  return (
    <div className="flex h-[340px] w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#1a1f35] to-[#0f1117]">
      <div className="flex items-center gap-2">
        <Code2 className="h-6 w-6 text-[#38bdf8]" />
        <span className="text-xl font-bold text-white">{companyName}</span>
      </div>
      <p className="text-sm text-gray-400">
        Turnkey Solution for Schools &amp; Universities
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {["Craft ERP", "Craft LMS", "CraftorAI", "QuizShip"].map((name) => (
          <span
            key={name}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function Experience() {
  const exp = EXPERIENCE[0];

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Experience
          </h2>
          <p className="text-gray-400">
            Where I&apos;ve worked and what I&apos;ve shipped.
          </p>
        </FadeInSection>

        <FadeInSection>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[55fr_45fr]">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* Role header */}
              <div>
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  {exp.company}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <p className="mt-1 text-xs text-gray-500">
                  {exp.location} · {exp.period}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-400">
                {exp.description}
              </p>

              {/* Modules grid */}
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  ERP Modules Delivered
                </h4>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {exp.modules.map((mod) => {
                    const Icon = iconMap[mod.icon] ?? Code2;
                    return (
                      <div
                        key={mod.label}
                        className="flex flex-col items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] p-2.5"
                      >
                        <Icon className="h-4 w-4 text-cyan-400" />
                        <span className="text-center text-[11px] text-gray-300">
                          {mod.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Impact stats */}
              <div className="flex flex-wrap justify-start divide-x divide-white/5 rounded-lg border border-white/5 bg-white/[0.02]">
                {exp.stats.map((s) => (
                  <ImpactStat key={s.label} value={s.value} label={s.label} />
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4">
              <BrowserMockup
                url={exp.companyUrl}
                companyName={exp.company}
              />
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
              >
                Visit CraftSchoolship
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
