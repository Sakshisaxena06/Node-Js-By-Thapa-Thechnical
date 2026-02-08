//Import EventEmitter class
const EventEmitter = require("events");
//create an instance of eventEmitter

const emitter = new EventEmitter();

//create an event handler
emitter.on("greet",(user)=>{
    console.log(`Hello Vinod Thapa ${user}`);
    
});
emitter.emit("greet", 'helo everyone');