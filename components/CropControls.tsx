"use client";

import React from "react";
import { EditorState, SourceImage } from "@/lib/image/types";
import {
  ASPECT_RATIO_PRESETS,
  createDefaultCrop,
} from "@/lib/image/crop";
import { getTransformedNaturalDimensions } from "@/lib/image/transform";

interface CropControlsProps {
  sourceImage: SourceImage;
  editorState: EditorState;
  isCropActive: boolean;
  setIsCropActive: (active: boolean) => void;
  onChange: (updater: (prev: EditorState) => EditorState) => void;
}

export default function CropControls({
  sourceImage,
  editorState,
  isCropActive,
  setIsCropActive,
  onChange,
}: CropControlsProps) {
  const isCropped = editorState.crop.enabled;

  const handleStartCrop = () => {
    setIsCropActive(true);
    if (!editorState.crop.enabled) {
      const defaultCrop = createDefaultCrop(
        sourceImage.width,
        sourceImage.height,
        null
      );
      onChange((prev) => ({
        ...prev,
        crop: defaultCrop,
      }));
    }
  };

  const handleSelectPreset = (aspectRatio: number | null) => {
    const newCrop = createDefaultCrop(
      sourceImage.width,
      sourceImage.height,
      aspectRatio
    );
    onChange((prev) => ({
      ...prev,
      crop: newCrop,
    }));
  };

  const handleApplyCrop = () => {
    setIsCropActive(false);
    onChange((prev) => {
      const natural = getTransformedNaturalDimensions(sourceImage, prev);
      return {
        ...prev,
        resize: {
          ...prev.resize,
          width: natural.width,
          height: natural.height,
        },
      };
    });
  };

  const handleResetCrop = () => {
    setIsCropActive(false);
    onChange((prev) => {
      const resetCrop = {
        enabled: false,
        x: 0,
        y: 0,
        width: sourceImage.width,
        height: sourceImage.height,
        aspectRatio: null,
      };
      const tempState = { ...prev, crop: resetCrop };
      const natural = getTransformedNaturalDimensions(sourceImage, tempState);

      return {
        ...prev,
        crop: resetCrop,
        resize: {
          ...prev.resize,
          width: natural.width,
          height: natural.height,
        },
      };
    });
  };

  return (
    <section className="border-b border-slate-200 pb-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Crop
        </h2>
        {isCropped && (
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            {editorState.crop.width} × {editorState.crop.height}
          </span>
        )}
      </div>

      {!isCropActive ? (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleStartCrop}
            className="flex-1 px-3.5 py-2.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 rounded transition-colors cursor-pointer"
          >
            {isCropped ? "Adjust crop" : "Crop image"}
          </button>
          {isCropped && (
            <button
              type="button"
              onClick={handleResetCrop}
              className="px-3.5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {/* Aspect ratio presets */}
          <div>
            <span className="block text-xs font-medium text-slate-600 mb-1.5">
              Aspect ratio
            </span>
            <div className="grid grid-cols-5 gap-1.5">
              {ASPECT_RATIO_PRESETS.map((preset) => {
                const isSelected =
                  editorState.crop.aspectRatio === preset.value;
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => handleSelectPreset(preset.value)}
                    className={`text-xs py-2 rounded text-center font-medium transition-colors cursor-pointer border ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleApplyCrop}
              className="flex-1 px-4 py-2.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded shadow-xs transition-colors cursor-pointer"
            >
              Apply crop
            </button>
            <button
              type="button"
              onClick={handleResetCrop}
              className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
