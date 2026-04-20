"use client";

import {
  Code2,
  GitBranch,
  Container,
  Cloud,
  Activity,
} from "lucide-react";
import { DEVOPS_PIPELINE, DEVOPS_SKILLS } from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  GitBranch,
  Container,
  Cloud,
  Activity,
};

export default function DevOps() {
  return (
    <section id="devops" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            DevOps & Infrastructure
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            From code push to production monitoring — a fully automated delivery
            pipeline.
          </p>
        </FadeInSection>

        {/* Pipeline visual */}
        <div className="mb-20 flex flex-wrap items-center justify-center gap-4">
          {DEVOPS_PIPELINE.map((stage, i) => {
            const Icon = iconMap[stage.icon] ?? Code2;
            return (
              <FadeInSection key={stage.label} delay={i * 0.1} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
                  <Icon className="h-8 w-8 text-cyan-400" />
                  <span className="text-sm font-semibold text-white">
                    {stage.label}
                  </span>
                  <span className="text-xs text-gray-500">{stage.tool}</span>
                </div>
                {i < DEVOPS_PIPELINE.length - 1 && (
                  <svg
                    className="hidden h-4 w-8 text-gray-600 sm:block"
                    viewBox="0 0 32 16"
                  >
                    <line
                      x1="0" y1="8" x2="28" y2="8"
                      stroke="currentColor" strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <polygon points="28,4 32,8 28,12" fill="currentColor" />
                  </svg>
                )}
              </FadeInSection>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {DEVOPS_SKILLS.map((col) => (
            <FadeInSection key={col.col}>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  {col.col}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-300">
                      <span className="h-1 w-1 rounded-full bg-cyan-400/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
