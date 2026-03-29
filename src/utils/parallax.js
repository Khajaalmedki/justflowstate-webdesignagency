export const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};