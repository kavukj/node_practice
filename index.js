const http = require('http')

const server = http.createServer();

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log('SERVER CONNECTED')
})