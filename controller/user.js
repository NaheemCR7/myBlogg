const asyncHandler =require('express-async-handler')
const User = require('../model/user')

module.exports ={
    // logIn:(req,res)=>{
    //     res.json({data:"from login"})
    //  },
    signUp:asyncHandler(async(req,res)=>{
        const result =req.body
        const user=await new User({
            email:result.email,
            number:result.number,
            name:result.name,
            password:result.password
        }).save()
        res.json({user})
    }), 


     logOut:(req,res)=>{
         res.send({data:"from log out"})
     },


     logIn:(req,res)=>{
         res.send({data:'from logim'})
     }

}

