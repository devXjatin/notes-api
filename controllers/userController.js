const User = require("../models/user")

exports.signup = async(req, res)=>{
    try {
        console.log(req.body)
        const{username, email, password} = req.body

        //find user if exist or not
        let user = await User.findOne({email})
        
        //return if user not exist
        if(user){
            return res.status(400).json({
                success:false,
                message: "User already exists"
            })
        }

        //user created
        user = await User.create({username, email, password})

        await user.save()
        
        //generate token
        const token = user.generateToken()

        res.status(200).json({
            user: user,
            token:token
        })
        
    } catch (err) {
        
        res.status(500).json({
            success: false,
            message: err.message,
          });
    }
}

exports.signIn = async(req, res)=>{
    try {
        
    } catch (err) {

        res.status(500).json({
            success:false,
            message:err.message
        })
        
    }
}