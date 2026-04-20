"use client";

import { motion } from "framer-motion";
import { Code2, Server, Zap, ClipboardCheck, Brain } from "lucide-react";
import type { ServiceData } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Server,
  Zap,
  ClipboardCheck,
  Brain,
};

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(56,189,248,0.4)",
        boxShadow: "0 0 20px rgba(56,189,248,0.15)",
      }}
      className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors"
    >
      <div className="mb-4 inline-flex rounded-lg bg-cyan-400/10 p-3 text-cyan-400 transition-colors group-hover:bg-cyan-400/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-400">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-gray-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
