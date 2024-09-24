const fs = require('fs');

const readStream = fs.createReadStream('./3-2/fs-module/bufferAndStream/readme2.txt');
const writeStream = fs.createWriteStream('./3-2/fs-module/bufferAndStream/writeme4.txt');
readStream.pipe(writeStream);