const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = 'https://www.domain.com/image/1234.jpg';
const invalid = 'https://www.domain.com/image/1234';

const correct = (str, bool = false) => {
    const res = ['.jpg'];
    return bool ? JSON.stringify(res) : res;
}

describe("file extension", () => {
    context(`input : "${valid}"`, ()=>{
        it(`valid return ${correct(valid, true)}`, (done) => {
            const res = pattern.fileExt(valid);
            expect(res).to.deep.equal(correct(valid));
            done();
        });
    })
    context(`input : "${invalid}"`, ()=>{
        it("invalid return []", (done) => {
            const res = pattern.fileExt(invalid);
            expect(res).to.deep.equal([]);
            done();
          });
    });
  
});
