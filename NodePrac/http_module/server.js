
const http = require("http");
const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Hello World i am sakshi bhatnagar </h1>");
        res.end();
    }
    
    if(req.url === '/about'){
        res.write("I am sakshi bhatnagar.");
        res.end();
    }
     
     
    
     if(req.url === '/source'){
        res.write("I am sakshi bhatnagar yooooooo.");
        res.end();
     }
});
// created web server 

const PORT = 4000;
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);  
})                   
