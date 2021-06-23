import React from 'react'
import {Card,CardHeader,CardContent,Avatar,Typography } from '@material-ui/core' 
import { makeStyles } from '@material-ui/styles'
import Image from '../img/person(2).jpg'

const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth:500,
      maxHeight:300,
      position:"relative",
      display: 'flex',
      flexDirection: 'column',
      borderRadius:'40px',
      backgroundColor:"#36a2c9"
    },
    cardContent: {
      flexGrow: 1,
    },
    body:{
        paddingTop:'10vh',
    },
    name:{
        color:"#fff",
        textAlign:"justify-end"
    },
    avatar:{
        height:'80px',
        width:'80px'
    },
  }));
  


function CardDesign() {
    const classes=useStyles()
    const data={
       name:"Rohini Tejpal",
       designation:"Design Student at Flipkart",
       description:"racist by name and feminist by nature this person is Awesome ,i dont wanna exploid his carieer but he is also a sadist and always try to make other angry ",     
    }

    return (
        <div className={classes.body}>
            <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <CardHeader avatar={<Avatar className={classes.avatar} src={Image}></Avatar>}></CardHeader>
                    <Typography className={classes.name} variant='h4'>{data.name}</Typography>
                    <Typography variant="h5">{data.designation}</Typography>
                    <Typography >{data.description}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardDesign
