const express=require('express')
const router=express.Router()
const {getDefault, postHit, getHits}=require('../controller/siteController')


router.get('/', getDefault)

//Hit Routes Call the post route on the home page of React client so that the hit counter is updated in
//db everytime a new client loads it up

router.post('/hit', postHit)
router.get('/hits', getHits) //Use this to access the number of hits. This does not increment the hits counter

module.exports=router
