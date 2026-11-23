"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Server, ShieldCheck, Boxes, Brain } from "lucide-react";
import type { ServiceData } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Server,
  ShieldCheck,
  Boxes,
  Brain,
};

interface ServiceCardProps {
  service: ServiceData;
  index: number;
  className?: string;
}

export default function ServiceCard({ service, index, className = "" }: ServiceCardProps) {
  const reduced = useReducedMotion();
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: reduced ? 0 : (index % 3) * 0.1 }}
      className={`group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] ${className}`}
    >
      <div className="mb-4 inline-flex w-fit rounded-lg bg-cyan-400/10 p-3 text-cyan-400 transition-colors group-hover:bg-cyan-400/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-gray-400">{service.description}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {service.tools.map((tool) => (
          <span key={tool} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-300">
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
