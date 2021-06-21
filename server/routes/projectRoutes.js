const express = require('express')
const multer = require('multer')

const router = express.Router()
const { addProject, getProjects, deleteProject, editProject} = require('../controller/projectController')

const storage = multer.diskStorage({
    destination: function (req, res, cb){
        cb(null,'public/')
    },
    filename: function (req, res, cb){
        cb(null, Date.now()+'.jpg')
    }
})

const upload = multer({ storage})


router.get('/projects',getProjects)

router.post('/project',upload.single('photo'), addProject)

router.delete('/project/:id',deleteProject)

router.put('/project/:id', upload.single('photo'), editProject)

module.exports = router