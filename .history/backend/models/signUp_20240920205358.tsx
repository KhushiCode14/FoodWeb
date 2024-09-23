import  mongoose from 'mongoose';
const SignUpSchema =new mongoose.Schema({
  name:String,
  email:String,
  password:String
  
})
const SignUpModel = mongoose.model("SignUp",SignUpSchema);
export default SignUpModel;
