var mongoose =require("mongoose")

module.exports=mongoose.model("goods",mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    hot:Boolean,
    cate:String,
    img:String,
    create_time:Number

}))