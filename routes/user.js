const express = require("express")
const { signup } = require("../controllers/userController")
const userRouter = express.Router()

//signup route
userRouter.route("/signup").post(signup)

userRouter.route("/signin").post()


module.exports = userRouter