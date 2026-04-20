"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            What I Do
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            I don&apos;t just build software — I architect systems, automate
            workflows, and help businesses operate smarter with AI.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
