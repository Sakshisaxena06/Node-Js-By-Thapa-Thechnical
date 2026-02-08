const fs = require('fs');
const path = require('path');
 const fileName = 'test.txt';
 const filePath = path.join(__dirname,fileName);
 console.log(__dirname);
 
 console.log(filePath);
  const writeFile=fs.writeFileSync(filePath,"This is sakshi 1","utf-8");
  console.log(writeFile);


  // to read file
  const readFile =fs.readFileSync(filePath,"utf-8");
  console.log(readFile);

 // append file or add any thing
 const appendFile = fs.appendFileSync(fileName,"\n This is Sakshiiii" ,"utf-8");
 console.log(appendFile);

// to delete a file 

// const fileDelete = fs.unlinkSync(filePath);
// console.log(fileDelete);
  

// update a file name or rename 

const updateFileName = 'update.tst';
const newFilePath = path.join(__dirname,updateFileName);
console.log(newFilePath);
const renameFile = fs.renameSync(fileName,newFilePath);
console.log(renameFile);


  