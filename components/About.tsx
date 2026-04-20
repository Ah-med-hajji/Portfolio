"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { ABOUT_TEXT } from "@/lib/constants";

export default function About() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            About
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-400">
            {ABOUT_TEXT}
          </p>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/5"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
