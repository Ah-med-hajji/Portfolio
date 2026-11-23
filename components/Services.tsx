import { SERVICES, SECTIONS } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";

// 6-column grid on desktop: three cards on the first row, the last two centred below.
const desktopPlacement = (i: number) => (i === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2");

export default function Services() {
  return (
    <section id={SECTIONS.services.id} className="scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader copy={SECTIONS.services} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              className={`${desktopPlacement(i)} ${i === SERVICES.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
