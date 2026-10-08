# 06 — Testing

## 1. File loading

Test:

- JPG
- JPEG
- PNG
- WebP
- GIF
- BMP where supported
- invalid text file
- corrupted image
- large image
- filename with spaces
- filename with non-English characters

Expected:

- supported images open
- unsupported/corrupt images show friendly errors
- original metadata is correct
- image is not uploaded

## 2. Resize

Input:

```text
1920 × 1080
```

Width:

```text
1280
```

Expected:

```text
1280 × 720
```

Unlocked ratio:

```text
1000 × 1000
```

Expected:

```text
1000 × 1000
```

## 3. Rotation

Input:

```text
1920 × 1080
```

Rotate 90°:

```text
1080 × 1920
```

Two rotations:

```text
1920 × 1080
```

Four rotations must return the original orientation.

## 4. Flip

- horizontal twice = original
- vertical twice = original
- horizontal + vertical remains consistent

## 5. Crop

Test:

- Free
- 1:1
- 4:3
- 3:2
- 16:9
- crop near edges
- minimum crop size
- crop on mobile
- touch dragging
- crop after rotation

## 6. Format conversion

Test:

```text
JPG → PNG
JPG → WebP
PNG → JPG
PNG → WebP
WebP → JPG
WebP → PNG
```

Verify:

- output opens
- MIME type is correct
- extension is correct
- dimensions are correct

## 7. Quality

For JPEG/WebP:

- low quality generally reduces size
- high quality generally increases size

Do not require exact size ratios because encoder behavior varies.

For PNG:

- quality control must be unavailable or disabled.

## 8. Target-size compression

If implemented:

- target larger than current output
- achievable target
- very small target
- impossible target
- invalid target
- KB input
- MB input

Verify the user is informed when the target cannot be reached.

## 9. Export

Verify:

- download starts
- filename is correct
- extension is correct
- output opens
- dimensions are correct
- repeated downloads work
- object URLs are cleaned up

## 10. Privacy

Use browser DevTools Network tab.

During:

- opening
- editing
- cropping
- resizing
- exporting

verify that no request contains the image.

## 11. Responsive

Test:

- 1440px
- 1280px
- 1024px
- 768px
- 390px
- 360px

## 12. Accessibility

Check:

- keyboard navigation
- focus visibility
- labels
- slider accessibility
- status announcements
- sufficient touch targets

## 13. Browser

Minimum:

- Chrome
- Edge
- Firefox
- Safari where available

Pay particular attention to:

- Canvas
- WebP
- `createImageBitmap`
- Blob download
- mobile touch interactions
