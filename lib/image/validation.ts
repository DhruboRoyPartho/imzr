export const MAX_SAFE_PIXELS = 40_000_000; // ~40 Megapixels (e.g. ~7300 x 5400)
export const MAX_SAFE_DIMENSION = 16_384; // Typical maximum canvas edge in modern browsers

export const SUPPORTED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/bmp",
  "image/x-ms-bmp",
]);

export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (!file) {
    return { valid: false, error: "No file was selected." };
  }

  // Check file type
  const isMimeSupported = SUPPORTED_MIME_TYPES.has(file.type.toLowerCase());
  const extension = file.name.split(".").pop()?.toLowerCase();
  const supportedExtensions = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
  const isExtSupported = extension && supportedExtensions.includes(extension);

  if (!isMimeSupported && !isExtSupported) {
    return {
      valid: false,
      error: "This image could not be opened. Try a JPG, PNG, or WebP file.",
    };
  }

  return { valid: true };
}

export function validateImageDimensions(width: number, height: number): { valid: boolean; error?: string } {
  if (width <= 0 || height <= 0) {
    return {
      valid: false,
      error: "This image could not be opened. Invalid image dimensions.",
    };
  }

  if (width > MAX_SAFE_DIMENSION || height > MAX_SAFE_DIMENSION) {
    return {
      valid: false,
      error: "This image is too large for this browser to process safely. Try a smaller copy.",
    };
  }

  const pixelCount = width * height;
  if (pixelCount > MAX_SAFE_PIXELS) {
    return {
      valid: false,
      error: "This image is too large for this browser to process safely. Try a smaller copy.",
    };
  }

  return { valid: true };
}
