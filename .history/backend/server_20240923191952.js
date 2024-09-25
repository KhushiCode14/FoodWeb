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
// http method
app.get('/',function (req, res){
  res.send('Hello this is the firat page of the line!')
})

app.listen(port, console.log("port is runnin " + `${port}`))