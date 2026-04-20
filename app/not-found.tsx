import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
      <span className="text-8xl font-bold text-[#38bdf8]">404</span>
      <p className="text-lg text-gray-400">
        Looks like this page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#0f1117] transition-colors hover:bg-cyan-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
