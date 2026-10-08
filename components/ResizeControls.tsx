"use client";

import React from "react";
import { EditorState, SourceImage } from "@/lib/image/types";
import { getTransformedNaturalDimensions } from "@/lib/image/transform";
import { calculateAspectRatioDimensions } from "@/lib/utils/math";

interface ResizeControlsProps {
  sourceImage: SourceImage;
  editorState: EditorState;
  onChange: (updater: (prev: EditorState) => EditorState) => void;
}

export default function ResizeControls({
  sourceImage,
  editorState,
  onChange,
}: ResizeControlsProps) {
  const natural = getTransformedNaturalDimensions(sourceImage, editorState);
  const naturalRatio = natural.width / natural.height;

  const currentWidth = editorState.resize.width;
  const currentHeight = editorState.resize.height;
  const keepRatio = editorState.resize.keepAspectRatio;

  const handleWidthChange = (val: number) => {
    if (val <= 0 || isNaN(val)) return;
    onChange((prev) => {
      let newHeight = prev.resize.height;
      if (prev.resize.keepAspectRatio) {
        const calculated = calculateAspectRatioDimensions(
          "width",
          val,
          naturalRatio
        );
        newHeight = calculated.height;
      }
      return {
        ...prev,
        resize: {
          ...prev.resize,
          width: val,
          height: newHeight,
        },
      };
    });
  };

  const handleHeightChange = (val: number) => {
    if (val <= 0 || isNaN(val)) return;
    onChange((prev) => {
      let newWidth = prev.resize.width;
      if (prev.resize.keepAspectRatio) {
        const calculated = calculateAspectRatioDimensions(
          "height",
          val,
          naturalRatio
        );
        newWidth = calculated.width;
      }
      return {
        ...prev,
        resize: {
          ...prev.resize,
          width: newWidth,
          height: val,
        },
      };
    });
  };

  const toggleKeepRatio = () => {
    onChange((prev) => {
      const willKeep = !prev.resize.keepAspectRatio;
      let newHeight = prev.resize.height;
      if (willKeep) {
        // snap height to preserve ratio based on current width
        newHeight = Math.max(1, Math.round(prev.resize.width / naturalRatio));
      }
      return {
        ...prev,
        resize: {
          ...prev.resize,
          keepAspectRatio: willKeep,
          height: newHeight,
        },
      };
    });
  };

  const applyPercentage = (pct: number) => {
    const factor = pct / 100;
    const newWidth = Math.max(1, Math.round(natural.width * factor));
    const newHeight = Math.max(1, Math.round(natural.height * factor));
    onChange((prev) => ({
      ...prev,
      resize: {
        ...prev.resize,
        width: newWidth,
        height: newHeight,
      },
    }));
  };

  return (
    <section className="border-b border-slate-200 pb-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Resize
        </h2>
        <span className="text-xs font-mono text-slate-400">
          Original: {natural.width} × {natural.height}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 items-end mb-3">
        <div>
          <label
            htmlFor="resize-width"
            className="block text-xs font-medium text-slate-700 mb-1"
          >
            Width (px)
          </label>
          <input
            id="resize-width"
            type="number"
            min={1}
            max={16384}
            value={currentWidth}
            onChange={(e) => handleWidthChange(parseInt(e.target.value, 10))}
            className="w-full text-sm font-mono px-2.5 py-1.5 border border-slate-300 rounded bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-700"
          />
        </div>

        <div>
          <label
            htmlFor="resize-height"
            className="block text-xs font-medium text-slate-700 mb-1"
          >
            Height (px)
          </label>
          <input
            id="resize-height"
            type="number"
            min={1}
            max={16384}
            value={currentHeight}
            onChange={(e) => handleHeightChange(parseInt(e.target.value, 10))}
            className="w-full text-sm font-mono px-2.5 py-1.5 border border-slate-300 rounded bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-700"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 mb-3">
        <button
          type="button"
          onClick={toggleKeepRatio}
          className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded border transition-colors cursor-pointer ${
            keepRatio
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
          }`}
        >
          <span>{keepRatio ? "✓ Ratio locked" : "Ratio unlocked"}</span>
        </button>

        <div className="flex items-center gap-1">
          {[25, 50, 75, 100].map((pct) => (
            <button
              key={pct}
              type="button"
              onClick={() => applyPercentage(pct)}
              className="text-xs px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors font-mono cursor-pointer"
            >
              {pct}%
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
