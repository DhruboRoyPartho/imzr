"use client";

import React, { useState, useEffect } from "react";
import { EditorState, SourceImage } from "@/lib/image/types";
import { createDefaultEditorState } from "@/lib/image/transform";
import ImagePreview from "./ImagePreview";
import ResizeControls from "./ResizeControls";
import TransformControls from "./TransformControls";
import ExportBar from "./ExportBar";

interface ImageEditorProps {
  sourceImage: SourceImage;
  onError: (error: string) => void;
}

export default function ImageEditor({
  sourceImage,
  onError,
}: ImageEditorProps) {
  const [editorState, setEditorState] = useState<EditorState>(() =>
    createDefaultEditorState(sourceImage)
  );

  // When source image changes, reinitialize editor state
  useEffect(() => {
    setEditorState(createDefaultEditorState(sourceImage));
  }, [sourceImage]);

  const handleReset = () => {
    setEditorState(createDefaultEditorState(sourceImage));
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      {/* Editor Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
        {/* Left: Canvas Preview */}
        <div className="w-full flex items-center justify-center min-h-[380px] lg:min-h-[520px]">
          <ImagePreview
            sourceImage={sourceImage}
            editorState={editorState}
          />
        </div>

        {/* Right: Controls Sidebar */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs flex flex-col gap-5">
          <ResizeControls
            sourceImage={sourceImage}
            editorState={editorState}
            onChange={setEditorState}
          />

          <TransformControls
            editorState={editorState}
            onChange={setEditorState}
          />
        </div>
      </div>

      {/* Bottom Export & Status Bar */}
      <ExportBar
        sourceImage={sourceImage}
        editorState={editorState}
        onReset={handleReset}
        onError={onError}
      />
    </div>
  );
}
