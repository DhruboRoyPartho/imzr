"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { CropState, EditorState, SourceImage } from "@/lib/image/types";
import { renderToCanvas } from "@/lib/image/render";
import CropOverlay from "./CropOverlay";

interface ImagePreviewProps {
  sourceImage: SourceImage;
  editorState: EditorState;
  isCropActive?: boolean;
  onCropChange?: (newCrop: CropState) => void;
}

export default function ImagePreview({
  sourceImage,
  editorState,
  isCropActive = false,
  onCropChange,
}: ImagePreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [displayBounds, setDisplayBounds] = useState({ width: 0, height: 0 });

  const updateBounds = useCallback(() => {
    if (canvasRef.current) {
      setDisplayBounds({
        width: canvasRef.current.clientWidth,
        height: canvasRef.current.clientHeight,
      });
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !sourceImage.imageElement) return;

    try {
      // While actively cropping, render the full image (without crop applied) so user sees entire frame
      const renderState: EditorState = isCropActive
        ? {
            ...editorState,
            crop: {
              ...editorState.crop,
              enabled: false,
            },
            resize: {
              width: sourceImage.width,
              height: sourceImage.height,
              keepAspectRatio: true,
            },
            rotation: 0,
            flipX: false,
            flipY: false,
          }
        : editorState;

      renderToCanvas(sourceImage, renderState, canvasRef.current);
      updateBounds();
    } catch (err) {
      console.error("Preview render failed:", err);
    }
  }, [sourceImage, editorState, isCropActive, updateBounds]);

  // Update bounds on window resize
  useEffect(() => {
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [updateBounds]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-full min-h-[360px] flex items-center justify-center p-4 bg-slate-100 rounded-lg overflow-hidden border border-slate-200"
    >
      <div className="relative max-w-full max-h-[70vh] flex items-center justify-center checkerboard-pattern rounded shadow-xs overflow-hidden">
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-[70vh] w-auto h-auto object-contain block select-none pointer-events-none"
        />

        {isCropActive && onCropChange && displayBounds.width > 0 && (
          <CropOverlay
            sourceImage={sourceImage}
            cropState={editorState.crop}
            displayBounds={displayBounds}
            onChange={onCropChange}
          />
        )}
      </div>
    </div>
  );
}
