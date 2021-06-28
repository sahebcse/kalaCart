const express = require('express')
const multer = require('multer')

const router = express.Router()
const { createPainting, getPainting, deletePainting, updatePainting, createComment} = require('../controller/paintingController')

const storage = multer.diskStorage({
    destination: function (req, res, cb){
        cb(null,'public/')
    },
    filename: function (req, res, cb){
        cb(null, Date.now()+'.jpg')
    }
})

const upload = multer({ storage})


router.get('/painting',getPainting)

router.post('/painting',upload.single('photo'), createPainting)

router.delete('/painting/:id',deletePainting)

router.put('/painting/:id', upload.single('photo'), updatePainting)

router.post('/painting/comment', createComment)

module.exports = router