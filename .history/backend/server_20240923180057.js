// node js update kaise kare


// console based 
console.log("hello world")


// web based or application based
const http =require("http");        // buiilt in module 
// create http server 
const server = http.createServer((req, res)=>{
res.headersSent("Content-Type", "application/json")
res.write(JSON.string({name: "hello world", age:45, role:"admin"}));
res.end('<h2 style="text-align: center;">Hello World</h2>');
})

// start server

server.listen(3001, ()=>{
console.log("server is running on port 3001")
})
// GET: Retrieve data from the server.
