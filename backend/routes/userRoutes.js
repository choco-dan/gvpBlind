const express=require("express");
const {addUser,authUser,fetchUser}=require("../contoller/users");
const app=express();
const router=express.Router();
console.log("router page");
router.post("/signup",addUser);
router.post("/login",authUser);
module.exports=router;