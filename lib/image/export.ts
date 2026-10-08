import type { EditorState, SourceImage } from "./types";
import { renderToCanvas } from "./render";
import { getOutputFilename } from "@/lib/utils/file";

/**
 * Encodes the transformed source image to a Blob.
 */
export async function exportToBlob(
  source: SourceImage,
  state: EditorState,
  overrideQuality?: number
): Promise<Blob> {
  const canvas = renderToCanvas(source, state, undefined, {
    fillWhiteForJpeg: true,
  });

  const { outputFormat } = state;
  const quality =
    overrideQuality !== undefined ? overrideQuality : state.quality / 100;

  return new Promise<Blob>((resolve, reject) => {
    try {
      if (outputFormat === "image/png") {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else
            reject(
              new Error(
                "We couldn't export this image. Try a smaller image or a different format."
              )
            );
        }, "image/png");
      } else {
        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else
              reject(
                new Error(
                  "We couldn't export this image. Try a smaller image or a different format."
                )
              );
          },
          outputFormat,
          Math.max(0.01, Math.min(1.0, quality))
        );
      }
    } catch {
      reject(
        new Error(
          "We couldn't export this image. Try a smaller image or a different format."
        )
      );
    }
  });
}

/**
 * Initiates the browser download of the exported image and ensures object URL cleanup.
 */
export async function downloadImage(
  source: SourceImage,
  state: EditorState,
  customBaseName?: string
): Promise<{ fileName: string; fileSize: number }> {
  const blob = await exportToBlob(source, state);
  const baseName = customBaseName?.trim()
    ? customBaseName.trim()
    : source.fileName;

  // Suffix '-edited' only if user hasn't explicitly supplied custom name
  const suffix = customBaseName?.trim() ? "" : "-edited";
  const fileName = getOutputFilename(baseName, state.outputFormat, suffix);

  const url = URL.createObjectURL(blob);
  try {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } finally {
    // Revoke object URL safely
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  return { fileName, fileSize: blob.size };
}
