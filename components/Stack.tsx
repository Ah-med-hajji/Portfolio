"use client";

import { motion } from "framer-motion";
import { STACK } from "@/lib/constants";

export default function Stack() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="text-gray-400">
            The tools and technologies I work with daily.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300 transition-colors hover:bg-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
