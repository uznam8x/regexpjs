const match = require('../match.js');
module.exports = function(str) {
    const regex = /^.*(?=.{8,10})(?=.*[a-zA-Z])(?=.*?[A-Z])(?=.*\d)(?=.+?[\W|_])[a-zA-Z0-9!@#$%^&*()-_+={}\|\\\/]+$/g;
    const res = match(regex, str);
    return res;
}
