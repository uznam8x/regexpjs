import exec from "./HtmlAttributes";

const valid = '<img src="https://uznam8x.tistory.com" alt="" />';
const invalid = '<img alt=" />';

const correct = (bool = false) => {
  const res = [["src", "https://uznam8x.tistory.com"], ["alt", ""]];
  return bool ? JSON.stringify(res) : res;
};

describe("attrs", () => {
  test(`valid: ${valid} => ${correct(true)}`, () => {
    expect(exec(valid)).toEqual(correct());
  });

  test(`invalid: ${invalid} => []`, () => {
    expect(exec(invalid)).toEqual([]);
  });
});
