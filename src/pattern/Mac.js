const match = require('../match.js');
module.exports = function(str) {
    const regex = /^[0-9a-f]{1,2}([\.:-])(?:[0-9a-f]{1,2}\1){4}[0-9a-f]{1,2}$/g;
    const res = match(regex, str.toLowerCase());
    return res.length ? str.split(':') : res;
}
