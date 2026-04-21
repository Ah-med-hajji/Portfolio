# Portfolio — Ahmed Hajji

## Identity
- **Name:** Ahmed Hajji | **Initials:** AH
- **Tagline:** Full-Stack Developer · DevOps · AI Consultant
- **Site:** https://ahmed-hajji-it.vercel.app
- **GitHub:** https://github.com/Ah-med-hajji/Portfolio
- **Email:** ahmedhajji5401@gmail.com

## Tech Stack
- Next.js 14 (App Router) + TypeScript strict
- Tailwind CSS + Framer Motion + Lucide React
- Deployed on Vercel (production domain: ahmed-hajji-it.vercel.app)

## Architecture

### Content Layer (ALL text lives here)
- `lib/constants.ts` — every user-facing string, project data, service data, testimonials, experience, stats, nav links, social links, metadata
- `lib/types.ts` — TypeScript interfaces for all data shapes
- `lib/useCountUp.ts` — shared count-up animation hook

### Components
```
/components
  Navbar.tsx          — sticky, blur backdrop, active nav highlighting, mobile drawer
  Hero.tsx            — typewriter text, profile photo (/public/avatar.png), scroll indicator
  StatsBar.tsx        — count-up stats between Hero and Services
  Services.tsx        — 5 service cards with stagger animation
  Projects.tsx        — filterable project grid (FilterBar + ProjectCard)
  Testimonials.tsx    — 3 client testimonial cards
  DevOps.tsx          — pipeline visual + 3-column skills grid
  AIExpertise.tsx     — tabbed AI section (prompt/tokens/workflow)
  BookCall.tsx        — 3 booking cards + Calendly embed
  Stack.tsx           — tool grid with tooltips
  About.tsx           — short bio + CV download button
  Experience.tsx      — two-column: role info + modules grid + impact stats | browser mockup
  Contact.tsx         — Formspree form + copy email + social links
  Footer.tsx          — nav links, socials, built-with
/components/ui
  FadeInSection.tsx   — reusable scroll animation (direction, delay, reduced-motion fallback)
  ServiceCard.tsx     — stagger variant card
  ProjectCard.tsx     — layout-animated card with hover glow
  FilterBar.tsx       — animated pill filter (layoutId)
  TypewriterText.tsx  — cycling text effect
  CalendlyEmbed.tsx   — dynamic import, client-side only
  BackToTop.tsx       — fixed bottom-right, appears after 400px
  ProgressBar.tsx     — reading progress bar, top of viewport
  PageLoader.tsx      — "AH" splash, 1.2s, sessionStorage flag
  Toast.tsx           — toast notification system (showToast export)
  CursorGlow.tsx      — subtle radial glow following cursor (desktop only)
```

### App Structure
```
/app
  layout.tsx          — metadata, fonts, ProgressBar, PageLoader, BackToTop, ToastContainer, CursorGlow
  page.tsx            — section assembly (Navbar → Hero → StatsBar → Services → Projects → Testimonials → DevOps → AIExpertise → BookCall → Stack → About → Experience → Contact → Footer)
  globals.css         — dark theme, reduced-motion, smooth scroll, no horizontal overflow
  not-found.tsx       — custom 404
  opengraph-image.tsx — dynamic OG image (edge runtime, "AH" badge + name + tagline)
  sitemap.ts          — dynamic sitemap.xml
```

### Page Section Order
1. Navbar (fixed)
2. Hero
3. StatsBar
4. Services
5. Projects (with filter)
6. Testimonials
7. DevOps & Infrastructure
8. AI Expertise
9. Book a Consultation (+ Calendly)
10. Tech Stack
11. About
12. Experience
13. Contact
14. Footer

## Design System
- **Background:** #0f1117 (deep slate)
- **Primary accent:** #38bdf8 (cyan)
- **Secondary accent:** #a78bfa (purple, for AI sections)
- **Font:** Geist (Vercel's font, loaded via next/font/local)
- **Cards:** `rounded-2xl border border-white/5 bg-white/[0.02]`
- **Hover:** scale 1.02, border cyan 40%, box-shadow cyan 15%
- **All animations:** `prefers-reduced-motion` fallback (opacity only, no transforms)

## Key Rules
1. **Zero hardcoded strings** — all content in `lib/constants.ts`
2. **No `any` types** — TypeScript strict mode
3. **No component over 150 lines** — decompose if needed
4. **Calendly embed** — must be dynamically imported (`next/dynamic`, `ssr: false`)
5. **Lucide icons** — no brand icons (GitHub, LinkedIn) in this version; use `Globe`, `User`, `Code` instead
6. **Form** — uses Formspree with fetch API (not native action) for toast notifications
7. **Avatar** — `/public/avatar.png` (not .jpg)
8. **Experience section** — uses iframe for craftschoolship.com with styled fallback

## External Integrations
- **Calendly:** https://calendly.com/ahmedhajji5401 (inline embed)
- **Formspree:** form ID `xeevlgdl`
- **CraftSchoolship:** https://craftschoolship.com (loaded in iframe in Experience section)

## Deployment
- Push to `main` on GitHub auto-triggers Vercel build
- Domain `ahmed-hajji-it.vercel.app` is permanently attached to the project
- Manual deploy: `/home/dell/.npm-global/bin/vercel --prod` from project root
- The `.npm-global/bin` path is needed for Vercel CLI

## Known Placeholders (to replace when ready)
- Projects in `constants.ts` → replace with real project data
- CV file → drop `/public/cv.pdf`
- OG image → handled dynamically via `opengraph-image.tsx` (no static file needed)
- Testimonials → placeholder quotes, replace with real ones
