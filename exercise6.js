const fileModule = require('./filemodule');
const filter = require('./file_filter');

var callback = function(err,data){
    
    if(err){
        throw err;
    }
    else {
        console.log(data);
    }
}

fileModule(process.argv[2], process.argv[3], function(err,data){
    if(err){
        console.log(err);
    }
    else{
        data.forEach(function(element) {
            console.log(element);
        });
    }
});