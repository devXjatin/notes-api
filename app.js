const express = require('express')
const app = express()
const passport = require("passport");
require("./config/passport")


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())

//route
app.use("/api/v1", require("./routes"))

app.get("/", (req, res)=>{
    res.send(`<h1>Hello world</h1>`)
})


module.exports = app