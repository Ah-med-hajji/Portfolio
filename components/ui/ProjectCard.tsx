"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Globe, Server, Brain, Workflow } from "lucide-react";
import type { ProjectData } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const categoryStyles: Record<string, { gradient: string; Icon: React.ComponentType<{ className?: string }> }> = {
  "Full-Stack": {
    gradient: "from-[#0f1117] to-[#1a2744]",
    Icon: Globe,
  },
  DevOps: {
    gradient: "from-[#0f1117] to-[#0d2137]",
    Icon: Server,
  },
  AI: {
    gradient: "from-[#0f1117] to-[#1a1033]",
    Icon: Brain,
  },
  Automation: {
    gradient: "from-[#0f1117] to-[#0d1f1a]",
    Icon: Workflow,
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const style = categoryStyles[project.category];
  const PlaceholderIcon = style?.Icon ?? Code;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.1, duration: 0.35 }}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(56,189,248,0.4)",
        boxShadow: "0 0 20px rgba(56,189,248,0.15)",
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-colors"
    >
      <div className={`relative flex h-44 w-full items-center justify-center bg-gradient-to-br ${style?.gradient ?? "from-[#0f1117] to-[#1a1a2e]"}`}>
        <PlaceholderIcon className="h-10 w-10 text-white/10" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 w-fit rounded-full bg-cyan-400/10 px-2.5 py-0.5 text-xs font-medium text-cyan-400">
          [{project.category}]
        </span>
        <h3 className="mb-1 text-lg font-semibold text-white">
          {project.name}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <Code className="h-4 w-4" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
