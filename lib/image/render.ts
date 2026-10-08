import type { EditorState, SourceImage } from "./types";
import { validateImageDimensions } from "./validation";

/**
 * Renders the transformation pipeline onto a canvas element.
 * Original Source -> Crop -> Rotate -> Flip -> Resize
 */
export function renderToCanvas(
  source: SourceImage,
  state: EditorState,
  targetCanvas?: HTMLCanvasElement,
  options?: { fillWhiteForJpeg?: boolean }
): HTMLCanvasElement {
  if (!source.imageElement) {
    throw new Error("Source image element is not loaded.");
  }

  const { rotation, flipX, flipY } = state;
  const crop = state.crop.enabled
    ? state.crop
    : { x: 0, y: 0, width: source.width, height: source.height };

  const cropW = Math.max(1, Math.round(crop.width));
  const cropH = Math.max(1, Math.round(crop.height));

  const isSwapped = rotation === 90 || rotation === 270;
  const rotatedW = isSwapped ? cropH : cropW;
  const rotatedH = isSwapped ? cropW : cropH;

  const outW = Math.max(1, Math.round(state.resize.width || rotatedW));
  const outH = Math.max(1, Math.round(state.resize.height || rotatedH));

  const dimCheck = validateImageDimensions(outW, outH);
  if (!dimCheck.valid) {
    throw new Error(dimCheck.error);
  }

  const canvas = targetCanvas || document.createElement("canvas");
  canvas.width = outW;
  canvas.height = outH;

  const ctx = canvas.getContext("2d", { willReadFrequently: false });
  if (!ctx) {
    throw new Error(
      "This image could not be processed. Browser canvas context unavailable."
    );
  }

  ctx.save();
  ctx.clearRect(0, 0, outW, outH);

  // If format is JPEG and fillWhiteForJpeg is requested, fill with white to avoid black background on transparent areas
  if (options?.fillWhiteForJpeg && state.outputFormat === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, outW, outH);
  }

  // Smooth scaling
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  // Scale to destination dimensions
  ctx.scale(outW / rotatedW, outH / rotatedH);

  // Position at canvas center in rotated coordinate space
  ctx.translate(rotatedW / 2, rotatedH / 2);

  // Rotate
  if (rotation !== 0) {
    ctx.rotate((rotation * Math.PI) / 180);
  }

  // Flip
  if (flipX || flipY) {
    ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
  }

  // Translate back by unrotated crop center
  ctx.translate(-cropW / 2, -cropH / 2);

  // Draw crop region from original source image
  ctx.drawImage(
    source.imageElement,
    crop.x,
    crop.y,
    cropW,
    cropH,
    0,
    0,
    cropW,
    cropH
  );

  ctx.restore();

  return canvas;
}
