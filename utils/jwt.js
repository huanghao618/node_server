var jwt =require("jsonwebtoken")
// 生成token
function createToken(data) {
    return jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60*60*24), // 单位：秒 //天
      data: data
      //加密字符串
    }, 'qfhappy')
  }
  // 验证token
function verifyToken(token) {
    return new Promise(function(resolve, reject) {
      try {
          //解密字符串相对应
        var decoded = jwt.verify(token, 'qfhappy');
        console.log('token', decoded)
        resolve(decoded.data)
      } catch(err) {
        reject(err)
      }
    })
  }
//   抛出
module.exports = {
    createToken,
    verifyToken
  }