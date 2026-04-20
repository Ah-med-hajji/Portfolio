"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ToastData {
  id: number;
  message: string;
  type: "success" | "error";
}

let toastId = 0;
const listeners: Set<(t: ToastData) => void> = new Set();

export function showToast(message: string, type: "success" | "error" = "success") {
  const t: ToastData = { id: ++toastId, message, type };
  listeners.forEach((fn) => fn(t));
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (t: ToastData) => {
    setToasts((prev) => [...prev, t]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== t.id));
    }, 4000);
  };

  // Subscribe on mount
  if (typeof window !== "undefined" && listeners.size === 0) {
    listeners.add(addToast);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.3 }}
            className={`rounded-lg border px-4 py-3 text-sm shadow-lg backdrop-blur ${
              t.type === "success"
                ? "border-green-400/20 bg-green-400/10 text-green-300"
                : "border-red-400/20 bg-red-400/10 text-red-300"
            }`}
          >
            {t.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
