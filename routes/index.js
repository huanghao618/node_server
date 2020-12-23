var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.json({err:0,msg:"首页"})
});
router.post("/login",function(req,res,next){
  res.json({err:0,msg:"login"})
})
module.exports = router;
 