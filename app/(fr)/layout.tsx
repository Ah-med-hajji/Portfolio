import RootShell, { buildMetadata } from "@/components/site/RootShell";

export { viewport } from "@/components/site/RootShell";
export const metadata = buildMetadata("fr");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>;
}
