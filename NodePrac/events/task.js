const EventEmitter = require("events");
const emitter = new EventEmitter();


const eventCounts = {
    "user-login":0,
    "user-purchase":0,
    "profile-update":0,
    "user-layout":0
}
//create an event handler



emitter.on("user-login" ,(username) => {
    console.log(`${username} just logged in`);
    // let prev = eventCounts["user-login"];   // previous value
  eventCounts["user-login"]++;            // increase
//   let curr = eventCounts["user-layout"];   // new value

  console.log(username + " logged in | " + prev  + curr);
})

emitter.on("user-purchase",(username,item) => {
    eventCounts["user-purchase"]++;
    console.log(`${username} just purchased ${item}`);
})

emitter.on("profile-update",(username,email)=>{
    eventCounts["profile-update"]++;
    console.log(`${username} just updated ${email}`);
})

emitter.on("user-layout",(username) =>{
    eventCounts["user-layout"]++;
    console.log(`${username} has been logged out`);
    
})
// emit events 
emitter.emit("user-login","Sakshi");
emitter.emit("user-purchase","Sakshi","Laptop");
emitter.emit("profile-update","Sakshi","email");
emitter.emit("user-layout","Sakshi")

emitter.on("summary",() => console.log( "Evenst Summary" ,eventCounts));

emitter.emit("summary")
