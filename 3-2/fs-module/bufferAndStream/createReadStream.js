const fs = require('fs');

const readStream = fs.createReadStream('./3-2/fs-module/bufferAndStream/readme.txt',
  {highWaterMark: 16}); // 설정 안하면 기본값은 64KB, 현재는 16B로 설정
const data = [];

readStream.on('data', (chunk) =>{
  data.push(chunk);
  console.log('data:', chunk, chunk.length);
});

readStream.on('end', ()=>{
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('err', (err)=>{
  console.log(err);
});
