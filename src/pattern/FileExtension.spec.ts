import exec from "./FileExtension";

const valid = "https://www.domain.com/image/1234.jpg";
const invalid = "https://www.domain.com/image/1234";

const correct = (bool = false) => {
  const res = [".jpg"];
  return bool ? JSON.stringify(res) : res;
};

describe("file extension", () => {
  test(`valid: ${valid} => ${correct(true)}`, () => {
    expect(exec(valid)).toEqual(correct());
  });
  test(`invalid: ${invalid} => []`, () => {
    expect(exec(invalid)).toEqual([]);
  });
});
