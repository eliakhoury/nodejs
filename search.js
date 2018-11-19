var fs = require('fs');
var path = require('path');
var fileType = '.' + process.argv[2];
var subName = process.argv[3];

if(process.argv.length != 4 ){
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
        console.log(__dirname + '\\'+ (cDir.substring(2).length>0 ? cDir.substring(2) + '\\' : '') + files[i]);
      }
    }
  })
}
