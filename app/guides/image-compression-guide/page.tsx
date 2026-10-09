import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete Guide to Image Compression: Lossy vs Lossless",
  description:
    "Learn how image compression works, the difference between lossy and lossless algorithms, and how to compress photos to exact target file sizes in KB or MB.",
  alternates: {
    canonical: "/guides/image-compression-guide",
  },
  openGraph: {
    title: "The Complete Guide to Image Compression — imzr",
    description:
      "Deep dive into lossy vs lossless image compression, DCT quantization, and hitting strict file size limits (50 KB, 100 KB).",
    url: "/guides/image-compression-guide",
  },
};

export default function ImageCompressionGuidePage() {
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
              <span>Optimization</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The Complete Guide to Image Compression: Lossy vs Lossless & Target File Sizes
            </h1>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Every digital photograph is composed of millions of pixels. Uncompressed,
              a standard 12-megapixel smartphone photo requires roughly 36 megabytes of
              raw memory. Image compression is the mathematical process that reduces
              this file size so images can transfer instantaneously across networks.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-6 text-sm text-slate-700 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                1. Understanding Lossless vs Lossy Compression
              </h2>
              <p className="text-slate-600">
                The primary division in image encoding is between lossless and lossy
                algorithms:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <h3 className="font-semibold text-slate-900 text-xs">
                    Lossless Compression (e.g. PNG)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Lossless algorithms preserve 100% of the original pixel data. They
                    work like a ZIP archive, finding repeating patterns and color runs
                    using Deflate / DEFLATE/LZ77 algorithms. When decompressed, the
                    reconstructed image is bit-for-bit identical to the source.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    <strong>Best for:</strong> Logos, technical diagrams, screenshots,
                    and images requiring crisp text and transparency.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <h3 className="font-semibold text-slate-900 text-xs">
                    Lossy Compression (e.g. JPEG, WebP)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Lossy algorithms discard subtle visual information that the human
                    eye is biologically less sensitive to (such as high-frequency color
                    variations). By selectively discarding imperceptible data, files can
                    be reduced by 80% to 95% with minimal visible degradation.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    <strong>Best for:</strong> Photographs, portraits, complex textures,
                    and web hero images.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                2. How Lossy Compression Works (DCT & Quantization)
              </h2>
              <p className="text-slate-600">
                JPEG and modern WebP lossy modes rely on mathematical transformations:
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-slate-600 text-xs">
                <li>
                  <strong>Color Space Conversion:</strong> RGB pixels are converted to
                  YCbCr (Luminance Y, and Blue/Red Chrominance Cb/Cr). Because humans
                  perceive brightness much more sharply than color, color resolution
                  is safely subsampled (chroma subsampling 4:2:0).
                </li>
                <li>
                  <strong>Discrete Cosine Transform (DCT):</strong> Blocks of 8x8 pixels
                  are converted from the spatial domain into frequency components.
                </li>
                <li>
                  <strong>Quantization:</strong> High-frequency coefficients are divided
                  by quantization matrices and rounded to integers. When you adjust
                  the &quot;Quality&quot; slider (e.g. 80%), you are scaling this
                  quantization table. Higher quality keeps finer frequencies; lower
                  quality zeroes them out.
                </li>
                <li>
                  <strong>Entropy Encoding:</strong> The quantized numbers are compressed
                  using Huffman coding.
                </li>
              </ol>
            </section>

            {/* Section 3 */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                3. The Quality vs File Size Sweet Spot
              </h2>
              <p className="text-slate-600">
                A common misconception is that a photo must be saved at 100% quality to
                look professional:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs">
                <li>
                  <strong>Quality 95–100%:</strong> File size explodes exponentially
                  (often 4x larger), while human eyes cannot distinguish the difference
                  from quality 85% without 400% zoom.
                </li>
                <li>
                  <strong>Quality 80–85%:</strong> The optimal sweet spot for high-end
                  photography portfolios. Virtually indistinguishable from raw photos
                  at standard viewing distances, while reducing file size by 70%.
                </li>
                <li>
                  <strong>Quality 70–75%:</strong> The gold standard for modern web
                  applications, e-commerce thumbnails, and blog articles. Crisp visuals
                  with ultra-fast load times.
                </li>
                <li>
                  <strong>Quality below 50%:</strong> Visible blockiness, ringing
                  artifacts, and color banding start to appear.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">
                4. Hitting Exact File Size Limits (e.g. Under 50 KB or 100 KB)
              </h2>
              <p className="text-slate-600">
                Many online government job portals, visa application systems, and university
                admission forms mandate strict file size caps: <em>&quot;Passport photo must be
                under 50 KB&quot;</em> or <em>&quot;Attachment cannot exceed 200 KB&quot;</em>.
              </p>
              <p className="text-slate-600">
                Manually adjusting a quality slider, saving, checking file properties in
                Finder or Windows Explorer, and repeating is tedious. That is why imzr
                features an automated <strong>Target File Size Compressor</strong>:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
                <p className="font-semibold text-slate-900">
                  How imzr&apos;s Binary Search Solver Works:
                </p>
                <p>
                  Rather than guessing, imzr executes an in-browser binary search across
                  the quality continuum [0.01 to 0.99]. In 6 to 8 rapid iterations (taking
                  less than 150 milliseconds), it calculates the exact maximum quality
                  that satisfies your target byte threshold.
                </p>
                <p>
                  If an image has too many pixels to physically compress under the limit
                  even at minimal quality (for example, attempting to fit a 4000x3000 photo
                  under 20 KB), imzr automatically provides clear feedback on scaling
                  down image dimensions.
                </p>
              </div>
            </section>

            {/* Practical Takeaways */}
            <section className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">
                5. Best Practices Checklist
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>Always scale dimensions first: a 1200px wide image requires vastly less data than a 4000px image.</li>
                <li>Use WebP for modern web delivery; use JPEG for strict legacy portal compatibility.</li>
                <li>Use PNG only when transparent backgrounds or pixel-crisp vector graphics are required.</li>
                <li>Perform your compression in a client-side tool like imzr to avoid exposing sensitive photos to cloud servers.</li>
              </ul>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-block px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Compress an Image with imzr Now →
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
