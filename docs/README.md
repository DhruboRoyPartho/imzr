# imzr — AILDC Documentation

## Product

**imzr** is a lightweight browser-based image utility for quick everyday editing.

It lets users resize, crop, rotate, flip, convert, compress, and export images without creating an account or uploading images to a server.

## Product principle

**Open → Edit → Download**

imzr is intentionally not a full image editor. Its purpose is to solve common image-editing tasks quickly with minimal UI and minimal friction.

## Core principles

- No account or authentication.
- No database.
- No image storage.
- No server-side image processing.
- Images remain in the user's browser.
- No mandatory upload to a backend.
- Fast path from opening an image to downloading the result.
- Minimal, professional interface.
- No unnecessary decoration or emoji.
- No dark/light mode switch.
- No unnecessary onboarding.

## Documentation

- `01-requirements.md` — product requirements and scope.
- `02-architecture.md` — technical architecture and data flow.
- `03-ux-ui.md` — UX, visual design, screens, and interaction rules.
- `04-image-engine.md` — browser image-processing and export design.
- `05-implementation.md` — implementation plan and project structure.
- `06-testing.md` — functional, visual, browser, privacy, and export tests.
- `07-deployment.md` — Vercel deployment and cost constraints.
- `08-acceptance-criteria.md` — definition of done.
- `09-roadmap.md` — future improvements.

## Recommended stack

- Next.js
- TypeScript
- React
- CSS / Tailwind CSS
- Browser File API
- HTML Canvas / OffscreenCanvas where useful
- Web Workers only when performance testing justifies them

The MVP requires no database, authentication, object storage, paid image API, or image-processing backend.
