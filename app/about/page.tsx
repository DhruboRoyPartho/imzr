import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About imzr",
  description:
    "Learn about imzr, its mission for private in-browser image processing, and developer Dhrubo Roy Partho from the University of Rajshahi.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About imzr — Fast, Private Browser Image Editor",
    description:
      "The story, mission, and architecture behind imzr: 100% client-side image editing with zero cloud uploads.",
    url: "/about",
  },
};

export default function AboutPage() {
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
              className="text-xs font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded transition-colors hidden sm:inline"
            >
              Guides
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

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10 sm:py-14">
        <article className="bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-xs space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Project & Mission
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              About imzr
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              imzr is a lightweight, high-performance web utility built to deliver
              fast, precise, and completely private image editing directly in the
              browser.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-6 text-sm text-slate-700">
            {/* Mission Section */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Why imzr Was Built
              </h2>
              <p className="leading-relaxed text-slate-600">
                Most web-based image resizers and compressors suffer from three major
                flaws:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
                <li>
                  <strong>Privacy Hazards:</strong> They transmit your confidential
                  photos, identity documents, and personal artwork to remote cloud
                  servers where files can be stored, mined, or exposed.
                </li>
                <li>
                  <strong>Unnecessary Latency:</strong> Uploading large photos over
                  slow cellular connections just to crop a few pixels or compress a
                  few kilobytes is inefficient and frustrating.
                </li>
                <li>
                  <strong>Aggressive Friction:</strong> Mandatory logins, paywalls,
                  daily conversion limits, and unwanted watermarks clutter the
                  experience.
                </li>
              </ol>
              <p className="leading-relaxed text-slate-600 mt-2">
                imzr eliminates all of these problems by bringing modern desktop-grade
                image processing natively into the browser.
              </p>
            </section>

            {/* Core Values */}
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Core Engineering Principles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h3 className="font-semibold text-slate-900 text-xs">
                    100% Client-Side Execution
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All decoding, resampling, cropping, and compression happen
                    locally on your CPU/GPU via HTML5 Canvas 2D and modern Web APIs.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h3 className="font-semibold text-slate-900 text-xs">
                    Zero Cloud Uploads
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No databases, no file storage buckets, and no backend API
                    endpoints. Your images never leave your machine.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h3 className="font-semibold text-slate-900 text-xs">
                    Target File Size Precision
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An automated binary-search solver iteratively finds the optimal
                    quality to guarantee files under specific limits (50 KB, 100 KB,
                    500 KB).
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <h3 className="font-semibold text-slate-900 text-xs">
                    Focused & Quiet UX
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A distraction-free interface engineered for instant turnaround
                    with clear dimensions, aspect-ratio locks, and clean downloads.
                  </p>
                </div>
              </div>
            </section>

            {/* Developer / Creator Attribution */}
            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                About the Developer
              </h2>
              <p className="leading-relaxed text-slate-600">
                imzr was designed and engineered by <strong>Dhrubo Roy Partho</strong>,
                a graduate in Information and Communication Engineering from the
                University of Rajshahi.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
                <p>
                  <strong>Academic Background:</strong> B.Sc. in Information and
                  Communication Engineering (ICE), University of Rajshahi,
                  Bangladesh.
                </p>
                <p>
                  <strong>Engineering Focus:</strong> High-performance client-side
                  web applications, computational geometry, web graphics, and secure
                  software architecture.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium">
                  <a
                    href="mailto:dhruboroypartho@gmail.com"
                    className="text-indigo-600 hover:underline"
                  >
                    ✉ dhruboroypartho@gmail.com
                  </a>
                  <a
                    href="https://linkedin.com/in/dhrubo-roy-partho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    LinkedIn Profile →
                  </a>
                  <a
                    href="https://github.com/DhruboRoyPartho/imzr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    GitHub Repository →
                  </a>
                </div>
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
              Image Editor
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
            <Link href="/contact" className="text-slate-800 hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
