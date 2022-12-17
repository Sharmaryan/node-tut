const http = require('http');
const data = require('./data');
http.createServer((req, res) => {
    // console.log('i m on port 6000')
    res.writeHead(200, { "Content-Type": "Application-json" });
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)