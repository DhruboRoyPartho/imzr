# imzr Development Progress

## Current Phase
Phase 4 — Crop

## Status
COMPLETE

## Completed
- Implemented `lib/image/crop.ts` with aspect ratio presets (Free, 1:1, 4:3, 3:2, 16:9), default centered crops, and strict boundary clamping.
- Implemented `components/CropOverlay.tsx` with:
  - Dimmed 4-quadrant backdrop outside crop selection.
  - Interactive rule-of-thirds grid lines.
  - Draggable crop area with touch and mouse pointer capture (`setPointerCapture`, `touch-action: none`).
  - 8 resize handles (4 corners + 4 edges) supporting proportional aspect-ratio scaling and free dragging.
  - Precise mapping between display screen pixels and source image pixels.
- Implemented `components/CropControls.tsx` with:
  - Crop activation and cancellation.
  - Preset aspect-ratio selectors.
  - Apply crop and Reset crop actions with automatic coupled dimension adjustment.
- Integrated crop overlay smoothly into `ImagePreview.tsx` and `ImageEditor.tsx`.

## Current Work
- Phase 4 complete. Moving to Phase 5 — Output and export.

## Next Step
Phase 5 — Output and export (Implement `OutputControls.tsx` for JPEG, PNG, WebP format conversion, quality adjustment slider for JPEG and WebP, PNG lossless indicator without fake quality controls, custom output filename input, clean extension replacement without double extensions, and temporary object URL lifecycle management).

## Known Issues
- None.

## Validation
- npm run lint: PASS (0 errors, 0 warnings)
- npm run build: PASS (static generation clean)
- relevant manual tests: Crop overlay pointer drag, aspect ratio presets, boundary clamp, and transform integration verified.

## Important Decisions
- Stored crop coordinates strictly in source-image coordinate space so downstream rotation, flip, and resize pipeline remains 100% stable and reproducible.
- Crop overlay uses pointer capture and CSS `touch-action: none` to prevent unintended page scroll gestures during mobile cropping.

## Files Changed
- `lib/image/crop.ts`
- `components/CropOverlay.tsx`
- `components/CropControls.tsx`
- `components/ImagePreview.tsx`
- `components/ImageEditor.tsx`
- `docs/PROGRESS.md`

## Resume Instructions
Continue from: Phase 5 — Output and export.
