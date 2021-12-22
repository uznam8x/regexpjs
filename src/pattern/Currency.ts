import match from "../match";
export default function (str: string): string[] {
  const regex = /\d{3}/g;
  let cnt = Math.floor(str.length / 3) + 1;
  if (str.length % 3 == 0) cnt = cnt - 1;
  const nums = ("00" + str).slice(-(cnt * 3));
  const diff = 3 - (nums.length - str.length);
  const res = match(regex, nums);
  if (res.length) res[0] = res[0].slice(-diff);
  return res;
}
