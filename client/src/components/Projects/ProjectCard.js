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
  

function CardProject({project}) {
    const classes=useStyles()
    const data={
        projectTitle:project.title,
        projectDescription:project.description,
        projectImage:project.photo
    }
    return ( 
        <div className="border-solid border-4 border-gray-200 max-w-md mx-auto m-3 border-opacity-400  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={project.photo} alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case Study</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{project.title}</a>
                <p className="mt-2 text-gray-500">{project.description}</p>
                </div>
            </div>

        </div>
    )
}

export default CardProject

