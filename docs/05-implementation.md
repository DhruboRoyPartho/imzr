# 05 — Implementation Plan

## 1. Project structure

```text
imzr/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ImageDropzone.tsx
│   ├── ImageEditor.tsx
│   ├── ImagePreview.tsx
│   ├── ResizeControls.tsx
│   ├── CropControls.tsx
│   ├── TransformControls.tsx
│   ├── OutputControls.tsx
│   └── ExportBar.tsx
├── lib/
│   ├── image/
│   │   ├── decode.ts
│   │   ├── validation.ts
│   │   ├── transform.ts
│   │   ├── render.ts
│   │   ├── export.ts
│   │   └── compression.ts
│   └── utils/
│       ├── file.ts
│       └── math.ts
├── public/
├── docs/
└── package.json
```

## 2. Component responsibilities

### ImageDropzone

- file picker
- drag/drop
- validation
- image loading

### ImageEditor

- editor state
- control coordination
- preview updates
- reset/open-another actions

### ImagePreview

- canvas rendering
- fit-to-container calculation
- crop interaction
- pointer/touch behavior

### ResizeControls

- width
- height
- percentage
- aspect-ratio lock

### CropControls

- crop mode
- aspect ratio
- reset/apply

### TransformControls

- rotate
- flip

### OutputControls

- output format
- quality
- optional target size

### ExportBar

- dimensions
- output information
- filename
- Download image
- Reset/Open another

## 3. State

Do not add Redux for MVP.

React state is sufficient.

Keep raw image data outside normal UI state where possible.

## 4. Original image rule

Never mutate the original `File`.

The source remains unchanged.

Every export creates a new Blob.

## 5. Preview rendering

Use a debounced preview update for controls that can change rapidly:

- width
- height
- crop dragging
- quality-related visual controls

Button operations such as rotation should feel immediate.

## 6. Output-size calculation

Do not perform expensive encoding continuously.

A recent encoded output can be measured and displayed.

Otherwise:

**Output size will be calculated on export.**

## 7. Filename

Input:

```text
my-photo.png
```

Output JPEG:

```text
my-photo-edited.jpg
```

If the user provides a custom base name, preserve it and replace the extension according to the selected format.

## 8. Browser-only implementation

Do not create image-upload endpoints.

Avoid:

```text
/api/upload
/api/process
/api/image
```

No server route should receive image bytes.

## 9. Dependencies

Keep dependencies minimal.

Prefer native browser APIs for:

- file input
- drag/drop
- canvas
- image decoding
- blob creation
- download

Do not introduce a heavy editor framework unless a concrete requirement demands it.

## 10. Development order

### Phase 1 — Foundation

- Next.js
- TypeScript
- page
- base CSS
- empty state
- file picker
- drag/drop
- image decoding
- canvas preview

### Phase 2 — Basic transformations

- resize
- aspect ratio lock
- rotate
- flip
- reset

### Phase 3 — Crop

- crop overlay
- drag
- resize handles
- aspect-ratio presets
- touch support

### Phase 4 — Output

- JPG
- PNG
- WebP
- quality
- filename
- download

### Phase 5 — Compression

- output size display
- target-size compression

### Phase 6 — Quality

- accessibility
- mobile polish
- error states
- large-image safeguards
- browser compatibility

### Phase 7 — Deployment

- production build
- Vercel deployment
- final privacy/network verification

## 11. Code quality rules

- Strong TypeScript types.
- Small focused components.
- No unnecessary abstraction.
- No duplicated transformation logic.
- Centralized image-processing functions.
- Clear error handling.
- Clean object URL lifecycle.
- Avoid memory leaks.

## 12. Privacy implementation rule

The browser should be the only place where image contents exist during normal operation.

No analytics event should contain:

- image binary
- image data URL
- image Blob
- image pixels
- user-uploaded image contents.
