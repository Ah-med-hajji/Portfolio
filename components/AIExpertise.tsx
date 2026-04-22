"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Cpu, ArrowRight } from "lucide-react";
import { AI_HEADING, AI_TABS } from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";

function CircuitVisual() {
  return (
    <div className="flex h-full items-center justify-center">
      <svg
        viewBox="0 0 260 260"
        fill="none"
        className="h-64 w-64 text-purple-400/20 sm:h-72 sm:w-72"
      >
        {/* Central brain node */}
        <circle cx="130" cy="130" r="32" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="130" cy="130" r="20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        {/* Neural connections radiating out */}
        <line x1="130" y1="98" x2="130" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="130" y1="162" x2="130" y2="210" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="98" y1="130" x2="40" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="162" y1="130" x2="220" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        {/* Diagonal connections */}
        <line x1="108" y1="108" x2="60" y2="60" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
        <line x1="152" y1="108" x2="200" y2="60" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
        <line x1="108" y1="152" x2="60" y2="200" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
        <line x1="152" y1="152" x2="200" y2="200" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
        {/* Outer nodes */}
        <circle cx="130" cy="50" r="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="130" cy="210" r="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="40" cy="130" r="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="220" cy="130" r="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        {/* Diagonal outer nodes */}
        <circle cx="60" cy="60" r="4" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        <circle cx="200" cy="60" r="4" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        <circle cx="60" cy="200" r="4" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        <circle cx="200" cy="200" r="4" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        {/* Inner ring dots */}
        <circle cx="130" cy="110" r="2.5" fill="currentColor" opacity="0.6" />
        <circle cx="130" cy="150" r="2.5" fill="currentColor" opacity="0.6" />
        <circle cx="110" cy="130" r="2.5" fill="currentColor" opacity="0.6" />
        <circle cx="150" cy="130" r="2.5" fill="currentColor" opacity="0.6" />
      </svg>
    </div>
  );
}

export default function AIExpertise() {
  const [activeTab, setActiveTab] = useState(AI_TABS[0].id);
  const current = AI_TABS.find((t) => t.id === activeTab) ?? AI_TABS[0];

  const tabIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    prompt: Sparkles,
    tokens: Cpu,
    workflow: ArrowRight,
  };

  return (
    <section id="ai" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            AI Expertise
          </h2>
          <p className="mx-auto max-w-xl text-purple-400">{AI_HEADING}</p>
        </FadeInSection>

        <FadeInSection>
          <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr]">
            {/* Left visual — circuit/brain SVG */}
            <div className="hidden lg:block">
              <CircuitVisual />
            </div>

            {/* Right content — tabs + panel */}
            <div>
              {/* Tabs */}
              <div className="mb-8 flex flex-wrap gap-2">
                {AI_TABS.map((tab) => {
                  const TabIcon = tabIcons[tab.id] ?? Brain;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "text-white"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {activeTab === tab.id && (
                        <motion.span
                          layoutId="ai-tab"
                          className="absolute inset-0 rounded-full border border-purple-400/30 bg-purple-400/20"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <TabIcon className="relative z-10 h-3.5 w-3.5" />
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab content */}
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-purple-400/10 bg-purple-400/[0.03] p-8"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {current.title}
                </h3>
                <p className="leading-relaxed text-gray-400">
                  {current.description}
                </p>
              </motion.div>
            </div>
          </div>
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
