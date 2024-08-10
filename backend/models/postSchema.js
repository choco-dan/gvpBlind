const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    usermail:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    branch:String,
    year:Number,
    title:String,
    post:{
        type:String,
        required:true,
    },
    communities:[String],
    
})
const post=new mongoose.model("posts",postSchema);
module.exports=post;