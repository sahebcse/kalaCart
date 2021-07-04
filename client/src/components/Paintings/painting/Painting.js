import React, {useState, useEffect} from 'react'
import './styles.css'
import { Container, Grid, Button, Typography, TextField, makeStyles, GridListTileBar, GridList, Modal } from '@material-ui/core'

import {useDispatch} from 'react-redux';
import { createComment, addToCart} from '../../../action/user/user'
import { GridListTile } from '@material-ui/core';
import {Link} from 'react-router-dom'
import '@tensorflow/tfjs'
import * as toxicity from '@tensorflow-models/toxicity'



const useStyles=makeStyles((theme)=>({
    imgGrid: {
        width: 450,
        height: 450,
        margin: "auto",
        textAlign: 'center'
    },
    gridStuff: {
        margin: 0,
        textAlign: 'center',
        padding: '15px',
        border: '15px',
        position: 'relative'
    },
    textTop:
    {
        position: 'absolute',
        top: '80%',
        left: '33%',
        cursor: 'pointer'
    },
    paper:
    {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        paddingTop: '50px',
        width: "60%",
        margin: 'auto',
        height: '470px',
        left: '25%',
        top: "25%",
        fontSize: '1.25vw',
        textAlign: 'center',
        outline: 'none'
    },
    modalImage: {
        width: 350,
        height: 350
    }
}))

const Painting = ({painting, user}) => {
    const classes=useStyles()
    const dispatch = useDispatch()
    const [hoverState, setHoverState]=useState(false)
    const [open, setOpen]=useState(false)
    const [comment, setComment]=useState('')
    const [model, setModel]=useState(null)
    const [error, setError]=useState(null)
    useEffect(() =>{
        toxicity.load(0.8).then(mod=>setModel(mod));
    },[])

    const handleClose=()=>
    {
        setOpen(false)
    }
    const handleOpen=()=>
    {
        setOpen(true)
    }

    const handleAddToCart=()=>{
        dispatch(addToCart({userEmail:user?.result.email, paintingId:painting._id}));
    }

    const handleCommentSubmit=async ()=>
    {
        console.log(comment)
        if(comment){
            if(model){
                await model.classify(comment).then(predictions =>{
                    var result=0;
                    console.log(predictions)
                    for(let i=0;i<predictions.length;i++){
                        if(predictions[i].results[0].match===true){
                            result+=1;
                        }
                    }

                    console.log(result)
                    if(result===0){
                        const data = {paintingId:painting._id, comment:comment, userEmail:user?.result.email}
                        dispatch(createComment(data))
                        setComment('')
                    }else if(result===1){
                        const data = {paintingId:painting._id, comment:comment, userEmail:user?.result.email}
                        dispatch(createComment(data))
                        setComment('')
                        setError('Refrain from using toxic comments next time')
                    }else{
                        setComment('')
                        setError('your comment has been deleted due toxicity.')
                    }
                })
            }
        } else{
            setError('Add Comment')
        }

    }

    const handleCommentChange=(e)=>
    {
        setError(null)
        setComment(e.target.value)
    }

    const body=(
        <div className={classes.paper}>
            <div className="grid flex grid-cols-2 border-none">
                <div>
                    <p className="font-sans xs:text-lg md:text-5xl py-3">{painting.title}</p>
                    <p className="font-thin py-3 text-xl">₹{painting.price}</p>

                    <p>
                        <button onClick={handleAddToCart} className="p-5 mt-8 border-black border-2 hover:bg-black hover:text-white">ADD TO CART</button>
                    </p>

                    <p className="text-gray-800 hover:underline my-5 py-3">
                        <Link to={`/painting/${painting._id}`} >View Full Item</Link>
                    </p>

                    <div>
                        <p className="text-gray-400 ">Got something to add?</p>
                        <input type="text" onChange={handleCommentChange} className="border-2 mt-5 border-gray-400 p-2 border-opacity-40 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-opacity-0"/>
                        <button onClick={handleAddToCart} className="p-2 mt-5 border-black border-2 hover:bg-black hover:ring-2 hover:ring-black hover:text-white">COMMENT</button>
                    </div>
                </div>
                
                <div>
                    <img src={painting.photo} className={classes.modalImage} />
                </div>
            </div>

        </div>
    )
    return (
        <Grid onMouseOver={()=>{setHoverState(true)}} onMouseLeave={()=>{setHoverState(false)}} className={classes.gridStuff} xs={12} sm={4} item>
               
                    <img className={classes.imgGrid} src={painting.photo} />
                      {hoverState?<div onClick={handleOpen} className={`bg-gray-900 p-7 text-white uppercase antialiased font-light opacity-70 ${classes.textTop} `} >Quick View</div>:<div></div>}
                      {hoverState?<p className="uppercase antialiased font-light hidden">{painting.title}</p>:<p className="uppercase antialiased font-light ">{painting.title}</p>}  
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        {body}
                    </Modal>
                 
                
                
                
        </Grid>
    )
}

export default Painting

