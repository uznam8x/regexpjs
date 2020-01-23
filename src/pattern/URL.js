const match = require("../match.js");
module.exports = function(str) {
    const regex = /^((\w+):)?\/\/((\w+)?(:(\w+))?@)?([^\/\?:]+)(:(\d+))?(\/?([^\/\?#][^\?#]*)?)?(\?([^#]+))?(#(\w*))?/g;
    const res = match(regex, str);
    if (res.length) {
      const position = [2, 4, 6, 7, 9, 11, 13];
      const arr = [];
      for (let i = 0, len = position.length; i < len; i++) {
        arr.push(res[position[i]]);
      }
      return arr;
    }
    return [];
};
