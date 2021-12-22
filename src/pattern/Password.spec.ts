import exec from "./Password";

const valid = "aAzZ1!a_";
const invalid = "aAzZ1!a";
const correct = (str: string, bool = false) => {
  const res = str.split(".");
  return bool ? JSON.stringify(res) : res;
};
describe("password", () => {
  test(`valid: ${valid} => ${correct(valid, true)}`, () => {
    expect(exec(valid)).toEqual(correct(valid));
  });
  test("invalid return []", () => {
    expect(exec(invalid)).toEqual([]);
  });
});
