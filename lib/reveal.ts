import type { CSSProperties } from "react";

export type RevealDirection = "up" | "left" | "right";

const OFFSETS: Record<RevealDirection, [string, string]> = {
  up: ["0px", "32px"],
  left: ["-40px", "0px"],
  right: ["40px", "0px"],
};

// Props that make an element fade in when it scrolls into view (see [data-reveal] in globals.css)
export function revealProps(delay = 0, direction: RevealDirection = "up") {
  const [x, y] = OFFSETS[direction];
  return {
    "data-reveal": "",
    style: { "--rx": x, "--ry": y, "--rd": `${delay}s` } as CSSProperties,
  };
}
