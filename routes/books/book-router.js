const router = require('express').Router();
const Book = require('../../models/book');

const { bookRegister,bookGet,bookUpdate,bookRemove } = require('../../controller/book-router');

router.post('/book/register',bookRegister);
router.get('/book/get',bookGet);
router.put('/book/update/:id',bookUpdate);
router.delete('/book/remove/:id',bookRemove);

router.get('/getbook/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        await Book.findById({_id:id})
        .then(users => res.json(users))
        .catch(err => console.log(err));
    }catch(err){
        console.log(err);
    }
});

module.exports = router;