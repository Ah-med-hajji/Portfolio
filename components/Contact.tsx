"use client";

import { useState, FormEvent } from "react";
import { Mail, Globe, User, Copy, Check } from "lucide-react";
import {
  CONTACT_HEADING,
  CONTACT_SUBJECTS,
  FORMSPREE_ID,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  CALENDLY_URL,
} from "@/lib/constants";
import FadeInSection from "@/components/ui/FadeInSection";
import { showToast } from "@/components/ui/Toast";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    showToast("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        showToast("Message sent! I'll reply within 24h.");
        (e.target as HTMLFormElement).reset();
      } else {
        showToast("Something went wrong. Try emailing me directly.", "error");
      }
    } catch {
      showToast("Something went wrong. Try emailing me directly.", "error");
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {CONTACT_HEADING}
          </h2>
        </FadeInSection>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <FadeInSection direction="left">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/5 bg-white/[0.02] p-8"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-gray-300">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-cyan-400/50"
                >
                  {CONTACT_SUBJECTS.map((s) => (
                    <option key={s.value} value={s.value} className="bg-[#0f1117]">
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/50"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-cyan-400 py-3 text-sm font-semibold text-[#0f1117] transition-colors hover:bg-cyan-300 disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </FadeInSection>

          {/* Info */}
          <FadeInSection direction="right">
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="space-y-6">
                {/* Email with copy */}
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {EMAIL}
                  </a>
                  <button
                    onClick={handleCopy}
                    className="relative ml-1 text-gray-500 transition-colors hover:text-white"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-white"
                >
                  <Globe className="h-5 w-5 text-cyan-400" />
                  GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-white"
                >
                  <User className="h-5 w-5 text-cyan-400" />
                  LinkedIn
                </a>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-400/10"
              >
                Or book a call directly on Calendly
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
