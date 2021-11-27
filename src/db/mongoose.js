const mongoose=require('mongoose');
const connectionURI="'mongodb://127.0.0.1:27017/inotebook";

const connectToMongo=()=>{
    mongoose.connect(connectionURI,()=>{
        console.log("Connection established!");
    })
}
module.exports=connectToMongo;