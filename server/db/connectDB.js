const mongoose = require("mongoose");
const live_url ="mongodb+srv://nandkishorek717:Nandu098@cluster0.xsggdxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async ()=>{
    return mongoose.connect(live_url)

    .then(()=>{
        console.log('Database connection succesful')
    })
    .catch((error)=>{
        console.log(error);
    });
};
module.exports = connectDB;