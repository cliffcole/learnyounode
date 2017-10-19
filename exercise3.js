const fs = require('fs');

var fileName = process.argv[2];
var fileContent = fs.readFileSync(fileName);

var count = 0;

fileContent.toString().split('').forEach(function(element){
    if (element == "\n"){
        count++;
       
    }
})
console.log(count);