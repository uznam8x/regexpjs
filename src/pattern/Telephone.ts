import match from "../match";
export default function (str: string): string[] {
  const regex = /(\d{3})(\d{4})(\d{4})/g;
  const res = match(regex, str);
  return res.length ? res.slice(-3) : res;
}
