import exec from "./Telephone";

const valid = "01012345678";
const invalid = "0101234567";

const correct = (bool = false) => {
  const res = ["010", "1234", "5678"];
  return bool ? JSON.stringify(res) : res;
};

describe("telephone", () => {
  test(`valid: ${valid} => ${correct(true)}`, () => {
    expect(exec(valid)).toEqual(correct());
  });

  test(`invalid: ${invalid} => []`, () => {
    expect(exec(invalid)).toEqual([]);
  });
});
