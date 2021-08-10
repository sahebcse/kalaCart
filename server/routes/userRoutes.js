const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const {createUser, getUser, getUsers, deleteUser, addToCart, getCartAndBoughtItems, deleteCartItems, removeItemFromCart, getClientSecretKey, productOrdered, setAddress}=require('../controller/userController')

router.post('/user', createUser)

router.get('/getUserAddress/:googleId', getUser)

router.get('/findusers', getUsers)

router.delete('/user/:id', deleteUser)

router.post('/user/addToCart', addToCart)

router.post('/user/getCartAndBoughtItems', getCartAndBoughtItems)

router.post('/user/deleteCartItems', deleteCartItems)

router.post('/user/removeItemFromCart', removeItemFromCart)

router.post('/user/getClientSecretKey', getClientSecretKey)

router.post('/user/productOrdered', productOrdered)

router.post('/user/setAddress', setAddress)


module.exports=router