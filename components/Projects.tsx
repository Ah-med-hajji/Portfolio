import { PROJECTS, SECTIONS } from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  return (
    <section id={SECTIONS.work.id} className="scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader copy={SECTIONS.work} />
        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
