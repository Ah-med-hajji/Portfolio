import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Content } from "@/lib/content";
import type { CaseStudy } from "@/lib/types";

export default function CaseStudyHeader({ c, study }: { c: Content; study: CaseStudy }) {
  const t = c.CASE_STUDY_LABELS;
  return (
    <header>
      <Link
        href={`${c.HOME_PATH}#work`}
        className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.back}
      </Link>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">{study.eyebrow}</p>
      <h1 className="mb-5 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl">{study.title}</h1>
      <p className="mb-8 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">{study.intro}</p>

      <dl className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {study.facts.map((f) => (
          <div key={f.label} className="border-l border-white/10 pl-3">
            <dt className="text-xs uppercase tracking-wider text-gray-400">{f.label}</dt>
            <dd className="mt-1 text-sm text-gray-200">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0e14] shadow-[0_0_60px_rgba(56,189,248,0.08)]">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          {study.link && <span className="ml-3 truncate text-xs text-gray-400">{study.link.label}</span>}
        </div>
        <div className="relative aspect-[16/10]">
          <Image src={study.image.src} alt={study.image.alt} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover object-top" />
        </div>
      </div>

      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        {study.metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-white/5 bg-gradient-to-br from-cyan-400/[0.06] to-purple-400/[0.04] p-5">
            <p className="text-3xl font-bold text-white sm:text-4xl">{m.value}</p>
            <p className="mt-1 text-sm text-gray-400">{m.label}</p>
          </div>
        ))}
      </div>

      {study.link && (
        <a
          href={study.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-12 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300"
        >
          {t.visit} · {study.link.label}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </header>
  );
}
