import React,{useState, useEffect} from 'react'
import {Container, Grid, Typography, Box, Button} from '@material-ui/core'
import CartItem from '../Shopping/CartItem'
import ProjectCard from '../Projects/ProjectCard'
import {useSelector} from 'react-redux'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import {useDispatch} from 'react-redux'
import ShopNowIcon from '@material-ui/icons/ShopTwoRounded'
import {getClientSecretKey} from '../../action/user/user'
import {useHistory} from 'react-router-dom'

const Checkout = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const stripe = useStripe()
    const elements = useElements() 
    const shoppingCart = useSelector((state) =>state.shoppingcart)

    const [error,setError] = useState(null, stripe)
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")
    const [totalPrice, setTotalPrice] = useState(0);
    const [clientSecret, setClientSecret] = useState(null)

    useEffect(() =>{
        var newTotal = 0;
        for(let i = 0; i < shoppingCart.length; i++) {
            newTotal += parseInt(shoppingCart[i].price);
        }
        setTotalPrice(newTotal);

    },[dispatch, shoppingCart])

    useEffect(() =>{
        const getClientSecret = async ()=>{
            const data = await getClientSecretKey({totalPrice : totalPrice*100});
            setClientSecret(data.clientSecret);
        }

        if(totalPrice>1){
            getClientSecret()
        }
    },[shoppingCart,totalPrice])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log('submitting.....')
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method : {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true)
            setError(null)
            setProcessing(false);

            history.replace('/Orders')
        })

    }
    console.log('cient secret....',clientSecret)
    const handleChange = (e)=>{
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

    return (
        <Container>
            <Box borderBottom={1}>
                <Grid className="m-4">
                    <Typography variant="h4">Address</Typography>
                    
                </Grid>
            </Box>
            <Box borderBottom={1}>
                <Grid  className="m-4">
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
                <Grid container className="m-4">
                    <Typography variant="h4">Payment Gateway</Typography>
                    {/* <Grid align="center"> */}
                    <Grid sm={12} md={6} align="center" className="mt-4 ml-10">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <Typography variant='h6'>Order Total : ₹ {totalPrice}</Typography>
                            <Button type="submit" disabled={processing || disabled || succeeded}>
                                <ShopNowIcon /><span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </Button>
                            {error && <div>{error}</div> }
                        </form>
                    </Grid>
                    {/* </Grid> */}
                </Grid>
            </Box>
        </Container>
    )
}

export default Checkout
