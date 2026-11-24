"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useContent } from "@/lib/content/context";

interface MobileMenuProps {
  open: boolean;
  activeId: string;
  ctaClass: string;
  onClose: () => void;
}

// Rendered outside <nav>: the navbar's backdrop-filter would otherwise become the
// containing block for this fixed drawer and clip it to the navbar's height.
export default function MobileMenu({ open, activeId, ctaClass, onClose }: MobileMenuProps) {
  const c = useContent();
  // Lock page scroll and close on Escape while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <>
      {/* Always mounted so it can slide out; `invisible` when closed removes it from focus and the a11y tree */}
      <div
        onClick={onClose}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-[61] flex w-72 max-w-[85vw] flex-col border-l border-white/5 bg-[#0f1117] p-6 transition-[transform,visibility] duration-300 ease-out md:hidden ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
            <button
              onClick={onClose}
              className="-ml-2 mb-6 flex h-11 w-11 items-center justify-center text-white"
              aria-label={c.NAV_CLOSE_LABEL}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col gap-1">
              {c.NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className={
                    link.isCTA
                      ? `mt-4 text-center ${ctaClass} py-3`
                      : `flex min-h-11 items-center text-base ${
                          activeId === link.href.split("#")[1]
                            ? "text-cyan-400"
                            : "text-gray-300 hover:text-white"
                        }`
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
      </div>
    </>
  );
}
