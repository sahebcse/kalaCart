import React from 'react';

import T1 from '../../static/img/TechIcon/T1.png'
import T2 from '../../static/img/TechIcon/T2.png'
import T3 from '../../static/img/TechIcon/T3.jpg'
import T4 from '../../static/img/TechIcon/T4.png'
import T5 from '../../static/img/TechIcon/T5.png'
import T6 from '../../static/img/TechIcon/T6.png'




function Techstack() {

    const images=[T1,T2,T3,T4,T5,T6];
    
    return (
        <div className="justify-items-center mx-40">
        <h1 className=" font-serif text-2xl text-black text-extrabold text-italic">TechStack Used</h1>
        <div className="flex flex-horizontal m-2 p-2">
        {images.map((image)=>
            (<img className="object-fill m-2 p-2 transition duration-500 ease-in-out bg-blue-100 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..." src={image} height='80' width='120' alt=" "/>)
        )}
        </div>
        </div>
    )

}

export default Techstack
