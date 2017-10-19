const http = require('http');

http.get(process.argv[2], (response1) => {
    let rawData = '';
    response1.on('data', (data) => {
        rawData += data;
    })
    response1.on('end', () => {
       
        console.log(rawData);
    })
    http.get(process.argv[3], (response2) => {
        rawData = '';
        response2.on('data', (data) => {
            rawData += data;
        })
        response2.on('end', () => {
           
            console.log(rawData);
        })
        http.get(process.argv[4], (response3) => {
            
            
            rawData = '';
            response3.on('data', (data) => {
                rawData += data;
            })
            response3.on('end', () => {
               
                console.log(rawData);
            })

        })
    })
        
    
})






