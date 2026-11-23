import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";
import { geistSans, geistMono } from "@/app/fonts";
import { getContent } from "@/lib/content";
import { ContentProvider } from "@/lib/content/context";
import type { Lang } from "@/lib/types";
import ProgressBar from "@/components/ui/ProgressBar";
import BackToTop from "@/components/ui/BackToTop";
import ToastContainer from "@/components/ui/Toast";
import CursorGlow from "@/components/ui/CursorGlow";
import CommandPalette from "@/components/ui/CommandPalette";

const OG_LOCALE: Record<Lang, string> = { en: "en_US", fr: "fr_FR" };

export function buildMetadata(lang: Lang): Metadata {
  const c = getContent(lang);
  const url = `${c.META_URL}${lang === "en" ? "" : "/fr"}`;
  return {
    title: c.META_TITLE,
    description: c.META_DESCRIPTION,
    metadataBase: new URL(c.META_URL),
    icons: { icon: "/favicon.svg" },
    alternates: { canonical: url, languages: { en: c.META_URL, fr: `${c.META_URL}/fr` } },
    robots: { index: true, follow: true },
    openGraph: {
      title: c.META_TITLE,
      description: c.META_DESCRIPTION,
      url,
      siteName: c.SITE_NAME,
      type: "profile",
      locale: OG_LOCALE[lang],
    },
    twitter: { card: "summary_large_image", title: c.META_TITLE, description: c.META_DESCRIPTION },
  };
}

export const viewport: Viewport = { themeColor: "#0f1117", colorScheme: "dark" };

export default function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const c = getContent(lang);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: c.SITE_NAME,
    jobTitle: c.TAGLINE,
    url: c.META_URL,
    image: `${c.META_URL}${c.AVATAR_SRC}`,
    email: `mailto:${c.EMAIL}`,
    address: { "@type": "PostalAddress", addressLocality: "Sousse", addressCountry: "TN" },
    sameAs: [c.LINKEDIN_URL, c.GITHUB_URL],
  };

  return (
    <html lang={lang} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <ContentProvider c={c}>
          <ProgressBar />
          {children}
          <BackToTop />
          <ToastContainer />
          <CursorGlow />
          <CommandPalette />
        </ContentProvider>
        <Analytics />
      </body>
    </html>
  );
}
