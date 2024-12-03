const express = require('express');
const users = require('./MOCK_DATA.json')
const fs = require('fs');

const app = express();

app.use(express.urlencoded({extended: true}))

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

app.post('/api/user',(req,res) => {
    const body = req.body;
    const newUser = { id: users.length+1, ...body }
    users.push(newUser)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err, data) => {
        return res.send({status: "Created", id: newUser.id})
    });
})

app.route('/api/user/:id')
    .get((req,res) => {
        const id = Number.parseInt(req.params.id)
        const user = users.find((user) => user.id === id)
        return res.json(user);
    })
    .patch((req,res)=> {
        const id = Number.parseInt(req.params.id);
        const body = req.body;
        const updatedUser = users.map((user) => {
            if(user.id === id) {
                console.log({...user, ...body})
                return {...user, ...body}
            }
            return user;
        });
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(updatedUser) , (err, data) => {
            return res.send({status: "Updated", id: id})
        });
    })
    .delete((req,res)=>{
        const id = Number.parseInt(req.params.id);
        const updatedUsers = users.filter((user) => user.id !== id);
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(updatedUsers) , (err, data) => {
            return res.send({status: "Deleted", id: updatedUsers.id})
        });
    })

app.listen(3000, ()=> {
    console.log('SERVER CONNECTED')
})