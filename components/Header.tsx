"use client";

import React, { useRef } from "react";
import { decodeImageFile } from "@/lib/image/decode";
import { SourceImage } from "@/lib/image/types";

interface HeaderProps {
  hasImage: boolean;
  onImageLoaded: (image: SourceImage) => void;
  onError: (error: string) => void;
}

export default function Header({
  hasImage,
  onImageLoaded,
  onError,
}: HeaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const source = await decodeImageFile(file);
        onImageLoaded(source);
      } catch (err: unknown) {
        const message =
          err instanceof Error
            ? err.message
            : "This image could not be opened. Try a JPG, PNG, or WebP file.";
        onError(message);
      }
    }
    e.target.value = "";
  };

  return (
    <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight text-slate-900 select-none">
            imzr
          </span>
          <span className="text-xs text-slate-400 font-normal hidden sm:inline">
            Quick image editor
          </span>
        </div>

        {hasImage && (
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif,image/bmp"
              onChange={handleFileChange}
              className="hidden"
              id="header-file-input"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-xs font-medium text-slate-700 hover:text-slate-900 px-3.5 py-2 border border-slate-300 hover:border-slate-400 rounded bg-white hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
            >
              Open another
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
