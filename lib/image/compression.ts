import { EditorState, SourceImage } from "./types";
import { renderToCanvas } from "./render";

export type CompressionResult = {
  blob: Blob;
  quality: number; // 10 - 100
  sizeBytes: number;
  success: boolean;
  message?: string;
};

/**
 * Encodes canvas to blob asynchronously with specific quality.
 */
function canvasToBlobAsync(
  canvas: HTMLCanvasElement,
  format: string,
  quality: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Failed to encode canvas to blob"));
      },
      format,
      quality
    );
  });
}

/**
 * Searches for a quality setting that achieves the desired target size in bytes.
 * Never reduces image dimensions.
 */
export async function compressToTargetSize(
  source: SourceImage,
  state: EditorState,
  targetSizeBytes: number
): Promise<CompressionResult> {
  const { outputFormat } = state;

  if (outputFormat === "image/png") {
    // PNG is lossless; cannot compress via quality
    const canvas = renderToCanvas(source, state);
    const blob = await canvasToBlobAsync(canvas, "image/png", 1.0);
    return {
      blob,
      quality: 100,
      sizeBytes: blob.size,
      success: blob.size <= targetSizeBytes,
      message:
        blob.size > targetSizeBytes
          ? "PNG is lossless and cannot be compressed via quality. The smallest practical export is larger than your target."
          : undefined,
    };
  }

  const canvas = renderToCanvas(source, state, undefined, {
    fillWhiteForJpeg: true,
  });

  let low = 0.1;
  let high = 0.95;
  let bestBlob: Blob | null = null;
  let bestQuality = Math.round(low * 100);

  // Check lowest quality first
  const minBlob = await canvasToBlobAsync(canvas, outputFormat, low);
  if (minBlob.size > targetSizeBytes) {
    return {
      blob: minBlob,
      quality: Math.round(low * 100),
      sizeBytes: minBlob.size,
      success: false,
      message:
        "The smallest practical export is larger than your target. Try reducing dimensions.",
    };
  }

  // Check highest quality
  const maxBlob = await canvasToBlobAsync(canvas, outputFormat, high);
  if (maxBlob.size <= targetSizeBytes) {
    return {
      blob: maxBlob,
      quality: Math.round(high * 100),
      sizeBytes: maxBlob.size,
      success: true,
    };
  }

  bestBlob = minBlob;
  bestQuality = Math.round(low * 100);

  // Binary search quality (6 iterations is accurate to ~1.3% quality)
  for (let i = 0; i < 6; i++) {
    const mid = (low + high) / 2;
    const testBlob = await canvasToBlobAsync(canvas, outputFormat, mid);

    if (testBlob.size <= targetSizeBytes) {
      bestBlob = testBlob;
      bestQuality = Math.round(mid * 100);
      low = mid; // Try for higher quality while staying under target
    } else {
      high = mid; // Too large, lower quality
    }
  }

  return {
    blob: bestBlob,
    quality: bestQuality,
    sizeBytes: bestBlob.size,
    success: true,
  };
}
