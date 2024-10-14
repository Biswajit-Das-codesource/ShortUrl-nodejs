const express = require("express")
const { handlegeneratenewurl, handlegetanalytics } = require("../controller/url")
const URL = require("../models/url")
const router= express.Router()

router.get("/",async(req,res)=>{
    if(!req.user) return res.redirect("/login")
    const allurls=await URL.find({createdby:req.user._id})
    return res.render("home",{
        urls:allurls
    })
})

router.get("/signup",(req,res)=>{
    return res.render("signup")
})

router.get("/login",(req,res)=>{
    return res.render("login")
})
module.exports=router