import React from 'react' 
import Social from '../Layout/Social'

import Image from '../../static/img/cover1.jpg'
const count = 512;


function Home() {
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log('user exits',user);
  return (
    <div className=" bg-cover bg-center " style={{
      height: '100vh',
      backgroundImage: `url(${Image})`
    }}>

      <div className="text-right container   pt-20 ">
        <h1 className="  font-bold focus:ring-blue-600 sm:text-7xl md:text-6xl  ">Renzo Piano </h1>
        <div className=" font-normal text-green-500   sm:text-5xl md:text-3xl ">
          <p className="hover:text-yellow-500 inline-block animate-fade-in-down  "> Artist </p>
          <p className="hover:text-yellow-500 mr-2 ml-2 inline-block  ">  . </p>
          <p className="hover:text-yellow-500 inline-block animate-fade-in-down">Athlete </p>
          <p className="hover:text-yellow-500 mr-2 ml-2 inline-block "> . </p>
          <p className="hover:text-yellow-500 inline-block animate-fade-in-down "> Designer </p>
        </div>
      </div>
 

      <div className="  font-medium text-1xl  text-black-600   pt-36  float-right ">
        <div className="text-center mr-28  mt-16">
          <div>Congrats</div>
          <div className="inline-block">
            You are ..
            <p className="inline-block ml-1  text-2xl text-black-700 font-bold animate-wiggle">{count}th</p>
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
