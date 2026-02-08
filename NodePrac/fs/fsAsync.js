// to write red delete update of file with async

const fs = require('fs');
const path = require('path');
const fileName = 'fsAsync.tst'
const filePath = path.join(__dirname,fileName);
console.log(filePath);
const fileWrite = fs.writeFile(filePath,"This is me Sakshi ",'utf-8' ,
    (err)=>{
 if(err)
 
    console.err(err);
else console.log("File has been saved");

})

//read 
const readFile = fs.readFile(filePath,'utf-8', (err,data)=>{
    if (err) console.error(err);
    else console.log(data);
    
})

//apend
 const appendFile = fs.appendFile(filePath,"\nThis is sakshi 2 here nice to meet you",'utf-8',(err)=>{
    if(err) console.err(err);
    else console.log("File has been appended");
    
 })
    
