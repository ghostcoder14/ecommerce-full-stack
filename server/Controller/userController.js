import User from '../Model/userSchema.js';

export const userSignUp = async(request , response) => {
   try {
    const exist = await User.findOne({username  : request.body.username});

    console.log(request.body )
     if(exist){
      return response.status(401).json({message : 'Username allready exists'})
     }
   

   const users = request.body;
   const newUser = new User(users);
   await newUser.save();

   response.status(200).json({message : User})
   } catch (error) {
    response.status(500).json({message : error.message})
   }
}