const express=require('express')
const dotenv =require('dotenv')
const router = require('./routes/egRouters')
const connectDB = require('./config/db')//for the connection

const app=express()
dotenv.config()

const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(router);

app.listen(PORT,()=>{
    console.log(`server runnig on port 'http://localhost:${PORT}`)
})