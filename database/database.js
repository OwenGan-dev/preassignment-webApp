const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/User')
    .then(() => {
        console.log("connected to MongoDB")
    })
    .catch(
        (err) => {
            console.log(err)
        })
