import match from "../match";
export default function (str: string): string[][] {
  const regex = /[\w]+=['"].*?['"]/g;
  const res = match(regex, str);

  return res.length ? res.map((v) => v.replace(/['"]/g, "").split("=")) : [];
}
