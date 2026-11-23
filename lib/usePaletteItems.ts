"use client";

import { useMemo } from "react";
import { ArrowRight, BookOpen, CalendarDays, Copy, Download, Languages } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useContent } from "@/lib/content/context";
import { showToast } from "@/components/ui/Toast";

export interface PaletteItem {
  id: string;
  group: string;
  label: string;
  icon: LucideIcon;
  run: () => void;
}

const go = (href: string) => {
  window.location.href = href;
};

const download = (href: string) => {
  const a = document.createElement("a");
  a.href = href;
  a.download = "";
  a.click();
};

// Everything the command palette can do, in the current language
export function usePaletteItems(): PaletteItem[] {
  const c = useContent();
  return useMemo(() => {
    const g = c.PALETTE.groups;
    const base = c.HOME_PATH === "/" ? "" : c.HOME_PATH;
    const items: PaletteItem[] = [
      ...c.NAV_LINKS.filter((l) => !l.isCTA).map((l) => ({
        id: `nav-${l.href}`,
        group: g.navigate,
        label: l.label,
        icon: ArrowRight,
        run: () => go(l.href),
      })),
      ...c.CASE_STUDIES.map((s) => ({
        id: `work-${s.slug}`,
        group: g.work,
        label: s.name,
        icon: BookOpen,
        run: () => go(`${base}/work/${s.slug}`),
      })),
      ...c.CV_DOWNLOADS.flatMap((cv) =>
        cv.files.map((f) => ({
          id: `cv-${f.href}`,
          group: g.actions,
          label: `${c.PALETTE.downloadCv} · ${cv.label} · ${f.lang}`,
          icon: Download,
          run: () => download(f.href),
        }))
      ),
      {
        id: "copy-email",
        group: g.actions,
        label: c.PALETTE.copyEmail,
        icon: Copy,
        run: () => {
          navigator.clipboard.writeText(c.EMAIL).then(
            () => showToast(c.COPIED_TOAST),
            () => go(`mailto:${c.EMAIL}`)
          );
        },
      },
      {
        id: "book",
        group: g.actions,
        label: c.PALETTE.bookCall,
        icon: CalendarDays,
        run: () => window.open(c.CALENDLY_URL, "_blank", "noopener,noreferrer"),
      },
      { id: "lang", group: g.actions, label: c.PALETTE.switchLang, icon: Languages, run: () => go(c.ALT_LANG.home) },
    ];
    return items;
  }, [c]);
}

// Case- and accent-insensitive match
export const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
