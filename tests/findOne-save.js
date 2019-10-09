'use strict';
const mongoose = require('mongoose');
const Books = require('../models/books');
function beforeAll() {
    return mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
        .then(() => {
            const newBook = new Books({title:'Book 1'});
            return newBook.save();
        });
}
function afterAll() {
    return Books.deleteMany({});
}

let i = 1;
function test() {
    return Books.findOne({title:'Book 1'})
        .then((book) => {
            i++;
            book.subtitle = `Book ${i}`;
            return book.save();
        });
}

module.exports = {
    test,
    beforeAll,
    afterAll
};
