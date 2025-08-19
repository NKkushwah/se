const UserModel=require("../models/user")
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
class UserController{
    static register = async(req,res)=>{
        try {
            const {name,email,password}=req.body
            const emailcheck = await UserModel.findOne({email})
            if(emailcheck){
                return res.status(400).json({message:"email already registered"});
            }
            //hash password
            const hashPassword= await bcrypt.hash(password,10)
            const data = await UserModel.create({
                name,
                email,
                password:hashPassword
            })
            res.json({
                data,
                msg:"user register success"
            })
            // console.log(req.body)
        } catch (error) {
            console.log(error)
        }
    }
    static login = async(req,res)=>{
        try {
            const {name,email,password}=req.body
            const user = await UserModel.findOne({email})
            if(!user){
                return res.status(400).json({message:"invalid credentials"});
            }
            const isMatch= await bcrypt.compare(password,user.password)
            // console.log(isMatch)
           if(!isMatch){
            return res.status(400).json({messqage:"invalid credentials"})
           }
           //token create
           const token = jwt.sign({ID:user._id},'Nandu@1234')
           console.log(token)
           //send token in http-token only
           res.cookie("token",token,{
            httpOnly:true,
           })
           res
           .status(200)
           .json({message:"login successful"})

        } catch (error) {
            console.log(error)
        }
    }
    static profile = async(req,res)=>{
        try {
            console.log("hello profile")
        } catch (error) {
            console.log(error)
        }
    }

    static logout = async(req,res)=>{
        try {
            res.clearCookie('token')
            res.status(200).json({message:"logout succesfully"})
        } catch (error) {
            
        }
    }

    // static changepassword = async(req,res)=>{

    // }

}

module.exports = UserController