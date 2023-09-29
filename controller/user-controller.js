const User = require('../models/user');

const register = async(req,res,next)=>{
    const {fullname,number,email,city}=req.body;

    const users = await new User({
        fullname,
        number,
        email,
        city,
    });

    try{
        await users.save()
    }catch(err){
        console.log(err);
    }
    return res.status(201).json(users);
};

const userGet = async(req,res,next)=>{
    let userData;
    try{
        userData = await User.find();
    }catch(err){
        console.log(err);
    }
    return res.status(200).json(userData);
}

const userRemove = async(req,res,next)=>{
    const id = req.params.id;

    try{
        await User.findByIdAndDelete(id)
        .then(res => res.json(res))
        .catch(err => res.json(err));
    }catch(err){
        console.log(err);
    }
};


const userUpdate = async(req,res,next)=>{
    const id = req.params.id;
    const data = req.body;
    let updateData;

    const admin = await User.findById(id); 

    try{
        updateData = await User.findByIdAndUpdate(id,data);
    }catch(err){
        console.log(err);
    }
    return res.status(200).json(updateData);
}

exports.register = register;
exports.userGet = userGet;
exports.userRemove = userRemove;
exports.userUpdate = userUpdate;