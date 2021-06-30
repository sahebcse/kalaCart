import React from 'react'
import {Container, Grid, Typography, Box} from '@material-ui/core'
import CartItem from '../Shopping/CartItem'
import ProjectCard from '../Projects/ProjectCard'
import {useSelector} from 'react-redux'

const Checkout = () => {
    const shoppingCart = useSelector((state) =>state.shoppingcart)
    return (
        <Container>
            <Box borderBottom={1}>
                <Grid>
                    <Typography variant="h4">Address</Typography>
                    
                </Grid>
            </Box>
            <Box borderBottom={1}>
                <Grid>
                    <Typography variant="h4">Cart</Typography>
                    <Grid container>
                        {shoppingCart.map((painting)=>{
                            return (<Grid item key={painting._id} sm={12} md={6}>
                                <CartItem painting={painting}/>
                            </Grid>)
                        })} 
                        
                    </Grid>
                </Grid>
            </Box>
            <Box borderBottom={1}>
                <Grid>
                    <Typography variant="h4">Payment Gateway</Typography>
                </Grid>
            </Box>
        </Container>
    )
}

export default Checkout
