const fs = require('fs');

const writeStream = fs.createWriteStream('./3-2/fs-module/bufferAndStream/writeme.txt');
writeStream.on('finish', () =>{
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 남긴\n ');
writeStream.write('한 번 더 씁니다');
writeStream.end();