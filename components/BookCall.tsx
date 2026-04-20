"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { BOOKING_OPTIONS, CALENDLY_URL } from "@/lib/constants";

const CalendlyEmbed = dynamic(
  () => import("@/components/ui/CalendlyEmbed"),
  { ssr: false }
);

export default function BookCall() {
  return (
    <section id="book" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Work With Me
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            Whether you need a project built, a system optimized, or your team
            trained on AI — let&apos;s talk.
          </p>
        </motion.div>

        {/* Booking cards */}
        <div className="mb-16 grid gap-6 sm:grid-cols-3">
          {BOOKING_OPTIONS.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
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
            </motion.div>
          ))}
        </div>

        {/* Calendly inline embed */}
        <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-2">
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  );
}
