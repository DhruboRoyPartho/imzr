import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why In-Browser Image Processing Protects Your Sensitive Documents",
  description:
    "Discover how client-side HTML5 Canvas image processing eliminates the privacy risks of cloud uploaders when resizing and cropping sensitive photos.",
  alternates: {
    canonical: "/guides/client-side-privacy",
  },
  openGraph: {
    title: "Why In-Browser Image Processing Protects Sensitive Documents — imzr",
    description:
      "A security analysis of cloud photo uploaders vs 100% client-side browser editing for passports, ID cards, and confidential documents.",
    url: "/guides/client-side-privacy",
  },
};

export default function ClientSidePrivacyGuidePage() {
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
              <span>Security &amp; Privacy</span>
              <span>·</span>
              <span>6 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why In-Browser Image Processing Protects Your Sensitive Documents
            </h1>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              When applying for visas, job applications, or university enrollments,
              you are frequently required to resize or compress sensitive documents:
              passports, government IDs, bank checks, and certificates. Uploading these
              files to random online converters poses severe security risks.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-6 text-sm text-slate-700 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                1. The Hidden Vulnerabilities of Cloud Converters
              </h2>
              <p className="text-slate-600">
                Most traditional online image converters operate on a client-server
                model:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 text-slate-600 text-xs">
                <li>Your browser sends an HTTP POST request transmitting your image across the internet.</li>
                <li>The server saves the file to a temporary directory or Amazon S3 bucket.</li>
                <li>A server-side command-line utility (like ImageMagick, libvips, or ffmpeg) processes the file.</li>
                <li>The server transmits a download URL back to your browser.</li>
              </ol>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-xs text-amber-900 space-y-1 mt-2">
                <span className="font-bold block">The Risk:</span>
                <p>
                  Even if the service promises &quot;files deleted after 1 hour&quot;,
                  your sensitive documents pass through intermediary proxies, CDN
                  caches, server logs, and potential misconfigured cloud storage buckets.
                  Furthermore, untrusted third-party services may silently scrape or
                  mine uploaded photos for machine learning training datasets.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                2. How imzr&apos;s Client-Side Architecture Works
              </h2>
              <p className="text-slate-600">
                imzr was engineered from the ground up with zero backend servers.
                Instead, it leverages the immense computational power already inside
                your device&apos;s browser:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
                  <span className="font-bold text-slate-900 block">1. Local Decode</span>
                  <p className="text-slate-600">
                    Your file is read directly from local disk memory using the
                    standard Web File and Blob APIs (<code className="font-mono text-[10px]">URL.createObjectURL</code>).
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
                  <span className="font-bold text-slate-900 block">2. Canvas Compute</span>
                  <p className="text-slate-600">
                    Pixels are mapped into an in-memory HTML5 Canvas 2D context.
                    Resampling, cropping, and rotation execute on your local CPU/GPU.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
                  <span className="font-bold text-slate-900 block">3. Local Encode</span>
                  <p className="text-slate-600">
                    The canvas directly serializes into JPEG, PNG, or WebP binary bytes
                    (<code className="font-mono text-[10px]">canvas.toBlob</code>) and triggers a local download.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                3. How to Independently Audit This Yourself
              </h2>
              <p className="text-slate-600">
                You do not have to take our word for it. You can independently verify
                that imzr makes zero external uploads:
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-slate-600 text-xs">
                <li>
                  Open your browser&apos;s Developer Tools by pressing <kbd className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded font-mono text-[11px]">F12</kbd> (or <kbd className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded font-mono text-[11px]">Cmd+Option+I</kbd> on macOS).
                </li>
                <li>Navigate to the <strong>Network</strong> tab.</li>
                <li>Drop a large photograph into imzr, crop it, resize it, and download it.</li>
                <li>
                  Inspect the Network activity: you will observe <strong>zero outgoing POST/PUT requests</strong> containing your image bytes.
                </li>
                <li>
                  <em>Extra Test:</em> Disconnect your computer from Wi-Fi or unplug your
                  Ethernet cable. imzr will continue to resize, crop, and compress images
                  completely offline without interruption!
                </li>
              </ol>
            </section>

            {/* Section 4 */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                4. Which Documents Require In-Browser Processing?
              </h2>
              <p className="text-slate-600">
                Always prioritize client-side tools like imzr when handling:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>National ID cards, Passports, and Driver&apos;s Licenses</li>
                <li>Academic certificates, university transcripts, and diplomas</li>
                <li>Medical records, prescriptions, and biometric health scans</li>
                <li>Tax forms, bank checks, pay stubs, and financial audits</li>
                <li>Confidential corporate pitch decks and NDA-protected graphics</li>
              </ul>
            </section>

            {/* CTA */}
            <section className="space-y-2 pt-4 border-t border-slate-100">
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-block px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Edit Your Sensitive Documents Safely with imzr →
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
