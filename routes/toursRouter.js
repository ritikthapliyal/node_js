const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({message : "This is tours route"})
})

router.get('/:id',(req,res)=>{
    res.json({message : `This is tours route with id ${req.params.id}`})
})

module.exports = router

