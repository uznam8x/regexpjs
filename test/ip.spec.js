const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = "192.168.0.1";
const invalid = "256,255.255.1";
const correct = (str, bool = false) => {
  const res = str.split(".");
  return bool ? JSON.stringify(res) : res;
};
describe("ip", () => {
  context(`input : "${valid}"`, () => {
    it(`valid return ${correct(valid, true)}`, (done) => {
      const res = pattern.ip(valid);
      expect(res).to.deep.equal(correct(valid));
      done();
    });
  });
  context(`input : "${invalid}"`, () => {
    it("invalid return []", (done) => {
      const res = pattern.ip(invalid);
      expect(res).to.deep.equal([]);
      done();
    });
  });
});
