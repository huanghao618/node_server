var mongoose =require("mongoose")

module.exports=mongoose.model("users",mongoose.Schema({
    username:String,
    password:String,
    password2:String
}))