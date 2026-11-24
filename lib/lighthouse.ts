import { LIGHTHOUSE_SCORES_URL } from "@/lib/content/shared";

export type ScoreKey = "performance" | "accessibility" | "bestPractices" | "seo";
export const SCORE_KEYS: ScoreKey[] = ["performance", "accessibility", "bestPractices", "seo"];

export interface PageScores {
  path: string;
  scores: Record<ScoreKey, number>;
}

export interface LighthouseReport {
  measuredAt: string;
  commit: string;
  runUrl: string;
  pages: PageScores[];
}

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null;

function parsePage(v: unknown): PageScores | null {
  if (!isRecord(v) || typeof v.path !== "string" || !isRecord(v.scores)) return null;
  const s = v.scores;
  if (!SCORE_KEYS.every((k) => typeof s[k] === "number")) return null;
  const scores = Object.fromEntries(SCORE_KEYS.map((k) => [k, s[k]])) as Record<ScoreKey, number>;
  return { path: v.path, scores };
}

export function parseReport(v: unknown): LighthouseReport | null {
  if (!isRecord(v) || !Array.isArray(v.pages)) return null;
  const { measuredAt, commit, runUrl } = v;
  if (typeof measuredAt !== "string" || typeof commit !== "string" || typeof runUrl !== "string") return null;
  const pages = v.pages.map(parsePage).filter((p): p is PageScores => p !== null);
  return pages.length ? { measuredAt, commit, runUrl, pages } : null;
}

// Latest scores published by the CI quality check; null until the first run (or if GitHub is unreachable)
export async function getLighthouseReport(): Promise<LighthouseReport | null> {
  try {
    const res = await fetch(LIGHTHOUSE_SCORES_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return parseReport(await res.json());
  } catch {
    return null;
  }
}
