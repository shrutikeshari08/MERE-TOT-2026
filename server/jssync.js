function register(cb){
    setTimeout(()=> {
console.log("Register Here");
cb();
    },5000)

    }
    
//     function waitforfiveseconds(delay){
// const ms=Date.now()+delay;
// while(Date.now()<ms){

// }
    // }
function sendEmail(cb){
    setTimeout(()=>{
console.log("Email Sent");
cb();
    },2000)
    
}
function login(cb){
    setTimeout(()=>{
console.log("Login Here");
cb();
    },1500)
    
}
function getData(cb){
    setTimeout(()=>{
        console.log("Fetch Data");
        cb();

    },5000)
    
}
function displayData(){
    setTimeout(()=>{
console.log("Display data");
    },3000);
    
}
register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData()
            })
        })
    })
});

