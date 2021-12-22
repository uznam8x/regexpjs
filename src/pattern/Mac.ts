import match from "../match";
export default function (str: string): string[] {
  const regex = /^[0-9a-f]{1,2}([\.:-])(?:[0-9a-f]{1,2}\1){4}[0-9a-f]{1,2}$/g;
  const res = match(regex, str.toLowerCase());
  return res.length ? str.split(":") : res;
}
