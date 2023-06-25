const express = require('express')
const connectAndListen = require("./server");

const app = express()


//routers
const toursRouter = require('./routes/toursRouter')
const usersRouter = require('./routes/usersRouter')


app.use(express.json())


app.use('/tours',toursRouter)
app.use('/users',usersRouter)


//server
connectAndListen(app);


