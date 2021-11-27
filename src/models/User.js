const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:String,
        default:Date.now
    }
})
const User=mongoose.model("User",UserSchema);
//Index will be created as per the column is unique 
// User.createIndexes(); 
module.exports=User;