# Regexp JS

## Installation
```
npm i regexpjs
```

## Usage
```
const {pattern, match} = require('regexpjs');
console.log(pattern.email('user@domain.com'));
//-> ["user", "domain.com"]

console.log(match(/\w+/g, 'hello world'));
//-> ['hello', 'world']
```

## API
```
pattern.attrs('<img src="https://uznam8x.tistory.com" alt="" />')
["src","https://www.domain.com","alt",""]

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

pattern.telephone('01012345678')
["010","1234","5678"]

pattern.url('https://user:pass@abcd.domain.com:8080/first?a=1#hash')
["https","user","pass","abcd.domain.com","8080","first","a=1"]
```