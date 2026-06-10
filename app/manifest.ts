import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MCK",
    short_name: "MCK",
    description:
      "MCK — the first ever 1v1 basketball tournament in Morocco. And the first on the African continent.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4ede0",
    theme_color: "#c42a2d",
    icons: [
      { src: "/icon", sizes: "any", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
