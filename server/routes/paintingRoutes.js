const express = require('express')
const multer = require('multer')

const router = express.Router()
const { createPainting, getPainting, deletePainting, updatePainting, createComment} = require('../controller/paintingController')
const {isAuthenticated} = require('../middleware/auth')
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

router.post('/painting', isAuthenticated, upload.single('photo'), createPainting)

router.delete('/painting/:id', isAuthenticated, deletePainting)

router.put('/painting/:id', isAuthenticated, upload.single('photo'), updatePainting)

router.post('/painting/comment', isAuthenticated, createComment)

module.exports = router