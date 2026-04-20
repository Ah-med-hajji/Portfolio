"use client";

import { motion } from "framer-motion";
import {
  Code2,
  GitBranch,
  Container,
  Cloud,
  Activity,
} from "lucide-react";
import { DEVOPS_PIPELINE, DEVOPS_SKILLS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  GitBranch,
  Container,
  Cloud,
  Activity,
};

export default function DevOps() {
  return (
    <section id="devops" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            DevOps & Infrastructure
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            From code push to production monitoring — a fully automated delivery
            pipeline.
          </p>
        </motion.div>

        {/* Pipeline visual */}
        <div className="mb-20 flex flex-wrap items-center justify-center gap-4">
          {DEVOPS_PIPELINE.map((stage, i) => {
            const Icon = iconMap[stage.icon] ?? Code2;
            return (
              <div key={stage.label} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center"
                >
                  <Icon className="h-8 w-8 text-cyan-400" />
                  <span className="text-sm font-semibold text-white">
                    {stage.label}
                  </span>
                  <span className="text-xs text-gray-500">{stage.tool}</span>
                </motion.div>
                {i < DEVOPS_PIPELINE.length - 1 && (
                  <svg
                    className="hidden h-4 w-8 text-gray-600 sm:block"
                    viewBox="0 0 32 16"
                  >
                    <line
                      x1="0"
                      y1="8"
                      x2="28"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <polygon points="28,4 32,8 28,12" fill="currentColor" />
                  </svg>
                )}
              </div>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {DEVOPS_SKILLS.map((col) => (
            <motion.div
              key={col.col}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                {col.col}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
