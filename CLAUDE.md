# Portfolio — Ahmed Hajji

## Identity
- **Name:** Ahmed Hajji | **Initials:** AH
- **Tagline:** Tech Lead · DevOps & SRE · AI Consultant & Trainer (secondary line: ERP & Integration · Full-Stack)
- **Site:** https://ahmed-hajji-it.vercel.app
- **GitHub:** https://github.com/Ah-med-hajji/Portfolio
- **Email:** ahmedhajji5401@gmail.com

## Tech Stack
- Next.js 14 (App Router) + TypeScript strict
- Tailwind CSS + Lucide React (no animation library: CSS transitions + one IntersectionObserver)
- Deployed on Vercel (production domain: ahmed-hajji-it.vercel.app)

## Architecture

### Content Layer (ALL text lives here, in two languages)
- `lib/content/en.ts` and `lib/content/fr.ts` — every user-facing string, same export names in both: identity, nav, hero + stats, `SECTIONS`, projects, `CASE_STUDIES`, status panel, command palette, experience, training, services, skills, about/CVs, contact, metadata. Edit BOTH files for any copy change; the `Content` type in `index.ts` fails the build if French is missing an entry
- `lib/content/shared.ts` — language-independent values (name, links, email, Formspree ID, META_URL), re-exported by both
- `lib/content/index.ts` — `getContent(lang)` and the `Content` type
- `lib/content/context.tsx` — `ContentProvider` / `useContent()` for client components; server components take `c: Content` as a prop
- In-page links are home-relative so they work from case-study pages: `/#work` (EN), `/fr#work` (FR — never `/fr/#…`, that redirects)
- `lib/usePaletteItems.ts` — command palette actions
- `lib/types.ts` — TypeScript interfaces for all data shapes
- `lib/useCountUp.ts` — shared count-up animation hook

### Content sources
- Facts come from the CVs. Four are offered for download, all generated from `cv-source/` (see CV pipeline below): Tech Lead CV EN/FR and AI & DevOps Trainer CV EN/FR. Course material lives on the owner's machine under `D:\Ahmed\Work\IT instructor`.
- Agreed facts: 5+ years, 20+ projects, 10+ clients, 3 regions. CraftSchoolship 2022 – 2026 (years only, no months). TieUp: co-founder & CTO, relaunched and built entirely by Ahmed; repo private (no code link).
- Do NOT add: fake testimonials, Atlas Ed (not ready), Marmaris Marble, Maryem Beauty Shop, Chouchene. BS Store only once bs-store.tn and its Supabase project are back online.
- IZ Academy is shown as "production hardening" — never mention the specific critical vulnerability publicly.
- TieUp's backend is deliberately paused (frontend loads without data); its payment provider is a stub — do not claim live payments. The mobile app is out of scope; describe TieUp as web app + admin dashboard + API.
- Case-study facts come from the project repos (`../tieup-cross-platform` HANDOFF/AUDIT docs, `../iz/iz_academy` STATUS / "SRE & OP.md" / iz_review.pdf).

### Components
```
/components
  Navbar.tsx          — fixed, blur when scrolled, active-section underline, ⌘K button, EN/FR switch (`altHref` prop); renders MobileMenu outside <nav>
  Hero.tsx            — server component (text visible at first paint = mobile LCP); name as <h1>, tagline, pitch, location, CTAs, photo, StatusPanel (under photo on desktop, after text on mobile), HeroStats
  Projects.tsx        — Selected Work: case-study grid, featured card spans 2 columns
  Experience.tsx      — vertical timeline of EXPERIENCE entries
  Training.tsx        — Training & Workshops: program cards with course covers, module strip (sm+), approach, AI certs, CTA
  Services.tsx        — 5 service cards (6-col grid on desktop, last two centred)
  Skills.tsx          — grouped skill chips
  About.tsx           — bio, education, certifications, languages, CVDownloads (Tech Lead + Trainer CV, EN/FR each)
  Contact.tsx         — ContactForm + email copy + SocialLinks + Calendly booking options
  Footer.tsx          — nav links, socials, LighthouseLine, copyright
/components/ui
  MobileMenu.tsx      — drawer rendered OUTSIDE <nav> (backdrop-filter would clip a fixed child), backdrop, scroll lock, Escape
  CVDownloads.tsx     — one row per CV with EN / FR download buttons
  SectionHeader.tsx   — eyebrow + title + subtitle from SECTIONS
  HeroStats.tsx       — count-up stats (skipped under reduced motion)
  ProjectCard.tsx     — project card: optional screenshot, highlights, tags, case-study link, live link, spotlight hover
  StatusPanel.tsx     — live production status from /api/status (up/down only; latency is too noisy to show)
  CommandPalette.tsx  — Ctrl/⌘K palette: sections, case studies, CV downloads, copy email, Calendly, switch language
  Spotlight.tsx       — cursor-following glow for cards (trackSpotlight + SpotlightOverlay, SpotlightCard for server components)
  TrainingProgramCard.tsx — course card with cover image and track list
  ServiceCard.tsx     — service card
  ContactForm.tsx     — Formspree form via fetch + toasts
  SocialLinks.tsx     — GitHub / LinkedIn / Email (Lucide Globe/User/Mail)
  FadeInSection.tsx   — scroll reveal wrapper; uses revealProps() from lib/reveal.ts ([data-reveal] in globals.css)
  RevealObserver.tsx  — single IntersectionObserver that adds .is-visible to every [data-reveal] (mounted in RootShell)
  LighthouseLine.tsx  — footer line with the latest CI Lighthouse scores, links to /how-its-built
  BackToTop.tsx, ProgressBar.tsx, Toast.tsx (top-centre, showToast export), CursorGlow.tsx (desktop only)
/components/site
  RootShell.tsx       — <html lang>, fonts, metadata builder, JSON-LD, ContentProvider, global UI, Vercel Analytics
  HomePage.tsx        — Navbar → Hero → Projects → Experience → Training → Services → Skills → About → Contact → Footer
  NotFoundView.tsx    — styled 404
/components/built
  BuiltPage.tsx, ScoresPanel.tsx — /how-its-built colophon (scores read via lib/lighthouse.ts)
/components/case-study
  CaseStudyPage.tsx, CaseStudyHeader.tsx, ArchitectureDiagram.tsx — /work/[slug] pages
```

### App Structure
```
/app
  (en)/               — root layout lang="en": page (/), work/[slug], how-its-built, not-found, [...missing] (catch-all → styled 404), opengraph-image
  (fr)/               — root layout lang="fr"; routes under fr/: /fr, /fr/work/[slug], …
  api/status/route.ts — server-side health checks (IZ API /api/health, iz-academy.com, CabinAI /api/health); CDN-cached 60s
  fonts.ts, globals.css, sitemap.ts (both languages + case studies, hreflang)
  Two root layouts means no app-wide not-found: each language has a [...missing] catch-all instead
/lib/og.tsx           — renderOgImage(c) (Satori: avoid complex CSS gradients)
/public
  avatar.png, favicon.svg, robots.txt
  cv/                 — generated CV PDFs (Ahmed_Hajji_CV_EN/FR, Ahmed_Hajji_Trainer_CV_EN/FR); old Ahmed_Hajji_IT_CV.pdf redirects to the EN CV (next.config.mjs)
  training/           — course covers (webp, compressed from the originals)
  work/               — product screenshots (1200×750 webp, captured from the live sites with Playwright)
/docs                 — README screenshots
```

### Page Section Order
1. Navbar (fixed)
2. Hero (with stats)
3. Selected Work (#work)
4. Experience (#experience)
5. Training & Workshops (#training)
6. Services (#services)
7. Skills (#skills)
8. About (#about)
9. Contact (#contact)
10. Footer

## Performance & quality gate
- `.github/workflows/quality.yml` on every push/PR: tsc, lint, build, Lighthouse CI (`lighthouserc.json`: mobile, 3 runs, median) on /, /fr, /work/tieup
- Fails below 95 performance or below 100 accessibility / best practices / SEO
- On main it publishes `scores.json` (via `scripts/lighthouse-summary.mjs`) to the `lighthouse` branch; `lib/lighthouse.ts` fetches it (revalidate 1h). Never type scores by hand. `vercel.json` disables deploys of that branch
- Keep it fast: no animation libraries, hero text server-rendered, `experimental.optimizeCss` (critters) inlines critical CSS
- Fonts: `app/fonts/*.woff2` are Geist subset to Latin/Latin-1/Latin Ext-A + punctuation with fontTools `pyftsubset`; re-subset from the original Geist files if a new character is needed
- Client components only receive `ClientContent` (`toClientContent` in `lib/content/index.ts`); add a key to `CLIENT_KEYS` if a client component needs it
- Vercel Analytics only renders when `VERCEL=1` (no 404 on local/CI servers)

## Design System
- **Background:** #0f1117 (deep slate)
- **Primary accent:** #38bdf8 (cyan)
- **Secondary accent:** #a78bfa (purple, for AI sections)
- **Font:** Geist (Vercel's font, loaded via next/font/local)
- **Cards:** `rounded-2xl border border-white/5 bg-white/[0.02]`
- **Hover:** border cyan 40%, box-shadow cyan 15% (no scale — it shifts layout)
- **All animations:** `prefers-reduced-motion` fallback (opacity only, no transforms)

## Key Rules
1. **Zero hardcoded strings** — all content in `lib/content/en.ts` + `fr.ts` (both languages, always)
2. **No `any` types** — TypeScript strict mode
3. **No component over 150 lines** — decompose if needed
4. **Calendly** — no embed; links open Calendly in a new tab
5. **Lucide icons** — no brand icons (GitHub, LinkedIn); use `Globe`, `User`, `Mail` instead
6. **Form** — uses Formspree with fetch API (not native action) for toast notifications
7. **Avatar** — `/public/avatar.png` (not .jpg); never pass `unoptimized` to next/image
8. **Tap targets** — interactive elements at least 44px on mobile
9. **Verify responsiveness** at 360 / 390 / 768 / 1024 / 1440px before shipping layout changes

## External Integrations
- **Calendly:** https://calendly.com/ahmedhajji5401 (opens in new tab via CTA button)
- **Formspree:** form ID `xeevlgdl`
- **CraftSchoolship:** https://craftschoolship.com (linked from Work and Experience; no iframe)

## CV pipeline
- Content: `cv-source/content_global.py` (Tech Lead CV) and `cv-source/content_trainer.py` (Trainer CV), each with `EN` and `FR` dicts
- Render: `python3 cv-source/render.py` (reportlab) writes all four PDFs to `public/cv/`
- Fonts: Noto Serif TTFs in `cv-source/fonts/` (gitignored; from github.com/notofonts/notofonts.github.io, fonts/NotoSerif/hinted/ttf)
- Both CVs include the phone number — they are public downloads

## Deployment
- Push to `main` on GitHub auto-triggers Vercel build
- Domain `ahmed-hajji-it.vercel.app` is permanently attached to the project
- Manual deploy: `/home/dell/.npm-global/bin/vercel --prod` from project root
- The `.npm-global/bin` path is needed for Vercel CLI

## Analytics
- `@vercel/analytics` is mounted in RootShell; Web Analytics must be enabled in the Vercel project settings to collect data

## Known follow-ups
- Training: add photos / a short clip and real trainee quotes when available (owner decided to skip for now)
- CabinAI: needs a dashboard screenshot (the app is behind login)
- Testimonials: add a section back only with real, attributable quotes
- Atlas Ed / BS Store: add to Selected Work when live
- Keep the CV content in `cv-source/content_*.py` in sync with `lib/content/*.ts` (years of experience, CraftSchoolship dates, TieUp CTO title)
