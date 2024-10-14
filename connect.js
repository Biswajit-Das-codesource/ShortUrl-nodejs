const mongoose=require("mongoose")
async function connectmongo(url) {
    return mongoose.connect(url)
}

module.exports={
    connectmongo
}