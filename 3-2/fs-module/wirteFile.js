// 기존에 동명의 파일이 있어도 새로 써버린다
// 파일 만드는 예제

const fs = require('fs');

fs.writeFile('./3-2/fs-module/writeme.txt', '다시 새로 쓴 파일', (err)=>{
  if (err){
    console.log(err);
  }
  fs.readFile('./3-2/fs-module/writeme.txt', (err,data)=> {
    if (err){
      throw err;
    }
    console.log(data.toString());
  });
});
