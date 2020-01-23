const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = '01012345678';
const invalid = '0101234567';

const correct = (str, bool = false) => {
    const res = ['010','1234','5678'];
    return bool ? JSON.stringify(res) : res;
}

describe("telephone", () => {
    context(`input : "${valid}"`, ()=>{
        it(`valid return ${correct(valid, true)}`, (done) => {
            const res = pattern.telephone(valid);
            expect(res).to.deep.equal(correct(valid));
            done();
        });
    })
    context(`input : "${invalid}"`, ()=>{
        it("invalid return []", (done) => {
            const res = pattern.telephone(invalid);
            expect(res).to.deep.equal([]);
            done();
          });
    });
  
});
