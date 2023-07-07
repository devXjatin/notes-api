const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

//route
app.use("/api/v1", require("./routes"))

app.get("/", (req, res)=>{
    res.send(`<h1>Hello world</h1>`)
})


module.exports = app