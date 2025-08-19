const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
    {
        course :{
            type : mongoose.Schema.Types.ObjectId,
            ref: "course",
            required: true,

        },
        user :{
            type
        }
    }
)