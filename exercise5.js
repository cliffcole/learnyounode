const fs = require('fs');
const path = require('path');

var directory = process.argv[2];
var extention = process.argv[3];

fs.readdir(directory, function(err, data){
    if(err) throw err;
    for(var x = 0; x < data.length; x++){
        var fileExt = path.extname(data[x])
        if (fileExt == "."+extention){
            console.log(data[x])
        }

    }
})