"use client";

import React, { useState, useRef } from "react";
import { decodeImageFile } from "@/lib/image/decode";
import { SourceImage } from "@/lib/image/types";

interface ImageDropzoneProps {
  onImageLoaded: (image: SourceImage) => void;
  onError: (errorMessage: string) => void;
}

export default function ImageDropzone({
  onImageLoaded,
  onError,
}: ImageDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = async (file: File) => {
    setIsLoading(true);
    try {
      const sourceImage = await decodeImageFile(file);
      onImageLoaded(sourceImage);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "This image could not be opened. Try a JPG, PNG, or WebP file.";
      onError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
    e.target.value = "";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto py-12 px-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 sm:p-10 text-center transition-colors bg-white ${
          isDragging
            ? "border-slate-800 bg-slate-50"
            : "border-slate-300 hover:border-slate-400"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/bmp"
          onChange={handleFileChange}
          className="hidden"
          id="file-input"
          aria-label="Open image"
        />

        <h1 className="text-xl font-semibold text-slate-900 mb-2">
          Edit an image quickly
        </h1>
        <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto leading-relaxed">
          Resize, crop, rotate, convert, and compress images directly in your
          browser.
        </p>

        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            disabled={isLoading}
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-sm font-medium rounded-md shadow-xs transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
          >
            {isLoading ? "Opening image..." : "Open image"}
          </button>
          <span className="text-xs text-slate-500">
            or drag and drop an image here
          </span>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Your image stays in your browser. It is not uploaded.
          </p>
        </div>
      </div>
    </div>
  );
}
