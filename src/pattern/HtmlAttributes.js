const match = require('../match.js');
module.exports = function(str) {
    const regex = /(\w+)=['"](.*?)['"]/g;
    const res = match(regex, str);
    if(res.length){
        const arr = [];
        for(let i = 0, len = res.length; i<len; i++){
            if(i % 3 != 0) arr.push(res[i]);
        }
        return arr;

    }
    return res;
}