"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";

export default function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            Feedback from teams and founders I&apos;ve worked with.
          </p>
        </FadeInSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeInSection key={t.name} delay={i * 0.1}>
              <div className="relative flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                {/* Background quote mark */}
                <span className="pointer-events-none absolute right-4 top-3 text-6xl font-serif leading-none text-cyan-400/10">
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="h-4 w-4 fill-[#38bdf8] text-[#38bdf8]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-400">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
