// imports
const express = require('express');
const bodyParser = require('body-parser');
const userDB = require('./database/schemas/user')
require('./database/database');


const app = express();
const port = 3001;

//database


// Static Files 
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.json());

// listen on port 3001
app.listen(port, () => console.info(`Running Express Server on port ${port}`))

// routes

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/login",(req, res) => {
    res.sendFile(__dirname + "/views/login.html")
})

app.get('/register',(req, res) => {
    res.sendFile(__dirname + "/views/register.html")
})

app.post('/saveUser',async (req, res) => {
    const data = {
        userName: req.body.userName,
        password: req.body.password
    }
    const user = await userDB.findOne({userName: data.userName})
    if (user) { 
        return res.json('User already eists!');
    }
    else {
        const newUser = await userDB.insertMany(data);
        return res.json(newUser[0])
    }
})