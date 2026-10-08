import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://imzr.vercel.app";

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#webapp`,
      "name": "imzr",
      "url": siteUrl,
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas support.",
      "description":
        "Free, private, browser-only image editor. Resize, crop, rotate, flip, convert (JPEG, PNG, WebP), and compress images directly in your browser with zero uploads.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "featureList": [
        "100% Client-Side In-Browser Processing",
        "Zero Cloud Storage and Zero Server Uploads",
        "Fast Image Resizing with Aspect Ratio Lock",
        "Precision Aspect Ratio Cropping (1:1, 4:3, 16:9, 9:16, Freeform)",
        "Canvas 2D Rotation (90° CW/CCW) and Horizontal/Vertical Flipping",
        "Format Conversion between JPEG, PNG, and WebP",
        "Target File Size Compression in KB or MB",
        "Instant Offline and Private Usage",
      ],
      "author": {
        "@type": "Person",
        "name": "Dhrubo Roy Partho",
        "url": "https://linkedin.com/in/dhrubo-roy-partho",
        "jobTitle": "Engineer & Developer",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "University of Rajshahi",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "imzr",
      "description": "Quick Browser-Based Image Editor",
      "publisher": {
        "@type": "Person",
        "name": "Dhrubo Roy Partho",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is imzr?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "imzr is a fast, lightweight, browser-based image editor that allows you to resize, crop, rotate, flip, convert (JPEG, PNG, WebP), and compress images directly on your device without uploading files to any remote server.",
          },
        },
        {
          "@type": "Question",
          "name": "Are my images uploaded to any cloud server or database?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. imzr operates 100% client-side inside your web browser using HTML5 Canvas and native Web APIs. Your images never leave your local device, are never stored in the cloud, and cannot be viewed, accessed, or scraped by anyone.",
          },
        },
        {
          "@type": "Question",
          "name": "How does target file size compression work in imzr?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "imzr allows you to specify an exact target size (e.g. 50 KB, 100 KB, 2 MB). An intelligent binary-search compression algorithm automatically finds the optimal quality setting to produce an image file under your requested threshold.",
          },
        },
        {
          "@type": "Question",
          "name": "Which image formats can I convert between?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "imzr supports importing JPEG, PNG, WebP, GIF, and AVIF, and allows exporting and converting between JPEG, PNG, and WebP.",
          },
        },
        {
          "@type": "Question",
          "name": "Is imzr completely free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, imzr is 100% free with no registration, no subscription, no credit card required, and no watermarks.",
          },
        },
        {
          "@type": "Question",
          "name": "Who developed imzr?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "imzr was engineered by Dhrubo Roy Partho, graduate in Information and Communication Engineering from the University of Rajshahi.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "imzr — Quick Browser-Based Image Editor",
    template: "%s | imzr",
  },
  description:
    "Free, private, browser-only image editor. Resize, crop, rotate, flip, convert, and compress images directly in your browser. No uploads, no cloud storage, 100% secure.",
  applicationName: "imzr",
  keywords: [
    "imzr",
    "imzr image editor",
    "browser image editor",
    "online image editor",
    "quick image editor",
    "resize image online",
    "crop image online",
    "compress image online",
    "compress image to 50kb",
    "compress image to 100kb",
    "target size image compressor",
    "convert png to webp",
    "convert jpg to webp",
    "convert webp to jpg",
    "client-side image processing",
    "private image editor",
    "no upload image tool",
    "free photo editor without upload",
    "HTML5 canvas image tool",
    "Dhrubo Roy Partho",
    "Dhrubo Roy",
  ],
  authors: [
    {
      name: "Dhrubo Roy Partho",
      url: "https://linkedin.com/in/dhrubo-roy-partho",
    },
  ],
  creator: "Dhrubo Roy Partho",
  publisher: "Dhrubo Roy Partho",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "googlee93f5acf965a408c",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "imzr — Quick Browser-Based Image Editor",
    description:
      "Resize, crop, rotate, convert, and compress images directly in your browser. No upload, no cloud storage, completely private.",
    url: siteUrl,
    siteName: "imzr",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "imzr — Fast, Private Browser Image Editor Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "imzr — Quick Browser-Based Image Editor",
    description:
      "Resize, crop, rotate, convert, and compress images directly in your browser without uploading.",
    creator: "@dhruboroypartho",
    images: ["/icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
