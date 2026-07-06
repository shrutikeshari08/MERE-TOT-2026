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
resolve();
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

register()
            .then(sendEmail)
            .then(login)
            .then(getData)
            .then(displayData)
            .catch((err)=>{
                console.log("Error",err);
            })

