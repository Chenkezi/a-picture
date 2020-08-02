var express = require('express');
var fs =require('fs')
var router = express.Router();
var mysql=require('../public/js/mysql.js')


var list={}

//引入上传文件
let multer=require('multer')
//配置上传对象
let upload=multer({dest:'./public/images'})


//single是单图片上传，多图片上传 array ,single里面就是上传图片的key值 
//和图片相关的是req.file 
router.post('/img', upload.single('imgfile'),function(req, res, next) {
  //图片上传为随机名，修改名称
  let oldPath=req.file.destination+'/'+req.file.filename
  let newPath=req.file.destination+'/'+req.file.filename+req.file.originalname
  let imgurl = `http://localhost:3000/public/images/${req.file.filename+req.file.originalname}`
  list.imgname=String(req.file.filename+req.file.originalname)
  console.log(list)
  fs.rename(oldPath,newPath,(ess)=>{
      if(ess){
        console.log("修改失败")
        return
      }
      let strSql2=`
      INSERT INTO neirong
      SET 
      name=?,title=?,text=?,imgurl=?,date=? `
      const scshuju=[list.name,list.title,list.text,list.imgname,list.date]
      function shuju(){res.json({ok:imgurl})}
      mysql.handle(strSql2,shuju,scshuju)
  })
});//图片上传

router.post('/sjtj',function(req, res, next) {
  // console.log(req.body)
  list=req.body
  
      res.json({
        ok:1
      })
      
  //插入数据
  // let strSql2=`
  // INSERT INTO neirong
  // SET 
  // name=?,title=?,text=?,date=?`
  // con.query(strSql2,[req.body.name,req.body.title,req.body.text,req.body.date],(err,results)=>{
  //     if(err){
  //         console.log('失败')
  //         return
  //     }
  //     res.json({
  //       ok:1
  //     })
  // })
});//其它内容上传

router.get('/list',(req,res)=>{
  let strSql=`SELECT * FROM neirong`
  function shuju(results){res.send(results)}
  mysql.handle(strSql,shuju)
})//获取数据

router.get('/listsc',(req,res)=>{
  let strSql3='Delete from neirong where name=?'
  function shuju(){res.send('1')}
  mysql.handle(strSql3,shuju,[req.query.name])
})//删除数据

module.exports = router;
