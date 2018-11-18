var fs = require('fs');
var path = require('path');

var fileType = '.' + process.argv[2];
var subName = process.argv[3];

var flag = 0;

if(process.argv.length < 3){
  console.log('USAGE: node search [EXT] [TEXT]');
  process.exit(1);
}

getFiles('./');

fs.readdir('./', (err, files)=>{
  for (var i = 0; i < files.length; i++) {
    if(path.extname(files[i])===''){
      getFiles('./' + files[i]);
    }
  }
})


function getFiles(cDir) {
  fs.readdir(cDir, (err, files) => {
    if (err) return console.error(err);
    for (var i = 0; i < files.length; i++) {
      if(path.extname(files[i])===fileType && (files[i].indexOf(subName) > -1)){
        flag = 1;
        console.log(files[i]);
      }
    }
    if(flag==0){
      console.log('No file was found');
    }
  })
}
