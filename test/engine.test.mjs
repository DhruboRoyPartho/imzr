import test from "node:test";
import assert from "node:assert/strict";

// Math utilities
import {
  clamp,
  roundToInt,
  calculateAspectRatioDimensions,
} from "../lib/utils/math.ts";

// File utilities
import { formatBytes, getOutputFilename } from "../lib/utils/file.ts";

// Image validation
import {
  validateImageDimensions,
  MAX_SAFE_PIXELS,
  MAX_SAFE_DIMENSION,
} from "../lib/image/validation.ts";

// Image transform
import {
  getNextRotation,
  getTransformedNaturalDimensions,
} from "../lib/image/transform.ts";

const MIN_CROP_SIZE = 20;

function createDefaultCropTest(sourceWidth, sourceHeight, aspectRatio = null) {
  if (aspectRatio === null) {
    const width = Math.max(MIN_CROP_SIZE, Math.round(sourceWidth * 0.9));
    const height = Math.max(MIN_CROP_SIZE, Math.round(sourceHeight * 0.9));
    const x = Math.round((sourceWidth - width) / 2);
    const y = Math.round((sourceHeight - height) / 2);
    return { enabled: true, x, y, width, height, aspectRatio: null };
  }
  let width = sourceWidth;
  let height = Math.round(width / aspectRatio);
  if (height > sourceHeight) {
    height = sourceHeight;
    width = Math.round(height * aspectRatio);
  }
  width = Math.max(MIN_CROP_SIZE, Math.round(width * 0.9));
  height = Math.max(MIN_CROP_SIZE, Math.round(height * 0.9));
  const x = Math.round((sourceWidth - width) / 2);
  const y = Math.round((sourceHeight - height) / 2);
  return { enabled: true, x, y, width, height, aspectRatio };
}

function clampCropRectTest(rect, sourceWidth, sourceHeight, aspectRatio) {
  let width = Math.max(MIN_CROP_SIZE, Math.min(rect.width, sourceWidth));
  let height = Math.max(MIN_CROP_SIZE, Math.min(rect.height, sourceHeight));
  if (aspectRatio !== null && aspectRatio > 0) {
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

test("File utilities: formatBytes", () => {
  assert.equal(formatBytes(0), "0 B");
  assert.equal(formatBytes(1024), "1 KB");
  assert.equal(formatBytes(1536), "1.5 KB");
  assert.equal(formatBytes(1024 * 1024 * 2.5), "2.5 MB");
});

test("File utilities: getOutputFilename extension replacement", () => {
  // photo.png -> JPEG -> photo-edited.jpg (no photo.png.jpg)
  const jpegOut = getOutputFilename("photo.png", "image/jpeg", "-edited");
  assert.equal(jpegOut, "photo-edited.jpg");

  // photo.jpg -> WebP -> photo.webp
  const webpOut = getOutputFilename("photo.jpg", "image/webp", "");
  assert.equal(webpOut, "photo.webp");

  // Nested dots: my.sample.image.png -> JPEG -> my.sample.image.jpg
  const nestedOut = getOutputFilename("my.sample.image.png", "image/jpeg", "");
  assert.equal(nestedOut, "my.sample.image.jpg");

  // Custom name: custom-name -> PNG -> custom-name.png
  const customOut = getOutputFilename("custom-name", "image/png", "");
  assert.equal(customOut, "custom-name.png");
});

test("Math utilities: aspect ratio resize calculations", () => {
  // 1920 x 1080 -> width 1280 -> 1280 x 720
  const ratio = 1920 / 1080;
  const resizedByWidth = calculateAspectRatioDimensions("width", 1280, ratio);
  assert.equal(resizedByWidth.width, 1280);
  assert.equal(resizedByWidth.height, 720);

  // 1920 x 1080 -> height 540 -> 960 x 540
  const resizedByHeight = calculateAspectRatioDimensions("height", 540, ratio);
  assert.equal(resizedByHeight.width, 960);
  assert.equal(resizedByHeight.height, 540);
});

test("Image validation: dimension limits and friendly error messages", () => {
  // Valid
  const valid = validateImageDimensions(1920, 1080);
  assert.equal(valid.valid, true);

  // Zero / negative
  const invalidZero = validateImageDimensions(0, 1080);
  assert.equal(invalidZero.valid, false);

  // Oversized dimensions
  const invalidOversize = validateImageDimensions(
    MAX_SAFE_DIMENSION + 1,
    1000
  );
  assert.equal(invalidOversize.valid, false);
  assert.match(
    invalidOversize.error,
    /This image is too large for this browser to process safely/
  );

  // Oversized pixel count
  const invalidPixels = validateImageDimensions(8000, 7000); // 56 MP > 40 MP
  assert.equal(invalidPixels.valid, false);
  assert.match(
    invalidPixels.error,
    /This image is too large for this browser to process safely/
  );
});

test("Transform math: 90° rotation sequence", () => {
  // 0 -> 90 -> 180 -> 270 -> 0
  let rot = 0;
  rot = getNextRotation(rot, "cw");
  assert.equal(rot, 90);
  rot = getNextRotation(rot, "cw");
  assert.equal(rot, 180);
  rot = getNextRotation(rot, "cw");
  assert.equal(rot, 270);
  rot = getNextRotation(rot, "cw");
  assert.equal(rot, 0);

  // Counter-clockwise
  rot = getNextRotation(0, "ccw");
  assert.equal(rot, 270);
});

test("Transform math: natural dimensions swap on 90°/270°", () => {
  const source = {
    fileName: "test.jpg",
    mimeType: "image/jpeg",
    fileSize: 1000,
    width: 1920,
    height: 1080,
    sourceUrl: "",
  };

  const state0 = {
    crop: { enabled: false, x: 0, y: 0, width: 1920, height: 1080, aspectRatio: null },
    resize: { width: 1920, height: 1080, keepAspectRatio: true },
    rotation: 0,
    flipX: false,
    flipY: false,
    outputFormat: "image/jpeg",
    quality: 85,
  };

  const dim0 = getTransformedNaturalDimensions(source, state0);
  assert.deepEqual(dim0, { width: 1920, height: 1080 });

  const state90 = { ...state0, rotation: 90 };
  const dim90 = getTransformedNaturalDimensions(source, state90);
  assert.deepEqual(dim90, { width: 1080, height: 1920 });

  const state180 = { ...state0, rotation: 180 };
  const dim180 = getTransformedNaturalDimensions(source, state180);
  assert.deepEqual(dim180, { width: 1920, height: 1080 });

  const state270 = { ...state0, rotation: 270 };
  const dim270 = getTransformedNaturalDimensions(source, state270);
  assert.deepEqual(dim270, { width: 1080, height: 1920 });
});

test("Crop calculations: presets and boundaries", () => {
  // 1:1 Preset on 1920 x 1080
  const crop1to1 = createDefaultCropTest(1920, 1080, 1);
  assert.equal(crop1to1.width, crop1to1.height);
  assert.ok(crop1to1.x >= 0);
  assert.ok(crop1to1.y >= 0);
  assert.ok(crop1to1.x + crop1to1.width <= 1920);
  assert.ok(crop1to1.y + crop1to1.height <= 1080);

  // Clamping outside bounds
  const clamped = clampCropRectTest(
    { x: -50, y: 2000, width: 3000, height: 3000 },
    1920,
    1080,
    null
  );
  assert.equal(clamped.x, 0);
  assert.ok(clamped.y <= 1080 - clamped.height);
  assert.ok(clamped.width <= 1920);
  assert.ok(clamped.height <= 1080);
});

test("Privacy & Architecture verification", async () => {
  // Verify no server API directories or server upload routes exist
  const fs = await import("node:fs");
  const apiDirExists = fs.existsSync("./app/api");
  assert.equal(apiDirExists, false, "Security violation: /app/api must NOT exist");
});
