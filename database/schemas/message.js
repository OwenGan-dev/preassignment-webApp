const mongoose = require('mongoose');

const message = new mongoose.Schema({
    userName: {
        type: mongoose.SchemaTypes.String,
        require: true
    },
    content: {
        type: mongoose.SchemaType.String,
        require: true
    },
    postDate: {
    }
})

module.exports = mongoose.model("messages", message)