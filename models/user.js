const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config({path: "../env/config.env"})

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true }
);

//hashed password before saving

userSchema.pre("save", async function(next){
  if(!this.isModified("password")){
    next()
  }
  const salt = await  bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

//match login password
userSchema.methods.matchPassword = async function(password){
  return await bcrypt.compareSync(this.password, password)
}

//generateToken
userSchema.methods.generateToken = function(){
  return jwt.sign({
    id: this._id,
    email: this.email,
    username: this.username
  }, process.env.JWT_SECRET)
}

module.exports = mongoose.model("user", userSchema)
