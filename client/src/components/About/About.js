import React from 'react'

import {Typography,Grid} from '@material-ui/core'
import NewProjectInput from '../../components/Admin/Projects/NewProjectInput'
import CardProject from '../Projects/CardProject' 
import { useSelector } from 'react-redux';

function About() {
    const projects = useSelector((state) =>state.projects);
    //not using the user right now will set it up afterwards. for reference visit artworks.js file in paintings components
    const user = JSON.parse(localStorage.getItem('profile'))
    return (
        <div>
          <NewProjectInput/>
          <Grid container>

          {
              projects.map((project) =>{
                  return (
                      <Grid key={project._id} sm={12} md={4}>
                        <CardProject project={project}/>
                      </Grid>
                  )
                })
            }
            </Grid>
          
         </div>
    )
}


export default About
