
import  {student}  from "../config/models/student.js" ;
import  { tutor } from "../config/models/tutor.js";
import {generateToken} from "../utils/jwt.js"


import bcrypt from "bcrypt";

import cookieParser from "cookie-parser";



export const Signup = async (req, res, next) => {
    const role = req.body.role

  if(role=="student"){
    try {
      const {name,email,role,password } = req.body;
      const existingUser = await student.findOne({ email });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      password = await bcrypt.hash(password, 12);
      const user = await student.create({name,email,role ,password });
      const token = generateToken(student._id);
   

      
      // res.cookie("token", token, {
      //   withCredentials: true,
      //   httpOnly: false,
      // });
      res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
      next();
    } catch (error) {
      console.error(error);
    }

    }
    else if(role=="tutor"){
      try {
        const {name,email,role,password } = req.body;
        const existingUser = await tutor.findOne({ email });
        if (existingUser) {
          return res.json({ message: "User already exists" });
        }
    
        const hashedpassword = await bcrypt.hash(password,10);
        
        const user = await tutor.create({name,email,role,password:hashedpassword });
        const token = generateToken(user._id);
      
  
        
        // res.cookie("token", token, {
        //   withCredentials: true,
        //   httpOnly: false,
        // });
        res
          .status(201)
          .json({ message: "User signed in successfully", success: true, user });
        // next();
      } catch (error) {
        console.error(error);
      }
    }
    else{
      res.send("invalid role")
    }
   

};



export const login=async(req,res,next)=>{

 try{
  const {email,password,role}=req.body;
 if(!email||!password||!role){
  return res.json({message:"all fields are requried"})
 }
let user;
 if(role=='tutor'){
   user=await tutor.findOne({email});
 }
 else if(role=='student'){
   user=await student.findOne({email});
 }
 else{
  res.send("invalid role");
 }

 if(!user){
  return res.json({message:"email not found"})
 }
 const auth= await bcrypt.compare(password,user.password)
 if(!auth){
  return res.json({message:"Incorrect password or email"})
 }
 const token=generateToken(user._id);
//  res.cookie("token", token, {
//   withCredentials: true,
//   httpOnly: false,
// });
res.status(201).json({ message: "User logged in successfully", success: true });
// next()
} catch (error) {
console.error(error);
}
}





