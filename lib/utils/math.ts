/**
 * Clamps a number between min and max.
 */
export function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

/**
 * Rounds a number to an integer, with a fallback if invalid or NaN.
 */
export function roundToInt(val: number, fallback: number = 0): number {
  const rounded = Math.round(val);
  return Number.isNaN(rounded) ? fallback : rounded;
}

/**
 * Calculates new dimensions when maintaining aspect ratio.
 */
export function calculateAspectRatioDimensions(
  changedDimension: "width" | "height",
  newValue: number,
  aspectRatio: number // width / height
): { width: number; height: number } {
  if (aspectRatio <= 0) return { width: newValue, height: newValue };

  if (changedDimension === "width") {
    const width = Math.max(1, roundToInt(newValue));
    const height = Math.max(1, roundToInt(width / aspectRatio));
    return { width, height };
  } else {
    const height = Math.max(1, roundToInt(newValue));
    const width = Math.max(1, roundToInt(height * aspectRatio));
    return { width, height };
  }
}
