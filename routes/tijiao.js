var express = require('express');
var router = express.Router();

// 引入
var tijiao=require("../model/tijiao")

/* GET home page. */
router.post("/ad",function(req,res){
    var {connent,title}=req.body
    var data={
        connent,
        title,
        _time:Date.now(),
        name:"huanghao",
    }
    tijiao.insertMany([data]).then(()=>{
        res.json({err:0,msg:"提交成功"})
    })
})
module.exports = router;
 