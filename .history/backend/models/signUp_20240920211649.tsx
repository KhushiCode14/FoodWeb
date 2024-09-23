import  mongoose from 'mongoose';
const SignUpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Unique email
  password: { type: String, required: true },
});

const SignUpModel = mongoose.model("SignUp",SignUpSchema);
export default SignUpModel;
