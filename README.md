# Regexp JS

## Installation
```
npm i regexpjs
```

## Usage
```javascript
const {pattern, match} = require('regexpjs');
console.log(pattern.email('user@domain.com'));
//-> ["user", "domain.com"]

console.log(match(/\w+/g, 'hello world'));
//-> ['hello', 'world']
```

## API
```javascript
/* 1.1.1 */
pattern.qs('a=1&b=2')
[["a", 1], ["b", 2]]

pattern.digit('a1b2c3')
[1, 2, 3]

pattern.htmlAttrs('<img src="https://uznam8x.tistory.com" alt="" />')
["src","https://www.domain.com","alt",""]

/* 1.0.9 */
pattern.creditCard('4111111111111111')
["Visa"]
// Ouput e.g : [ 'American Express', 'BCGlobal', 'Carte Blanche', 'Diners Club', 'Discover', 'Insta Payment''JCB', 'Korean Local', 'Laser', 'Maestro', 'Master','Solo', 'Switch', 'Union Pay', 'Visa' ]

pattern.fileExt('https://www.domain.com/image/1234.jpg')
[".jpg"]

pattern.currency('12345678')
["12","345","678"]

pattern.email('user@domain.com')
["user","domain.com"]

pattern.firstLetters('hello world')
['h', 'w']

pattern.ip('192.168.0.1')
["192","168","0","1"]

pattern.letters('hello world')
["hello", "world"]

pattern.mac('AA:BB:CC:DD:EE:FF')
["AA","BB","CC","DD","EE","FF"]

pattern.password('aAzZ1!a_')
["aAzZ1!a_"]

pattern.telephone('01012345678')
["010","1234","5678"]

pattern.url('https://user:pass@abcd.domain.com:8080/first?a=1#hash')
["https","user","pass","abcd.domain.com","8080","first","a=1"]
```
