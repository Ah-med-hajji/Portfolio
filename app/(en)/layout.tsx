import RootShell, { buildMetadata } from "@/components/site/RootShell";

export { viewport } from "@/components/site/RootShell";
export const metadata = buildMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
