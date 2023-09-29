const mongoose = require('mongoose');


const databaseConnection = async()=>{
    try{
        await mongoose.connect(process.env.DB_URI).then(()=>{
            console.log('database is connected');
        }).catch(err => console.log(err));
        
    }catch(error){
        console.log(error);
        console.log('database is not connected');
    }
};


module.exports = databaseConnection;
