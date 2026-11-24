import * as enModule from "./en";
import * as frModule from "./fr";
import type { Lang } from "../types";

// English string literals widened to string, so French can differ while keeping the same shape
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type Content = Widen<typeof enModule>;

// Typed against the English module: the build fails if French is missing an entry
const dictionaries: Record<Lang, Content> = {
  en: { ...enModule },
  fr: { ...frModule },
};

export function getContent(lang: Lang): Content {
  return dictionaries[lang];
}

// The slice of content client components may read. Kept small because the provider
// serializes it into every page; server components receive the full Content as a prop.
const CLIENT_KEYS = [
  "LANG", "HOME_PATH", "ALT_LANG", "SITE_INITIALS", "EMAIL", "CALENDLY_URL", "FORMSPREE_ID",
  "NAV_LINKS", "NAV_OPEN_LABEL", "NAV_CLOSE_LABEL", "NAV_HOME_LABEL", "BACK_TO_TOP_LABEL",
  "STATS", "STATUS_PANEL", "STATUS_SERVICES", "PALETTE", "CV_DOWNLOADS", "SECTIONS",
  "CONTACT_FORM", "CONTACT_SUBJECTS", "COPY_EMAIL_LABEL", "COPIED_TOAST",
  "BOOKING_TITLE", "BOOKING_NOTE", "BOOKING_OPTIONS", "BUILT_PATH",
] as const satisfies readonly (keyof Content)[];

export type ClientContent = Pick<Content, (typeof CLIENT_KEYS)[number]> & {
  CASE_STUDIES: Pick<Content["CASE_STUDIES"][number], "slug" | "name">[];
};

export function toClientContent(c: Content): ClientContent {
  const picked = Object.fromEntries(CLIENT_KEYS.map((k) => [k, c[k]])) as Pick<Content, (typeof CLIENT_KEYS)[number]>;
  return { ...picked, CASE_STUDIES: c.CASE_STUDIES.map(({ slug, name }) => ({ slug, name })) };
}
