import express from 'express';
// import express = require('express');
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());


  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
