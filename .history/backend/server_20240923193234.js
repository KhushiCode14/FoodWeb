// node js update kaise kare
// <-- node update -->
// npm update <package name >
// console based
//  console.log("hello world");

// web based or application based

// http method 

const port = 3001

const express = require('express');
const app = express()

app.use(express.json());
// http method
// get method
app.get('/',function (req, res){
  res.send('Hello this is the firat page of the line!')
})
app.post('/', function(req, res){
  res.send('This is a post request');
})

// Handle POST request
app.post('/api/users', (req, res) => {
    const { name, email } = req.body; // Extract data from the request body
    // Simulate saving the user data (e.g., to a database)
    console.log(`User created: Name - ${name}, Email - ${email}`);
    // Send a response back to the client
    res.status(201).json({ message: 'User created', user: { name, email } });
});
app.delete('/delete', function (req, res){
res.delete('This is a delete request');
})

app.listen(port, console.log("port is running " + `${port}`))