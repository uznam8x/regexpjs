import exec from "./IP";

const valid = "192.168.0.1";
const invalid = "256,255.255.1";
const correct = (str, bool = false) => {
  const res = str.split(".");
  return bool ? JSON.stringify(res) : res;
};
describe("ip", () => {
  test(`valid: ${valid} => ${correct(valid, true)}`, () => {
    expect(exec(valid)).toEqual(correct(valid));
  });

  test(`invalid: ${invalid} => []`, () => {
    expect(exec(invalid)).toEqual([]);
  });
});
