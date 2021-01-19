const express = require ('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
// const dotenv = require('dotenv')
// dotenv.config()
require('dotenv').config()
const user=require("./routes/user")
const createError = require('http-errors')

const app = express()

mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>console.log('mongoose running'))
.catch(err=>console.log(err))


app.use(morgan('dev'))
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))


app.use('/user',user)  

app.use((req,res,next)=>{
    next(createError.NotFound())
})
app.use((err,req,res,next)=>{
    res.status(500)
    res.send({
        status:err.status,
        message:err.message
    })
})


const PORT= process.env.PORT 
app.listen(PORT,()=>console.log(`running on ${PORT}`))
