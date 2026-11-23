import Image from "next/image";
import { Award, CalendarDays, GraduationCap } from "lucide-react";
import {
  SECTIONS,
  TRAINING_PROGRAMS,
  TRAINING_MODULES,
  TRAINING_APPROACH_TITLE,
  TRAINING_APPROACH,
  TRAINING_CERTS_TITLE,
  TRAINING_CERTS,
  TRAINING_CTA,
  CALENDLY_URL,
} from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import TrainingProgramCard from "@/components/ui/TrainingProgramCard";

export default function Training() {
  return (
    <section id={SECTIONS.training.id} className="scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader copy={SECTIONS.training} />

        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          {TRAINING_PROGRAMS.map((program, i) => (
            <FadeInSection key={program.title} delay={i * 0.1}>
              <TrainingProgramCard program={program} />
            </FadeInSection>
          ))}
        </div>

        {/* Module cover strip */}
        <FadeInSection className="mb-6 sm:mb-12">
          <div className="hidden gap-3 sm:grid sm:grid-cols-4">
            {TRAINING_MODULES.map((m) => (
              <div
                key={m.src}
                className="relative aspect-video overflow-hidden rounded-xl border border-white/5"
              >
                <Image src={m.src} alt={m.alt} fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </FadeInSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeInSection>
            <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                <GraduationCap className="h-4 w-4" />
                {TRAINING_APPROACH_TITLE}
              </h3>
              <ul className="space-y-3">
                {TRAINING_APPROACH.map((a) => (
                  <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-gray-300">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400/60" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
                <Award className="h-4 w-4" />
                {TRAINING_CERTS_TITLE}
              </h3>
              <ul className="space-y-2">
                {TRAINING_CERTS.map((c) => (
                  <li key={c} className="text-sm text-gray-300">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection className="mt-10 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-purple-400/10 px-6 py-3 text-sm font-medium text-purple-300 ring-1 ring-purple-400/30 transition-colors hover:bg-purple-400/20"
          >
            <CalendarDays className="h-4 w-4" />
            {TRAINING_CTA}
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}
