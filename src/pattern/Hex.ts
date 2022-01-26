export default function (hex: string): string[] {
  hex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (m, r, g, b) => r + r + g + g + b + b
  );

  const matched = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (matched) {
    const [, ...code] = matched;
    return code;
  }
  return [];
}
