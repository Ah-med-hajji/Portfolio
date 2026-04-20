"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";
import FilterBar from "@/components/ui/FilterBar";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          Selected Work
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-gray-400">
          A mix of full-stack apps, DevOps setups, AI tools, and automation
          projects.
        </p>

        <FilterBar
          categories={PROJECT_CATEGORIES}
          active={active}
          onChange={setActive}
        />

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
