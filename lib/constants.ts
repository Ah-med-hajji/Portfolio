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
  SocialLink,
} from "./types";

// ─── IDENTITY ───
export const SITE_NAME = "Ahmed Hajji";
export const SITE_INITIALS = "AH";
export const TAGLINE = "Tech Lead · DevOps & SRE · AI Consultant & Trainer";
export const SUB_TAGLINE = "ERP & Integration · Full-Stack";
export const LOCATION = "Sousse, Tunisia";
export const AVATAR_SRC = "/avatar.png";
export const AVATAR_ALT = "Portrait of Ahmed Hajji";

// ─── LINKS ───
export const EMAIL = "ahmedhajji5401@gmail.com";
export const GITHUB_URL = "https://github.com/Ah-med-hajji";
export const LINKEDIN_URL = "https://linkedin.com/in/hajjiahmed";
export const CALENDLY_URL = "https://calendly.com/ahmedhajji5401";
export const FORMSPREE_ID = "xeevlgdl";

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL, icon: "Globe", external: true },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: "User", external: true },
  { label: "Email", href: `mailto:${EMAIL}`, icon: "Mail", external: false },
];

// ─── NAV ───
export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Training", href: "#training" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Book a call", href: "#contact", isCTA: true },
];
export const NAV_OPEN_LABEL = "Open menu";
export const NAV_CLOSE_LABEL = "Close menu";
export const NAV_HOME_LABEL = "Back to top of page";

// ─── HERO ───
export const HERO_BADGE = "Available for projects & training";
export const HERO_LOCATION = `${LOCATION} · Remote · Open to relocation`;
export const HERO_PITCH =
  "I take products from requirements to production — architecture, code, cloud, CI/CD and monitoring — and I train teams to build the same way, including how to use AI properly.";
export const HERO_CTA_PRIMARY = { label: "See my work", href: "#work" };
export const HERO_CTA_SECONDARY = { label: "Book a call", href: "#contact" };

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
      "A Tunisian freelance marketplace that had shut down. I relaunched it as co-founder and CTO and rebuilt it end to end on my own: a four-app monorepo with a public web app, an admin dashboard, an Express/TypeScript API and a mobile app.",
    highlights: [
      "1,500+ automated tests — unit, Firestore integration and Playwright E2E",
      "82% backend coverage, enforced as a ratchet in CI",
      "Deploys gated on a green test suite in GitHub Actions",
      "English, French and Arabic with right-to-left layouts",
      "ClicToPay online payments and hardened secret handling",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "Firebase", "GitHub Actions", "Playwright"],
    link: { label: "tieupfreelance.com", href: "https://tieupfreelance.com" },
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
    link: { label: "iz-academy.vercel.app", href: "https://iz-academy.vercel.app" },
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

// ─── 404 ───
export const NOT_FOUND_TEXT = "This page doesn't exist.";
export const NOT_FOUND_CTA = "Back to home";

// ─── METADATA ───
export const META_TITLE = `${SITE_NAME} — ${TAGLINE}`;
export const META_DESCRIPTION =
  "Tech lead, DevOps & SRE engineer, and AI consultant & trainer based in Sousse, Tunisia. Co-founder & CTO of TieUp. I build, ship and run production systems — and teach teams to do the same.";
export const META_URL = "https://ahmed-hajji-it.vercel.app";
