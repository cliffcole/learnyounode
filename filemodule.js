const fs = require('fs');
const path = require('path');

exports.getFileExt = function(directory, extention, callback){
    var returnData = [];
    fs.readdir(directory, function(err, data){
        if(err) return callback(err);
        for(var x = 0; x < data.length; x++){
            var fileExt = path.extname(data[x])
            if (fileExt == "."+extention){
                returnData.push(data[x]);
            }
        }
    })
    return callback(returnData);
}

module.exports = getFileExt;