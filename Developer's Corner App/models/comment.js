const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentText: {
        type: String,
        required: true
    },
    commentBy: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now },

});


const commentModel = mongoose.model('commentModel', commentSchema);

module.exports = commentModel;