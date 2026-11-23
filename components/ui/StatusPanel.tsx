"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";
import { useContent } from "@/lib/content/context";

type StatusResponse = { checkedAt: string; services: Record<string, boolean> };
type State = { kind: "loading" } | { kind: "error" } | { kind: "ok"; data: StatusResponse };

const REFRESH_MS = 60_000;

// Live health of the products on this site, from /api/status
export default function StatusPanel() {
  const c = useContent();
  const t = c.STATUS_PANEL;
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const res = await fetch("/api/status");
        if (!res.ok) throw new Error(String(res.status));
        const data: StatusResponse = await res.json();
        if (alive) setState({ kind: "ok", data });
      } catch {
        if (alive) setState({ kind: "error" });
      }
    };
    load();
    const id = setInterval(() => document.visibilityState === "visible" && load(), REFRESH_MS);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  const time =
    state.kind === "ok"
      ? new Date(state.data.checkedAt).toLocaleTimeString(c.LANG, { hour: "2-digit", minute: "2-digit" })
      : null;

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0b0e14]/80 p-4 font-[family-name:var(--font-geist-mono)] shadow-[0_0_40px_rgba(56,189,248,0.06)] backdrop-blur">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-2 truncate text-xs uppercase tracking-wider text-gray-400">
          <Activity className="h-3.5 w-3.5 text-cyan-400" />
          {t.title}
        </span>
        <span className="flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-green-400/10 px-2 py-0.5 text-[11px] text-green-300">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 motion-safe:animate-pulse" />
          {t.live}
        </span>
      </div>

      <ul className="space-y-1.5" aria-live="polite">
        {c.STATUS_SERVICES.map((s) => {
          const up = state.kind === "ok" ? state.data.services[s.id] === true : null;
          const label = state.kind === "loading" ? t.checking : state.kind === "error" ? t.unavailable : up ? t.up : t.down;
          const dot = up === null ? "bg-gray-500" : up ? "bg-green-400" : "bg-amber-400";
          return (
            <li key={s.id} className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
              <span className="min-w-0">
                <span className="block truncate text-[13px] text-gray-200">{s.name}</span>
                <span className="block truncate text-[11px] text-gray-500">{s.detail}</span>
              </span>
              <span className="flex flex-shrink-0 items-center gap-1.5 text-[11px] text-gray-300">
                <span className={`h-2 w-2 rounded-full ${dot}`} />
                {label}
              </span>
            </li>
          );
        })}
      </ul>

      <p className="mt-3 text-[11px] leading-relaxed text-gray-500">
        {time && `${t.checkedAt} ${time} · `}
        {t.footnote}
      </p>
    </div>
  );
}
