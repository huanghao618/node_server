var express = require('express');
var router = express.Router();

var nizhan2001 = require("../model/goods")
/* GET home page. */
// 添加 or 更新


router.post("/add", function (req, res) {
  var { name, price, img, desc, cate, id, hot } = req.body
  var good = {
    hot: (hot ? hot : false),
    name,
    price,
    img,
    desc,
    cate,
    create_time:Date.now()
  }
  //更新
  if (id) {
    nizhan2001.updateOne({ _id: id }, good).then(() => {
      res.json({ err: 0, msg: "更新成功" })
    })
    //添加
  } else {
    nizhan2001.insertMany([good]).then(() => {
      res.json({ err: 0, msg: "添加成功" })
    })
  }
})
//删除
router.get("/del", function (req, res) {
  var { id } = req.query
  nizhan2001.deleteOne({ _id: id }).then(() => {
    res.json({ err: 0, msg: "删除成功" })
  })
})
//查
router.get("/find", function (req, res) {
  var { page, size, hot} = req.query
  // 非必填数据处理转化成整
  page = parseInt(page ? page : 1),
  size = parseInt(size ? size : 5)
  var params = {
    hot: hot ? hot : false,
  }
  //true和false都要查
  if (!params.hot) delete params.hot
  //count是查找总的条数
  nizhan2001.count().then(total => {
    nizhan2001.find(params).skip((page - 1) * size).limit(size).then(arr => {
      res.json({
        err: 0, msg: "查找成功", data: {
          //键值对
          list: arr
        }
      })
    })
  })
})
// 获取商品详情
router.get("/getGoodDetail",function(req,res){
  nizhan2001.find({}).then(()=>{
    res.json({err:0,msg:"获取商品详情"})
  })
  
})
// 获取购物车列表：
router.get("/getCartList",function(req,res){
  res.json({err:0,msg:"获取购物车列表"})
})
//获取全部品类:getAllCates
router.get("/getAllCates",function(req,res){
  var {cate,cate_zh}=req.query
  var params = {
    cate,
    cate_zh
  }
  nizhan2001.find({cate,cate_zh}).then(()=>{
    res.json({err:0,msg:"获取全部品类成功"})
  })
 
})

module.exports = router;
