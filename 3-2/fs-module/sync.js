const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./3-2/fs-module/readme2.txt');
console.log('1번', data.toString());
 data = fs.readFileSync('./3-2/fs-module/readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./3-2/fs-module/readme2.txt');
console.log('3번', data.toString());
console.log('끝');
