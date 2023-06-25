const Tour = require('../Models/toursModel')

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

const toursRouteWithId = async (req,res) => {
    
    const id = req.params.id

    try{   
        const data = await Tour.findById(id)

        res.json({
            status: 200,
            success:true,
            data,
            message:"tour added"})
    }
    catch(error){
        console.log(error)
        res.json({
            status: 400,
            success: true,
            message: "some error occured"})
    }
}

const createTour = async (req,res) => {
    
    let {name,rating,price} = req.body
    
    try{
        
        await Tour.create(
            {   name,
                rating:Number(rating),
                price:Number(price)
            })

        res.json({
            status: 201,
            success:true,
            message:"tour added"})
    }
    catch(error){
        console(error)
        res.json({
            status: 400,
            success: true,
            message: "some error occured"})
    }
    
    
}

module.exports = {
    toursRoute, toursRouteWithId, checkID , extraMiddleware , createTour
}