const express = require("express")
const router = express.Router()

//user route
router.use("/user", require("./user"))

//note route
router.use("/note", require("./note"))


module.exports = router
