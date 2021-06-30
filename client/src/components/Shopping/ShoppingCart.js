import React, {useEffect, useState} from 'react'
import { Container, Grid, Typography, Button, Paper} from '@material-ui/core'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import {deleteCartItems} from '../../action/user/user'
import { useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './styles.css'

const ShoppingCart = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    const shoppingCart = useSelector((state) =>state.shoppingcart);
    const [total,setTotal] = useState(0);
    useEffect(() =>{
        var newTotal = 0;
        for(let i = 0; i < shoppingCart.length; i++) {
            newTotal += parseInt(shoppingCart[i].price);
        }
        setTotal(newTotal);
    },[dispatch, shoppingCart])

    const handleCheckout=() => {
        history.push('/Checkout')
    }

    const handleDelete = () =>{
        dispatch(deleteCartItems({userEmail:user?.result.email}));
    }

    console.log(shoppingCart)
    return (
        <Container className="container">
            <Grid container>
                <Grid xs={12} md={7} align="center" className="cart">
                    <Typography variant="h4">Shopping Cart</Typography>
                    <Grid container>
                        {shoppingCart.map((painting)=>{
                            return (<Grid item key={painting._id} sm={12} md={12}>
                                <CartItem painting={painting}/>
                            </Grid>)
                        })} 
                        
                    </Grid>
                </Grid>
                <Grid xs={12} md={4} className="summary">
                    
                    <Typography align="center" variant="h4">Summary</Typography>
                    <div className="cart-details">
                        <p>Subtotal </p>
                        <p>₹ {total}</p>
                    </div>
                    <div className="cart-details">
                        <p>Numbers of Items </p>
                        <p>{shoppingCart.length}</p>
                    </div>
                    <div className="cart-details">
                        <p>GST  </p>
                        <p>₹ 0</p>
                    </div>
                    <div className="cart-total">
                        <p>Total </p>
                        <p>₹ {total}</p>
                    </div>

                    <Button  variant="outlined" spacing={3} fullWidth color="primary" onClick={handleCheckout}>Proceed to Buy</Button>
                    <Button  variant='outlined' fullWidth color="secondary" onClick={handleDelete}>Delete Cart</Button>

                </Grid>
            </Grid>
        </Container>
    )
}

export default ShoppingCart
