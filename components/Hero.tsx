"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";
import {
  HERO_CYCLING_TEXT,
  HERO_SUBTITLE,
} from "@/lib/constants";

export default function Hero() {
  const [hideScroll, setHideScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setHideScroll(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-8">
        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-1.5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 [animation:ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            <span className="text-sm text-gray-300">Available for freelance work</span>
            {/* Tooltip */}
            <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-3 py-1 text-xs text-gray-300 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              Currently taking new projects — response within 24h
            </span>
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
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 lg:mx-0"
          >
            {HERO_SUBTITLE}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
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

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 lg:h-[120px] lg:w-[120px]">
            <div className="absolute inset-0 rounded-full border-[3px] border-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.3)] animate-pulse" />
            <Image
              src="/avatar.png"
              alt="Ahmed Hajji"
              fill
              priority
              unoptimized
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!hideScroll && (
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/60"
          aria-label="Scroll to services"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.a>
      )}
    </section>
  );
}
