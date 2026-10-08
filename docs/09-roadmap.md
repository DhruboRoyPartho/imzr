# 09 — Roadmap

## MVP

- Open image
- Drag/drop
- Resize
- Crop
- Rotate
- Flip
- JPG output
- PNG output
- WebP output
- Quality adjustment
- Download
- Client-side processing
- Vercel deployment

## Version 1.1

- Target file-size compression
- Paste image from clipboard
- Before/after preview
- Better crop handles
- Keyboard shortcuts
- More detailed output estimation

## Version 1.2

- Web Worker image processing
- OffscreenCanvas where supported
- Improved large-image handling
- Multiple-image batch processing

## Version 2

Potential basic adjustments:

- Brightness
- Contrast
- Saturation
- Grayscale
- Blur
- Sharpen
- Simple filters

Only add features that preserve the quick-editing workflow.

## Feature discipline

imzr should not become a full Photoshop-style application.

Its core promise is:

**Open → make a quick change → download.**

If a feature makes the interface substantially more complicated without helping that workflow, it should not be part of the core product.
