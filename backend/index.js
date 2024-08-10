require("dotenv").config();
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const userRouter=require("./routes/userRoutes");
const mongoose=require("mongoose");
app.use(express.json());
app.use(cors());
app.use("/users",userRouter);
const connection=async()=>{
   try{
    await mongoose.connect("mongodb://localhost:27017/blind");
    console.log("database connected");
   }
   catch(err){
    console.log("error connceting database",err);
   }
};
connection();
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`port ${port} started`);
});
