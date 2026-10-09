import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Standard Aspect Ratios Explained: Social Media, Avatars & Passports",
  description:
    "Learn about standard aspect ratios (1:1, 16:9, 4:3, 9:16), image framing rules, and cropping guidelines for social media, avatars, and passports.",
  alternates: {
    canonical: "/guides/aspect-ratios-explained",
  },
  openGraph: {
    title: "Standard Aspect Ratios Explained — imzr",
    description:
      "A complete guide to standard aspect ratios, social media dimensions, avatar cropping, and passport photo formatting.",
    url: "/guides/aspect-ratios-explained",
  },
};

export default function AspectRatiosGuidePage() {
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
              <span>Cropping &amp; Composition</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Standard Aspect Ratios Explained: Social Media, Avatars, Passports &amp; Banners
            </h1>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              An aspect ratio describes the proportional relationship between an
              image&apos;s width and its height. Understanding aspect ratios ensures your
              photos fit social media feeds, presentations, and official application
              documents without awkward stretching or unintended cropping.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-6 text-sm text-slate-700 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                1. Aspect Ratio vs Absolute Resolution
              </h2>
              <p className="text-slate-600">
                Aspect ratio expresses a shape, not a physical pixel size. For example:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>
                  An image of <strong>1080 x 1080 px</strong> has an aspect ratio of 1:1.
                </li>
                <li>
                  An image of <strong>4000 x 4000 px</strong> also has an aspect ratio of 1:1.
                </li>
              </ul>
              <p className="text-slate-600">
                Cropping to the correct ratio first ensures that when you scale or upload
                the file, the hosting platform will not distort or letterbox your photo
                with black bars.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                2. The Most Common Standard Aspect Ratios
              </h2>

              <div className="space-y-3">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">1:1 (Square)</h3>
                    <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Width = Height
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    The modern universal standard for profile pictures, avatars, and
                    Instagram grid posts. Ideal for LinkedIn headshots, Twitter/X
                    avatars, and product catalog tiles.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">16:9 (Widescreen Landscape)</h3>
                    <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Standard High-Definition
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    The international standard for HD displays, laptops, and video.
                    Essential for YouTube video thumbnails (1280x720 px), presentation
                    slide decks (1920x1080 px), and website hero banner graphics.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">4:3 (Classic Photographic)</h3>
                    <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Traditional Print &amp; Sensors
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    The default native aspect ratio captured by Micro Four Thirds digital
                    cameras, tablet displays, and many smartphone cameras. Provides a
                    taller, well-balanced frame for portraits and printed flyers.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">9:16 (Vertical Fullscreen)</h3>
                    <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Mobile Portrait Story
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    The inverse of 16:9. Designed specifically for full-screen handheld
                    smartphones. Used for Instagram Stories, TikTok clips, and YouTube
                    Shorts (typically 1080x1920 px).
                  </p>
                </div>
              </div>
            </section>

            {/* Passport Photo Section */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                3. Passport &amp; Visa Photo Cropping Rules
              </h2>
              <p className="text-slate-600">
                Government visa and passport agencies enforce strict biometric photo
                composition standards:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
                <p>
                  <strong>US Passport &amp; Visa:</strong> 2 x 2 inches (exact 1:1
                  aspect ratio). Head height must measure between 50% and 69% of the
                  total image height from the chin to the top of the head.
                </p>
                <p>
                  <strong>Schengen &amp; UK Visa:</strong> 35 x 45 mm (aspect ratio
                  approximately 7:9). Face must take up 70% to 80% of the photograph.
                </p>
                <p>
                  <strong>General Rules:</strong> Neutral white or light-grey
                  background, no shadows, eyes looking straight ahead, and no headwear
                  except for documented religious purposes.
                </p>
              </div>
            </section>

            {/* Cropping in imzr */}
            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">
                4. Precise Cropping with imzr
              </h2>
              <p className="text-slate-600">
                imzr makes aspect ratio cropping seamless and exact:
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-slate-600 text-xs">
                <li>Load your photo into imzr via drag-and-drop.</li>
                <li>In the sidebar, click <strong>Crop</strong>.</li>
                <li>Choose your desired aspect preset (<strong>1:1</strong>, <strong>4:3</strong>, <strong>16:9</strong>, or <strong>9:16</strong>), or use <strong>Freeform</strong>.</li>
                <li>Drag the handles on the interactive canvas overlay to frame your subject perfectly.</li>
                <li>Click <strong>Apply Crop</strong> for instant in-browser cropping with zero delay.</li>
              </ol>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-block px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Crop an Image in Your Browser →
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
