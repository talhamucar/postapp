const { strict } = require('assert');
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    content: { type: String, required: true}
});

module.exports = mongoose.model('Post', postSchema);