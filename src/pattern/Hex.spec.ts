import exec from "./Hex";

describe("hex", () => {
  test(`valid: "#fff" => ['ff','ff','ff']`, () => {
    expect(exec("#fff")).toEqual(["ff", "ff", "ff"]);
  });
  test(`valid: "#000000" => ['00','00','00']`, () => {
    expect(exec("#000000")).toEqual(["00", "00", "00"]);
  });

  test(`invalid: "#0000" => []`, () => {
    expect(exec("#0000")).toEqual([]);
  });
});
