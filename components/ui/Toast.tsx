"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ToastData {
  id: number;
  message: string;
  type: "success" | "error";
}

let toastId = 0;
const listeners = new Set<(t: ToastData) => void>();

export function showToast(message: string, type: ToastData["type"] = "success") {
  const t: ToastData = { id: ++toastId, message, type };
  listeners.forEach((fn) => fn(t));
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  useEffect(() => {
    const add = (t: ToastData) => {
      setToasts((prev) => [...prev, t]);
      setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== t.id)), 4000);
    };
    listeners.add(add);
    return () => {
      listeners.delete(add);
    };
  }, []);

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-4 top-20 z-[70] flex flex-col items-center gap-3"
    >
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            role="status"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className={`rounded-lg border px-4 py-3 text-sm shadow-lg backdrop-blur ${
              t.type === "success"
                ? "border-green-400/20 bg-[#0f1117]/90 text-green-300"
                : "border-red-400/20 bg-[#0f1117]/90 text-red-300"
            }`}
          >
            {t.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
