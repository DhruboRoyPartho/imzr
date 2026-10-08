# 01 — Requirements

## 1. Product definition

**Product name:** imzr

imzr is a free, no-account web application for quick image editing.

The user should be able to open an image, make common changes, preview the result, and download the edited image without leaving the page.

The product should feel like a focused utility rather than a complex design application.

## 2. Target use cases

Typical users may need to:

- Reduce image dimensions.
- Increase or decrease image dimensions.
- Resize by percentage.
- Crop an image.
- Rotate an image.
- Flip an image.
- Convert JPG to PNG/WebP.
- Convert PNG to JPG/WebP.
- Change JPEG/WebP quality.
- Compress an image.
- Reduce an image toward a target file size.
- Download the result immediately.

## 3. MVP features

### Input

- File picker.
- Drag and drop.
- Common raster image support:
  - JPG
  - JPEG
  - PNG
  - WebP
  - GIF as static input where browser decoding allows
  - BMP where browser decoding allows
- Clear unsupported-file error.

### Resize

- Width input.
- Height input.
- Percentage resize.
- Aspect-ratio lock/unlock.
- Dimension validation.
- Instant preview update.

### Crop

- Free crop.
- Aspect-ratio presets:
  - Free
  - 1:1
  - 4:3
  - 3:2
  - 16:9
- Interactive crop rectangle.
- Apply/reset crop.

### Transform

- Rotate clockwise 90°.
- Rotate counter-clockwise 90°.
- Flip horizontal.
- Flip vertical.

### Output

- JPEG.
- PNG.
- WebP.
- JPEG/WebP quality.
- Output filename.
- Download.

### Compression

MVP:
- Quality-based compression for JPEG/WebP.

MVP-plus:
- Target file size mode.

## 4. No-account requirement

The tool must work immediately after opening the website.

There must be:

- No signup.
- No login.
- No email collection.
- No account creation.
- No mandatory onboarding.

## 5. Privacy requirement

Image processing must happen locally in the browser.

The application must not upload image contents to:

- its own server
- a database
- object storage
- an image-processing API
- an analytics service

## 6. UX requirements

The primary flow must be:

```text
Open image
    ↓
Edit
    ↓
Preview
    ↓
Download image
```

The user should not need to understand technical image-processing concepts.

## 7. Metadata shown

After an image is opened, show:

- filename
- original format
- original dimensions
- original file size
- current dimensions
- output format
- recent output size when available

## 8. Reset behavior

Reset must restore all editing settings to the original source state.

The original source image must never be modified.

## 9. Replace image

The user can select **Open another** at any time.

The previous image should be released from memory where applicable.

## 10. Non-functional requirements

### Performance

- Fast initial application load.
- No image upload latency.
- Avoid unnecessary image copies.
- Normal images should edit smoothly.
- Large images require safety handling.

### Accessibility

- Keyboard accessible controls.
- Proper labels.
- Visible focus states.
- Accessible status messages.
- Touch-friendly controls on mobile.

### Reliability

- Failed image decoding must produce a friendly error.
- Export failures must be recoverable.
- Object URLs must be revoked.
- Large-image memory failures must not crash the UI.

## 11. Out of scope for MVP

- Layers.
- Brush/painting.
- Text editor.
- AI generation.
- Background removal.
- Cloud projects.
- User accounts.
- Collaboration.
- Server-side processing.
- PDF editing.
- Video editing.
- Animated GIF editing.
- RAW camera formats.
- Advanced photo filters.

## 12. Product success criteria

A first-time user should be able to:

1. Open an image.
2. Resize, crop, rotate, convert, or compress it.
3. See the result.
4. Download it.

No registration and no tutorial should be necessary.
