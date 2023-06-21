
const checkID = (req,res,next,val)=>{
    console.log(`Checking Id...`)
    console.log(`params middleware says : tour id is ${val}`)
    console.log(`ID is valid`)
    next()
}

const extraMiddleware = (req,res,next)=>{
    console.log(`This is the extra Middleware`)
    console.log(`Assume this is doing some work`)
    console.log(`Work done...`)
    next()
}

const toursRoute = (req,res)=>{
    // console.log(req.query)
    res.json({message : "This is tours route"})
}

const toursRouteWithId = (req,res)=>{
    res.json({message : `This is tours route with id ${req.params.id}`})
}

module.exports = {
    toursRoute, toursRouteWithId, checkID , extraMiddleware
}