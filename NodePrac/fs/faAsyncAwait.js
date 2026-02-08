const path=require('path');
const fs = require('fs');
 const fileName = 'faAsyncAwait.txt';
 const filePath = path.join(__dirname,fileName);
 const filePath1 = __dirname;
 

//  fs.promises
//  .readdir(filePath1)
//  .then((data ) => console.log(data))
//  .catch((err)=> console.log(error)
//  )
 
 
//  const readFolder = async () =>{
//     try {
//       const data = await fs.promises.readdir(filePath1)
//        console.log(data);
       
        
//     } catch (error) {
//         console.log(error);
        
//     }
//  };
//  readFolder();


 //write by function call

//  const writeFileEx = async()=>{
// try {
//     const data = await fs.promises.writeFile(filePath,"This is me sakshi here ..",'utf-8')
//     console.log(data);
    
// } catch (error) {
//     console.log(error);
    
// }
//  }
//  writeFileEx();

// to append a file by function call
const Append = async()=>{
    try {
        const data = await fs.promises.appendFile(filePath,"\nI am a btech student ", 'utf-8')
        console.log(data);
    } catch (error) {
        
    }
}
Append();
//to delete
//  const deleteFile = async()=>{
//     try {
//         const data = await fs.promises.unlink(filePath)
//         console.log(data);
//     } catch (error) {
        // console.log("Error : ",error.message);
        
//     }
//  }
//  deleteFile();