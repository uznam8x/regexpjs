module.exports = function(regex, str) {
  let matched = [];
  let m;

  if (regex.global) {
    while ((m = regex.exec(str)) !== null) {
      matched = matched.concat(m);
    }
  } else {
    if ((m = regex.exec(str)) !== null) {
      m.forEach((match) => {
        matched = matched.concat(match);
      });
    }
  }

  return matched;
};
