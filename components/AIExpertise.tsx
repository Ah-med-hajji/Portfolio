"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AI_HEADING, AI_TABS } from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";

export default function AIExpertise() {
  const [activeTab, setActiveTab] = useState(AI_TABS[0].id);
  const current = AI_TABS.find((t) => t.id === activeTab) ?? AI_TABS[0];

  return (
    <section id="ai" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            AI Expertise
          </h2>
          <p className="mx-auto max-w-xl text-purple-400">{AI_HEADING}</p>
        </FadeInSection>

        {/* Tabs */}
        <FadeInSection className="mb-8 flex justify-center gap-2">
          {AI_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="ai-tab"
                  className="absolute inset-0 rounded-full bg-purple-400/20 border border-purple-400/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </FadeInSection>

        {/* Tab content */}
        <FadeInSection>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-2xl rounded-2xl border border-purple-400/10 bg-purple-400/[0.03] p-8 text-center"
          >
            <h3 className="mb-3 text-xl font-semibold text-white">
              {current.title}
            </h3>
            <p className="leading-relaxed text-gray-400">{current.description}</p>
          </motion.div>
        </FadeInSection>

        {/* Teach CTA */}
        <FadeInSection className="mt-12 text-center">
          <p className="mb-4 text-gray-400">
            I also teach this — hands-on, tailored to your team.
          </p>
          <a
            href="#book"
            className="inline-flex rounded-full bg-purple-400/10 px-5 py-2 text-sm font-medium text-purple-400 ring-1 ring-purple-400/30 transition-colors hover:bg-purple-400/20"
          >
            Book an AI Consultation
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}
