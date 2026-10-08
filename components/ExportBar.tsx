"use client";

import React, { useState } from "react";
import { EditorState, SourceImage } from "@/lib/image/types";
import { formatBytes } from "@/lib/utils/file";
import { downloadImage } from "@/lib/image/export";

interface ExportBarProps {
  sourceImage: SourceImage;
  editorState: EditorState;
  onReset: () => void;
  onError: (msg: string) => void;
}

export default function ExportBar({
  sourceImage,
  editorState,
  onReset,
  onError,
}: ExportBarProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [lastExportSize, setLastExportSize] = useState<number | null>(null);

  const outW = editorState.resize.width;
  const outH = editorState.resize.height;

  const handleDownload = async () => {
    setIsExporting(true);
    try {
      const result = await downloadImage(sourceImage, editorState);
      setLastExportSize(result.fileSize);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "We couldn't export this image. Try a smaller image or a different format.";
      onError(message);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200 py-3 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Metadata info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
          <div>
            <span className="text-slate-400">Original: </span>
            <span className="font-mono font-medium text-slate-800">
              {sourceImage.width} × {sourceImage.height}
            </span>
            <span className="text-slate-400"> · </span>
            <span>{formatBytes(sourceImage.fileSize)}</span>
          </div>

          <div className="hidden sm:inline text-slate-300">|</div>

          <div>
            <span className="text-slate-400">Output: </span>
            <span className="font-mono font-medium text-slate-800">
              {outW} × {outH}
            </span>
            {lastExportSize ? (
              <>
                <span className="text-slate-400"> · </span>
                <span className="font-medium text-emerald-700">
                  {formatBytes(lastExportSize)}
                </span>
              </>
            ) : null}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={onReset}
            className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
          >
            Reset
          </button>

          <button
            type="button"
            disabled={isExporting}
            onClick={handleDownload}
            className="flex-1 sm:flex-initial px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded shadow-xs transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isExporting ? "Exporting..." : "Download image"}
          </button>
        </div>
      </div>
    </footer>
  );
}
