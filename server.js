const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})


const PORT = process.env.PORT || 5001
const MONGO_URI = process.env.MONGO_URI


const connectAndListen = async (app) =>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected");
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });
      } catch (error) {
        console.error("Error connecting to the database:", error);
      }
}

module.exports = connectAndListen