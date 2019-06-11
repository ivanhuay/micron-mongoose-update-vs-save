'use strict';
const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    subtitle: String,
    tag: [String],
    tagCount: Number
});

module.exports = mongoose.model('Books', BooksSchema);
