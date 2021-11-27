const mongoose = require('mongoose');

const Schema=mongoose.Schema();

const NoteSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:String,
        default:Date.now
    }
})

module.exports=mongoose.model("Note",NoteSchema);