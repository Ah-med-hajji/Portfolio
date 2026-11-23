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

// French version: same exports as en.ts (enforced by the Content type in index.ts)
export const LANG: Lang = "fr";
export const HOME_PATH = "/fr";
export const ALT_LANG: AltLang = { code: "EN", ariaLabel: "English version", home: "/", prefix: "" };

// ─── IDENTITY ───
export const TAGLINE = "Tech Lead · DevOps & SRE · Consultant & Formateur IA";
export const SUB_TAGLINE = "ERP & Intégration · Full-Stack";
export const LOCATION = "Sousse, Tunisie";
export const AVATAR_ALT = "Portrait d'Ahmed Hajji";

// ─── NAV ───
export const NAV_LINKS: NavLink[] = [
  { label: "Projets", href: "/fr#work" },
  { label: "Parcours", href: "/fr#experience" },
  { label: "Formations", href: "/fr#training" },
  { label: "Services", href: "/fr#services" },
  { label: "À propos", href: "/fr#about" },
  { label: "Contact", href: "/fr#contact" },
  { label: "Prendre rendez-vous", href: "/fr#contact", isCTA: true },
];
export const NAV_OPEN_LABEL = "Ouvrir le menu";
export const NAV_CLOSE_LABEL = "Fermer le menu";
export const NAV_HOME_LABEL = "Retour en haut de la page";

// ─── HERO ───
export const HERO_BADGE = "Disponible pour projets et formations";
export const HERO_LOCATION = `${LOCATION} · À distance · Ouvert à la mobilité`;
export const HERO_PITCH =
  "Je mène les produits du besoin à la production — architecture, code, cloud, CI/CD et supervision — et je forme les équipes à travailler de la même façon, y compris à bien utiliser l'IA.";
export const HERO_CTA_PRIMARY = { label: "Voir mes projets", href: "/fr#work" };
export const HERO_CTA_SECONDARY = { label: "Prendre rendez-vous", href: "/fr#contact" };

export const STATS: StatItem[] = [
  { value: 5, suffix: "+", label: "Ans d'expérience" },
  { value: 20, suffix: "+", label: "Projets livrés" },
  { value: 10, suffix: "+", label: "Clients" },
  { value: 3, suffix: "", label: "Régions : USA · UE · MENA" },
];

// ─── SECTIONS ───
export const SECTIONS: Record<
  "work" | "experience" | "training" | "services" | "skills" | "about" | "contact",
  SectionCopy
> = {
  work: {
    id: "work",
    eyebrow: "Projets choisis",
    title: "Des produits que j'ai construits, des systèmes que je fais tourner",
    subtitle:
      "De vraies plateformes en production — d'une marketplace que j'ai cofondée à un ERP au service d'écoles sur trois continents.",
  },
  experience: {
    id: "experience",
    eyebrow: "Parcours",
    title: "Où j'ai travaillé",
    subtitle: "Leadership, infrastructure et transmission — souvent en même temps.",
  },
  training: {
    id: "training",
    eyebrow: "Formations & ateliers",
    title: "J'enseigne ce que je mets en production",
    subtitle:
      "Des formations IA et DevOps concrètes pour professionnels, développeurs et dirigeants — en français, anglais ou arabe, sur site ou à distance.",
  },
  services: {
    id: "services",
    eyebrow: "Services",
    title: "Comment je peux vous aider",
    subtitle: "Choisissez un service, ou confiez-moi le projet de bout en bout.",
  },
  skills: {
    id: "skills",
    eyebrow: "Compétences",
    title: "Boîte à outils",
    subtitle: "Ce que j'utilise en production, rangé comme je le pense.",
  },
  about: {
    id: "about",
    eyebrow: "À propos",
    title: "Quelques mots sur moi",
    subtitle: "",
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Travaillons ensemble",
    subtitle:
      "Parlez-moi de votre produit, de votre infrastructure ou des besoins de formation de votre équipe. Je réponds sous 24 heures.",
  },
};

// ─── SELECTED WORK ───
export const PROJECTS: ProjectData[] = [
  {
    name: "TieUp",
    role: "Co-fondateur & CTO",
    period: "Actuellement",
    summary:
      "Une marketplace freelance tunisienne qui avait fermé. Je l'ai relancée comme co-fondateur et CTO et je l'ai entièrement reconstruite seul : un monorepo avec une application web publique, un back-office et une API Express/TypeScript.",
    highlights: [
      "Plus de 1 500 tests automatisés — unitaires, intégration Firestore et E2E Playwright",
      "82 % de couverture backend, verrouillée par un cliquet en CI",
      "Déploiements conditionnés par une suite de tests au vert dans GitHub Actions",
      "Anglais, français et arabe avec mise en page de droite à gauche",
      "Détection de secrets et budget de taille de bundle vérifiés avant chaque commit",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "Firebase", "GitHub Actions", "Playwright"],
    link: { label: "tieupfreelance.com", href: "https://tieupfreelance.com" },
    caseStudy: { label: "Lire l'étude de cas", href: "/fr/work/tieup" },
    image: { src: "/work/tieup.webp", alt: "Page d'accueil de TieUp : trouvez les meilleurs services freelance pour votre entreprise" },
    featured: true,
  },
  {
    name: "CabinAI",
    role: "Produit & ingénierie",
    period: "En pilote",
    summary:
      "Un SaaS multi-cabinets pour gérer un cabinet médical privé : agenda, salle d'attente, dossiers patients, consultations et paiements. Premier pilote : un cabinet dentaire à Sousse.",
    highlights: [
      "Isolation des cabinets par row-level security Postgres, prouvée par des tests pgTAP",
      "Double authentification et stockage privé des documents patients",
      "Conçu selon la loi tunisienne sur les données de santé (2004-63, INPDP)",
      "Lint, types, tests unitaires, base de données et E2E avant chaque déploiement",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "Playwright"],
    link: { label: "cabinai.vercel.app", href: "https://cabinai.vercel.app" },
  },
  {
    name: "IZ Academy — mise en production",
    role: "Audit sécurité & fiabilité",
    period: "2026",
    summary:
      "Audit et sécurisation d'une plateforme e-learning en ligne utilisée par des étudiants et des enseignants, puis refonte de sa chaîne de livraison. Niveau de préparation à la production passé d'environ 5/10 à 9/10.",
    highlights: [
      "35 problèmes de sécurité et d'ingénierie identifiés et corrigés",
      "Builds Docker multi-stage, contrôles qualité CI/CD, sauvegardes automatisées",
      "Health checks, arrêt propre, timeouts de requêtes, limitation de débit",
      "Monitoring Sentry, logs structurés et cache Redis",
    ],
    tags: ["Docker", "GitHub Actions", "Node.js", "Prisma", "Redis", "Sentry"],
    link: { label: "iz-academy.com", href: "https://iz-academy.com" },
    caseStudy: { label: "Lire l'étude de cas", href: "/fr/work/iz-academy" },
    image: { src: "/work/iz-academy.webp", alt: "Page d'accueil d'IZ Academy : apprenez à votre rythme" },
  },
  {
    name: "Craft ERP — plateforme Odoo",
    role: "ERP Tech Lead · CraftSchoolship",
    period: "2022 – 2026",
    summary:
      "ERP de gestion scolaire pour une EdTech de la Silicon Valley : modules Odoo pour les dossiers étudiants, le planning, la finance, les RH et les événements, déployés sur plusieurs environnements et intégrés à des systèmes tiers.",
    highlights: [
      "Livraison environ 30 % plus rapide grâce à l'automatisation CI/CD",
      "Infrastructure AWS et Azure avec Terraform, Kubernetes et Helm",
      "Observabilité Prometheus, Grafana et Kibana ; analyses de cause racine et post-mortems",
      "Clients en production aux USA, en Europe et en région MENA",
    ],
    tags: ["Odoo", "Python", "PostgreSQL", "Terraform", "Kubernetes", "GitHub Actions"],
    link: { label: "craftschoolship.com", href: "https://craftschoolship.com" },
  },
  {
    name: "Applications web clients",
    role: "Missions freelance",
    period: "2019 – aujourd'hui",
    summary:
      "Boutiques e-commerce, sites d'entreprise, un portail RH et des plateformes de réservation — livrés du premier appel de cadrage jusqu'à la mise en production et la passation.",
    highlights: [
      "Boutiques avec back-office et commande par WhatsApp",
      "Sites en français et en arabe avec mise en page de droite à gauche",
      "SEO, données structurées et déploiements automatisés sur Vercel",
      "Fonctionnalités IA et LLM là où elles servent vraiment",
    ],
    tags: ["Next.js", "React", "Supabase", "Tailwind", "Vercel"],
  },
];

// ─── CASE STUDIES ───
export const CASE_STUDY_LABELS = {
  back: "Retour aux projets",
  architecture: "Architecture",
  visit: "Voir le site en ligne",
  next: "Étude de cas suivante",
  cta: "Vous voulez la même chose pour votre produit ?",
  ctaText: "Je peux auditer, reconstruire ou faire tourner votre plateforme de la même manière.",
  ctaButton: "Prendre rendez-vous",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tieup",
    name: "TieUp",
    eyebrow: "Étude de cas · Co-fondateur & CTO",
    title: "Relancer une marketplace freelance, seul, avec une suite de tests digne de confiance",
    intro:
      "TieUp est une marketplace freelance tunisienne qui avait fermé. Je l'ai rejointe comme co-fondateur et CTO pour la relancer, et j'ai reconstruit toute la plateforme moi-même : produit, architecture, code, tests, livraison et exploitation.",
    image: { src: "/work/tieup.webp", alt: "Page d'accueil de TieUp" },
    link: { label: "tieupfreelance.com", href: "https://tieupfreelance.com" },
    facts: [
      { label: "Rôle", value: "Co-fondateur & CTO" },
      { label: "Équipe", value: "Moi seul" },
      { label: "Stack", value: "React · TypeScript · Express · Firebase" },
      { label: "Langues", value: "Anglais · Français · Arabe (RTL)" },
    ],
    metrics: [
      { value: "1 500+", label: "tests automatisés sur le backend, le web et le back-office" },
      { value: "82 %", label: "de couverture des couches logiques du backend" },
      { value: "3", label: "langues, dont l'arabe de droite à gauche" },
    ],
    architecture: {
      heading: "Comment tout s'articule",
      caption: "Un monorepo, trois applications, une API, et un pipeline qui refuse de déployer un build en échec.",
      layers: [
        { label: "Clients", items: ["Application web publique — React, Tailwind, React Query", "Back-office — React + TypeScript"] },
        { label: "API", items: ["Express + TypeScript", "Couches : contrôleurs → services → modèles", "Authentification et rôles centralisés"] },
        { label: "Données", items: ["Firestore + règles de sécurité", "Firebase Auth et Storage", "Realtime Database pour la messagerie"] },
        { label: "Livraison", items: ["GitHub Actions : tests, puis déploiement", "Détection de secrets et budget de bundle", "Seuils de couverture qui ne font que monter"] },
      ],
    },
    sections: [
      {
        heading: "Le point de départ",
        body: "L'ancienne plateforme était à l'arrêt. La relancer ne voulait pas dire simplement la redéployer : le code devait être sûr à modifier, peu coûteux à faire tourner et simple à exploiter pour un seul ingénieur.",
      },
      {
        heading: "Ce que j'ai construit",
        points: [
          "Une application web publique et un back-office en React, en anglais, français et arabe, avec mise en page de droite à gauche.",
          "Une API Express/TypeScript avec une couche de services claire, une authentification et des contrôles de rôles centralisés.",
          "Des règles de sécurité Firestore testées sur l'émulateur Firebase, pas seulement écrites.",
        ],
      },
      {
        heading: "La qualité comme système, pas comme phase",
        points: [
          "1 167 tests unitaires backend et 86 tests d'intégration sur émulateur ; 178 tests web et 140 sur le back-office ; tests de fumée E2E Playwright.",
          "Seuils de couverture fixés à la valeur mesurée, arrondie à l'inférieur — le build échoue à la moindre régression, et chaque progrès est verrouillé.",
          "Couverture mesurée sur les couches logiques qui comptent, après avoir découvert que les anciens rapports les ignoraient.",
          "Les déploiements ne partent qu'après le passage complet des tests ; secrets et taille du bundle sont vérifiés avant chaque commit.",
        ],
      },
      {
        heading: "Auditer mon propre travail",
        body: "J'audite la plateforme à intervalles réguliers et je la note sur six dimensions, de la sécurité et l'intégrité des données jusqu'à la performance et l'exploitabilité, selon des critères de sortie écrits. Chaque bug corrigé devient une règle numérotée que le code doit continuer à respecter.",
      },
    ],
  },
  {
    slug: "iz-academy",
    name: "IZ Academy",
    eyebrow: "Étude de cas · Audit sécurité & fiabilité",
    title: "Rendre une plateforme e-learning en ligne sûre pour de vrais étudiants",
    intro:
      "IZ Academy est une plateforme e-learning en français et en arabe, conçue pour la Tunisie. Une revue complète a montré qu'elle fonctionnait, mais qu'elle n'était pas encore prête à tourner à grande échelle. J'ai audité le code, les dépendances et l'infrastructure, puis corrigé ce que j'ai trouvé et refait sa chaîne de livraison.",
    image: { src: "/work/iz-academy.webp", alt: "Page d'accueil d'IZ Academy" },
    link: { label: "iz-academy.com", href: "https://iz-academy.com" },
    facts: [
      { label: "Rôle", value: "Auditeur & ingénieur" },
      { label: "Année", value: "2026" },
      { label: "Stack", value: "React · Express · Prisma · PostgreSQL · Redis" },
      { label: "Hébergement", value: "Vercel · Railway · Supabase" },
    ],
    metrics: [
      { value: "35", label: "problèmes de sécurité et d'ingénierie corrigés" },
      { value: "5 → 9", label: "score de préparation à la production, sur 10" },
      { value: "17", label: "contrôleurs passés à une seule gestion d'erreurs" },
    ],
    architecture: {
      heading: "La plateforme après sécurisation",
      caption: "Le même produit, avec désormais health checks, timeouts, limites et alertes à chaque niveau.",
      layers: [
        { label: "Client", items: ["React (Vite) sur Vercel", "Règles de cache qui évitent les pages blanches après un déploiement"] },
        { label: "API", items: ["Express + TypeScript sur Railway", "Timeouts, limitation de débit, arrêt propre", "Documentation OpenAPI sur chaque route"] },
        { label: "Données & tâches", items: ["PostgreSQL via Prisma", "Cache Redis et files BullMQ", "Requêtes paginées avec plafonds stricts"] },
        { label: "Exploitation", items: ["CI/CD GitHub Actions", "Endpoint de santé : base de données + Redis", "Sentry et logs structurés"] },
      ],
    },
    sections: [
      {
        heading: "L'audit",
        body: "J'ai passé en revue tout le code, ses dépendances et sa façon d'être déployé, puis rédigé un rapport en langage clair : ce qui peut nuire aux étudiants, à l'argent ou à la confiance, classé par risque, avec une correction pour chaque point.",
      },
      {
        heading: "Ce que j'ai corrigé",
        points: [
          "Gestion des secrets, mises à jour des dépendances et contrôles d'accès remis au niveau d'une production.",
          "Une seule gestion d'erreurs pour les 17 contrôleurs, à la place de 99 blocs try/catch dispersés.",
          "Arrêt propre qui termine les requêtes en cours, timeouts de 30 secondes et limitation de débit par utilisateur.",
          "Tests d'intégration sur l'authentification et les inscriptions, et documentation OpenAPI sur chaque route.",
        ],
      },
      {
        heading: "La faire tourner comme une production",
        points: [
          "Un endpoint de santé qui vérifie la base de données et Redis, avec son propre timeout pour ne jamais bloquer.",
          "Pagination avec plafonds stricts sur les endpoints les plus lourds, et une limite mémoire qui transforme les plantages silencieux en erreurs visibles.",
          "Modes de défaillance classés — pool de connexions, mémoire, files d'attente, déploiements obsolètes — avec les risques principaux traités en premier.",
          "Une CI/CD qui construit et déploie le front-end et l'API à chaque push sur main.",
        ],
      },
    ],
  },
];

// ─── LIVE STATUS (hero) ───
export const STATUS_PANEL = {
  title: "En production",
  live: "En direct",
  checking: "Vérification…",
  up: "Opérationnel",
  down: "Ne répond pas",
  unavailable: "Vérification indisponible",
  checkedAt: "Vérifié à",
  footnote: "Vérifications réelles depuis le serveur de ce site, actualisées chaque minute.",
};
export const STATUS_SERVICES: StatusService[] = [
  { id: "iz-api", name: "API IZ Academy", detail: "Base de données · Redis" },
  { id: "iz-web", name: "IZ Academy", detail: "Application web" },
  { id: "cabinai", name: "CabinAI", detail: "Application & API" },
  { id: "portfolio", name: "Ce site", detail: "Vercel" },
];

// ─── COMMAND PALETTE ───
export const PALETTE = {
  hint: "Rechercher",
  shortcut: "Ctrl K",
  placeholder: "Aller à une section, télécharger un CV…",
  empty: "Aucun résultat.",
  groups: { navigate: "Aller à", work: "Études de cas", actions: "Actions" },
  copyEmail: "Copier l'adresse e-mail",
  bookCall: "Prendre rendez-vous sur Calendly",
  switchLang: "View the site in English",
  downloadCv: "Télécharger le CV",
  close: "Fermer",
  openLabel: "Ouvrir la palette de commandes",
};

// ─── EXPERIENCE ───
export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Co-fondateur & CTO",
    company: "TieUp",
    companyUrl: "https://tieupfreelance.com",
    location: "Tunisie · À distance",
    period: "Actuellement",
    current: true,
    points: [
      "Relance d'une marketplace freelance qui avait fermé ; responsable de toute sa technologie.",
      "Plateforme construite seul : architecture, applications, suite de tests, CI/CD et exploitation.",
    ],
  },
  {
    role: "Formateur IA & DevOps",
    company: "IZ Academy",
    companyUrl: "https://iz-academy.com",
    location: "Sousse",
    period: "Actuellement",
    current: true,
    points: [
      "J'anime la formation « Outils IA pour les professionnels » : prompt engineering, automatisation, vérification des faits et confidentialité.",
      "Je conçois des exercices pratiques qui laissent aux non-techniciens des livrables utilisables dès le lendemain.",
    ],
  },
  {
    role: "ERP Tech Lead · DevOps & Infrastructure",
    company: "CraftSchoolship",
    companyUrl: "https://craftschoolship.com",
    location: "À distance · Startup de la Silicon Valley",
    period: "2022 – 2026",
    points: [
      "Pilotage de l'ERP : personnalisation Odoo, déploiements, analyse fonctionnelle et gestion des environnements.",
      "Cartographie des processus finance, RH et opérations avec les métiers, traduite en conception technique.",
      "Conception d'infrastructures AWS et Azure avec Terraform, Kubernetes, Helm, Istio et Ansible.",
      "Vélocité de livraison améliorée d'environ 30 % ; gestion des incidents du tri jusqu'au post-mortem.",
      "Animation des sprints, revues de code et mentorat ; accompagnement de clients aux USA, en Europe et en région MENA.",
    ],
  },
  {
    role: "Consultant & formateur indépendant",
    company: "Freelance",
    location: "À distance",
    period: "2019 – aujourd'hui",
    points: [
      "Projets clients de bout en bout : cadrage, estimation, architecture, réalisation, déploiement et passation.",
      "Formation en algorithmique, développement web et DevOps pour étudiants et professionnels ; mentorat d'ingénieurs juniors.",
    ],
  },
  {
    role: "Développeur Full-Stack — Stage",
    company: "Mobelite",
    location: "Monastir",
    period: "2023",
    points: [
      "Conception et déploiement d'une application de gestion des dépenses des clients d'hôtel avec Angular, Node.js, Express et MongoDB.",
    ],
  },
];
export const EXPERIENCE_CURRENT_LABEL = "Actuel";

// ─── TRAINING ───
export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    title: "Les outils IA, bien utilisés",
    tagline:
      "Trois parcours centrés sur la pratique. Chaque atelier se fait dans Claude et ChatGPT côte à côte, pour des compétences transférables.",
    cover: "/training/ai-tools.webp",
    coverAlt: "Couverture de la formation Work Smarter With AI",
    items: [
      { title: "Parcours A · L'IA pour les métiers", detail: "8 modules · 24–32 h · sans code" },
      { title: "Parcours B · Ingénierie IA pour développeurs", detail: "9 modules · 32–40 h · API, évaluations, agents" },
      { title: "Parcours C · L'IA pour les dirigeants", detail: "8 séances · ~24 h · coûts, risques, adoption" },
    ],
  },
  {
    title: "Les fondamentaux DevOps",
    tagline:
      "Du premier commit à un cluster qui tourne. Un seul projet, construit sur 20 séances, avec des outils gratuits.",
    cover: "/training/devops-essentials.webp",
    coverAlt: "Couverture de la formation DevOps Essentials",
    items: [
      { title: "Parcours principal", detail: "Linux, Git, CI, Docker, CD, Kubernetes, journée de démo" },
      { title: "Parcours avancé", detail: "Réseau, Jenkins, Helm, Terraform, observabilité, DevSecOps" },
      { title: "Formats", detail: "D'un cours débutant de 16 h à un bootcamp de 40 h" },
    ],
  },
];

export const TRAINING_MODULES: ModuleCover[] = [
  { src: "/training/module-ci.webp", alt: "Module 4 : Intégration continue" },
  { src: "/training/module-docker.webp", alt: "Module 5 : Docker et conteneurs" },
  { src: "/training/module-kubernetes.webp", alt: "Module 7 : Les bases de Kubernetes" },
  { src: "/training/module-iac.webp", alt: "Module 13 : Infrastructure as Code" },
];

export const TRAINING_APPROACH_TITLE = "Ma façon d'enseigner";
export const TRAINING_APPROACH: string[] = [
  "La pratique d'abord — la théorie seulement pour réussir l'atelier suivant.",
  "Chaque module se termine par quelque chose que vous gardez : un modèle, un pipeline, une application déployée.",
  "Honnête sur les limites — hallucinations, confidentialité, coûts, et quand ne pas utiliser l'IA.",
  "En français, anglais ou arabe, sur site ou à distance.",
];

export const TRAINING_CERTS_TITLE = "Certifications IA";
export const TRAINING_CERTS: string[] = [
  "Claude Code in Action — Anthropic",
  "Building with the Claude API — Anthropic",
  "Claude Platform — Anthropic",
  "ChatGPT Prompt Engineering for Developers — OpenAI / DeepLearning.AI",
  "Google Prompting Essentials — Google",
  "Fundamentals of Deep Learning — NVIDIA",
  "Building Transformer-Based NLP Applications — NVIDIA",
];

export const TRAINING_CTA = "Organiser une formation pour votre équipe";

// ─── SERVICES ───
export const SERVICES: ServiceData[] = [
  {
    icon: "Code2",
    title: "Applications Full-Stack",
    description:
      "Applications web et SaaS du besoin à la production : architecture multi-tenant, authentification, paiements, back-offices et interfaces multilingues.",
    tools: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
  },
  {
    icon: "Server",
    title: "DevOps, SRE & Cloud",
    description:
      "CI/CD avec contrôles qualité, conteneurs, infrastructure as code et supervision — pour des mises en production sans surprise et des incidents courts.",
    tools: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS / Azure / GCP", "Grafana"],
  },
  {
    icon: "ShieldCheck",
    title: "Audits sécurité & fiabilité",
    description:
      "Une revue complète de votre code, de vos dépendances, de votre infrastructure et de votre chaîne de livraison, avec un plan d'action priorisé — et je peux réaliser les corrections.",
    tools: ["Revue de code", "Analyse des dépendances", "Secrets & accès", "Sauvegardes & reprise", "Supervision"],
  },
  {
    icon: "Boxes",
    title: "ERP / Odoo & intégrations",
    description:
      "Personnalisation, déploiement et intégration d'Odoo avec vos autres systèmes — en partant de la façon dont votre activité fonctionne vraiment.",
    tools: ["Odoo", "Python", "REST / SOAP", "Webhooks", "PostgreSQL"],
  },
  {
    icon: "Brain",
    title: "Intégration & formation IA",
    description:
      "Des fonctionnalités LLM fiables et abordables — conception de prompts, sorties structurées, maîtrise des coûts — et des formations pour que votre équipe utilise bien l'IA.",
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
    label: "Conteneurs & CI/CD",
    items: ["Docker", "Kubernetes", "Helm", "Istio", "GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
  },
  {
    label: "SRE & observabilité",
    items: ["Prometheus", "Grafana", "Kibana", "Sentry", "Alerting", "Gestion d'incidents", "Post-mortems"],
  },
  {
    label: "Données, ERP & intégration",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Odoo", "REST", "SOAP", "Webhooks"],
  },
  {
    label: "Qualité, sécurité & IA",
    items: ["Jest", "Playwright", "Audits de sécurité", "Claude API", "OpenAI API", "LangChain", "n8n"],
  },
];

// ─── ABOUT ───
export const ABOUT_PARAGRAPHS: string[] = [
  "Je suis ingénieur IT, basé à Sousse en Tunisie, titulaire d'un Master en DevOps & Site Reliability Engineering. De 2022 à 2026, j'ai dirigé l'ERP et l'infrastructure chez CraftSchoolship, une EdTech de la Silicon Valley avec des clients aux USA, en Europe et en région MENA.",
  "Aujourd'hui, je suis co-fondateur et CTO de TieUp, je construis des produits comme CabinAI, et je forme des professionnels et des développeurs à l'IA et au DevOps. J'aime porter les sujets de bout en bout : la réunion de cadrage, le code, le pipeline, l'incident et le document de passation.",
];
export const EDUCATION_TITLE = "Formation";
export const EDUCATION: EducationEntry[] = [
  {
    degree: "Master en DevOps & Site Reliability Engineering",
    school: "Horizon School of Digital Technologies, Sousse",
    period: "2023 – 2025",
  },
  {
    degree: "Licence en Génie des Télécommunications",
    school: "ISITCOM, Sousse",
    period: "2020 – 2023",
  },
];
export const CERTS_TITLE = "Certifications";
export const CERTS: string[] = [
  "Jenkins — 3 cours : fondamentaux, pipelines déclaratifs & IaC, automatisation du delivery",
  "Cloud Virtualization, Containers and APIs",
  "Introduction to Cloud Computing",
  "Formation Scrum Master — IBM",
  "TOEIC — Anglais C1",
];
export const LANGUAGES_TITLE = "Langues";
export const LANGUAGES: string[] = ["Arabe — langue maternelle", "Anglais — C1 (TOEIC)", "Français — courant"];
export const CV_DOWNLOADS_TITLE = "Télécharger mon CV";
export const CV_DOWNLOADS: CVDownload[] = [
  {
    label: "Tech Lead · DevOps & SRE",
    files: [
      { lang: "FR", href: "/cv/Ahmed_Hajji_CV_FR.pdf", ariaLabel: "Télécharger le CV Tech Lead en français" },
      { lang: "EN", href: "/cv/Ahmed_Hajji_CV_EN.pdf", ariaLabel: "Download Tech Lead CV in English" },
    ],
  },
  {
    label: "Formateur IA & DevOps",
    files: [
      { lang: "FR", href: "/cv/Ahmed_Hajji_Trainer_CV_FR.pdf", ariaLabel: "Télécharger le CV Formateur IA & DevOps en français" },
      { lang: "EN", href: "/cv/Ahmed_Hajji_Trainer_CV_EN.pdf", ariaLabel: "Download AI & DevOps Trainer CV in English" },
    ],
  },
];

// ─── CONTACT ───
export const CONTACT_SUBJECTS: ContactSubject[] = [
  { label: "Nouveau projet", value: "project" },
  { label: "DevOps, cloud ou audit", value: "devops" },
  { label: "ERP / Odoo", value: "erp" },
  { label: "Formation IA ou DevOps", value: "training" },
  { label: "Autre", value: "other" },
];
export const CONTACT_FORM = {
  name: { label: "Nom", placeholder: "Votre nom" },
  email: { label: "E-mail", placeholder: "vous@entreprise.com" },
  subject: { label: "Sujet" },
  message: { label: "Message", placeholder: "Sur quoi travaillez-vous ?" },
  submit: "Envoyer le message",
  submitting: "Envoi…",
  success: "Message envoyé ! Je vous réponds sous 24 heures.",
  error: "Une erreur est survenue. Écrivez-moi directement par e-mail.",
};
export const COPY_EMAIL_LABEL = "Copier l'adresse e-mail";
export const COPIED_TOAST = "Adresse e-mail copiée";
export const BOOKING_TITLE = "Vous préférez en parler ?";
export const BOOKING_NOTE = "Ouvre Calendly dans un nouvel onglet.";
export const BOOKING_OPTIONS: BookingOption[] = [
  {
    title: "Consultation projet",
    description: "Un appel gratuit de 30 minutes : vos besoins, une première feuille de route et une estimation.",
    cta: "Réserver un appel gratuit",
  },
  {
    title: "Formation d'équipe",
    description: "Une formation IA ou DevOps adaptée au niveau et aux outils de votre équipe.",
    cta: "Planifier une formation",
  },
  {
    title: "Audit DevOps ou sécurité",
    description: "Une revue de votre infrastructure, de votre pipeline et de votre code, avec un rapport écrit.",
    cta: "Réserver un audit",
  },
];

// ─── FOOTER ───
export const FOOTER_BUILT_WITH = "Réalisé avec Next.js, Tailwind CSS et Vercel";
export const BACK_TO_TOP_LABEL = "Retour en haut";

// ─── 404 ───
export const NOT_FOUND_TEXT = "Cette page n'existe pas.";
export const NOT_FOUND_CTA = "Retour à l'accueil";

// ─── METADATA ───
export const META_TITLE = `${SITE_NAME} — ${TAGLINE}`;
export const META_DESCRIPTION =
  "Tech lead, ingénieur DevOps & SRE, consultant et formateur IA basé à Sousse, en Tunisie. Co-fondateur et CTO de TieUp. Je construis, livre et fais tourner des systèmes en production — et je forme les équipes à faire de même.";
