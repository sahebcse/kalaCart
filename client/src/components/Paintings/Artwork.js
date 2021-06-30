import React from 'react'
import { useSelector } from 'react-redux'
import Painting from './painting/Painting'
import {Grid} from '@material-ui/core'

//will put this component only for admin later
import CreatePainting from '../Admin/Paintings/createPainting'

function ArtWork() {
    const user = useSelector((state)=>state.user.authData)
    const paintings = useSelector((state)=>state.paintings);
    console.log(paintings) 
    return (
        <Grid container>
            <Grid xs={3} item>Space for Filter</Grid>
            <Grid xs={9} item>
                <Grid container>
                    {
                        paintings.map((painting)=>(
                            <Painting painting={painting} user={user} />
                        ))
                    }
                </Grid>

            </Grid>
        </Grid>
    )
}

export default ArtWork
