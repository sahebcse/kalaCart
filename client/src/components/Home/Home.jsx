import React,{useState, useEffect} from 'react' 
import Social from '../Layout/Social'
import {Grid} from '@material-ui/core'
import Image from '../../static/img/cover1.jpg'
import { getHits, postHit } from '../../api';



function Home() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [hits, setHits]=useState('0')
  useEffect(async ()=>{
    postHit()
    const hitsData=await getHits()
    console.log(hitsData)
    setHits(hitsData.data.hits)
  }, [])
  console.log('user exits',user);
  return (
    <div className=" bg-cover bg-center " style={{
      height: '100vh',
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat'
    }}>
      <Grid container>
        <Grid item xs={6}>

        </Grid>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={4} style={{marginTop: "30px"}}>
          
          <h1 className="  font-bold focus:ring-blue-600 sm:text-7xl md:text-6xl  ">Renzo Piano </h1> 
          <p>
          <div className=" font-normal text-green-500   sm:text-5xl md:text-3xl ">
            <p className="hover:text-yellow-500 inline-block animate-fade-in-down  "> Artist </p>
            <p className="hover:text-yellow-500 mr-2 ml-2 inline-block  ">  . </p>
            <p className="hover:text-yellow-500 inline-block animate-fade-in-down">Athlete </p>
            <p className="hover:text-yellow-500 mr-2 ml-2 inline-block "> . </p>
            <p className="hover:text-yellow-500 inline-block animate-fade-in-down "> Designer </p>
          </div>
          </p>
         
        
        </Grid>

      </Grid>
      
 

      <div className="  font-medium text-1xl  text-black-600   pt-36  float-right ">
        <div className="text-center mr-28  mt-16">
          <div>Congrats</div>
          <div className="inline-block">
            You are ..
            <p className="inline-block ml-1  text-2xl text-black-700 font-bold animate-wiggle">{hits}th</p>
          </div>
          <div>visitor of this website</div>
        </div>
        <div className="row">
          <Social />
        </div>


      </div>

      
    </div>

  )
}

export default Home
