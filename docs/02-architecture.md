# 02 — Architecture

## 1. Architecture decision

imzr uses a **client-side-first architecture**.

The browser performs image decoding, editing, rendering, compression, and export.

Vercel only serves the web application.

## 2. High-level architecture

```text
                    Vercel
                      |
                Next.js application
                      |
                      v
                Browser / Client
                      |
       +--------------+--------------+
       |              |              |
       v              v              v
   File API      Editor State     Canvas
       |              |              |
       +--------------+--------------+
                      |
                      v
                Export Engine
                      |
                      v
                 Blob/File
                      |
                      v
                Browser Download
```

## 3. Data-flow rule

The image should remain local:

```text
Local File
   ↓
Browser decode
   ↓
Canvas / ImageBitmap
   ↓
Local editing
   ↓
Local Blob
   ↓
Browser download
```

There should be no:

```text
Browser → imzr server → image processing
```

## 4. Recommended technology

- Next.js App Router.
- TypeScript.
- React.
- CSS or Tailwind CSS.
- Canvas 2D.
- `createImageBitmap()` where supported.
- `Blob`.
- `URL.createObjectURL()`.
- Web Worker / OffscreenCanvas only as a performance enhancement.

## 5. State separation

Keep the following conceptually separate:

```text
Source Image
Editor State
Preview State
Export State
UI State
```

Do not store large image binaries directly in React state.

## 6. Source image

Conceptual model:

```ts
type SourceImage = {
  fileName: string
  mimeType: string
  fileSize: number
  width: number
  height: number
  sourceUrl: string
}
```

## 7. Editor state

```ts
type EditorState = {
  crop: {
    enabled: boolean
    x: number
    y: number
    width: number
    height: number
    aspectRatio: number | null
  }

  resize: {
    width: number
    height: number
    keepAspectRatio: boolean
  }

  rotation: 0 | 90 | 180 | 270

  flipX: boolean
  flipY: boolean

  outputFormat: "image/jpeg" | "image/png" | "image/webp"

  quality: number
}
```

## 8. Source-of-truth rule

All preview and export operations should derive from:

```text
Original source + current editor state
```

Do not repeatedly export and re-import the edited image for each operation.

This avoids cumulative compression loss.

## 9. Memory management

Large images can consume substantial browser memory.

imzr should:

- check decoded pixel count
- avoid duplicate full-size image buffers
- revoke object URLs
- release ImageBitmap resources where applicable
- avoid unnecessary intermediate canvases
- catch canvas allocation failures
- show a friendly large-image error

## 10. No backend image infrastructure

The MVP must not depend on:

- Supabase
- Firebase
- Cloudinary
- Vercel Blob
- Amazon S3
- database services
- authentication services
- image-processing APIs

## 11. Why this architecture

Client-side processing provides:

- better privacy
- no upload wait
- lower infrastructure cost
- simpler deployment
- no image storage
- no image-processing server
- easy Vercel deployment

This architecture is directly aligned with imzr's quick-utility purpose.
