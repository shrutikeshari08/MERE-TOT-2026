import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import router from "./routes/userRoutes.js";
dotenv.config();
const port=process.env.PORT || 3004;
const app=express();
connectDB();
app.use(express.json())
app.use(router);
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})