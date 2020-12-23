//引入
var mongoose =require("mongoose")
// 注意数据库名称
mongoose.connect('mongodb://localhost:27017/2001', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// 监听方法 connection有两个方法。一个on,里面失败传err，成功没有参数
var con = mongoose.connection
con.on('error', function(err) {
  console.log('数据库连接失败', err)
})
con.on('open', function() {
  console.log('数据库连接成功')
})