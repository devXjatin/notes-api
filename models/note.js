const mongoose = require("mongoose")
const user = require("./user")

const noteSchema = mongoose.Schema({
    titele:{
        type:String,
        required: true
    },

    description:{
        type:String, 
        required: true
    },

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

module.exports = mongoose.model("notes", noteSchema)