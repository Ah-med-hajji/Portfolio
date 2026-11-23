import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import { getContent } from "@/lib/content";

const c = getContent("fr");
export const dynamicParams = false;

export function generateStaticParams() {
  return c.CASE_STUDIES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = c.CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) return {};
  const path = `${c.HOME_PATH === "/" ? "" : c.HOME_PATH}/work/${study.slug}`;
  return {
    title: `${study.name} — ${c.SITE_NAME}`,
    description: study.intro,
    alternates: {
      canonical: `${c.META_URL}${path}`,
      languages: { en: `${c.META_URL}/work/${study.slug}`, fr: `${c.META_URL}/fr/work/${study.slug}` },
    },
    openGraph: { title: `${study.name} — ${c.SITE_NAME}`, description: study.intro, images: [study.image.src] },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const study = c.CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) notFound();
  return <CaseStudyPage c={c} study={study} />;
}
