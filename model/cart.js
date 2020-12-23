var mongoose =require("mongoose")

module.exports=mongoose.model("carts",mongoose.Schema({
    create_time: Number,
  order_id: String,
  good_id: String,
  user_id: String
}))