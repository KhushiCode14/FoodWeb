// node js update kaise kare
// <-- node update -->
// npm update <package name >
// console based
 console.log("hello world");
 console.warn("hello world");

// web based or application based
const http = require('http');
http.createServer(Listener);
listener = function (request, response) {
  // Send the HTTP header 
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/html'});
 
  // Send the response body as "Hello World"
  response.end('<h2 style="text-align: center;">Hello World</h2>');
};
server = http.createServer(listener);
server.listen(3001);

// Console will print the message

console.log('Server running at http://127.0.0.1:3001/');