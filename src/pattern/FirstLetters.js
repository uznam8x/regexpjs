const match = require("../match.js");
module.exports = function(str){
  const regex = /\b[a-z]/g;
  return match(regex , str);
}