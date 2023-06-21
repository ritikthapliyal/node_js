const express = require('express')
const app = express()

const toursRouter = require('./routes/toursRouter')
const usersRouter = require('./routes/usersRouter')

app.use(express.json())


app.use('/tours',toursRouter)
app.use('/users',usersRouter)





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