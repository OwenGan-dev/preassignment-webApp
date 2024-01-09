const mongoose = require('mongoose');

const message = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    postDate: {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model("messages", message)