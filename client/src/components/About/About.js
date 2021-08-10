import React from 'react'
import Techstack from './Techstack'
import Aboutme from './Aboutme'

import {Typography,Grid} from '@material-ui/core'
import NewProjectInput from '../../components/Admin/Projects/NewProjectInput'
import ProjectCard from '../Projects/ProjectCard' 
import { useSelector } from 'react-redux';

function About() {
    const projects = useSelector((state) =>state.projects);
    //not using the user right now will set it up afterwards. for reference visit artworks.js file in paintings components
    const user = JSON.parse(localStorage.getItem('profile'))
    return (
        <div className="divide-y">
           <Techstack/>
           <Aboutme/>        
         <div>
          <Grid className="bg-gray-900" container>
          {
              projects.map((project) =>{
                  return (
                      <Grid key={project._id} sm={12} md={12}>
                        <ProjectCard project={project}/>
                      </Grid>
                  )
                })
            }
            </Grid>
            </div>
         </div>
    )
}


export default About
