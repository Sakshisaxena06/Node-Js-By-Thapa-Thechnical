import readline from "readline";
import fs from "fs";


const rl =readline.createInterface({
    input : process.stdin,
    output : process.stdout

})
const  fileCreation =()=>{
rl.question("Enter a file name :",(filename) =>{
    rl.question("Enter a content :",(content)=>{
        fs.writeFile(`${filename}.txt`,`${content}`,'utf-8',(err)=>{
if(err){
    console.error(`Error writing file ,${err.message}`);
    
}else{
    console.log(`File "${filename}.txt" created successfully`);
}
rl.close(); 
        })
    })
})
}
fileCreation();