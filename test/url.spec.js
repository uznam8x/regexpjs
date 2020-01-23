const { expect } = require("chai");
const pattern = require("../index").pattern;

const valid = 'https://user:pass@abcd.domain.com:8080/first?a=1#hash';
const invalid = 'https:abcd.domain.com:8080';

const correct = (str, bool = false) => {
    const res = [ 'https', 'user', 'pass', 'abcd.domain.com', '8080','first', 'a=1' ];
    return bool ? JSON.stringify(res) : res;
}

describe("url", () => {
    context(`input : "${valid}"`, ()=>{
        it(`valid return ${correct(valid, true)}`, (done) => {
            const res = pattern.url(valid);
            expect(res).to.deep.equal(correct(valid));
            done();
        });
    })
    context(`input : "${invalid}"`, ()=>{
        it("invalid return []", (done) => {
            const res = pattern.url(invalid);
            expect(res).to.deep.equal([]);
            done();
          });
    });
  
});
