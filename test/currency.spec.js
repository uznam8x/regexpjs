const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = '12345678';
const invalid = 'abcdefg';

const correct = (str, bool = false) => {
    const res = ['12','345','678'];
    return bool ? JSON.stringify(res) : res;
}

describe("currency", () => {
    context(`input : "${valid}"`, ()=>{
        it(`valid return ${correct(valid, true)}`, (done) => {
            const res = pattern.currency(valid);
            expect(res).to.deep.equal(correct(valid));
            done();
        });
    })
    context(`input : "${invalid}"`, ()=>{
        it("invalid return []", (done) => {
            const res = pattern.currency(invalid);
            expect(res).to.deep.equal([]);
            done();
          });
    });
  
});
