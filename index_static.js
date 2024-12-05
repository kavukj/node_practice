const express = require('express');
const path = require('path')

const app = express();

app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public/index.html'))
}) // Not needed if you want to serve static pages like localhost:4000/index.html and localhost:4000/index2.html

app.listen('4000', () => {
    console.log('SERVER CONNECTED')
})