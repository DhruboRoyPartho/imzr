"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import ImageDropzone from "@/components/ImageDropzone";
import ImagePreview from "@/components/ImagePreview";
import { SourceImage } from "@/lib/image/types";
import { formatBytes } from "@/lib/utils/file";

export default function Home() {
  const [sourceImage, setSourceImage] = useState<SourceImage | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
          <div className="flex-1 flex items-center justify-center">
            <ImageDropzone
              onImageLoaded={handleImageLoaded}
              onError={handleError}
            />
          </div>
        ) : (
          <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto p-4 md:p-6 gap-6">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
              <span className="truncate max-w-xs md:max-w-md font-medium text-slate-700">
                {sourceImage.fileName}
              </span>
              <span className="font-mono">
                Original: {sourceImage.width} × {sourceImage.height} ·{" "}
                {formatBytes(sourceImage.fileSize)}
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <ImagePreview sourceImage={sourceImage} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
