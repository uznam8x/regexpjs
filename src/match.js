module.exports = function(regex, str){
   let matched = [];
    let m;
    while ((m = regex.exec(str)) !== null) {
        matched = matched.concat(m);
    }
    return matched;
}