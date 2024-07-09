
import  {student}  from "../config/models/student.js" ;
import  { tutor } from "../config/models/tutor.js";
import {generateToken} from "../utils/jwt.js"

import jwt from "jsonwebtoken";
import pkg from 'jsonwebtoken';
import bcrypt from "bcrypt";

import cookieParser from "cookie-parser";



export const Signup = async (req, res, next) => {
    const role = req.body.role
    const refresh_secret = '1234refrehtoken'; 
    const acess_secret = '1234accesstoken'; 

  if(role=="student"){
    try {
      const {email,password } = req.body;
      const existingUser = await student.findOne({ email });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const hashedpassword = await bcrypt.hash(password, 10);
      const user = await student.create({email,role ,password:hashedpassword });
      const payload = { id: user._id, email: user.email, role: user.role };
      const refresh_token= jwt.sign(payload, refresh_secret, { expiresIn: '1h' });
      user.refresh_token=refresh_token;
      const acess_token= jwt.sign(payload, acess_secret, { expiresIn: '1d' });
        res.cookie("jwt", acess_token, {
        withCredentials: true,
        httpOnly: false,
        secure:true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res
        .json({ message: "User signed in successfully", success: true,role:user.role, user });
      next();
    } catch (error) {
      console.error(error);
    }

    }
    else if(role=="tutor"){
      try {
        const {email,role,password } = req.body;
        const existingUser = await tutor.findOne({ email });
        if (existingUser) {
          return res.json({ message: "User already exists" });
        }
    
        const hashedpassword = await bcrypt.hash(password,10);
        
        const user = await tutor.create({email,role,password:hashedpassword });
        const payload = { id: user._id, email: user.email, role: user.role };
      
        const refresh_token= jwt.sign(payload, refresh_secret, { expiresIn: '1h' });
        const acess_token= jwt.sign(payload, acess_secret, { expiresIn: '1d' });
          res.cookie("jwt", acess_token, {
          withCredentials: true,
          httpOnly: false,
          secure:true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        res
          .json({ message: "User signed in successfully", success: true,role:user.role, user });
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
  const refresh_secret = '1234refrehtoken'; 
        const acess_secret = '1234accesstoken'; 
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
 const payload = { id: user._id, email: user.email, role: user.role };
 const refresh_token= jwt.sign(payload, refresh_secret, { expiresIn: '1h' });
 user.refresh_token=refresh_token;
 const acess_token= jwt.sign(payload, acess_secret, { expiresIn: '1d' });
   res.cookie("jwt", acess_token, {
   withCredentials: true,
   httpOnly: false,
   secure:true,
   maxAge: 24 * 60 * 60 * 1000,
 });
res.status(201).json({ message: "User logged in successfully",acess_token:acess_token, success: true ,role:user.role,user:user});
// next()
} catch (error) {
console.error(error);
}
}


export const logout=async(req,res,next)=>{
  res.clearCookie("jwt");
  res.send("logged out")
}

export const refresh=async(req,res,next)=>{
  const acess_token=req.cookies.jwt;
  const refresh_secret = '1234refrehtoken'; 
  const acess_secret = '1234accesstoken'; 
  if(!acess_token){
    return res.status(401).json({message:"no token"})
  }
  jwt.verify(acess_token,refresh_secret,(err,user)=>{
    if(err){
      return res.status(403).json({message:"invalid token"})
    } 
    const payload = { id: user.id, email: user.email, role: user.role };
    const refresh_token= jwt.sign(payload, refresh_secret, { expiresIn: '1h' });
    res.cookie("jwt", refresh_token, {  
      withCredentials: true,
      httpOnly: false,
      secure:true,
      maxAge: 24 * 60 * 60 * 1000,  
    });
    res.send("refreshed")
  })
}




