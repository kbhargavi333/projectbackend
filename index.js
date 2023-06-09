const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const content=require("./schema")
const port=process.env.PORT || 4000
const app=express()
app.use(bodyparser.json())

console.log(content)
mongoose.connect("mongodb+srv://bhargavi:bhargavi@cluster0.1wmv1gi.mongodb.net/firstDB?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err)
})
app.get("/example",(req,res)=>{
    res.send("Hello")
})
app.use(cors())
app.use(bodyparser.urlencoded({
    extended:true
})) 
app.get("/user",async(req,res)=>{
    await content.find()
    .then(found=>res.json(found))
})
app.post('/store',(req,res)=>{
    const {username,password}=req.body
    const newdata=new content({
        username,password
    })
    newdata.save()
})
app.listen(port,()=>console.log("server started"))