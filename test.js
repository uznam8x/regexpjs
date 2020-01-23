const {pattern, match} = require('./index');

let check = [
    {
        key: 'attrs',
        value: pattern.attrs('<img src="https://www.domain.com" alt="" />'),
    },
    {
        key: 'currency',
        value: pattern.currency('12345678'),
    },
    {
        key: 'email',
        value: pattern.email('user@domain.com'),
    },
    {
        key: 'first letters',
        value: pattern.firstLetters('hello world'),
    },
    {
        key: 'ip',
        value: pattern.ip('123.45.67.89'),
    },
    {
        key: 'mac',
        value: pattern.mac('AA:BB:8c:DD:12:FF'),
    },
    {
        key: 'password',
        value: pattern.password('aAzZ1!a_'),
    },
    {
        key: 'telephone',
        value: pattern.telephone('01012345678'),
    },
    {
        key: 'url',
        value: pattern.url('https://user:pass@abcd.domain.com:8080/first?a=1#hash')
    },
    {
        key: 'letters',
        value: pattern.letters('hello world'),
    },
    {
        key: 'match',
        value: match(/\w+/g, 'hello world'),
    }
];
check = check.map(v => {
    v.value = JSON.stringify(v.value);
    return v;
})
console.table(check);