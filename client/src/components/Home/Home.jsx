import React from 'react'
import Layout from '../Layout/Layout'
import Social from '../Layout/Social'
import { Paper, Typography } from '@material-ui/core'
import Cover from '../img/cover1.jpg'
import Image from '../img/cover1.jpg'

const count = 512;


function Home() {
  return (
    <div className=" bg-cover bg-center " style={{
      height: '100vh',
      backgroundImage: `url("http://squareone.blog/wp-content/uploads/2018/04/Renzo-Piano.jpg")`
    }}>
      <Layout />


      <div className="text-right container   pt-44 ">
        <h1 className="  font-bold focus:ring-blue-600 sm:text-7xl md:text-8xl  ">Renzo Piano </h1>
        <div className=" font-medium text-green-700   sm:text-5xl md:text-4xl ">
          <p className="hover:text-yellow-500 inline-block  "> Artist </p>
          <p className="hover:text-yellow-500 mr-6 ml-6 inline-block ">  . </p>
          <p className="hover:text-yellow-500 inline-block">Athlete </p>
          <p className="hover:text-yellow-500 mr-6 ml-6 inline-block "> . </p>
          <p className="hover:text-yellow-500 inline-block  "> Designer </p>
        </div>
      </div>
 

      <div className="  font-normal text-1xl  text-blue-700   pt-36  float-right ">
        <div className="text-center mr-20 ">
          <div>Congrats</div>
          <div className="inline-block">
            You are
            <p className="inline-block ml-4  text-2xl text-green-700 font-bold">{count}th</p>
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
