import type { SectionCopy } from "@/lib/types";
import FadeInSection from "@/components/ui/FadeInSection";

interface SectionHeaderProps {
  copy: SectionCopy;
  align?: "center" | "left";
}

export default function SectionHeader({ copy, align = "center" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <FadeInSection className={`mb-12 ${centered ? "text-center" : ""}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {copy.eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{copy.title}</h2>
      {copy.subtitle && (
        <p className={`max-w-2xl text-gray-400 ${centered ? "mx-auto" : ""}`}>
          {copy.subtitle}
        </p>
      )}
    </FadeInSection>
  );
}
