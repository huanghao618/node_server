var express = require('express');
var router = express.Router();

// CORS解决跨域，放在最前面
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// jsonp跨域
// router.get("/aa",function(req,res){
//   res.jsonp({err:0,msg:"jsonp跨域",data:[1,2,3]})
// })
// //代理跨域。要加
// router.post("/bb",function(req,res){
//   res.json({err:0,msg:"代理跨域",data:[1,2,3]})
// })
module.exports = router;
