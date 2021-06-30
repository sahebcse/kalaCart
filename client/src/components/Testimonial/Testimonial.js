import React from 'react'

import TestimonialCard from './TestimonialCard'
import {Container, Grid, TextField} from '@material-ui/core'
import {useSelector} from 'react-redux'
import TestimonialForm from './TestimonialForm'

function Testimonial() {
    const user=useSelector((state)=>state.user.authData)
    const testimonials = useSelector((state) =>state.testimonials);
    console.log(testimonials)
    return (
        <div className="">
            <Container>
            <div className="grid grid-cols-2 gap-4 ">
                {
                    testimonials.map((testimonial)=>(
                        <TestimonialCard testimonial={testimonial}/>
                    ))
                }
            </div>
            
            <TestimonialForm />

            </Container>
            
        </div>
    )
}

export default Testimonial
