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

  // Manage Google AdSense Auto Ads: display on landing page, suppress during active image editing
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (sourceImage) {
      document.body.setAttribute("data-editor-active", "true");
      document.documentElement.setAttribute("data-editor-active", "true");

      const cleanupAdStyles = () => {
        if (document.body.style.paddingTop) document.body.style.removeProperty("padding-top");
        if (document.body.style.paddingBottom) document.body.style.removeProperty("padding-bottom");
        if (document.documentElement.style.paddingTop) document.documentElement.style.removeProperty("padding-top");
        if (document.documentElement.style.paddingBottom) document.documentElement.style.removeProperty("padding-bottom");
      };

      cleanupAdStyles();

      // Guard against AdSense dynamically adding sticky anchor padding to body while editing
      const observer = new MutationObserver(() => {
        cleanupAdStyles();
      });

      observer.observe(document.body, { attributes: true, attributeFilter: ["style", "class"] });

      return () => {
        observer.disconnect();
        document.body.removeAttribute("data-editor-active");
        document.documentElement.removeAttribute("data-editor-active");
      };
    } else {
      document.body.removeAttribute("data-editor-active");
      document.documentElement.removeAttribute("data-editor-active");
    }
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

              {/* Featured Educational Guides & Knowledge Base */}
              <section aria-labelledby="guides-heading" className="space-y-6">
                <div className="text-center space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Publisher Knowledge Base
                  </span>
                  <h2
                    id="guides-heading"
                    className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900"
                  >
                    Image Optimization &amp; Privacy Guides
                  </h2>
                  <p className="text-sm text-slate-600 max-w-xl mx-auto">
                    In-depth articles exploring image compression algorithms, aspect ratio standards, and browser security.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        Optimization
                      </span>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        <Link href="/guides/image-compression-guide" className="hover:text-indigo-600 transition-colors">
                          The Complete Guide to Image Compression: Lossy vs Lossless
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Learn how DCT quantization works and how to hit exact file size limits (50 KB, 100 KB, 500 KB) for job portals.
                      </p>
                    </div>
                    <Link
                      href="/guides/image-compression-guide"
                      className="text-xs font-medium text-indigo-600 hover:underline pt-1 inline-block"
                    >
                      Read Guide →
                    </Link>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        Formats
                      </span>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        <Link href="/guides/image-formats-compared" className="hover:text-indigo-600 transition-colors">
                          WebP vs JPEG vs PNG: Which Format Should You Choose?
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A detailed technical comparison of compression efficiency, transparency support, and web performance.
                      </p>
                    </div>
                    <Link
                      href="/guides/image-formats-compared"
                      className="text-xs font-medium text-indigo-600 hover:underline pt-1 inline-block"
                    >
                      Read Guide →
                    </Link>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        Cropping
                      </span>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        <Link href="/guides/aspect-ratios-explained" className="hover:text-indigo-600 transition-colors">
                          Standard Aspect Ratios Explained: Social Media &amp; Passports
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Master 1:1, 16:9, 4:3, and 9:16 aspect ratios. Learn official dimensions for avatars and passport photos.
                      </p>
                    </div>
                    <Link
                      href="/guides/aspect-ratios-explained"
                      className="text-xs font-medium text-indigo-600 hover:underline pt-1 inline-block"
                    >
                      Read Guide →
                    </Link>
                  </article>

                  <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        Security
                      </span>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        <Link href="/guides/client-side-privacy" className="hover:text-indigo-600 transition-colors">
                          Why In-Browser Image Processing Protects Your Documents
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Why uploading sensitive IDs to cloud converters is dangerous, and how HTML5 Canvas keeps your files private.
                      </p>
                    </div>
                    <Link
                      href="/guides/client-side-privacy"
                      className="text-xs font-medium text-indigo-600 hover:underline pt-1 inline-block"
                    >
                      Read Guide →
                    </Link>
                  </article>
                </div>

                <div className="text-center pt-2">
                  <Link
                    href="/guides"
                    className="inline-block px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                  >
                    View All Knowledge Base Guides →
                  </Link>
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

            {/* Comprehensive Publisher & Legal Footer */}
            <footer className="w-full border-t border-slate-200 mt-auto bg-white/90 text-xs text-slate-600">
              <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  {/* Col 1: About */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/favicon.png"
                        alt="imzr logo"
                        className="w-4 h-4 object-contain"
                      />
                      <span className="font-bold text-slate-900 tracking-tight">imzr</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed text-[11px]">
                      A high-speed, private browser image utility. Resize, crop, convert, and compress photos with 100% client-side computing.
                    </p>
                  </div>

                  {/* Col 2: Image Tools */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-xs">Image Tools</h4>
                    <ul className="space-y-1.5 text-[11px] text-slate-600">
                      <li>
                        <Link href="/" className="hover:text-indigo-600 transition-colors">
                          Image Resizer (Pixels &amp; %)
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="hover:text-indigo-600 transition-colors">
                          Aspect Ratio Cropper
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="hover:text-indigo-600 transition-colors">
                          Target File Size Compressor
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="hover:text-indigo-600 transition-colors">
                          WebP, JPEG &amp; PNG Converter
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Col 3: Knowledge Base Guides */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-xs">Educational Guides</h4>
                    <ul className="space-y-1.5 text-[11px] text-slate-600">
                      <li>
                        <Link href="/guides/image-compression-guide" className="hover:text-indigo-600 transition-colors">
                          Image Compression Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/guides/image-formats-compared" className="hover:text-indigo-600 transition-colors">
                          WebP vs JPEG vs PNG
                        </Link>
                      </li>
                      <li>
                        <Link href="/guides/aspect-ratios-explained" className="hover:text-indigo-600 transition-colors">
                          Aspect Ratios Explained
                        </Link>
                      </li>
                      <li>
                        <Link href="/guides/client-side-privacy" className="hover:text-indigo-600 transition-colors">
                          Client-Side Privacy Security
                        </Link>
                      </li>
                      <li>
                        <Link href="/guides" className="hover:text-indigo-600 transition-colors font-medium">
                          Browse All Guides →
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Col 4: Trust & Policies */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-xs">About &amp; Policies</h4>
                    <ul className="space-y-1.5 text-[11px] text-slate-600">
                      <li>
                        <Link href="/about" className="hover:text-indigo-600 transition-colors">
                          About imzr
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="hover:text-indigo-600 transition-colors">
                          Contact &amp; Support
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy" className="hover:text-indigo-600 transition-colors">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" className="hover:text-indigo-600 transition-colors">
                          Terms of Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/policy" className="hover:text-indigo-600 transition-colors">
                          Security Architecture
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
                  <p>
                    Developed by{" "}
                    <a
                      href="https://linkedin.com/in/dhrubo-roy-partho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-medium hover:underline"
                    >
                      Dhrubo Roy Partho
                    </a>{" "}
                    · B.Sc. in Information &amp; Communication Engineering, University of Rajshahi
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:dhruboroypartho@gmail.com"
                      className="hover:text-slate-800 underline"
                    >
                      Email
                    </a>
                    <span>·</span>
                    <a
                      href="https://linkedin.com/in/dhrubo-roy-partho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-800 underline"
                    >
                      LinkedIn
                    </a>
                    <span>·</span>
                    <a
                      href="https://github.com/DhruboRoyPartho/imzr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-800 underline"
                    >
                      GitHub
                    </a>
                  </div>
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
