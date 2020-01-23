const match = require("../match.js");
module.exports = function(str){
  const regex = /[a-zA-Z]+/g;
  return match(regex , str);
}