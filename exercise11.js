const http = require('http');
const fs = require('fs');

var port = process.argv[2];
var fileName = process.argv[3];

const server = http.createServer((request, response) => {
    var fileReadStream = fs.createReadStream(fileName);
    fileReadStream.on('open', () => {
        fileReadStream.pipe(response);
    })
    fileReadStream.on('error', (err) => {

    })
    
})
server.listen(port);
    