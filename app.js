// imports
const express = require('express');
const bodyParser = require('body-parser');
const userDB = require('./database/schemas/user')
const messageDB = require('./database/schemas/message')
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
    if (!req.body.userName.length || !req.body.password.length) {
        return res.json("Fill all the fields!!!");
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

app.post('/loginUser',async (req, res) => {
    const {userName, password} = req.body;

    if (!userName.length || !password.length) {
        return res.json("Fill all the fields!!!");
    }
    const user = await userDB.findOne({userName: userName})
    if (!user) {
        return res.json('User cannot be found!');
    }
    if (user.password!=password) {
        return res.json("wrong password");
    }
    else {
        return res.json(user);
    }
})

app.post('/postMessage', async (req, res) => {
    const { userName, message } = req.body;
    const date = new Date();
    //save the message to database
    const newPost = await userDB.insertMany({
        userName: userName,
        message: message,
        postDate: date.getTime
    });
    return res.json(newPost[0])
})

app.get('/getAllMessage', async (req, res) => {
    console.log(messageDB.find());
    res.sendStatus(200);
})