const {odd, even}= require('./var');
const checkNumber =require('./func'); // 모듈로부터 값을 불러올 때 변수 이름을 다르게 할 수 있다.

function checkStringOddOrEven(str){
  if (str.length % 2){
    return odd;
  }else {
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
