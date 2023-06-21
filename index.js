const express = require('express')
const app = express()

app.use(express.json())

const toursRouter = express.Router()
const usersRouter = express.Router()

//tours

app.use('/tours',toursRouter)

toursRouter.get('/',(req,res)=>{
    res.json({message : "This is tours route"})
})
toursRouter.get('/:id',(req,res)=>{
    res.json({message : `This is tours route with id ${req.params.id}`})
})



//users

app.get('/users',(req,res)=>{
    console.log(req.query)
    res.json({message : "This is users route"})
})

app.get('/users/:id',(req,res)=>{
    res.json({message : `This is users route with id ${req.params.id}`})
})





// app.use((req,res,next)=>{
//     req.body.name = `lassan ${req.body.name}`
//     next()
// })

// app.get('/',(req,res)=>{
//     res.json({message : "Hello from server"})
// })

// app.post('/',(req,res)=>{
//     const name = req.body.name
//     res.json({message : `Hello ${name}`})
// })

const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})