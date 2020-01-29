const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = '4111111111111111';
const invalid = '000';

const correct = (str, bool = false) => {
    const res = ['Visa'];
    return bool ? JSON.stringify(res) : res;
}

describe("card", () => {
    context(`input : "${valid}"`, ()=>{
        it(`valid return ${correct(valid, true)}`, (done) => {
            const res = pattern.card(valid);
            expect(res).to.deep.equal(correct(valid));
            done();
        });
    })
    context(`input : "${invalid}"`, ()=>{
        it("invalid return []", (done) => {
            const res = pattern.card(invalid);
            expect(res).to.deep.equal([]);
            done();
          });
    });
  
});
