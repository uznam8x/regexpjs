const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = "aAzZ1!a_";
const invalid = "aAzZ1!a";
const correct = (str, bool = false) => {
  const res = str.split(".");
  return bool ? JSON.stringify(res) : res;
};
describe("password", () => {
  context(`input : "${valid}"`, () => {
    it(`valid return ${correct(valid, true)}`, (done) => {
      const res = pattern.password(valid);
      expect(res).to.deep.equal(correct(valid));
      done();
    });
  });
  context(`input : "${invalid}"`, () => {
    it("invalid return []", (done) => {
      const res = pattern.password(invalid);
      expect(res).to.deep.equal([]);
      done();
    });
  });
});
