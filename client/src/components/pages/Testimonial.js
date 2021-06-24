import React from 'react'
import Navbar from '../Layout/Navbar'

import CardDesign from '../Layout/CardDesign'
import {Container} from '@material-ui/core'
function Testimonial() {
    return (
        <Container>
         <div class="position:fixed"><Navbar />  </div>
            Testimonials
            <div class="flex relative"><CardDesign/></div>
        </Container>
    )
}

export default Testimonial
