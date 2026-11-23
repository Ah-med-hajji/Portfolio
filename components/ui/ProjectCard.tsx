"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import type { ProjectData } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reduced = useReducedMotion();
  const featured = project.featured === true;

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: reduced ? 0 : (index % 2) * 0.1 }}
      className={`group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] sm:p-8 ${
        featured ? "lg:col-span-2 bg-gradient-to-br from-cyan-400/[0.04] to-purple-400/[0.03]" : ""
      }`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 font-medium text-cyan-400">
          {project.role}
        </span>
        <span className="text-gray-400">{project.period}</span>
      </div>

      <h3 className={`mb-3 font-semibold text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
        {project.name}
      </h3>

      <div className={featured ? "grid gap-6 lg:grid-cols-2 lg:gap-10" : ""}>
        <p className="mb-5 text-sm leading-relaxed text-gray-400 sm:text-base">{project.summary}</p>
        <ul className="mb-6 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-gray-300">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            {project.link.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
