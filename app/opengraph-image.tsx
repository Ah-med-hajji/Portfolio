import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahmed Hajji — Full-Stack Developer · DevOps · AI Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
            opacity: 0.6,
          }}
        />

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
            AH
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
          Ahmed Hajji
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#94a3b8",
            marginBottom: 36,
          }}
        >
          Full-Stack Developer · DevOps · AI Consultant
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
          I build, deploy, automate, and teach — end to end.
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
          ahmedhajji.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
