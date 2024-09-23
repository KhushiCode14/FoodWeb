import  mongoose from 'mongoose';
const SignUpSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
});


const SignUpModel = mongoose.model("SignUp",SignUpSchema);
export default SignUpModel;
