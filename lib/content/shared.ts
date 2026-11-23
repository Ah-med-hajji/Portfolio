import type { SocialLink } from "../types";

// Values identical in every language
export const SITE_NAME = "Ahmed Hajji";
export const SITE_INITIALS = "AH";
export const AVATAR_SRC = "/avatar.png";
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
export const META_URL = "https://ahmed-hajji-it.vercel.app";
