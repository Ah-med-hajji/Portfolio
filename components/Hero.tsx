"use client";

import { motion } from "framer-motion";
import TypewriterText from "@/components/ui/TypewriterText";
import {
  HERO_CYCLING_TEXT,
  HERO_SUBTITLE,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-1.5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          <span className="text-sm text-gray-300">Available for new projects</span>
        </motion.div>

        {/* Heading with typewriter */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          <TypewriterText strings={HERO_CYCLING_TEXT} />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400"
        >
          {HERO_SUBTITLE}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#0f1117] transition-colors hover:bg-cyan-300"
          >
            See My Work
          </a>
          <a
            href="#book"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/5"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
