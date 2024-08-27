const posts=require("../models/postSchema.js");
const user=require("../models/userSchema");

const addPost=async(req,res)=>{
    try{
        const postData=req.body;
        let usermail=req.body.usermail;
        console.log(postData);
           
        const userdetails=await user.findOne({usermail:usermail});
        if (!userdetails) {
            return res.status(404).json({ error: 'User not found' });
        }
        const postInsertion=await posts.create({...postData,
                                                    username:userdetails.username,
                                                    branch:userdetails.branch,
                                                    time:new Date().getTime()});
        console.log(postInsertion);
        res.status(201).json(postInsertion);
    }
    
    catch(err){
        console.log("error inserting post",err);
        res.status(400).json({error: err.message});
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
  
    try{
        let {usermail} = req.body;
        if (typeof usermail !== 'string') {
            if (usermail && typeof usermail === 'object') {
                usermail = String(usermail);
            } else {
                throw new Error('Invalid usermail provided');
            }
        }

        const feed=await posts.find().sort({time:-1});
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
const deletePost=async (req,res)=>{
    const {id}=req.params;
    console.log(req);
    try{
        const deletedpost=await posts.findByIdAndDelete(id);
        console.log(deletedpost);
        res.json(deletedpost);
    }
    catch(err){
        console.log("error deleting post",err);
    }

}
const likePost=async(req,res)=>{
    try{
        const {id}=req.params;
        const likedPost=await posts.findByIdAndUpdate(id,{$inc:{likes:1}},{new:true});
        console.log(likedPost);
    }
    catch(err){
        console.log("ERROR LIKING POST".err);
    }
}
const userPosts=async (req,res)=>{
    const {usermail}=req.params;
    try{
        const userposts=await posts.find({usermail:usermail}).sort({time:-1});
        console.log(userPosts);
        const updatedPost=userposts.map((post)=>{
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
        console.log("error getting userpost",err);
    }
}
module.exports.addPost=addPost;
module.exports.getPost=getPost;
module.exports.getFeed=getFeed;
module.exports.deletePost=deletePost;
module.exports.likePost=likePost;
module.exports.userPosts=userPosts;