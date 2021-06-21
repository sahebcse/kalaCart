const mongoose=require('mongoose')
const Project=require('../models/projectModel')
var multer  = require('multer')


const getProjects=async (req, res)=>
{
    const projects=await Project.find()
    return res.json(projects)
}

const addProject=(req, res, next)=>
{
    console.log("The path was hit")
    console.log(req.file.filename)
    console.log(req.body)
    
    const tempProject=new Project({
        title: req.body.title,
        description: req.body.description,
        photo: 'http://localhost:5000/static/'+req.file.filename,

    })

    tempProject.save((err, project)=>
    {
        if (err)
        {
            console.log(err)
            return res.status(400).json({message: "Error"})
        }
        else
        {
            return res.status(200).json(project)
        }
        
    }) 
}

const deleteProject=(req, res)=>
{
    Project.findByIdAndDelete(req.params.id, (err, post)=>
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

const editProject=async (req, res, next)=>
{
    const projectUpdate={
        title: req.body.title,
        description: req.body.description,
        photo: 'http://localhost:5000/static/'+req.file.filename,
    }
    
    const project=await Project.findOneAndUpdate({_id: req.params.id}, projectUpdate, {
        new: true
    })

    return res.json(project)
    
}

module.exports={getProjects, addProject, deleteProject, editProject}