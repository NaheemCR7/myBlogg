const mongoose = require('mongoose');
const user = require('../controller/user');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true,
        unique:true
    },
    number:{
        type:Number, 
        minlength:3,
        maxlength:50,
        required:true,
    },
    name:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true,
    },
    password:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true,
    }
  },{timestamps:true}
  );


  const User = mongoose.model('User',userSchema)

  module.exports = User

