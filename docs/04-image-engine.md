# 04 — Image Processing Engine

## 1. Core principle

All edits are calculated from the original decoded source.

Do not repeatedly compress the image after every operation.

## 2. Decode

Preferred:

```ts
createImageBitmap(file)
```

Fallback:

```ts
HTMLImageElement
```

Validate:

- MIME type
- dimensions
- decoded pixel count
- browser support

## 3. Transformation pipeline

Conceptual order:

```text
Original source
      ↓
Crop
      ↓
Rotate
      ↓
Flip
      ↓
Resize
      ↓
Encode
      ↓
Blob
```

The implementation may optimize the pipeline if the final result remains equivalent.

## 4. Canvas rendering

Use Canvas 2D.

Relevant operations:

```ts
ctx.translate(...)
ctx.rotate(...)
ctx.scale(...)
ctx.drawImage(...)
```

For 90° and 270° rotations, swap output width and height.

## 5. Crop

Store crop coordinates in source-image coordinates.

```ts
type CropRect = {
  x: number
  y: number
  width: number
  height: number
}
```

The preview maps source coordinates to screen coordinates.

This prevents crop behavior from depending on the preview's display size.

## 6. Resize

For locked aspect ratio:

```text
newHeight = newWidth / aspectRatio
```

or:

```text
newWidth = newHeight × aspectRatio
```

For unlocked ratio, dimensions are independent.

## 7. Rotation

90° rotation:

```text
W × H
→
H × W
```

Rotation must affect both rendering transforms and output metadata.

## 8. Flip

Horizontal:

```ts
ctx.scale(-1, 1)
```

Vertical:

```ts
ctx.scale(1, -1)
```

Ensure the translation is adjusted so the image remains inside the canvas.

## 9. Encoding

JPEG:

```ts
canvas.toBlob(callback, "image/jpeg", quality)
```

WebP:

```ts
canvas.toBlob(callback, "image/webp", quality)
```

PNG:

```ts
canvas.toBlob(callback, "image/png")
```

Recommended quality UI:

```text
10–100
default: 85
```

Quality is relevant to JPEG/WebP.

PNG should not expose a misleading quality setting.

## 10. Target-size compression

Optional MVP-plus feature.

Example target:

```text
500 KB
```

For JPEG/WebP:

1. Render image.
2. Encode at a quality.
3. Measure Blob size.
4. Adjust quality.
5. Encode again.
6. Repeat with binary search.
7. Stop when sufficiently close or minimum quality is reached.

Conceptual algorithm:

```text
low = 0.10
high = 0.95

while search remains useful:
    quality = (low + high) / 2
    encode
    if output > target:
        high = quality
    else:
        low = quality
```

Exact target sizes cannot always be achieved.

If impossible:

**The smallest practical export is larger than your target.**

Do not silently reduce dimensions unless the user explicitly chooses a strategy that allows dimension changes.

## 11. Output extension

```ts
const extensions = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
}
```

Example:

```text
holiday.png
→ JPEG
→ holiday.jpg
```

Avoid:

```text
holiday.png.jpg
```

## 12. Download

Create a temporary URL:

```ts
const url = URL.createObjectURL(blob)
```

Trigger browser download, then revoke the URL:

```ts
URL.revokeObjectURL(url)
```

## 13. GIF

MVP does not promise animated GIF preservation.

If a GIF is accepted by the browser decoder, it should be treated as a static image for processing/export.

Animated GIF support should be a separate future feature.

## 14. Large-image safety

Use:

```ts
const pixelCount = width * height
```

Maintain a central safety threshold.

If the image is too large:

- do not attempt dangerous allocations
- explain the issue
- suggest using a smaller source image

## 15. Preview performance

Do not encode JPEG/WebP on every slider movement if unnecessary.

During editing:

```text
source → canvas preview
```

During export:

```text
source → final canvas → encoded Blob
```

This keeps interactions responsive.

## 16. Future performance path

If large-image testing shows unacceptable UI blocking:

- move processing to a Web Worker
- use OffscreenCanvas where supported
- retain a main-thread fallback

Do not add this complexity before it is justified by testing.
