function register(){
    return new Promise((resolve,reject)=>{
setTimeout(()=> {
console.log("Register Here");
resolve();
    },5000)
    })
    }
    
function sendEmail(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log("Email Sent");
resolve();
    },2000)
    })
    
    
}
function login(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log("Login Here");
reject("login failed");
    },1500)
    })
     
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Fetch Data");
        reject("Failed to fetch");

    },5000)

    })
    
    
}
function displayData(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log("Display data");
resolve();
    },3000);
    })
    
    
}

async function f1(){
    try{
        await register();
        await sendEmail();
        await login();
        await getData();
        await displayData();

    }
    catch(err){
console.log("Error",err);
    }
}
f1();
console.log("other application");

