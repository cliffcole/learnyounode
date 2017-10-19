const http = require('http');

http.get(process.argv[2], (response) => {
    
        let rawData = '';
        response.on('data', (data) => {
            rawData += data + "\n";
        })
        response.on('end', () => {
            console.log(rawData);
        })
    
})






