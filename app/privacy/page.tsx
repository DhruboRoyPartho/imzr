import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "imzr Privacy Policy. Learn how imzr protects your privacy with 100% client-side image processing, zero cloud uploads, and our Google AdSense cookie disclosure.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — imzr",
    description:
      "Privacy-first browser image utility. Zero server uploads, client-side processing, and transparent advertising disclosures.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
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
              Legal & Privacy Protection
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Last updated: October 2026 · Effective Date: October 8, 2026
            </p>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              At <strong>imzr</strong>, accessible from{" "}
              <a href="https://imzrs.vercel.app" className="underline text-slate-800">
                https://imzrs.vercel.app
              </a>
              , we prioritize the privacy and security of our visitors. This Privacy
              Policy document outlines our strict client-side data handling
              architecture, how third-party advertising cookies are managed, and
              your rights under applicable data protection laws.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-6 text-sm text-slate-700">
            {/* 1. Client-Side Image Processing */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                1. 100% Client-Side Image Processing (Zero Uploads)
              </h2>
              <p className="leading-relaxed text-slate-600">
                The core principle of imzr is complete local processing. When you
                select, drop, resize, crop, rotate, convert, or compress an image on
                imzr:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>
                  Your files are processed solely within your browser using native
                  HTML5 Canvas 2D and Web APIs.
                </li>
                <li>
                  Your images are <strong>never uploaded</strong> to any remote web
                  server, cloud bucket, or external service.
                </li>
                <li>
                  We do not operate backend servers that receive, inspect, save, or
                  train AI models on your photos.
                </li>
                <li>
                  When you close the browser tab or open another photo, memory
                  pointers (<code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono text-[11px]">URL.createObjectURL</code>)
                  are revoked immediately.
                </li>
              </ul>
            </section>

            {/* 2. Google AdSense & Cookies Disclosure (MANDATORY) */}
            <section className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                2. Third-Party Advertising & Google AdSense Cookies
              </h2>
              <p className="leading-relaxed text-slate-600">
                We partner with Google AdSense to display advertisements on content
                pages of our website. In accordance with Google AdSense programme
                policies, please be informed of the following:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs">
                <li>
                  <strong>Third-Party Vendors & Google Cookies:</strong> Third-party
                  vendors, including Google, use cookies to serve ads based on a
                  user&apos;s prior visits to this website or other websites on the
                  Internet.
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> Google&apos;s use of
                  advertising cookies enables it and its partners to serve ads to
                  our users based on their visit to our sites and/or other sites on
                  the Internet.
                </li>
                <li>
                  <strong>Personalized Advertising Opt-Out:</strong> Users may opt
                  out of personalized advertising by visiting{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    Google Ads Settings
                  </a>
                  . Alternatively, users can opt out of third-party vendors&apos;
                  use of cookies for personalized advertising by visiting{" "}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    www.aboutads.info
                  </a>
                  .
                </li>
                <li>
                  <strong>No Ad Serving on Tool Canvas:</strong> To comply with
                  Google&apos;s policy against serving ads on screens without
                  publisher content, advertisements are strictly suppressed and
                  hidden when a user is actively editing an image.
                </li>
              </ul>
            </section>

            {/* 3. Log Files and Web Analytics */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                3. Standard Web Hosting Logs
              </h2>
              <p className="leading-relaxed text-slate-600">
                Like most websites hosted on global edge networks (such as Vercel),
                standard server access logs may temporarily record basic,
                non-personally identifiable technical information (such as internet
                protocol [IP] addresses, browser type, referring pages, date/time
                stamp). This information is solely used for infrastructure health,
                security defense against DDoS attacks, and network optimization.
              </p>
            </section>

            {/* 4. Children's Privacy */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                4. Children&apos;s Information (COPPA Compliance)
              </h2>
              <p className="leading-relaxed text-slate-600">
                imzr does not knowingly collect any Personal Identifiable
                Information from children under the age of 13. Because our service
                operates client-side without registration or accounts, no personal
                records or personal databases exist.
              </p>
            </section>

            {/* 5. User Rights (GDPR & CCPA) */}
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                5. GDPR & CCPA Data Protection Rights
              </h2>
              <p className="leading-relaxed text-slate-600">
                Under the General Data Protection Regulation (GDPR) and California
                Consumer Privacy Act (CCPA), users have rights regarding their
                personal data:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>
                  <strong>Right to Access / Know:</strong> You have the right to
                  request what personal data is held. Because imzr operates without
                  servers or accounts, we hold zero user files or personal records.
                </li>
                <li>
                  <strong>Right to Deletion:</strong> You have the right to request
                  data erasure. Your photos are automatically removed from device
                  RAM as soon as you close or refresh your browser tab.
                </li>
                <li>
                  <strong>Zero Sale of Data:</strong> imzr does not sell, rent, or
                  monetize user personal data or photos under any circumstance.
                </li>
              </ul>
            </section>

            {/* 6. Contact Information */}
            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                6. Contact the Developer
              </h2>
              <p className="leading-relaxed text-slate-600">
                If you have questions or suggestions about our Privacy Policy, please
                reach out directly to:
              </p>
              <div className="bg-slate-50 p-4 rounded border border-slate-200 text-xs text-slate-700 space-y-1">
                <p>
                  <strong>Developer:</strong> Dhrubo Roy Partho
                </p>
                <p>
                  <strong>Department:</strong> Department of Information and
                  Communication Engineering, University of Rajshahi
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:dhruboroypartho@gmail.com"
                    className="text-indigo-600 hover:underline"
                  >
                    dhruboroypartho@gmail.com
                  </a>
                </p>
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://linkedin.com/in/dhrubo-roy-partho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    linkedin.com/in/dhrubo-roy-partho
                  </a>
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
            <Link href="/terms" className="text-slate-800 hover:underline font-medium">
              Terms of Service
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
