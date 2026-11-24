import type { ReactNode } from "react";
import { revealProps, type RevealDirection } from "@/lib/reveal";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  className?: string;
}

// Fades in on scroll via CSS; works in server and client components
export default function FadeInSection({ children, delay = 0, direction = "up", className }: FadeInSectionProps) {
  return (
    <div {...revealProps(delay, direction)} className={className}>
      {children}
    </div>
  );
}
