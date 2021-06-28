import React from 'react'
import {Card,CardHeader,CardContent,Avatar,Typography } from '@material-ui/core' 
import { makeStyles } from '@material-ui/styles'
import Image from '../../static/img/person(2).jpg'

const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth:500,
      maxHeight:300,
      position:"relative",
      display: 'flex',
      borderRadius:'40px',
      backgroundColor:"#34ebeb",

    },
    cardContent:{
        display:"flex",

    },

    body:{
        paddingTop:'10vh',
    },
    name:{
        color:"#fff",
        textAlign:"justify-end"
    },
    avatar:{
      
        height:'90px',
        width:'90px'
    },
    text:{
      display:"flex",
      flexDirection:"column"

    }
  }));
  


function CardDesign({testimonial}) {
    const classes=useStyles()
    //Not using the testimonial data yet have to set the name, desgnation and description dynamically after populationg user from backend
    const data={
       name:"Rohini Tejpal",
       designation:"Design Student at Flipkart",
       description:"racist by name and feminist by nature this person is Awesome ,i dont wanna exploid his carieer but he is also a sadist and always try to make other angry ",     
    }

    return (
        <div className={classes.body}>
            <Card className={classes.card} elevation={8} >
            <CardContent className={classes.cardContent}>
                <CardHeader avatar={<Avatar className={classes.avatar} src={Image}></Avatar>}></CardHeader>
                 <div className={classes.text}>
                    <Typography className={classes.name} variant='h4'>{data.name}</Typography>
                    <Typography variant="h5">{data.designation}</Typography>
                    <Typography >{data.description}</Typography>
                 </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardDesign
