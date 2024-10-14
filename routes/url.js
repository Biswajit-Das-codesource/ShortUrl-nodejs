const express = require("express")
const { handlegeneratenewurl, handlegetanalytics } = require("../controller/url")
const router= express.Router()



router.post("/",handlegeneratenewurl)

router.get("/analytics/:shortId",handlegetanalytics)

module.exports=router