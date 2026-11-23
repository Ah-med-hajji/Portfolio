import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Content } from "@/lib/content";

export default function Skills({ c }: { c: Content }) {
  return (
    <section id={c.SECTIONS.skills.id} className="scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader copy={c.SECTIONS.skills} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.SKILLS.map((group, i) => (
            <FadeInSection key={group.label} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <h3 className="mb-3 border-l-2 border-cyan-400 pl-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
