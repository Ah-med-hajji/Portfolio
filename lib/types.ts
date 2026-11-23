export type Lang = "en" | "fr";

export interface NavLink {
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface SectionCopy {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface ProjectData {
  name: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
  link?: ProjectLink;
  caseStudy?: ProjectLink;
  image?: ImageRef;
  featured?: boolean;
}

export interface CaseStudySection {
  heading: string;
  body?: string;
  points?: string[];
}

export interface ArchLayer {
  label: string;
  items: string[];
}

export interface CaseStudy {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: ImageRef;
  link?: ProjectLink;
  facts: { label: string; value: string }[];
  metrics: { value: string; label: string }[];
  architecture: { heading: string; caption: string; layers: ArchLayer[] };
  sections: CaseStudySection[];
}

export interface AltLang {
  code: string;
  ariaLabel: string;
  home: string;
  prefix: string;
}

export interface StatusService {
  id: string;
  name: string;
  detail: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
}

export interface TrainingProgram {
  title: string;
  tagline: string;
  cover: string;
  coverAlt: string;
  items: { title: string; detail: string }[];
}

export interface ModuleCover {
  src: string;
  alt: string;
}

export interface ServiceData {
  icon: string;
  title: string;
  description: string;
  tools: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
}

export interface CVFile {
  lang: string;
  href: string;
  ariaLabel: string;
}

export interface CVDownload {
  label: string;
  files: CVFile[];
}

export interface BookingOption {
  title: string;
  description: string;
  cta: string;
}

export interface ContactSubject {
  label: string;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "Globe" | "User" | "Mail";
  external: boolean;
}
