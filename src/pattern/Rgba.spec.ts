import exec from "./Rgba";

describe("rgba", () => {
  test(`valid: "rgba(0,0,0)" => [0,0,0,1]`, () => {
    expect(exec("rgba(0,0,0)")).toEqual([0, 0, 0, 1]);
  });
  test(`valid: "rgba(0,0,0,1)" => [0,0,0,1]`, () => {
    expect(exec("rgba(0,0,0,1)")).toEqual([0, 0, 0, 1]);
  });
});
