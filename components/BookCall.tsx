"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { BOOKING_OPTIONS, CALENDLY_URL } from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";

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

        {/* Calendar CTA */}
        <FadeInSection>
          <div className="border-t border-white/10 pt-10 text-center">
            <p className="mb-6 text-sm text-gray-400">
              Ready to talk? Pick a time that works for you.
            </p>
            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8] px-8 py-4 text-sm font-semibold text-[#0f1117] transition-colors hover:bg-cyan-300"
            >
              <CalendarDays className="h-5 w-5" />
              Open My Calendar →
            </motion.a>
            <p className="mt-4 text-xs text-gray-500">
              Opens in a new tab · Free 30-min intro call available
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
