const usersRoute = (req,res)=>{
    // console.log(req.query)
    res.json({message : "This is users route"})
}

const usersRouteWithId = (req,res)=>{
    res.json({message : `This is users route with id ${req.params.id}`})
}

module.exports = {
    usersRoute, usersRouteWithId
}