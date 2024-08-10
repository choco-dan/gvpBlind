const posts=require("../models/postSchema.js");
const user=require("../models/userSchema");

const addPost=async(req,res)=>{
    try{
        const postData=req.body;
        const usermail=req.body.usermail;
        console.log(postData);
        const userdetails=await user.findOne({usermail:usermail});
        const postInsertion=await posts.create({...postData,username:userdetails.username,branch:userdetails.branch,time:new Date().getTime()});
        console.log(postInsertion);
    }
    catch(err){
        console.log("error inserting post",err);
    }
}
const getPost=async(req,res)=>{
    const {community}=req.params;
    try{
        const postData=await posts.find({communities:community}).sort({time:-1});
        const updatedPost=postData.map((post)=>{
            const currTime=new Date().getTime();
            const prevTime=post.time;
            const difftime=currTime-prevTime;
            const timespan=calcTime(difftime);
            const uppost={...post.toObject(),timespan:timespan};
            // console.log("upp",uppost);
            
            return uppost;
        })
        res.json(updatedPost);
        console.log(updatedPost);
    }
    catch(err){
        console.log("error getting community post",err);
    }

}
function calcTime(ms) {
    // Constants for time conversions
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    const time ={
        years: years,
        days: days % 365, 
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60 
    };
    let timespan="";
    for(let i in time){
        if(time[i]!==0){
            timespan=`${time[i]} ${i}`;
            break;
        }
    }
    return timespan;
}

const getFeed=async(req,res)=>{
    const {usermail}=req.body;
    try{
        const feed=await posts.find({usermail:usermail}).sort({time:-1});
        const updatedPost=feed.map((post)=>{
            const currTime=new Date().getTime();
            const prevTime=post.time;
            const difftime=currTime-prevTime;
            const timespan=calcTime(difftime);
            const uppost={...post.toObject(),timespan:timespan};
            // console.log("upp",uppost);
            
            return uppost;
        })
        res.json(updatedPost);

    }
    catch(err){
        console.log("error getting feed",err);
    }
}
module.exports.addPost=addPost;
module.exports.getPost=getPost;
module.exports.getFeed=getFeed;