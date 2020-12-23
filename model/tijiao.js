var mongoose=require("mongoose")
module.exports=mongoose.model("tijiaos",mongoose.Schema({
    connent:String,
    title:String,
    name:String,
    _time:Number,
    img:String
}))