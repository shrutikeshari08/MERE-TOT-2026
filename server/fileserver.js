import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs/promises";
dotenv.config();
const port =process.env.PORT || 3002;
const app=express();
const userdata=[];
app.use(cors());
app.use(express.json()); //middleware
const loadUser=async()=>{
    const rdata=await fs.readFile("userdata.json","utf-8",(err,data)=>{
            if(err){
                console.log("Error",err.message);
                throw err;
            }
            console.log(data);
            //return data;

        })
        const result=JSON.parse(rdata);
        userdata.push(result);

}
loadUser();
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Welcome user"

    })
})
app.get("/users",(req,res)=>{
    try{
        res.status(200).json({message: "data received",userdata});
    }
    catch(err){
        console.error("Error",err.message);
    }
    
})
app.get("/user/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const user=userdata.find((u)=>u.id==id.toString());
        if(!user){
            return res.status(400).json({message:"user not found"})
        }
        res.status(200).json({message: "user received",user})
    }
   catch(err){
    console.error("Error",err.message);
   } 
})
app.post("/create/",async(req,res)=>{
    try{
        //const name=req.body.name;
        //const email=req.body.email;
        const {name,email}=req.body;
        const newdata={
            id:userdata.length+1*100,
            name,
            email
        }
        userdata.push(newdata);
        await fs.writeFile("userdata.json", JSON.stringify(userdata,2));
        res.status(201).json({message:"user successfully added",newdata})

    }
    catch(err){
        console.error("Error",err.message);
    }
})
app.delete("/delete/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const index=userdata.findIndex((u)=>u.id==id);
        if(index==-1){
            return res.status(400).json({message:"user not found"})
        }
        userdata.splice(index,1);
        res.status(200).json({message: "user delete successfully"})
    }
   catch(err){
    console.error("Error",err.message);
   } 
})
app.put("/edit/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const index=userdata.findIndex((u)=>u.id==id);
        if(index==-1){
            return res.status(400).json({message:"user not found"})
        }
        const {name,email}=req.body;
        userdata[index]={
            id,
            name,
            email,
        }
        
        res.status(200).json({message: "user updated successfully"})
    }
   catch(err){
    console.error("Error",err.message);
   } 
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})