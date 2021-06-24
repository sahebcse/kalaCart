import React from 'react'
import {Card,CardHeader,CardContent,Avatar,Typography } from '@material-ui/core' 
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth:500,
      maxHeight:300,
      paddingRight:12,
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
        display:"flex",
        flexDirection:"row"
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
    },
    description:{
        textWrap:"true"
    }
  }));
  

function CardProject() {
    const classes=useStyles()
    const data={
        projectTitle:"Blind Date",
        projectDescription:"lorem oisiaofjodsjoijelkmlkofempooianoineoifoinoianeoinionaoindnfoidnonsoieromoinoinfoijipenoin"
    }
    return ( 
         <div className={classes.body}>
            <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <CardHeader avatar={<Avatar className={classes.avatar} >{data.projectTitle[0].toUpperCase()}</Avatar>}></CardHeader>
                <div className={classes.text}>
                    <Typography className={classes.name} variant='h4'>{data.projectTitle}</Typography>
                    <Typography className={classes.description}>{data.projectDescription}</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardProject
