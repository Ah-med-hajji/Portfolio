"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import {
  SECTIONS,
  EMAIL,
  COPY_EMAIL_LABEL,
  COPIED_TOAST,
  BOOKING_TITLE,
  BOOKING_NOTE,
  BOOKING_OPTIONS,
  CALENDLY_URL,
} from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";
import { showToast } from "@/components/ui/Toast";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      showToast(COPIED_TOAST);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id={SECTIONS.contact.id} className="scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader copy={SECTIONS.contact} />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <FadeInSection>
            <ContactForm />
          </FadeInSection>

          <FadeInSection delay={0.1} className="flex flex-col gap-6">
            <div className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <Mail className="h-5 w-5 flex-shrink-0 text-cyan-400" />
              <a
                href={`mailto:${EMAIL}`}
                className="min-w-0 flex-1 truncate text-sm text-gray-200 transition-colors hover:text-white sm:text-base"
              >
                {EMAIL}
              </a>
              <button
                onClick={handleCopy}
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                aria-label={COPY_EMAIL_LABEL}
              >
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <SocialLinks showLabels />

            <div>
              <h3 className="mb-1 text-lg font-semibold text-white">{BOOKING_TITLE}</h3>
              <p className="mb-4 text-xs text-gray-400">{BOOKING_NOTE}</p>
              <div className="space-y-3">
                {BOOKING_OPTIONS.map((opt) => (
                  <a
                    key={opt.title}
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-cyan-400/40"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium text-white">{opt.title}</p>
                      <span className="inline-flex flex-shrink-0 items-center gap-1 text-xs font-medium text-cyan-400">
                        {opt.cta}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-400">{opt.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
