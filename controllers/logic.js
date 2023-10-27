const { users } = require("../models/modelcollection")


// LOGIC FOR REGISTER

const register=(req,res)=>{
    mobno=req.body.mobno
    uname=req.body.uname
    psw=req.body.psw
    
    users.findOne({mobno}).then(user=>{
        if(user){
            res.status(401).send("User Already existes")
        }
        else{
            var newUser=new users({
                mobno,
                uname,
                psw,
                imagearray:[]
            })
            newUser.save()
            res.status(200).json(newUser)
        }
    })
}


// logic for LOGIN

const login=(req,res)=>{
    const {mobno,psw}=req.body
    users.findOne({mobno,psw}).then(user=>{
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(401).json("Invalid User name or Password")
        }
    })
}

// logic to get profile
const getProfile=(req,res)=>{
    const {mobno}=req.params
    users.findOne({mobno}).then(user=>{
        // console.log(user); 
        if(user){
            res.status(200).json({
                mobno:user.mobno,
                uname:user.uname,
                imagearray:user.imagearray
            })
        }
        else{
            res.status(401).json("User Not found")
        }
    })
}

// logic for upload

    const uploadImage=(req,res)=>{
        const {title,mobno}=req.body
        users.findOne({mobno}).then(user=>{
            console.log(user);
            uploadData=user.imagearray.push({title})
            user.save()
            res.status(200).json(uploadData)
        }
        )     
    }

    const deleteImage=(req,res)=>{
        const {title}=req.params
        users.imagearray.deleteOne({title}).then((result=>{
            console.log(result);
            if(result){
                res.status(200).json("Image deleted sucessfully")
            }
            else{
                res.status(400).json("Image not Found")
            }
        }))
        
    }

module.exports={
    register,login,getProfile,uploadImage,deleteImage
}