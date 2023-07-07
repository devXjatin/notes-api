const mongoose = require("mongoose")
require("dotenv").config({path:"../env/config.env"})
const MONGO_URI = process.env.MONGO_URI

const connectDatabase = ()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/notes_api",{
    }).then((con)=>{
        console.log(`Databse Connected ${con.connection.host}`)
    }).catch((err)=>{
        console.log(`Databse is not connected ${err}`);
    })
}

module.exports = connectDatabase