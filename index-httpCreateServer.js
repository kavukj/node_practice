const http = require('http')
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const logs = `${Date.now()} - Log Created for ${req.url} \n`
    fs.appendFile('log.txt', logs , (err, data) => {
        switch(req.url){
            case '/about':
                res.end('It is /about page')
                break;
            case '/home':
                res.end('It is homepage')
                break;
            default:
                res.end('404 not found')
                break;
        }
    })
});

server.listen(PORT, ()=>{
    console.log('SERVER CONNECTED')
})