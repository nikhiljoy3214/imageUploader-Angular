// DB SERVER INTEGRATION

const mongoose=require("mongoose")

// CONNECT WITH MONGOBD ATTLAS

mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("MongoDB Atlas Connected");
}).catch(()=>{
    console.log(("MongoDB Connetcion error"));
})
