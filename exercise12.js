const http = require('http');
const qs = require('querystring');

var port = process.argv[2];

const server = http.createServer((request, response) => {
    if (request.method == "POST"){
       //console.log(request);
        var responseData = "";
        
        request.on('data', (chunk) => {
            //console.log(chunk.toString());
            responseData += chunk.toString().toUpperCase();
        })
       
        request.on('end', () => {
            //var post = qs.parse(responseData);
            //console.log(post.toString().toUpperCase());
            response.end(responseData);
        })  
    }  
})
server.listen(port);