"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_INITIALS, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", "")).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-[background-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-white/5 bg-[#0f1117]/80 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-white">
          {SITE_INITIALS}
          <span className="text-cyan-400">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeId === sectionId;

            return link.isCTA ? (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-400 ring-1 ring-cyan-400/30 transition-colors hover:bg-cyan-400/20"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-72 border-l border-white/5 bg-[#0f1117]/95 backdrop-blur-lg p-6 md:hidden"
          >
            <button
              onClick={closeMobile}
              className="mb-8 text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeId === sectionId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMobile}
                    className={
                      link.isCTA
                        ? "rounded-full bg-cyan-400/10 px-4 py-2 text-center text-sm font-medium text-cyan-400 ring-1 ring-cyan-400/30"
                        : isActive
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-white"
                    }
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
