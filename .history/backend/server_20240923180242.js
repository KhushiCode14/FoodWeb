// node js update kaise kare


// console based 
console.log("hello world")


// web based or application based
const http =require("http");        // built in module 
// create http server 
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // Write JSON response
  res.write(JSON.stringify({ name: "hello world", age: 45, role: "admin" }));
  
  // End the response
  res.end();
});

// start server

server.listen(3001, ()=>{
console.log("server is running on port 3001")
})
// GET: Retrieve data from the server.
