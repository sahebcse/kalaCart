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
  


function TestimonialCard({testimonial}) {
    const classes=useStyles()
    //Not using the testimonial data yet have to set the name, desgnation and description dynamically after populationg user from backend
    console.log(testimonial)

    return (
        <div className="py-8 px-8 bg-white hover:shadow-lg hover:rotate-1 hover:border-transparent transform shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={testimonial.user.profilePic} alt="Woman's Face"></img>
            <div class="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    {testimonial.user.name}
                </p>
                <p className="text-gray-500 font-medium">
                    {testimonial.identity}
                </p>
                <p className="italic">
                    {testimonial.testimonial}
                </p>
                </div>
        </div>
    )
}

export default TestimonialCard


