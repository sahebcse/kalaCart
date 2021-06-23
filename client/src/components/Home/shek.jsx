import React from 'react'
import Layout from '../Layout/Layout'
import Social from '../Layout/Social'
import {Paper,Typography} from '@material-ui/core'
import Image from '../img/cover1.jpg'


const count=1
const styles={
    paperContainer:{
        backgroundImage:`url(${Image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        Overflow:"auto"
    },
    title:{
        margin:"70px 30px 10px 0px",
        color:"black",
        textAlign:"right"
    },
    locate:{

    }

}
function Home() {
    return (
        <div style={styles.paperContainer}>
            <Layout/>
            <div >
            <Typography variant="h1" style={styles.title}>   Renzo Piano  </Typography>
            <Typography variant='h4'>Artist.Athlete.Designer</Typography>
            </div>
            <div>
                
                <Typography variant="h5">Congrats!</Typography>
                <Typography variant="h6">You are {count}th visitor of this website </Typography>
            </div>
            <Social/>
        </div>
    )
}

export default Home
