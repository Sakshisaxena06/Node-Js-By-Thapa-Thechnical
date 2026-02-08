
// we can also write require('fs/promises ') so later we can use only fs by not fs.pr
const fs= require('fs');

const path = require('path');
// console.log(path);

const fileName= 'fspromises.txt';
const filePath= path.join(__dirname,fileName);
const file = __dirname

// fs.promises
// .readdir(file)
// .then((data) => console.log(data))
// .catch((err) => console.error(err));
 

// it tells how many file in this directory or in ths folder

const filePath1 = __dirname;
fs.promises
.readdir(filePath1)
.then((data ) => console.log(data))
.catch((err)=> console.log(error)
)


fs.promises
.writeFile(filePath,"This is me sakshi here ..",'utf-8')
.then(console.log('File has created successfully !'))
.catch((err)=> console.log(error));
   
// read file
fs.promises
.readFile(filePath,'utf-8')
.then((data) => console.log(data))
.catch((err) => console.error(err))
 
// append File
 fs.promises
 .appendFile(filePath,"\nI am a btech student ", 'utf-8')
 .then( console.log("File has been appended"))
 
 .catch((err) => console.error(err))
 
 //delete
 fs.promises
 .unlink(filePath)
 .then(console.log("File has been deleted"))
 .catch((err) => console.error(err));