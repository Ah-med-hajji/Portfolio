// Turns the Lighthouse CI run results (.lighthouseci/lhr-*.json) into scores.json:
// the median score per category for each page. Published by .github/workflows/quality.yml.
import { readdirSync, readFileSync } from "node:fs";

const DIR = ".lighthouseci";
const KEYS = { performance: "performance", accessibility: "accessibility", bestPractices: "best-practices", seo: "seo" };
const ORDER = ["/", "/fr", "/work/tieup"];

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
};

const byPath = new Map();
for (const file of readdirSync(DIR).filter((f) => /^lhr-.*\.json$/.test(f))) {
  const lhr = JSON.parse(readFileSync(`${DIR}/${file}`, "utf8"));
  const path = new URL(lhr.requestedUrl).pathname;
  if (!byPath.has(path)) byPath.set(path, []);
  byPath.get(path).push(lhr.categories);
}

const pages = [...byPath.entries()]
  .sort(([a], [b]) => ORDER.indexOf(a) - ORDER.indexOf(b))
  .map(([path, runs]) => ({
    path,
    runs: runs.length,
    scores: Object.fromEntries(Object.entries(KEYS).map(([key, id]) => [key, median(runs.map((r) => r[id].score))])),
  }));

const { GITHUB_SHA = "local", GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } = process.env;
const runUrl = GITHUB_RUN_ID ? `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}` : "";

console.log(JSON.stringify({ measuredAt: new Date().toISOString(), commit: GITHUB_SHA, runUrl, formFactor: "mobile", pages }, null, 2));
