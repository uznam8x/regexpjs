const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = "AA:BB:CC:DD:EE:FF";
const invalid = "AABB:CC:DD:EE:FF";
const correct = (str, bool = false) => {
  const res = str.split(":");
  return bool ? JSON.stringify(res) : res;
};
describe("mac", () => {
  context(`input : "${valid}"`, () => {
    it(`valid return ${correct(valid, true)}`, (done) => {
      const res = pattern.mac(valid);
      expect(res).to.deep.equal(correct(valid));
      done();
    });
  });
  context(`input : "${invalid}"`, () => {
    it("invalid return []", (done) => {
      const res = pattern.mac(invalid);
      expect(res).to.deep.equal([]);
      done();
    });
  });
});
