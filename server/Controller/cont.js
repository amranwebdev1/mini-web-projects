import User from '../Model/user.model.js'
export const userLogin = async (req,res)=>{
  try{
    const user = await User.find()
    res.status(200).json(user)
  }catch(err){
    res.status(404).json({message:"user not found"})
  }
}

export const userPost = async (req,res)=>{
  try{
    const {userNumber,password} = req.body;
    const user = new User({
      userNumber,
      password
    })
   await user.save()
    res.status(200).json({message:"user login successfully"})
  }catch(err){
    res.status(404).json({message:"user not found"})
  }
}