"use client";

import React from "react";
import { SourceImage } from "@/lib/image/types";

interface ImagePreviewProps {
  sourceImage: SourceImage;
}

export default function ImagePreview({ sourceImage }: ImagePreviewProps) {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-4 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
      <div className="relative max-w-full max-h-[70vh] flex items-center justify-center checkerboard-pattern rounded shadow-xs overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sourceImage.sourceUrl}
          alt={sourceImage.fileName}
          className="max-w-full max-h-[70vh] object-contain block select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
