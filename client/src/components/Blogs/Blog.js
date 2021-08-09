import React from 'react'
import {useSelector} from 'react-redux'
import BlogPostCard from './BlogPostCard'

function Blog() {
    const blogPosts=useSelector((state)=>state.blogs)
    return (
        <div className="grid grid-cols-10">
            <div></div>
            <div className="col-span-8">
                <div className="grid grid-cols-3 ">             
                {
                    blogPosts.map((post)=>(
                        <BlogPostCard title={post.title} photo={post.photo} content={post.content} inShort={post.inShort} likes={post.likes} postId={post._id}/>
                    ))
                }
                </div>
            </div>
            <div></div>
        </div>
        
    )
}

export default Blog
