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
