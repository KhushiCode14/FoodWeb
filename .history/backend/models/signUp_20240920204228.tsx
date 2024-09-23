const mongoose from 'mongoose';
const SignUpSchema =new mongoose.Schema({
  name:String,
  password:String
})