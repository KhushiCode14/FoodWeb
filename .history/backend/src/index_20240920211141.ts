import express from 'express';
// import express = require('express');
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import SignUpModel from '../models/signUp';


dotenv.config();

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/FoodWeb");

app.post("/register", (req, res) => {
  SignUpModel.create(req.body)
  .then(() => {
    console.log("Connected to MongoDB");
  }).catch(err => {
    console.error("MongoDB connection error:", err);

});
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});