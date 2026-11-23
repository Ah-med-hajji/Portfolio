"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, Search } from "lucide-react";
import MobileMenu from "@/components/ui/MobileMenu";
import { openPalette } from "@/components/ui/CommandPalette";
import { useContent } from "@/lib/content/context";

const sectionId = (href: string) => href.split("#")[1] ?? "";

export default function Navbar({ altHref }: { altHref: string }) {
  const c = useContent();
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
    const ids = Array.from(new Set(c.NAV_LINKS.map((l) => sectionId(l.href))));
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
  }, [c.NAV_LINKS]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const linkClass = (href: string) =>
    activeId === sectionId(href) ? "text-cyan-400" : "text-gray-300 hover:text-white";
  const langClass =
    "flex h-11 min-w-11 items-center justify-center rounded-full text-xs font-semibold tracking-wider text-gray-300 transition-colors hover:text-white";
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
            href={`${c.HOME_PATH}#`}
            aria-label={c.NAV_HOME_LABEL}
            className="flex h-11 items-center text-xl font-bold text-white"
          >
            {c.SITE_INITIALS}
            <span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            {c.NAV_LINKS.map((link) =>
              link.isCTA ? (
                <a key={link.label} href={link.href} className={`hidden whitespace-nowrap lg:inline-flex ${ctaClass}`}>
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative whitespace-nowrap text-sm transition-colors duration-200 ${linkClass(link.href)}`}
                >
                  {link.label}
                  {activeId === sectionId(link.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              )
            )}
            <span className="flex items-center gap-1 border-l border-white/10 pl-4">
              <button
                onClick={openPalette}
                aria-label={c.PALETTE.openLabel}
                className="flex h-11 items-center gap-2 rounded-full px-2 text-gray-400 transition-colors hover:text-white"
              >
                <Search className="h-4 w-4" />
                <kbd className="hidden rounded border border-white/10 px-1.5 py-0.5 font-sans text-[11px] text-gray-400 lg:inline">
                  {c.PALETTE.shortcut}
                </kbd>
              </button>
              <a href={altHref} hrefLang={c.ALT_LANG.code.toLowerCase()} aria-label={c.ALT_LANG.ariaLabel} className={langClass}>
                {c.ALT_LANG.code}
              </a>
            </span>
          </div>

          <div className="flex items-center md:hidden">
            <a href={altHref} hrefLang={c.ALT_LANG.code.toLowerCase()} aria-label={c.ALT_LANG.ariaLabel} className={langClass}>
              {c.ALT_LANG.code}
            </a>
          <button
            onClick={() => setMobileOpen(true)}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-white md:hidden"
            aria-label={c.NAV_OPEN_LABEL}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} activeId={activeId} ctaClass={ctaClass} onClose={closeMobile} />
    </>
  );
}
