import type {
  ServiceData,
  ProjectData,
  StackCategory,
  NavLink,
  BookingOption,
  AITab,
  ContactSubject,
  SocialLink,
} from "./types";

// ─── IDENTITY ───
export const SITE_NAME = "[YOUR NAME]";
export const SITE_INITIALS = "YN";
export const TAGLINE = "Full-Stack Developer · DevOps · AI Consultant";
export const SUB_TAGLINE =
  "I build, deploy, automate, and teach — end to end.";
export const HERO_SUBTITLE =
  "I help startups, SMEs, and growing teams modernize their stack, automate what slows them down, and integrate AI where it actually matters.";

// ─── COLORS (Tailwind classes) ───
export const ACCENT = "cyan";
export const ACCENT_HEX = "#38bdf8";
export const BG_HEX = "#0f1117";
export const PURPLE_HEX = "#a78bfa";

// ─── NAV LINKS ───
export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "DevOps", href: "#devops" },
  { label: "AI", href: "#ai" },
  { label: "Book a Call", href: "#book", isCTA: true },
  { label: "Contact", href: "#contact" },
];

// ─── HERO CYCLING TEXT ───
export const HERO_CYCLING_TEXT = [
  "I'm a Full-Stack Developer",
  "I'm a DevOps Engineer",
  "I'm an AI Consultant",
  "I automate what slows you down",
];

// ─── SERVICES ───
export const SERVICES: ServiceData[] = [
  {
    icon: "Code2",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications built with React, Next.js, Node.js, and modern databases. From MVP to production-ready.",
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "REST/GraphQL",
    ],
  },
  {
    icon: "Server",
    title: "DevOps & Infrastructure",
    description:
      "CI/CD pipelines, containerization, cloud deployments, and infrastructure automation. I make sure your code ships reliably.",
    tools: ["Docker", "GitHub Actions", "Linux", "Nginx", "AWS/VPS", "Bash"],
  },
  {
    icon: "Zap",
    title: "Automation & Scripting",
    description:
      "I eliminate repetitive work. From API integrations to scheduled workflows and data pipelines.",
    tools: ["Python", "Bash", "n8n", "Zapier", "Cron", "REST APIs"],
  },
  {
    icon: "ClipboardCheck",
    title: "IT Consulting",
    description:
      "Architecture reviews, tech stack decisions, and digital transformation roadmaps for businesses ready to scale.",
    tools: ["Audits", "Strategy Docs", "Implementation Plans"],
  },
  {
    icon: "Brain",
    title: "AI Integration & Education",
    description:
      "I help teams integrate AI into their workflows and teach them how to use it efficiently — prompt engineering, model selection, token cost optimization, and best practices.",
    tools: ["OpenAI", "Claude", "LangChain", "RAG pipelines", "custom GPTs"],
  },
];

// ─── PROJECTS ───
export const PROJECTS: ProjectData[] = [
  {
    name: "SaaS Dashboard",
    description:
      "Multi-tenant admin panel with auth, charts, and role-based access control.",
    category: "Full-Stack",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "CI/CD Pipeline Setup",
    description:
      "GitHub Actions + Docker + VPS auto-deploy with health checks and rollback.",
    category: "DevOps",
    tags: ["Docker", "GitHub Actions", "Bash", "Nginx"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "AI Content Assistant",
    description:
      "Claude/OpenAI API integration with prompt chaining and streaming responses.",
    category: "AI",
    tags: ["OpenAI", "Claude API", "LangChain", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Workflow Automation",
    description:
      "n8n/Python pipeline replacing a manual business process — saving 20+ hours/week.",
    category: "Automation",
    tags: ["n8n", "Python", "REST APIs", "Cron"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Tech Audit Case Study",
    description:
      "Full stack review + migration roadmap for a client moving from monolith to microservices.",
    category: "Consulting",
    tags: ["Architecture", "Strategy", "Migration"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Full-Stack",
  "DevOps",
  "AI",
  "Automation",
];

// ─── DEVOPS PIPELINE STAGES ───
export const DEVOPS_PIPELINE = [
  { icon: "Code2", label: "Code", tool: "Git / GitHub" },
  { icon: "GitBranch", label: "CI/CD", tool: "GitHub Actions" },
  { icon: "Container", label: "Docker", tool: "Docker / Compose" },
  { icon: "Cloud", label: "Cloud", tool: "AWS / VPS" },
  { icon: "Activity", label: "Monitor", tool: "Logs / Health Checks" },
];

export const DEVOPS_SKILLS: { col: string; items: string[] }[] = [
  {
    col: "Containerization & Orchestration",
    items: ["Docker", "Docker Compose"],
  },
  {
    col: "CI/CD & Automation",
    items: ["GitHub Actions", "Bash scripts", "Cron"],
  },
  {
    col: "Cloud & Infrastructure",
    items: ["Linux servers", "Nginx", "VPS", "AWS basics"],
  },
];

// ─── AI SECTION ───
export const AI_HEADING =
  "AI isn't magic — it's engineering. I treat it that way.";
export const AI_TABS: AITab[] = [
  {
    id: "prompt",
    label: "Prompt Engineering",
    title: "Prompt Engineering",
    description:
      "Structuring prompts for reliability, consistency, and reduced hallucination. System prompts, few-shot examples, chain-of-thought.",
  },
  {
    id: "tokens",
    label: "Token Optimization",
    title: "Token Optimization",
    description:
      "Reducing API costs without reducing quality. Context window management, chunking strategies, caching, and model routing.",
  },
  {
    id: "workflow",
    label: "Model Selection & Workflow",
    title: "Model Selection & Workflow Design",
    description:
      "Choosing the right model for the right task — GPT-4o vs Claude vs Gemini vs local models. Building multi-step AI pipelines.",
  },
];

// ─── BOOKING ───
export const BOOKING_OPTIONS: BookingOption[] = [
  {
    title: "Project Consultation",
    price: "Free 30 min",
    description:
      "Discuss your project requirements, tech stack, and get a roadmap and estimate.",
    cta: "Book Free Call",
  },
  {
    title: "AI Training Session",
    price: "Paid",
    description:
      "1-on-1 or team session. I teach prompt engineering, model selection, and AI workflow integration tailored to your business.",
    cta: "Book AI Session",
  },
  {
    title: "DevOps / Tech Audit",
    price: "Paid",
    description:
      "I review your infrastructure, CI/CD, codebase, and deliver a written audit with prioritized recommendations.",
    cta: "Book Audit",
  },
];

export const CALENDLY_URL = "https://calendly.com/yourusername";

// ─── STACK ───
export const STACK: StackCategory[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  { label: "Backend", items: ["Node.js", "Express", "Python", "REST", "GraphQL"] },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Redis"],
  },
  {
    label: "DevOps",
    items: ["Docker", "GitHub Actions", "Nginx", "Linux", "Bash"],
  },
  {
    label: "AI/ML",
    items: ["OpenAI API", "Claude API", "LangChain", "Hugging Face"],
  },
  {
    label: "Tools",
    items: ["Git", "Figma", "Postman", "VS Code", "n8n", "Zapier"],
  },
];

// ─── ABOUT ───
export const ABOUT_TEXT =
  "I'm a full-stack developer and IT consultant who works with startups and small businesses to build software, automate operations, and integrate AI where it counts. My work spans the entire lifecycle — from architecture and code to deployment and team training. If you need someone who can ship a feature, wire up a CI/CD pipeline, and teach your team how to use AI tools effectively, we should talk.";

// ─── CONTACT ───
export const CONTACT_HEADING =
  "Let's build something, or fix something, or automate something.";
export const CONTACT_SUBJECTS: ContactSubject[] = [
  { label: "Project Inquiry", value: "project" },
  { label: "AI Consultation", value: "ai" },
  { label: "DevOps Audit", value: "devops" },
  { label: "Other", value: "other" },
];
export const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
export const EMAIL = "hello@yourdomain.com";
export const GITHUB_URL = "https://github.com/YOUR_GITHUB_USERNAME";
export const LINKEDIN_URL = "https://linkedin.com/in/YOUR_LINKEDIN";

// ─── SOCIAL LINKS ───
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL, icon: "Github" },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: "Linkedin" },
  { label: "Email", href: `mailto:${EMAIL}`, icon: "Mail" },
];

// ─── METADATA ───
export const META_TITLE = `${SITE_NAME} — ${TAGLINE}`;
export const META_DESCRIPTION =
  "Full-stack developer, DevOps engineer, and AI consultant. I build, deploy, automate, and teach — end to end.";
export const META_URL = "https://yourdomain.com";
export const META_OG_IMAGE = "/og-image.png";
