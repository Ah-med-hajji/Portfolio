"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useContent } from "@/lib/content/context";

export default function BackToTop() {
  const c = useContent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={c.BACK_TO_TOP_LABEL}
          aria-hidden={!visible}
          tabIndex={visible ? 0 : -1}
          className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#38bdf8] text-[#0f1117] shadow-lg shadow-cyan-400/20 transition-[opacity,transform,background-color] duration-200 hover:bg-cyan-300 ${
            visible ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"
          }`}
        >
          <ChevronUp className="h-5 w-5" />
        </button>
  );
}
