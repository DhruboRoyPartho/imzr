"use client";

import React from "react";
import { EditorState, OutputFormat, SourceImage } from "@/lib/image/types";
import { MIME_TO_EXTENSION } from "@/lib/utils/file";

interface OutputControlsProps {
  sourceImage: SourceImage;
  editorState: EditorState;
  customFilename: string;
  setCustomFilename: (name: string) => void;
  onChange: (updater: (prev: EditorState) => EditorState) => void;
}

const FORMAT_OPTIONS: { label: string; value: OutputFormat }[] = [
  { label: "JPEG", value: "image/jpeg" },
  { label: "PNG", value: "image/png" },
  { label: "WebP", value: "image/webp" },
];

export default function OutputControls({
  editorState,
  customFilename,
  setCustomFilename,
  onChange,
}: OutputControlsProps) {
  const currentFormat = editorState.outputFormat;
  const currentExtension = MIME_TO_EXTENSION[currentFormat] || "jpg";

  const handleFormatChange = (format: OutputFormat) => {
    onChange((prev) => ({
      ...prev,
      outputFormat: format,
    }));
  };

  const handleQualityChange = (val: number) => {
    onChange((prev) => ({
      ...prev,
      quality: val,
    }));
  };

  return (
    <section className="border-b border-slate-200 pb-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Output
        </h2>
        <span className="text-xs font-mono text-slate-400">
          .{currentExtension}
        </span>
      </div>

      {/* Format Selector */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-slate-700 mb-1.5">
          Format
        </label>
        <div className="grid grid-cols-3 gap-1">
          {FORMAT_OPTIONS.map((opt) => {
            const isSelected = currentFormat === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleFormatChange(opt.value)}
                className={`text-xs py-2 rounded text-center font-medium transition-colors cursor-pointer border ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quality Control */}
      {currentFormat === "image/png" ? (
        <div className="mb-4 p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-500">
          PNG is lossless. Quality adjustment is not available.
        </div>
      ) : (
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
            <label htmlFor="quality-slider">Quality</label>
            <span className="font-mono text-slate-500">
              {editorState.quality}%
            </span>
          </div>
          <input
            id="quality-slider"
            type="range"
            min={10}
            max={100}
            step={1}
            value={editorState.quality}
            onChange={(e) => handleQualityChange(parseInt(e.target.value, 10))}
            className="w-full accent-slate-900 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
            <span>Small file (10%)</span>
            <span>Balanced (85%)</span>
            <span>Best (100%)</span>
          </div>
        </div>
      )}

      {/* Filename Input */}
      <div>
        <label
          htmlFor="filename-input"
          className="block text-xs font-medium text-slate-700 mb-1.5"
        >
          Filename
        </label>
        <div className="flex items-center">
          <input
            id="filename-input"
            type="text"
            value={customFilename}
            onChange={(e) => setCustomFilename(e.target.value)}
            placeholder="filename"
            className="flex-1 text-xs px-2.5 py-1.5 border border-r-0 border-slate-300 rounded-l bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-700 font-mono"
          />
          <span className="text-xs font-mono text-slate-500 bg-slate-100 border border-slate-300 px-2.5 py-1.5 rounded-r select-none">
            .{currentExtension}
          </span>
        </div>
      </div>
    </section>
  );
}
