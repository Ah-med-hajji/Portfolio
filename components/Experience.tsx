"use client";

import { ExternalLink } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeInSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Experience
          </h2>
          <p className="text-gray-400">
            Where I&apos;ve worked and what I&apos;ve shipped.
          </p>
        </FadeInSection>

        <div className="relative">
          {/* Vertical accent line */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent sm:left-6" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <FadeInSection key={exp.company} delay={i * 0.1}>
                <div className="relative pl-12 sm:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#0f1117] sm:left-4.5" />

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
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
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
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
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
