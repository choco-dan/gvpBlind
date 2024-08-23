const { date } = require("joi");
const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    usermail:{
        type: String,
        required:true,
    },
    username:{
        type: String,
        required:true,
    },
    branch:String,
    title:String,
    post:{
        type:String,
        required:true,
    },
    communities:[String],
    contentHTML:String,
    time:Number,
    likes:{
        type:Number,
        default:0,
    },
})
const post=new mongoose.model("posts",postSchema);
module.exports=post;