import React,{useState} from 'react'
import './styles.css'
import { Container, Grid, Button, Typography, TextField } from '@material-ui/core'
import { createComment} from '../../../action/user/user'
import {useDispatch} from 'react-redux';

import ShopIcon from '@material-ui/icons/Shop'
import CartIcon from '@material-ui/icons/LocalGroceryStore';
import DeleteIcon from '@material-ui/icons/DeleteForever'
import CommentIcon from '@material-ui/icons/CommentRounded'

const Painting = ({painting, user}) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState(false);
    const handleAddToCart=()=>{

    }

    const handleShop=()=>{

    }
    const handleDelete=()=>{

    }

    const handleComment=()=>{
        const data = {paintingId:painting._id, comment:comment, userEmail:user.result.email}
        dispatch(createComment(data))
    }

    const handleViewComments=()=>{
        console.log(painting.reviews)
        setReviews(!reviews);
    }

    if(reviews){
        return (
            <Grid align="center">
                    
                    {painting.reviews.map((comment, i)=>{
                        return <Typography key={i} variant="h6" >{comment.text}</Typography>
                    })}
                    { user && <div>
                        <Button color="primary" variant="contained" onClick={handleComment}>Add Comment</Button>
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
                {user && user.isAdmin && <Button onClick={handleDelete}><DeleteIcon/></Button>}
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
                        onChange={(e)=>{setComment(e.target.value)}}
                        variant="outlined"
                    />
                    <button onClick={handleComment} className="text-black-600 bg-blue-200 my-3 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">Add Comment</button>
                    <Button onClick={handleAddToCart}><CartIcon/></Button>
                    <Button onClick={handleShop}><ShopIcon/></Button>
                    <Button onClick={handleViewComments}><CommentIcon/></Button>
                </div>}
                {!user && <Button onClick={handleViewComments}><CommentIcon/></Button>}
            </Grid>
    )}
}

export default Painting
