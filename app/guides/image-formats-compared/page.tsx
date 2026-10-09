import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WebP vs JPEG vs PNG: Complete Format Comparison",
  description:
    "A comprehensive comparison of WebP, JPEG, and PNG image formats. Learn about compression efficiency, transparency support, and which format to use.",
  alternates: {
    canonical: "/guides/image-formats-compared",
  },
  openGraph: {
    title: "WebP vs JPEG vs PNG: Complete Format Comparison — imzr",
    description:
      "Understand the technical differences between JPEG, PNG, and WebP to choose the ideal format for web performance and image quality.",
    url: "/guides/image-formats-compared",
  },
};

export default function ImageFormatsComparedGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
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
              href="/guides"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded transition-colors"
            >
              All Guides
            </Link>
            <Link
              href="/"
              className="text-xs font-medium text-slate-700 hover:text-slate-900 px-3.5 py-1.5 border border-slate-300 hover:border-slate-400 rounded bg-white hover:bg-slate-50 transition-colors"
            >
              Open Editor
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10 sm:py-14">
        <article className="bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-xs space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <Link href="/guides" className="hover:underline text-indigo-600 font-medium">
                Guides
              </Link>
              <span>/</span>
              <span>Formats</span>
              <span>·</span>
              <span>6 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              WebP vs JPEG vs PNG: Which Image Format Should You Choose?
            </h1>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Choosing the correct image format directly affects page load speed,
              bandwidth consumption, visual quality, and platform compatibility. Here
              is an exhaustive engineering comparison of the web&apos;s three most
              prevalent image formats.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-6 text-sm text-slate-700 leading-relaxed">
            {/* Comparison Table */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                1. Feature Comparison Matrix
              </h2>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">JPEG (.jpg)</th>
                      <th className="p-3">PNG (.png)</th>
                      <th className="p-3">WebP (.webp)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Compression Type</td>
                      <td className="p-3">Lossy</td>
                      <td className="p-3">Lossless</td>
                      <td className="p-3">Both (Lossy &amp; Lossless)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Transparency (Alpha)</td>
                      <td className="p-3 text-rose-600 font-medium">No (White/Black bg)</td>
                      <td className="p-3 text-emerald-600 font-medium">Yes (8-bit alpha)</td>
                      <td className="p-3 text-emerald-600 font-medium">Yes (8-bit alpha)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Relative File Size</td>
                      <td className="p-3">Medium (Benchmark)</td>
                      <td className="p-3">Large (3x - 5x)</td>
                      <td className="p-3 text-emerald-600 font-medium">Smallest (25-35% less than JPG)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Browser Compatibility</td>
                      <td className="p-3">100% (All devices)</td>
                      <td className="p-3">100% (All devices)</td>
                      <td className="p-3">&gt;97% (Modern browsers)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Animation Support</td>
                      <td className="p-3">No</td>
                      <td className="p-3">APNG (Limited)</td>
                      <td className="p-3">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* JPEG Section */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                2. JPEG: The Universal Standard
              </h2>
              <p className="text-slate-600">
                Introduced in 1992 by the Joint Photographic Experts Group, JPEG remains
                the most universally supported file format in the world. Virtually every
                camera, printer, TV, and operating system handles JPEG out of the box.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>
                  <strong>When to use:</strong> Official documents, government job
                  portals, passport submissions, and systems where strict legacy
                  compatibility is required.
                </li>
                <li>
                  <strong>Limitations:</strong> Lacks alpha channel transparency (saving
                  a transparent icon as JPEG fills the background with solid white).
                  Repeated saves cause generational compression loss.
                </li>
              </ul>
            </section>

            {/* PNG Section */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                3. PNG: Pixel-Perfect Lossless &amp; Transparency
              </h2>
              <p className="text-slate-600">
                Created in 1996 to replace GIF, PNG utilizes lossless DEFLATE
                compression. It is designed to preserve sharp edges and exact color
                values without blur or mosquito noise.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>
                  <strong>When to use:</strong> Transparent brand logos, UI icons, app
                  mockups, pixel art, charts with small text, and scientific captures.
                </li>
                <li>
                  <strong>Limitations:</strong> File sizes are substantially larger for
                  photographs. Using PNG for camera photos can produce 10MB+ files that
                  severely hurt page loading speeds.
                </li>
              </ul>
            </section>

            {/* WebP Section */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                4. WebP: Google&apos;s Modern High-Efficiency Format
              </h2>
              <p className="text-slate-600">
                Developed by Google and based on VP8 video keyframe compression, WebP
                unifies the best attributes of both JPEG and PNG:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>
                  <strong>Photographic Efficiency:</strong> WebP lossy images are 25% to
                  34% smaller than comparable JPEG images at identical structural
                  similarity (SSIM) quality scores.
                </li>
                <li>
                  <strong>Lossless Transparency:</strong> WebP supports 8-bit alpha
                  channel transparency while producing files roughly 26% smaller than
                  PNG.
                </li>
                <li>
                  <strong>Modern Standard:</strong> Google Chrome, Safari, Firefox, Edge,
                  and mobile operating systems (iOS and Android) support WebP natively.
                </li>
              </ul>
            </section>

            {/* Decision Framework */}
            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">
                5. Quick Selection Framework
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
                  <span className="font-bold text-slate-900 block">Choose JPEG If:</span>
                  <p className="text-slate-600">
                    You are uploading to a government site, visa form, or strict portal
                    requiring &quot;.jpg only&quot;.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
                  <span className="font-bold text-slate-900 block">Choose PNG If:</span>
                  <p className="text-slate-600">
                    You need transparent cutouts, crisp graphic design logos, or
                    screenshots containing high-contrast text.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
                  <span className="font-bold text-slate-900 block">Choose WebP If:</span>
                  <p className="text-slate-600">
                    You are publishing on websites, blogs, or e-commerce stores where
                    speed and SEO rankings matter most.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-block px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Convert Formats with imzr →
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 bg-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>imzr — Free Browser-Only Image Editor</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-slate-800 hover:underline font-medium">
              Editor
            </Link>
            <Link href="/guides" className="text-slate-800 hover:underline font-medium">
              Guides
            </Link>
            <Link href="/privacy" className="text-slate-800 hover:underline font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-800 hover:underline font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
