import React,{useState, useEffect} from 'react'
import './styles.css'
import { Container, Grid, Button, Typography, TextField, Box, ListItemIcon, ListItemText,List, ListItem} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/InboxTwoTone'
import { createComment, addToCart} from '../../../action/user/user'
import {useDispatch} from 'react-redux';
import '@tensorflow/tfjs'
import * as toxicity from '@tensorflow-models/toxicity'

import ShopIcon from '@material-ui/icons/Shop'
import CartIcon from '@material-ui/icons/LocalGroceryStore';
import DeleteIcon from '@material-ui/icons/DeleteForever'
import CommentIcon from '@material-ui/icons/CommentRounded'

const Painting = ({painting, user}) => {
    const dispatch = useDispatch()
    const [model,setModel] = useState(null)
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        toxicity.load(0.8).then(mod=>setModel(mod));
    },[])
    console.log(model)
    const handleAddToCart=()=>{
        dispatch(addToCart({userEmail:user?.result.email, paintingId:painting._id}));
    }

    const handleShop=()=>{

    }
    const handleDelete=()=>{

    }

    const handleComment=async ()=>{
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

    const handleViewComments=()=>{
        console.log(painting.reviews)
        setReviews(!reviews);
    }

    const handleCommentChange=(e)=>{
        e.preventDefault()
        setError(null)
        setComment(e.target.value)
    }

    if(reviews){
        return (
            <Grid align="center">

                <List component="nav" aria-label="main mailbox folders">
                {painting.reviews.map((comment, i)=>{
                        return <ListItem>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={comment.text} />
                        </ListItem>
                    })}
                </List>
                   
                    { user && <div>
                        <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        size="small"
                        fullWidth
                        multiline
                        rowsMax={4}
                        value={comment}
                        onChange={handleCommentChange}
                        variant="outlined"
                    />
                    {error && <p className="text-red-600 border-2 rounded-full">{error}</p> }
                    <button disabled={!model} onClick={handleComment} className="text-black-600 bg-blue-200 my-3 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">Add Comment</button>
                        <Button onClick={handleAddToCart}><CartIcon/></Button>
                        <Button onClick={handleShop}><ShopIcon/></Button>
                        <Button onClick={handleViewComments}><CommentIcon/></Button>
                    </div>
                    }

                    {!user && <Button onClick={handleViewComments}><CommentIcon/></Button>}

            </Grid>
        )
    }
    else{

    return (
            <Grid align="center">
                <div className="container">
                    <div className="text">
                        <h4>{painting.title}</h4>
                        <span>Price: {painting.price}</span>
                        <p>{painting.description}</p>
                    </div>
                    <div className="img one">
                        <img src={painting.photo} alt="" />
                    </div>
                    <div className="img two">
                    <img src={painting.photo} alt="" />
                    </div>
                </div>
                {/* only admin can delete the post  */}
                {/* {user && user.result.isAdmin && <Button onClick={handleDelete}><DeleteIcon/></Button>} */}
                {/* only user can buy and add to cart a painitng login to know more */}
                {user && <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        size="small"
                        fullWidth
                        multiline
                        rowsMax={4}
                        value={comment}
                        onChange={handleCommentChange}
                        variant="outlined"
                    />
                    {error && <p className="text-red-600 border-2 rounded-full">{error}</p> }
                    <button disabled={!model} onClick={handleComment} className="text-black-600 bg-blue-200 my-3 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">Add Comment</button>
                    <Button onClick={handleAddToCart}><CartIcon/></Button>
                    <Button onClick={handleShop}><ShopIcon/></Button>
                    <Button onClick={handleViewComments}><CommentIcon/></Button>
                </div>}
                {/* {!user && <Button onClick={handleViewComments}><CommentIcon/></Button>} */}
            </Grid>
    )}
}

export default Painting
