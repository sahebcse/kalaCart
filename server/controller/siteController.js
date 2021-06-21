const express=require('express')
const siteModel=require('../models/siteModel')

const getDefault=(req, res)=>
{
    res.json({message: "Success"})
}

const postHit=(req, res)=>
{
    siteModel.findOne((err, site)=>
    {
        console.log(site)
        if (site!==null)
        {
            site.hits=site.hits+1
            site.save()
            return res.json(site)
        }
        else
        {
            const newSiteVersion=new siteModel({
                hits: 1
            })
            newSiteVersion.save((err, site)=>
            {
                return res.json(site)
            })
        }
        
    })
}

const getHits=(req, res)=>
{
    
    siteModel.findOne((err, site)=>
    {
        if (site!==null)
        {
            return res.json(site)
        }
        
    })
}

module.exports={getDefault, postHit, getHits}