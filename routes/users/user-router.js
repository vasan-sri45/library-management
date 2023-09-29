const router = require('express').Router();
// const {auth} = require('../../middleware/authMiddleware')
const User = require('../../models/user');

const { register,userGet,userRemove,userUpdate } = require('../../controller/user-controller');

router.post('/user/register',register);
router.get('/user/get',userGet);
router.delete('/user/remove/:id',userRemove);
router.put('/user/update/:id',userUpdate);


router.get('/getUser/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        await User.findById({_id:id})
        .then(users => res.json(users))
        .catch(err => console.log(err));
    }catch(err){
        console.log(err);
    }
});

module.exports = router;