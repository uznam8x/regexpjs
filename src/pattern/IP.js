
const match = require('../match.js');
module.exports = function(str) {
    const regex = /^(?!.*\.$)((?!0\d)(1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/g;
    const res = match(regex, str);
    return res.length ? str.split('.') : res;
}
