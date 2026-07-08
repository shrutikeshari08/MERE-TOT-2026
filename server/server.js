import http from "http";
import os from "os";
const userdata=[
    {
        id:101,
        name:"Shruti Keshari",
        email:"shruti.keshari@abes.ac.in"
    },
    {
        id:102,
        name:"Nabh",
        email:"nabh.narayan@gmail.com"
    }
];
const server= http.createServer((req,res)=>{
    const url= req.url;
    const method=req.method;
    if(url=="/msg" && method=="GET"){
        res.write("Welcome user in this new page");
        res.end();
    }
    else if(url=="/system" && method=="GET"){
        const sysdata={
            platform:os.platform(),
            arch:os.arch(),
            CPU:os.cpus().length,
            IP: os.networkInterfaces(),
            TotalMemory:(os.totalmem()/1024**3).toFixed(2)+"GB",
            freeMemory:(os.freemem()/1024**3).toFixed(2)+"GB"

        }
        res.end(JSON.stringify(sysdata));

    }
    else if(url=="/users" && method=="GET"){
        res.end(JSON.stringify(userdata));


    }
    else if(url.startsWith("/user/") && method=="GET"){
        const id=url.split("/")[2];
       // res.write(id);
        const user=userdata.find((u)=>u.id==id);
        if(!user){
            return res.end("user not found");
        }
        res.end(JSON.stringify(user));

    }
    else if(url=="/create" && method=="POST"){
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end", ()=>{
            const data=JSON.parse(body);
            const newUser={
            id:data.id,
            name:data.name,
            email:data.email
        }
        userdata.push(newUser);
        })
        
        res.statusCode=201;
        res.end("user created successfully");
    }
    else if(url.startsWith("/delete/") && method=="DELETE"){
        const id=url.split("/")[2];
        const userindex=userdata.findIndex((u)=>u.id==id);
        if(userindex==-1){
            return res.end("user not found");
        }
        userdata.splice(userindex,1);
        res.end("user delete successfully");
    }
    else if(url.startsWith("/edit/") && method=="PUT"){
        const id=url.split("/")[2];
        const index=userdata.findIndex((u)=>u.id==id);
        if(index==-1){
            return res.end("user not found");
        }
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end", ()=>{
            const data=JSON.parse(body);
            userdata[index]={
                id,
            name:data.name,
            email:data.email
        }
        
        })
        
        res.end("user updated successfully");

    }
    else{
        res.statusCode="404";
        res.end("Error page");

    }
})
server.listen(3001,()=>{
    console.log("Server is running on 3001");
})