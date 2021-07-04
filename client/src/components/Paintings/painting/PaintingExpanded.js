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
            <div>
                <h1>{painting.title}</h1>
                <p>{painting.description}</p>
                <img src={painting.photo} />
            </div>
        )
    }
    else
    {
        return <div>

        </div>
    }
    
}
