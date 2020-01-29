const match = require('../match.js');
module.exports = function(str) {
    const regex = /\.[a-zA-Z0-9]+$/g;
    return match(regex, str);
}
