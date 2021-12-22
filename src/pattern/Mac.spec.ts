import exec from "./Mac";

const valid = "AA:BB:CC:DD:EE:FF";
const invalid = "AABB:CC:DD:EE:FF";
const correct = (str, bool = false) => {
  const res = str.split(":");
  return bool ? JSON.stringify(res) : res;
};
describe("mac", () => {
  test(`valid: ${valid} => ${correct(valid, true)}`, () => {
    expect(exec(valid)).toEqual(correct(valid));
  });
  test(`invalid: ${invalid} => []`, () => {
    expect(exec(invalid)).toEqual([]);
  });
});
