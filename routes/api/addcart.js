let express = require('express')
let router = express.Router();
let fs = require('fs');
let pathLib = require('path');
let mgdb = require('../../utils/mgdb');

//添加
router.post("/",(req,res,next)=>{
	let {title,price,img,num,optColor,optText,checked}=req.body;
	checked=true || checked
		if (!title || !price ) {
	    res.send({
	      err: 1,
	      msg: 'title、价格为必传参数'
	    })
	    return;
	  }
	  mgdb.open({
	    dbName: 'ysl',
	    collectionName: 'cart'
	  }).then(
	    ({ collection, client }) => {
	      //4.2 查询
	      collection.find({ title }).toArray((err, result) => {
	        if (err) {
	          res.send({ err: 1, msg: '失败' })
	          client.close()
	        } else {
	          if (result.length === 0) {
	            collection.insertOne({
								title,price,img,num,optColor,optText,checked,date:new Date()
	            }, (err, result) => {

	              if (!err) {
	                res.send({
	                  err: 0, msg: '加入成功',
	                  data: result.ops
	                })
	              } else {//入库失败
	                res.send({ err: 1, msg: '加入失败' })
	              }
	              client.close()
	            })
	          }
						if( result.length ===1){
							collection.updateMany({
									title
								},{
									$set:{title,price,img,num,optColor,optText,checked}
								},{
									upsert:false,
									projection:false},
								(err,result)=>{
									if(result.result.n>0){
										res.send({
											err:0,
											msg:"数据增加",
											data:result.ops
										})
									}else{
										res.send({ err: 1, msg: '数据增加失败' })
									}
									client.close()

								})
						}
	        }
	      })
	    }
	  ).catch(
	    err => {
	      res.send({err:1,msg:'集合操作失败'})
	    }
	  )
	})

//修改
router.patch('/:_id',(req,res,next)=>{
	console.log('patch')
	let _id = req.params._id;
	if (!_id) {
		res.send({ err: 1, msg: '_id为必传参数' })
		return;
	}
	mgdb.open({
		collectionName:"cart"
	}).then(
		({collection, client, ObjectId})=>{
			collection.find({
				_id: ObjectId(_id)
			}).toArray((err,result)=>{
				let {title,price,img,num,optColor,optText,checked}=req.body;
				title=title || result[0].title
				price=price || result[0].price
				img=img || result[0].img
				num=num || result[0].num
				optColor=optColor || result[0].optColor
				optText=optText || result[0].optText
				checked=checked || result[0].checked




				collection.updateMany({
							_id: ObjectId(_id)
					},{
							$set:{title,price,img,num,optColor,optText,checked}
						},{
							upsert:false,
							projection:false},
						(err,result)=>{
							if(result.result.n>0){
								res.send({
									err:0,
									msg:"数据增加",
									data:result.ops
								})
							}else{
								res.send({ err: 1, msg: '数据增加失败' })
							}
							client.close()

						})

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
	    collectionName: 'cart'
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
	
	module.exports = router;