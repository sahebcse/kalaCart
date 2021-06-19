const express=require('express')
const router=express.Router()
const {getDefault}=require('../controller/siteController')
const {getUnreal}=require('../controller/siteController')

router.get('/unreal', getUnreal)
router.get('/', getDefault)


module.exports=router
