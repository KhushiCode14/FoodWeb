// node js update kaise kare


// console based 
console.log("hello world")


// web based or application based
const http =require("http");        // buiilt in module 
// create http server 
const server = http.createServer((req, res)=>{
res.headersSent("Content-Type", "application/json")
})
// GET: Retrieve data from the server.
