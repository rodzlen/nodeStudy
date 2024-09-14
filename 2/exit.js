let i = 1;
setInterval(()=>{
if (i === 5){
  console.log('종료');
  process.exit();// 인수 할당을 안하면 0으로 인식해 정상종료, 비정상으로 종료될 시 (에러 등 ) 1을 주면 된다.
}
console.log(i);
i += 1;
},1000);