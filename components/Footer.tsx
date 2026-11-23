import { SITE_NAME, TAGLINE, NAV_LINKS, FOOTER_BUILT_WITH } from "@/lib/constants";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const links = NAV_LINKS.filter((l) => !l.isCTA);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-lg font-bold text-white">
              {SITE_NAME}
              <span className="text-cyan-400">.</span>
            </p>
            <p className="text-sm text-gray-400">{TAGLINE}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex min-h-11 items-center text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <SocialLinks />
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          © {year} {SITE_NAME} · {FOOTER_BUILT_WITH}
        </p>
      </div>
    </footer>
  );
}
