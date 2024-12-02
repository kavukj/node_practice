const express = require('express');
const users = require('./MOCK_DATA.json')

const app = express();

app.get('/',(req,res) => {
    return res.send('HomePage')
})

app.get('/user',(req,res) => {
    const html = `
        <h2>List of all users</h2>
        <ul>
            ${users.map(user => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `
    return res.send(html);
})

app.get('/api/user',(req,res) => {
    return res.json(users);
})

app.route('/api/user/:id')
    .get((req,res) => {
        const id = Number.parseInt(req.params.id)
        const user = users.find((user) => user.id === id)
        return res.json(user);
    })
    .patch((req,res)=> {

    })
    .delete((req,res)=>{

    })


app.post('/user',(req,res) => {
   
})


app.listen(3000, ()=> {
    console.log('SERVER CONNECTED')
})