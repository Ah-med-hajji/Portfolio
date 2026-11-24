import Link from "next/link";
import type { Content } from "@/lib/content";
import { getLighthouseReport, SCORE_KEYS } from "@/lib/lighthouse";

// Footer line with the latest measured scores for the home page, linking to the colophon
export default async function LighthouseLine({ c }: { c: Content }) {
  const report = await getLighthouseReport();
  const home = report?.pages.find((p) => p.path === "/") ?? report?.pages[0];
  const href = `${c.HOME_PATH === "/" ? "" : c.HOME_PATH}${c.BUILT_PATH}`;

  return (
    <Link
      href={href}
      className="inline-flex min-h-11 flex-wrap items-center justify-center gap-x-2 text-xs text-gray-400 transition-colors hover:text-cyan-300"
    >
      {home ? (
        <>
          <span>{c.FOOTER_LIGHTHOUSE.label}:</span>
          {SCORE_KEYS.map((k, i) => (
            <span key={k} className="font-[family-name:var(--font-geist-mono)] text-gray-300">
              <span className="sr-only">{c.BUILT_PAGE.categories[k]} </span>
              {Math.round(home.scores[k] * 100)}
              {i < SCORE_KEYS.length - 1 && <span aria-hidden className="ml-2 text-gray-600">·</span>}
            </span>
          ))}
          <span aria-hidden>→</span>
        </>
      ) : (
        <span>{c.FOOTER_LIGHTHOUSE.linkLabel} →</span>
      )}
    </Link>
  );
}
