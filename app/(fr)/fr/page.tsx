import HomePage from "@/components/site/HomePage";
import { getContent } from "@/lib/content";

export default function Page() {
  return <HomePage c={getContent("fr")} />;
}
