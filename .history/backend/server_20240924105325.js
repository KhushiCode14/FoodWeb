// import required modules
  //  1. const express =require('express')
  //  2.  import express from 'express'
const http = require('http')
const server = http.createServer(function (req, res) {
  res.send("hello world")
  console.log("this is cosole project")
})
console.log("this  is cosole project")