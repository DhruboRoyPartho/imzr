# 08 — Acceptance Criteria

## Product

- [x] Product is named **imzr**.
- [x] User can use the tool without an account.
- [x] No signup/login exists.
- [x] User can open an image immediately.

## Input

- [x] File picker works.
- [x] Drag/drop works.
- [x] Supported image types open.
- [x] Unsupported/corrupt files receive useful errors.
- [x] Original metadata is shown.

## Editing

- [x] Width can be changed.
- [x] Height can be changed.
- [x] Aspect ratio can be locked/unlocked.
- [x] Percentage resize works.
- [x] Crop works.
- [x] Crop presets work.
- [x] Rotate left works.
- [x] Rotate right works.
- [x] Flip horizontal works.
- [x] Flip vertical works.
- [x] Reset works.

## Output

- [x] JPEG output works.
- [x] PNG output works.
- [x] WebP output works.
- [x] JPEG quality works.
- [x] WebP quality works.
- [x] PNG does not expose misleading quality control.
- [x] Filename is correct.
- [x] Extension matches output format.
- [x] Download works.

## Compression

- [x] Output file size can be measured after encoding.
- [x] Target-size compression works if included in MVP.
- [x] Impossible target is clearly communicated.

## Privacy

- [x] No image upload API exists.
- [x] No database exists.
- [x] No image object storage exists.
- [x] No third-party image-processing API exists.
- [x] Image bytes stay in the browser.
- [x] Object URLs are revoked.

## UX

- [x] Interface is minimal.
- [x] Interface is professional.
- [x] Interface is self-explanatory.
- [x] No unnecessary emoji.
- [x] No dark/light mode switch.
- [x] No unnecessary onboarding.
- [x] No marketing-heavy dashboard.
- [x] Download is obvious.
- [x] Mobile editing works.

## Performance

- [x] Normal images process smoothly.
- [x] Large images have safety handling.
- [x] Memory leaks are avoided.
- [x] React state does not contain unnecessary duplicate image data.

## Deployment

- [x] Production build succeeds.
- [x] Vercel deployment succeeds.
- [x] No paid backend service is required.
- [x] Tool works without environment variables.
