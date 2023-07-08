const mongoose = require("mongoose")
require("dotenv").config({path:"../env/config.env"})
const MONGO_URI = process.env.MONGO_URI

const connectDatabase = ()=>{
    mongoose.connect(MONGO_URI,{
    }).then((con)=>{
        console.log(`Databse Connected ${con.connection.host}`)
    }).catch((err)=>{
        console.log(`Databse is not connected ${err}`);
    })
}

module.exports = connectDatabase

// mongodb+srv://devXjatin:Jatin1152@cluster0.vsecq.mongodb.net/SocioBook?retryWrites=true&w=majority

// Jatin1152