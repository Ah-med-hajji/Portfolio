"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export default function FadeInSection({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInSectionProps) {
  const reduced = useReducedMotion();

  const offsets = {
    up: { x: 0, y: 40 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  const offset = offsets[direction];

  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduced ? 0.01 : 0.6, delay: reduced ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
