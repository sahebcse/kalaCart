import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import '@tensorflow/tfjs'
import * as toxicity from '@tensorflow-models/toxicity'

export default function PaintingExpanded() {
    const {id}=useParams()
    const paintings=useSelector((state)=>state.paintings)
    const user = useSelector((state)=>state.user.authData)
    const [painting, setPainting]=useState(null)
    const [comment, setComment]=useState('')
    const [model, setModel]=useState(null)
    const [error, setError]=useState(null)
    useEffect(() =>{
        toxicity.load(0.8).then(mod=>setModel(mod));
    },[])

    useEffect(()=>
    {
        if (paintings)
        {
            console.log(paintings)
            const tempPainting=paintings.find((item)=>(item._id==id))
            setPainting(tempPainting)
        }
        console.log(painting)
    }, [])
    if (painting)
    {
        return (
            <div className="grid grid-cols-2 h-screen">
                <div className="bg-gray-200 flex content-center">
                    <img className="object-center p-12 pt-16" src={painting.photo} style={{height: '500px', width: '500px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                </div>
                <div>
                    <h1 className="text-5xl">{painting.title}</h1>
                    {
                        painting.reviews.map((comment)=>(
                            <p>{comment.text}</p>
                        ))
                    }
                </div>
            </div>
        )
    }
    else
    {
        return <div>

        </div>
    }
    
}
