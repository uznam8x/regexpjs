import exec from "./P3";

describe("P3", () => {
  test(`valid: "#fff" => [1, 1, 1, 1]`, () => {
    expect(exec("#fff")).toEqual([1, 1, 1, 1]);
  });
  test(`valid: "rgba(0, 0, 0, 1)" => [0, 0, 0, 1]`, () => {
    expect(exec("rgba(0, 0, 0, 1)")).toEqual([0, 0, 0, 1]);
  });
});
