const A = require('./globalA');

global.message="안녕하세요";
console.log(A());

console.time('전체시긴');
console.timeEnd('전체시긴');