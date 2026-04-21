import type {
  ServiceData,
  ProjectData,
  StackCategory,
  NavLink,
  BookingOption,
  AITab,
  ContactSubject,
  SocialLink,
  StatItem,
  Testimonial,
} from "./types";

// ─── IDENTITY ───
export const SITE_NAME = "Ahmed Hajji";
export const SITE_INITIALS = "AH";
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
  { label: "Experience", href: "#experience" },
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

export const CALENDLY_URL = "https://calendly.com/ahmedhajji5401";

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
  "I'm a full-stack developer and IT consultant who works with startups and small businesses to build software, automate operations, and integrate AI where it counts. My work spans the entire lifecycle — from architecture and code to deployment and team training. If you need someone who can ship a feature, wire up a CI/CD pipeline, and teach your team how to use AI tools effectively, we should talk. I also bring sector-specific experience from my time as ERP Tech Lead at CraftSchoolship, a Silicon Valley EdTech — making me a strong fit for educational institutions looking to modernize their tech.";

// ─── CONTACT ───
export const CONTACT_HEADING =
  "Let's build something, or fix something, or automate something.";
export const CONTACT_SUBJECTS: ContactSubject[] = [
  { label: "Project Inquiry", value: "project" },
  { label: "AI Consultation", value: "ai" },
  { label: "DevOps Audit", value: "devops" },
  { label: "Other", value: "other" },
];
export const FORMSPREE_ID = "xeevlgdl";
export const EMAIL = "ahmedhajji5401@gmail.com";
export const GITHUB_URL = "https://github.com/Ah-med-hajji";
export const LINKEDIN_URL = "https://linkedin.com/in/hajjiahmed";

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
export const META_URL = "https://ahmed-hajji-it.vercel.app";
export const META_OG_IMAGE = "/og-image.png";

// ─── EXPERIENCE ───
export const EXPERIENCE = [
  {
    role: "ERP Tech Lead",
    company: "CraftSchoolship",
    companyUrl: "https://craftschoolship.com",
    location: "Silicon Valley, CA (Remote)",
    period: "Previous Role",
    description:
      "Led technical development of Craft ERP — a full school management system covering student records, scheduling, finance, HR, and events. Collaborated with international clients across multiple countries and time zones, delivering enterprise-grade EdTech solutions at scale.",
    tags: [
      "ERP Systems",
      "EdTech",
      "System Architecture",
      "International Clients",
      "Team Leadership",
      "Odoo",
    ],
    modules: [
      { icon: "Users", label: "Student Records" },
      { icon: "Calendar", label: "Course Scheduling" },
      { icon: "DollarSign", label: "Financial Management" },
      { icon: "UserCog", label: "Human Resources" },
      { icon: "CalendarDays", label: "Events Management" },
      { icon: "BarChart2", label: "Analytics & Reporting" },
      { icon: "BookOpen", label: "LMS Integration" },
      { icon: "Bell", label: "Notifications System" },
      { icon: "Shield", label: "Access Control" },
      { icon: "Globe", label: "Multi-language Support" },
    ],
    stats: [
      { value: "10+", label: "ERP Modules" },
      { value: "10+", label: "Countries Served" },
      { value: "100%", label: "Remote & Async" },
      { value: "1", label: "Silicon Valley Co." },
    ],
  },
];

// ─── STATS ───
export const STATS: StatItem[] = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "", label: "Service Areas" },
];

// ─── TESTIMONIALS ───
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ahmed delivered our full-stack app ahead of schedule. His DevOps knowledge meant we shipped to production on day one with zero downtime.",
    name: "Sarah M.",
    role: "CTO",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    quote:
      "The AI training session transformed how our team uses LLMs. We cut our API costs by 40% just from the prompt engineering module.",
    name: "Mohamed K.",
    role: "Product Manager",
    company: "DataFlow Labs",
    rating: 5,
  },
  {
    quote:
      "The infrastructure audit paid for itself in a week. Ahmed identified bottlenecks we didn't even know existed and gave us a clear fix.",
    name: "Michael P.",
    role: "Founder",
    company: "ScaleUp Agency",
    rating: 5,
  },
];

// ─── STACK TOOLTIPS ───
export const STACK_TOOLTIPS: Record<string, string> = {
  React: "Building dynamic UIs and SPAs",
  "Next.js": "Full-stack framework for production apps",
  TypeScript: "Type-safe code for fewer bugs",
  Tailwind: "Utility-first CSS for rapid styling",
  "Framer Motion": "Smooth animations and transitions",
  "Node.js": "Server-side JS for APIs and backends",
  Express: "Minimal API framework for Node.js",
  Python: "Scripting, automation, and data pipelines",
  REST: "Designing clean, RESTful APIs",
  GraphQL: "Flexible querying for complex data needs",
  PostgreSQL: "Relational DB for structured data",
  MongoDB: "Document DB for flexible schemas",
  Supabase: "Open-source Firebase alternative",
  Redis: "In-memory caching and sessions",
  Docker: "Containerizing apps for consistent deploys",
  "GitHub Actions": "CI/CD pipelines for automated workflows",
  Nginx: "Reverse proxy and static serving",
  Linux: "Server administration and shell scripting",
  Bash: "Automation scripts and DevOps tooling",
  "OpenAI API": "GPT-4 and DALL-E integrations",
  "Claude API": "Anthropic model integrations",
  LangChain: "Building LLM-powered chains and agents",
  "Hugging Face": "Open-source ML models and pipelines",
  Git: "Version control and collaboration",
  Figma: "Design handoff and prototyping",
  Postman: "API testing and documentation",
  "VS Code": "Primary editor with custom config",
  n8n: "Self-hosted workflow automation",
  Zapier: "No-code app integrations",
};
