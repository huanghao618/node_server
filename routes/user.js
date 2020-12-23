var express = require('express');
var router = express.Router();

var nz = require("../model/users")
var jwt =require("../utils/jwt")
/* GET users listing. */
router.post("/regiter", function (req, res) {
  //var username=req.body.username简写
  var { username, password,password2 } = req.body
  // 判断有没有填写
  if (!username) return res.json({ err: 1, msg: "缺少非必填参数" })
  if (!password) return res.json({ err: 1, msg: "缺少非必填参数" })
  if (!password2) return res.json({ err: 1, msg: "缺少非必填参数" })

  //判断数据类型 {3，16}3到16位
  if (!/[a-zA-Z]{3,16}/.test(username)) {
    return res.json({ err: 2, msg: "用户名3到16位纯字母" })
  }
  if (!/[0-9]{6,16}/.test(password)) {
    return res.json({ err: 2, msg: "密码6到16位数字" })
  }
  // 判断用户名是否存在，不存在就可以添加用户
  nz.find({ username }).then(arr => {
    if (arr && arr.length > 0) {
      res.json({ err: 3, msg: "用户名存在" })
    } else {
      var ele = {
        username,
        password,
        password2
        
      }
      nz.insertMany([ele]).then(() => {
        res.json({ err: 0, msg: "创建成功", data: username })
      })
    }
  })
})


router.post('/login', function(req, res) {
  var { username, password } = req.body

  // 必填与非必须验证
  if (!username) return res.json({err:1,msg:'缺少必填参数'})
  if (!password) return res.json({err:1,msg:'缺少必填参数'})
  // 查询集合，如果有这条记录就是登录成功
  nz.find({username,password}).then(arr=>{
    if(arr && arr.length>0) {
      // 其它集合的查询
      res.json({err:0, msg:'succuess', data: {
        navs: [],
        role: 1,
        username,
        token:jwt.createToken({username,password})
      }})
    }
  })
})
module.exports = router;
