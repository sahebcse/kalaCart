import React, {useState} from 'react'
import {GoogleLogin} from 'react-google-login'
import { Grid, Typography, Container, Button, Modal, makeStyles} from '@material-ui/core'
import StartIcon from '@material-ui/icons/StarBorderSharp'
import {useDispatch} from 'react-redux'
import { login } from '../../action/auth/auth'
import {useHistory} from 'react-router-dom'

const useStyles=makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "30%",
      height: '300px',
      left: '37.5%',
      top: "25%",
      position: 'absolute',
      fontSize: '1.25vw',
      textAlign: 'center'
    },
    baseContainer: {

    },
    modalText: {
        marginBottom: '10%'
    }
  }))

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const classes=useStyles()
    const [open, setOpen]=useState(true)
    const handleClose=()=>
    {
        setOpen(false)
    }
    

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        // console.log(result)
        dispatch(login({result,token}, history));
        //window.location.reload()
       
      };
    
    const googleFailure = async () => alert('Google Sign In was unsuccessful. Try again later');
    const body=(
        <div className={classes.paper}>
            <p className={classes.modalText} >Log in using Google to be able to buy your favourite artwork!</p>
                <GoogleLogin
                    // ---> CREATE YOUR OWN GOOGLE CLIENT FROM "console.developers.google.com" AND PASTE HERE (DELETE IT BEFORE PUSHING) <---
                    clientId="845509955979-rd59hfvhufjcfnqfjnidlvm1mgqv1jkg.apps.googleusercontent.com"
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
        </div>
    )
      /*
    return (
        <Container component="main" maxWidth="xs">
            <Grid>
                <Typography variant="h3" color="primary">Login</Typography>
                <GoogleLogin
                    // ---> CREATE YOUR OWN GOOGLE CLIENT FROM "console.developers.google.com" AND PASTE HERE (DELETE IT BEFORE PUSHING) <---
                    clientId="845509955979-rd59hfvhufjcfnqfjnidlvm1mgqv1jkg.apps.googleusercontent.com"
                    render={(renderProps) => (
                    <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<startIcon />} variant="contained">
                        Google Sign In
                    </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
            </Grid>
        </Container>
    ) */

    return(
        <Container className={classes.baseContainer}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body}
            </Modal>
        </Container>
    )

    
}

export default Login
