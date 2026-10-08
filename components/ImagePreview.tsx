"use client";

import React, { useEffect, useRef } from "react";
import { EditorState, SourceImage } from "@/lib/image/types";
import { renderToCanvas } from "@/lib/image/render";

interface ImagePreviewProps {
  sourceImage: SourceImage;
  editorState: EditorState;
  renderCropOverlay?: React.ReactNode;
}

export default function ImagePreview({
  sourceImage,
  editorState,
  renderCropOverlay,
}: ImagePreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !sourceImage.imageElement) return;

    try {
      renderToCanvas(sourceImage, editorState, canvasRef.current);
    } catch (err) {
      console.error("Preview render failed:", err);
    }
  }, [sourceImage, editorState]);

  return (
    <div className="relative w-full h-full min-h-[360px] flex items-center justify-center p-4 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
      <div className="relative max-w-full max-h-[70vh] flex items-center justify-center checkerboard-pattern rounded shadow-xs overflow-hidden">
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-[70vh] w-auto h-auto object-contain block select-none pointer-events-none"
        />
        {renderCropOverlay}
      </div>
    </div>
  );
}
