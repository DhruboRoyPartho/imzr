# 03 — UX / UI Specification

## 1. Visual direction

The imzr interface should look like a polished, established utility.

It must not look like a generic AI-generated SaaS landing page.

### Desired qualities

- Minimal.
- Professional.
- Quiet.
- Functional.
- Clear.
- Spacious but not oversized.
- Strong hierarchy.
- Restrained borders.
- Neutral surfaces.
- One restrained accent color.
- Consistent typography.

### Avoid

- Huge hero sections.
- Decorative gradients.
- Excessive rounded cards.
- Floating decorative blobs.
- Excessive glassmorphism.
- Unnecessary illustrations.
- Emoji.
- Fake testimonials.
- Marketing-heavy copy.
- Dark/light theme controls.

## 2. Empty state

The initial screen should be immediately understandable.

Suggested copy:

**Edit an image quickly**

Resize, crop, rotate, convert, and compress images directly in your browser.

Primary action:

**Open image**

Secondary:

**or drag and drop an image here**

Privacy note:

**Your image stays in your browser. It is not uploaded.**

The upload area should be compact rather than occupying the entire viewport as a marketing hero.

## 3. Main editor

Desktop layout:

```text
┌─────────────────────────────────────────────────────────┐
│ imzr                                  Open another      │
├───────────────────────────────────────┬─────────────────┤
│                                       │                 │
│                                       │ Resize          │
│             IMAGE PREVIEW             │ Crop            │
│                                       │ Transform       │
│                                       │ Output          │
│                                       │                 │
│                                       │                 │
├───────────────────────────────────────┴─────────────────┤
│ Original 1920 × 1080 · 2.4 MB       Download image      │
└─────────────────────────────────────────────────────────┘
```

On mobile:

```text
Header
   ↓
Image preview
   ↓
Resize
   ↓
Crop
   ↓
Transform
   ↓
Output
   ↓
Download
```

## 4. Header

Keep the header small.

Left:

**imzr**

Right:

**Open another**

No navigation menu is required for MVP.

## 5. Resize section

Controls:

- Width
- Height
- Lock ratio
- Percentage

When locked:

```text
width change → height automatically updates
height change → width automatically updates
```

## 6. Crop section

Controls:

- Free
- 1:1
- 4:3
- 3:2
- 16:9

The crop rectangle should:

- be draggable
- have resize handles
- respect selected aspect ratio
- work with mouse
- work with touch
- remain constrained to the image

## 7. Transform section

Buttons:

- Rotate left
- Rotate right
- Flip horizontal
- Flip vertical

Buttons should preferably include text labels rather than relying only on icons.

## 8. Output section

Format selector:

```text
JPEG
PNG
WebP
```

JPEG/WebP:

```text
Quality ───────── 85
```

PNG:

**PNG is lossless. Quality adjustment is not available.**

Do not show a fake PNG quality slider.

## 9. Export section

Primary action:

**Download image**

Secondary:

**Reset**

Optional filename:

`photo-edited.jpg`

The download action should be visually stronger than secondary actions.

## 10. Preview

The preview must:

- preserve image proportions
- fit available space
- update after edits
- support crop interaction
- handle transparent images correctly
- avoid accidental stretching

A subtle checkerboard may be used behind transparent PNG/WebP images.

## 11. Output information

Show concise metadata:

```text
Original
1920 × 1080 · 2.4 MB

Output
1280 × 720 · 410 KB
```

If output size has not been encoded recently:

**Output size will be calculated when exported.**

Do not present an inaccurate fake file-size estimate.

## 12. Error language

Use human language.

Instead of:

`DOMException: The source image could not be decoded.`

Use:

**This image could not be opened. Try a JPG, PNG, or WebP file.**

For oversized images:

**This image is too large for this browser to process safely. Try a smaller copy.**

## 13. Responsive behavior

Desktop:

- preview on left
- controls on right

Mobile:

- preview first
- controls below
- full-width inputs
- large enough touch targets
- download action remains easy to find

## 14. Interaction philosophy

The UI should answer:

> What can I do here?

without requiring documentation.

Avoid hiding important functionality behind unexplained icon-only controls.

## 15. Product personality

imzr should feel like:

> a small, trustworthy utility that gets the job done.

Not:

> an AI startup dashboard.
