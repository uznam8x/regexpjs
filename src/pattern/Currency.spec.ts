import exec from "./Currency";

const valid = "12345678";
const invalid = "abc33def4g";

const correct = (bool = false) => {
  const res = ["12", "345", "678"];
  return bool ? JSON.stringify(res) : res;
};

describe("currency", () => {
  test(`valid: ${valid} => ${correct(true)}`, () => {
    expect(exec(valid)).toEqual(correct());
  });

  test(`invalid: ${invalid} => []`, () => {
    expect(exec(invalid)).toEqual([]);
  });
});
