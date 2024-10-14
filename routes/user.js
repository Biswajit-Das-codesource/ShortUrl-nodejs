const express=require("express")
const { handleusersignup, handleuserlogin } = require("../controller/user.")

const router=express.Router()
 

router.post("/",handleusersignup)
router.post("/login",handleuserlogin)

module.exports=router