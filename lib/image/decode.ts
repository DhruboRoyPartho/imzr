import { SourceImage } from "./types";
import { validateImageFile, validateImageDimensions } from "./validation";

export async function decodeImageFile(file: File): Promise<SourceImage> {
  const fileValidation = validateImageFile(file);
  if (!fileValidation.valid) {
    throw new Error(fileValidation.error);
  }

  const objectUrl = URL.createObjectURL(file);

  return new Promise<SourceImage>((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      const dimValidation = validateImageDimensions(width, height);
      if (!dimValidation.valid) {
        URL.revokeObjectURL(objectUrl);
        reject(new Error(dimValidation.error));
        return;
      }

      const sourceImage: SourceImage = {
        fileName: file.name,
        mimeType: file.type || "image/jpeg",
        fileSize: file.size,
        width,
        height,
        sourceUrl: objectUrl,
        imageElement: img,
      };

      resolve(sourceImage);
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(
        new Error(
          "This image could not be opened. Try a JPG, PNG, or WebP file."
        )
      );
    };

    img.src = objectUrl;
  });
}
