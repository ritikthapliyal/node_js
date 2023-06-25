const mongoose = require('mongoose')

const tourSchema = new  mongoose.Schema({
    name:{
        type:String
    },
    rating:{
        type:Number
    },
    price:{
        type:Number
    }
})


//name of the model and schema
const Tour = mongoose.model('Tour',tourSchema) 

module.exports = Tour