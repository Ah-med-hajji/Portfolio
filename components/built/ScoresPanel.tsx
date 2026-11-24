import { ArrowUpRight, Gauge } from "lucide-react";
import type { Content } from "@/lib/content";
import { SCORE_KEYS, type LighthouseReport } from "@/lib/lighthouse";

// Lighthouse's own colour bands: 90+ good, 50–89 needs work, below 50 poor
const tone = (score: number) =>
  score >= 90 ? "border-green-400/60 text-green-300" : score >= 50 ? "border-amber-400/60 text-amber-300" : "border-red-400/60 text-red-300";

export default function ScoresPanel({ c, report }: { c: Content; report: LighthouseReport | null }) {
  const t = c.BUILT_PAGE;
  const date = report && new Date(report.measuredAt).toLocaleDateString(c.LANG, { day: "numeric", month: "long", year: "numeric" });

  return (
    <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
      <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold text-white">
        <Gauge className="h-5 w-5 text-cyan-400" />
        {t.scoresTitle}
      </h2>
      <p className="mb-6 text-sm text-gray-400">{t.scoresNote}</p>

      {report ? (
        <div className="space-y-4">
          {report.pages.map((page) => (
            <div key={page.path} className="rounded-xl bg-white/[0.03] p-4">
              <p className="mb-3 text-sm font-medium text-gray-200">
                {t.pages[page.path] ?? page.path}
                <span className="ml-2 font-[family-name:var(--font-geist-mono)] text-xs text-gray-400">{page.path}</span>
              </p>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {SCORE_KEYS.map((k) => {
                  const score = Math.round(page.scores[k] * 100);
                  return (
                    <li key={k} className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 font-[family-name:var(--font-geist-mono)] text-sm font-semibold ${tone(score)}`}
                      >
                        {score}
                      </span>
                      <span className="text-xs text-gray-300">{t.categories[k]}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
            <span>
              {t.measured} {date} · {t.commit}{" "}
              <span className="font-[family-name:var(--font-geist-mono)]">{report.commit.slice(0, 7)}</span>
            </span>
            <a
              href={report.runUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 text-cyan-400 hover:text-cyan-300"
            >
              {t.viewRuns}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>
      ) : (
        <p className="text-sm text-gray-300">{t.scoresMissing}</p>
      )}
    </section>
  );
}
