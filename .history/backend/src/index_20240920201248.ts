import express from 'express';
// import express = from('express');
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
