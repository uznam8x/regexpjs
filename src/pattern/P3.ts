import hex from "./Hex";
import rgba from "./Rgba";
export default function (str: string): number[] {
  const a = hex(str);
  const b = rgba(str);

  if (a.length || b.length) {
    const c = a.length > b.length ? a.map((v) => parseInt(v, 16)) : b;
    const [red, green, blue, alpha] = rgba(`rgba(${c.join(",")})`);
    return [red, green, blue].map((v) => v / 255).concat(alpha);
  }

  return [];
}
