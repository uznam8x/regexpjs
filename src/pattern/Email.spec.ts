import exec from "./Email";

const valid = "user@domain.com";
const invalid = "userdomain.com";

const correct = (str: string, bool = false) => {
  const res = str.split("@");
  return bool ? JSON.stringify(res) : res;
};

describe("e-mail", () => {
  test(`valid: ${valid} => ${correct(valid, true)}`, () => {
    expect(exec(valid)).toEqual(correct(valid));
  });
  test(`invalid: ${invalid} => []`, () => {
    expect(exec(invalid)).toEqual([]);
  });
});
