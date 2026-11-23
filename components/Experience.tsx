import { ArrowUpRight } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Content } from "@/lib/content";

export default function Experience({ c }: { c: Content }) {
  return (
    <section id={c.SECTIONS.experience.id} className="scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader copy={c.SECTIONS.experience} />

        <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
          {c.EXPERIENCE.map((exp, i) => (
            <li key={`${exp.company}-${exp.role}`} className="relative">
              <span
                className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full ring-4 ring-[#0f1117] sm:-left-[39px] ${
                  exp.current ? "bg-cyan-400" : "bg-gray-600"
                }`}
              />
              <FadeInSection delay={i * 0.05}>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
                        >
                          {exp.company}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <p className="text-sm text-cyan-400">{exp.company}</p>
                      )}
                      <p className="mt-0.5 text-xs text-gray-400">{exp.location}</p>
                    </div>
                    <span
                      className={`w-fit flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                        exp.current ? "bg-cyan-400/10 text-cyan-400" : "bg-white/5 text-gray-300"
                      }`}
                    >
                      {exp.current ? c.EXPERIENCE_CURRENT_LABEL : exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-gray-400">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400/60" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
