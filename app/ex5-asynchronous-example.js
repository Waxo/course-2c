const BluebirdPromise = require('bluebird');
const fs = BluebirdPromise.promisifyAll(require('fs'));

fs.readdir(`./`, (err, files) => {
  fs.readFile(`./${files[6]}`, (err, fileRead) => {
    console.log(fileRead.toString());
  });
  console.log(`Error : ${err}`);
  console.log(`File read : ${files[6]}`);
});

console.log('test');
