// imports
const express = require('express')
const path = require('path')
const app = express()
const port = 3001

// Static Files
app.use(express.static('public'))

// listen on port 3001
app.listen(port, () => console.info(`Running Express Server on port ${port}`))

// routes

app.get("",(req, res) => {
    res.sendFile(__dirname + "/views/login.html")
})

