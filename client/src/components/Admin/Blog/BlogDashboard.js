import React, {useState, useEffect} from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import {Container} from '@material-ui/core'
import { useDispatch} from 'react-redux'
import { addPost } from '../../../action/user/user'

export default function BlogDashboard() {
    const dispatch=useDispatch()
    const [quill, setQuill]=useState(null)
    const [title, setTitle]=useState('')
    const [photo, setPhoto]=useState(null)

    useEffect(()=>
    {
        var newQuill=new Quill('#editor', {
            modules: {
                toolbar: [
                    [{'font':[]}],
                  [{ header: [1, 2, false] }],
                  ['bold', 'italic', 'underline'],
                  ['image', 'link','blockquote'],
                  [{ 'align': [] }],
                  [{ 'indent': '-1'}, { 'indent': '+1' }],
                  [{ 'color': [] }, { 'background': [] }],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  
                ]
              },
            placeholder: 'What is on your mind?',
            theme: 'snow'
        })
        if (newQuill)
        {
            setQuill(newQuill)
        }
    }, [])

    const titleHandler=(e)=>
    {
        setTitle(e.target.value)
    }

    const publishContents=(e)=>
    {
        e.preventDefault()
        var content=quill.root.innerHTML
        console.log(content)
        const postData=new FormData()
        postData.append('title', title)
        postData.append('content', content)
        postData.append('photo', photo)
        dispatch(addPost(postData))
    }

    const handlePhoto=(e)=>
    {
        setPhoto(e.target.files[0]);
    }

    return (
        <div className="grid grid-cols-5 gap-4">
            <div></div>
            <div className="col-span-3">
                <input onChange={titleHandler} placeholder="Title" className="border-2 w-full mb-2 mt-5 border-gray-400 p-2 border-opacity-40 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-opacity-0"/>
                <div id="editor">

                </div>
                
                <div className="justify-items-end align-items-start grid mt-0 pt-0">
                    <div>
                    <input type="file" name="photo" onChange={handlePhoto}/>
                        <button onClick={publishContents} className="p-2 mt-0 border-black border-2 hover:bg-black hover:ring-2 hover:ring-black hover:text-white">
                            PUBLISH
                        </button>
                    </div>
                    
                </div>
                
            </div>
            <div></div>
        </div>
    )
}
