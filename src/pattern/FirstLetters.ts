import match from "../match";
export default function (str: string) {
  const regex = /\b[0-9a-zA-Z]/g;
  return match(regex, str);
}
