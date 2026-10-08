import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "imzr — Quick Browser-Based Image Editor",
    short_name: "imzr",
    description:
      "Free, private, browser-only image editor. Resize, crop, rotate, flip, convert, and compress images directly in your browser with zero uploads.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
