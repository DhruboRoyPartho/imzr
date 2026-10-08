# imzr

> **Fast, lightweight, privacy-first quick image editor — directly in your browser.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![Zero Backend](https://img.shields.io/badge/Zero_Backend-100%25_Client--Side-emerald?style=flat-square)](#privacy--security-guarantee)

**imzr** is a focused web utility designed to solve everyday image manipulation tasks quickly: resize, crop, rotate, flip, convert, and compress images without creating accounts, waiting for server uploads, or compromising private data.

---

## ⚡ Product Philosophy

```text
Open Image ──▶ Edit ──▶ Preview ──▶ Download
```

* **No Signup or Authentication**: Works immediately upon opening the page.
* **No Database or Storage**: No user records, session states, or database connections.
* **No Server-Side Image Processing**: 100% client-side execution via native browser APIs.
* **Zero Infrastructure Cost**: Can be deployed on static hosting or CDN (e.g. Vercel) at virtually zero compute cost.
* **Focused Utility UX**: Minimal, functional, and quiet interface without SaaS marketing fluff, bloated dashboards, or artificial AI gimmicks.

---

## 🔒 Privacy & Security Guarantee

Your photos **never leave your device**.

```text
Local File ──▶ Browser Decode ──▶ Canvas 2D ──▶ Local Blob ──▶ Direct Download
                      ▲                               │
                      └────── No Network Upload ──────┘
```

1. **Client-Side Execution**: All decoding, scaling, and canvas encoding happen inside the local browser runtime.
2. **Zero Upload Endpoints**: There are no `/api/upload` or backend routes receiving image binaries.
3. **No Retention or Abuse Risk**: Images cannot be intercepted, viewed, scraped, or used to train AI models because they are never transmitted.
4. **Memory Lifecycle Management**: Temporary in-memory object URLs (`URL.createObjectURL`) are strictly revoked upon image replacement, reset, or window unmount to prevent browser memory leaks.
5. **Self-Auditable**: Open browser DevTools (<kbd>F12</kbd> or <kbd>Cmd+Option+I</kbd>), check the **Network** tab, and edit an image. You will see **zero** outgoing requests containing image payloads. You can even disconnect your internet after loading the page and the editor will continue to work seamlessly.

Read our complete policy on the live [`/policy`](https://imzr.vercel.app/policy) page.

---

## ✨ Features

### 1. File Handling & Format Support
* **Input**: Native file picker and drag-and-drop zone.
* **Supported Formats**: JPEG, PNG, WebP, GIF (static), BMP.
* **Large-Image Safety Guard**: Proactive safety thresholds (`MAX_SAFE_PIXELS` / dimension bounds) prevent dangerous allocations and browser tab crashes, returning clean, human-friendly guidance.

### 2. Precise Resizing
* Pixel width and height inputs.
* Aspect-ratio lock/unlock toggle with automatic coupled dimension adjustment.
* Quick percentage scaling presets (25%, 50%, 75%, 100%) calculated directly from natural dimensions.

### 3. Interactive Crop
* **Aspect Ratio Presets**: Free, 1:1, 4:3, 3:2, 16:9.
* **Interactive Overlay**: 4-quadrant dimmed backdrop with rule-of-thirds composition grid.
* **Touch & Mouse Support**: Pointer capture (`setPointerCapture`) and `touch-action: none` with 8 resize handles (4 corners + 4 edges) ensuring smooth interaction on mobile and desktop.
* **Source-Coordinate Storage**: Stored in source coordinates so downstream rotation and export pipelines remain consistent.

### 4. Geometric Transforms
* Clockwise (+90°) and Counter-Clockwise (-90°) rotation with automatic dimension swapping (e.g., 1920 × 1080 ➔ 1080 × 1920).
* Horizontal and vertical axis flipping around image center origin.

### 5. Format Conversion & Export
* Export to **JPEG**, **PNG**, or **WebP**.
* Clean filename handling with extension replacement (e.g., `holiday.png` ➔ `holiday-edited.jpg`, avoiding double extensions like `holiday.png.jpg`).
* White-fill background protection for transparent sources exported to JPEG (preventing black backgrounds).

### 6. Compression Engine
* **Quality Slider**: 10% to 100% (default 85%) for JPEG and WebP.
* **Lossless PNG Detection**: Clear lossless notice for PNG without deceptive quality sliders.
* **Target File Size Mode**: Non-destructive binary search algorithm (converging in ≤6 iterations) discovering optimal quality for a target KB/MB threshold without silently altering pixel dimensions.

### 7. Responsive Desktop & Mobile UX
* **Desktop**: Sticky preview canvas alongside the controls sidebar.
* **Mobile**: Natural stacked flow with a sticky bottom export bar for comfortable one-thumb reach.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **UI Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript 5](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
* **Engine**: Browser HTML5 Canvas 2D & File / Blob API
* **Test Runner**: Native Node.js Test Runner (`node --test`)

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v18.18+ or v20+ (tested on Node v24)
* npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhruboroypartho/imzr.git
   cd imzr
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Validation

Run the automated test suite verifying mathematical transforms, crop boundary clamping, aspect ratio calculations, filename replacement, and security/privacy assertions:

```bash
npm test
```

Run ESLint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

---

## 📁 Project Structure

```text
imzr/
├── app/
│   ├── favicon.png         # Brand favicon
│   ├── globals.css         # Global styling & canvas checkerboard
│   ├── icon.png            # App icon
│   ├── layout.tsx          # Root layout with SEO / OpenGraph metadata
│   ├── page.tsx            # Main editor page
│   ├── policy/page.tsx     # Security & Privacy policy page
│   ├── privacy/page.tsx    # Privacy route alias
│   ├── robots.ts           # Search crawler directives
│   └── sitemap.ts          # Automated XML sitemap
├── components/
│   ├── CreditModal.tsx     # Author credit modal
│   ├── CropControls.tsx    # Crop presets and toggle controls
│   ├── CropOverlay.tsx     # Interactive canvas crop handles & overlay
│   ├── ExportBar.tsx       # Metadata bar and download action
│   ├── Header.tsx          # Top branding bar and navigation
│   ├── ImageDropzone.tsx   # File picker and drag-and-drop zone
│   ├── ImageEditor.tsx     # Main editor coordinator
│   ├── ImagePreview.tsx    # Canvas preview renderer
│   ├── OutputControls.tsx  # Format, quality, target-size controls
│   ├── ResizeControls.tsx  # Width/height and aspect ratio lock
│   └── TransformControls.tsx # Rotate and flip buttons
├── docs/                   # Architectural & UX documentation
├── lib/
│   ├── image/
│   │   ├── compression.ts  # Target-size binary search compression
│   │   ├── crop.ts         # Crop boundary math & presets
│   │   ├── decode.ts       # In-browser image decoding
│   │   ├── export.ts       # Blob generation & download trigger
│   │   ├── render.ts       # Canvas 2D transformation pipeline
│   │   ├── transform.ts    # Dimension & rotation calculations
│   │   ├── types.ts        # Core TypeScript type definitions
│   │   └── validation.ts   # Dimensions & MIME safety validator
│   └── utils/
│       ├── file.ts         # File formatting & extension replacement
│       └── math.ts         # Clamping, rounding, & aspect ratio math
├── test/
│   └── engine.test.mjs     # Automated test suite
└── package.json
```

---

## 👤 Author

**Dhrubo Roy Partho**
* **Education**: B.Sc. in Information and Communication Engineering, University of Rajshahi
* **Email**: [dhruboroypartho@gmail.com](mailto:dhruboroypartho@gmail.com)
* **LinkedIn**: [linkedin.com/in/dhrubo-roy-partho](https://linkedin.com/in/dhrubo-roy-partho)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
