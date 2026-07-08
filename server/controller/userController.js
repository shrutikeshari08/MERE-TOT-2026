import express from "express";
import user from "../models/user.js";
export const createUser=async(req,res)=> {
    try{
        const {name,email}=req.body;
        const newUser={
            id:Date.now(),
            name,
            email
        }
        const User=new user(newUser);
        await User.save();
        res.status(201).json({message: "user created",User})

    }
    catch(err){
        console.log("Error",err.message);
    }

}