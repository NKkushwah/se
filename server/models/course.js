const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    duration:String,
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            require:true
        }
    }

})

const CourseModel = mongoose.model('course',CourseSchema)

module.exports = CourseModel