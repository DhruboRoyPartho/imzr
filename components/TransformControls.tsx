"use client";

import React from "react";
import { EditorState } from "@/lib/image/types";
import { getNextRotation } from "@/lib/image/transform";

interface TransformControlsProps {
  editorState: EditorState;
  onChange: (updater: (prev: EditorState) => EditorState) => void;
}

export default function TransformControls({
  editorState,
  onChange,
}: TransformControlsProps) {
  const handleRotate = (direction: "cw" | "ccw") => {
    onChange((prev) => {
      const nextRot = getNextRotation(prev.rotation, direction);
      // When rotating by 90 degrees, width and height swap
      const newWidth = prev.resize.height;
      const newHeight = prev.resize.width;

      return {
        ...prev,
        rotation: nextRot,
        resize: {
          ...prev.resize,
          width: newWidth,
          height: newHeight,
        },
      };
    });
  };

  const handleFlipHorizontal = () => {
    onChange((prev) => ({
      ...prev,
      flipX: !prev.flipX,
    }));
  };

  const handleFlipVertical = () => {
    onChange((prev) => ({
      ...prev,
      flipY: !prev.flipY,
    }));
  };

  return (
    <section className="border-b border-slate-200 pb-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Transform
        </h2>
        <span className="text-xs font-mono text-slate-400">
          {editorState.rotation}°
          {editorState.flipX ? " · Flip H" : ""}
          {editorState.flipY ? " · Flip V" : ""}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        <button
          type="button"
          onClick={() => handleRotate("ccw")}
          className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 rounded transition-colors cursor-pointer"
        >
          <span className="text-sm">↺</span>
          <span>Rotate left</span>
        </button>

        <button
          type="button"
          onClick={() => handleRotate("cw")}
          className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 rounded transition-colors cursor-pointer"
        >
          <span className="text-sm">↻</span>
          <span>Rotate right</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleFlipHorizontal}
          className={`flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium rounded transition-colors cursor-pointer border ${
            editorState.flipX
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
          }`}
        >
          <span className="text-sm">⇄</span>
          <span>Flip horizontal</span>
        </button>

        <button
          type="button"
          onClick={handleFlipVertical}
          className={`flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium rounded transition-colors cursor-pointer border ${
            editorState.flipY
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
          }`}
        >
          <span className="text-sm">⇅</span>
          <span>Flip vertical</span>
        </button>
      </div>
    </section>
  );
}
