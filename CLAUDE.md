# Portfolio — Ahmed Hajji

## Identity
- **Name:** Ahmed Hajji | **Initials:** AH
- **Tagline:** Tech Lead · DevOps & SRE · AI Consultant & Trainer (secondary line: ERP & Integration · Full-Stack)
- **Site:** https://ahmed-hajji-it.vercel.app
- **GitHub:** https://github.com/Ah-med-hajji/Portfolio
- **Email:** ahmedhajji5401@gmail.com

## Tech Stack
- Next.js 14 (App Router) + TypeScript strict
- Tailwind CSS + Framer Motion + Lucide React
- Deployed on Vercel (production domain: ahmed-hajji-it.vercel.app)

## Architecture

### Content Layer (ALL text lives here)
- `lib/constants.ts` — every user-facing string: identity, nav, hero + stats, section headers (`SECTIONS`), projects, experience, training programs, services, skills, about/education/certs, CV downloads, contact form copy, booking options, metadata
- `lib/types.ts` — TypeScript interfaces for all data shapes
- `lib/useCountUp.ts` — shared count-up animation hook

### Content sources
- Facts come from the global CV (`public/cv/Ahmed_Hajji_IT_CV.pdf`, the only CV offered for download) and, for context only, the trainer CV kept off-site (`D:\Ahmed\Work\CV\Claude cv\Ahmed_Hajji_CV_Formateur_IA_DevOps_FR.pdf`). Course material lives on the owner's machine under `D:\Ahmed\Work\IT instructor`.
- Agreed facts: 5+ years, 20+ projects, 10+ clients, 3 regions. CraftSchoolship 2022 – 2026 (years only, no months). TieUp: co-founder & CTO, relaunched and built entirely by Ahmed; repo private (no code link).
- Do NOT add: fake testimonials, Atlas Ed (not ready), Marmaris Marble, Maryem Beauty Shop, Chouchene. BS Store only once bs-store.tn and its Supabase project are back online.
- IZ Academy is shown as "production hardening" — never mention the specific critical vulnerability publicly.

### Components
```
/components
  Navbar.tsx          — fixed, blur when scrolled, active-section underline; renders MobileMenu outside <nav>
  Hero.tsx            — name as <h1>, tagline, pitch, location, CTAs, photo (/public/avatar.png, optimized by next/image), HeroStats
  Projects.tsx        — Selected Work: case-study grid, featured card spans 2 columns
  Experience.tsx      — vertical timeline of EXPERIENCE entries
  Training.tsx        — Training & Workshops: program cards with course covers, module strip (sm+), approach, AI certs, CTA
  Services.tsx        — 5 service cards (6-col grid on desktop, last two centred)
  Skills.tsx          — grouped skill chips
  About.tsx           — bio, education, certifications, languages, CV download button (global CV only)
  Contact.tsx         — ContactForm + email copy + SocialLinks + Calendly booking options
  Footer.tsx          — nav links, socials, copyright
/components/ui
  MobileMenu.tsx      — drawer rendered OUTSIDE <nav> (backdrop-filter would clip a fixed child), backdrop, scroll lock, Escape
  SectionHeader.tsx   — eyebrow + title + subtitle from SECTIONS
  HeroStats.tsx       — count-up stats (skipped under reduced motion)
  ProjectCard.tsx     — case-study card (role, period, summary, highlights, tags, optional live link)
  TrainingProgramCard.tsx — course card with cover image and track list
  ServiceCard.tsx     — service card
  ContactForm.tsx     — Formspree form via fetch + toasts
  SocialLinks.tsx     — GitHub / LinkedIn / Email (Lucide Globe/User/Mail)
  FadeInSection.tsx   — reusable scroll animation (direction, delay, reduced-motion fallback)
  BackToTop.tsx, ProgressBar.tsx, Toast.tsx (top-centre, showToast export), CursorGlow.tsx (desktop only)
```

### App Structure
```
/app
  layout.tsx          — metadata, viewport, Person JSON-LD, fonts, ProgressBar, BackToTop, ToastContainer, CursorGlow
  page.tsx            — Navbar → Hero → Projects → Experience → Training → Services → Skills → About → Contact → Footer
  globals.css         — dark theme, reduced-motion, smooth scroll, no horizontal overflow
  not-found.tsx       — custom 404
  opengraph-image.tsx — OG image (Node runtime, statically generated; Satori: avoid complex CSS gradients)
  sitemap.ts          — sitemap.xml
/public
  avatar.png, favicon.svg, robots.txt
  cv/                 — downloadable CVs
  training/           — course covers (webp, compressed from the originals)
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

## Design System
- **Background:** #0f1117 (deep slate)
- **Primary accent:** #38bdf8 (cyan)
- **Secondary accent:** #a78bfa (purple, for AI sections)
- **Font:** Geist (Vercel's font, loaded via next/font/local)
- **Cards:** `rounded-2xl border border-white/5 bg-white/[0.02]`
- **Hover:** border cyan 40%, box-shadow cyan 15% (no scale — it shifts layout)
- **All animations:** `prefers-reduced-motion` fallback (opacity only, no transforms)

## Key Rules
1. **Zero hardcoded strings** — all content in `lib/constants.ts`
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

## Deployment
- Push to `main` on GitHub auto-triggers Vercel build
- Domain `ahmed-hajji-it.vercel.app` is permanently attached to the project
- Manual deploy: `/home/dell/.npm-global/bin/vercel --prod` from project root
- The `.npm-global/bin` path is needed for Vercel CLI

## Known follow-ups
- Testimonials: add a section back only with real, attributable quotes
- Atlas Ed / BS Store: add to Selected Work when live
- Keep the CV PDF in `public/cv/` in sync with the site (years of experience, CraftSchoolship dates, TieUp CTO title)
