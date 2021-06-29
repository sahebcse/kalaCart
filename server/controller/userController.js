const express=require('express')
const mongoose=require('mongoose')
const User=require('../models/userModel')
const bcrypt=require('bcrypt')

const createUser=async (req, res)=>
{
    const isadmin = (req.body.email=="admin email")
    const user = await User.findOne({googleId:req.body.googleId});
    if(user)
        res.status(201).json({message:'user already exists'});
    console.log(req.body,isadmin)
    const tempUser=await User.create({
        name: req.body.name,
        email: req.body.email,
        googleId:req.body.email,
        profilePic:req.body.imageUrl,
        isAdmin:isadmin
    })
    console.log(tempUser)
    res.status(200).json({message:"success"})
}

const getUser= (req, res)=>
{
    console.log("This route runs")
    console.log(req.params.id)
    User.findById(req.params.id).populate({path:'cart.product'}).exec((err, user)=>
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            console.log(user)
            return res.json(user)
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


module.exports={createUser, getUser, getUsers, deleteUser}