"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import HeroStats from "@/components/ui/HeroStats";
import StatusPanel from "@/components/ui/StatusPanel";
import { useContent } from "@/lib/content/context";

export default function Hero() {
  const c = useContent();
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: reduced ? 0 : delay },
  });

  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px] sm:h-[600px] sm:w-[600px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-x-16 lg:gap-y-8">
          {/* Photo — first on mobile, top right on desktop */}
          <motion.div {...rise(0)} className="relative justify-self-center lg:col-start-2 lg:row-start-1">
            <div className="relative h-36 w-36 sm:h-44 sm:w-44 lg:h-56 lg:w-56">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/60 to-purple-400/40 blur-md" />
              <Image
                src={c.AVATAR_SRC}
                alt={c.AVATAR_ALT}
                fill
                priority
                sizes="(min-width: 1024px) 224px, (min-width: 640px) 176px, 144px"
                className="relative rounded-full border-2 border-[#0f1117] object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="mx-auto max-w-2xl text-center lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:text-left">
            <motion.div
              {...rise(0.05)}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-1.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <span className="text-sm text-gray-300">{c.HERO_BADGE}</span>
            </motion.div>

            <motion.h1
              {...rise(0.1)}
              className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {c.SITE_NAME}
            </motion.h1>
            <motion.p {...rise(0.15)} className="text-lg font-medium text-cyan-400 sm:text-xl">
              {c.TAGLINE}
            </motion.p>
            <motion.p {...rise(0.15)} className="mb-6 text-base text-purple-300/90 sm:text-lg">
              {c.SUB_TAGLINE}
            </motion.p>

            <motion.p {...rise(0.2)} className="mb-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              {c.HERO_PITCH}
            </motion.p>
            <motion.p
              {...rise(0.2)}
              className="mb-8 text-sm text-gray-400"
            >
              <MapPin className="-mt-0.5 mr-1.5 inline h-4 w-4 text-cyan-400" />
              {c.HERO_LOCATION}
            </motion.p>

            <motion.div
              {...rise(0.25)}
              className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href={c.HERO_CTA_PRIMARY.href}
                className="rounded-full bg-cyan-400 px-7 py-3 text-center text-sm font-semibold text-[#0f1117] transition-colors hover:bg-cyan-300"
              >
                {c.HERO_CTA_PRIMARY.label}
              </a>
              <a
                href={c.HERO_CTA_SECONDARY.href}
                className="rounded-full border border-white/10 px-7 py-3 text-center text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/5"
              >
                {c.HERO_CTA_SECONDARY.label}
              </a>
            </motion.div>
          </div>

          {/* Live production status — after the text on mobile, under the photo on desktop */}
          <motion.div {...rise(0.3)} className="mx-auto w-full max-w-sm lg:col-start-2 lg:row-start-2 lg:max-w-none">
            <StatusPanel />
          </motion.div>
        </div>

        <motion.div {...rise(0.3)} className="mt-14">
          <HeroStats />
        </motion.div>
      </div>
    </section>
  );
}
