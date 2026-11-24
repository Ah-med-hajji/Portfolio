import type {
  NavLink,
  SectionCopy,
  StatItem,
  ProjectData,
  ExperienceEntry,
  TrainingProgram,
  ModuleCover,
  ServiceData,
  SkillGroup,
  EducationEntry,
  CVDownload,
  BookingOption,
  ContactSubject,
  Lang,
  CaseStudy,
  AltLang,
  StatusService,
} from "../types";

export * from "./shared";
import { SITE_NAME } from "./shared";

export const LANG: Lang = "en";
export const HOME_PATH = "/";
export const ALT_LANG: AltLang = { code: "FR", ariaLabel: "Version française", home: "/fr", prefix: "/fr" };

// ─── IDENTITY ───
export const TAGLINE = "Tech Lead · DevOps & SRE · AI Consultant & Trainer";
export const SUB_TAGLINE = "ERP & Integration · Full-Stack";
export const LOCATION = "Sousse, Tunisia";
export const AVATAR_ALT = "Portrait of Ahmed Hajji";

// ─── NAV ───
export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Training", href: "/#training" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Book a call", href: "/#contact", isCTA: true },
];
export const NAV_OPEN_LABEL = "Open menu";
export const NAV_CLOSE_LABEL = "Close menu";
export const NAV_HOME_LABEL = "Back to top of page";

// ─── HERO ───
export const HERO_BADGE = "Available for projects & training";
export const HERO_LOCATION = `${LOCATION} · Remote · Open to relocation`;
export const HERO_PITCH =
  "I take products from requirements to production — architecture, code, cloud, CI/CD and monitoring — and I train teams to build the same way, including how to use AI properly.";
export const HERO_CTA_PRIMARY = { label: "See my work", href: "/#work" };
export const HERO_CTA_SECONDARY = { label: "Book a call", href: "/#contact" };

export const STATS: StatItem[] = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 10, suffix: "+", label: "Clients" },
  { value: 3, suffix: "", label: "Regions: USA · EU · MENA" },
];

// ─── SECTIONS ───
export const SECTIONS: Record<
  "work" | "experience" | "training" | "services" | "skills" | "about" | "contact",
  SectionCopy
> = {
  work: {
    id: "work",
    eyebrow: "Selected work",
    title: "Products I built and systems I own",
    subtitle:
      "Real platforms in production — from a marketplace I co-founded to an ERP serving schools on three continents.",
  },
  experience: {
    id: "experience",
    eyebrow: "Experience",
    title: "Where I've worked",
    subtitle: "Leadership, infrastructure and teaching — usually at the same time.",
  },
  training: {
    id: "training",
    eyebrow: "Training & workshops",
    title: "I teach what I ship",
    subtitle:
      "Hands-on AI and DevOps courses for professionals, developers and leaders — in French, English or Arabic, on-site or remote.",
  },
  services: {
    id: "services",
    eyebrow: "Services",
    title: "How I can help",
    subtitle: "Pick one, or let me own the whole thing end to end.",
  },
  skills: {
    id: "skills",
    eyebrow: "Skills",
    title: "Toolbox",
    subtitle: "What I use in production, grouped the way I think about it.",
  },
  about: {
    id: "about",
    eyebrow: "About",
    title: "A bit about me",
    subtitle: "",
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Let's work together",
    subtitle:
      "Tell me about your product, your infrastructure or your team's training needs. I reply within 24 hours.",
  },
};

// ─── SELECTED WORK ───
export const PROJECTS: ProjectData[] = [
  {
    name: "TieUp",
    role: "Co-founder & CTO",
    period: "Current",
    summary:
      "A Tunisian freelance marketplace that had shut down. I relaunched it as co-founder and CTO and rebuilt it end to end on my own: a monorepo with a public web app, an admin dashboard and an Express/TypeScript API.",
    highlights: [
      "1,500+ automated tests — unit, Firestore integration and Playwright E2E",
      "82% backend coverage, enforced as a ratchet in CI",
      "Deploys gated on a green test suite in GitHub Actions",
      "English, French and Arabic with right-to-left layouts",
      "Secret scanning and a bundle-size budget checked before every commit",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "Firebase", "GitHub Actions", "Playwright"],
    link: { label: "tieupfreelance.com", href: "https://tieupfreelance.com" },
    caseStudy: { label: "Read the case study", href: "/work/tieup" },
    image: { src: "/work/tieup.webp", alt: "TieUp home page: find the perfect freelance services for your business" },
    featured: true,
  },
  {
    name: "CabinAI",
    role: "Product & engineering",
    period: "In pilot",
    summary:
      "A multi-tenant SaaS that runs a private medical practice: agenda, waiting room, patient files, consultations and payments. First pilot: a dental practice in Sousse.",
    highlights: [
      "Tenant isolation with Postgres row-level security, proven by pgTAP tests",
      "Two-factor authentication and private storage for patient documents",
      "Designed around Tunisian health-data law (2004-63, INPDP)",
      "Lint, types, unit, database and E2E checks before every deploy",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "Playwright"],
    link: { label: "cabinai.vercel.app", href: "https://cabinai.vercel.app" },
  },
  {
    name: "IZ Academy — production hardening",
    role: "Security & reliability audit",
    period: "2026",
    summary:
      "Audited and hardened a live e-learning platform used by students and teachers, then rebuilt its delivery pipeline. Production readiness went from about 5/10 to 9/10.",
    highlights: [
      "35 security and engineering issues found and fixed",
      "Multi-stage Docker builds, CI/CD quality gates, automated backups",
      "Health checks, graceful shutdown, request timeouts, rate limiting",
      "Sentry monitoring, structured logging and Redis caching",
    ],
    tags: ["Docker", "GitHub Actions", "Node.js", "Prisma", "Redis", "Sentry"],
    link: { label: "iz-academy.com", href: "https://iz-academy.com" },
    caseStudy: { label: "Read the case study", href: "/work/iz-academy" },
    image: { src: "/work/iz-academy.webp", alt: "IZ Academy home page: learn at your own pace" },
  },
  {
    name: "Craft ERP — Odoo platform",
    role: "ERP Tech Lead · CraftSchoolship",
    period: "2022 – 2026",
    summary:
      "School-management ERP for a Silicon Valley EdTech: Odoo modules for student records, scheduling, finance, HR and events, deployed across multiple environments and integrated with third-party systems.",
    highlights: [
      "About 30% faster delivery through CI/CD automation",
      "AWS and Azure infrastructure with Terraform, Kubernetes and Helm",
      "Prometheus, Grafana and Kibana observability; RCAs and post-mortems",
      "Production clients across the USA, Europe and MENA",
    ],
    tags: ["Odoo", "Python", "PostgreSQL", "Terraform", "Kubernetes", "GitHub Actions"],
    link: { label: "craftschoolship.com", href: "https://craftschoolship.com" },
  },
  {
    name: "Client web applications",
    role: "Freelance delivery",
    period: "2019 – present",
    summary:
      "E-commerce stores, corporate sites, an HR portal and reservation platforms — delivered from the first requirements call to production and handover.",
    highlights: [
      "Stores with admin panels and WhatsApp ordering",
      "French and Arabic sites with right-to-left layouts",
      "SEO, structured data and automated Vercel deployments",
      "AI and LLM features where they actually help",
    ],
    tags: ["Next.js", "React", "Supabase", "Tailwind", "Vercel"],
  },
];

// ─── CASE STUDIES ───
export const CASE_STUDY_LABELS = {
  back: "Back to all work",
  architecture: "Architecture",
  visit: "Visit the live site",
  next: "Next case study",
  cta: "Want this for your product?",
  ctaText: "I can audit, rebuild or run your platform the same way.",
  ctaButton: "Book a call",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tieup",
    name: "TieUp",
    eyebrow: "Case study · Co-founder & CTO",
    title: "Relaunching a freelance marketplace, alone, with a test suite you can trust",
    intro:
      "TieUp is a Tunisian freelance marketplace that had shut down. I joined as co-founder and CTO to bring it back, and rebuilt the whole platform myself: product, architecture, code, tests, delivery and operations.",
    image: { src: "/work/tieup.webp", alt: "TieUp home page" },
    link: { label: "tieupfreelance.com", href: "https://tieupfreelance.com" },
    facts: [
      { label: "Role", value: "Co-founder & CTO" },
      { label: "Team", value: "Just me" },
      { label: "Stack", value: "React · TypeScript · Express · Firebase" },
      { label: "Languages", value: "English · French · Arabic (RTL)" },
    ],
    metrics: [
      { value: "1,500+", label: "automated tests across backend, web and admin" },
      { value: "82%", label: "statement coverage on the backend logic layers" },
      { value: "3", label: "languages, including Arabic right-to-left" },
    ],
    architecture: {
      heading: "How it fits together",
      caption: "One monorepo, three applications, one API, and a pipeline that refuses to deploy a red build.",
      layers: [
        { label: "Clients", items: ["Public web app — React, Tailwind, React Query", "Admin dashboard — React + TypeScript"] },
        { label: "API", items: ["Express + TypeScript", "Service layer: controllers → services → models", "Central auth and role middleware"] },
        { label: "Data", items: ["Firestore + security rules", "Firebase Auth and Storage", "Realtime Database for messaging"] },
        { label: "Delivery", items: ["GitHub Actions: tests, then deploy", "Secret scanner and bundle budget", "Coverage floors that only go up"] },
      ],
    },
    sections: [
      {
        heading: "The starting point",
        body: "The previous platform had stopped. Relaunching it meant more than redeploying: the code had to be safe to change, cheap to run and easy for one engineer to operate.",
      },
      {
        heading: "What I built",
        points: [
          "A public web app and an admin dashboard on React, with English, French and Arabic, including right-to-left layouts.",
          "An Express/TypeScript API with a clean service layer, centralized authentication and role checks.",
          "Firestore security rules tested against the Firebase emulator, not just written.",
        ],
      },
      {
        heading: "Quality as a system, not a phase",
        points: [
          "1,167 backend unit tests and 86 emulator integration tests; 178 web and 140 dashboard tests; Playwright end-to-end smoke tests.",
          "Coverage floors set at the measured value, rounded down — the build fails on any regression, and every gain is locked in.",
          "Coverage measured on the logic layers that matter, after finding that the old reports skipped them.",
          "Deploys run only after the full test suite passes; secrets and bundle size are checked before every commit.",
        ],
      },
      {
        heading: "Auditing my own work",
        body: "I review the platform on a schedule and grade it across six dimensions, from security and data integrity to performance and operability, against written exit criteria. Each fixed bug becomes a numbered rule the code must keep obeying.",
      },
    ],
  },
  {
    slug: "iz-academy",
    name: "IZ Academy",
    eyebrow: "Case study · Security & reliability audit",
    title: "Making a live e-learning platform safe to run with real students",
    intro:
      "IZ Academy is a French and Arabic e-learning platform built for Tunisia. A full review found it worked, but was not yet safe to run at scale. I audited the code, dependencies and infrastructure, then fixed what I found and rebuilt how it ships.",
    image: { src: "/work/iz-academy.webp", alt: "IZ Academy home page" },
    link: { label: "iz-academy.com", href: "https://iz-academy.com" },
    facts: [
      { label: "Role", value: "Auditor & engineer" },
      { label: "Year", value: "2026" },
      { label: "Stack", value: "React · Express · Prisma · PostgreSQL · Redis" },
      { label: "Hosting", value: "Vercel · Railway · Supabase" },
    ],
    metrics: [
      { value: "35", label: "security and engineering issues found and fixed" },
      { value: "5 → 9", label: "production-readiness score, out of 10" },
      { value: "17", label: "controllers moved to one error-handling pattern" },
    ],
    architecture: {
      heading: "The platform after hardening",
      caption: "Same product, now with health checks, timeouts, limits and alerts at every layer.",
      layers: [
        { label: "Client", items: ["React (Vite) on Vercel", "Cache rules that prevent blank pages after a deploy"] },
        { label: "API", items: ["Express + TypeScript on Railway", "Timeouts, rate limits, graceful shutdown", "OpenAPI docs on every route"] },
        { label: "Data & jobs", items: ["PostgreSQL via Prisma", "Redis cache and BullMQ queues", "Paginated queries with hard caps"] },
        { label: "Operations", items: ["GitHub Actions CI/CD", "Health endpoint: database + Redis", "Sentry and structured logs"] },
      ],
    },
    sections: [
      {
        heading: "The audit",
        body: "I reviewed the full codebase, its dependencies and the way it was deployed, and wrote a plain-language report: what can hurt students, money or trust, ranked by risk, each with a fix.",
      },
      {
        heading: "What I fixed",
        points: [
          "Secret management, dependency upgrades and access controls brought up to production standard.",
          "One error-handling pattern across all 17 controllers, replacing 99 scattered try/catch blocks.",
          "Graceful shutdown that drains requests, 30-second request timeouts and per-user rate limiting.",
          "Integration tests on the authentication and enrollment flows, and OpenAPI documentation on every route.",
        ],
      },
      {
        heading: "Running it like production",
        points: [
          "A health endpoint that checks the database and Redis, with its own timeout so it can never hang.",
          "Pagination with hard limits on the heaviest endpoints, and a memory cap that turns silent crashes into visible errors.",
          "Ranked failure modes — connection pool, memory, queues, stale deploys — with the top risks mitigated first.",
          "CI/CD that builds and deploys the front end and the API on every push to main.",
        ],
      },
    ],
  },
];

// ─── LIVE STATUS (hero) ───
export const STATUS_PANEL = {
  title: "Production, right now",
  live: "Live",
  checking: "Checking…",
  up: "Operational",
  down: "Not responding",
  unavailable: "Status check unavailable",
  checkedAt: "Checked",
  footnote: "Real checks from this site's server, refreshed every minute.",
};
export const STATUS_SERVICES: StatusService[] = [
  { id: "iz-api", name: "IZ Academy API", detail: "Database · Redis" },
  { id: "iz-web", name: "IZ Academy", detail: "Web app" },
  { id: "cabinai", name: "CabinAI", detail: "Web app & API" },
  { id: "portfolio", name: "This site", detail: "Vercel" },
];

// ─── COMMAND PALETTE ───
export const PALETTE = {
  hint: "Search",
  shortcut: "Ctrl K",
  placeholder: "Jump to a section, download a CV…",
  empty: "Nothing matches.",
  groups: { navigate: "Go to", work: "Case studies", actions: "Actions" },
  copyEmail: "Copy email address",
  bookCall: "Book a call on Calendly",
  switchLang: "Voir le site en français",
  downloadCv: "Download CV",
  close: "Close",
  openLabel: "Open command palette",
  howBuilt: "How this site is built",
};

// ─── EXPERIENCE ───
export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Co-founder & CTO",
    company: "TieUp",
    companyUrl: "https://tieupfreelance.com",
    location: "Tunisia · Remote",
    period: "Current",
    current: true,
    points: [
      "Relaunched a shut-down freelance marketplace and own all of its technology.",
      "Built the platform alone: architecture, four applications, test suite, CI/CD, payments and operations.",
    ],
  },
  {
    role: "AI & DevOps Trainer",
    company: "IZ Academy",
    companyUrl: "https://iz-academy.com",
    location: "Sousse",
    period: "Current",
    current: true,
    points: [
      "Teach the “AI Tools for Professionals” course: prompt engineering, automation, fact-checking and confidentiality.",
      "Design hands-on exercises that leave non-technical learners with deliverables they use the next day.",
    ],
  },
  {
    role: "ERP Tech Lead · DevOps & Infrastructure",
    company: "CraftSchoolship",
    companyUrl: "https://craftschoolship.com",
    location: "Remote · Silicon Valley startup",
    period: "2022 – 2026",
    points: [
      "Led ERP operations: Odoo customization, deployments, functional analysis and environment management.",
      "Mapped finance, HR and operations processes with stakeholders and turned them into technical designs.",
      "Designed AWS and Azure infrastructure with Terraform, Kubernetes, Helm, Istio and Ansible.",
      "Improved delivery velocity by about 30%; owned incidents from triage to post-mortem.",
      "Ran sprints, reviewed code and mentored engineers; supported clients in the USA, Europe and MENA.",
    ],
  },
  {
    role: "Independent Consultant & Trainer",
    company: "Freelance",
    location: "Remote",
    period: "2019 – present",
    points: [
      "End-to-end client delivery: discovery, estimation, architecture, build, deployment and handover.",
      "Teach algorithms, web development and DevOps to students and professionals; mentor junior engineers.",
    ],
  },
  {
    role: "Full-Stack Developer — Internship",
    company: "Mobelite",
    location: "Monastir",
    period: "2023",
    points: [
      "Built and deployed a hotel guest expense-management app with Angular, Node.js, Express and MongoDB.",
    ],
  },
];
export const EXPERIENCE_CURRENT_LABEL = "Now";

// ─── TRAINING ───
export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    title: "AI Tools, Done Right",
    tagline:
      "Three labs-first tracks. Every lab runs in Claude and ChatGPT side by side, so the skills transfer.",
    cover: "/training/ai-tools.webp",
    coverAlt: "Cover of the Work Smarter With AI course",
    items: [
      { title: "Track A · AI for Knowledge Workers", detail: "8 modules · 24–32 h · no code" },
      { title: "Track B · AI Engineering for Developers", detail: "9 modules · 32–40 h · APIs, evals, agents" },
      { title: "Track C · AI for Leaders", detail: "8 sessions · ~24 h · cost, risk, adoption" },
    ],
  },
  {
    title: "DevOps Essentials",
    tagline:
      "From your first commit to a running cluster. One project, built across 20 sessions, on zero-cost tooling.",
    cover: "/training/devops-essentials.webp",
    coverAlt: "Cover of the DevOps Essentials course",
    items: [
      { title: "Core track", detail: "Linux, Git, CI, Docker, CD, Kubernetes, demo day" },
      { title: "Extension track", detail: "Networking, Jenkins, Helm, Terraform, observability, DevSecOps" },
      { title: "Formats", detail: "16 h beginner course to a 40 h bootcamp" },
    ],
  },
];

export const TRAINING_MODULES: ModuleCover[] = [
  { src: "/training/module-ci.webp", alt: "Module 4: Continuous Integration" },
  { src: "/training/module-docker.webp", alt: "Module 5: Docker & Containers" },
  { src: "/training/module-kubernetes.webp", alt: "Module 7: Kubernetes Essentials" },
  { src: "/training/module-iac.webp", alt: "Module 13: Infrastructure as Code" },
];

export const TRAINING_APPROACH_TITLE = "How I teach";
export const TRAINING_APPROACH: string[] = [
  "Labs first — theory only to make the next lab work.",
  "Every module ends with something you keep: a template, a pipeline, a deployed app.",
  "Honest about limits — hallucinations, privacy, cost, and when not to use AI.",
  "Taught in French, English or Arabic, on-site or remote.",
];

export const TRAINING_CERTS_TITLE = "AI certifications";
export const TRAINING_CERTS: string[] = [
  "Claude Code in Action — Anthropic",
  "Building with the Claude API — Anthropic",
  "Claude Platform — Anthropic",
  "ChatGPT Prompt Engineering for Developers — OpenAI / DeepLearning.AI",
  "Google Prompting Essentials — Google",
  "Fundamentals of Deep Learning — NVIDIA",
  "Building Transformer-Based NLP Applications — NVIDIA",
];

export const TRAINING_CTA = "Book a training for your team";

// ─── SERVICES ───
export const SERVICES: ServiceData[] = [
  {
    icon: "Code2",
    title: "Full-Stack Applications",
    description:
      "Web apps and SaaS from requirements to production: multi-tenant architecture, auth, payments, admin panels and multilingual interfaces.",
    tools: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
  },
  {
    icon: "Server",
    title: "DevOps, SRE & Cloud",
    description:
      "CI/CD with quality gates, containers, infrastructure as code and monitoring — so releases are boring and incidents are short.",
    tools: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS / Azure / GCP", "Grafana"],
  },
  {
    icon: "ShieldCheck",
    title: "Security & Reliability Audits",
    description:
      "A full review of your code, dependencies, infrastructure and delivery pipeline, with a prioritized fix list — and I can implement the fixes.",
    tools: ["Code review", "Dependency scanning", "Secrets & access", "Backups & recovery", "Monitoring"],
  },
  {
    icon: "Boxes",
    title: "ERP / Odoo & Integrations",
    description:
      "Odoo customization, deployment and integration with your other systems — starting from how your business actually works.",
    tools: ["Odoo", "Python", "REST / SOAP", "Webhooks", "PostgreSQL"],
  },
  {
    icon: "Brain",
    title: "AI Integration & Training",
    description:
      "LLM features that are reliable and affordable — prompt design, structured outputs, cost control — and training so your team uses AI well.",
    tools: ["Claude API", "OpenAI API", "RAG", "n8n", "Prompt engineering"],
  },
];

// ─── SKILLS ───
export const SKILLS: SkillGroup[] = [
  {
    label: "Full-Stack",
    items: ["Next.js", "React", "Angular", "TypeScript", "Node.js", "Express", "Laravel", "Prisma", "Tailwind"],
  },
  {
    label: "Cloud, Linux & IaC",
    items: ["AWS", "Azure", "GCP", "Firebase", "Terraform", "Ansible", "Linux", "Bash", "Python"],
  },
  {
    label: "Containers & CI/CD",
    items: ["Docker", "Kubernetes", "Helm", "Istio", "GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
  },
  {
    label: "SRE & Observability",
    items: ["Prometheus", "Grafana", "Kibana", "Sentry", "Alerting", "Incident response", "Post-mortems"],
  },
  {
    label: "Data, ERP & Integration",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Odoo", "REST", "SOAP", "Webhooks"],
  },
  {
    label: "Quality, Security & AI",
    items: ["Jest", "Playwright", "Security audits", "Claude API", "OpenAI API", "LangChain", "n8n"],
  },
];

// ─── ABOUT ───
export const ABOUT_PARAGRAPHS: string[] = [
  "I'm an IT engineer from Sousse, Tunisia, with a Master's in DevOps & Site Reliability Engineering. From 2022 to 2026 I led ERP and infrastructure work at CraftSchoolship, a Silicon Valley EdTech with clients across the USA, Europe and MENA.",
  "Today I'm co-founder and CTO of TieUp, I build products like CabinAI, and I train professionals and developers in AI and DevOps. I like owning things end to end: the requirements meeting, the code, the pipeline, the incident and the handover doc.",
];
export const EDUCATION_TITLE = "Education";
export const EDUCATION: EducationEntry[] = [
  {
    degree: "Master's in DevOps & Site Reliability Engineering",
    school: "Horizon School of Digital Technologies, Sousse",
    period: "2023 – 2025",
  },
  {
    degree: "Bachelor's in Telecommunications Engineering",
    school: "ISITCOM, Sousse",
    period: "2020 – 2023",
  },
];
export const CERTS_TITLE = "Certifications";
export const CERTS: string[] = [
  "Jenkins — 3 courses: fundamentals, declarative pipelines & IaC, delivery automation",
  "Cloud Virtualization, Containers and APIs",
  "Introduction to Cloud Computing",
  "Scrum Master Training — IBM",
  "TOEIC — English C1",
];
export const LANGUAGES_TITLE = "Languages";
export const LANGUAGES: string[] = ["Arabic — native", "English — C1 (TOEIC)", "French — fluent"];
export const CV_DOWNLOADS_TITLE = "Download my CV";
export const CV_DOWNLOADS: CVDownload[] = [
  {
    label: "Tech Lead · DevOps & SRE",
    files: [
      { lang: "EN", href: "/cv/Ahmed_Hajji_CV_EN.pdf", ariaLabel: "Download Tech Lead CV in English" },
      { lang: "FR", href: "/cv/Ahmed_Hajji_CV_FR.pdf", ariaLabel: "Télécharger le CV Tech Lead en français" },
    ],
  },
  {
    label: "AI & DevOps Trainer",
    files: [
      { lang: "EN", href: "/cv/Ahmed_Hajji_Trainer_CV_EN.pdf", ariaLabel: "Download AI & DevOps Trainer CV in English" },
      { lang: "FR", href: "/cv/Ahmed_Hajji_Trainer_CV_FR.pdf", ariaLabel: "Télécharger le CV Formateur IA & DevOps en français" },
    ],
  },
];

// ─── CONTACT ───
export const CONTACT_SUBJECTS: ContactSubject[] = [
  { label: "New project", value: "project" },
  { label: "DevOps, cloud or audit", value: "devops" },
  { label: "ERP / Odoo", value: "erp" },
  { label: "AI or DevOps training", value: "training" },
  { label: "Other", value: "other" },
];
export const CONTACT_FORM = {
  name: { label: "Name", placeholder: "Your name" },
  email: { label: "Email", placeholder: "you@company.com" },
  subject: { label: "Subject" },
  message: { label: "Message", placeholder: "What are you working on?" },
  submit: "Send message",
  submitting: "Sending…",
  success: "Message sent! I'll reply within 24 hours.",
  error: "Something went wrong. Please email me directly.",
};
export const COPY_EMAIL_LABEL = "Copy email address";
export const COPIED_TOAST = "Email copied to clipboard";
export const BOOKING_TITLE = "Prefer to talk?";
export const BOOKING_NOTE = "Opens Calendly in a new tab.";
export const BOOKING_OPTIONS: BookingOption[] = [
  {
    title: "Project consultation",
    description: "Free 30-minute call: your requirements, a rough roadmap and an estimate.",
    cta: "Book a free call",
  },
  {
    title: "Team training",
    description: "AI or DevOps training tailored to your team's level and tools.",
    cta: "Plan a training",
  },
  {
    title: "DevOps or security audit",
    description: "A review of your infrastructure, pipeline and code, with a written report.",
    cta: "Book an audit",
  },
];

// ─── FOOTER ───
export const FOOTER_BUILT_WITH = "Built with Next.js, Tailwind CSS and Vercel";
export const BACK_TO_TOP_LABEL = "Back to top";

// ─── HOW THIS SITE IS BUILT ───
export const FOOTER_LIGHTHOUSE = {
  label: "Lighthouse, mobile",
  linkLabel: "How this site is built",
};
export const BUILT_PAGE = {
  metaTitle: "How this site is built",
  metaDescription:
    "Architecture, performance work and the automated quality check behind this portfolio, with its current Lighthouse scores.",
  eyebrow: "Colophon",
  title: "How this site is built",
  intro:
    "This portfolio is run the way I run client systems: small, measured, and checked automatically on every change. Here is what is under the hood.",
  scoresTitle: "Current Lighthouse scores",
  scoresNote:
    "Mobile profile, median of three runs per page, measured by the automated check on the latest push. Not typed by hand.",
  scoresMissing: "Scores appear here after the first automated run.",
  measured: "Measured",
  commit: "commit",
  viewRuns: "See every run on GitHub",
  viewSource: "Source code",
  categories: { performance: "Performance", accessibility: "Accessibility", bestPractices: "Best practices", seo: "SEO" },
  pages: { "/": "Home", "/fr": "Home (French)", "/work/tieup": "Case study" } as Record<string, string>,
  sections: [
    {
      heading: "Architecture",
      points: [
        "Next.js 14 (App Router) with TypeScript in strict mode and Tailwind CSS, deployed on Vercel.",
        "Every page is generated ahead of time and served from the CDN; they refresh hourly to pick up new scores.",
        "One server function: the live status panel. It checks the production health endpoints from the server with a 5-second timeout, and the CDN caches the answer for 60 seconds, so visitors never hit those services directly.",
      ],
    },
    {
      heading: "Performance",
      points: [
        "The hero text is rendered on the server and visible from the first paint; only decoration fades in.",
        "Animations use CSS and a single scroll observer instead of an animation library, which cut the home page's JavaScript from 157 kB to 113 kB.",
        "The Geist font is trimmed to the characters English and French need and served as woff2: 33 kB instead of 66 kB.",
        "Critical CSS is inlined so the stylesheet never blocks the first paint; images are resized and served as WebP.",
      ],
    },
    {
      heading: "Automated quality check",
      points: [
        "Every push and pull request runs on GitHub Actions: type check, lint, production build, then Lighthouse on three pages.",
        "The check fails if performance drops below 95, or accessibility, best practices or SEO drop below 100.",
        "After each push to main, the workflow publishes its scores, and this page and the footer read them from there.",
      ],
    },
    {
      heading: "Two languages",
      points: [
        "All text lives in one English and one French content file; the build fails if the French version is missing anything.",
        "Each language has its own URLs, with hreflang links so search engines show the right one.",
      ],
    },
    {
      heading: "Privacy and accessibility",
      points: [
        "Vercel Web Analytics counts visits without cookies; there are no third-party trackers.",
        "Reduced-motion settings are respected, tap targets are at least 44 px, and everything works from the keyboard, including the Ctrl K palette.",
      ],
    },
  ],
};

// ─── 404 ───
export const NOT_FOUND_TEXT = "This page doesn't exist.";
export const NOT_FOUND_CTA = "Back to home";

// ─── METADATA ───
export const META_TITLE = `${SITE_NAME} — ${TAGLINE}`;
export const META_DESCRIPTION =
  "Tech lead, DevOps & SRE engineer, and AI consultant & trainer based in Sousse, Tunisia. Co-founder & CTO of TieUp. I build, ship and run production systems — and teach teams to do the same.";
