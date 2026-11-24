import type { Metadata } from "next";
import BuiltPage from "@/components/built/BuiltPage";
import { getContent } from "@/lib/content";

const c = getContent("en");
export const revalidate = 3600;

export const metadata: Metadata = {
  title: `${c.BUILT_PAGE.metaTitle} — ${c.SITE_NAME}`,
  description: c.BUILT_PAGE.metaDescription,
  alternates: {
    canonical: `${c.META_URL}${c.HOME_PATH === "/" ? "" : c.HOME_PATH}${c.BUILT_PATH}`,
    languages: { en: `${c.META_URL}${c.BUILT_PATH}`, fr: `${c.META_URL}/fr${c.BUILT_PATH}` },
  },
};

export default function Page() {
  return <BuiltPage c={c} />;
}
