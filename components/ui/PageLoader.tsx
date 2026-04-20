"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_INITIALS } from "@/lib/constants";

export default function PageLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loader-shown")) return;
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("loader-shown", "1");
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f1117]"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-5xl font-bold text-[#38bdf8]"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            {SITE_INITIALS}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
