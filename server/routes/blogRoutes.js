const express=require('express')
const router=express.Router()
var multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg')
    }
  })
  
var upload = multer({ storage: storage, limits: { fieldSize: 2 * 1024 * 1024 } })

const {getPosts, addPost, deletePost, editPost}=require('../controller/blogController')


router.get('/posts', getPosts)

router.post('/post',upload.single('photo'), addPost)

router.delete('/post/:id', deletePost)

router.put('/post/:id',upload.single('photo'), editPost)

module.exports=router