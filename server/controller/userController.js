const express=require('express')
const mongoose=require('mongoose')
const User=require('../models/userModel')
const Painting= require('../models/paintingModel');
const bcrypt=require('bcrypt')
const stripe=require('stripe')('sk_test_51J8GAsSH4Sh8XwNi5Xis1Tr8xfxwmGyCAQLXeYjduWsCwIFxu11ai2ysISs4JmcO8NtZhwOZNpkzLSm0sfb56dnP00R8VRxPBm')


const createUser=async (req, res)=>
{
    const isadmin = true
    const user = await User.findOne({googleId:req.body.googleId});
    if(user){
        console.log('login', user)
        return res.status(201).json(user);
    }

    else
    {
        console.log(req.body,isadmin)
        const tempUser=await User.create({
        name: req.body.name,
        email: req.body.email,
        googleId:req.body.googleId,
        profilePic:req.body.imageUrl,
        isAdmin:isadmin
        })
        console.log(tempUser)
        res.status(200).json({user: tempUser})
    }
        
}

const getUser= (req, res)=>
{
    const googleId = req.params.googleId
    console.log('getting user',req.params.googleId)
    User.findOne({googleId:googleId}).populate({path:'cart.product'}).exec((err, user)=>
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            console.log(user)
            return res.json(user.address)
        }
    })
}

const getUsers=async (req, res)=>
{
    const result=await User.find()
    return res.json(result)

}

const deleteUser=(req, res)=>
{
    User.findByIdAndDelete(req.params.id, (err, post)=>
    {
        if (err)
        {
            console.log(err)
            return res.status(400).json({message: "Error"})
        }
        else
        {
            return res.status(200).json({message: "Success"})
        }
    })
}

const addToCart=async (req,res)=>{
    try {
        console.log(req.body)
        const { paintingId, userEmail} = req.body;
        const user = await User.findOne({email: userEmail});
        user.cartPaintings.push(paintingId);
        await user.save();
        const painting = await Painting.findById(paintingId);
        res.status(200).json(painting);
    } catch (error) {
        console.log(error)
    }
}

const getCartAndBoughtItems=async (req, res)=>{
    try {
        const { userEmail} = req.body;
        console.log(req.body)
        await User.findOne({email: userEmail}).populate('cartPaintings', 'title description price photo')
        .populate('boughtPaintings', 'title description price photo')
        .exec((err,result)=>{
            console.log(result)
            return res.status(200).json({cartPaintings:result.cartPaintings, boughtPaintings:result.boughtPaintings})
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteCartItems=async (req, res)=>{
    try {
        const { userEmail} = req.body;
        const user = await User.findOne({email: userEmail})
        user.cartPaintings = [];
        await user.save();
        console.log(user)
        res.status(201).json({message:'cart emptied successfully'});
    } catch (error) {
        console.log(error)
    }
}

const removeItemFromCart=async (req, res)=>{
    try {
        const {paintingId, userEmail} = req.body;
        console.log(paintingId)
        const user = await User.findOne({email: userEmail});
        const newCartPaintings = user.cartPaintings.filter((painting)=>String(painting)!==String(paintingId));
        console.log(newCartPaintings)
        user.cartPaintings = newCartPaintings;
        await user.save();
        res.status(201).json({message:'Item removed from cart successfully'});
    } catch (error) {
        console.log(error);
    }
}

const getClientSecretKey= async (req, res)=>{
    try {
        console.log('this is working')
        const {totalPrice} = req.body;
        console.log(totalPrice)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: parseInt(totalPrice),
            currency:'INR',
        })

        console.log('leaving....',paymentIntent.client_secret)

        res.status(200).json({clientSecret: paymentIntent.client_secret});
    } catch (error) {
        console.log(error);
    }
}

const productOrdered = async (req, res) => {
    try {
        const {userEmail} = req.body;
        const user = await User.findOne({email: userEmail})
        const cartPaintingList = user.cartPaintings
        user.boughtPaintings = [...user.boughtPaintings,...user.cartPaintings]
        user.cartPaintings = [];
        await user.save();
        res.status(201).json(cartPaintingList)
    } catch (error) {
        console.log(error);
    }
}

const setAddress = async (req, res) => {
    try {
        console.log('aa bhi nahi raha bc')
        const {userEmail} = req.body;
        const user = await User.findOne({email: userEmail})
        const {addr,postal,city,state,country} = req.body;
        console.log('chal raha',addr,postal,city,state,country)
        user.address = [addr,postal,city,state,country];
        await user.save()
        console.log(user)
        res.status(200).json(user.address)
    } catch (error) {
        console.log(error);
    }
}


module.exports={createUser, getUser, getUsers, deleteUser, addToCart, getCartAndBoughtItems, deleteCartItems, removeItemFromCart, getClientSecretKey, productOrdered, setAddress}