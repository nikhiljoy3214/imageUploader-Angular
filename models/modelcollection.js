const mongoose=require("mongoose")

// create model for collection

// users

const users=new mongoose.model("users",{
    mobno:Number,
    uname:String,
    psw:String,
    imagearray:[]
})

module.exports={
    users
}