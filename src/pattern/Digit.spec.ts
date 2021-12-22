import exec from "./Digit";

describe("digit", () => {
  test(`valid: "a1b2c3" => [1,2,3]`, () => {
    expect(exec("a1b2c3")).toEqual([1, 2, 3]);
  });
});
