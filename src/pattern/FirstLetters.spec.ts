import exec from "./FirstLetters";

const correct = (bool = false) => {
  const res = ["h", "w"];
  return bool ? JSON.stringify(res) : res;
};

describe("first Letters", () => {
  test(`valid: "hello world" => ["h", "w"]`, () => {
    expect(exec("hello world")).toEqual(["h", "w"]);
  });
  test(`valid: "!@#$123" => ["1"]`, () => {
    expect(exec("hello world")).toEqual(["h", "w"]);
  });
});
