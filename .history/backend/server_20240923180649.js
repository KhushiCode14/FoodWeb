// node js update kaise kare

 // console based
    //  console.log("hello world");

// web based or application based
const http = require("http"); // built in module
// create http server
// createServer method initializes a new server.
const server = http.createServer((req, res) => {
  // res.setHeader(name, value);
  // name: A string representing the name of the header (e.g., 'Content-Type').
  // value: The value for the header (e.g., 'application/json').
  res.setHeader("Content-Type", "application/json");

  // Write JSON response
  res.write(JSON.stringify({ name: "hello world", age: 45, role: "admin" }));

  // End the response
  res.end();
});

// start server

server.listen(3001, () => {
  console.log("server is running on port 3001");
});
// GET: Retrieve data from the server.
