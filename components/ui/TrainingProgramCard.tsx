import Image from "next/image";
import type { TrainingProgram } from "@/lib/types";

export default function TrainingProgramCard({ program }: { program: TrainingProgram }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-purple-400/10 bg-purple-400/[0.03]">
      <div className="relative aspect-video w-full border-b border-white/5">
        <Image
          src={program.cover}
          alt={program.coverAlt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">{program.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-400">{program.tagline}</p>
        <ul className="mt-auto divide-y divide-white/5 rounded-xl border border-white/5">
          {program.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <span className="text-sm font-medium text-gray-200">{item.title}</span>
              <span className="text-xs text-purple-300/90 sm:text-right">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
