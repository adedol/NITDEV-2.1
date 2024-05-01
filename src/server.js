const http = require('http');
PORT = 3000;
const hostname = '127.0.0.1'
const server = http.createServer();
server.on('request' , (req,res) => {
res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('hello nitdev') 
})
server.listen(PORT,hostname, () => {
    console.log(`Server running on url http://${hostname}:${PORT}`);
})