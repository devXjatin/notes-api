const express = require("express")
const { signup, signIn } = require("../controllers/userController")
const userRouter = express.Router()

//signup route
userRouter.route("/signup").post(signup)

userRouter.route("/signin").post(signIn)


module.exports = userRouter