export type SourceImage = {
  fileName: string;
  mimeType: string;
  fileSize: number;
  width: number;
  height: number;
  sourceUrl: string;
  imageElement?: HTMLImageElement;
};

export type CropState = {
  enabled: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  aspectRatio: number | null; // null for Free, or preset ratio: 1 (1:1), 4/3, 3/2, 16/9
};

export type ResizeState = {
  width: number;
  height: number;
  keepAspectRatio: boolean;
};

export type OutputFormat = "image/jpeg" | "image/png" | "image/webp";

export type EditorState = {
  crop: CropState;
  resize: ResizeState;
  rotation: 0 | 90 | 180 | 270;
  flipX: boolean;
  flipY: boolean;
  outputFormat: OutputFormat;
  quality: number; // 10 - 100
  targetSizeBytes?: number | null; // optional target compression size
};

export type ProcessedMetadata = {
  width: number;
  height: number;
  estimatedSize?: number | null;
  outputFormat: OutputFormat;
};
