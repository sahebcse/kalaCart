import React from 'react'
import Layout from '../Layout/Layout'
import {Typography} from '@material-ui/core'
import NewProjectInput from '../Layout/NewProjectInput'

function About() {
    return (
        <div>
         <Layout/>
          <Typography variant ="h1">  About page </Typography>
          <NewProjectInput/>
         </div>
    )
}


export default About
