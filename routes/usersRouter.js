const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    console.log(req.query)
    res.json({message : "This is users route"})
})

router.get('/:id',(req,res)=>{
    res.json({message : `This is users route with id ${req.params.id}`})
})

module.exports = router