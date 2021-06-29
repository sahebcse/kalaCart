import React from 'react'

import CardDesign from './CardDesign'
import {Container, Grid} from '@material-ui/core'
import {useSelector} from 'react-redux'

function Testimonial() {
    const user = JSON.parse(localStorage.getItem('profile'))
    const testimonials = useSelector((state) =>state.testimonials);
    return (
        <Container>
            {/* --> UNCOMMENT THIS WHEN YOU CREATE A FORM TO ADD TESTIMONIAL AND ACTUALLY CONNECT IT TO DATABASE <-- */}
            {/* <Grid container>
                {
                    testimonials.map((testimonial) =>{
                        return (
                            <Grid key={testimonial._id}>
                                <CardDesign testimonial={testimonial}/>
                            </Grid>
                        )
                    })
                }
            </Grid> */}
            <CardDesign/>
        </Container>
    )
}

export default Testimonial
