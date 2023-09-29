const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    book_name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    }
});

const Book = mongoose.model('Books',bookSchema);

module.exports = Book;
