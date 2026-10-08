import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Security Policy — imzr",
  description:
    "imzr is a 100% browser-based image utility. We do not upload, store, or process your images on any server. Total privacy and zero abuse risk.",
};

export default function PolicyPage() {
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
          <Link
            href="/"
            className="text-xs font-medium text-slate-700 hover:text-slate-900 px-3.5 py-2 border border-slate-300 hover:border-slate-400 rounded bg-white hover:bg-slate-50 transition-colors"
          >
            ← Back to Editor
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10 sm:py-14">
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-xs space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Guaranteed Security & Transparency
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Privacy & Security Policy
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              imzr was engineered from day one with a strict privacy-first,
              client-side architecture. Here is exactly how your photos are
              handled.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-6 text-sm text-slate-700">
            {/* Section 1 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                100% Browser-Based Image Processing
              </h2>
              <p className="leading-relaxed text-slate-600">
                All image operations — including opening, decoding, resizing,
                cropping, rotating, flipping, converting formats (JPEG, PNG,
                WebP), and compressing — execute strictly inside your web
                browser on your local device. Standard HTML5 Canvas 2D and modern
                browser File/Blob APIs are used natively.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                No Cloud Storage & No Uploads
              </h2>
              <p className="leading-relaxed text-slate-600">
                imzr maintains no backend server endpoints for processing images,
                no database, and no cloud object storage (such as AWS S3, Google
                Cloud Storage, or Vercel Blob). Your image files are never
                transmitted over the Internet to us or to any third party.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Zero Fear of Image Misuse or Abuse
              </h2>
              <p className="leading-relaxed text-slate-600">
                Because your images never leave your computer or phone, they
                cannot be viewed, monitored, retained, mined, scraped, or used to
                train artificial intelligence models. Your sensitive photos,
                personal documents, and private artwork remain solely in your
                hands.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Local Memory Lifecycle & Automatic Cleanup
              </h2>
              <p className="leading-relaxed text-slate-600">
                When you load or download an image, imzr creates temporary
                in-memory references (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">URL.createObjectURL</code>).
                These references are strictly revoked whenever you open another
                image, reset the editor, or close/refresh the browser tab,
                safely freeing system memory.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                No Account, No Registration, No Cookies
              </h2>
              <p className="leading-relaxed text-slate-600">
                You do not need to create an account, provide an email address, or
                log in to use imzr. The application functions entirely anonymously
                with no session cookies or user tracking.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                How You Can Verify This Yourself
              </h2>
              <p className="leading-relaxed text-slate-600">
                You can independently audit imzr at any time: open your browser’s
                Developer Tools (<kbd className="text-[11px] bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded font-mono">F12</kbd> or <kbd className="text-[11px] bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded font-mono">Cmd+Option+I</kbd>),
                navigate to the <strong>Network</strong> tab, and edit an image.
                You will observe zero outgoing requests containing image
                payloads. You can even disconnect your internet after loading
                imzr — the editor will continue to work normally!
              </p>
            </section>
          </div>

          {/* Developer / Project Attribution */}
          <div className="border-t border-slate-100 pt-6 mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Project & Authorship
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designed and developed by{" "}
              <a
                href="https://linkedin.com/in/dhrubo-roy-partho"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-900 hover:underline"
              >
                Dhrubo Roy Partho
              </a>
              , B.Sc. in Information and Communication Engineering, University of
              Rajshahi.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Contact:{" "}
              <a
                href="mailto:dhruboroypartho@gmail.com"
                className="hover:underline text-slate-700"
              >
                dhruboroypartho@gmail.com
              </a>{" "}
              ·{" "}
              <a
                href="https://linkedin.com/in/dhrubo-roy-partho"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-slate-700"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 bg-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>imzr — Browser-only image editor</span>
          <Link href="/" className="text-slate-800 hover:underline font-medium">
            Open Image Editor
          </Link>
        </div>
      </footer>
    </div>
  );
}
