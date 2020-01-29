const pattern = {
  email: require("./src/pattern/Email.js"),
  telephone: require("./src/pattern/Telephone.js"),
  firstLetters: require("./src/pattern/FirstLetters.js"),
  url: require("./src/pattern/URL.js"),
  currency: require("./src/pattern/Currency.js"),
  attrs: require("./src/pattern/HtmlAttributes.js"),
  ip: require("./src/pattern/IP.js"),
  mac: require("./src/pattern/Mac.js"),
  letters: require("./src/pattern/Letters.js"),
  password: require("./src/pattern/Password.js"),
  fileExt: require("./src/pattern/FileExtension.js"),
  card: require("./src/pattern/Card.js"),
};
const match = require("./src/match");

module.exports = {
  pattern,
  match,
};
