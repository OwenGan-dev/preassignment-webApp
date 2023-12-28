// imports
const express = require('express')
const app = express()
const port = 3001

// listen on port 3001
app.listen(port, () => console.info(`Running Express Server on port ${port}`))