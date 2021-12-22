export default function (regex: RegExp, str: string) {
  let matched: any[] = [];
  let m: any;

  if (regex.global) {
    while ((m = regex.exec(str)) !== null) {
      matched = matched.concat(m);
    }
  } else {
    if ((m = regex.exec(str)) !== null) {
      m.forEach((match: any) => {
        matched = matched.concat(match);
      });
    }
  }

  return matched;
}
