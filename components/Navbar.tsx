"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import MobileMenu from "@/components/ui/MobileMenu";
import {
  SITE_INITIALS,
  NAV_LINKS,
  NAV_OPEN_LABEL,
  NAV_HOME_LABEL,
} from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = Array.from(new Set(NAV_LINKS.map((l) => l.href.replace("#", ""))));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const linkClass = (href: string) =>
    activeId === href.replace("#", "") ? "text-cyan-400" : "text-gray-300 hover:text-white";
  const ctaClass =
    "rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400 ring-1 ring-cyan-400/30 transition-colors hover:bg-cyan-400/20";

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full border-b transition-[background-color,backdrop-filter] duration-300 ${
          scrolled ? "border-white/5 bg-[#0f1117]/80 backdrop-blur-lg" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a
            href="#"
            aria-label={NAV_HOME_LABEL}
            className="flex h-11 items-center text-xl font-bold text-white"
          >
            {SITE_INITIALS}
            <span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) =>
              link.isCTA ? (
                <a key={link.label} href={link.href} className={ctaClass}>
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm transition-colors duration-200 ${linkClass(link.href)}`}
                >
                  {link.label}
                  {activeId === link.href.replace("#", "") && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              )
            )}
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-white md:hidden"
            aria-label={NAV_OPEN_LABEL}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} activeId={activeId} ctaClass={ctaClass} onClose={closeMobile} />
    </>
  );
}
