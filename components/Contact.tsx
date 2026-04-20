"use client";

import { motion } from "framer-motion";
import { Mail, Globe, User } from "lucide-react";
import {
  CONTACT_HEADING,
  CONTACT_SUBJECTS,
  FORMSPREE_ID,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  CALENDLY_URL,
} from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {CONTACT_HEADING}
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form
            action={`https://formspree.io/f/${FORMSPREE_ID}`}
            method="POST"
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
              className="w-full rounded-full bg-cyan-400 py-3 text-sm font-semibold text-[#0f1117] transition-colors hover:bg-cyan-300"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-gray-300 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 text-cyan-400" />
                {EMAIL}
              </a>
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
        </div>
      </div>
    </section>
  );
}
