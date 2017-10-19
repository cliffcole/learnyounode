const fileModule = require('./filemodule');


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