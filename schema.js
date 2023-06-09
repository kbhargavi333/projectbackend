const mongoose=require("mongoose")
const contentschema={
    username:String,
    password:String
}
const content=mongoose.model("project",contentschema)
module.exports=content