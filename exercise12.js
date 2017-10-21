const http = require('http');

var port = process.argv[2];

const server = http.createServer((request, response) => {
    if (request.method == "POST"){
       // console.log(request);
        var responseData = ""
        request.on('data', (chunk) => {
            responseData += chunk;
        })
       
        request.on('end', () => {
            response.end("WORD");
        })  
    }  
})
server.listen(port);