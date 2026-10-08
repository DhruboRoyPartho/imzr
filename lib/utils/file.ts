/**
 * Format bytes into human-readable strings (e.g., "1.2 MB", "450 KB").
 */
export function formatBytes(bytes: number, decimals: number = 1): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const safeI = Math.min(i, sizes.length - 1);
  return `${parseFloat((bytes / Math.pow(k, safeI)).toFixed(dm))} ${sizes[safeI]}`;
}

/**
 * MIME type to standard file extension mapping.
 */
export const MIME_TO_EXTENSION: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

/**
 * Given a filename like "photo.png" or "my.vacation.pic.jpeg" and a target mime type,
 * returns "photo.jpg" or "photo-edited.jpg" without double extensions.
 */
export function getOutputFilename(
  originalName: string,
  targetMimeType: string,
  suffix: string = ""
): string {
  const extension = MIME_TO_EXTENSION[targetMimeType] || "jpg";
  const lastDotIndex = originalName.lastIndexOf(".");
  const baseName = lastDotIndex > 0 ? originalName.substring(0, lastDotIndex) : originalName;
  const cleanBase = baseName.trim() || "image";

  return `${cleanBase}${suffix}.${extension}`;
}
