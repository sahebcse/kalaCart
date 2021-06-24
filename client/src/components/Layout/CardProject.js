import React from 'react'
import {Card,CardHeader,CardContent,Avatar,Typography } from '@material-ui/core' 
import { makeStyles } from '@material-ui/styles'

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
  
  


function CardProject() {
    const classes=useStyles()
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

export default CardProject
