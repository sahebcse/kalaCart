const express=require('express')
const mongoose=require('mongoose')
const User=require('../models/userModel')
const bcrypt=require('bcrypt')

const createUser=(req, res)=>
{
    const tempUser=new User({
        name: req.body.name,
        age: parseInt(req.body.age),
        email: req.body.email,
    })
    console.log(tempUser)
    bcrypt.hash(req.body.password, 10, (err, hash)=>
    {
        if (err)
        {
            return console.log(err)
        }
        else
        {
            tempUser.password=hash
            tempUser.save((err, result)=>
            {
                if (err)
                {
                    return res.status(403).json()
                }
                else
                {
                    return res.json(result)
                }
            })
        }
    })
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