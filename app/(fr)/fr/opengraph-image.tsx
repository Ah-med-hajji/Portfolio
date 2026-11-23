import { renderOgImage } from "@/lib/og";
import { getContent } from "@/lib/content";

export const alt = getContent("fr").META_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return renderOgImage(getContent("fr"));
}
