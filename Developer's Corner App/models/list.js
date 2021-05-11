const mongoose = require('mongoose');




const listSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    stname: {
        type: String,
        required: true
    },
    titleBar: {
        type: String,
        required: true
    },
    createdAt: { type: String },
    email: {
        type: String,
        required: true
    }

});


const ListModel = mongoose.model('ListModel', listSchema);

module.exports = ListModel;