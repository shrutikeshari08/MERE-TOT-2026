import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const URL=process.env.API_URL;
export const connectDB=async()=>{
    try{
    mongoose.connect(URL);
    console.log("Mongodb connected");
    }
    
    catch(err){
        console.error("Error",err);
    }
    
}