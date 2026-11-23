"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS, NAV_CLOSE_LABEL } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  activeId: string;
  ctaClass: string;
  onClose: () => void;
}

// Rendered outside <nav>: the navbar's backdrop-filter would otherwise become the
// containing block for this fixed drawer and clip it to the navbar's height.
export default function MobileMenu({ open, activeId, ctaClass, onClose }: MobileMenuProps) {
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
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 md:hidden"
          />
          <motion.div
            key="drawer"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-[61] flex w-72 max-w-[85vw] flex-col border-l border-white/5 bg-[#0f1117] p-6 md:hidden"
          >
            <button
              onClick={onClose}
              className="-ml-2 mb-6 flex h-11 w-11 items-center justify-center text-white"
              aria-label={NAV_CLOSE_LABEL}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className={
                    link.isCTA
                      ? `mt-4 text-center ${ctaClass} py-3`
                      : `flex min-h-11 items-center text-base ${
                          activeId === link.href.replace("#", "")
                            ? "text-cyan-400"
                            : "text-gray-300 hover:text-white"
                        }`
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
