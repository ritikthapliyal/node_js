const toursRoute = (req,res)=>{
    // console.log(req.query)
    res.json({message : "This is tours route"})
}

const toursRouteWithId = (req,res)=>{
    res.json({message : `This is tours route with id ${req.params.id}`})
}

module.exports = {
    toursRoute, toursRouteWithId
}