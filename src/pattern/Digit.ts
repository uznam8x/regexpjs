import match from "../match";
export default function (str: string): number[] {
  const regex = /[0-9]/g;
  return match(regex, str).map(Number);
}
