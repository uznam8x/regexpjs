import exec from "./URL";

const valid = "https://user:pass@abcd.domain.com:8080/first?a=1#hash";
const invalid = "https:abcd.domain.com:8080";

const correct = (bool = false) => {
  const res = [
    "https",
    "user",
    "pass",
    "abcd.domain.com",
    "8080",
    "first",
    "a=1",
  ];
  return bool ? JSON.stringify(res) : res;
};

describe("url", () => {
  test(`valid: ${valid} => ${correct(true)}`, () => {
    expect(exec(valid)).toEqual(correct());
  });

  test(`invalid: ${invalid} => []`, () => {
    expect(exec(invalid)).toEqual([]);
  });
});
