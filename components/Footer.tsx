"use client";

import { Globe, User, Mail } from "lucide-react";
import {
  SITE_NAME,
  TAGLINE,
  NAV_LINKS,
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL,
} from "@/lib/constants";

const socials = [
  { label: "GitHub", href: GITHUB_URL, Icon: Globe },
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: User },
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Name + tagline */}
          <div>
            <p className="text-lg font-bold text-white">
              {SITE_NAME}
              <span className="text-cyan-400">.</span>
            </p>
            <p className="text-sm text-gray-500">{TAGLINE}</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <s.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-600">
          Built with Next.js, Tailwind & Vercel
        </p>
      </div>
    </footer>
  );
}
