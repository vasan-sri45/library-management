const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');

const signup = async(req,res,next)=>{

    const{fullname,number,email,password} =req.body;

    let adminExists = await Admin.findOne({email:email});

    if(adminExists){
        res.status(400).json({message:"User already exists"});
    }

    const hashedPassword = bcrypt.hashSync(password);

    const admin = await new Admin({
        fullname,number,email,password:hashedPassword
    });   

    try{
       await admin.save()
    }catch(err){
        console.log(err);
    }
    return res.status(200).json(admin);

};

const login = async(req,res,next)=>{

    try{
        const {email,password} = req.body;
        const admin = await Admin.findOne({email});
        if(!admin){
            return res.status(500).json("User not exists");
        }
        const isPassword = bcrypt.compareSync(password,admin.password);
        if(!isPassword){
            return res.status(500).json("User not exists");
        }
        
        return res.status(200).json(admin);
    }catch(error){
        console.log(error);
    }
};

const userGet = async(req,res,next)=>{
    const {_id,fullname,email}=await Admin.findOne(req.admin._id);
    return res.status(200).json({_id,fullname,email});
};


module.exports = {signup,login};