import { ArrowUpRight, Check } from "lucide-react";
import type { Content } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScoresPanel from "@/components/built/ScoresPanel";
import { getLighthouseReport } from "@/lib/lighthouse";

// Colophon: how the site is built, with the scores published by the CI quality check
export default async function BuiltPage({ c }: { c: Content }) {
  const t = c.BUILT_PAGE;
  const report = await getLighthouseReport();

  return (
    <>
      <Navbar altHref={`${c.ALT_LANG.prefix}${c.BUILT_PATH}`} />
      <main className="px-6 pb-20 pt-28 sm:pt-32">
        <article className="mx-auto max-w-4xl">
          <header className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">{t.eyebrow}</p>
            <h1 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{t.title}</h1>
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">{t.intro}</p>
          </header>

          <ScoresPanel c={c} report={report} />

          <div className="mt-14 space-y-12">
            {t.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="mb-4 text-xl font-semibold text-white">{s.heading}</h2>
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-base leading-relaxed text-gray-300">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-1 border-t border-white/5 pt-6">
            {[
              { href: c.QUALITY_RUNS_URL, label: t.viewRuns },
              { href: c.REPO_URL, label: t.viewSource },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </article>
      </main>
      <Footer c={c} />
    </>
  );
}
