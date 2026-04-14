const mongoose = require('mongoose');
const dotenv = require('dotenv');


//mongoDB database connection function
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongoDB database ${mongoose.connection.host}`);
    }catch(e){
        console.log('DB error',e);
    }
}

//export
module.exports = connectDB;