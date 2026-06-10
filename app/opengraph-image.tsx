import { ImageResponse } from "next/og";

export const alt = "Moroccan Court Kings — 1v1 Street Basketball, Born in Marrakech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 80% 20%, rgba(196,42,45,0.6), transparent 55%), linear-gradient(180deg, #0e1a2b 0%, #0a131f 100%)",
          color: "#f4ede0",
          fontFamily: "Impact, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: "#0e1a2b",
              border: "2px solid #f4ede0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            MCK
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              opacity: 0.75,
            }}
          >
            Moroccan Court Kings
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#e0b354",
            }}
          >
            First 1v1 in the African diaspora
          </div>
          <div
            style={{
              fontSize: 150,
              lineHeight: 0.9,
              letterSpacing: -2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The 1<span style={{ color: "#c42a2d" }}>v</span>1</span>
            <span style={{ color: "#f4ede0" }}>Movement.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          <span>Marrakech &middot; 2022 &rarr; The World</span>
          <span>moroccancourtkings.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
