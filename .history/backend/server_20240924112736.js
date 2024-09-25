// import required modules
  //  1. const express =require('express')
  //  2.  import express from 'express'


  // create server


  var fs = require("fs");
  fs.readFile('input.txt', function (err, data) {
     if (err) return console.error(err);
     console.log(data.toString());
  });
  
  let i = 1;
  while (i <=5) {
    console.log("The number is " + i);
    i++;
  }