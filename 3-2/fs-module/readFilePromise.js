const fs = require('fs').promises;

fs.readFile('./3-2/fs-module/readme.txt')
  .then((data)=>{
    console.log(data);
    console.log(data.toString());
  })
  .catch((err)=>{
    console.log(err);
  });