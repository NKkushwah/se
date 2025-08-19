const mongoose = require("mongoose");


const connectDB = async ()=>{
    return mongoose.connect(process.env.live_url)

    .then(()=>{
        console.log('Database connection succesful')
    })
    .catch((error)=>{
        console.log(error);
    });
};
module.exports = connectDB;