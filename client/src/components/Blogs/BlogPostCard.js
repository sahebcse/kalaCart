import React, {useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'


export default function BlogPostCard({title, photo, content, inShort, likes, postId}) { 
    const [minRead, setMinReaad]=useState(0)
    const history=useHistory()
    
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    useEffect(() => {
        if (content)
        {
            if (content.length>500)
            {
                setMinReaad(5)
            }
            else if (content.length>1000)
            {
                setMinReaad(10)
            }
            else
            {
                setMinReaad(getRandomInt(1, 5))
            }

        }    
    }, [])

    const createContent=()=>
    {
        return {__html: inShort+'. . .'}
    }

 
    return (
        <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<Link to={`/blog/${postId}`} className="flex flex-wrap no-underline hover:no-underline">
								<img src={photo} className="h-64 w-full rounded-t pb-6" />
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">{likes} likes</p>
								<div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
								<p className="text-gray-800 font-serif text-base px-6 mb-5" dangerouslySetInnerHTML={createContent()}>

								</p>
							</Link>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div className="flex items-center justify-between">
								<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
								<p className="text-gray-600 text-xs md:text-sm">{minRead} MIN READ</p>
							</div>
						</div>
					</div>
    )
}
