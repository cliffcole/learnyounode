const http = require('http');
const qs = require('querystring');
const url = require('url');

var port = process.argv[2];

function parseTime(theTime){
    var parseTime = "";
    var theDate = new Date(theTime);
    var returnJSON = {
        hour: theDate.getHours(),
        minute: theDate.getMinutes(),
        second: theDate.getSeconds()
    }
    
    return returnJSON;
}
function unixTime(theTime){
    var parseTime = "";
    var theDate = new Date(theTime).getTime();
    return {unixtime: theDate}
}
var routes = {
    '/api/parsetime': parseTime,
    '/api/unixtime': unixTime
}


const server = http.createServer((request, response) => {
    var requestUrl = url.parse(request.url, true);
    var theRoute = routes[requestUrl.pathname]
    if(theRoute){
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(theRoute(requestUrl.query.iso)));
    }
    else {
        response.writeHead("404");
        response.end();
    }
}).listen(port);