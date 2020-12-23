
//验证token
var jwt = require('jsonwebtoken')

function verifyToken(token) {
  return new Promise(function(resolve, reject){
    try {
      var decoded = jwt.verify(token, 'qfhappy');
      resolve(decoded.data)
    } catch(err) {
      reject('token验证失败')
    }
  })
}

verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTM2OTI4NDMsImRhdGEiOnsidXNlcm5hbWUiOiJodWFuZ2FocXFxMSIsInBhc3N3b3JkIjoiMTExMTExIn0sImlhdCI6MTU5MzYwNjQ0M30.bhmlF67xo6GZP6uc2f8AeFz5IsSdZn6tJ_8JOWOFc40').then((res)=>{
  console.log('user', res)
}).catch(err=>{
  console.log(err)
})
