// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const port = 3001;


mongoose.connect('mongodb://127.0.0.1:27017/Users')
    .then(console.log("connected to MongoDB"))


// Static Files 
app.use(express.static('public'));
app.use(bodyParser.json());

// listen on port 3001
app.listen(port, () => console.info(`Running Express Server on port ${port}`))

// routes

app.get("",(req, res) => {
    res.sendFile(__dirname + "/views/login.html")
})

app.get('/register',(req, res) => {
    res.sendFile(__dirname + "/views/register.html")
})

app.post('/saveUser',(req, res) => {
    const {userName, password} = req.body;
    const user = User.find({username});
    if (user) { //user has register, throw a warn message

    }
    else { //user has not registered, save it to database

    }
})