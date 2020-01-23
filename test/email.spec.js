const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = 'user@domain.com';
const invalid = 'userdomain.com';

const correct = (str, bool = false) => {
    const res = str.split('@');
    return bool ? JSON.stringify(res) : res;
}

describe("e-mail", () => {
    context(`input : "${valid}"`, ()=>{
        it(`valid return ${correct(valid, true)}`, (done) => {
            const res = pattern.email(valid);
            expect(res).to.deep.equal(correct(valid));
            done();
        });
    })
    context(`input : "${invalid}"`, ()=>{
        it("invalid return []", (done) => {
            const res = pattern.email(invalid);
            expect(res).to.deep.equal([]);
            done();
          });
    });
  
});
