var express = require('express');
var router = express.Router();
var mysql=require('../public/js/mysql.js')

  //设置cookie
  //第三个参数中 第一个为有效期,不设置默认一个会话 第二个为前端是否可获取 第三个为是否加密cookie发送
  // res.cookie('gl','true',{maxAge:3000,httpOnly:true,signed:true})

  //获取cookie
  // req.cookie.gl
  //解密获取cookie
  // req.signedCookies.gl

router.get('/denglu', function(req,res) {
  let strSql4=`SELECT name FROM zcb where name=? and password=?`
  function shuju(results){res.send(results)}
  mysql.handle(strSql4,shuju,[req.query.name,req.query.password])
});

router.post('/zhuce',(req,res)=>{
})

module.exports = router;
