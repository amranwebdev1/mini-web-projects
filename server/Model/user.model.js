import mongoose from 'mongoose';

const userScema = new mongoose.Schema({
  userNumber:{
    type:Number,
  },
  password:{
    type:String
  }
})
const User = mongoose.model("Login",userScema);
export default User