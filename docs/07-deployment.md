# 07 — Deployment

## 1. Target

Deploy imzr to Vercel.

## 2. Infrastructure

Required:

- Vercel
- Git repository

Not required:

- database
- authentication
- storage
- image API
- server-side image processing
- paid backend service

## 3. Vercel model

```text
Git repository
      ↓
Vercel
      ↓
Next.js application
      ↓
User browser
      ↓
Local image processing
```

The image does not need to pass through Vercel.

## 4. API routes

Do not create image-processing API routes.

Avoid:

```text
/api/upload
/api/process
/api/compress
```

## 5. Environment variables

The MVP should require no environment variables.

If future services require secrets, keep them server-side and never expose private credentials through public client variables.

## 6. Build

Before deployment:

```bash
npm run lint
npm run build
```

Then test the production build.

## 7. Privacy statement

Recommended UI copy:

**Your image stays in your browser. We don't upload or store it.**

This statement must only remain in production if the implementation genuinely does not send image contents to any external service.

## 8. Cost strategy

Because image processing is client-side:

- no image-processing compute is required on Vercel
- no image storage is required
- no database is required
- no per-image processing API is required

This makes the architecture suitable for a low-cost/free-tier MVP.

## 9. Analytics

Do not introduce analytics during the MVP unless there is a concrete product need.

If analytics are added later:

- never send image contents
- never send data URLs
- never send image blobs
- document what is collected
