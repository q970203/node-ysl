let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mgdb');
let fs = require('fs');
let pathLib = require('path');

//增
router.post('/', (req, res, next) => {

  //抓取参数
  let { title,price,des,type,tag,info,optColor,optText,maxNum,enTitle} = req.body;
  /*
  * title:标题
  * price:价格
  * type:类型
  * info:详情描述
  * des:描述
  * tag:标签（新品）
  * optColor:属性（颜色）
  * optText:属性（文字）
  * optImg:细节图
  * maxNum：最大商品数量
  *detailImg:详情图
  * enTitle:英文标题
  * */
  let time = Date.now();//生成上传时间

  let optImg=[], banner,detailImg=[];//保存多个图片地址（网络）

  req.files && req.files.forEach((file, index) => {
    //抓取对应的图片
//
    if (file.fieldname === 'optImg') {
      optImg.push('/upload/banner/' + file.filename + pathLib.parse(file.originalname).ext);
    }
    if (file.fieldname === 'detailImg') {
      detailImg.push('/upload/banner/' + file.filename + pathLib.parse(file.originalname).ext);
    }

    if (file.fieldname === 'banner') {
      banner = '/upload/banner/' + file.filename + pathLib.parse(file.originalname).ext;
    }

    fs.renameSync(
      file.path,
      file.path + pathLib.parse(file.originalname).ext
    )

  })

  if (!banner) banner = '/upload/default.jpg'
  // if (!icon) icon = '/upload/default.jpg'



  //兜库
  mgdb.open({
    collectionName: 'banner'
  }).then(
    ({ collection, client }) => {
      //增，插入

      let data = { title,price,des,type,tag,info,optImg,maxNum,detailImg,banner,optText,optColor,enTitle }

      collection.insertOne(data, (err, result) => {//插入
        if (!err && result.result.n > 0) {
          res.send({
            err: 0,
            msg: '添加成功',
            data: {
              _id: result.insertedId,
              title,price,banner,tag,des,info,optImg,maxNum,detailImg,type,time,optColor,optText,enTitle
            }
          })
        } else {
          res.send({ err: 1, msg: '添加失败' })
        }
        client.close()
      })
    }
  )

})

//删除
router.delete('/:_id', (req, res, next) => {
  let _id = req.params._id;
  if (!_id) {
    res.send({ err: 1, msg: '_id为必传参数' })
    return;
  }

  mgdb.open({
    collectionName: 'banner'
  }).then(
    ({ collection, client, ObjectId }) => {
      collection.deleteOne({//删除
        _id: ObjectId(_id)
      }, (err, result) => {
        if (result.result.n > 0) {
          res.send({ err: 0, msg: '删除成功' })// 后台管理系统是前端渲染  返回json
          // res.render('ejs模板',{err:0,msg:'删除成功'})//后台管理系统是后的端渲染  操作ejs
        } else {
          res.send({ err: 1, msg: '删除失败' })
        }
        client.close()
      })
    }
  )


})

//修改
router.patch('/:_id', (req, res, next) => {
  let _id = req.params._id;
  if (!_id) {
    res.send({ err: 1, msg: '_id为必传参数' })
    return;
  }

  //查询
  mgdb.open({
    collectionName: 'banner'
  }).then(
    ({ collection, client, ObjectId }) => {
      collection.find({
        _id: ObjectId(_id)
      }).toArray((err, result) => {

        //准备修改后的数据
        let { title,price,des,type,tag,info,maxNum,optColor,optText,enTitle } = req.body
        title = title || result[0].title
        tag = tag || result[0].tag
        info = info || result[0].info
        maxNum = maxNum || result[0].maxNum
        des = des || result[0].des
        type = type || result[0].type
        price = price || result[0].price
        optColor=optColor || result[0].optColor
        optText=optText || result[0].optText
        enTitle=enTitle || result[0].enTitle



          let banner,optImg=[],detailImg=[];

        req.files && req.files.forEach((file,index)=>{
          if (file.fieldname === 'banner') {
            banner = '/upload/banner/' + file.filename + pathLib.parse(file.originalname).ext;
          }
          if (file.fieldname === 'optImg') {
            optImg.push('/upload/banner/' + file.filename + pathLib.parse(file.originalname).ext);
          }
          if (file.fieldname === 'detailImg') {
            detailImg.push('/upload/banner/' + file.filename + pathLib.parse(file.originalname).ext);
          }

          fs.renameSync(
            file.path,
            file.path + pathLib.parse(file.originalname).ext
          )

        })

        optImg = optImg || result[0].optImg
        detailImg = detailImg || result[0].detailImg
        banner = banner || result[0].banner

        let time = Date.now()

        //修改
        collection.updateMany({
          _id:ObjectId(_id)
        },{
          $set:{
            title,price,banner,tag,des,info,optColor,optText,enTitle, optImg,maxNum,detailImg,type,time,
          }
        },{
          upsert:false,
          projection:false
        },(err,result)=>{
          if(result.result.n>0){
            res.send({err:0,msg:'修改成功'})
          }else{
            res.send({err:1,msg:'修改失败'})
          }
          client.close()
        })
      })
    }
  )




})


module.exports = router;