import exec from "./Letters";

const valid = "hello world";
const invalid = "@@#$ $%^&";
const correct = (bool = false) => {
  const res = ["hello", "world"];
  return bool ? JSON.stringify(res) : res;
};
describe("letters", () => {
  test(`valid: ${valid} => ${correct(true)}`, () => {
    expect(exec(valid)).toEqual(correct());
  });


  test(`invalid: ${invalid} => []`, () => {
    expect(exec(invalid)).toEqual([]);
  });
});
