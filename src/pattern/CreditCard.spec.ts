import exec from "./CreditCard";

const valid = "4111111111111111";
const invalid = "000";

describe("card", () => {
  it(`valid: ${valid} => ["Visa"]`, () => {
    expect(exec(valid)).toEqual(["Visa"]);
  });

  it(`invalid: ${invalid} => []` , () => {
    expect(exec(invalid)).toEqual([]);
  });
});
