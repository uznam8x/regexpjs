import exec from "./Qs";

describe("digit", () => {
  test(`valid: "a=1&b=2" => [["a", 1], ["b", 2]]`, () => {
    expect(exec("a=1&b=2")).toEqual([
      ["a", 1],
      ["b", 2],
    ]);
  });

  test(`invalid: "123" => []`, () => {
    expect(exec("123")).toEqual([]);
  });
});
