export interface ServiceData {
  icon: string;
  title: string;
  description: string;
  tools: string[];
}

export interface ProjectData {
  name: string;
  description: string;
  category: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface StackCategory {
  label: string;
  items: string[];
}

export interface NavLink {
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface BookingOption {
  title: string;
  price: string;
  description: string;
  cta: string;
}

export interface AITab {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface ContactSubject {
  label: string;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
  modules: { icon: string; label: string }[];
  stats: { value: string; label: string }[];
}
