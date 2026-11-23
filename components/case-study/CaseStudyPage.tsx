import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Content } from "@/lib/content";
import type { CaseStudy } from "@/lib/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import ArchitectureDiagram from "@/components/case-study/ArchitectureDiagram";

export default function CaseStudyPage({ c, study }: { c: Content; study: CaseStudy }) {
  const t = c.CASE_STUDY_LABELS;
  const others = c.CASE_STUDIES.filter((s) => s.slug !== study.slug);
  const next = others[0];
  const base = c.HOME_PATH === "/" ? "" : c.HOME_PATH;

  return (
    <>
      <Navbar altHref={`${c.ALT_LANG.prefix}/work/${study.slug}`} />
      <main className="px-6 pb-20 pt-28 sm:pt-32">
        <article className="mx-auto max-w-6xl">
          <CaseStudyHeader c={c} study={study} />
          <ArchitectureDiagram arch={study.architecture} label={t.architecture} />

          <div className="mt-16 space-y-14">
            {study.sections.map((s) => (
              <section key={s.heading} className="grid gap-4 lg:grid-cols-[280px_1fr] lg:gap-12">
                <h2 className="text-xl font-semibold text-white lg:sticky lg:top-28 lg:self-start">{s.heading}</h2>
                <div>
                  {s.body && <p className="text-base leading-relaxed text-gray-300 sm:text-lg">{s.body}</p>}
                  {s.points && (
                    <ul className="space-y-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-3 text-base leading-relaxed text-gray-300">
                          <Check className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6 sm:p-8">
              <h2 className="mb-2 text-xl font-semibold text-white">{t.cta}</h2>
              <p className="mb-6 text-gray-400">{t.ctaText}</p>
              <a
                href={`${c.HOME_PATH}#contact`}
                className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#0f1117] transition-colors hover:bg-cyan-300"
              >
                {t.ctaButton}
              </a>
            </div>
            {next && (
              <Link
                href={`${base}/work/${next.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-cyan-400/40 sm:p-8"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{t.next}</span>
                <span className="mt-3 flex items-center justify-between gap-4 text-xl font-semibold text-white">
                  {next.name}
                  <ArrowRight className="h-5 w-5 text-cyan-400 transition-transform motion-safe:group-hover:translate-x-1" />
                </span>
              </Link>
            )}
          </div>
        </article>
      </main>
      <Footer c={c} />
    </>
  );
}
