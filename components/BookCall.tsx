"use client";

import dynamic from "next/dynamic";
import { BOOKING_OPTIONS, CALENDLY_URL } from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";

const CalendlyEmbed = dynamic(
  () => import("@/components/ui/CalendlyEmbed"),
  { ssr: false }
);

export default function BookCall() {
  return (
    <section id="book" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Work With Me
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            Whether you need a project built, a system optimized, or your team
            trained on AI — let&apos;s talk.
          </p>
        </FadeInSection>

        {/* Booking cards */}
        <div className="mb-16 grid gap-6 sm:grid-cols-3">
          {BOOKING_OPTIONS.map((opt, i) => (
            <FadeInSection key={opt.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <span className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-400">
                  {opt.price}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {opt.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                  {opt.description}
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400 ring-1 ring-cyan-400/30 transition-colors hover:bg-cyan-400/20"
                >
                  {opt.cta}
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Calendly inline embed */}
        <FadeInSection>
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-2">
            <CalendlyEmbed />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
