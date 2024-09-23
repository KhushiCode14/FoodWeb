const mongoose from 'mongoose';
const SignUpSchema =new mongoose.Schema({
  name:String,
  email:String
  password:String,
  
})