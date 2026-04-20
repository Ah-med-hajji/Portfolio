"use client";

import { motion } from "framer-motion";

interface FilterBarProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function FilterBar({
  categories,
  active,
  onChange,
}: FilterBarProps) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            active === cat
              ? "text-white"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          {active === cat && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-cyan-400/20 border border-cyan-400/30"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
}
