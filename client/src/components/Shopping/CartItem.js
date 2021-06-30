import React from 'react'
import {Button} from '@material-ui/core'
import RemoverIcon from '@material-ui/icons/RemoveCircleOutlineOutlined'
import {removeItemFromCart} from '../../action/user/user'
import {useDispatch} from 'react-redux';
import './cartItem.css'

const CartItem = ({painting}) => {
    const dispatch = useDispatch();    
    const user = JSON.parse(localStorage.getItem('profile'))
    const handleRemoveFromCart=()=>{
        const data = {paintingId:painting._id, userEmail:user?.result.email}
        dispatch(removeItemFromCart(data));
    }

    return (
        <div className="main">
            <div ClassName="container">
                <div className="Image">
                    <img src={painting.photo} alt="" />    
                </div>
                <div className="cart-item-details">
                    <p>Title : {painting.title}</p>
                    <p>Description : {painting.description}</p>
                    <p>Price : {painting.price}</p>
                </div>
            </div>
            <Button variant="contained" color="secondary" onClick={handleRemoveFromCart}><RemoverIcon /> Remove From Cart</Button>
        </div>
    )
}

export default CartItem
