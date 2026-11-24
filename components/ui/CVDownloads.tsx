import { Download } from "lucide-react";
import type { Content } from "@/lib/content";

// One row per CV, with a download button per language
export default function CVDownloads({ c }: { c: Content }) {
  return (
    <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
        <Download className="h-4 w-4" />
        {c.CV_DOWNLOADS_TITLE}
      </h3>
      <ul className="space-y-3">
        {c.CV_DOWNLOADS.map((cv) => (
          <li key={cv.label} className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm font-medium text-white">{cv.label}</span>
            <span className="flex gap-2">
              {cv.files.map((f) => (
                <a
                  key={f.href}
                  href={f.href}
                  download
                  hrefLang={f.lang.toLowerCase()}
                  className="inline-flex h-11 min-w-[3.5rem] items-center justify-center gap-1.5 rounded-full border border-white/10 px-4 text-sm font-medium text-gray-200 transition-colors hover:border-cyan-400/40 hover:bg-white/5 hover:text-white"
                >
                  <Download className="h-3.5 w-3.5 text-cyan-400" />
                  {f.lang}
                  <span className="sr-only"> — {f.ariaLabel}</span>
                </a>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
