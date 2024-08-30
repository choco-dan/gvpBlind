const user=require("../models/userSchema");
const nodemailer=require("nodemailer");
const OTP=(usermail,username)=>{
    const transporter=nodemailer.createTransport({
        port:465,
        host:"smtp.gmail.com",
        auth:{
            user:process.env.USER_EMAIL,
            pass:process.env.APP_PASS
        },
        secure:true
    });
    const otp=Math.floor(Math.random()*999999);
    const mailData={
        from:process.env.USER_EMAIL,
        to:usermail,
        subject:"gvpBlind verification",
        text:`Congratulations ${username}`,
        html:`<h1>Welcome to gvpBlind ${username}</h1>
            <h3>OTP for validating your account</h3>
            <h2>${otp}</h2>`,
    }
    transporter.sendMail(mailData,(err,info)=>{
        if(err){
            res.json("invalid mail");
            console.log("nodemailer error",err);
        }
        else{
            console.log(info);
            console.log("b" ,otp);
        }
    })
    return otp;

}
const addUser=async(req,res)=>{
    console.log(req.body);
    const usermail=req.body.usermail;
        const userdetails=await user.findOne({usermail:usermail});
        if(userdetails){
            res.json("already user registered");
        }
        else{
            try{
                const userInsertion=await user.create(req.body);
                const otp=OTP(req.body.usermail,req.body.username);
                console.log("a ",otp);
                res.json(otp);
            }
            catch(err){
                console.log("error a inserting user",err);
            }
        }
};
const authUser=async(req,res)=>{
    const {usermail,password}=req.body;
    console.log(req.body);
    try{
        const userdetails=await user.findOne({usermail:usermail});
        console.log(userdetails);
        if(!userdetails){
            res.json("Invalid user");
        }
        else if(userdetails && userdetails.password==password){
            res.json("valid user");
        }
        else{
            res.json("incorrect password");
        }
    }
    catch(err){
        console.log("error authenticating user",err);
        res.send("failure");
    }
}
const fetchUser=async (req,res)=>{
    const {usermail}=req.params;
    console.log(req.params);
    try{
        const userdetails=await user.findOne({usermail:usermail});
        console.log(userdetails);
        const {password,...postedBy}=userdetails.toObject();
        res.json(postedBy);
    }
    catch(err){
        console.log("error finding user",err);
    }
}
module.exports.addUser=addUser;
module.exports.authUser=authUser;
module.exports.fetchUser=fetchUser;