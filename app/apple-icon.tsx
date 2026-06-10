import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logoPath = path.join(process.cwd(), "public", "logos", "Logo.png");
  const logoBuffer = await readFile(logoPath);
  const logoDataUri = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4ede0",
        }}
      >
        {}
        <img
          src={logoDataUri}
          width={130}
          height={106}
          alt="MCK"
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
