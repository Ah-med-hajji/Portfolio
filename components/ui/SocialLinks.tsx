import { Globe, User, Mail } from "lucide-react";
import type { SocialLink } from "@/lib/types";
import { SOCIAL_LINKS } from "@/lib/content/shared";

const icons: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  Globe,
  User,
  Mail,
};

export default function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {SOCIAL_LINKS.map((s) => {
        const Icon = icons[s.icon];
        return (
          <a
            key={s.label}
            href={s.href}
            {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={s.label}
            className={`flex h-11 items-center justify-center gap-2 rounded-full text-gray-400 transition-colors hover:bg-white/5 hover:text-white ${
              showLabels ? "border border-white/5 px-4 text-sm" : "w-11"
            }`}
          >
            <Icon className="h-5 w-5" />
            {showLabels && <span>{s.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
