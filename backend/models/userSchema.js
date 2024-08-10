const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    usermail:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    year:Number,
    branch:String,

})
const users=new mongoose.model("users",userSchema);
module.exports=users;