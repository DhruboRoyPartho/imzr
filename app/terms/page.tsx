import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "imzr Terms of Service. Review the conditions, intellectual property rights, and fair usage guidelines for our free browser-based image editor.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service — imzr",
    description:
      "Conditions of use for imzr. 100% free, private browser utility. You retain full ownership of your images.",
    url: "/terms",
  },
};

export default function TermsPage() {
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
              Agreement & Terms
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: October 8, 2026 · Version 1.0
            </p>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Welcome to <strong>imzr</strong> (&quot;the Service&quot;), hosted at{" "}
              <a href="https://imzrs.vercel.app" className="underline text-slate-800">
                https://imzrs.vercel.app
              </a>
              . By accessing or using this web application, you agree to be bound by
              these Terms of Service. If you do not agree with any part of these
              terms, please discontinue use of the service.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-6 text-sm text-slate-700">
            {/* 1. Description of Service */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                1. Description of Service
              </h2>
              <p className="leading-relaxed text-slate-600">
                imzr provides a free, browser-based graphical utility for resizing,
                cropping, rotating, converting (JPEG, PNG, WebP), and compressing
                image files. The entire computational workload executes locally on
                the user&apos;s device using standard client-side Web technologies
                (HTML5 Canvas, JavaScript, Web Workers).
              </p>
            </section>

            {/* 2. User Content & Intellectual Property */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                2. User Content & Intellectual Property Ownership
              </h2>
              <p className="leading-relaxed text-slate-600">
                <strong>You retain 100% full ownership, copyright, and rights</strong>{" "}
                over any images you process through imzr.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>
                  imzr claims no ownership, intellectual property rights, or
                  license over your media.
                </li>
                <li>
                  Because image operations execute locally in your browser memory,
                  imzr never receives, stores, or hosts your images on any server.
                </li>
                <li>
                  You are solely responsible for ensuring that you possess the legal
                  rights or authorization to modify the images you edit.
                </li>
              </ul>
            </section>

            {/* 3. Acceptable Use */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                3. Acceptable Use
              </h2>
              <p className="leading-relaxed text-slate-600">
                You agree to use imzr solely for lawful purposes. You agree not to
                attempt to disrupt, compromise, or circumvent the service, inject
                malicious scripts, or interfere with other visitors&apos; access.
              </p>
            </section>

            {/* 4. Disclaimer of Warranties */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                4. Disclaimer of Warranties
              </h2>
              <p className="leading-relaxed text-slate-600">
                imzr is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
                basis without warranties of any kind, whether express, implied, or
                statutory. While we strive for maximum accuracy, fidelity, and
                performance, we do not warrant that the application will be
                completely error-free, uninterrupted, or compatible with all possible
                hardware or browser configurations.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                5. Limitation of Liability
              </h2>
              <p className="leading-relaxed text-slate-600">
                In no event shall the developer, authors, or contributors of imzr be
                liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from the use or inability to use the
                service, including data loss or system malfunctions. Always preserve
                backups of your original photo files.
              </p>
            </section>

            {/* 6. Advertising and Third-Party Links */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                6. Advertising & Third-Party Services
              </h2>
              <p className="leading-relaxed text-slate-600">
                imzr may display advertisements served by Google AdSense on its
                content pages. We do not endorse or assume liability for third-party
                products, services, or websites linked through advertising banners.
                Please consult our{" "}
                <Link href="/privacy" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                for details on advertising cookies and privacy choices.
              </p>
            </section>

            {/* 7. Contact */}
            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                7. Questions & Contact
              </h2>
              <p className="leading-relaxed text-slate-600 text-xs">
                For questions regarding these Terms of Service, contact the developer
                at{" "}
                <a
                  href="mailto:dhruboroypartho@gmail.com"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  dhruboroypartho@gmail.com
                </a>
                .
              </p>
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
            <Link href="/privacy" className="text-slate-800 hover:underline font-medium">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-slate-800 hover:underline font-medium">
              About
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
