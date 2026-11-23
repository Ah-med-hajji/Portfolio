"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useContent } from "@/lib/content/context";
import { normalize, usePaletteItems } from "@/lib/usePaletteItems";

const OPEN_EVENT = "open-command-palette";
export const openPalette = () => window.dispatchEvent(new Event(OPEN_EVENT));

export default function CommandPalette() {
  const c = useContent();
  const items = usePaletteItems();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return q ? items.filter((i) => normalize(`${i.label} ${i.group}`).includes(q)) : items;
  }, [items, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  // Ctrl/Cmd+K anywhere, plus the navbar button
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const run = (i: number) => {
    const item = results[i];
    if (!item) return;
    close();
    item.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") run(active);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center bg-black/60 px-4 pt-[12vh] backdrop-blur-sm" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={c.PALETTE.openLabel}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#12151d] shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-white/5 px-4">
          <Search className="h-4 w-4 flex-shrink-0 text-cyan-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder={c.PALETTE.placeholder}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[active] ? `palette-${results[active].id}` : undefined}
            className="h-14 w-full bg-transparent text-base text-white placeholder:text-gray-500 focus:outline-none"
          />
          <button onClick={close} className="rounded border border-white/10 px-1.5 py-0.5 text-[11px] text-gray-400">
            Esc
          </button>
        </div>
        <ul id="palette-list" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-gray-500">{c.PALETTE.empty}</li>}
          {results.map((item, i) => {
            const Icon = item.icon;
            const showGroup = i === 0 || results[i - 1].group !== item.group;
            return (
              <li key={item.id} role="presentation">
                {showGroup && <p className="px-3 pb-1 pt-3 text-[11px] uppercase tracking-wider text-gray-500">{item.group}</p>}
                <button
                  id={`palette-${item.id}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseMove={() => setActive(i)}
                  onClick={() => run(i)}
                  className={`flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm ${
                    i === active ? "bg-cyan-400/10 text-white" : "text-gray-300"
                  }`}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${i === active ? "text-cyan-400" : "text-gray-500"}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
