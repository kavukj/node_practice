const express = require('express');

const app = express();

app.get('/',(req,res) => {
    return res.send('HomePage')
})

app.get('/about',(req,res) => {
    const username = req.query.name || 'Kavya Jain'
    return res.send(`Hello from ${username} of Age ${req.query.age}`) //http://localhost:3000/about?name=Kavya&&age=27
})

app.listen(3000, ()=> {
    console.log('SERVER CONNECTED')
})