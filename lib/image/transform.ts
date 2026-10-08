import type { EditorState, OutputFormat, SourceImage } from "./types";

/**
 * Returns the default editor state for a new source image.
 */
export function createDefaultEditorState(source: SourceImage): EditorState {
  // Infer output format from source mime type if supported, default to jpeg
  let initialFormat: OutputFormat = "image/jpeg";
  if (source.mimeType === "image/png") {
    initialFormat = "image/png";
  } else if (source.mimeType === "image/webp") {
    initialFormat = "image/webp";
  }

  return {
    crop: {
      enabled: false,
      x: 0,
      y: 0,
      width: source.width,
      height: source.height,
      aspectRatio: null,
    },
    resize: {
      width: source.width,
      height: source.height,
      keepAspectRatio: true,
    },
    rotation: 0,
    flipX: false,
    flipY: false,
    outputFormat: initialFormat,
    quality: 85,
    targetSizeBytes: null,
  };
}

/**
 * Calculates natural dimensions after crop and rotation (before any custom resize).
 */
export function getTransformedNaturalDimensions(
  source: SourceImage,
  state: EditorState
): { width: number; height: number } {
  const cropW = state.crop.enabled ? state.crop.width : source.width;
  const cropH = state.crop.enabled ? state.crop.height : source.height;

  const isSwapped = state.rotation === 90 || state.rotation === 270;
  return {
    width: isSwapped ? cropH : cropW,
    height: isSwapped ? cropW : cropH,
  };
}

/**
 * Computes next rotation (0, 90, 180, 270) given clockwise or counter-clockwise step.
 */
export function getNextRotation(
  current: 0 | 90 | 180 | 270,
  direction: "cw" | "ccw"
): 0 | 90 | 180 | 270 {
  const step = direction === "cw" ? 90 : -90;
  const next = (current + step + 360) % 360;
  return next as 0 | 90 | 180 | 270;
}
