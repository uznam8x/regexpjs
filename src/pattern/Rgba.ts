import match from "../match";

export default function (raw: string): number[] {
  const matched = match(/rgba\((.+?)\)/, raw);
  if (matched.length) {
    const [r = 0, g = 0, b = 0, a = 1] = matched[1].split(",").map(Number);
    return [r, g, b, a];
  }
  return [];
}
