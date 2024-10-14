

const sessionidtomap=new Map()

function setuser(id,user){
    sessionidtomap.set(id,user)
}

function getuser(id){
    return sessionidtomap.get(id)
}

module.exports={
    setuser,
    getuser
}