import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://imzr.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "imzr — Quick Browser-Based Image Editor",
    template: "%s | imzr",
  },
  description:
    "Free, private, browser-only image editor. Resize, crop, rotate, flip, convert, and compress images directly in your browser. No uploads, no cloud storage, 100% secure.",
  keywords: [
    "image editor",
    "browser image editor",
    "resize image",
    "crop image",
    "convert image",
    "compress image",
    "jpg to webp",
    "png to jpg",
    "client-side image processing",
    "private image editor",
    "no upload image tool",
    "Dhrubo Roy Partho",
  ],
  authors: [
    {
      name: "Dhrubo Roy Partho",
      url: "https://linkedin.com/in/dhrubo-roy-partho",
    },
  ],
  creator: "Dhrubo Roy Partho",
  openGraph: {
    title: "imzr — Quick Browser-Based Image Editor",
    description:
      "Resize, crop, rotate, convert, and compress images directly in your browser. No upload, no cloud storage, completely private.",
    url: siteUrl,
    siteName: "imzr",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "imzr — Quick Browser-Based Image Editor",
    description:
      "Resize, crop, rotate, convert, and compress images directly in your browser without uploading.",
    creator: "@dhruboroypartho",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
