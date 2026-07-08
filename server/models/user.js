import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const userSchema= new mongoose.Schema(
    {
        id:{
            type: Number,
            require: true

        },
        name: {
            type: String
        },
        email:{
            type: String
        }
    }
    ,{
        Timestamp:true
    }
)
export default mongoose.model("user",userSchema);