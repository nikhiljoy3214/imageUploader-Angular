const express=require("express")

const logic=require("../controllers/logic")

// CREATE AN OBJECT FOR ROUTER CLASS IN EXPRESS

const router=new express.Router()

// register

router.post('/user/user-register',logic.register)

// login
router.post('/user/user-login',logic.login)

// // upload
router.post("/user/img-upload",logic.uploadImage)

// GET PROFILE
router.get('/user/user-profile/:mobno',logic.getProfile)

// Delete Image
router.delete('/user/user-profile/delete/:title',logic.deleteImage)




module.exports=router

