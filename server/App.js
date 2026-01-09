import express from "express";
import connectDB from './db.js';
import UserRouter from './Router/user.router.js';

import cors from 'cors';
const app = express();
app.use(cors())
connectDB()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// user router
app.use("/user",UserRouter);
//info route 

//testing
app.get("/",(req,res)=>{
  res.send("Hi my I am Amran")
})
//error route 
app.use((req,res,next)=>{
  console.log("404 route error")
})
app.use((err,req,res,next)=>{
  console.log("500 server error");
})
export default app;