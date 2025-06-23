const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DBUrl)
        console.log("MongoDB connected successfully")
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connectDB;