const shortid=require("shortid")
const URL=require("../models/url")

async function handlegeneratenewurl(req,res) {

    const body=req.body
    if(!body.url) return res.status(400)
    const shortID=shortid()
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visithistory:[],
        createdby:req.user._id
    })
    return res.render("home",{
        id:shortID
    })
  
}

async function handlegetanalytics(req,res) {
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId})
    return res.json({totalclicks : result.visithistory.length,analytics: result.visithistory})
}
module.exports={
    handlegeneratenewurl,
  handlegetanalytics
}