import localFont from "next/font/local";

// Geist subset to Latin + Latin-1 + Latin Extended-A + punctuation/arrows (English and French),
// converted to woff2 with fontTools pyftsubset. Re-subset from the original Geist files if new
// characters are needed.
export const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Below the fold only (status panel, diagrams, kbd hints): not preloaded
export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  preload: false,
});
