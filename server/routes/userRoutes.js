const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const {createUser, getUser, getUsers, deleteUser}=require('../controller/userController')

router.post('/user', createUser)

router.get('/user/:id', getUser)

router.get('/findusers', getUsers)

router.delete('/user/:id', deleteUser)

module.exports=router