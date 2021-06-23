import React from 'react'
import Layout from '../Layout/Layout'
import CardDesign from '../Layout/CardDesign'
import {Container} from '@material-ui/core'
function Testimonial() {
    return (
        <Container>
         <div class="position:fixed"> <Layout/></div>
            Testimonials
            <div class="flex relative"><CardDesign/></div>
        </Container>
    )
}

export default Testimonial
