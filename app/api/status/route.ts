import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Check = { id: string; url: string; healthy: (res: Response) => Promise<boolean> };

const jsonOk = async (res: Response) => {
  if (!res.ok) return false;
  const body: unknown = await res.json();
  if (typeof body !== "object" || body === null) return false;
  const { status, checks } = body as { status?: unknown; checks?: Record<string, unknown> };
  return status === "ok" && Object.values(checks ?? {}).every((v) => v === "ok");
};
const httpOk = async (res: Response) => res.ok;

// Server-side health checks of the products shown on the site
const CHECKS: Check[] = [
  { id: "iz-api", url: "https://izacademy-production.up.railway.app/api/health", healthy: jsonOk },
  { id: "iz-web", url: "https://iz-academy.com", healthy: httpOk },
  { id: "cabinai", url: "https://cabinai.vercel.app/api/health", healthy: jsonOk },
];

async function probe(check: Check): Promise<[string, boolean]> {
  try {
    const res = await fetch(check.url, { cache: "no-store", signal: AbortSignal.timeout(5000) });
    return [check.id, await check.healthy(res)];
  } catch {
    return [check.id, false];
  }
}

export async function GET() {
  const results = await Promise.all(CHECKS.map(probe));
  // This route answering is itself the check for the portfolio
  const services = Object.fromEntries([...results, ["portfolio", true]]);
  return NextResponse.json(
    { checkedAt: new Date().toISOString(), services },
    { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30" } }
  );
}
