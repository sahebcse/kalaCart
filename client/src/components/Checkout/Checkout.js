import React,{useState, useEffect} from 'react'
import {Container, Grid, Typography, Box, Button, TextField} from '@material-ui/core'
import CartItem from '../Shopping/CartItem'
import {useSelector} from 'react-redux'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import {useDispatch} from 'react-redux'
import ShopNowIcon from '@material-ui/icons/ShopTwoRounded'
import {getClientSecretKey, productOrdered, postUserAddress} from '../../action/user/user'
import {useHistory} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const Checkout = () => {
    const classes=useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const stripe = useStripe()
    const elements = useElements() 
    const shoppingCart = useSelector((state) =>state.shoppingcart)
    const userAddress = useSelector((state) => state.user.userAddress)

    const currUser = JSON.parse(localStorage.getItem('profile'))
    console.log('ky achutiyap hau ',userAddress)

    const [error,setError] = useState(null, stripe)
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")
    const [totalPrice, setTotalPrice] = useState(0);
    const [clientSecret, setClientSecret] = useState(null)
    const [address, setAddress] = useState(userAddress)
    const [newAddress, setNewAddress] = useState({addr:'', postal:'', city:'', state:'', country:''})

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
        }else{
            setError('Go and shop first faggot....')
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
            const data = {userEmail :currUser?.result.email}
            dispatch(productOrdered(data))
            history.replace('/Orders')
        })

    }
   
    const handleChange = (e)=>{
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

    const handleAddressChange = ()=>{

        if(newAddress.addr!=='' && newAddress.postal!=='' && newAddress.city!=='' && newAddress.state!=='' && newAddress.country!==''){
            setAddress([newAddress.addr, newAddress.postal, newAddress.city, newAddress.state, newAddress.country])
            dispatch(postUserAddress({userEmail: currUser?.result.email,addr:newAddress.addr,postal:newAddress.postal,city: newAddress.city, state:newAddress.state,country: newAddress.country}))
        }
        
    }

    return (
        <Container spacing={3}>
            <Box borderBottom={1}>
                <Grid className="m-4">
                    <Typography variant="h4">Address</Typography>
                    {address?
                        <Grid>
                            <Typography variant="h6">{address[0]}</Typography>
                            <Typography variant="h6">{address[1]}-{address[2]}, {address[3]}</Typography>
                            <Typography variant="h6">{address[4]}</Typography>
                        </Grid>
                       : <Button variant="outlined" color="secondary">Set Address First</Button>
                    }
                    <form className={classes.root} noValidate>
                        <TextField  label="Address" required onChange={(e)=>setNewAddress({...newAddress, addr: e.target.value})}/>
                        <TextField  label="Postal Code" required onChange={(e)=>setNewAddress({...newAddress, postal: e.target.value})}/>
                        <TextField  label="City" required onChange={(e)=>setNewAddress({...newAddress, city: e.target.value})}/>
                        <TextField  label="State" required onChange={(e)=>setNewAddress({...newAddress, state: e.target.value})}/>
                        <TextField  label="Country" required onChange={(e)=>setNewAddress({...newAddress, country: e.target.value})}/>

                    </form>
                <Button variant="contained" color="primary" onClick={handleAddressChange}>Set Address</Button>
                    
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
                            {error && <div className="text-red-600">{error}</div> }
                        </form>
                    </Grid>
                    {/* </Grid> */}
                </Grid>
            </Box>
        </Container>
    )
}

export default Checkout
