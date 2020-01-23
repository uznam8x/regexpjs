const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = "hello world";
const invalid = "1234 5678";
const correct = (str, bool = false) => {
  const res = ['hello', 'world'];
  return bool ? JSON.stringify(res) : res;
};
describe("letters", () => {
  context(`input : "${valid}"`, () => {
    it(`valid return ${correct(valid, true)}`, (done) => {
      const res = pattern.letters(valid);
      expect(res).to.deep.equal(correct(valid));
      done();
    });
  });
  context(`input : "${invalid}"`, () => {
    it("invalid return []", (done) => {
      const res = pattern.letters(invalid);
      expect(res).to.deep.equal([]);
      done();
    });
  });
});
