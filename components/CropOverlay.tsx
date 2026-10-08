"use client";

import React, { useRef } from "react";
import { CropState, SourceImage } from "@/lib/image/types";
import { clampCropRect, MIN_CROP_SIZE } from "@/lib/image/crop";

interface CropOverlayProps {
  sourceImage: SourceImage;
  cropState: CropState;
  displayBounds: { width: number; height: number };
  onChange: (newCrop: CropState) => void;
}

type HandleType =
  | "move"
  | "nw"
  | "ne"
  | "se"
  | "sw"
  | "n"
  | "s"
  | "e"
  | "w";

export default function CropOverlay({
  sourceImage,
  cropState,
  displayBounds,
  onChange,
}: CropOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{
    pointerId: number;
    handle: HandleType;
    startX: number;
    startY: number;
    initialCrop: CropState;
  } | null>(null);

  const { width: dispW, height: dispH } = displayBounds;
  if (dispW <= 0 || dispH <= 0) return null;

  const scaleX = dispW / sourceImage.width;
  const scaleY = dispH / sourceImage.height;

  // Convert source crop coordinates to screen coordinates
  const screenX = cropState.x * scaleX;
  const screenY = cropState.y * scaleY;
  const screenW = cropState.width * scaleX;
  const screenH = cropState.height * scaleY;

  const handlePointerDown = (
    e: React.PointerEvent<HTMLDivElement>,
    handle: HandleType
  ) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    const target = e.currentTarget;
    target.setPointerCapture(e.pointerId);

    dragStartRef.current = {
      pointerId: e.pointerId,
      handle,
      startX: e.clientX,
      startY: e.clientY,
      initialCrop: { ...cropState },
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current || dragStartRef.current.pointerId !== e.pointerId) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();

    const { handle, startX, startY, initialCrop } = dragStartRef.current;
    const deltaDispX = e.clientX - startX;
    const deltaDispY = e.clientY - startY;

    // Convert screen deltas to source coordinates
    const deltaSrcX = deltaDispX / scaleX;
    const deltaSrcY = deltaDispY / scaleY;

    const { aspectRatio } = initialCrop;
    let nextX = initialCrop.x;
    let nextY = initialCrop.y;
    let nextW = initialCrop.width;
    let nextH = initialCrop.height;

    if (handle === "move") {
      nextX = initialCrop.x + deltaSrcX;
      nextY = initialCrop.y + deltaSrcY;
      const clamped = clampCropRect(
        { x: nextX, y: nextY, width: nextW, height: nextH },
        sourceImage.width,
        sourceImage.height,
        null
      );
      onChange({ ...initialCrop, x: clamped.x, y: clamped.y });
      return;
    }

    // Resizing handles
    switch (handle) {
      case "se":
        nextW = initialCrop.width + deltaSrcX;
        nextH = aspectRatio ? nextW / aspectRatio : initialCrop.height + deltaSrcY;
        break;
      case "sw":
        nextW = initialCrop.width - deltaSrcX;
        nextH = aspectRatio ? nextW / aspectRatio : initialCrop.height + deltaSrcY;
        nextX = initialCrop.x + (initialCrop.width - nextW);
        break;
      case "ne":
        nextW = initialCrop.width + deltaSrcX;
        nextH = aspectRatio ? nextW / aspectRatio : initialCrop.height - deltaSrcY;
        nextY = initialCrop.y + (initialCrop.height - nextH);
        break;
      case "nw":
        nextW = initialCrop.width - deltaSrcX;
        nextH = aspectRatio ? nextW / aspectRatio : initialCrop.height - deltaSrcY;
        nextX = initialCrop.x + (initialCrop.width - nextW);
        nextY = initialCrop.y + (initialCrop.height - nextH);
        break;
      case "e":
        nextW = initialCrop.width + deltaSrcX;
        if (aspectRatio) nextH = nextW / aspectRatio;
        break;
      case "w":
        nextW = initialCrop.width - deltaSrcX;
        nextX = initialCrop.x + (initialCrop.width - nextW);
        if (aspectRatio) nextH = nextW / aspectRatio;
        break;
      case "s":
        nextH = initialCrop.height + deltaSrcY;
        if (aspectRatio) nextW = nextH * aspectRatio;
        break;
      case "n":
        nextH = initialCrop.height - deltaSrcY;
        nextY = initialCrop.y + (initialCrop.height - nextH);
        if (aspectRatio) nextW = nextH * aspectRatio;
        break;
    }

    if (nextW < MIN_CROP_SIZE) nextW = MIN_CROP_SIZE;
    if (nextH < MIN_CROP_SIZE) nextH = MIN_CROP_SIZE;

    const clamped = clampCropRect(
      { x: nextX, y: nextY, width: nextW, height: nextH },
      sourceImage.width,
      sourceImage.height,
      aspectRatio
    );

    onChange({
      ...initialCrop,
      x: clamped.x,
      y: clamped.y,
      width: clamped.width,
      height: clamped.height,
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartRef.current && dragStartRef.current.pointerId === e.pointerId) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // pointer capture already lost
      }
      dragStartRef.current = null;
    }
  };

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 pointer-events-auto select-none"
      style={{ touchAction: "none" }}
    >
      {/* Dimmed backdrop outside crop area */}
      {/* Top */}
      <div
        className="absolute left-0 top-0 w-full bg-slate-950/50 backdrop-blur-[0.5px]"
        style={{ height: `${screenY}px` }}
      />
      {/* Bottom */}
      <div
        className="absolute left-0 w-full bg-slate-950/50 backdrop-blur-[0.5px]"
        style={{
          top: `${screenY + screenH}px`,
          bottom: 0,
        }}
      />
      {/* Left */}
      <div
        className="absolute left-0 bg-slate-950/50 backdrop-blur-[0.5px]"
        style={{
          top: `${screenY}px`,
          height: `${screenH}px`,
          width: `${screenX}px`,
        }}
      />
      {/* Right */}
      <div
        className="absolute right-0 bg-slate-950/50 backdrop-blur-[0.5px]"
        style={{
          top: `${screenY}px`,
          height: `${screenH}px`,
          left: `${screenX + screenW}px`,
        }}
      />

      {/* Interactive Crop Box */}
      <div
        onPointerDown={(e) => handlePointerDown(e, "move")}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="absolute border-2 border-white shadow-md cursor-move touch-none"
        style={{
          left: `${screenX}px`,
          top: `${screenY}px`,
          width: `${screenW}px`,
          height: `${screenH}px`,
        }}
      >
        {/* Rule of thirds grid lines */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 opacity-40">
          <div className="border-r border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-b border-white" />
          <div className="border-r border-white" />
          <div className="border-r border-white" />
          <div />
        </div>

        {/* Corner Handles */}
        <div
          onPointerDown={(e) => handlePointerDown(e, "nw")}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute -top-2 -left-2 w-4 h-4 bg-white border border-slate-700 shadow-sm rounded-xs cursor-nwse-resize touch-none"
        />
        <div
          onPointerDown={(e) => handlePointerDown(e, "ne")}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute -top-2 -right-2 w-4 h-4 bg-white border border-slate-700 shadow-sm rounded-xs cursor-nesw-resize touch-none"
        />
        <div
          onPointerDown={(e) => handlePointerDown(e, "sw")}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border border-slate-700 shadow-sm rounded-xs cursor-nesw-resize touch-none"
        />
        <div
          onPointerDown={(e) => handlePointerDown(e, "se")}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border border-slate-700 shadow-sm rounded-xs cursor-nwse-resize touch-none"
        />

        {/* Edge Handles */}
        <div
          onPointerDown={(e) => handlePointerDown(e, "n")}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-3 bg-white border border-slate-700 shadow-sm rounded-xs cursor-ns-resize touch-none"
        />
        <div
          onPointerDown={(e) => handlePointerDown(e, "s")}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-3 bg-white border border-slate-700 shadow-sm rounded-xs cursor-ns-resize touch-none"
        />
        <div
          onPointerDown={(e) => handlePointerDown(e, "w")}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-6 bg-white border border-slate-700 shadow-sm rounded-xs cursor-ew-resize touch-none"
        />
        <div
          onPointerDown={(e) => handlePointerDown(e, "e")}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-6 bg-white border border-slate-700 shadow-sm rounded-xs cursor-ew-resize touch-none"
        />
      </div>
    </div>
  );
}
