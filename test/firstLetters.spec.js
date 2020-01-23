const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = 'hello world';
const invalid = '123';

const correct = (str, bool = false) => {
    const res = ['h','w'];
    return bool ? JSON.stringify(res) : res;
}

describe("first Letters", () => {
    context(`input : "${valid}"`, ()=>{
        it(`valid return ${correct(valid, true)}`, (done) => {
            const res = pattern.firstLetters(valid);
            expect(res).to.deep.equal(correct(valid));
            done();
        });
    })
    context(`input : "${invalid}"`, ()=>{
        it("invalid return []", (done) => {
            const res = pattern.firstLetters(invalid);
            expect(res).to.deep.equal([]);
            done();
          });
    });
  
});
