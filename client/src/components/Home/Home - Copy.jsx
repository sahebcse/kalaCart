import React from 'react'
import Layout from '../Layout/Layout'
import Social from '../Layout/Social'
import {Paper,Typography} from '@material-ui/core'
import Cover from '../img/cover1.jpg'
import Image from '../img/cover1.jpg'

const count=512;
 
 
function Home() {
    return (
      <div className=" bg-cover bg-center " style={{ 
        height: '100vh',
        backgroundImage: `url("http://squareone.blog/wp-content/uploads/2018/04/Renzo-Piano.jpg")` 
      }}>
        <Layout/>
        
         <h1 className="text-right font-bold text-8xl mr-40 mt-40 ">Renzo Piano </h1>
         <div className="text-right font-medium text-4xl mr-80 text-green-700   ">
           <p className="hover:text-blue-500">Artist</p>
           <p>.</p>
           <p>Athlete</p>
           <p>.</p>
           <p>Designer</p>
         </div> 

         <div className=" justify-center	  font-medium text-4xl mr-80 text-blue-700   ">
             <h5>Congrats</h5>        
          <h6>You are {count}th </h6> 
          <p>visitor of this website</p> 
         </div>
         
        <Social/>
      </div>      
                 
    )
}

export default Home
