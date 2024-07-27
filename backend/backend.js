require("dotenv").config();
const express=require("express");
const cors=require("cors")
const app=express();
const nodemailer=require("nodemailer");
const {MongoClient}=require("mongodb");
const url=process.env.MONGO_URL;
const client=new MongoClient(url);
app.use(cors());
app.use(express.json());
let usermail;
const transporter=nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.APP_PASS
    },
    secure:true
});
app.post("/signup",async (req,res)=>{
    try{
       await client.connect();
       const blind=client.db("blind");
       const users=blind.collection("users");
       const insertion=await users.insertOne(req.body);
       const nodemailer=require("nodemailer");
        const otp=Math.round(Math.random()*999999);
    const mailData={
        from:process.env.USER_EMAIL,
        to:req.body.email,
        subject:"gvpBlind verification",
        text:`Congratulations ${req.body.username}`,
        html:`<h1>Welcome to gvpBlind ${req.body.username}</h1>
            <h3>OTP for validating your account</h3>
            <h2>${otp}</h2>`,
    }
    transporter.sendMail(mailData,(err,info)=>{
        if(err){
            res.json("invalid mail");
            console.log("error",err);
        }
        else{
            console.log(info);
        }
    })
    res.json(otp);
    }
    catch(err){
        res.status(400).send("error",err);
    }
    finally{
        await client.close();
    }
})
app.post("/login",async(req,res)=>{
    try{
        await client.connect();
        const blind=client.db("blind");
        const users=blind.collection("users");
        const loginCred=req.body;
        const result=await users.findOne({email:loginCred.username});
        if(result && result.password==loginCred.password){
            usermail=loginCred.username;
            res.json("success");
        }
        else if(!result){
            res.json("invalid user");
        }
        else{
            res.json("invalid password");
        }
     }
     catch(err){
         res.status(400).send("error",err);
     }
     finally{
         await client.close();
     }
})
app.post("/userpost",async (req,res)=>{
    const usermail=req.body.usermail;
    try{
        await client.connect();
        const blind=client.db("blind");
        const posts=blind.collection("posts");
        const users=blind.collection("users");
        const userdetails=await users.findOne({email:usermail});
        console.log(userdetails);
        const insertion=await posts.insertOne({...req.body,username:userdetails.username,branch:userdetails.branch,year:userdetails.year,time:new Date()});
    }
    catch(err){
        console.log("error",err);
    }
    finally{
        await client.close();
    }

})
app.get("/community/:community",async (req,res)=>{
    const {community}=req.params;
    try{
        await client.connect();
        const blind=client.db("blind");
        const posts=blind.collection("posts");
        const users=blind.collection("users");
        const post= await posts.find({communities:community}).toArray();
        res.json(post);
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
    }

})
app.listen(3000,()=>{
    console.log("port 3000 started");
})