import { ImageResponse } from "next/og";
import type { Content } from "@/lib/content";

// Shared by each language's opengraph-image route
export function renderOgImage(c: Content) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0f1117",
          backgroundImage:
            "radial-gradient(ellipse at 30% 50%, rgba(56,189,248,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(167,139,250,0.06) 0%, transparent 60%)",
          padding: "60px",
        }}
      >

        {/* Initials badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            border: "1px solid rgba(56,189,248,0.2)",
            backgroundColor: "rgba(56,189,248,0.05)",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#38bdf8",
            }}
          >
            {c.SITE_INITIALS}
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 12,
            letterSpacing: "-0.02em",
          }}
        >
          {c.SITE_NAME}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#94a3b8",
            marginBottom: 36,
          }}
        >
          {c.TAGLINE}
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 80,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
            marginBottom: 36,
          }}
        />

        {/* Sub-tagline */}
        <div
          style={{
            fontSize: 18,
            color: "#64748b",
            textAlign: "center",
          }}
        >
          {c.SUB_TAGLINE}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 14,
            color: "#475569",
          }}
        >
          {c.META_URL.replace("https://", "")}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
