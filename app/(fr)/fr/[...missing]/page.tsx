import { notFound } from "next/navigation";

// Sends unknown URLs to this language's styled 404 (there is no app-wide root layout)
export default function Missing() {
  notFound();
}
