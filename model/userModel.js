const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"]
    },

    email:{
        type:String,
        required:[true, "email is required"],
        unique:true
    },

    password:{
        type:String,
        required:[true, "password is required"]
    },

    balance:{
        type:Number,
        required:[true, "balance is required"],
        default:0
    }
},{
    timestamps:true
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel

