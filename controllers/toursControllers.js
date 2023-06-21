
const checkID = (req,res,next,val)=>{
    console.log(`Checking Id...`)
    console.log(`params middleware says : tour id is ${val}`)
    console.log(`ID is valid`)
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
    toursRoute, toursRouteWithId, checkID
}