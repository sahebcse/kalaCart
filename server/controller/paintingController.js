const mongoose = require('mongoose')
const express = require('express')
const Painting = require('../models/paintingModel')
const User = require('../models/userModel')

var multer = require('multer')

const getPainting = async (req,res)=>{
    const paintings =await Painting.find();
    return res.json(paintings)
}

const createPainting = async (req,res)=>{
    try {
        console.log('creating painting...',req.body)
        const painting = await Painting.create({
            title:req.body.title,
            price:req.body.price,
            description:req.body.description,
            photo: 'http://localhost:5000/static/'+req.file.filename,
        })
        console.log(painting)
        res.status(201).json(painting);

    } catch (error) {
        console.log(error)
    }
}

const deletePainting = async (req,res)=>{
    try {
        const id = req.params.id;
        await Painting.findByIdAndDelete(id)
        res.status(201).json({message:'Succes'})
    } catch (error) {
        console.log(error)
    }
}

const updatePainting = async (req,res)=>{
    try {
        console.log('updating....')
        const updatePainting = {
            title:req.body.title,
            price:req.body.price,
            description:req.body.description,
            inStock:req.body.inStock
        }

        const painting = await Painting.findOneAndUpdate({_id:req.params.id}, updatePainting,{new:true})
        res.status(201).json(painting);
        
    } catch (error) {
        console.log(error)
    }
}

const createComment = async (req, res) => {
    try {
        console.log(req.body)
        const {paintingId, comment, userEmail} = req.body;
        const user = await User.findOne({ email: userEmail});
        const userId = user._id;
        const painting = await Painting.findById(paintingId);
        painting.reviews.push({user:userId, text:comment});
        await painting.save()
        res.status(200).json(painting);

    } catch (error) {
        console.log(error)
    }
}

module.exports = {createPainting, getPainting, deletePainting, updatePainting, createComment}