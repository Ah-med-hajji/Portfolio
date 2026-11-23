import { ChevronDown, ChevronRight } from "lucide-react";
import type { CaseStudy } from "@/lib/types";

// Layers left to right on desktop, top to bottom on mobile
export default function ArchitectureDiagram({ arch, label }: { arch: CaseStudy["architecture"]; label: string }) {
  return (
    <section aria-labelledby="architecture" className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">{label}</p>
      <h2 id="architecture" className="mb-2 text-2xl font-semibold text-white">
        {arch.heading}
      </h2>
      <p className="mb-8 text-sm text-gray-400 sm:text-base">{arch.caption}</p>

      <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-stretch lg:gap-0">
        {arch.layers.map((layer, i) => (
          <li key={layer.label} className="flex flex-col items-center lg:flex-1 lg:flex-row">
            <div className="w-full flex-1 self-stretch rounded-xl border border-cyan-400/15 bg-[#0b0e14] p-4 lg:h-full">
              <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-wider text-cyan-300">
                {String(i + 1).padStart(2, "0")} · {layer.label}
              </p>
              <ul className="space-y-2">
                {layer.items.map((item) => (
                  <li key={item} className="rounded-lg bg-white/[0.03] px-3 py-2 text-sm text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {i < arch.layers.length - 1 && (
              <>
                <ChevronDown aria-hidden className="my-1 h-5 w-5 text-cyan-400/60 lg:hidden" />
                <ChevronRight aria-hidden className="mx-1 hidden h-5 w-5 flex-shrink-0 text-cyan-400/60 lg:block" />
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
