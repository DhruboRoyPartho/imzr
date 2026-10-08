import { CropState } from "./types";
import { clamp } from "@/lib/utils/math";

export const MIN_CROP_SIZE = 20;

export const ASPECT_RATIO_PRESETS = [
  { label: "Free", value: null },
  { label: "1:1", value: 1 },
  { label: "4:3", value: 4 / 3 },
  { label: "3:2", value: 3 / 2 },
  { label: "16:9", value: 16 / 9 },
] as const;

/**
 * Creates a centered default crop rectangle for the given source image dimensions and ratio.
 */
export function createDefaultCrop(
  sourceWidth: number,
  sourceHeight: number,
  aspectRatio: number | null = null
): CropState {
  if (aspectRatio === null) {
    // Free: 90% of image centered
    const width = Math.max(MIN_CROP_SIZE, Math.round(sourceWidth * 0.9));
    const height = Math.max(MIN_CROP_SIZE, Math.round(sourceHeight * 0.9));
    const x = Math.round((sourceWidth - width) / 2);
    const y = Math.round((sourceHeight - height) / 2);

    return {
      enabled: true,
      x,
      y,
      width,
      height,
      aspectRatio: null,
    };
  }

  // Preset ratio: find maximum rectangle with ratio that fits in sourceWidth x sourceHeight
  let width = sourceWidth;
  let height = Math.round(width / aspectRatio);

  if (height > sourceHeight) {
    height = sourceHeight;
    width = Math.round(height * aspectRatio);
  }

  // Apply a 90% factor so it doesn't touch the very edges initially
  width = Math.max(MIN_CROP_SIZE, Math.round(width * 0.9));
  height = Math.max(MIN_CROP_SIZE, Math.round(height * 0.9));

  const x = Math.round((sourceWidth - width) / 2);
  const y = Math.round((sourceHeight - height) / 2);

  return {
    enabled: true,
    x,
    y,
    width,
    height,
    aspectRatio,
  };
}

/**
 * Clamps crop rectangle inside source boundaries and maintains aspect ratio if specified.
 */
export function clampCropRect(
  rect: { x: number; y: number; width: number; height: number },
  sourceWidth: number,
  sourceHeight: number,
  aspectRatio: number | null
): { x: number; y: number; width: number; height: number } {
  let width = Math.max(MIN_CROP_SIZE, Math.min(rect.width, sourceWidth));
  let height = Math.max(MIN_CROP_SIZE, Math.min(rect.height, sourceHeight));

  if (aspectRatio !== null && aspectRatio > 0) {
    // Keep width and height conforming to aspectRatio
    if (width / height > aspectRatio) {
      width = Math.round(height * aspectRatio);
    } else {
      height = Math.round(width / aspectRatio);
    }
  }

  width = clamp(width, MIN_CROP_SIZE, sourceWidth);
  height = clamp(height, MIN_CROP_SIZE, sourceHeight);

  const x = clamp(rect.x, 0, sourceWidth - width);
  const y = clamp(rect.y, 0, sourceHeight - height);

  return { x, y, width, height };
}
