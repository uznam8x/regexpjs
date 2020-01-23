const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = '<img src="https://uznam8x.tistory.com" alt="" />';
const invalid = '<img alt=" />';

const correct = (str, bool = false) => {
    const res = ['src','https://uznam8x.tistory.com', 'alt', ''];
    return bool ? JSON.stringify(res) : res;
}

describe("attrs", () => {
    context(`input : "${valid}"`, ()=>{
        it(`valid return ${correct(valid, true)}`, (done) => {
            const res = pattern.attrs(valid);
            expect(res).to.deep.equal(correct(valid));
            done();
        });
    })
    context(`input : "${invalid}"`, ()=>{
        it("invalid return []", (done) => {
            const res = pattern.attrs(invalid);
            expect(res).to.deep.equal([]);
            done();
          });
    });
  
});
