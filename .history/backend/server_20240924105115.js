// import required modules
  //  1. const express =require('express')
  //  2.  import express from 'express'
import http from 'http';
const server = http.createServer(function (req, res) {
  res.send("hello world")
  console.log("this is cosole project")
})
