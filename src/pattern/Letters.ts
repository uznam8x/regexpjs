import match from "../match";
export default function (str: string): string[] {
  const regex = /[a-zA-Z0-9]+/g;
  return match(regex, str);
}
