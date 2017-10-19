const net = require('net');

var getDate = () => {
    let date = new Date();
    formatedMonth = date.getMonth() + 1;
    formatedDay = date.getDate();
    if(formatedMonth.toString().split('').length < 2){
        formatedMonth = "0"+formatedMonth;
    }
    if(formatedDay.toString().split('').length < 2){
        formatedDay = "0"+formatedDay;
    }
    let formatedDate = date.getFullYear() +"-"+formatedMonth + "-"+formatedDay + " "+date.getHours() +":"+date.getMinutes(); 
    return formatedDate;
}
var server = net.createServer((socket) => {
    socket.write(getDate() + "\n");
    socket.end();
})
server.listen(process.argv[2])