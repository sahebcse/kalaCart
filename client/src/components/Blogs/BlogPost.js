import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';

export default function BlogPost() {
    const {id}=useParams()
    const blogPosts=useSelector((state)=>state.blogs)
    const [blogPost, setBlogPost]=useState(null)
    const createContent=()=>
    {
        return {__html: blogPost.content}
    }
    useEffect(()=>
    {
        console.log("This opens")
        if (blogPosts)
        {
            console.log(blogPosts)
            const tempBlogpost=blogPosts.find((item)=>(item._id==id))
            setBlogPost(tempBlogpost)
        }
        console.log(blogPost)
    }, [])
    if (blogPost)
    {
        return (<div>
            <div className="text-center pt-16 md:pt-32">
                <p className="text-sm md:text-base text-green-500 font-bold">{blogPost.createdOn.slice(0,10)} <span class="text-gray-900"></span></p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">{blogPost.title}</h1>
	        </div>
            
            <div className="grid grid-cols-7 mt-5">
                <div></div>
                <div className="col-span-5" dangerouslySetInnerHTML={createContent()}>

                </div>
                <div></div>
            </div>


            </div>
        
            
        )
    }
    else
    {
        return <div>
                Hey
        </div>
    }
   
}
