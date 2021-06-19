const mongoose=require('mongoose')
const blogPost=require('../models/blogModel')
var multer  = require('multer')


const getPosts=async (req, res)=>
{
    const posts=await blogPost.find()
    return res.json(posts)
}

const addPost=(req, res, next)=>
{
    console.log("The path was hit")
    console.log(req.file.filename)
    console.log(req.body)
    
    const tempPost=new blogPost({
        title: req.body.title,
        content: req.body.content,
        photo: 'http://localhost:5000/static/'+req.file.filename,
        inShort: req.body.content.slice(0, 250)
    })

    tempPost.save((err, post)=>
    {
        if (err)
        {
            console.log(err)
            return res.status(400).json({message: "Error"})
        }
        else
        {
            return res.status(200).json(post)
        }
        
    }) 
}

const deletePost=(req, res)=>
{
    blogPost.findByIdAndDelete(req.params.id, (err, post)=>
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

const editPost=async (req, res, next)=>
{
    const postUpdate={
        title: req.body.title,
        content: req.body.content,
        photo: 'http://localhost:5000/static/'+req.file.filename,
        inShort: req.body.content.slice(0,250)
    }
    
    const post=await blogPost.findOneAndUpdate({_id: req.params.id}, postUpdate, {
        new: true
    })

    return res.json(post)
    
}

module.exports={getPosts, addPost, deletePost, editPost}