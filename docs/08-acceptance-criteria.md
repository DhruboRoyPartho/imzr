# 08 — Acceptance Criteria

## Product

- [ ] Product is named **imzr**.
- [ ] User can use the tool without an account.
- [ ] No signup/login exists.
- [ ] User can open an image immediately.

## Input

- [ ] File picker works.
- [ ] Drag/drop works.
- [ ] Supported image types open.
- [ ] Unsupported/corrupt files receive useful errors.
- [ ] Original metadata is shown.

## Editing

- [ ] Width can be changed.
- [ ] Height can be changed.
- [ ] Aspect ratio can be locked/unlocked.
- [ ] Percentage resize works.
- [ ] Crop works.
- [ ] Crop presets work.
- [ ] Rotate left works.
- [ ] Rotate right works.
- [ ] Flip horizontal works.
- [ ] Flip vertical works.
- [ ] Reset works.

## Output

- [ ] JPEG output works.
- [ ] PNG output works.
- [ ] WebP output works.
- [ ] JPEG quality works.
- [ ] WebP quality works.
- [ ] PNG does not expose misleading quality control.
- [ ] Filename is correct.
- [ ] Extension matches output format.
- [ ] Download works.

## Compression

- [ ] Output file size can be measured after encoding.
- [ ] Target-size compression works if included in MVP.
- [ ] Impossible target is clearly communicated.

## Privacy

- [ ] No image upload API exists.
- [ ] No database exists.
- [ ] No image object storage exists.
- [ ] No third-party image-processing API exists.
- [ ] Image bytes stay in the browser.
- [ ] Object URLs are revoked.

## UX

- [ ] Interface is minimal.
- [ ] Interface is professional.
- [ ] Interface is self-explanatory.
- [ ] No unnecessary emoji.
- [ ] No dark/light mode switch.
- [ ] No unnecessary onboarding.
- [ ] No marketing-heavy dashboard.
- [ ] Download is obvious.
- [ ] Mobile editing works.

## Performance

- [ ] Normal images process smoothly.
- [ ] Large images have safety handling.
- [ ] Memory leaks are avoided.
- [ ] React state does not contain unnecessary duplicate image data.

## Deployment

- [ ] Production build succeeds.
- [ ] Vercel deployment succeeds.
- [ ] No paid backend service is required.
- [ ] Tool works without environment variables.
