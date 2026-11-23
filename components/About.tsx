import { Download, GraduationCap, Award, Languages } from "lucide-react";
import {
  SECTIONS,
  ABOUT_PARAGRAPHS,
  EDUCATION_TITLE,
  EDUCATION,
  CERTS_TITLE,
  CERTS,
  LANGUAGES_TITLE,
  LANGUAGES,
  CV_DOWNLOADS,
} from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";

const cardClass = "rounded-2xl border border-white/5 bg-white/[0.02] p-5";
const titleClass =
  "mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cyan-400";

export default function About() {
  return (
    <section id={SECTIONS.about.id} className="scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeader copy={SECTIONS.about} align="left" />
          <FadeInSection>
            <div className="space-y-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              {ABOUT_PARAGRAPHS.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {CV_DOWNLOADS.map((cv) => (
                <a
                  key={cv.href}
                  href={cv.href}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-cyan-400/40 hover:bg-white/5"
                >
                  <Download className="h-4 w-4 text-cyan-400" />
                  {cv.label}
                </a>
              ))}
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.1} className="space-y-4 lg:pt-16">
          <div className={cardClass}>
            <h3 className={titleClass}>
              <GraduationCap className="h-4 w-4" />
              {EDUCATION_TITLE}
            </h3>
            <ul className="space-y-3">
              {EDUCATION.map((e) => (
                <li key={e.degree}>
                  <p className="text-sm font-medium text-white">{e.degree}</p>
                  <p className="text-xs text-gray-400">
                    {e.school} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={cardClass}>
            <h3 className={titleClass}>
              <Award className="h-4 w-4" />
              {CERTS_TITLE}
            </h3>
            <ul className="space-y-1.5">
              {CERTS.map((c) => (
                <li key={c} className="text-sm text-gray-300">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className={cardClass}>
            <h3 className={titleClass}>
              <Languages className="h-4 w-4" />
              {LANGUAGES_TITLE}
            </h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <span key={l} className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
