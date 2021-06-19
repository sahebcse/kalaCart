const express=require('express')

const getDefault=(req, res)=>
{
    res.json({message: "Success"})
}
const getUnreal=(req, res)=>
{
    res.json({message: "This is unreal"})
}

module.exports={getDefault, getUnreal}