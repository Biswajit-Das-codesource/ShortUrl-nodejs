const User = require("../models/user")
const {v4:uuidv4}=require("uuid")
const { setuser } = require("../service/auth")
async function handleusersignup(req,res){
    const {username,email,password}=req.body

    await User.create({
        username,
        email,
        password
    })
    return res.render("login")
}

async function handleuserlogin(req,res){
    const {email,password}=req.body

   const user= await User.findOne({email,password})


   if(!user) return res.send("not found")
    const sessionid=uuidv4()
    setuser(sessionid,user)
    res.cookie("uid",sessionid)
    return res.redirect("/")
}



module.exports={
    handleusersignup,
    handleuserlogin
}