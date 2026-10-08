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
          <div className="flex-1 flex flex-col items-center justify-center">
            <ImageDropzone
              onImageLoaded={handleImageLoaded}
              onError={handleError}
            />

            {/* Minimalistic Credit Status Footer */}
            <footer className="w-full py-8 text-center text-xs text-slate-500 border-t border-slate-200 mt-auto bg-white/60">
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
