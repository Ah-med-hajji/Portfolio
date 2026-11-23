import NotFoundView from "@/components/site/NotFoundView";
import { getContent } from "@/lib/content";

export default function NotFound() {
  return <NotFoundView c={getContent("en")} />;
}
