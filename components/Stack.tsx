"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { STACK, STACK_TOOLTIPS } from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

function ToolTip({ name, children }: { name: string; children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const tip = STACK_TOOLTIPS[name];

  return (
    <span
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && tip && (
        <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2.5 py-1 text-xs text-gray-300 backdrop-blur">
          {tip}
        </span>
      )}
    </span>
  );
}

export default function Stack() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="text-gray-400">
            The tools and technologies I work with daily.
          </p>
        </FadeInSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STACK.map((category, ci) => (
            <motion.div
              key={category.label}
              custom={ci}
              variants={itemVariants}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <ToolTip key={item} name={item}>
                    <span className="cursor-default rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300 transition-colors hover:bg-white/10">
                      {item}
                    </span>
                  </ToolTip>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
