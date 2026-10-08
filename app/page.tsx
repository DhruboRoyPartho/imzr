"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import ImageDropzone from "@/components/ImageDropzone";
import ImageEditor from "@/components/ImageEditor";
import CreditModal from "@/components/CreditModal";
import { SourceImage } from "@/lib/image/types";

export default function Home() {
  const [sourceImage, setSourceImage] = useState<SourceImage | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCreditOpen, setIsCreditOpen] = useState(false);

  // Clean up object URL when source image changes or component unmounts
  useEffect(() => {
    return () => {
      if (sourceImage) {
        URL.revokeObjectURL(sourceImage.sourceUrl);
      }
    };
  }, [sourceImage]);

  const handleImageLoaded = (newImage: SourceImage) => {
    if (sourceImage) {
      URL.revokeObjectURL(sourceImage.sourceUrl);
    }
    setSourceImage(newImage);
    setErrorMessage(null);
  };

  const handleError = (error: string) => {
    setErrorMessage(error);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Header
        hasImage={!!sourceImage}
        onImageLoaded={handleImageLoaded}
        onError={handleError}
        onOpenCredit={() => setIsCreditOpen(true)}
      />

      <main className="flex-1 flex flex-col">
        {errorMessage && (
          <div className="max-w-2xl mx-auto w-full mt-4 px-4">
            <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-3 rounded text-sm flex items-start justify-between">
              <span>{errorMessage}</span>
              <button
                type="button"
                onClick={() => setErrorMessage(null)}
                className="text-amber-700 hover:text-amber-900 font-bold ml-4 cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {!sourceImage ? (
          <div className="flex-1 flex flex-col items-center">
            {/* Hero / Dropzone Area */}
            <div className="w-full flex flex-col items-center justify-center py-10 sm:py-14 px-4">
              <h1 className="sr-only">imzr — Quick Browser-Based Image Editor</h1>
              <ImageDropzone
                onImageLoaded={handleImageLoaded}
                onError={handleError}
              />
            </div>

            {/* SEO Content Container (Indexable by Googlebot & Search Engines) */}
            <div className="w-full max-w-4xl mx-auto px-4 pb-16 space-y-16 text-slate-800">
              
              {/* How It Works Section */}
              <section aria-labelledby="how-it-works-heading" className="space-y-6">
                <div className="text-center space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Fast & Seamless Workflow
                  </span>
                  <h2
                    id="how-it-works-heading"
                    className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900"
                  >
                    How to Edit Images Online with imzr
                  </h2>
                  <p className="text-sm text-slate-600 max-w-xl mx-auto">
                    Three simple steps to resize, crop, convert, or compress photos right inside your browser without uploading to any server.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs relative">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold mb-3">
                      1
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">
                      Drop or Select Image
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Drag and drop your photo or click to browse. Files are decoded natively in your browser with zero network latency.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs relative">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold mb-3">
                      2
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">
                      Edit, Resize & Crop
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Scale dimensions with aspect ratio lock, crop to standard aspect ratios (1:1, 16:9, 4:3), or rotate and flip instantly.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs relative">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold mb-3">
                      3
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">
                      Compress & Download
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Convert to JPEG, PNG, or WebP. Set quality or target file size (e.g. 50 KB or 100 KB) and export directly to your device.
                    </p>
                  </article>
                </div>
              </section>

              {/* Core Features Grid */}
              <section aria-labelledby="features-heading" className="space-y-6">
                <div className="text-center space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Engineered for Precision
                  </span>
                  <h2
                    id="features-heading"
                    className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900"
                  >
                    Core Image Editing Features
                  </h2>
                  <p className="text-sm text-slate-600 max-w-xl mx-auto">
                    Everything you need for daily quick image adjustments in a lightweight, focused toolkit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-2">
                    <div className="text-slate-900 font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-600" />
                      In-Browser Image Resizing
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Resize photos by exact pixels or percentage scale. Maintain crisp quality with proportional aspect ratio lock.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-2">
                    <div className="text-slate-900 font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      Preset & Freeform Cropping
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Crop images freely or snap to popular aspect ratios: 1:1 square for avatars, 16:9 for presentations, 4:3, and 9:16 mobile portraits.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-2">
                    <div className="text-slate-900 font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      Target File Size Compressor
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Need an image under 50 KB, 100 KB, or 500 KB for an online portal or job application? Smart binary search finds the optimal quality automatically.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-2">
                    <div className="text-slate-900 font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-600" />
                      Format Conversion (WebP / JPEG / PNG)
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Convert between modern WebP, versatile JPEG, and lossless transparent PNG with real-time compression preview.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-2">
                    <div className="text-slate-900 font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      Lossless Rotation & Flipping
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Rotate 90 degrees clockwise or counter-clockwise, and flip horizontally or vertically using native HTML5 Canvas transforms.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-2">
                    <div className="text-slate-900 font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-600" />
                      100% Client-Side Privacy
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      No cloud uploads, no database storage, and no tracking. Photos stay exclusively on your local machine and can even work offline.
                    </p>
                  </article>
                </div>
              </section>

              {/* Privacy Guarantee Banner */}
              <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold">
                    Zero Cloud Uploads · Zero Storage
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    Private by Design: Your Photos Never Leave Your Device
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                    Unlike standard web converters that upload your confidential documents and photos to remote servers, imzr executes 100% inside your browser’s local JavaScript engine.
                  </p>
                </div>
                <Link
                  href="/policy"
                  className="shrink-0 px-4 py-2.5 bg-white text-slate-900 hover:bg-slate-100 rounded text-xs font-semibold transition-colors shadow-xs"
                >
                  Read Security Policy →
                </Link>
              </section>

              {/* Frequently Asked Questions (FAQ) Section */}
              <section aria-labelledby="faq-heading" className="space-y-6">
                <div className="text-center space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Got Questions?
                  </span>
                  <h2
                    id="faq-heading"
                    className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900"
                  >
                    Frequently Asked Questions
                  </h2>
                  <p className="text-sm text-slate-600 max-w-xl mx-auto">
                    Common answers about using imzr for quick and secure image editing.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <details className="group bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                    <summary className="font-semibold text-sm text-slate-900 cursor-pointer flex items-center justify-between select-none">
                      <span>Is imzr completely free to use?</span>
                      <span className="text-xs text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed border-t border-slate-100 pt-2.5">
                      Yes! imzr is 100% free with no hidden subscriptions, no usage quotas, no registration required, and no watermarks placed on your exported photos.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                    <summary className="font-semibold text-sm text-slate-900 cursor-pointer flex items-center justify-between select-none">
                      <span>Are my images uploaded to any remote server or cloud storage?</span>
                      <span className="text-xs text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed border-t border-slate-100 pt-2.5">
                      No. All decoding, editing, cropping, scaling, and compression happen entirely inside your web browser via HTML5 Canvas. Your photos never leave your device and are never sent over the internet.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                    <summary className="font-semibold text-sm text-slate-900 cursor-pointer flex items-center justify-between select-none">
                      <span>How do I compress an image to a specific target file size (e.g. 50 KB or 100 KB)?</span>
                      <span className="text-xs text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed border-t border-slate-100 pt-2.5">
                      Simply switch the compression mode from &quot;Manual Quality&quot; to &quot;Target File Size&quot;, select JPEG or WebP, and type your desired maximum size in KB or MB. imzr runs an automated binary-search solver to achieve the closest possible size below your limit.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                    <summary className="font-semibold text-sm text-slate-900 cursor-pointer flex items-center justify-between select-none">
                      <span>Which image formats does imzr support?</span>
                      <span className="text-xs text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed border-t border-slate-100 pt-2.5">
                      You can open JPEG, PNG, WebP, GIF, and AVIF files. When exporting, you can choose between JPEG, PNG, or modern WebP format.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                    <summary className="font-semibold text-sm text-slate-900 cursor-pointer flex items-center justify-between select-none">
                      <span>Can I use imzr on mobile devices?</span>
                      <span className="text-xs text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed border-t border-slate-100 pt-2.5">
                      Yes. imzr is fully responsive and optimized for touchscreens, mobile phones, tablets, and desktop workstations alike.
                    </p>
                  </details>

                  <details className="group bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                    <summary className="font-semibold text-sm text-slate-900 cursor-pointer flex items-center justify-between select-none">
                      <span>Who created imzr?</span>
                      <span className="text-xs text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed border-t border-slate-100 pt-2.5">
                        imzr was developed by <strong>Dhrubo Roy Partho</strong>, graduate in Information and Communication Engineering from the University of Rajshahi. You can learn more via his{" "}
                        <a
                          href="https://linkedin.com/in/dhrubo-roy-partho"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-900 font-medium underline"
                        >
                          LinkedIn profile
                        </a>.
                      </p>
                  </details>
                </div>
              </section>

            </div>

            {/* Minimalistic Credit Status Footer */}
            <footer className="w-full py-8 text-center text-xs text-slate-500 border-t border-slate-200 mt-auto bg-white/80">
              <div className="max-w-xl mx-auto px-4 space-y-1.5">
                <p className="font-semibold text-slate-700 tracking-tight">
                  imzr — Browser-Based Quick Image Utility
                </p>
                <p className="text-slate-600">
                  Developed by{" "}
                  <a
                    href="https://linkedin.com/in/dhrubo-roy-partho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 font-medium hover:underline"
                  >
                    Dhrubo Roy Partho
                  </a>
                  {" · "}
                  <span className="text-slate-500">
                    B.Sc. in Information and Communication Engineering,
                    University of Rajshahi
                  </span>
                </p>
                <div className="flex items-center justify-center gap-3 pt-1 text-slate-500 text-[11px]">
                  <a
                    href="mailto:dhruboroypartho@gmail.com"
                    className="hover:text-slate-800 underline"
                  >
                    dhruboroypartho@gmail.com
                  </a>
                  <span>·</span>
                  <a
                    href="https://linkedin.com/in/dhrubo-roy-partho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-800 underline"
                  >
                    LinkedIn Profile
                  </a>
                  <span>·</span>
                  <Link href="/policy" className="hover:text-slate-800 underline">
                    Privacy & Security Policy
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        ) : (
          <ImageEditor
            sourceImage={sourceImage}
            onError={handleError}
          />
        )}
      </main>

      {/* Developer Credit Modal */}
      <CreditModal
        isOpen={isCreditOpen}
        onClose={() => setIsCreditOpen(false)}
      />
    </div>
  );
}
