import React from 'react'
import CartItem from './cartItem'
import { useSelector } from 'react-redux'
import { Container, Grid } from '@material-ui/core'

const Order = () => {
    const orders = useSelector((state)=>state.orders)
    return (
        <Container>
            <Grid container>
                {orders.map((painting)=>{
                    return (<Grid item key={painting._id} sm={12} md={6}>
                        <CartItem painting={painting}/>
                    </Grid>)
                })} 
                
            </Grid>
        </Container>
    )
}

export default Order
