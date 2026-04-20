"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import type { ProjectData } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      whileHover={{ y: -6, boxShadow: `0 0 24px rgba(56,189,248,0.12)` }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-colors hover:border-cyan-400/30"
    >
      {/* Gradient placeholder for screenshot */}
      <div className="h-44 w-full bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent" />

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
