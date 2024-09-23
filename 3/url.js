const url = require('url');

const {URL} = url;
const myURL = new URL ('https://velog.io/@rodzlen/Node.js-%EC%9E%A5%EB%8B%A8%EC%A0%90');
console.log('new URL(): ',myURL);
console.log('url.format(): ',url.format(myURL));// 분해됐던 url 객체를 다시 조립