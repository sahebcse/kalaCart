import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { Grid, Typography, Container, Button} from '@material-ui/core'
import StartIcon from '@material-ui/icons/StarBorderSharp'
import {useDispatch} from 'react-redux'
import { login } from '../../action/auth/auth'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        // console.log(result)
        dispatch(login({result,token}, history));
       
      };
    
    const googleFailure = async () => alert('Google Sign In was unsuccessful. Try again later');

    return (
        <Container component="main" maxWidth="xs">
            <Grid>
                <Typography variant="h3" color="primary">Login</Typography>
                <GoogleLogin
                    // ---> CREATE YOUR OWN GOOGLE CLIENT FROM "console.developers.google.com" AND PASTE HERE (DELETE IT BEFORE PUSHING) <---
                    clientId="450652144538-1ovqbm1gbtjub49nlk0tdg71p32g5u6s.apps.googleusercontent.com"
                    render={(renderProps) => (
                    <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<StartIcon />} variant="contained">
                        Google Sign In
                    </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
            </Grid>
        </Container>
    )
}

export default Login
