const express=require("express")


// import env file 
require("dotenv").config()

const cors=require("cors")
// const router = require("./routes/router")
// import db connection

require("./db/dbconnections")

const rout=require("./routes/router")
// create server using express
const server=express()
// connect with frontend
server.use(cors())

// to conver all incomming json type data to js
server.use(express.json())

server.use(rout)





// port setting

const port=3000 || process.env.port

// running Congif

server.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})