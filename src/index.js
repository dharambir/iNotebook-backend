const express=require('express');
const connectToMongo=require('./db/mongoose');
connectToMongo();
const app=express();
const port=5000;
app.use(express.json());
app.use("/api/auth",require('./routes/auth'));


// app.get('*',(req,res)=>{
//     res.render('404');
// })
app.listen(port,()=>{
    console.log("Server is running on port "+port);
})