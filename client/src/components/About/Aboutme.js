import React from 'react'
import myphoto from '../../static/img/myphoto.jpg'

function Aboutme() {
    return (
        <div className="mx-40">
           <h1 className="font-serif text-2xl text-black text-extrabold text-italic"> About Me</h1>
           <div className="flex flex-horizontal"> <p className=" font-mono text-lg text-black-400 justify-items-center">
            I was born and brought up in the city of Bokaro. I grew up as a computer enthusiast, with a curiosity to discover more about computers, and machines in general. I developed love for Physics eventually, when I got exposed to its world of wonders.
            I did, I do and I will stay devoted to innovation. I believe in turning ideas into reality & deploying knowledge to build something of utility.As of now, I am pursuing B.Tech. in ECE at IIIT-Hyderabad.
            P.S : One can find me with my guitar if I lose sync with my schedule.
            </p> 
            <span className="items-center"><img src={myphoto} height="120" width="160"/></span>
            </div>
        </div>
    )
}

export default Aboutme
