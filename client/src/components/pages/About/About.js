import React from 'react'
import Navbar from '../../Layout/Navbar'

import {Typography} from '@material-ui/core'
import NewProjectInput from '../../Layout/NewProjectInput'
import CardProject from '../../Layout/CardProject' 

function About() {
    return (
        <div>
            <Navbar />
          <NewProjectInput/>
          <CardProject/>
         </div>
    )
}


export default About
