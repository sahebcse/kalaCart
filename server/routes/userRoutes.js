const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const {createUser, getUser, getUsers, deleteUser, addToCart, getCartItems, deleteCartItems, removeItemFromCart}=require('../controller/userController')

router.post('/user', createUser)

router.get('/user/:id', getUser)

router.get('/findusers', getUsers)

router.delete('/user/:id', deleteUser)

router.post('/user/addToCart', addToCart)

router.post('/user/getCartItems', getCartItems)

router.post('/user/deleteCartItems', deleteCartItems)

router.post('/user/removeItemFromCart', removeItemFromCart)

module.exports=router