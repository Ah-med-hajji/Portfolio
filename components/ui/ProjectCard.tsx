"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { ProjectData } from "@/lib/types";
import { trackSpotlight, SpotlightOverlay } from "@/components/ui/Spotlight";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reduced = useReducedMotion();
  const featured = project.featured === true;

  const shot = project.image && (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(min-width: 1024px) 520px, 100vw"
        className="object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
      />
    </div>
  );

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: reduced ? 0 : (index % 2) * 0.1 }}
      onMouseMove={trackSpotlight}
      className={`group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] sm:p-8 ${
        featured ? "lg:col-span-2 bg-gradient-to-br from-cyan-400/[0.04] to-purple-400/[0.03]" : ""
      }`}
    >
      <SpotlightOverlay />

      <div className={featured ? "grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10" : ""}>
        <div className="flex flex-col">
          {!featured && shot && <div className="mb-6">{shot}</div>}

          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 font-medium text-cyan-400">
              {project.role}
            </span>
            <span className="text-gray-400">{project.period}</span>
          </div>

          <h3 className={`mb-3 font-semibold text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
            {project.name}
          </h3>
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

        {featured && shot && <div className="order-first lg:order-none">{shot}</div>}
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      {(project.caseStudy || project.link) && (
        <div className="relative mt-5 flex flex-wrap items-center gap-x-6 gap-y-1 border-t border-white/5 pt-4">
          {project.caseStudy && (
            <Link
              href={project.caseStudy.href}
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-cyan-300"
            >
              {project.caseStudy.label}
              <ArrowRight className="h-4 w-4 text-cyan-400 transition-transform motion-safe:group-hover:translate-x-0.5" />
            </Link>
          )}
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
      )}
    </motion.article>
  );
}
