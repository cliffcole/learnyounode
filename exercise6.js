const fileModule = require('./filemodule');


function printFiles(err,files){
    if(err){
        console.log(err);
    }
    else{
        files.forEach(function(element) {
            console.log(element);
        });
    }
}

fileModule(process.argv[2], process.argv[3], printFiles)