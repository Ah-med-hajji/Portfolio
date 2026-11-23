"use client";

import { createContext, useContext } from "react";
import type { Content } from "./index";

const ContentContext = createContext<Content | null>(null);

export function ContentProvider({ c, children }: { c: Content; children: React.ReactNode }) {
  return <ContentContext.Provider value={c}>{children}</ContentContext.Provider>;
}

// Content for client components; server components receive it as the `c` prop
export function useContent(): Content {
  const c = useContext(ContentContext);
  if (!c) throw new Error("useContent must be used inside ContentProvider");
  return c;
}
