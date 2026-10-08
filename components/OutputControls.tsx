"use client";

import React, { useState } from "react";
import { EditorState, OutputFormat, SourceImage } from "@/lib/image/types";
import { formatBytes, MIME_TO_EXTENSION } from "@/lib/utils/file";
import { compressToTargetSize } from "@/lib/image/compression";

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
  sourceImage,
  editorState,
  customFilename,
  setCustomFilename,
  onChange,
}: OutputControlsProps) {
  const currentFormat = editorState.outputFormat;
  const currentExtension = MIME_TO_EXTENSION[currentFormat] || "jpg";

  const [compressionMode, setCompressionMode] = useState<"quality" | "target">(
    "quality"
  );
  const [targetValue, setTargetValue] = useState<string>("500");
  const [targetUnit, setTargetUnit] = useState<"KB" | "MB">("KB");
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressionFeedback, setCompressionFeedback] = useState<string | null>(
    null
  );

  const handleFormatChange = (format: OutputFormat) => {
    onChange((prev) => ({
      ...prev,
      outputFormat: format,
    }));
    setCompressionFeedback(null);
  };

  const handleQualityChange = (val: number) => {
    onChange((prev) => ({
      ...prev,
      quality: val,
    }));
    setCompressionFeedback(null);
  };

  const handleApplyTargetCompression = async () => {
    const num = parseFloat(targetValue);
    if (isNaN(num) || num <= 0) {
      setCompressionFeedback("Please enter a valid target size.");
      return;
    }

    const targetBytes =
      targetUnit === "MB" ? num * 1024 * 1024 : num * 1024;

    setIsCompressing(true);
    setCompressionFeedback(null);
    try {
      const result = await compressToTargetSize(
        sourceImage,
        editorState,
        targetBytes
      );
      if (result.success) {
        onChange((prev) => ({
          ...prev,
          quality: result.quality,
          targetSizeBytes: targetBytes,
        }));
        setCompressionFeedback(
          `Target reached! Set quality to ${result.quality}% (${formatBytes(
            result.sizeBytes
          )}).`
        );
      } else {
        onChange((prev) => ({
          ...prev,
          quality: result.quality,
          targetSizeBytes: targetBytes,
        }));
        setCompressionFeedback(
          result.message ||
            "The smallest practical export is larger than your target."
        );
      }
    } catch {
      setCompressionFeedback(
        "Could not calculate target compression. Try a different format."
      );
    } finally {
      setIsCompressing(false);
    }
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

      {/* Compression Controls */}
      {currentFormat === "image/png" ? (
        <div className="mb-4 p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-500">
          PNG is lossless. Quality adjustment is not available.
        </div>
      ) : (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-700">
              Compression mode
            </span>
            <div className="flex rounded border border-slate-200 overflow-hidden text-xs">
              <button
                type="button"
                onClick={() => {
                  setCompressionMode("quality");
                  setCompressionFeedback(null);
                }}
                className={`px-2 py-1 transition-colors cursor-pointer ${
                  compressionMode === "quality"
                    ? "bg-slate-900 text-white font-medium"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                Quality
              </button>
              <button
                type="button"
                onClick={() => {
                  setCompressionMode("target");
                  setCompressionFeedback(null);
                }}
                className={`px-2 py-1 transition-colors cursor-pointer ${
                  compressionMode === "target"
                    ? "bg-slate-900 text-white font-medium"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                Target size
              </button>
            </div>
          </div>

          {compressionMode === "quality" ? (
            <div>
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
                onChange={(e) =>
                  handleQualityChange(parseInt(e.target.value, 10))
                }
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>Small file (10%)</span>
                <span>Balanced (85%)</span>
                <span>Best (100%)</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <label
                htmlFor="target-size-input"
                className="block text-xs font-medium text-slate-600"
              >
                Desired target file size
              </label>
              <div className="flex gap-2">
                <input
                  id="target-size-input"
                  type="number"
                  min={1}
                  max={50000}
                  value={targetValue}
                  onChange={(e) => setTargetValue(e.target.value)}
                  placeholder="e.g. 500"
                  className="flex-1 text-xs px-2.5 py-1.5 border border-slate-300 rounded bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-700 font-mono"
                />
                <select
                  value={targetUnit}
                  onChange={(e) =>
                    setTargetUnit(e.target.value as "KB" | "MB")
                  }
                  className="text-xs px-2 py-1.5 border border-slate-300 rounded bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700 cursor-pointer font-medium"
                  aria-label="Target size unit"
                >
                  <option value="KB">KB</option>
                  <option value="MB">MB</option>
                </select>
                <button
                  type="button"
                  disabled={isCompressing}
                  onClick={handleApplyTargetCompression}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isCompressing ? "Calculating..." : "Apply"}
                </button>
              </div>

              {compressionFeedback && (
                <p
                  className={`text-xs p-2 rounded border leading-tight ${
                    compressionFeedback.includes("Target reached")
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-amber-50 text-amber-900 border-amber-200"
                  }`}
                >
                  {compressionFeedback}
                </p>
              )}
            </div>
          )}
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
