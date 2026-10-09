import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Image Editing & Optimization Guides",
  description:
    "Explore comprehensive guides on image compression, JPEG vs PNG vs WebP formats, aspect ratios, and in-browser privacy best practices.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Image Editing & Optimization Guides — imzr",
    description:
      "Expert tutorials and in-depth articles on image optimization, compression math, aspect ratios, and web graphics.",
    url: "/guides",
  },
};

const guides = [
  {
    slug: "image-compression-guide",
    title: "The Complete Guide to Image Compression: Lossy vs Lossless & Target File Sizes",
    category: "Optimization",
    readTime: "7 min read",
    summary:
      "Understand DCT quantization, entropy reduction, visual artifacts, and how to reach strict file size limits (50 KB, 100 KB, 500 KB) for job portals and email attachments.",
  },
  {
    slug: "image-formats-compared",
    title: "WebP vs JPEG vs PNG: Which Image Format Should You Choose?",
    category: "Formats",
    readTime: "6 min read",
    summary:
      "A deep comparative analysis of next-gen WebP, universal JPEG, and lossless PNG. Discover transparency support, compression ratios, and cross-browser performance.",
  },
  {
    slug: "aspect-ratios-explained",
    title: "Standard Aspect Ratios Explained: Social Media, Avatars, Passports & Banners",
    category: "Cropping & Composition",
    readTime: "5 min read",
    summary:
      "Master standard aspect ratios including 1:1 square, 16:9 widescreen, 4:3 standard, and 9:16 vertical. Learn official dimensions for passports and profile photos.",
  },
  {
    slug: "client-side-privacy",
    title: "Why In-Browser Image Processing Protects Your Sensitive Documents",
    category: "Security & Privacy",
    readTime: "6 min read",
    summary:
      "Explore the hidden security vulnerabilities of cloud photo uploaders, how HTML5 Canvas executes locally, and how to audit network requests in browser DevTools.",
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-lg tracking-tight text-slate-900 hover:text-slate-700 select-none flex items-center gap-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/favicon.png"
              alt="imzr logo"
              className="w-5 h-5 object-contain rounded-xs"
            />
            <span>imzr</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/about"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded transition-colors hidden sm:inline"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="text-xs font-medium text-slate-700 hover:text-slate-900 px-3.5 py-1.5 border border-slate-300 hover:border-slate-400 rounded bg-white hover:bg-slate-50 transition-colors"
            >
              ← Back to Editor
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-10 sm:py-14 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            imzr Knowledge Base & Tutorials
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Image Editing & Optimization Guides
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed pt-1">
            Learn the science and best practices behind image compression, format
            conversion, aspect ratio framing, and client-side web security.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs hover:border-slate-400 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 uppercase tracking-wide text-[10px] bg-slate-100 px-2 py-0.5 rounded">
                    {guide.category}
                  </span>
                  <span>{guide.readTime}</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-1"
                >
                  Read Full Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>imzr — Free Browser-Only Image Editor</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-slate-800 hover:underline font-medium">
              Image Editor
            </Link>
            <Link href="/about" className="text-slate-800 hover:underline font-medium">
              About
            </Link>
            <Link href="/privacy" className="text-slate-800 hover:underline font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-800 hover:underline font-medium">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-slate-800 hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
