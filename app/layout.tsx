import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  META_TITLE,
  META_DESCRIPTION,
  META_URL,
  SITE_NAME,
  TAGLINE,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  AVATAR_SRC,
} from "@/lib/constants";
import ProgressBar from "@/components/ui/ProgressBar";
import BackToTop from "@/components/ui/BackToTop";
import ToastContainer from "@/components/ui/Toast";
import CursorGlow from "@/components/ui/CursorGlow";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  metadataBase: new URL(META_URL),
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: META_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: META_URL,
    siteName: SITE_NAME,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1117",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: TAGLINE,
  url: META_URL,
  image: `${META_URL}${AVATAR_SRC}`,
  email: `mailto:${EMAIL}`,
  address: { "@type": "PostalAddress", addressLocality: "Sousse", addressCountry: "TN" },
  sameAs: [LINKEDIN_URL, GITHUB_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ProgressBar />
        {children}
        <BackToTop />
        <ToastContainer />
        <CursorGlow />
      </body>
    </html>
  );
}
