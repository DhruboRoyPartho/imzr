import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Support",
  description:
    "Get in touch with the imzr development team for inquiries, bug reports, feature requests, or technical support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Support — imzr",
    description:
      "Get in touch with developer Dhrubo Roy Partho for inquiries, feedback, or support regarding imzr.",
    url: "/contact",
  },
};

export default function ContactPage() {
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
              href="/about"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded transition-colors hidden sm:inline"
            >
              About
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
              Communication & Support
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Contact & Feedback
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Have a question, encountered an unexpected bug, or wish to suggest a
              new feature for imzr? We welcome feedback from our global users and
              developers.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-6 text-sm text-slate-700">
            {/* Direct Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Direct Email
                </span>
                <p className="font-semibold text-slate-900 text-sm">
                  Developer Inbox
                </p>
                <p className="text-xs text-slate-600">
                  Send questions, collaboration requests, or detailed bug reports
                  directly to the lead engineer:
                </p>
                <a
                  href="mailto:dhruboroypartho@gmail.com"
                  className="inline-block pt-1 text-xs font-medium text-indigo-600 hover:underline"
                >
                  dhruboroypartho@gmail.com →
                </a>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Professional Network
                </span>
                <p className="font-semibold text-slate-900 text-sm">
                  LinkedIn Connection
                </p>
                <p className="text-xs text-slate-600">
                  Connect with Dhrubo Roy Partho on LinkedIn for professional
                  inquiries and updates:
                </p>
                <a
                  href="https://linkedin.com/in/dhrubo-roy-partho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block pt-1 text-xs font-medium text-indigo-600 hover:underline"
                >
                  linkedin.com/in/dhrubo-roy-partho →
                </a>
              </div>
            </div>

            {/* GitHub Issues & Open Source */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Technical Inquiries & Bug Reports
              </h2>
              <p className="leading-relaxed text-slate-600">
                If you encounter a specific image decoding failure, browser
                rendering issue, or canvas anomaly, please include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>Your browser name and version (e.g. Chrome 124, Safari 17, Firefox 125)</li>
                <li>Your operating system (Windows, macOS, Linux, iOS, Android)</li>
                <li>The input file format (JPEG, PNG, WebP) and approximate resolution</li>
                <li>The specific editing action being performed (resize, crop, target file size)</li>
              </ul>
              <p className="leading-relaxed text-slate-600 text-xs pt-1">
                You can also open an issue on GitHub:{" "}
                <a
                  href="https://github.com/DhruboRoyPartho/imzr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  github.com/DhruboRoyPartho/imzr/issues
                </a>
                .
              </p>
            </section>

            {/* Academic Credential Note */}
            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Publisher & Developer Profile
              </h2>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                <p>
                  <strong>Dhrubo Roy Partho</strong>
                </p>
                <p className="text-slate-500">
                  B.Sc. in Information and Communication Engineering (ICE)
                </p>
                <p className="text-slate-500">
                  University of Rajshahi, Rajshahi, Bangladesh
                </p>
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
            <Link href="/about" className="text-slate-800 hover:underline font-medium">
              About
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
