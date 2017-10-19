const fs = require('fs');
const path = require('path');


module.exports = function(directory, extention, callback) {
    var returnData = [];
    fs.readdir(directory, (err, data) => {
        if(err) return callback(err);
        for(var x = 0; x < data.length; x++){
            var fileExt = path.extname(data[x])
            
            if (fileExt == "." + extention){
                returnData.push(data[x]);   
            }
        }
        return callback(null,returnData);  
    })
}