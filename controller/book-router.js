const Book = require('../models/book');

const bookRegister = async(req,res,next)=>{
    const{book_name,author,language,image,publisher} =req.body;

    const bookData = await new Book({
        book_name,
        author,
        language,
        image,
        publisher
    });   

    try{
       await bookData.save()
    }catch(err){
        console.log(err);
    }
    return res.status(200).json(bookData);
};

const bookGet = async(req,res,next)=>{
    let booksData;

    try{
        booksData = await Book.find({});
    }catch(err){
        console.log(err);
    }
    return res.status(200).json(booksData);
};

const bookUpdate = async(req,res,next)=>{
    const id = req.params.id;
    const data = req.body;
    let update;

    try{
        update = await Book.findByIdAndUpdate(id,data);
    }catch(err){
        console.log(err);
    }

    return res.status(200).json(update);s
};

const bookRemove = async(req,res,next)=>{
    const id = req.params.id;
    let remove;

    try{
        remove = await Book.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    return res.status(200).json(remove);
}

exports.bookRegister = bookRegister;
exports.bookGet = bookGet;
exports.bookUpdate = bookUpdate;
exports.bookRemove = bookRemove;